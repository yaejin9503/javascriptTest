
/**
 * 4-2 뒤집은 소수 
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 
 * 단 910를 뒤집으면 19로 숫자화 해야 한다. 
 * 첫 자리부터의 연속된 0은 무시한다.
 * 
 * 출력설명 : 첫줄에 뒤집은 소수를 출력 출력순서는 입력된 순서 
 * 출력예제 : 23 2 73 2 3 
 *  
 */
function solution(arr){  
    let answer = []; 

    let array = []; 
    for( let x of arr ){
        let result = ''; 
        x = String(x); 
        for(let i =x.length-1; i>=0; i--){ 
            result += x[i];
        }
        array.push(result); 
    }

    for(let x of array){ 
        x = parseInt(x); 
        if(isPrime(x)) answer.push(x);
    }
    return answer; 
}

function isPrime(num){ 
    let result = true; 
    if(num === 1) return false; 
    for(let j=2; j<num; j++ ){ 
        if(num%j === 0){
            result = false; 
        } 
    }
    return result;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr)); 


function answer(arr){ 
    let result = []; 
    for(let x of arr){ 
        let res = Number(x.toString().split("").reverse().join("")); 
        if(isPrime(res)) result.push(res); 
    }
    return result; 
}

