function serveMeWaffles(){
  var waffleMessage = getNumber(1, 42);
  function getNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
  };
  document.getElementById("randomWaffles").src="pics/" + waffleMessage + ".png";
};

$(document).ready(function() {
  var isToasterLoaded = true;
  var isHandleDown = false;
  $(".pictureToast").animate({bottom: '-800px'}, 0);
  $(".toasterButton").animate({bottom: '100px'}, 0);

  serveMeWaffles();

  $(".toaster").click(function() {
    if (isToasterLoaded && isHandleDown) {
      // do nothing, toast should pop automatically
      $(".pictureToast").animate({bottom: '-15px'}, 100);
      $(".toasterButton").animate({bottom: '100px'}, 100);
      isToasterLoaded = false;
      isHandleDown = false;
      serveMeWaffles();
    } else if (isToasterLoaded && !isHandleDown) {
      $(".toasterButton").animate({bottom: '-100px'}, 300);
      isHandleDown = true;
    } else {
      $(".pictureToast").animate({bottom: '-800px'}, 200);
      // $(".toasterButton").animate({bottom: '-300px'}, 200);
      isToasterLoaded = true;
    };
  });
});
