import Library from "./domain/library.ts";

const libraryName = document.getElementById("library-name");
const inpTotalBooks = document.getElementById(
  "inp-total-books",
) as HTMLInputElement | null;
const btnAdd = document.getElementById("btn-add");
const inpTitle = document.getElementById("inp-title") as HTMLInputElement | null;
const inpAuthor = document.getElementById(
  "inp-author",
) as HTMLInputElement | null;
const inpPages = document.getElementById("inp-pages") as HTMLInputElement | null;

const myLibrary = new Library("Papiros");
if (libraryName) {
  libraryName.textContent = myLibrary.getName();
}

function updateTotalBooks(): void {
  if (inpTotalBooks) {
    inpTotalBooks.value = String(myLibrary.totalBooks());
  }
}

function updateInventory(): void {
  const emptyBookList = document.getElementById("empty-book-list");
  const bookListContainer = document.getElementById("book-list-container");
  const bookList = document.getElementById("book-list");

  if (!emptyBookList || !bookListContainer || !bookList) {
    return;
  }

  emptyBookList.classList.add("d-none");
  bookListContainer.classList.remove("d-none");

  const addedBook =
    myLibrary.getInventory()[myLibrary.getInventory().length - 1];
  const newListElement = document.createElement("li");
  newListElement.classList.add("list-group-item");
  newListElement.innerText = addedBook.toString();
  bookList.appendChild(newListElement);
}

btnAdd?.addEventListener("click", () => {
  const bookErrorContainer = document.getElementById("add-book-error");
  const bookError = document.getElementById("add-book-error-msg");
  if (!bookErrorContainer || !bookError || !inpTitle || !inpAuthor || !inpPages) {
    return;
  }

  try {
    myLibrary.addBook(
      inpTitle.value,
      inpAuthor.value,
      parseInt(inpPages.value),
    );
    clearInputs();
    bookErrorContainer.classList.add("d-none");
    updateInventory();
    updateTotalBooks();
  } catch (error) {
    bookErrorContainer.classList.remove("d-none");
    bookError.textContent = error instanceof Error ? error.message : String(error);
  }
});

function clearInputs(): void {
  if (inpTitle && inpAuthor && inpPages) {
    inpTitle.value = "";
    inpAuthor.value = "";
    inpPages.value = "";
  }
}

updateTotalBooks();
