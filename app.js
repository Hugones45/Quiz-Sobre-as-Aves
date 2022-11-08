const form = document.querySelector(".quiz-form");
const modalContainer = document.querySelector(".head-chart");

const frases = [
    "Estude um pouco mais sobre as aves!",
    "Quase bom!",
    "Muito bom!",
    "Incrivel!",
    "Perfeito!"
];

let arrayBirds = [];
const prendeBlock = () => {
    const birdsChildren = document.querySelector(".allBirds").children;

    for (let i = 0; i < birdsChildren.length; i++) {
        birdsChildren[i] = birdsChildren[i].style.display = "none";
        arrayBirds.push(birdsChildren[i]);
    }
};

const callChart = (trueObject, frasesDiversas, arrayPassaros) => {
    const scoreTitle = document.querySelector(".congratulations")

    const { paragraph, text } = trueObject;
    scoreTitle.textContent = frasesDiversas;
    paragraph.textContent = text;
    arrayPassaros.style.display = "block";
};

const rightAnswers = ["B", "B", "A", "B"];

const getScore = questionsValue => {
    let score = 0;
    rightAnswers.forEach((rightAnswer, index) => {
        if (rightAnswer === questionsValue[index]) {
            score += 25;
        }
    });
    return score
}

const showScore = (event) => {
    event.preventDefault();

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ];

    const score = getScore(userAnswers)

    const resultBlock = {
        paragraph: document.querySelector(".scoreValue"),
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

    modalContainer.style.display = "block";
};

const callBackmodalContainer = (event) => {
    const clickedElement = event.target.classList[0];
    const closeElements = ["head-chart", "chart-close"];
    const findCloseElements = closeElements.some(
        (name) => name === clickedElement
    );

    if (findCloseElements) {
        modalContainer.style.display = "none";
    }
};

form.addEventListener("submit", showScore);
modalContainer.addEventListener("click", callBackmodalContainer);
