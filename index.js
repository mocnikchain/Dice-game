function randomNumber1(){
    index1= Math.floor(Math.random() * 6)+1;
    document.querySelector(".img1").src= "images/dice"+index1+".png"
    return index1;
}
function randomNumber2(){
    index2= Math.floor(Math.random() * 6)+1;
    // // // // // // oba načina pravilna
    // document.querySelector(".img2").src= "images/dice"+index2+".png"
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+index2+".png")
    return index2;
}

document.querySelector("body").onclick=function(){
    randomNumber1();
    randomNumber2();
    if(index1===index2){
        document.querySelector("h1").textContent="🤝Draw!🤝";
        document.querySelector("h1").style.fontSize="4.6rem";
    }
    else if(index1>index2){
        document.querySelector("h1").textContent="🚩 Play 1 won!";
        document.querySelector("h1").style.fontSize="4.6rem";
    }
    else{
        document.querySelector("h1").textContent="Player 2 won! 🚩";
        document.querySelector("h1").style.fontSize="4.6rem";
    }
    var sum=index1+index2;
    document.querySelector("#sum").textContent="SUM : "+sum;
}
