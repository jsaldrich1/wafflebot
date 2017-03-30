function serveMeWaffles(){
  var waffleMessage = getNumber(1, 45);
  function getNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 )) + min;
  };
  document.getElementById("random-waffles").src="pics/" + waffleMessage + ".png";
};

$(document).ready(function() {
  serveMeWaffles();

  $("#random-waffles").click(function() {
    serveMeWaffles();
  });
});
