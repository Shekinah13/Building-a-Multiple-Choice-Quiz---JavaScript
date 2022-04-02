var questions = [
{
  prompt: "You want to use a straightforward and power app. It is a major supplier of web apps.\n(a) JAVASCRIPT\n\
(b) RUBY\n(c) PHYTON",
  answer: "b"
},
{
  prompt: "Simply requiring you to embed the code within HTML. It provides a ton of power and is the beating heart of monster sites like WordPress and Facebook.\n(a) PHP\n\
(b) PHYTON\n(c) C++",
  answer: "a"
},
{
  prompt: "Allows developers to add interactive elements to their website, and its presence is felt across the internet.\n(a) C#\n\ (b) JAVASCRIPT\n(c) RUBY",
  answer: "b"
},
{
  prompt: "Use for application software, game development and embedded firmware.\n(a) C++\n\ (b) PHP\n(c) PHYTON",
  answer: "a"
},
{
  prompt: "A language of data science.\n(a) RUBY\n\ (b) C#\n(c) PHYTON",
  answer: "c"
},

]
var score = 0;
for(var i=0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("GOOD JOB!");
  } else {
    alert("WRONG!");
  }
}
alert ("You Got " + score + " / " + questions.length)