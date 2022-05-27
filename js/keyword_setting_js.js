let state=[];
const keyword=document.getElementsByClassName("keyword");

Init();

function Init(){
    for(let y=1; y<=5; y++){
        state[y]=localStorage.getItem(y);
    }
}