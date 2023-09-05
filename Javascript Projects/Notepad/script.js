let save = document.getElementById('save');
let clear = document.getElementById('clear');
let input = document.getElementById('input');

clear.addEventListener('click',clearAll);
save.addEventListener('click',saveFn);
console.log(save);
document.addEventListener('DOMContentLoaded',()=>{
    let data = getItemFromStorage();
    input.value = data;
})

function saveFn(){
    console.log('fwgw');
    addItemToStorage(input.value);
}


function getItemFromStorage(){
    let data;
    if(localStorage.getItem('data')===null){
        data=[];
        localStorage.setItem('data',JSON.stringify(data));
    }else{
        data = JSON.parse(localStorage.getItem('data'));
    }
    return data
}

function addItemToStorage(value){
    let data = getItemFromStorage();
    data.splice(0,1);
    data.push(value);

    localStorage.setItem('data',JSON.stringify(data));
}



function clearAll(){
    input.value = "";
}