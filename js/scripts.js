$(document).ready(function() {
  $("#faves").click(function() {
    var thingOne = $("input#thing-one").val();
    var thingTwo = $("input#thing-two").val();
    var thingThree = $("input#thing-three").val();
    var thingFour = $("input#thing-four").val();
    var thingFive = $("input#thing-five").val();

    var array = [thingOne, thingTwo, thingThree, thingFour, thingFive];
    var second = array.push(array[1], array[0], array[2]);

    $("#finalList").append("<li>"+array[0]+"</li>");
    $("#finalList").append("<li>"+array[1]+"</li>");
    $("#finalList").append("<li>"+array[2]+"</li>");
    $("#finalList").append("<li>"+array[3]+"</li>");
    $("#finalList").append("<li>"+array[4]+"</li>");
    $("#finalList").append("<li>"+array[5]+"</li>");
    $("#finalList").append("<li>"+array[6]+"</li>");
    $("#finalList").append("<li>"+array[7]+"</li>");


    event.preventDefault();
  });
});
