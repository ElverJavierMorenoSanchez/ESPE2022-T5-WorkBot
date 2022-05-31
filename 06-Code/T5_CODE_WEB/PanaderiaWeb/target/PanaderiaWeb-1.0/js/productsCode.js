var band = true;

$(".button").click(function() {
    if(band){
        $(".button h3").text("QUITAR DEL CARRITO");
        band = false;
    }else{
        $(".button h3").text("AÑADIR AL CARRITO");
        band = true;
    }
});

$(".shoppingCart").show();