
var productsCountEl = document.getElementById("products-count");
var addToCartButtons = document.querySelectorAll (".add-to-cart");

for(var i=0; i<addToCartButtons.length; i++) {
	addToCartButtons [i].addEventListener ("click", function (){
		console.log ("clicked")
		var prevProductsCount = +productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1

	});
}


 $('div.like').click(function() {
    $(this).toggleClass('changeColorLike');
  });

