(function(){
let equals= document.getElementById('equal');
let clear=document.querySelector('.btn-clear');
let result = document.getElementById('result');
let currentValue='';
let answer;

let inputBtns=document.querySelectorAll('.btn');
inputBtns.forEach(function(input){
input.addEventListener('click',function(event){
let inputValue=event.target.dataset.num;
currentValue+=inputValue;
result.value=currentValue;
 })
});

equals.addEventListener('click', function(e){
if(result.value===''){
    result.value='Please enter an operation';
} else{
    currentValue=result.value;
    answer=eval(currentValue);
    result.value= answer;
}
})

clear.addEventListener('click',function(){
    result.value='';
})

})();

