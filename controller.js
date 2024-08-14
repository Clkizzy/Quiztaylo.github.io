const questions = [
    { 
        text: '"You said the way my blue eyes shined, put those Georgia stars to shame that night"', 
        options: ['Tim McGraw', 'Our Song', 'Stay Beautiful'], 
        answer: 'Tim McGraw',
    },
    { 
        text: '"I hate that stupid old pickup truck you never let me drive"', 
        options: ['Cold as You', 'Picture to Burn', 'Teardrops on My Guitar'], 
        answer: 'Picture to Burn',
    },
    { 
        text: '"Our song is the slamming screen door sneaking out late tapping on your window"', 
        options: ['Mary is Song (Oh My My My)', 'Our Song', 'A Perfectly Good Heart'], 
        answer: 'Our Song',
    },
    { 
        text: '"Back then, I swore I was gonna marry him someday but I realized some bigger dreams of mine"', 
        options: ['Hey Stephen', 'Forever & Always', 'Fifteen'], 
        answer: 'Fifteen',
    },
    { 
        text: '"So I sneak out to the garden to see you We keep quiet cause we were dead if they knew"', 
        options: ['Safe & Sound', 'Jump Then Fall', 'Love Story'], 
        answer: 'Love Story',
    },
    { 
        text: '"And there you are on your knees begging for forgiveness, begging for me"', 
        options: ['The Way I Loved You', 'Change', 'White Horse'], 
        answer: 'White Horse',
    },
    { 
        text: '"Because she wears short skirts, I wear t-shirts she is cheer captain and I am on the bleachers"', 
        options: ['You Belong with Me', 'Fifteen', 'Superstar'], 
        answer: 'You Belong with Me',
    },
    { 
        text: '"Mr. Never told me why Mr. Never had to see me cry"', 
        options: ['Tell Me Why', 'Mr. Perfectly Fine', 'Bye Bye Baby'], 
        answer: 'Mr. Perfectly Fine',
    },
    { 
        text: '"You were the prince, I used to be a damsel in destress"', 
        options: ['Today Was a Fairytale', 'White Horse', 'Forever & Always'], 
        answer: 'Today Was a Fairytale',
    },
    { 
        text: '"And I remember that fight, 2:30 AM, as everything was slipping right out of our hands"', 
        options: ['Mine', 'Last Kiss', 'Innocent'], 
        answer: 'Mine',
    },
    { 
        text: '"You gave me roses and I left them there to die"', 
        options: ['The Story of Us', 'Back to December', 'Dear John'], 
        answer: 'Back to December',
    },
    { 
        text: '"I sneak in and see your friends and her snotty little family all dressed in pastel"', 
        options: ['Haunted', 'Better Than Revenge', 'Speak Now'], 
        answer: 'Speak Now',
    },
    { 
        text: '"Just close your eyes, the sun is going down"', 
        options: ['Safe & Sound', 'Never Grow Up', 'Ours'], 
        answer: 'Safe & Sound',
    },
    { 
        text: '"I used to know my place was a spot next to you, now I am searching the room for an empty seat"', 
        options: ['Haunted', 'The Story of Us', 'Speak Now'], 
        answer: 'The Story of Us',
    },
    { 
        text: '"Cause I love the gap between your teeth and I love the riddles that you speak"', 
        options: ['The Story of Us', 'Dear John', 'Ours'], 
        answer: 'Ours',
    }, 
    { 
        text: '"She took him faster than you can say sabotage"', 
        options: ['Better Than Revenge', 'Mean', 'Haunted'], 
        answer: 'Better Than Revenge',
    },
    { 
        text: '"Maybe we got lost in translation, maybe I asked for too much""', 
        options: ['I Knew You Were Trouble', 'All Too Well', 'Begin Again'], 
        answer: 'All Too Well',
    },
    { 
        text: '"Mr. Superior Thinking, do you have all the space that you need?"', 
        options: ['The Last Time', 'Starlight', 'I Bet You Think About Me'], 
        answer: 'I Bet You Think About Me',
    },
    { 
        text: '"Because you throw your head back laughing like a little kid"', 
        options: ['The Lucky One', 'Begin Again', 'The Very First Night'], 
        answer: 'Begin Again',
    },
    { 
        text: '"You break my heart in the blink of an eye"', 
        options: ['The Last Time', 'I Knew You Were Trouble', 'Sad Beautiful Tragic'], 
        answer: 'The Last Time',
    },
    { 
        text: '"It feels like a perfect night for breakfast at midnight, to fall in love with strangers"', 
        options: ['Red', '22', 'The Very First Night'], 
        answer: '22',
    },
    { 
        text: '"Cherry lips, crystal skies, I could show you incredible things"', 
        options: ['I Know Places', 'Style', 'Blank Space'], 
        answer: 'Blank Space',
    },
    { 
        text: '"I said, "No one has to know what wе do" his hands are in my hair, his clothes are in my room"', 
        options: ['New Romantics', 'Wildest Dreams', '"Slut!"'], 
        answer: 'Wildest Dreams',
    },
    { 
        text: '"You got that James Dean daydream look in your eye"', 
        options: ['Style', 'Blank Space', 'Wildest Dreams'], 
        answer: 'Style',
    },
    { 
        text: '"People like you always want back, the love they gave away"', 
        options: ['All You Had to Do Was Stay', 'I Wish You Would', 'Is It Over Now?'], 
        answer: 'All You Had to Do Was Stay',
    },
    { 
        text: '"I can feel the flames on my skin, crimson red paint on my lips"', 
        options: ['Getaway Car', '...Ready for It?', 'I Did Something Bad'], 
        answer: 'I Did Something Bad',
    },
    { 
        text: '"In the middle of the night, in my dreams, you should see the things we do, baby"', 
        options: ['...Ready for It?', 'End Game', 'Look What You Made Me Do'], 
        answer: '...Ready for It?',
    },
    { 
        text: '"And all at once You are the one I have been waiting for"', 
        options: ['Gorgeous', 'King of My Heart', 'Dress'], 
        answer: 'King of My Heart',
    },
    { 
        text: '"But I got smarter, i got harder, in the nick of time"', 
        options: ['End Game', 'Dancing with Our Hands Tied', 'Look What You Made Me Do'], 
        answer: 'Look What You Made Me Do',
    },
    { 
        text: '"And it was so nice, so peaceful and quiet"', 
        options: ['I Forgot That You Existed', 'Lover', 'You Need to Calm Down'], 
        answer: 'I Forgot That You Existed',
    },
    { 
        text: '"Could all be separated from my good ideas and power moves"', 
        options: ['I Think He Knows', 'The Man', 'False God'], 
        answer: 'The Man',
    },
    { 
        text: '"Our songs, our films, united we stand, our country, guess it was a lawless land"', 
        options: ['Miss Americana & the Heartbreak Prince', 'Cruel Summer', 'Death By A Thousand Cuts'], 
        answer: 'Death By A Thousand Cuts',
    },
    { 
        text: '"Why are you mad when you could be GLAAD?"', 
        options: ['It is Nice to Have a Friend', 'Afterglow', 'You Need to Calm Down'], 
        answer: 'You Need to Calm Down',
    },
    { 
        text: '"When you are young, they assume you know nothing"', 
        options: ['August', 'Cardigan', 'Betty'], 
        answer: 'Cardigan',
    },
    { 
        text: '"I can see you standing, honey, with his arms around your body"', 
        options: ['Exile', 'My Tears Ricochet', 'Hoax'], 
        answer: 'Exile',
    },
    { 
        text: '"I think your house is haunted, your dad is always mad and that must be why"', 
        options: ['Betty', 'Seven', 'Invisible String'], 
        answer: 'Seven',
    },
    { 
        text: '"And you know damn well, for you, I would ruin myself"', 
        options: ['August', 'Illicit Affairs', 'Hoax'], 
        answer: 'Illicit Affairs',
    },
    { 
        text: '"And in a feud with her neighbor she stole his dog and dyed it key lime green"', 
        options: ['Mad Woman', 'Betty', 'The Last Great American Dynasty'], 
        answer: 'The Last Great American Dynasty',
    },
    { 
        text: '"I made you my temple, my mural, my sky. Now I am begging for footnotes in the story of your life"', 
        options: ['Tolerate It', 'Champagne Problems', 'Long Story Short'], 
        answer: 'Tolerate It',
    },
    { 
        text: '"Because I dropped your hand while dancing"', 
        options: ['Closure', 'Tolerate it', 'Champagne Problems'], 
        answer: 'Champagne Problems',
    },
    { 
        text: '"Good thing his mistress took out a big life insurance policy"', 
        options: ['Marjorie', 'No Body, No Crime', 'Dorothea'], 
        answer: 'No Body, No Crime',
    },
    { 
        text: '"Because we were like the mall before the internet it was the one place to be"', 
        options: ['Evermore', 'Happiness', 'Coney Island'], 
        answer: 'Coney Island',
    },
    { 
        text: '"Sometimes, I feel like everybody is a sexy baby snd I am a monster on the hill"', 
        options: ['Question...?', 'Anti-Hero', 'Maroon'], 
        answer: 'Anti-Hero',
    },
    { 
        text: '"I drew curtains closed, drank my poison all alone"', 
        options: ['The Great War', 'Vigilante Shit', 'Sweet Nothing'], 
        answer: 'The Great War',
    },
    { 
        text: '"So, make the friendship bracelets, take the moment and taste it"', 
        options: ['Sweet Nothing', 'Snow on the Beach', 'You are on Your Own, Kid'], 
        answer: 'You are on Your Own, Kid',
    },
    { 
        text: '"Do you really want to know where I was April 29th?"', 
        options: ['Dear Reader', 'Vigilante Shit', 'High Infidelity'], 
        answer: 'High Infidelity',
    },
    { 
        text: '"Weave your little webs of opacity, my pennies made your crown"', 
        options: ['Karma', 'Mastermindt', 'Labyrinth'], 
        answer: 'Karma',
    },
    { 
        text: '"And by the way, I am going out tonight"', 
        options: ['Bejeweled', 'Maroon', 'Snow on the Beach'], 
        answer: 'Bejeweled',
    },
    { 
        text: '"All my mornings are Monday, stuck in an endless February"', 
        options: ['So Long, London', 'Fortnight', 'Down Bad'], 
        answer: 'Fortnight',
    },
    { 
        text: '"God save the most judgmental creeps, who say they want what is best for me"', 
        options: ['The Tortured Poets Department', 'The Alchemy', 'But Daddy I Love Him'], 
        answer: 'But Daddy I Love Him',
    },
    // Adicione mais perguntas conforme necessário
];

