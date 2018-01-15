var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $indicadorColor = $('#indicador-de-color');
var $grillaPixeles = $('#grilla-pixeles')

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var $colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $indicadorColor.css('background-color', $colorActual);
});

// Tomar elementos del DOM
var $paleta = $('#paleta');
function generarPaleta(color) {
  var $divColor = color;
  $divColor = $('<div>', {'class': 'color-paleta'});
  $divColor.css('background-color', color);
  $paleta.append($divColor);
}
nombreColores.forEach(generarPaleta);

// Generar grila de pixeles
function generarGrillaDePixeles() {
  for (var i = 0; i < 1749; i++) {
    var $pixel = $('<div>');
    $grillaPixeles.append($pixel);
  }
}
generarGrillaDePixeles();

// Mensaje de Pincel
var $mensaje = $('#indicador-de-color-mensaje');
function cambiarMensaje(color){
  $mensaje.text("Pincel: " + color);
}

// Seleccionar un color de la paleta
function seleccionarColorPaleta() {
  var $colorInicial = $(this).css('background-color');
  $indicadorColor.css('background-color', $colorInicial);
  cambiarMensaje($colorInicial);
}
$('.color-paleta').click(seleccionarColorPaleta);

// Pintar los pixeles de la grilla
var $pixelGrilla = $grillaPixeles.children();
function cambiarColorPixel() {
  var $colorSeleccionado = $indicadorColor.css('background-color');
  $(this).css('background-color', $colorSeleccionado);
}
$pixelGrilla.click(cambiarColorPixel);

// Ruleta de colores
function seleccionarColorRuleta() {
  var $colorInicial = $(this).css('background-color');
  $indicadorColor.css('background-color', $colorInicial);
}
$colorPersonalizado.click(seleccionarColorRuleta);

// Detectar botón del mouse
var $mousePresionado;

$pixelGrilla.mouseup(function() {
  $mousePresionado = false;
});

$pixelGrilla.mousedown(function() {
  $mousePresionado = true;
});

$pixelGrilla.mousemove(function(e) {
  $mousePresionado ? e.target.click(cambiarColorPixel) : null;
});

// Borrar pixeles dibujados
var $borrar = $('#borrar');
$borrar.click(function(){
  $pixelGrilla.animate({"background-color": ""}, 1250);
});

// Cargar superheroes
$('#batman').click(function(){
  cargarSuperheroe(batman)
});
$('#wonder').click(function(){
  cargarSuperheroe(wonder)
});
$('#flash').click(function(){
  cargarSuperheroe(flash)
});
$('#invisible').click(function(){
  cargarSuperheroe(invisible)
});

// Descargar dibujo
$('#guardar').click(guardarPixelArt);
