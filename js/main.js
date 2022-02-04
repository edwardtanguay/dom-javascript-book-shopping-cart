import { books } from '../data/books.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML = `<h2>${books.length} Books</h2>`;