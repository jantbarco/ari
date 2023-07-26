/***************** CONSTANTES **/
var total = 0; // Total de productos cargados (Se usa para validar cuando se hayan seleccionado todos los productos)
var meta = 25;
const gaccel = 5; // Posiciones en x que se mueven en el estante1
const gaccel2 = 1; // Posiciones en x que se mueven en el estante2
const gaccel3 = 8; // Posiciones en x que se mueven en el estante3
const gaccel4 = 3; // Posiciones en x que se mueven en el estante4
const gw = 1024; // Ancho de la pantalla 
const gh = 703; // Alto de la pantalla
const gt = 15; //Tiempo de juego en segundos
const estante1 = 150; //Posición y del estante1
const estante2 = 275; //Posición y del estante2
const estante3 = 400; //Posición y del estante3
const estante4 = 525; //Posición y del estante1

var intentos = 0;
var objetos = [];
var productos = 0;
var countercarreta = 1;
var flagcarreta = 1;
var audio_inicio;
var audio_fin;
var audio_moneda;
var audio_fondo;
const fondopix = gw / 2; 
const fondopiy = gh / 2;
const carretapix = 0 + 170; 
const carretapiy = gh * 0.80;
const alcancillapix = gw * 0.78; 
const alcancillapiy = gh * 0.8;