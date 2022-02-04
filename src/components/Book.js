export class Book {
	constructor({ title, description, price}, id) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
	}
	addToCart() {
		//this.cart.addProduct(this); 
	}
	display() {
		const html = `
			<div id="book-${this.id}" class="book">
				<h3>${this.title} (id=${this.id})</h3>
				<div class="description">${this.description}</div>
				<div class="bottomArea">
					<div class="price">${this.price} €</div>
					<div><button>Add to Cart</button></div>
				</div>
			</div>
		`;
		// wrapper = document.createElement('div');
		// wrapper.innerHTML = '<div><a href="#"></a><span></span></div>';
		// var div = wrapper.firstChild;
		return html;
	}

	postRender() {

	}
}