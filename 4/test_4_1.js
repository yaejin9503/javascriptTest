
/**
 * 4-1 자릿수의 합 
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
 * 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
 * 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
 * 
 * 출력설명 : 자릿수의 합이 최대인 자연수를 출력한다.
 * 입력예제 
 * 7
 * 128 460 603 40 521 137 123
 * 출력예제 : 137 
 * 
 */
function solution(arr){ 
    let answer =''; 

    let max = 0; 
    let maxNumber = 0; 
    for(x of arr){ // 137 
        let hundred = Math.floor(x/100); // 몫으로 백의 자리가 나옴. 
        let ten = Math.floor(Math.floor(x/10)%10) //십의 자리
        let one = Math.floor(x%10); //일의 자리

        let sum = hundred + ten + one;
        if(max < sum){
            max = sum;
            answer = x;          
        }else if (sum === max){ 
            if(x > answer) answer = x; 
        }
    }

    return answer; 
}

let arr = [ 128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr)); 

