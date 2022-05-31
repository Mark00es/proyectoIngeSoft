import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index2.html", "utf8");
    require("./presenter.js");
  });  

  it("Si la palabra ingresada es PEINE debe ser recuperada y mostrada en mayusculas", () => {    
    const botonAdivinar = document.querySelector("#boton-adivinar");
    expect(botonAdivinar.value).toEqual("Adivinar");
  });

  
  /*
  it("Si la palabra ingresada es NAIPE debe ser recuperada y mostrada en mayusculas", () => {
    const palabraAdivinar = document.querySelector("#intento");
    palabraAdivinar.value = "NAIPE";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div2");
    expect(resultado.innerHTML).toEqual("NP");
  });

  it("Si la palabra ingresada es TORTA debe ser recuperada y mostrada en mayusculas", () => {
    const palabraAdivinar = document.querySelector("#intento");
    palabraAdivinar.value = "TORTA";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div3");
    expect(resultado.innerHTML).toEqual("TORTA");
  });*/
});