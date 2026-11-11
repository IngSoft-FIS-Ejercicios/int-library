class Book {
  #title!: string;
  #author!: string;
  #pages!: number;

  constructor(title: string, author: string, pages: number) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle(): string {
    return this.#title;
  }

  getAuthor(): string {
    return this.#author;
  }

  getPages(): number {
    return this.#pages;
  }

  getChapters(): number | undefined {
    // TODO
    return undefined;
  }

  setTitle(title: string): void {
    if (typeof title !== "string") {
      throw new Error();
    }
    const trimmedTitle = title.trim();
    if (trimmedTitle.length === 0) {
      throw new Error("El libro debe tener título");
    }
    this.#title = trimmedTitle;
  }

  setAuthor(author: string): void {
    if (typeof author !== "string") {
      throw new Error();
    }
    const trimmedAuthor = author.trim();
    this.#author = trimmedAuthor.length === 0 ? "Anónimo" : trimmedAuthor;
  }

  setPages(pages: number): void {
    if (typeof pages !== "number" || isNaN(pages)) {
      throw new Error("El libro debe tener al menos una página");
    }
    if (pages < 1) {
      throw new Error("El libro debe tener al menos una página");
    }
    this.#pages = Math.trunc(pages);
  }

  setChapters(): void {
    // TODO
  }

  averagePagesPerChapter(): number | undefined {
    // TODO
    return undefined;
  }

  toString(): string {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}`;
  }
}

export default Book;
