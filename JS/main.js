// JS Script Run Check
console.log('JS OK!');

// Recupero l'elemento dal DOM
const content = document.getElementById('content');

// Creo un ciclo FOR che scriva una serie numerica da 1 a 100
for(let i = 1; i <= 100; i++) {

    // variabile "fizz/buzz/fizzbuzz"
    let multiWord = "";

    // background
    let background = 'bg-primary';
    
    // controllo multipli di i
    if (!(i % 3) && !(i % 5)) {
        multiWord = 'FizzBuzz';
        background = 'bg-danger';
    } else if (!(i % 3)) {
        multiWord = 'Fizz';
        background = 'bg-info';
    } else if (!(i % 5)) {
        multiWord = 'Buzz';
        background = 'bg-warning';
    } else {
        multiWord = i;
    }
    console.log(multiWord)  
    
    content.innerHTML += `<div class="col-2 ${background} p-5 m-2 fs-1 fw-bold text-white">${ multiWord }</div>`;
}
