// let p = require('prompt')

// p.start() 

// const getInput = () => {
//     p.get(['type stuf'], (err,result) => {
//     console.log(('you typed'));
//     console.log(result);
// })
// }

// getInput()

let options = {
    1: 'up', 
    2: 'down'
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
    rl.question('Type your answer \n', function(answer){
        if (answer === 'exit'){
            console.log('you exited');
            rl.close()
        }else{
            clearConsole()
            console.log(answer);
            options[answer]
            ?
            console.log(options[answer])
            :
            console.log('invalid choice');
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
