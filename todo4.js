const divList = document.querySelector('.listHolder');
const addInput=document.querySelector('#addInput');
function addLists(){
    if(addInput.value ===''){
        alert('enter the list name please!!!');
    } else {
const ul=divList.querySelector('ul');
const li=document.createElement('li');
li.innerHTML=addInput.value;
addInput.value='';
ul.appendChild(li);
  }
}
addInput.addEventListener('keyup',(event)=>{
    if(event.which===13){
        addLists();
    }
});
const listUl=document.querySelector('.list');
const lis=listUl.children;
