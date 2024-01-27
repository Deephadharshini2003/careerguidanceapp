


const personalityButton = document.getElementById('start-personality-button');
const interestButton = document.getElementById('start-interest-button');
const nextButton = document.getElementById('next-button');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let totalScore = 0;
let currentQuestions = [];

const questions = {
    personality: [
        {
                        question: "What aspect of science or engineering interests you the most",
                        options: ["Biology", "Computer science", "Commerce"],
                        scores: [4, 3, 2]
                    },
                    {
                        question: "Are you interested in psychology and understanding the human mind and emotions?",
                        options: ["Yes, I'm very interested in psychology!", "it's interesting", "not my preference", "Not at all"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "Does the working of share market and international economy generate your curiosity",
                        options: ["Absolutely yes", " It's interesting", " It's not my preference", " Not at all"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "Do you find programming languages intriguing and enjoy coding?",
                        options: ["Absolutely yes", " It's interesting", " It's not my preference", " Not at all"],
                        scores: [4, 3, 2, 1]
                    },

    ],
    interest: [
        {
                        question: "When faced with a problem, how do you prefer to approach it?",
                        options: ["Analyze the problem logically and find a systematic solution.", " Think creatively and consider innovative approaches.", " Collaborate with others and seek different perspectives.", " Plan carefully, breaking the problem into smaller steps."],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you express your emotions and thoughts?",
                        options: ["Through writing, analyzing emotions and ideas in depth.", "Arts and LiteratureThrough creative arts, painting, music, or other artistic form", "Through discussions, sharing experiences, and connecting with others emotionally.", " Through storytelling, combining imagination and real-life experiences."],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you approach understanding people's behavior and motivations?",
                        options: ["Analyze patterns and psychological theories to understand behavior.", "Appreciate artistic expressions and creative ways people express themselves.", " Empathize with their experiences and connect emotionally.", "Study societal structures and how education impacts communities"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you approach learning new technologies or programming languages?",
                        options: ["Building efficient systems, optimizing algorithms, and solving computational challenges",
                         " Creating interactive and visually appealing digital experiences.", 
                         " Collaborating on projects with diverse teams, learning from others' expertise.", 
                         " Designing user-friendly interfaces and improving user experiences."],
                        scores: [4, 3, 2, 1]
                    }
    ]
};

function startQuiz(questionType) {
    currentQuestions = questions[questionType];
    personalityButton.classList.add('hide');
    interestButton.classList.add('hide');
    nextButton.classList.remove('hide');
    currentQuestion = 0;
    totalScore = 0;
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(optionIndex) {
    totalScore += currentQuestions[currentQuestion].scores[optionIndex];
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    nextButton.classList.add('hide');
    resultElement.innerText = getResultMessage(totalScore);
}

function getResultMessage(score) {
    let specialization = '';
    
    
        if (score >= 10) {
            specialization = 'Science or Engineering';
            colleges = 'Specialized colleges such as IIT Guwahati, VIT Chennai, or IISC Bangalore.';
        } else if (score >= 7) {
            specialization = 'Arts or Literature';
            colleges = 'Specialized colleges such as CSJM - Chhatrapati Shahu Ji Maharaj University, Loyolo College, or .st. Xaviers College in Mumbai';
        } else if (score >= 4) {
            specialization = 'Social Sciences or Education';
            colleges = 'Specialized colleges such as Amity University Noida, Pondicherry university, Loyola College of Social Sciences';
        } else {
            specialization = 'Computer Science or Information Technology';
            colleges = 'Specialized colleges such as Jadavpur University, MIT, National Institute of Technology Tiruchirappalli';
        }
    
        return `Based on your combined score, you might consider a career in ${specialization}. ${colleges}`;
    
}

personalityButton.addEventListener('click', () => startQuiz('personality'));
interestButton.addEventListener('click', () => startQuiz('interest'));
