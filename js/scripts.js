function findLanguage(input1, input2, input3, input4, input5){
  let score = input1 + input2 + input3 + input4 + input5;

  if (score ) {

  } else if (score) {

  } else if (score) {

  } else {

  }
}

$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const userInput1 = parseInt($("input:radio[name=question1]:checked").val());
    const userInput2 = parseInt($("input:radio[name=question2]:checked").val());
    const userInput3 = parseInt($("input:radio[name=question3]:checked").val());
    const userInput4 = parseInt($("input:radio[name=question4]:checked").val());
    const userInput5 = parseInt($("input:radio[name=question5]:checked").val());
  });
});