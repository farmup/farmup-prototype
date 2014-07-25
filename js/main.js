
$(document).ready(function() {
 
  $("#sliderProductos").owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    itemsCustom : [
        [0, 1],
        [600, 2],
        [1000, 3],
        [1200, 4]
      ]
  });

  $('.owl-pagination').addClass('hidden');

  var owl = $(".owl-carousel").data('owlCarousel');

  $('#sliderPrev').click(function(){
  	owl.prev();
  });

  $('#sliderNext').click(function(){
  	owl.next();
  });

  
 
});

