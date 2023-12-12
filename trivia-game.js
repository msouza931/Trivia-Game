const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');

let currentQuestion = null;
//step 2: Fetching the random question. 
    function getTriviaQuestion() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const index = Math.floor(Math.random() * questions.length);
            const question = questions[index];
            
            if (index > questions.length) {
                reject('An error has occurred while fetching the trivia question');
            } else {
                resolve(question);
            }
            
        }, 1000);
    });
}
//step 3: Display the trivia question. 
    function displayQuestion(triviaQuestion) {
        questionDiv.textContent = triviaQuestion.question;
        answerDiv.value = '';
        feedbackDiv.textContent = '';
    }
//step 4: User see a new question after first.
    document.getElementById('questionBtn').addEventListener('click', () => {
        getTriviaQuestion().then((question) => {
            currentQuestion = question;
            displayQuestion(question);
        })
        .catch((error) => {
            console.error(error);
        });
    });
//step 5: Evaluate if users answer is right or wrong.
    document.getElementById('answerBtn').addEventListener('click', () => {
        const userAnswer = answerDiv.value.trim().toLowerCase();
        const correctAnswer = currentQuestion.answer.toLowerCase();
        if (userAnswer === correctAnswer) {
            feedbackDiv.style.color = "green";
            feedbackMessage = 'Your answer is correct!';
        } else {
            feedbackDiv.style.color = "red";
            feedbackMessage = `Sorry, Your answer is incorrect: ${currentQuestion.answer}". Try, another question!`;
        }
        feedbackDiv.textContent = feedbackMessage;
    });


