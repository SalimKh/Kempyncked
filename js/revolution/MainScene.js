// MainScene.js

class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        // Load any assets needed for your game here
    }

    create() {
        // Add your game logic and objects here
        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Started!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
    }

    update() {
        // Update game objects and logic here
    }
}

export default MainScene;
