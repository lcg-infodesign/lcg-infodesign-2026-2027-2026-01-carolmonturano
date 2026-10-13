let xMax = 400;
let yMax = 600;

let cloudX = 0; // x far muovere le nuvole in orizzontale

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(130,120,170);   // cielo

  push();
  noStroke();
  
//stelle sullo sfondo
  for (let i = 0; i < 90; i++) {
    let sx = (i * 47) % width;   // distribuzione stelle su larghezza
    let sy = (i * 23) % 400;     // stelle solo nella parte alta
    
    if (i % 3 == 0) {
      fill(255, 255, 255, 200);   // stelle bianche 
      ellipse(sx, sy, 1.5, 1.5);
    } else if (i % 5 == 0) {
      fill(200, 220, 255, 160);   // stelle azzurrine
      ellipse(sx, sy, 2.2, 2.2);
    } else {
      fill(255, 240, 180, 120);   // stelle gialline piccoline
      ellipse(sx, sy, 1, 1);
    }
  }
  
  pop(); 
  
  push();
  noStroke();

   // luna
  fill(245,243,252);
  ellipse(90, 110, 60, 60);

  
  // montagna lontana
  fill(118,107,158);
  triangle(200, 500, 560, 500, 390, 150);

  // nuvole
  fill(200, 190, 220, 150);
  for (let i = 0; i < 3; i++) {
    let x = (cloudX + i * 140) % (width + 50); // posizione: distanziate di 140 e fatte scorrere
    let y = 180 + i * 25;                      // ogni nuvola un po' piÃ¹ in basso della precedente

    // costruzione nuvole
    ellipse(x, y, 70, 35);
    ellipse(x + 20, y - 8, 50, 35);
    ellipse(x - 25, y - 5, 60, 35);
  }
  cloudX = cloudX + 0.5; // le nuvole si spostano di mezzo pixel a ogni frame 
  
  // montagna 
  fill(104,91,143);
  triangle(100, 500, 460, 500, 280, 250);

  // colline davanti
  fill(76,60,104);
  arc(110, 550, 350, 300, PI, TWO_PI, CHORD);   // collina sinistra
  fill(62,47,85);
  arc(300, 550, 300, 220, PI, TWO_PI, CHORD);   // collina destra

  // collinette basse
  fill(46,34,65);
  arc(30, 550, 290, 120, PI, TWO_PI, CHORD);    // bassa sinistra
  fill(37,27,54);
  arc(360, 550, 400, 90, PI, TWO_PI, CHORD);    // bassa destra

  // pineta
fill(28, 20, 40);
for (let x = 0; x <= width; x += 10) {
  // altezza varia basandosi su x con operatore%
  let h = 20 + (x % 30); 
  
  triangle(x - 5, 550, x + 5, 550, x, 550 - h);
}
  
  // prato
  fill(24,18,33);
  rect(0, 550, width, 50);

  // lago 
  fill(178,170,218);
  arc(80, 600, 360, 60, PI, TWO_PI, CHORD);

  pop();


  
}