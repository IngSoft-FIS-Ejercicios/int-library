import Book from "./book.ts";

class Library {
  #name!: string;
  #inventory: Book[] = [];

  constructor(name: string) {
    this.setName(name);
  }

  setName(name: string): void {
    if (typeof name !== "string") {
      throw new Error();
    }
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
      throw new Error();
    }
    this.#name = trimmedName;
  }

  getName(): string {
    return this.#name;
  }

  addBook(title: string, author: string, pages: number): void {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }

  getInventory(): Book[] {
    return this.#inventory;
  }

  totalBooks(): number {
    return this.#inventory.length;
  }

  averageChaptersPerBook(): number | undefined {
    // TODO
    return undefined;
  }
}

export default Library;
