// Start Menu JS
export default class GameTitle extends Phaser.Scene {
    constructor() {
        super({ key: 'GameTitle' });
    }

    preload() {
        this.load.audio('backgroundMusic', '../../ressources/revolution/music/mainMenu.mp3');
    }

    create() {
        // Load the saved volume setting
        const savedVolume = localStorage.getItem('mainVolume') || 0.5;

        // Play the background music if it's not already playing
        if (!this.sound.get('backgroundMusic')) {
            const backgroundMusic = this.sound.add('backgroundMusic', { loop: true, volume: savedVolume });
            backgroundMusic.play();
        }
        
        // Add title text
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, 'Homépi Révolution', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);

        // Add start button text
        const startButton = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Start Game', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        // Set up start button interaction
        startButton.on('pointerdown', () => {
            startButton.destroy();
            this.scene.start('StartMenu'); // Switch back to the StartMenu scene
        });

        startButton.on('pointerover', () => {
            startButton.setStyle({ fill: '#f39c12' });
        });

        startButton.on('pointerout', () => {
            startButton.setStyle({ fill: '#fff' });
        });

    }

}
