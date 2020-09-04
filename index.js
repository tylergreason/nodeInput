// let p = require('prompt')

// p.start() 

// const getInput = () => {
//     p.get(['type stuf'], (err,result) => {
//     console.log(('you typed'));
//     console.log(result);
// })
// }

// getInput()

const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const recursiveAsyncReadline = () => {
    rl.question('Type your answer \n', function(answer){
        if (answer === 'exit'){
            rl.close()
        }else{
            
            console.log(answer);
            recursiveAsyncReadline()
        }
    })
}

// recursiveAsyncReadline()

const num = rl.question('enter a number to square', function(answer){
    return (answer * answer)
    rl.close()
})
console.log(num);
