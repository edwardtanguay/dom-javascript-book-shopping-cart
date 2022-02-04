import { books } from '../data/books.js';
import { Book } from './components/Book.js';
import { Cart } from './components/Cart.js';

const contentElem = document.querySelector('.content');
const cartElem = document.querySelector('.cart');

const cart = new Cart();
cartElem.innerHTML += cart.display();

contentElem.innerHTML += books.map(_book => {
	const book = new Book(_book);
	return book.display();
}).join('');

