const myLibrary = [
    {
        book:"Wheel",
        author:"Robert",
        pages:"500",
        status:"Completed"
    },
    {
        book:"War of Radiance",
        author:"Brandern",
        pages:"300",
        status:"Reading"
    }
];

// function Book(name,author,pages) {
//   // the constructor...
//   this.name = name;

// }

// function to add values to array
let i = 0;
function addBookToLibrary(name,author,pages,status) {
  // do stuff here
    let book = {
        book:name,
        author:author,
        pages:pages,
        status:status
    }
    myLibrary.push(book);
    
    i++;


}
// Function for creating Element and add array items
const library = document.getElementById("library");
function createBookCard(Title="Title",author="Author",Pages="Pages",Status="status"){
    let book = document.createElement('div');
    book.innerHTML = `<h1 class="title">${Title}</h1><p class="author">Author: ${author}</p><p class="pages">Pages: ${Pages}</p><p class="status">Status: ${Status}</p>`;
    library.appendChild(book);
}
// function to loop array 
function displayBook(array){
    for(let i = 0; i<array.length; i++){
         let arrayNumber = array[i];
            createBookCard(arrayNumber.book,arrayNumber.author,arrayNumber.pages,arrayNumber.status);
    }

}
