/***************** ESCENE A **/
var SceneA = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function SceneA ()
    {
        //console.log('Inicializando sceneA')
        Phaser.Scene.call(this, { key: 'sceneA' });
    },
    preload: preoloadA,
    create: createA,
});

function preoloadA()
{    
    //console.log('Cargando sceneA')
    this.load.image('sky', './assets/fondo.jpg');
    this.load.image('producto', './assets/inicio/producto.png');
    this.load.image('logo', './assets/foto.png');
    this.load.image('red', './assets/blue.png');
    this.load.image('fullscreen', './assets/fullscreen.png');

    this.load.audio("audio_intro", "./assets/intro.mp3");
}

function createA()
{
    //console.log('Creando sceneA');
    this.buttonInicio = this.add.image(fondopix, fondopiy, 'sky').setInteractive();
    this.buttonFs = this.add.image(gw - 50, 75, 'fullscreen').setInteractive();
    //this.add.image(fondopix, fondopiy, 'producto');

    //this.add.text(310, 50, 'Bienvenido', { font: '80px Gotham', fill: '#ffffff' });
    this.add.text(gw / 3, 500, 'Toca la pantalla para iniciar', { font: '25px Gotham', fill: '#ffffff' });
    
    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(0, 400);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    //if (intentos == 0) {
    this.buttonInicio.on('pointerdown', function(event){
        //console.log('Boton inicio presionado...');
        //game = new Phaser.Game(config);            
        this.scene.start('sceneC');        
    }, this);

    this.buttonFs.on('pointerdown', function(event){
        //console.log('Boton fs presionado...');
        if (this.scale.isFullscreen){
            this.scale.stopFullscreen();
        }
        else {
            this.scale.startFullscreen();
        }
        //window['game']['canvas'][game.device.fullscreen.request]();
              
    }, this);
    // }
    // else{
    //     console.log('Siguiente intento...');
    //     this.scene.restart();
    //     intentos--;

    //     //game.scene.start('sceneA');
    // }
    // this.input.once('pointerup', function (e) {
    //     //e.preventDefault();
    //     console.log('Tecla de inicio presionada');        
    //     //this.input.reset(true);
    //     this.scene.start('sceneD');        
    // }, this);

    // audio_intro = this.sound.add("audio_intro");
    // audio_intro.play({
    //     loop: true
    // });
}