// zum Einfügen in ein leeres Javascript-"Projekt", https://playcode.io/empty-javascript

let maxN = 1000;
let wurzelAusMaxN = Math.sqrt(maxN);

let markers = [];
// alle Marker auf den Wert 0 setzen - das steht für "ist vielleicht eine Primzahl"
for (let i=0; i<=maxN; i++) {
  markers.push(0);
}

markers[0] = 1; // die Null ist keine Primzahl!
markers[1] = 1; // die Eins ist keine Primzahl!

for (let zaehler1 = 2; zaehler1 <= wurzelAusMaxN; zaehler1 ++) {
  if (markers[zaehler1] == 0) {
    // dieser Marker steht für eine Primzahl!
    // console.log(zaehler1 + ' IST eine Primzahl!');
    
    // jedes Vielfache dieser Zahl ist aber keine Primzahl:
    for (let zaehler2 = zaehler1 * 2; zaehler2 <= maxN; zaehler2 += zaehler1) {
      if (markers[zaehler2]==0) { // nur dann markieren, wenn sie nicht schon markiert wurden!
        markers[zaehler2] = zaehler1;
      }
    }
  } else {
    // console.log(zaehler1 + ' ist keine Primzahl.')
  }
}

// und nun nochmal alle gefundenen Primzahlen der Reihe nach ausgeben:
console.log('Alle Primzahlen bis ' + maxN + ': ');

/*
for (let i=0; i<=maxN; i++) {
  if (markers[i] == 0) {
    console.log(i);
  }
} 
*/

// alle Primzahlen in ein Array schreiben:
let primzahlen=[];
for (let i=0; i<=maxN; i++) {
  if (markers[i] == 0) {
    primzahlen.push(i);
  }
}
console.log(primzahlen);

// ... und noch alle Zahlen, die KEINE Primzahlen sind, mit ihrem jeweils kleinsten Teiler:
let zusammengesetzte = [];
for (let i=0; i<=maxN; i++) {
  if (markers[i] != 0) {
    zusammengesetzte.push(i + ': teilbar durch ' + markers[i]);
  }
}
console.log(zusammengesetzte);