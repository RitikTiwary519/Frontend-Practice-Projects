const myBox = document.getElementById("myBox");
let i = 0;
function changeColor(event)
{
    if(i===0)
    {
        console.log(event);
        event.target.style.backgroundColor="tomato";
        event.target.textContent="OUCH! 😭";
        i=1;
    }
    else
    {
        event.target.textContent="Don't touch me 😒";
        event.target.style.backgroundColor="lightgreen";
        i=0;
    }
    

}
function mousehover(event)
{
    event.target.backgroundColor="lightyellow";
    event.target.textContent="please! 😭";

}


myBox.addEventListener("mouseover",mousehover);
myBox.addEventListener("mouseout",event =>{
    event.target.backgroundColor="lightgreen";
    event.target.textContent="Don't touch me! 😭"; 
});

myBox.addEventListener("click",changeColor)