function copyEmail(){
  navigator.clipboard.writeText("weavercf@rose-hulman.edu").then();
  document.getElementById("cover-email-button-popup").textContent = "Copied!";
}

function paletteSelect(event, idParent, idChild){
  let childrenParent = document.getElementById(idParent).children;
  let children = childrenParent.item(0).children.item(0).children;
  for(let i = 0; i < children.length; i++){
    if(children[i].classList.contains("palette-view")){
      children[i].style.display = "none";
      if(children[i].nodeName === "IFRAME"){
        children[i].contentWindow.postMessage(JSON.stringify({event: 'command', func: 'stopVideo'}), '*');
      }
    }
  }

  document.getElementById(idChild).style.display = "block";
}
