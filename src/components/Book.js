export class Book {
	constructor({ title, description, price }) {
		this.title = title;
		this.description = description;
		this.price = price;
	}
	display() {
		return `
			<div class="book">
				<h3>${this.title}</h3>
				<div class="description">${this.description}</div>
				<div class="bottomArea">
					<div class="price">${this.price} €</div>
					<div><button>Add to Cart</button></div>
				</div>
			</div>
		`;
	}
}