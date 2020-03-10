let db = firebase.firestore();
let artister = db.collection("Artist");
let artistDiv = document.querySelector("#artistDiv");

artister.get().then((snapshot) => skrivResultat(snapshot));

function skrivResultat(snapshot){
  snapshot.forEach(element => lagHtml(element.data()));
}

function lagHtml(element){
  artistDiv.innerHTML += `
  <section class="Artist">
    <div>Navn: ${element["Fornavn"]} ${element["Etternavn"]}</div>
    <div>Fullt navn: ${element["Fullt navn"]} </div>
    <div>Kjønn: ${element["Kjønn"]} </div>
    <div>Alder: ${element["Alder"]} </div>
    <div>Høyde: ${element["Høyde"]} </div>
    <div>Sjanger: ${element["Sjanger"]} </div>
    <img src="${element["Bilder"]}">
  </section>
  `
}

function visPop(){
  const spørring = artister.where("Sjanger", "==", "Pop");
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function visHipHop(){
  const spørring = artister.where("Sjanger", "==", "Hip Hop");
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function visTrap(){
  const spørring = artister.where("Sjanger", "==", "Trap");
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function under40(){
  const spørring = artister.where("Alder", "<", 40);
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function over40(){
  const spørring = artister.where("Alder", ">", 40);
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}

function popOver40(){
  const spørring = artister.where("Sjanger", "==", "Pop").where("Alder", ">", 40);
  spørring.get().then((snapshot) => skrivResultat(snapshot));
}


function visAlle(){
  artister.get().then((snapshot) => skrivResultat(snapshot));
}

function skrivResultat(snapshot){
  artistDiv.innerHTML = "";
  snapshot.forEach(element => lagHtml(element.data()));
}
