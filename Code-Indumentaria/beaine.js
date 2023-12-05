const products = [
	{ image: 'img/beaine.png', title: 'Verde', price: '$3,700' },
	{ image: 'img/beaine_1.png', title: 'Mostaza', price: '$3,700' },
	{ image: 'img/beaine_2.png', title: 'Marino', price: '$3,700' },
	{ image: 'img/beaine_3.png', title: 'Negro', price: '$3,700' },
	{ image: 'img/beaine_4.png', title: 'Rojo', price: '$3,700' },
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
