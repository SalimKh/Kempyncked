// game.js
import GameTitle from './GameTitle.js';
import StartMenu from './StartMenu.js';
import MainScene from './MainScene.js';
import OptionsScene from './OptionsScene.js';

// Create the main game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [GameTitle, StartMenu, MainScene, OptionsScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    parent: 'game-container',
    dom: {
        createContainer: true
    }
};

// Initialize the Phaser game instance
const game = new Phaser.Game(config);

// Function to resize the game dynamically
function resizeGame() {
    const canvas = game.canvas;
    const width = window.innerWidth;
    const height = window.innerHeight - document.getElementById('navbar').offsetHeight;
    const aspectRatio = game.config.width / game.config.height;

    if (width / height < aspectRatio) {
        canvas.style.width = width + 'px';
        canvas.style.height = (width / aspectRatio) + 'px';
    } else {
        canvas.style.width = (height * aspectRatio) + 'px';
        canvas.style.height = height + 'px';
    }
}

// Listen for resize events
window.addEventListener('resize', resizeGame);
resizeGame();
