const btn = document.getElementById("button");
btn.addEventListener("click", changeBackgrounColor);

// Function to generate hex Color Code
function changeBackgrounColor() {
    let hexValue = "0123456789ABCDEF";
    let color = "#";
    
    for(let i = 0; i < 6; i++){
        color = color + hexValue[Math.floor(Math.random()* 16)];
    }
   

    document.getElementById("canvas").style.backgroundColor = color;

}
