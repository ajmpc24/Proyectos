const products = [
	{ image: 'img/hoodie.png', title: 'Hoodie #01', price: '$3,700' },
	{ image: 'img/hoodie_1.jpeg', title: 'Hoodie #02', price: '$3,700' },
	{ image: 'img/hoodie_2.jpeg', title: 'Hoodie #03', price: '$3,700' },
	{ image: 'img/hoodie_3.jpeg', title: 'Hoodie #04', price: '$3,700' },
	{ image: 'img/hoodie_4.jpeg', title: 'Hoodie #04', price: '$3,700' },
];

const allProductsContainer = document.querySelector('.all-products');

products.forEach((product) => {
	const productCard = document.createElement('div');
	productCard.classList.add('product');

	const productImage = document.createElement('img');
	productImage.src = product.image;
	productCard.appendChild(productImage);

	const productInfo = document.createElement('div');
	productInfo.classList.add('product-info');

	const productTitle = document.createElement('h4');
	productTitle.classList.add('product-title');
	productTitle.textContent = product.title;
	productInfo.appendChild(productTitle);

	const productPrice = document.createElement('p');
	productPrice.classList.add('product-price');
	productPrice.textContent = product.price;
	productInfo.appendChild(productPrice);

	// const buyButton = document.createElement('a');
	// buyButton.classList.add('product-btn');
	// buyButton.href = '#';
	// buyButton.textContent = 'BUY NOW';
	// productInfo.appendChild(buyButton);

	productCard.appendChild(productInfo);
	allProductsContainer.appendChild(productCard);
});
