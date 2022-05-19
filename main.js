let websocket = document.getElementById("websocket");
let reload = document.getElementById("reload");

websocket.innerHTML = "Funzionalità WebSocket: " + (WebSocket ? "DISPONIBILE" : "NON DISPONIBILE");

let timer = 10;
reload.innerHTML = "Test aggiornamento pagina in: " + timer + "s";
let interval = setInterval(function () {
  timer--;

  reload.innerHTML = "Test aggiornamento pagina in: " + timer + "s";

  if (timer < 0) {
    window.location.reload();

    clearInterval(interval);
  }
}, 1000);