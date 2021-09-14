// function solution(v)
// {
//     let answer = -1
//     // let max = 0;  
//     // for(let i=1; i< v.length;i++){ 
//     //     answer+= Math.abs(v[i-1] - v[i]); 
//     // } 
//     // if(answr > max) max = answer;  



//     return answer;
// }

// let v= [20,8,10,1,4,15]; 
// console.log(solution(v));


// function solution(plain)
// {
//     let newStr = plain.split('').reverse().join(''); 
//     if(newStr === plain) { 
//         return plain.length; 
//     }

//     for(let i=(plain.length -1);i>=0;i--){ 
//         for(let j=i-1; j>=0; j--){ 
//             if(plain[i] === plain[j]) break;

//             plain = plain + plain[j];
//             if(plain === plain.split('').reverse().join('')){
//                 return plain.length;
//             }
//         }
//     }
//     return plain.length;
// }

function solution(v){
    
}

let v= 'abcde'; 
console.log(solution(v));

