import { books } from '../data/books.js';
import { Book } from './components/Book.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML += `<h2>${books.length} Books</h2>`;

contentElem.innerHTML += books.map(_book => {
	const book = new Book(_book);
	return book.display();
}).join('');

