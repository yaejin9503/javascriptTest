
/**
 * 3-5 문자열 압축 
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
 * 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
 * 오. 단 반복횟수가 1인 경우 생략합니다.
 * 
 * 입력예제 : KKHSSSSSSSE
 * 출력예제 : K2HS7E
 */

function solution(str){  
    let answer = ''; 
    let textArray = [];
    let numArray = [];  

    for(let i=0; i< str.length-1; i++){ 
        if(!textArray.includes(str[i+1])){ 
            textArray.push(str[i+1]); 
        }          
    }

    str = str.split(''); 

    for(x of textArray){
        let cnt = 1;  
        for(let i=0; i< str.length-1; i++){ 
            if(str[i] === x){
                if(str[i] === str[i+1]){ 
                    cnt++; 
                }
            }
        }
        numArray.push(cnt);
    }

    for(let i=0; i<textArray.length; i++){ 
        if(numArray[i] !== 1) answer += textArray[i] + numArray[i];
        else answer+= textArray[i];
    }
 
    return answer; 
}

let str = 'KKHSSSSSSSE'; 

console.log(solution(str)); 

//해설

function answer(str){ 
    let result = ''; 

    let cnt =1; 
    for(let i=0; i<=str.length -1; i++){ 
        if(str[i] === str[i+1]) cnt++; 
        else{
            if(cnt !== 1){ 
                result += str[i] + cnt; 
            }else result += str[i];
            cnt = 1;
        }  
    }
    return result; 
}

console.log(answer(str));



