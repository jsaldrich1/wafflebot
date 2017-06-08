function serveMeWaffles(){
  var waffleMessage = getNumber(1, 45);
  function getNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
  };
  document.getElementById("randomWaffles").src="pics/" + waffleMessage + ".png";
};

$(document).ready(function() {
  serveMeWaffles();

  $(".toaster").click(function() {
    serveMeWaffles();
  });
});
