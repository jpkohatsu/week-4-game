function targetNumber (min,max) {
  return Math.floor(Math.random() * (120-19) + 19);
}
targetNumber();


$(".btn-group.target-number").text(targetNumber);

  
var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $(".row");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "assets/images/crystal.png/300x150");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $(".crystal-image").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    var counter = 0;

    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });