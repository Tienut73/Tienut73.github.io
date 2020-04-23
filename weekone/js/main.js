let date = new Date(document.lastModified);
let time = date.toLocaleString('en-US');
    
document.getElementById("modifiedTime").textContent = time;