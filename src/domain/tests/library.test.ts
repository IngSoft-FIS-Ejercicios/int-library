import { describe, test, expect, beforeEach } from "vitest";
import Library from "../library.ts";
import Book from "../book.ts";

describe("Library", () => {
  let myLibrary: Library;

  beforeEach(() => {
    myLibrary = new Library("Biblioteca");
  });

  test("add a book to the library", () => {
    myLibrary.addBook("Cuentos de la Selva", "Horacio Quiroga", 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe("Cuentos de la Selva");
  });

  test("return the total number of books", () => {
    myLibrary.addBook("Cuentos de la Selva", "Horacio Quiroga", 120);
    myLibrary.addBook("El Hombre que Calculaba", "Malba Tahan", 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  test("set the name of the library", () => {
    myLibrary.setName("Montevideo");
    expect(myLibrary.getName()).toBe("Montevideo");
  });

  test("throw an error when setting an empty name", () => {
    // TODO
  });
});
