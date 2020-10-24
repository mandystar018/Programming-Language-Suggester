$(document).ready(function(){
  $("form#form").submit(function(event) {
    event.preventDefault();
    const userName = $("#person").val();
    const userInput1 = parseInt($("input:radio[name=question1]:checked").val());
    const userInput2 = parseInt($("input:radio[name=question2]:checked").val());
    const userInput3 = parseInt($("input:radio[name=question3]:checked").val());
    const userInput4 = parseInt($("input:radio[name=question4]:checked").val());
    const userInput5 = parseInt($("input:radio[name=question5]:checked").val());

    function findLanguage(input1, input2, input3, input4, input5) {
      let score = input1 + input2 + input3 + input4 + input5;
      if(score <= 5) {
        $("#javaScript").fadeIn();
        $("#c-sharp, #python, #ruby").hide();
      } else if (score <= 10) {
        $("#c-sharp").show();
        $("#ruby, #python, #javaScript").hide()
      } else if (score <= 15) {
        $("#ruby").fadeIn();
        $("#python, #javaScript, #c-sharp").hide();
      } else {
        $("#python").show();
        $("#ruby, #c-sharp, #javaScript").hide();
      }
      $("#userName").text(`${userName} your score was ${score}!.`)
    }
    findLanguage(userInput1, userInput2, userInput3, userInput4, userInput5);
  });
});