class Ember {
  #szulIdo;
  #kor;
  #nev;
  constructor(nev, szulido, magassag, szuloElem) {
    this.#nev = nev;
    this.#szulIdo = szulido;
    this.magassag = magassag;
    this.szuloElem = szuloElem;
    this.getKor();
    this.megjelenit();
  }

  megjelenit() {
    let html = `
        <div class="ember">
            <h2>${this.#nev}</h2>
            <p>${this.#kor}</p>
            <p>${this.magassag}</p>
        </div>
        `;
    this.szuloElem.innerHTML += html;
    console.log(html);
  }
  // getter kor értékéhez
  getKor() {
    const d = new Date();
    let year = d.getFullYear();
    this.#kor = year - this.#szulIdo;
    return this.#kor;
  }

  //   ellenőrzötten lehet átírni a változók értékét
  setNev(nev) {
    if (nev == "Béla" || nev === "Géza") this.#nev = nev;
  }

  getNev() {
    return this.#nev;
  }
}

export default Ember;
