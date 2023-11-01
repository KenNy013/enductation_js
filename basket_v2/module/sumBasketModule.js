import Sum from '../ui/sum.js';

export default function SumBasketModule(sum) {
	const sumElem = document.querySelector('#sum');
	if (sum) {
		sumElem.innerHTML = Sum(sum);
	} else {
		sumElem.innerHTML = Sum(0);
	}
}
