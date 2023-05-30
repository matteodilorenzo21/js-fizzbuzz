// JS Script Run Check
console.log('JS OK!');

// Recupero l'elemento dal DOM
const content = document.getElementById('content');
console.log(content);

// Creo un ciclo FOR che scriva una serie numerica da 1 a 100
for(let i = 1; i <= 100; i++) {

    // variabile "Fizz"
    let multiWord = "";

    // controllo multipli di i
    if (!(i % 3) && !(i % 5)) {
        multiWord = 'FizzBuzz';
    } else if (!(i % 3)) {
        multiWord = 'Fizz';
    } else if (!(i % 5)) {
        multiWord = 'Buzz';
    } else {
        multiWord = i;
    }
    console.log(multiWord)  
    
    content.innerText += ' ' + multiWord;
}
