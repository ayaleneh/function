var answer;
var multipe_num;
let sumnumber;
let num;
function sum(a,b){
  sumnumber=a+b
   answer=a+b
  return(answer)
}
 number=sum(4,7)
alert(answer,number)

function multiply(a,b){
  let rusult=a*b
let multipe_num="the multiplication result of the number is "+ rusult
return(multipe_num)
}
 num=multiply(4,7)
alert(num)
function sum3(sumnumber,y){
let result4=sumnumber+5
let result_num="the addition of the three number is "+result4
return(result_num)
}
let result3=sum3(number,5);
alert(result3)
function sum4(sumnumber,z){
  let result5=sumnumber*5
  let result_num="the multiplication of the three number is "+result5
  return(result_num)
  }
  let result6=sum4(number,5);
  alert(result6)
  function sum_array(){
    let summ;
    let summm=0
    for(let i=0;i<3;i++){
      summm=arguments[i]+summm;
      summ=summm
    }
    return summ
  }
  let result7=sum_array(2,3,4)
  alert(result7)
  
  function testarry(xs){
    let s=0;
    let i=0;
    for(i=0;i< xs.length;i++){
      s=s + xs[i];
     
    }
    return s;
  }
  alert("the sum of the three array value(2+3+4) is"+(testarry([2,3,4])));
  console.log(testarry([2,3,4]))
 
  function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
console.log(multiply([2,3,4]));
alert("the multiplication value of the array is "+multiply([2,3,4]))

function testDynamicArray (array) {
  var sum=1;
  for (var i=0; i<array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;
}
console.log(testDynamicArray([1,2,3,4,5]));
alert("the multiplication value of the array is "+testDynamicArray([1,2,3,4,5]))