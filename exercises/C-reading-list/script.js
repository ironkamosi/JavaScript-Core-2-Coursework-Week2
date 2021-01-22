function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content"); // div
  let pageTitle = document.createElement("h1");
  pageTitle.innerText = "Book Titles:";
  let list = document.createElement("ul"); // ul

  books.forEach((book) => {
    let listItem = document.createElement("li"); // li
    if (book.alreadyRead === true) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }

    let paragraph = document.createElement("p"); // p
    let text = `${book.title} - ${book.author}`;

    let bookInfo = document.createTextNode(text); //p
    paragraph.appendChild(bookInfo);

    let image = document.createElement("img"); // img
    image.src = book.image;
    image.width = "180";
    image.height = "180";

    listItem.appendChild(paragraph); // nest p
    listItem.appendChild(image);
    list.appendChild(listItem);
  });
  content.appendChild(pageTitle);
  content.appendChild(list);
}

const books = [
  {
    title: "The Design of Everyday Things",
    image:
      "https://productnotes.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    image: "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    image: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
