import { books } from '../data/books.js';

const contentElem = document.querySelector('.content');

contentElem.innerHTML += `<h2>${books.length} Books</h2>`;

contentElem.innerHTML += books.map(book => {
	return `
	<div className="book">
		<div className="title">${book.title}</div>
		<div className="description">${book.description}</div>
		<div className="price">${book.price}</div>
	</div>
`;
}).join('');

