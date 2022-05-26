const main=document.getElementsByClassName("out")[0];
const href_area="./area.html";
const href_nameset="./name_set.html";
const href_game="./game.html";

document.getElementById("start_button").addEventListener("click", function(e){GameStart(e.target, "index");});


function Empty(){
    while(main.hasChildNodes){
        main.removeChild(main.firstChild);
    }
}

function wait(sec){
    return new Promise(resolve=>setTimeout(resolve, sec*1000));
}

async function GameStart(target){
    
    target.classList.add('clicked')
    target.innerText="";

    let new_page=document.createElement("div");
    new_page.className="page";
    target.appendChild(new_page);
    
    await wait(0.5);
    location.href=href_nameset;

}
