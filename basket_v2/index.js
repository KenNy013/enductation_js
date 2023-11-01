import DataProduct from './data/product.json' assert { type: 'json' };
import Render from './module/render.js';

const state = {
	basket: [],
	product: [...DataProduct],
	sum: 0,
};

(function () {
	Render(state.product, state.basket, state.sum);
})();

window.addEventListener('click', (event) => {
	/// Для добавления в корзину
	if (event.target.closest('[data-product]')) {
		const elementProduct = event.target.closest('[data-product]');
		const findElemFromProduct = state.product.find(
			(product) =>
				String(product.type_product) === String(elementProduct.dataset.product)
		);

		state.basket.push(findElemFromProduct);

		state.product = state.product.filter((product) =>
			product?.id !== findElemFromProduct?.id ? true : false
		);

		state.sum = state.basket.reduce((acc, product) => {
			return +product?.price_product + acc;
		}, 0);

		Render(state.product, state.basket, state.sum);
	}
	/// Для добавления удаления из корзины
	if (event.target.closest('[data-basket]')) {
		const elementBasket = event.target.closest('[data-basket]');

		const findElemFromBasket = state.basket.find(
			(basket) =>
				String(basket.type_product) === String(elementBasket.dataset.basket)
		);

		state.product.push(findElemFromBasket);

		state.basket = state.basket.filter((basket) =>
			basket?.id !== findElemFromBasket?.id ? true : false
		);

		state.sum = state.basket.reduce((acc, product) => {
			return +product?.price_product + acc;
		}, 0);

		Render(state.product, state.basket, state.sum);
	}
});
