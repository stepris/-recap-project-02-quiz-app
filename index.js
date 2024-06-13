// For index.html
const bookmark = document.querySelector('[data-js="bookmark"]');

const bookmarkIcon = document.querySelector('[data-js="bookmark__icon"]');

const cardButtonAnswer = document.querySelector(
  '[data-js="card__button-answer"]'
);
const cardAnswer = document.querySelector('[data-js="card__answer"]');

/* Add toggle event listeners
 */

/* if (bookmark && bookmarkIcon) {
  bookmark.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark--active");
  });
}

if (cardButtonAnswer && cardAnswer) {
  cardButtonAnswer.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--active");
    cardAnswer.classList.contains("card__answer--active")
      ? (cardButtonAnswer.innerText = "Hide answer")
      : (cardButtonAnswer.innerText = "Show answer");
  });
}
 */
/* Reusable toggle event listeners here
 */

function addToggleEventListeners(
  bookmark,
  bookmarkIcon,
  cardButtonAnswer,
  cardAnswer
) {
  if (bookmark && bookmarkIcon) {
    bookmark.addEventListener("click", () => {
      bookmarkIcon.classList.toggle("bookmark--active");
    });
  }

  if (cardButtonAnswer && cardAnswer) {
    cardButtonAnswer.addEventListener("click", () => {
      cardAnswer.classList.toggle("card__answer--active");
      cardAnswer.classList.contains("card__answer--active")
        ? (cardButtonAnswer.innerText = "Hide answer")
        : (cardButtonAnswer.innerText = "Show answer");
    });
  }
}

addToggleEventListeners(bookmark, bookmarkIcon, cardButtonAnswer, cardAnswer);

// For form.html

const newQuestionFormElement = document.querySelector(
  '[data-js="new-question-form"]'
);

/* 
const newQuestionSubmitButton = document.querySelector(
  '[data-js="new-question-submit"]'
); */

// console.log(newQuestionSubmitButton);
// console.log(newQuestionForm);

/* if (newQuestionFormElement) {
  newQuestionFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredData = new FormData(event.target);
    // console.log(enteredData);
    const data = Object.fromEntries(enteredData);

    console.dir(data);
  });
}
 */

if (newQuestionFormElement) {
  handleNewQuestionFormSubmission(newQuestionFormElement, (data) => {
    // console.log("Form data: ", data);
    createNewQuizCardListItem(data);
  });
  // countQuizFormCharacters(newQuestionFormElement);
}

function handleNewQuestionFormSubmission(form, callback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredData = new FormData(event.target);
    const data = Object.fromEntries(enteredData);
    callback(data);
  });
}

function createNewQuizCardListItem(dataE) {
  console.log(dataE.question, dataE.answer, dataE.tag);
  const newQuizCardListItem = document.createElement("li");
  newQuizCardListItem.classList.add("card-list__item");
  newQuizCardListItem.innerHTML = `
            <article class="card">
            <h2 class="card__question">
            ${dataE.question}
            </h2>
            <button
              class="card__button-answer"
              data-js="card__button-answer"
              type="button"
            >
              Show answer
            </button>
            <p class="card__answer" data-js="card__answer">${dataE.answer}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">${dataE.tag}</li>
            </ul>
            <div class="card__button-bookmark" data-js="card__button-bookmark">
              <button
                class="bookmark"
                data-js="bookmark"
                aria-label="bookmark"
                type="button"
              >
                <svg
                  class="bookmark__icon"
                  data-js="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>
  `;
  const exampleListRendering = document.querySelector(
    '[data-js="example-rendering"]'
  );

  exampleListRendering.append(newQuizCardListItem);

  // Attach new event listeners here as well

  /*   const bookmarkButton = newQuizCardListItem.querySelector(
    '[data-js="bookmark"]'
  );
  const bookmarkIcon = newQuizCardListItem.querySelector(
    '[data-js="bookmark__icon"]'
  );
  const answerButton = newQuizCardListItem.querySelector(
    '[data-js="card__button-answer"]'
  );
  const cardAnswer = newQuizCardListItem.querySelector(
    '[data-js="card__answer"]'
  );

  bookmarkButton.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("bookmark--active");
  });

  answerButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--active");
    cardAnswer.classList.contains("card__answer--active")
      ? (answerButton.innerText = "Hide answer")
      : (answerButton.innerText = "Show answer");
  }); */

  // Adding the toggle event listeners again

  const bookmarkButton = newQuizCardListItem.querySelector(
    '[data-js="bookmark"]'
  );
  const bookmarkIcon = newQuizCardListItem.querySelector(
    '[data-js="bookmark__icon"]'
  );
  const answerButton = newQuizCardListItem.querySelector(
    '[data-js="card__button-answer"]'
  );
  const cardAnswer = newQuizCardListItem.querySelector(
    '[data-js="card__answer"]'
  );

  addToggleEventListeners(
    bookmarkButton,
    bookmarkIcon,
    answerButton,
    cardAnswer
  );
}

// Creating initial character counter texts

const questionTextarea = document.querySelector(
  '[data-js="form-textarea-question"]'
);
const answerTextarea = document.querySelector(
  '[data-js="form-textarea-answer"]'
);
const questionCount = document.querySelector(
  '[data-js="count-question-characters"]'
);
const answerCount = document.querySelector(
  '[data-js="count-answer-characters"]'
);

if (questionTextarea && answerTextarea) {
  const answerMaxLength = Number(answerTextarea.getAttribute("maxlength"));
  const questionMaxLength = Number(questionTextarea.getAttribute("maxlength"));

  // console.dir(questionCount, answerCount);
  questionCount.innerText = `${questionMaxLength} characters left`;
  answerCount.innerText = `${answerMaxLength} characters left`;
  questionTextarea.addEventListener("input", () => {
    //console.log(questionTextarea.value, answerTextarea.value);
    // console.log("hello from questionTextarea");
    const questionCharacterCount =
      questionMaxLength - questionTextarea.value.length;
    // console.log(questionCharacterCount);
    questionCount.innerText = `${questionCharacterCount} characters left`;
  });

  answerTextarea.addEventListener("input", () => {
    // console.log("hello from answerTextarea");
    const answerCharacterCount = answerMaxLength - answerTextarea.value.length;
    // console.log(questionCharacterCount);
    answerCount.innerText = `${answerCharacterCount} characters left`;
  });
}
// Function for counting characters in form elements

/* function countQuizFormCharacters(form) {
  const questionTextarea = form.querySelector("#question");
  const answerTextarea = form.querySelector("#answer"); */

/*   form.addEventListener("input", (event) => {
    const liveElements = form.elements;
    // console.dir(liveElements);

    const questionLength = questionTextarea.textLength;
    const answerLength = answerTextarea.textLength;
    // console.log(questionLength);
    // console.log("Question:", questionMaxLength - questionLength);
    const questionCharactersLeft = questionMaxLength - questionLength;
    const answerCharactersLeft = answerMaxLength - answerLength;
    console.log(questionCharactersLeft, answerCharactersLeft);
    // console.log("Answer:", answerMaxLength - answerLength);
  });
}
 */
