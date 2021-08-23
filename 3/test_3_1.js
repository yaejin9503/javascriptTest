
/**
 * 회문 문자열 
 * gooG 문자열을 거꾸로 봐도 똑같은 문자열인지  
 */
function solution(str){ 
    let answer = "YES"; 
    str = str.toLowerCase();

    for(let i=0; i< Math.floor(str.length/2); i++){ 
        if(str.charAt(i) !== str.charAt(str.length - 1-i)){
            answer = "NO"; 
        }
    }

    let reverseStr = str.split('').reverse().join(''); 
    if(reverseStr !== str) answer = "No"; 

    return answer; 
}

let str = 'Goooog'; 
console.log(solution(str));

