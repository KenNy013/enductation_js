import BasketModule from './basketProductModule.js';
import ProductModule from './productModule.js';
import SumBasketModule from './sumBasketModule.js';

export default function Render(product, basket, sum) {
	SumBasketModule(sum);
	BasketModule(basket);
	ProductModule(product);
}
