// Start Menu JS
export default class StartMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'StartMenu' });
    }

    create() {
        this.children.removeAll(); // Clear any existing children

        const options = ['New Game', 'Load Game', 'Options'];
        const startY = this.scale.height / 2 - 50;

        options.forEach((option, index) => {
            const menuOption = this.add.text(this.scale.width / 2, startY + (index * 50), option, { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();

            menuOption.on('pointerdown', () => {
                if (option === 'New Game') {
                    this.scene.start('MainScene');
                } else if (option === 'Load Game') {
                    console.log('Load Game option selected');
                } else if (option === 'Options') {
                    this.scene.start('OptionsScene');
                }
            });

            menuOption.on('pointerover', () => {
                menuOption.setStyle({ fill: '#f39c12' });
            });

            menuOption.on('pointerout', () => {
                menuOption.setStyle({ fill: '#fff' });
            });
        });
    }

      
}
