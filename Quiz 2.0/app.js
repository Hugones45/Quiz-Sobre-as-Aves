const form = document.querySelector(".quiz-form");
const modalContainer = document.querySelector(".head-chart");
const imgBirdContainer = document.querySelector(".allBirds");
const scoreMessage = document.querySelector(".scoreValue");
const scoreTitle = document.querySelector(".congratulations")

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

const getUserAnswers = () => {
  const userAnswers = []

  rightAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers
}

const getScoreMessage = score => {
    return {
      25: { imgSrc: "img/hoatzin.jpg", message: `Quase bom`},
      50: { imgSrc: "img/arara3.jpg", message: `Muito bom!`},
      75: { imgSrc: "img/poisonbird.jpg", message: `Incrivel!`},
      100: { imgSrc: "img/harpia.jpg", message: `Perfeito!` },
    }[score] || { imgSrc: "img/fossil bird.bmp", message: `Estude um pouco mais sobre as aves!` }
  }

const showScore = (event) => {
    event.preventDefault();
  
    const userAnswers = getUserAnswers()
  
    const score = getScore(userAnswers)
  
    const {imgSrc, message} = getScoreMessage(score)
  
    imgBirdContainer.innerHTML = `<img class="birdsCss" src="${imgSrc}">`
    scoreMessage.textContent =`Você acertou ${score}% do Quiz!`
    scoreTitle.textContent = message;
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