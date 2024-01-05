import "./style.css";

const arrayCartas = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "orange",
  },
  {
    id: 3,
    color: "blue",
  },
  {
    id: 4,
    color: "pink",
  },
  {
    id: 5,
    color: "black",
  },
  {
    id: 6,
    color: "red",
  },
  {
    id: 7,
    color: "orange",
  },
  {
    id: 8,
    color: "blue",
  },
  {
    id: 9,
    color: "pink",
  },
  {
    id: 10,
    color: "black",
  },
];

// 1.1 necesitamos saber cuando se ha seleccionado seleccionado una carta. por ahora no senecito saber cuantas

let contador = 0;
let carta1;
let carta2;
let puntuacion = 0;

arrayCartas.sort(() => Math.random() - Math.random());

const divApp = document.querySelector("#app");

const puntuacionHTML = document.createElement("h3");

puntuacionHTML.textContent = `Puntuacion: ` + puntuacion;

document.body.insertBefore(puntuacionHTML, divApp);

const resetearValores = () => {
  contador = 0;
  carta1 = undefined;
  carta2 = undefined;
};

const resetearCarta = (cartaGenerica) => {
  cartaGenerica.nodoHTML.style.backgroundColor = "#4d0038";
  cartaGenerica.nodoHTML.style.backgroundImage =
    "url(https://www.transparenttextures.com/patterns/crissxcross.png)";
};

const comprobar = () => {
  if (carta1.datosCarta.color === carta2.datosCarta.color) {
    puntuacion++;
    resetearValores();
  } else {
    puntuacion--;
    // dar la vuelta
    setTimeout(() => {
      resetearCarta(carta1);
      resetearCarta(carta2);
      resetearValores();
    }, 1000);
  }
  puntuacionHTML.textContent = `Puntuacion: ` + puntuacion;
};

const seleccionar = (divCartaNodoHTML, datosDeCadaCarta) => {
  if (contador < 2) {
    // seleccionar una carta - solo lo hago cuando contador sea menor que dos
    contador++;

    divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color;
    divCartaNodoHTML.style.backgroundImage = "none";
  }

  // cuando hemos seleccionado la primera
  if (contador === 1) {
    carta1 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta,
    };
  }
  // cuando hemos seleccionado la primera
  if (contador === 2) {
    carta2 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta,
    };

    comprobar();
  }
};

arrayCartas.forEach((datosDeCadaCarta) => {
  const divCartaNodoHTML = document.createElement("div");

  divCartaNodoHTML.className = "carta";

  // elijo su nombre "seleccionar" y su funcionalidad - necesitamos saber que carta ha
  // seleccionado el usuario, por lo tanto necesito enviarle a mi funcion la carta seleccionada -
  // necesitamos el color que tiene esa carta para desvelarlo.

  // hacemos funcion flecha para que no la ejecute directamente. hacemos una funcion dentro de otra para
  // evitarme poner los parentesis y que se ejecute directamente
  divCartaNodoHTML.addEventListener("click", () =>
    seleccionar(divCartaNodoHTML, datosDeCadaCarta)
  );
  divApp.append(divCartaNodoHTML);
});
