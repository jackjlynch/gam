let game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

function preload() {
  game.load.image('background', 'assets/background.png');
}

function create() {
  game.add.sprite(0, 0, 'background');
}

function update() {

}
