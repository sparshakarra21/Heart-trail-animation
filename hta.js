const body = document.querySelector("body");
const heart = document.querySelector("span");

body.addEventListener("mousemove" , (event)=>{
    console.log(event.offsetX);
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const newheart = document.createElement("span");
    newheart.style.left = xpos + "px";
    newheart.style.top= ypos + "px";
    body.appendChild(newheart);
    const size = Math.random()*100;
    newheart.style.width = size+"px";
    newheart.style.height = size+"px";
    setTimeout(()=>{
        newheart.remove();
    },3000)

})