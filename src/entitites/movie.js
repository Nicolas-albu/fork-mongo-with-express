export class Movie {
  #id
  #title
  #director
  #releaseYear
  #poster

  /**
   * Cria a classe `Movie`.
   *
   * @param {Number} id - Identificador do `Movie`.
   * @param {string} title - descrição do `Movie`.
   * @param {string} director - description of parameter
   * @param {Number} releaseYear - description of parameter
   */
  constructor(id, title, director, releaseYear, poster) {
    this.#id = id
    this.#title = title
    this.#director = director
    this.#releaseYear = releaseYear
    this.#poster = poster
  }

  // getters
  getId() {
    return this.#id
  }

  getTitle() {
    return this.#title
  }

  getDirector() {
    return this.#director
  }

  getReleaseYear() {
    return this.#releaseYear
  }

  getPoster() {
    return this.#poster
  }
}
