function solution(str){ 
    let answer; 

    str = str.split(" "); 
    let text = str[0];  
    let standardText = str[1]; 

    const arrLength = text.length; 

    let array = []; 
    for(let i=0; i< arrLength; i++){ 
        if(text[i] === standardText){ 
            array.push(i); 
        }
    }

    for(let j=0; j<arrLength; j++){ 
        
    }

    return answer; 
}

let str = 'teachermode e'; 
console.log(soulution(str));
// return 1 0 1 2 1 0 1 2 2 1 0