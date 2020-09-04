let options = {
    1: 'up', 
    2: 'down'
}

const printObjectValues = (obj) => {
    for (prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }   
    // need to return empty string to prvent it from logging 'undefined'
    return ''
}

const clearConsole = function () {
    return process.stdout.write('\033c');
  }

const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const recursiveAsyncReadline = () => {
    rl.question(`Type your answer \n ${printObjectValues(options)}`, function(answer){
        if (answer === 'exit'){
            console.log('you exited');
            rl.close()
        }else{
            clearConsole()
            if(options[answer]){
                console.log(options[answer]);
            }else{
                console.log('invalid choice');
            }
            recursiveAsyncReadline()
        }
    })
}

recursiveAsyncReadline()
let num; 
rl.question('enter a number to square', function(answer){
    num = answer; 
    rl.close()
})
// console.log(num);
