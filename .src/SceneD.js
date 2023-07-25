/***************** ESCENE D */
var SceneD = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneD' });
    },   
    preload: preloadD,
    create: createD,
    update: updateD
});

function preloadD()
{
    this.load.image('sky', './assets/inicio/Fondo-01.png');
    // this.load.image('logo', './assets/instrucciones/logo.png');
    // this.load.image('texto', './assets/instrucciones/texto.png');
    //this.load.image('contador', './assets/fin/contador.png');
    this.load.image('botonFin', './assets/fin/boton.png');
    this.load.image('picapica', './assets/fin/picapica.png');
    // this.load.image('red', './assets/blue.p
    
    this.load.audio("audio_fin", "./assets/fin.mp3");
    //this.load.audio("audio_fin1", "./assets/fin1.mp3");
    this.load.audio("audio_gameover", "./assets/gameover.mp3");
}

function createD()
{
    this.add.image(fondopix, fondopiy, 'sky');    
    //this.add.image(fondopix, 200, 'contador');
    picapica = this.add.image(fondopix, 0, 'picapica');
    //this.add.image(fondopix, fondopiy + 400, 'boton');

    audio_fin = this.sound.add("audio_fin");
    //audio_fin1 = this.sound.add("audio_fin1");
    gameover = this.sound.add("audio_gameover");

    this.add.text(gw / 2 - 110, 100, 'Atrapaste', { font: '50px Gotham', fill: '#ffffff' });
    this.add.text(gw / 2 - 40, 150, productos, { font: '100px Gotham', fill: '#1b1464' });
    this.add.text(gw / 2 - 80, 250, 'Princesas', { font: '50px Gotham', fill: '#ffffff' });

    var textoFin = '';

    if (productos >= meta   ){  
        picapica.setVisible(true);      
        audio_fin.play({
            loop: false
        });
        textoFin = '                 ¡GANASTE! \n';
    }
    else {
        picapica.setVisible(false);
        gameover.play({
            loop: false
        });
        textoFin = '    GRACIAS POR PARTICIPAR \n';
    }

    this.add.text(200, 375, textoFin, { font: '40px Gotham', fill: '#ffffff' });
    this.add.text(fondopix - 85, fondopiy + 120, 'Inténtalo de Nuevo', { font: '20px Gotham', fill: '#ffffff' });
    this.buttonFin = this.add.image(fondopix, fondopiy + 200, 'botonFin').setInteractive();
    // this.button.on('pointerdown', function(){
    //     console.log('Boton intentar de nuevo presionado...');
    //     //game = new Phaser.Game(config);
    //     game.scene.start('sceneA');
    //   });

    this.buttonFin.on('pointerdown', function(event){
        //console.log('Boton intentar de nuevo presionado...');
        //intentos++;
        game.destroy(true);
        game = new Phaser.Game(config);
        //game.state.restart();
        //this.scene.start('sceneA');
      }, this);

    
    //   this.buttonFin.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     console.log('Boton intentar de nuevo presionado...');
    //     //game = new Phaser.Game(config);
    //     this.scene.restart();
    //     this.scene.start('sceneA'); 
    //   });
}

function updateD (){

    if (picapica.y > gh) {
        picapica.y = 0;
    }
    else {
        picapica.y += 2;
    }

    countercarreta++;
    picapica.x = picapica.x + 0.5 * flagcarreta;
    if ((countercarreta % 50) == 0) {        
        flagcarreta = flagcarreta * -1;
    }
}