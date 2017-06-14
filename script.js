function serveMeWaffles(){
  var waffleMessage = getNumber(1, 45);
  function getNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
  };
  document.getElementById("randomWaffles").src="pics/" + waffleMessage + ".png";
};

$(document).ready(function() {
  // serveMeWaffles();
  var isToasterLoaded = true;

  $(".toaster").click(function() {
    if (isToasterLoaded) {
      serveMeWaffles();
      $(".pictureToast").animate({top: '-800px'}, 200);
      isToasterLoaded = false;
    } else {
      $(".pictureToast").animate({top: '800px'}, 200);
      isToasterLoaded = true;
    };

  });
});

// $randomWaffles({ top: '-=100px' }, 600, 'easeOutElastic', function ())
