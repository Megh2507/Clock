setInterval(()=>{
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hR = 30*h+ m/2;
    mn = 6*m;
    sec =6*s;
    hour.style.transform = `rotate(${hR}deg)`;
    minute.style.transform=`rotate(${mn}deg)`;
    second.style.transform=`rotate(${sec}deg)`;

},1000);