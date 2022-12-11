let panes = document.getElementsByClassName("cookie");
for (let cookie of panes) {
    let xButton = document.createElement("button"); 
    xButton.className = "remove-button";
    
    cookie.style.position = "relative";              
    xButton.style.position = "absolute";            
    
    xButton.onclick = () => cookie.remove();          
    
    cookie.append(xButton);                           
}