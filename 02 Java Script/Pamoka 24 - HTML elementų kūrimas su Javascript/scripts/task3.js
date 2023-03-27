let screenLog = document.querySelector("#screen-log");
document.querySelector("#screen-log").addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}
    Page X/Y: ${e.pageX}, ${e.pageY}
    Offset X/Y: ${e.offsetX}, ${e.offsetY}
    `;
}