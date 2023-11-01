import visibleNotEqProduct from '../helpers/visibleNotEqProduct.js';
import CardBasket from '../ui/cardBasket.js';

export default function BasketModule(data) {
	const basketListElem = document.querySelector('#basket');
	if (data.length) {
		const basketArray = visibleNotEqProduct(data);

		basketListElem.innerHTML = ``;
		basketArray.forEach((elementFromProduct) => {
			basketListElem.insertAdjacentHTML(
				'beforeend',
				CardBasket(elementFromProduct)
			);
		});
	} else {
		basketListElem.innerHTML = ``;
	}
}
