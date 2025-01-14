function clock()
{
    let info = new Date();
    let hours = info.getHours();
    let min = info.getMinutes();
    let sec = info.getSeconds();
    
    document.getElementsByClassName('clock-container')[0].innerText=
    `${hours}-${String(min).padStart(2, '0')}-${sec}`;
};

clock();
setInterval(clock,10);

