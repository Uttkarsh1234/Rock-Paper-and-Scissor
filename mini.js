const cons = document.querySelectorAll(".con1");
let mes = document.querySelector("#mess");
let getCom_choice= ()=>{
    let arr = ["rock","Scissor","Paper"];
    let random = Math.floor(Math.random()*3);
    return arr[random];
}

let drawGame=()=>{
    mes.innerText = "Game is Draw! Try Again";
    mes.style.backgroundColor = "aqua";
    mes.style.width="25rem"
}

let Play = (user_choice)=>{
    const comp = getCom_choice();
    if(user_choice === comp){
        drawGame();
    }
    else{
        mes.style.width="12rem"
        let user_wins = true;
        if(user_choice === 'rock'){
            user_wins =comp === 'Paper'?false:true; 
        }
        else if(user_choice === 'Paper'){
            user_wins = comp === 'Scisssor'?false:true;
        }
        else{
            user_wins = comp === 'rock'?false:true;
        }
        showWin(user_wins);
    }
}
const u_score = document.querySelector("#user_score");
const c_score = document.querySelector("#comp_score");
let user=0;
let computer=0;

const showWin = (user_wins)=>{
    if(user_wins){
        user++;
        u_score.innerText = user;
        mes.innerText = "You win!"
        mes.style.backgroundColor = "green";
    }
    else{
        computer++;
        c_score.innerText = computer;
        mes.innerText = "You Lost!";
        mes.style.backgroundColor = "red"
    }
};

cons.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user_choice = choice.getAttribute("id");
        Play(user_choice);
    });
});
