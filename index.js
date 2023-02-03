var buttonList = document.querySelectorAll("button");
for(var i=0; i<buttonList.length; i++){
    buttonList[i].addEventListener("click",function(){

        switch(this.innerHTML){
            case "w":
                var drumSound = new Audio("sounds/crash.mp3");
                drumSound.play();
                break;
            case "a":
                var drumSound = new Audio("sounds/kick-bass.mp3");
                drumSound.play();
                break;
            case "s":
                var drumSound = new Audio("sounds/snare.mp3");
                drumSound.play();
                break;
            case "d":
                var drumSound = new Audio("sounds/tom-1.mp3");
                drumSound.play();
                break;
            case "j":
                var drumSound = new Audio("sounds/tom-2.mp3");
                drumSound.play();
                break;
            case "k":
                var drumSound = new Audio("sounds/tom-3.mp3");
                drumSound.play();
                break;
            case "l":
                var drumSound = new Audio("sounds/tom-4.mp3");
                drumSound.play();
                break;
            
            default: console.log(this.innerHTML);
        }
    });
}

