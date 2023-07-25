/***************** ESCENE B */

var SceneB = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
    },   
    preload: preloadB,
    create: createB
});

function preloadB()
{
    this.load.image('sky', './assets/instrucciones/Fondo-01.png');
    this.load.image('logo', './assets/instrucciones/logo.png');
    //this.load.image('texto', './assets/instrucciones/texto.png');
    this.load.image('productob', './assets/instrucciones/productos.png');
    this.load.image('boton', './assets/instrucciones/boton.png');
    this.load.image('red', './assets/blue.png');
}

function createB()
{
    //console.log('Creando sceneB');
    this.add.image(fondopix, fondopiy, 'sky');
    this.add.image(fondopix, fondopiy - 100, 'productob');
    //this.add.image(fondopix, fondopiy + 100, 'texto');
    this.add.text(170, fondopiy, 'Selecciona todos los productos Nestlé que encuentres \n               en la góndola para ahorrar en grande', { font: '25px Gotham', fill: '#ffffff' });

    this.add.image(fondopix, 100, 'logo');    
    this.button =this.add.image(fondopix, fondopiy + 170, 'boton').setInteractive();
    
    this.button.on('pointerdown', function(event){
        audio_intro.stop();
        //console.log('Boton iniciar presionado...');
        this.scene.start('sceneC');
      }, this);

    // textInicio = this.add.text(gw / 4, 200, '', { font: '100px Gotham', fill: '#ffffff' });
    // textInicio.setText('Toca la pantalla para iniciar');

    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    //var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    //emitter.startFollow(logo);
}