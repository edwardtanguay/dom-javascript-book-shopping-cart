import { books } from '../data/books.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML += `<h2>${books.length} Books</h2>`;

contentElem.innerHTML += books.map(book => {
	return `
	<div class="book">
		<h3>${book.title}</h3>
		<div class="description">${book.description}</div>
		<div class="price">${book.price} €</div>
	</div>
`;
}).join('');

