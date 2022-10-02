let player;
let computer;
let result; 



const rock = document.getElementById("rocks");
const paper = document.getElementById("papers");
const scissors = document.getElementById("scissors");
const points = document.getElementsByClassName("points");

const rockChange = (e) =>{
    rock.style.display ='none';
    
}

const paperChange = (e) =>{
    papers.style.display ='none'
}

rock.addEventListener("click",rockChange);
papers.addEventListener("click",paperChange);




