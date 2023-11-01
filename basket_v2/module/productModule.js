import visibleNotEqProduct from '../helpers/visibleNotEqProduct.js';
import CardProduct from '../ui/cardProduct.js';

export default function ProductModule(data) {
	const productListElem = document.querySelector('#product');
	if (data.length) {
		const productArray = visibleNotEqProduct(data);

		productListElem.innerHTML = '';
		
		productArray.forEach((elementFromProduct) => {
			productListElem.insertAdjacentHTML(
				'beforeend',
				CardProduct(elementFromProduct)
			);
		});
	} else {
		productListElem.innerHTML = '';
	}
}
