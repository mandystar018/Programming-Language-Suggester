$(document).ready(function(){
  $("form#form").submit(function(event) {
    event.preventDefault();
    const userName = $("#person").val();
    const userInput1 = parseInt($("input:radio[name=question1]:checked").val());
    const userInput2 = parseInt($("input:radio[name=question2]:checked").val());
    const userInput3 = parseInt($("input:radio[name=question3]:checked").val());
    const userInput4 = parseInt($("input:radio[name=question4]:checked").val());
    const userInput5 = parseInt($("input:radio[name=question5]:checked").val());
    let score = userInput1 + userInput2 + userInput3 + userInput4 + userInput5;
    
    $("#userName").text(`${userName} your score is ${score} !.`)
    $(".results div").hide();

    if(score <= 5) {
      $("#javaScript").show();
    }
  });
});