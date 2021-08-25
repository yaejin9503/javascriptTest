
/**
 * 4-3 멘토링
 * 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다. 
 * 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
 * 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
 * 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
 * M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
 * 
 * 
 */
function solution(arr){ 
    let answer; 

    let standard = arr[0]; 

    let obj = {};
    let count =0;
    for(let i=0; i<standard.length; i++){ 
        let array = []; 
        for(let j=i+1; j<=standard.length-1;j++){ 
            array.push(standard[j]); 
            count++;
        }
        obj[standard[i]] = array; 
    }


    for(let i=1; i<arr.length; i++){ 
        for(let j=0; j<arr[i].length; j++){ 
            let value = arr[i][j]; 
            let valueStandard = obj[value]; // 1 , 2 

            for(let k =j+1; k <= arr[i].length-1; k++){ 
                let compareValue = arr[i][k]; 
                if(!valueStandard.includes(compareValue)){ 
                    count--; 
                }
            }
        }
    }

    answer = count;

    return answer; 
}

let arr = [ 
    [3,4,1,2],
    [4,3,2,1],
    [3,1,4,2]
]
console.log(solution(arr));