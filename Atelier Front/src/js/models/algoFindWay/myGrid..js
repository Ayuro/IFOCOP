import MyNode from "./myNodes.js";

export default class MyGrid {
    constructor(listSquare, size) {
        this.size = size;
        this.listSquare = listSquare;
    }

    getPath (origin, destination) {
        let path = Array();
        let hierarchicPath = this.findPath(origin, destination);
        while (hierarchicPath != null) {
            path.push(hierarchicPath.square);
            hierarchicPath = hierarchicPath.parent;
        }
        return path.reverse();
    }

    findPath(origin, destination) {
        origin = new MyNode(origin);
        destination = new MyNode(destination);
        origin.g = 0;
        origin.f = 0;

        this.openCel = [origin];
        this.closeCel = [];
        do{
            let bestNode = this.getBestNode();
            this.openCel = this.openCel.filter(node => node.position.x != bestNode.position.x || node.position.y != bestNode.position.y);
            let checkList = this.getChildNode(bestNode, destination);

            for(let checkNode of checkList) {
                if(!checkNode.isBlocked) {
                    if(checkNode.position.x == destination.position.x && checkNode.position.y == destination.position.y)
                        return checkNode;
                    if(!this.openCel.some(node => checkNode.position.x == node.position.x && checkNode.position.y == node.position.y && node.position.f < checkNode.position.f) && !this.closeCel.some(node => checkNode.position.x == node.position.x && checkNode.position.y == node.position.y)) {
                        this.openCel.push(checkNode);
                    }
                }
            }
            this.closeCel.push(bestNode);
        }while(this.openCel.length != 0)
        return null;
    }

    getBestNode() {
        let bestNode = null;
        for (let node of this.openCel) {
            if (bestNode == null) {
                bestNode = node;
            }else if(node.f < bestNode.f) {
                bestNode = node;
            }
        }
        return bestNode;
    }

    getChildNode(parent, destination) {
        let checkList = [];
        if (parent.position.x > 0) {
            let nodeLeft = new MyNode(this.listSquare.find(mySquare => mySquare.position.x == parent.position.x - 1 && mySquare.position.y == parent.position.y))
            nodeLeft.heuristic(parent, destination);
            checkList.push(nodeLeft);
        }
        if (parent.position.x < this.size.width - 1) {
            let nodeRight = new MyNode(this.listSquare.find(mySquare => mySquare.position.x == parent.position.x + 1 && mySquare.position.y == parent.position.y))
            nodeRight.heuristic(parent, destination);
            checkList.push(nodeRight);
        }
        if (parent.position.y > 0) {
            let nodeTop = new MyNode(this.listSquare.find(mySquare => mySquare.position.y == parent.position.y - 1 && mySquare.position.x == parent.position.x))
            nodeTop.heuristic(parent, destination);
            checkList.push(nodeTop);
        }
        if (parent.position.y < this.size.height - 1) {
            let nodeBot = new MyNode(this.listSquare.find(mySquare => mySquare.position.y == parent.position.y + 1 && mySquare.position.x == parent.position.x))
            nodeBot.heuristic(parent, destination);
            checkList.push(nodeBot);
        }

        return checkList;
    }
}