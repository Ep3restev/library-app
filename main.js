let openbutton = document.getElementById("addbooks");
let formcontainer = document.getElementById("form_container");
let closebutton = document.getElementById("form_exit2");

openbutton.addEventListener('click', function(){
    if(formcontainer.classList.contains('form_initialstate')){
        formcontainer.classList.replace('form_initialstate','open')
    }
    if(formcontainer.classList.contains('close')){
        formcontainer.classList.replace('close','open') 
    }
})

closebutton.addEventListener('click', function(){
    if(formcontainer.classList.contains('open')){
        formcontainer.classList.replace('open','close')
    }
})

//**********************/

const add = document.querySelector(".add");
let library = [];  // Array that contains all the books.
const container = document.querySelector(".container");

//Object constructor.

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
}

//Function that adds new book to the library.

function addBookToLibrary(author,name){
    let newBook = new Book(name, author);
    library.push(newBook);
    console.log(library)
    showLibrary();
}


const booksCard = ((book)=>{
    const card = document.createElement("div");
    const readButton = document.createElement("div");
    const removeButton = document.createElement("div");
    const text = document.createElement("div");
    const pAuthor = document.createElement("p");
    const pBookName = document.createElement("p");
    card.classList.add("box");    
    text.classList.add("text");
    text.append(pAuthor);
    text.append(pBookName);
    pAuthor.textContent = book.author;
    pBookName.textContent = book.name;
    readButton.textContent = "Read";
    removeButton.textContent = "Remove";
    readButton.classList.add("read");
    removeButton.classList.add("remove");
    container.appendChild(card);  
    card.appendChild(text)
    card.appendChild(readButton);
    card.appendChild(removeButton);
});

 //Esta función recorrerá la librería.
function showLibrary(){
    container.innerHTML = "";
    library.forEach((book)=>{
        let bookCard = booksCard(book);
    })
}

add.addEventListener("click", dataFromUser);

function dataFromUser(){
    let author = document.getElementById("bookAuthor").value;
    let name = document.getElementById("bookName").value;
    //Return nothing if form is incomplete.
    if(author =="" || name==""){
        return;
    }
    addBookToLibrary(author,name)
}

