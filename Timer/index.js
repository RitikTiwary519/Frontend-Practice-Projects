
let timer = null;
let elapsedTime=0;
let currentTime=0;
let startTime=0;
let isRunning = false;

function Start()
{
    if(!isRunning)
    {
        isRunning=true;
        startTime = new Date()-elapsedTime;
        timer=setInterval(update,10);
    }

}

function Stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning=false;
    }
}

function Reset()
{
    clearInterval(timer);
    
    timer = null;
    elapsedTime=0;
    currentTime=0;
    isRunning = false;
    startTime=0;
    update();
}



function update()
{
    if(timer!==null)
    {
        currentTime=new Date();
        elapsedTime=currentTime-startTime;
        let vhour= Math.floor(elapsedTime/(1000*60*60));
        let vminutes= Math.floor(elapsedTime/(1000*60)%60);
        let vseconds= Math.floor(elapsedTime/(1000)%60);
        let vmilseconds = Math.floor((elapsedTime/100)%60);
    
        vhour = String(vhour).padStart(2,0);
        vminutes = String(vminutes).padStart(2,0);
        vseconds = String(vseconds).padStart(2,0);
        vmilseconds = String(vmilseconds).padStart(2,0);
    
        const doc = document.getElementsByClassName("clock")[0];
        let val = `${vhour}:${vminutes}:${vseconds}:${vmilseconds}`;
        doc.textContent=val;
    }
    else
    {
        const doc = document.getElementsByClassName("clock")[0];
        doc.textContent="00:00:00:00";
    }
}