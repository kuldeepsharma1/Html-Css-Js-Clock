setInterval(() => {
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hroutation=30*htime+mtime/2;
    mroutation=6*mtime;
    sroutation=6*stime;


    hour.style.transform=`rotate(${hroutation}deg)`;
    minute.style.transform=`rotate(${mroutation}deg)`;
    second.style.transform=`rotate(${sroutation}deg)`;

}, 1000);
