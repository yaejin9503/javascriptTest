/**
 * 3-4 가장 짧은 문자거리
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를
 * 출력하는 프로그램을 작하세요. 
 * 
 * return 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다. 
 * 입력예제 teachermode e
 * 출력예제 1 0 1 2 1 0 1 2 2 1 0
 */

function solution(str){ 
    let answer; 

    str = str.split(" "); 
    let text = str[0];  
    let standardText = str[1]; 

    const arrLength = text.length; 
    let cmt = 1000; 

    let array = []; 
    for(let i =0; i< arrLength; i++){ 
        if(text[i] !== standardText){ 
            cmt++; 
            array.push(cmt); 
        }else{ 
            cmt =0; 
            array.push(cmt); 
        }
    }

    cmt = 1000; 
    let standardArray = []; 
    for(let i=arrLength-1; i >= 0 ; i--){ 
        if(text[i] !== standardText){
            cmt++;
        }else{ 
            cmt =0; 
        }
        standardArray.push(cmt);
    }
    standardArray = standardArray.reverse(); 
    for(let i=0; i<arrLength; i++){ 
        if(array[i] >standardArray[i]){
            array[i] = standardArray[i];
        }
    }

    return array; 
}

let str = 'teachermode e'; 
let newStr = 'teachermode'
let t = 'e'; 
console.log(solution(str));
// return 1 0 1 2 1 0 1 2 2 1 0



function answer(s, t){ 
    let result = [];
    let p =1000;

    for(let x of s){ 
        if(x===t){ 
            p=0; 
            result.push(p); 
        }else{ 
            p++; 
            result.push(p); 
        } 
    }

    p=1000; 
    for(let i=s.length-1; i>=0; i--){ 
        if(s[i] === t) p=0;
        else{ 
            p++; 
            result[i] = Math.min(result[i], p); 
        }
    }
    return result; 
}

console.log(answer(newStr,t))