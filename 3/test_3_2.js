/**
 * 회문 문자열 
 * 정규 표현식 이용해서 문자열이 아니라면 ''공백으로 replace 해주는게 핵심
 */
function solution(str){
    let answer = "YES";
    str = str.toLowerCase().replace(/[^a-z]/g, ''); 
    
    if(str.split('').reverse().join('') !== str) answer = "NO";
    return answer; 
}

let str = 'found7, time; study; Yduts; emit, 7Dnuof'; 
console.log(solution(str));
