class Book {
  #title;
  #author;
  #pages;

  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getChapters() {
    // TODO
  }

  setTitle(title) {
    if (typeof title !== "string") {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error("El libro debe tener título");
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== "string") {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = "Anónimo";
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof pages !== "number" || isNaN(pages)) {
      throw new Error("El libro debe tener al menos una página");
    }
    if (pages < 1) {
      throw new Error("El libro debe tener al menos una página");
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setChapters() {
    // TODO
  }

  averagePagesPerChapter() {
    // TODO
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}`;
  }
}

export default Book;
