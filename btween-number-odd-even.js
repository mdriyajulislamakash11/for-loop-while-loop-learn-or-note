// give me tha list numbers bteen 1 to 30 divided by 5

// for(let i = 1 ; i <= 30 ; i++){
//     if(i % 5 ===0){
//         console.log(i)
//     }
// }

// for(let i = 1 ; i <= 30 ; i++){
//     if(i % 3 ===0){
//         console.log(i)
//     }
// }

// for(let i = 1 ; i <= 30; i++){
//     if(i % 3 ===0 || i % 5 ===0 || i % 2 ===0){
//         console.log(i)
//     }
// }


// give me the sum of number from 1 to 20 that divisible by 3
let sum = 0;

for(let n = 1 ; n <=30 ; n++){
    if(n % 3 ===0){
        console.log(n)
        sum = sum + n;
    }
}
console.log('1 theke 30 porjonto total sum: ', sum);
