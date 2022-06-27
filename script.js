// console.log("krushna");
const quizQA = [
  {
    question: "Q1:Which organization defines the Web Standards?",
    a: "Microsoft Corporation",
    b: "IBM Corporation",
    c: "World Wide Web Consortium",
    d: "Apple Inc",

    ans: "c",
  },
  {
    question: "Q2: Which of the following is used to create web page?",
    a: "HTML",
    b: "C",
    c: "JVM",
    d: "DTD",

    ans: "a",
  },
  {
    question: "Q3:FTP is an acronym for?",
    a: "File Transaction Protocol",
    b: "File Transmission Protocol",
    c: "File Translation Protocol",
    d: "File Transfer Protoco:",

    ans: "d",
  },
  {
    question: "Q4:Using which tag we insert an JavaScript in HTML page?",
    a: "<JavaScript type=”text/javascript”>",
    b: "<script type=”text/javascript”>",
    c: "<JScript type=”text/javascript”>",
    d: "<HTMLScript type=”text/javascript”>",

    ans: "b",
  },
  {
    question: "Q5:Which of the following JavaScript can do?",
    a: "JavaScript can react to events.",
    b: "JavaScript can manipulate HTML elements.",
    c: "JavaScript can be use to validate data.",
    d: "All of the Above",

    ans: "d",
  },
  {
    question: "Q6:What is meant by “this” keyword in JavaScript?",
    a: "It refers current object",
    b: "It referes previous object",
    c: "It is variable which contains value",
    d: "None of the above",

    ans: "a",
  },
  {
    question: "Q7: Who is to be introduced JavaScript?",
    a: "Microsoft",
    b: "IBM",
    c: "Google",
    d: "Sun Microsystems",

    ans: "d",
  },
  {
    question: "Q8:What is the extension of javascript file?",
    a: "jc",
    b: "java",
    c: "js",
    d: "jp",

    ans: "c",
  },
  {
    question: "Q9:Which keyword is used to declare variables in javascript",
    a: "let",
    b: "Dim",
    c: "String",
    d: "None of the above",

    ans: "a",
  },
  {
    question: "Q10:Which one is the advantages of JavaScript?",
    a: "Simplicity",
    b: "Speed",
    c: "Versatility",
    d: "All of the above",

    ans: "d",
  },
];

const question = document.querySelector(".question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const answer = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

let count = 0;
let score = 0;
//
// let currentQuestion;
// let availableQue = [];
// function setAvailableQue() {
//   const totalQue = quizQA.length;
//   for (let i = 0; i < totalQue; i++) {
//     availableQue.push(quizQA[i]);
//   }
//    console.log(availableQue);
// }

const showQuestion = () => {
  // setAvailableQue();
  const questionList = quizQA[count];
  // const questionList =
  //   availableQue[Math.floor(Math.random() * availableQue.length)];
  question.innerText = questionList.question;
  a_text.innerText = questionList.a;
  b_text.innerText = questionList.b;
  c_text.innerText = questionList.c;
  d_text.innerText = questionList.d;
};
showQuestion();

const getRadio = () => {
  let ans;
  answer.forEach((curAns) => {
    if (curAns.checked) {
      ans = curAns.id;
    }
  });
  return ans;
};
const deselectRadio = () => {
  answer.forEach((curAns) => (curAns.checked = false));
};
submit.addEventListener("click", () => {
  const checkRadio = getRadio();
  // console.log(checkRadio);
  if (checkRadio === quizQA[count].ans) {
    score++;
  }
  count++;
  deselectRadio();

  if (count < quizQA.length) {
    showQuestion();
  } else {
    showScore.innerHTML = `<h3>You have Scored ${score}/${quizQA.length}<h3>
    <button class='btn' onclick="location.reload()">Restart</button>`;
    showScore.classList.remove("scoreArea");
  }
});
