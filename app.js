const form = document.querySelector(".quiz-form");
const headChart = document.querySelector(".head-chart");
const allBirds = document.querySelector(".allBirds");
const birdsChildren = allBirds.children;
const h2 = document.querySelector(".congratulations");
const p = document.querySelector(".scoreValue");

const frases = [
  "Estude um pouco mais sobre as aves!",
  "Quase bom!",
  "Muito bom!",
  "Incrivel!",
  "Perfeito!"
];

let arrayBirds = [];
const prendeBlock = () => {
  for (let i = 0; i < birdsChildren.length; i++) {
    birdsChildren[i] = birdsChildren[i].style.display = "none";
    arrayBirds.push(birdsChildren[i]);
  }
};

const callChart = (trueObject, frasesDiversas, arrayPassaros) => {
  const { paragraph, text } = trueObject;
  h2.textContent = frasesDiversas;
  paragraph.textContent = text;
  arrayPassaros.style.display = "block";
};

let rightAnswers = ["B", "B", "A", "B"];

const callBackForm = (event) => {
  event.preventDefault();
  let score = 0;
  const questionsValue = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  rightAnswers.forEach((element, index) => {
    if (element === questionsValue[index]) {
      score += 25;
    }

    const resultBlock = {
      paragraph: p,
      text: `Você acertou ${score}% do Quiz!`,
    };

    prendeBlock();

    if (score === 0) {
      callChart(resultBlock, frases[0], arrayBirds[0]);
    } else if (score === 25) {
      callChart(resultBlock, frases[1], arrayBirds[1]);
    } else if (score === 50) {
      callChart(resultBlock, frases[2], arrayBirds[2]);
    } else if (score === 75) {
      callChart(resultBlock, frases[3], arrayBirds[3]);
    } else {
      callChart(resultBlock, frases[4], arrayBirds[4]);
    }
  });
  headChart.style.display = "block";
};

const callBackHeadChart = (event) => {
  const clickedElement = event.target.classList[0];
  const closeElements = ["head-chart", "chart-close"];
  const findCloseElements = closeElements.some(
    (name) => name === clickedElement
  );

  if (findCloseElements) {
    headChart.style.display = "none";
  }
};

form.addEventListener("submit", callBackForm);
headChart.addEventListener("click", callBackHeadChart);
