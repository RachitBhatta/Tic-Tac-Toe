let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn0=true;
let new_button=document.querySelector(".new_button");
let msg_container=document.querySelector(".message_container");
let msg=document.querySelector(".msg");
let count=0;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("Button was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        let winner=check_winner();
        count++;
        if(count==9 && count!=winner){
            gameDraw();
        }
        

    });
   
});
const reset_game=()=>{
    turn0=true;
    count=0;
    enable_box();
    msg_container.classList.add("hide");


};
const disable_box=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable_box=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const show_winner=(winner)=>{
    msg.innerText=`Congratulation,\nThe winner is ${winner}`;
    msg_container.classList.remove("hide");
    disable_box()

}
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msg_container.classList.remove("hide");
    disable_box();
};
const check_winner = ()=>{
    for(let pattern of winpatterns){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1==position2 && position2==position3){
                
                show_winner(position1);
                return true;
            };

        };
    };
};
new_button.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);



