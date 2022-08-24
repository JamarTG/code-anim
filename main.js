const text = `*const ≥editor &= ≥document.&getElementById#(%'editor'#);
$*let ≥stroke &= new Audio#(%'mp3.mp3'#);
$*let ≥pressedKey &= %''#;

$$*async *function &sleep#(≥ms#) #{
    $/@await @new *Promise#(≥resolve &=> &setTimeout#(≥resolve&,≥ms#)#);
    $}
    $*async *function run#(#)#{
        $/!for#(*let ≥letter *of text#)#{
            $//!if#(≥pressedKey#)#{
            $///≥pressedKey.style.backgroundColor &= %'353434'#; 
        }
        $///*editor.≥textContent &+= letter;
        $///≥pressedKey &= ≥document.getElementById#(≥letter&.toLocaleUpperCase#(#)#);
        $///≥pressedKey.style.backgroundColor &= %'red';
        $///@await &sleep#(%10#);
}}
$&run#()`

// document.getElementById('audio').play()

let capsActive = false;

const editor = document.getElementById('editor');

let stroke = new Audio();

stroke.volume = 0.7;

let pressedKey = ''

async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

function isLetter(char) {
    return ((char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z'));
}


async function playClick() {
    await stroke.play()
}

async function run() {
    let currentColor = 'green';
    for (let letter of text) {
        playClick()


        if (letter.toUpperCase() === letter && isLetter(letter)) {
            capsActive = !capsActive;
            document.getElementById('CapsLock').style.backgroundColor = 'black'

        } else {
            capsActive = !capsActive;
            document.getElementById('CapsLock').style.backgroundColor = '#353434'
        }

        if (letter === '!') {
            currentColor = 'purple'
            continue
        } else if (letter === '@') {
            currentColor = '#ADD8E6'
            continue
        } else if (letter === "*") {
            currentColor = '#6495ED'
            continue
        } else if (letter === "#") {
            currentColor = '#f2f21d'
            continue
        } else if (letter === "&") {
            currentColor = '#f7f7be'
            continue
        } else if (letter === '%') {
            currentColor = '#e8a85f'
            continue
        } else if (letter === '^') {
            currentColor = '#e8a85f'
            continue
        } else if (letter === '≥') {
            currentColor = '#7DF9FF'
            continue
        }

        if (pressedKey) {
            pressedKey.style.backgroundColor = '#353434';
        }
        if (letter === '$') {
            editor.innerHTML += '<br>'
            addLine()
        } else if (letter === '/') {
            editor.innerHTML += 'ㅤㅤ'
        } else {
            editor.innerHTML += `<span style="color:${currentColor};">${letter}</span>`
        }

        if (document.getElementById(letter.toLocaleUpperCase())) {
            pressedKey = document.getElementById(letter.toLocaleUpperCase())
            pressedKey.style.backgroundColor = 'black'
            pressedKey.style.color = 'white'
        }
        await sleep(Math.random() * 250) + 50;
    }
}

let currentLineNumber = 0

const addLine = () => {
    let div = document.createElement('div');
    div.classList.add('number-box')
    div.setAttribute('id', ++currentLineNumber)
    div.innerText = `${currentLineNumber}`;
    numbering.appendChild(div);

}

addLine()

run()