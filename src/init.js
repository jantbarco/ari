/************CONFIG GAME */
var config = {
    //width: gw,
    //height: gh,
    parent: "container",
    backgroundColor: '#392542',
    type: Phaser.AUTO,
    scene: [ SceneA, SceneB, SceneC, SceneGame, SceneD ],        
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x:500
            }
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     parent: 'phaser-example',
    //     autoCenter: Phaser.Scale.CENTER_BOTH,
    //     width: gw,
    //     height: gh
    // },
}
var game = new Phaser.Game(config);