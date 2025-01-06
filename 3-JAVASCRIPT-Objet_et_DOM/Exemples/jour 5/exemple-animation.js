"use strict";

class MotionStatus {
  constructor() {
    this.left = false;
    this.leftIntervalID = 0;
    this.top = false;
    this.topIntervalID = 0;
    this.right = false;
    this.rightIntervalID = 0;
    this.bottom = false;
    this.bottomIntervalID = 0;
  }
}

class AnimationStatus {
  constructor() {
    this.left = false;
    this.leftIntervalID = 0;
    this.top = false;
    this.topIntervalID = 0;
    this.right = false;
    this.rightIntervalID = 0;
    this.bottom = false;
    this.bottomIntervalID = 0;
  }
}

class MaskSize {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
}

class SpritePosition {
  constructor(t, l) {
    this.top = t;
    this.left = l;
  }
}

class Interpolation {
  constructor(w, h, t, l) {
    this.masque = new MaskSize(w, h);
    this.sprite = new SpritePosition(t, l);
  }
}

/*const spritePosition = {
  walking: [
    {
      masque: {
        width: "48px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-4px",
      },
    },
    {
      masque: {
        width: "40px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-55px",
      },
    },
    {
      masque: {
        width: "37px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-104px",
      },
    },
    {
      masque: {
        width: "36px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-235px",
      },
    },
    {
      masque: {
        width: "39px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-144px",
      },
    },
    {
      masque: {
        width: "45px",
        height: "82px",
      },
      sprite: {
        top: "-4px",
        left: "-185px",
      },
    },
  ],
};*/

class Game {
  constructor() {
    this.motionStatus = new MotionStatus();
    this.animationStatus = new AnimationStatus();
    this.spritePosition = {
      walking: [
        new Interpolation("48px", "82px", "-4px", "-4px"),
        new Interpolation("40px", "82px", "-4px", "-55px"),
        new Interpolation("37px", "82px", "-4px", "-104px"),
        new Interpolation("36px", "82px", "-4px", "-235px"),
        new Interpolation("39px", "82px", "-4px", "-144px"),
        new Interpolation("45px", "82px", "-4px", "-185px"),
      ],
    };
  }

  initializeAvatar() {
    this.avatar.style.top = "0px";
    this.avatar.style.left = "0px";
    this.avatar.style.width = "60px";
    this.avatar.style.height = "81px";
    this.avatar.style.position = "absolute";
  }

  initializeMask() {
    this.masque.style.width = "50px";
    this.masque.style.height = "81px";
    this.masque.style.overflow = "hidden";
    this.masque.style.position = "relative";
    this.masque.style.border = "1px solid pink";
  }

  initializeSprite() {
    this.sprite.style.top = "-4px";
    this.sprite.style.left = "-4px";
    this.sprite.style.width = "275px";
    this.sprite.style.position = "absolute";
  }

  move(direction) {
    let increment = 1;
    switch (direction) {
      case "left":
        increment = -1;
        break;
    }
    this.avatar.style.left =
      parseFloat(this.avatar.style.left) + increment + "px";
  }

  walkingAnimation(direction) {
    switch (direction) {
      case "left":
        this.masque.style.transform = "scaleX(-1)";
        break;
      case "right":
        this.masque.style.transform = "scaleX(1)";
        break;
    }
    let i = 0;
    const walkingAnimationIdentifier = window.setInterval(() => {
      if (i >= this.spritePosition.walking.length) {
        i = 0;
      }
      this.masque.style.width = this.spritePosition.walking[i].masque.width;
      this.masque.style.height = this.spritePosition.walking[i].masque.height;
      this.sprite.style.left = this.spritePosition.walking[i].sprite.left;
      this.sprite.style.top = this.spritePosition.walking[i].sprite.top;
      if (i < this.spritePosition.walking.length) {
        i++;
      }
    }, 150);
    return walkingAnimationIdentifier;
  }

  initialize() {
    window.addEventListener("DOMContentLoaded", () => {
      this.avatar = window.document.querySelector("#avatar");
      this.masque = window.document.querySelector("#masque");
      this.sprite = window.document.querySelector("#sprite");

      this.initializeMask();
      this.initializeSprite();
      this.initializeAvatar();

      window.addEventListener("keydown", (keyboardEvent) => {
        switch (keyboardEvent.key) {
          case "ArrowLeft":
            if (!this.motionStatus.left) {
              this.motionStatus.left = true;
              window.clearInterval(this.motionStatus.rightIntervalID);
              this.motionStatus.right = false;
              window.clearInterval(this.animationStatus.rightIntervalID);
              this.animationStatus.leftIntervalID =
                this.walkingAnimation("left");
              this.motionStatus.leftIntervalID = window.setInterval(() => {
                this.move("left");
              }, 25);
            }
            break;
          case "ArrowRight":
            if (!this.motionStatus.right) {
              this.motionStatus.right = true;
              window.clearInterval(this.motionStatus.leftIntervalID);
              this.motionStatus.left = false;
              window.clearInterval(this.animationStatus.leftIntervalID);
              this.animationStatus.rightIntervalID =
                this.walkingAnimation("right");
              this.motionStatus.rightIntervalID = window.setInterval(() => {
                this.move("right");
              }, 25);
            }
            break;
        }
      });
      window.addEventListener("keyup", (keyboardEvent) => {
        switch (keyboardEvent.key) {
          case "ArrowLeft":
            window.clearInterval(this.motionStatus.leftIntervalID);
            window.clearInterval(this.animationStatus.leftIntervalID);
            this.motionStatus.left = false;
            break;
          case "ArrowRight":
            window.clearInterval(this.motionStatus.rightIntervalID);
            window.clearInterval(this.animationStatus.rightIntervalID);
            this.motionStatus.right = false;
            break;
        }
      });
    });
  }
}

const game = new Game();
game.initialize();
