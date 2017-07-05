function serveMeWaffles(){
  var waffleMessage = getNumber(1, 42);
  function getNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
  };
  document.getElementById("randomWaffles").src="pics/" + waffleMessage + ".png";
  // document.getElementById("randomWaffles").src="hi-res/" + waffleMessage + ".jpg";
};

$(document).ready(function() {
  var isToasterLoaded = true;
  $(".pictureToast").animate({bottom:'-800px'}, 0);
  serveMeWaffles();

  $(".toaster").click(function() {
    if (isToasterLoaded) {
      $(".pictureToast").animate({bottom: '-15px'}, 200);
      isToasterLoaded = false;
      serveMeWaffles();
    } else {
      $(".pictureToast").animate({bottom: '-800px'}, 200);
      isToasterLoaded = true;
    };
  });
});

// $randomWaffles({ top: '-=100px' }, 600, 'easeOutElastic', function ())
