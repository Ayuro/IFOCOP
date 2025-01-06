var turboLaser = {
    weaponName: "Turbo Laser",
    damage: 15,
};

var macroCanon = {
    weaponName: "Macro canon",
    damage: 20,
    armorPen: 10,
};

var lightLance = {
    weaponName: "Light lance",
    damage: 30,
    armorPen: 20,
};

var destroyer = {
    typeName: "Destroyer",
    hp: 125,
    armor: 100,
    weapons: lightLance,
};

var battleBarge = {
    typename: "Battle Barge",
    hp: 200,
    armor: 120,
    weapons: macroCanon,
};

var vaisseau0 = {
    name: "Eiseinhorn",
    type: destroyer,
    hp: destroyer.hp,
    status: 'flying',
};

var vaisseau1 = {
    name: "Vengfull Spirit",
    type: battleBarge,
    hp: battleBarge.hp,
    status: 'flying',
};

function fire(shooter, target) {
    var pen;
    if (target.status == 'flying') {
        console.log('The ' + shooter.name + ' is firing with: ' + shooter.type.weapons.weaponName + '!');
        pen = (target.type.armor - shooter.type.weapons.armorPen) / 10;
        target.hp = target.hp - (shooter.type.weapons.damage - pen);
        console.log('We did ' + (shooter.type.weapons.damage - pen) + ' damages. ' + target.hp + 'HP left to the target: ' + target.name);
        if (target.hp <= 0) {
            console.log('The ' + target.name + ' has been destroyed!');
            target.status = 'destroyed';
        }
    } else {
        console.log('The ' + target.name + ' is no more.');
    }
};
