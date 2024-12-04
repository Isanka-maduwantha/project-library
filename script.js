const library = document.getElementById("library");
const body = document.querySelector("body");
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
function createBookCard(Title="Title",author="Author",Pages="Pages",Status="status"){
    let book = document.createElement('div');
    book.classList.add("book")
    book.innerHTML = `<h1 class="title">${Title}</h1><p class="author"><span>Author:</span> ${author}</p><p class="pages"><span>Pages:</span> ${Pages}</p><p class="status"><span>Status:</span> ${Status}</p>`;
    library.appendChild(book);
}
// function to loop array 
function displayBook(array){
    for(let i = 0; i<array.length; i++){
         let arrayNumber = array[i];
            createBookCard(arrayNumber.book,arrayNumber.author,arrayNumber.pages,arrayNumber.status);
    }

}
displayBook(myLibrary);

function createForm(){
    const form = document.createElement("form");
    const ul = document.createElement("ul");
    const select = document.createElement("select");
    const submitButton = document.createElement("button")
    ul.innerHTML =`<li><label for="name">Book Title<label><input type="text" name="title" id="tit;e"></li>
    <li><label for="author">Author<label><input type="text" id="author" name="author"></li>
    <li><label for="pages">Pages<label><input type="tel" id="pages" name="pages"></li> `;
    select.innerHTML = `<option value="completed">Completed</option>
    <option value="Notyet">Not Yet</option>
    <option value="Reading">Reading</option>`;
    submitButton.innerHTML="Submit"
    submitButton.classList.add("Submit");
    form.appendChild(ul);
    form.appendChild(select);
    form.appendChild(submitButton)
    body.appendChild(form);
    
    
}
const addButton = document.querySelector(".addButton");
addButton.addEventListener("click",()=>{
    createForm();
})