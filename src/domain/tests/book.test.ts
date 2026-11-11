import { describe, test, expect, beforeEach } from "vitest";
import Book from "../book.ts";

describe("Book", () => {
  let myBook: Book;

  beforeEach(() => {
    myBook = new Book("Cuentos de la Selva", "Horacio Quiroga", 350);
  });

  test("return the correct title", () => {
    expect(myBook.getTitle()).toBe("Cuentos de la Selva");
  });

  test("return the correct author", () => {
    expect(myBook.getAuthor()).toBe("Horacio Quiroga");
  });

  test("return the correct number of pages", () => {
    expect(myBook.getPages()).toBe(350);
  });

  test("check title is not empty", () => {
    expect(() => (myBook = new Book("", "Horacio Quiroga", 350))).toThrow();
  });
});
