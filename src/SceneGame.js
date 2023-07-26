/***************** ESCENE GAME */
var SceneGame = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function ()
    {
        Phaser.Scene.call(this, { key: 'sceneGame' });
    }, 
    preload: preload,
    create: create,
    update: update
});

function preload(){
    this.load.image("fondo", "./assets/fondo.jpg");
    this.load.image("carreta", "./assets/carreta.png");
    //this.load.image("alcancilla", "./assets/COCHINITO.png");
    this.load.image("botonB", "./assets/boton.png");

    CargarImagenes(this);
    
    this.load.audio("audio_fondo", "./assets/fondo.mp3");
    this.load.audio("audio_inicio", "./assets/iniciomario.mp3");
    this.load.audio("audio_moneda", "./assets/coin.mp3");
    // this.load.audio("audio_fin", "./assets/finmario.mp3");
    // this.load.audio("audio_gameover", "./assets/gameover.mp3");

    //this.input.maxPointers = 1;
}

function create(){
    //console.log("Creando esceneGame...")    
    //escena juego
    this.fondo = this.add.image(fondopix, fondopiy, "fondo");    
    //this.carreta = this.add.image(carretapix, carretapiy, "carreta");
    //this.alcancilla = this.add.image(alcancillapix, alcancillapiy, "alcancilla");

    CrearProductos(this);

    //this.carreta.setDepth(1);
    
    //audio
    audio_inicio = this.sound.add("audio_inicio");
    audio_inicio.play({
        loop: false
    });

    //audio
    audio_fondo = this.sound.add("audio_fondo");
    audio_fondo.play({
        loop: true
    });
    
    audio_moneda = this.sound.add("audio_moneda");
    // audio_fin = this.sound.add("audio_fin");
    // gameover = this.sound.add("audio_gameover");

    //habilitar click
    this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);

    this.add.text(5, gh - 140, 'Regresar', { font: '20px Gotham', fill: '#ffffff' });
    this.buttonBack =this.add.image(0 + 50, gh - 70, "botonB").setInteractive();
    
    this.buttonBack.on('pointerdown', function(event){
        console.log('Boton regresar...');
        //this.scene.start('sceneB');
        game.destroy(true);
        game = new Phaser.Game(config);
      }, this);

    infoTiempo = this.add.text(gw * .3, gh -160, '', { font: '30px Gotham', fill: '#ffffff' });
    infoMarcador = this.add.text(gw * .8, gh * .72, '', { font: '100px Gotham', fill: '#ffffff' });
    timer = this.time.addEvent({ delay: gt * 1000, callback: gameOver, callbackScope: this });
}

function update(){
    //if (productos != total && Math.floor(gt - timer.getElapsed() / 1000) > 0) {
    if (Math.floor(gt - timer.getElapsed() / 1000) > 0) {
        for (i in objetos){
            restarx(objetos[i]);
        }

        countercarreta++;
        // if ((countercarreta % 20) == 0) {
        //     this.carreta.y = this.carreta.y + 3 * flagcarreta;
        //     flagcarreta = flagcarreta * -1;
        // }

        infoTiempo.setText('Tiempo restante: ' + Math.floor(gt - timer.getElapsed() / 1000));        
    }
    infoTiempo.setText('Tiempo restante: ' + Math.floor(gt - timer.getElapsed() / 1000));
    infoMarcador.setText(productos);
}

function crearProducto (x, y, nombre, puntos, t){
    //console.log('Creando producto:' + nombre);
    var prod = t.add.image(x, y, nombre);
    //console.log(prod.width + ', ' + prod.height + ' - ' + prod.x + ',' + prod.y + '+' + prod.height / 2 + '=' + prod.y + prod.height / 2);
    prod.y -=  prod.height / 2;
    
    if (puntos > 0) {
        total += puntos;
        //  Make them all input enabled
        prod.setInteractive();
        
        //  The images will dispatch a 'clicked' event when they are clicked on
        prod.on('clicked', clickHandler, this);
    }
    return prod;
}

function CrearProductos(g){
    productos = 0;
    total = 0;
    for (i in Listado){
        objetos.push(crearProducto(Listado[i].x, Listado[i].y, Listado[i].nombre, Listado[i].puntos, g))
    }
    
    //console.log("Total puntos: " + total);
    //console.log("Productos cargados: " + productos);
}

function CargarImagenes(g){
    for (i in Listado){
        g.load.image(Listado[i].nombre, Listado[i].img);
    }
}

function clickHandler (prod)
{
    productos++;
    //console.log(productos);

    audio_moneda.play({
        loop: false
    });

    //prod.off('clicked', clickHandler);
    //prod.input.enabled = false;
    prod.setVisible(false);

    // if (productos == total) {
    //     audio_fondo.stop();
    //     // audio_fin.play({
    //     //     loop: false
    //     // });

    //     //timer.stop();
    //     //timer.destroy();

    //     game.scene.start('sceneD');
    //     // this.input.once('pointerup', function () {
    //     //     this.scene.start('sceneA');
    //     // }, this);
    // }    
}

function gameOver ()
{
    //this.input.off('gameobjectup');

    audio_fondo.stop();
    
    //if (productos != total) {
        // gameover.play({
        //     loop: false
        // });

    this.scene.start('sceneD');
        // this.input.once('pointerup', function () {
        //     this.scene.start('sceneA');
        // }, this);
    //}
}

function restarx(o){
    var restar = gaccel;
    var y = o.y + o.height / 2;
    //console.log('y: ' + y);

    switch(y) {
        case estante1: restar = gaccel; break;
        case estante2: restar = gaccel2; break;
        case estante3: restar = gaccel3; break;
        case estante4: restar = gaccel4; break;
    }

    if (o.x < 0) {
        o.x = gw;

        //o.input.enabled = true;
        o.setVisible(true);
    }
    else {
        o.x -= restar;
    }
}