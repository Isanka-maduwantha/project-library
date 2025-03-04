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
const form = document.querySelector("form");
const addButton = document.querySelector('.addButton');
// function to change the dispay of a element
function ElementDisplayChange(element,value){
    element.style =`display:${value}`;
}
addButton.addEventListener("click",()=>{
   ElementDisplayChange(form,'flex');
   ElementDisplayChange(addButton,"none")

    
})
const exitButton = document.querySelector('.exitButton');
exitButton.addEventListener("click",()=>{
   ElementDisplayChange(form,'none');
   ElementDisplayChange(addButton,"flex")
})

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click",(event)=>{
    event.preventDefault()
})