// OptionsScene.js

class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OptionsScene' });
    }

    preload() {
        // Load any assets needed for the options menu if necessary
    }

    create() {
        console.log('Options menu displayed'); // Debugging message
    
        // Add title text (do not make it interactive)
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 150, 'Options', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5);
    
        // Add main volume label (ensure it's not interactive)
        const volumeLabel = this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, 'Main Volume', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        console.log('Volume label added'); // Debugging message
    
        // Load the saved volume setting
        const savedVolume = localStorage.getItem('mainVolume') * 100 || 50;
    
        // Create volume slider
        const sliderHTML = `
            <input id="volumeSlider" type="range" min="0" max="200" value="${savedVolume}" style="
                width: 300px;
                -webkit-appearance: none;
                appearance: none;
                height: 10px;
                background: #f39c12;
                outline: none;
                opacity: 0.7;
                transition: opacity .2s;
            " />
            <style>
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    cursor: pointer;
                }
                input[type=range]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    cursor: pointer;
                }
            </style>
        `;
        const volumeSlider = this.add.dom(this.scale.width / 2, this.scale.height / 2).createFromHTML(sliderHTML);
        console.log('Volume slider added'); // Debugging message
    
        volumeSlider.addListener('change');
        volumeSlider.on('change', () => {
            const volume = document.getElementById('volumeSlider').value;
            const backgroundMusic = this.sound.get('backgroundMusic');
            if (backgroundMusic) {
                backgroundMusic.setVolume(volume/100);
            }
            // Save the volume setting
            localStorage.setItem('mainVolume', volume / 100);
        });
    
        // Add return button
        const returnButton = this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, 'Return', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();
        console.log('Return button added'); // Debugging message
    
        returnButton.on('pointerdown', () => {
            console.log('Return button clicked'); // Debugging message
            volumeSlider.destroy(); // Remove the slider
            this.scene.start('StartMenu'); // Switch back to the StartMenu scene
        });
    
        returnButton.on('pointerover', () => {
            returnButton.setStyle({ fill: '#f39c12' });
        });
    
        returnButton.on('pointerout', () => {
            returnButton.setStyle({ fill: '#fff' });
        });
    }
}

export default OptionsScene;
