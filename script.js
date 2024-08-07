const body = document.body;

const board = document.getElementById('board');

const hangman = document.getElementById('hangman');
const word = document.getElementById('word');
const blocks = document.getElementById('blocks');

const startScreen = document.getElementById('startScreen');
const startBtn = document.getElementById('startBtn');

const words = [
    "apple", "banana", "cherry", "date", "elephant", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "xylophone", "yogurt", "zebra", "abstract", "breeze", "cactus", "dolphin", "emerald", "fountain",
    "giraffe", "horizon", "island", "jungle", "kitchen", "lantern", "mountain", "notebook", "octopus", "puzzle",
    "quasar", "robot", "sunflower", "telescope", "umbrella", "vortex", "whistle", "xenon", "yacht", "zinc",
    "amazing", "balloon", "courage", "delight", "enigma", "flamingo", "giraffe", "harvest", "inspire", "jigsaw",
    "kiwi", "luminous", "mysterious", "nostalgia", "opulent", "paradise", "quintessence", "rhapsody", "serenity", "twilight",
    "universe", "vivid", "whimsy", "xenophobia", "yearning", "zephyr", "artichoke", "brilliance", "caramel", "dazzle",
    "eclectic", "fascinate", "glisten", "harmony", "intrigue", "juxtapose", "kaleidoscope", "luminous", "mosaic", "navigable",
    "optimism", "plasma", "quintet", "radiant", "silhouette", "tantalize", "unique", "vortex", "wonder", "xerox"
  ];

let started = false;
let value = 0;
let userInput ='';
let chosen;
let count = 0;

function pickWord(){
    let index = Math.floor(Math.random() * words.length) + 1;
    chosen = words[index];
    count = chosen.length;
    setValue(chosen);
}

startBtn.addEventListener('click', ()=>{
    startScreen.style.display = 'none';
    board.style.display = 'flex';
    pickWord();
    console.log(chosen);
    started = true;
})

document.addEventListener('keydown', (e)=>{
    if(started){
        if (e.code === `Key${e.key.toUpperCase()}`){
            userInput = e.key;
            check(userInput);
        }
    }
});



function setValue(chosen){
    for(let i = 0; i<chosen.length; i++){
        const under = document.createElement('div');
        under.style.width = '50px';
        under.style.height = '50px';
        under.style.borderBottom = 'solid';
        under.style.marginRight = '5px';
        under.style.fontSize = '50px';
        under.style.textAlign = 'center';


        under.setAttribute('class', `letter-${i}`);
        word.appendChild(under);
    }
}

function check(k){
    let index = chosen.indexOf(k)    //includes -> index   or return -1
    const indices = [];
    while (index !== -1) {
        indices.push(index);
        index = chosen.indexOf(k, index + 1);
    }
    if(indices.length != 0){
        for(let i = 0; i<indices.length; i++){
            const box = document.getElementsByClassName(`letter-${indices[i]}`)[0];
            box.textContent = k;
            userInput = '';
        }
    }
    else {
        value += 1;
        switchMan();
    }

}


function switchMan(){
    switch(value){
        case 0:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-0.svg';
            break;
        case 1:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-1.svg';
            break;
        case 2:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-2.svg';
            break;
        case 3:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-3.svg';
            break;
        case 4:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-4.svg';
            break;
        case 5:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-5.svg';
            break;
        case 6:
            document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-6.svg';
            gameOver();
            break;
    }
}   

function gameOver(){    
    console.log("done");
    // document.removeEventListener('keydown', (e)=>{
    //     userInput = e.key;
    //     check(userInput);
    // });
    userInput = '';
    for(let i = 0; i<chosen.length; i++){
        const box = document.getElementsByClassName(`letter-${i}`)[0];
        box.remove();
    }
    document.getElementById('hangman').src = 'https://codingnepalweb.com/demos/build-hangman-game-html-javascript/images/hangman-0.svg';
    startScreen.style.display = 'flex';
    board.style.display = 'none';
    value=0; 
    started=false;
    userInput='';
}