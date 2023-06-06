let myLibrary = []

// Create a book object
function Book(title, author,pages,readAlready){
  this.title = title
  this.author = author
  this.pages = Number(pages)
  this.readAlready = readAlready
  
}

const bookLibrary = document.querySelector('#booksLibrary')

// Add book to array library, also give the proper index

function addBookToLibrary(book){
  myLibrary.push(book)
  const index = myLibrary.findIndex(item => item.title == book.title)
  book.index = index
  
  createDiv(book)
}

// Create a div and insert

function createDiv(book){
  
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const read = document.createElement('p')
  const deleteButton = document.createElement('button')
  const readButton = document.createElement('button')
  
  bookCard.classList.add('flex')
  bookCard.classList.add('bookDiv')

  title.textContent =  `Title: ${book.title}`
  author.textContent = `Author: ${book.author}`
  pages.textContent = `Pages: ${book.pages}`
  read.textContent = `Read: ${book.readAlready}`
    
  bookCard.dataset.index = book.index
  deleteButton.textContent = 'Delete'
  readButton.textContent = 'Read'
  
  
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)
    bookCard.appendChild(deleteButton)
    bookCard.appendChild(readButton)
  
    bookLibrary.appendChild(bookCard)
  
  deleteButton.addEventListener('click', ()=>{
    myLibrary.splice(book.index,1)
    
    bookCard.style.display = 'none'
    
  })
  
  readButton.addEventListener('click', ()=>{
    read.textContent = 'Read'
    myLibrary[book.index].readAlready = 'yes'
  })
}

const showBooks = document.querySelector('#showBooks')
const addBookButton = document.querySelector('#showForm')
const form = document.querySelector('form')

addBookButton.addEventListener('click', (e)=>{
  form.classList.toggle('delete')  
})

const addBookToLibraryButton = document.querySelector('#addBook')

addBookToLibraryButton.addEventListener('click', (e)=>{
  const title = document.querySelector('#title').value
  const author = document.querySelector('#author').value
  const pages = document.querySelector('#pages').value
  const readBook = document.querySelector('#readBook').value   
  
  const newBook = new Book(title, author,pages,readBook)
  
  addBookToLibrary(newBook)
  
})

