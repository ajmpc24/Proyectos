const products = [
	{ image: 'img/R-cloudCode_blue B.png', title: 'ASCII', price: '$3,700' },
	{ image: 'img/R-nodeJS-03.png', title: 'Node JS', price: '$3,700' },
	{ image: 'img/R-cloudCode_blue B.png', title: 'Cloud Code', price: '$3,700' },
	{ image: 'img/R-gitHub.png', title: 'GitHub', price: '$3,700' },
	{ image: 'img/R-cloudCode_blue B.png', title: 'ASCII', price: '$3,700' },
	{ image: 'img/R-nodeJS-03.png', title: 'Node JS', price: '$3,700' },
	{ image: 'img/R-cloudCode_blue B.png', title: 'Cloud Code', price: '$3,700' },
	{ image: 'img/R-gitHub.png', title: 'GitHub', price: '$3,700' },
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

	const buyButton = document.createElement('a');
	buyButton.classList.add('product-btn');
	buyButton.href = '#';
	buyButton.textContent = 'BUY NOW';
	productInfo.appendChild(buyButton);

	productCard.appendChild(productInfo);
	allProductsContainer.appendChild(productCard);
});
