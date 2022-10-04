/* 배열 선언 */
//  let arr = []; //new Array();
//  console.log(arr);

/* 배열 추가 삭제 :뒤에서 */
//  arr.push('❤');
//  arr.push('😍');
//  arr.push('💋');
//  console.log(arr);

 /* 배열 추가 삭제 :앞에서 */
// arr.pop();  
// console.log(arr);

/* 배열 순회 */
// arr = ['🍕','🍔','🍗','🍜',] ;
// // for(let i = 0; i < arr.length;i++){
// //   console.log(arr[i]);
// // } 

// for (let i of arr){
//   console.log(i);
// }

// /* 배열의 length 속성*/
// console.log(arr.length);

// //배열 비우기
// arr.length = 3;
// console.log(arr.length);
// // for (let i of arr){
// //   console.log(i);
// // }

// arr = [] // 이렇게 해도 비워짐.
// console.log(arr);
// /* 배열을 문자열로 반환*/
// arr = ['🍕','🍔','🍗','🍜',] ; // js는 , 마지막에 붙음. 이거 오류 안남. --> 항목항목들이 
// let arrs =  String(arr);
// console.log(arrs);


// /* 문자열 split하면 배열반환*/
// arr2 = arrs.split(',');
// console.log(arr2);

/* 배열 정렬 */
let num = [1,3,5,2,4];
num.sort();
console.log(num);

/* 배열 섞기*/
// const shuffle = (num) => {
//   for(let i = 0;i<num.length;i++){
//     let idx1 = Math.floor(Math.random()*5);//0~4난수
//     let idx2 = Math.floor(Math.random()*5);//0~4난수

//     if (idx1 == idx2) continue;

//     //idx1위치의 값과 idx2위치의 값을 바꿔치기.
//    let temp = num[idx1];
//    let [idx1] = num[idx2];
//    let [idx2] = temp;
  
//     console.log(`idx1 = ${idx1}, idx2 =${idx2}`);
//   }
// }

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

console.log(shuffle(num));






/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 
let nf = num.filter((x) =>  x > 3 ); 
console.log(nf);


// /* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

// 얕은 복사 : 주소값 복사
let setC = setA ;
console.log(`setC => ${setC}`);

setA[0] = 100;
console.log(`setC => ${setC}`);


// 깊은 복사 : 원본은 두고 복사본 만들기

setA[0] = 1;
let setD = [...setA, ...setB] ; // A를 ...하면 풀어준다는 것. 
console.log(`setD => ${setD}`);

setA[0] = 100;
console.log(`setD => ${setD}`);




// //합집합
let union = [...setA, ...setB]
console.log(union);

// //교집합
let intersection =  setA.filter((i)=>setB.includes(i));
console.log(intersection);

// //차집합
let difference =  setA.filter((i)=>!setB.includes(i));
console.log(difference);




