const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.substring(i, i + 10));
  };

  arr = arr.map(elem => {

    if (elem.match(/\*/g)) return elem = ' ';

    elem = parseInt(elem).toString();

    let code = '';

    for (let j = 1; j < elem.length; j += 2) {
      elem[j] === '0' ? code += '.' : code += '-';
    };

    for (const prop in MORSE_TABLE) {
      if (prop === code) code = MORSE_TABLE[prop];
    }

    return code;
  });

  return arr.join('');
}

module.exports = {
    decode
}