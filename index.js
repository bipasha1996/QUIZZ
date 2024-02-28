const quiz = [
  {
    question: "Which one is a scripting language?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "What is the name of the 1st web browser?",
    ans1text: "Mozilla",
    ans2text: "World Wide Web",
    ans3text: "Netscape Navigator",
    ans4text: "Microsoft Edge",
    answer: "World Wide Web",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },

  {
    question: "Which year JavaScript was launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
  {
    question: "Which year python was launched?",
    ans1text: "1991",
    ans2text: "1998",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1991",
  },
];

const question = document.getElementById("question");
console.log(question);
console.log(question.textContent);
const option_1 = document.getElementById("textOption_1");
const option_2 = document.getElementById("textOption_2");
const option_3 = document.getElementById("textOption_3");
const option_4 = document.getElementById("textOption_4");
const answerElement = document.querySelectorAll(".answer");
console.log(option_1);
console.log(option_2);
console.log(option_3);
console.log(option_4);

console.log(option_1.textContent);
console.log(option_2.textContent);
console.log(option_3.textContent);
console.log(option_4.textContent);

const submit = document.getElementById("btn");

let currentQuestion = 0;
let score = 0;
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_1.textContent = quiz[currentQuestion].ans1text;
option_2.textContent = quiz[currentQuestion].ans2text;
option_3.textContent = quiz[currentQuestion].ans3text;
option_4.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAns);
  //   console.log(checkedAns.nextElementSibling.textContent);
  if (checkedAns === null) {
    alert("Please select an answer");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    )
      score++;
  }
  checkedAns.checked = false;
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    question.textContent = quiz[currentQuestion].question;
    option_1.textContent = quiz[currentQuestion].ans1text;
    option_2.textContent = quiz[currentQuestion].ans2text;
    option_3.textContent = quiz[currentQuestion].ans3text;
    option_4.textContent = quiz[currentQuestion].ans4text;
    checkedAns.checked = false;
  } else {
    alert(`Your score is ${score} out of ${quiz.length}`);
    location.reload();
  }
});