let correctAnswersCount = 0; // Contador de respostas corretas
let totalQuestions = questions.length;
let currentQuestionIndex;
let usedQuestions = []; // Array para armazenar perguntas já usadas

function loadQuestion() {
    // Remove a pergunta atual do array de perguntas disponíveis
    if (questions.length === 0) {
        // Todas as perguntas foram usadas, mostrar resultado
        return showResults();
    }

    // Embaralha as perguntas restantes
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestionIndex = randomIndex;

    // Adiciona a pergunta ao array de usadas e remove do array de disponíveis
    usedQuestions.push(questions.splice(randomIndex, 1)[0]);

    const question = usedQuestions[usedQuestions.length - 1];
    document.getElementById('question').innerText = question.text;
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((button, index) => {
        button.innerText = question.options[index];
        button.classList.remove('correct', 'incorrect');
    });
}

function checkAnswer(button) {
    const question = usedQuestions[usedQuestions.length - 1];
    const buttons = document.querySelectorAll('.option');
    let isCorrect = false;

    buttons.forEach(btn => {
        if (btn.innerText === question.answer) {
            btn.classList.add('correct');
            if (btn === button) {
                isCorrect = true;
            }
        } else {
            btn.classList.add('incorrect');
        }
    });

    if (isCorrect) {
        correctAnswersCount++;
    }

    // Carrega a próxima pergunta
    setTimeout(loadQuestion, 1000); // Mudar pergunta após 1 segundo
}

function showResults() {
    const resultElement = document.getElementById('question');
    resultElement.innerHTML = `Você acertou ${correctAnswersCount} de ${totalQuestions} questões!`;
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(btn => {
        btn.style.display = 'none'; // Esconde os botões após o fim do jogo
    });
}

// Inicializa o jogo com uma pergunta aleatória
loadQuestion();