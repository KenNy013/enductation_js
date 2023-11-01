export default function visibleNotEqProduct(arrayFromProduct) {
	return arrayFromProduct.reduce((acc, product) => {
		const id = acc.findIndex(
			(elem) => elem.product?.type_product === product?.type_product
		);

		if (id === -1) {
			acc.push({
				product,
				count: 1,
			});

			return acc;
		} else {
			acc[id].count = acc[id].count + 1;

			return acc;
		}
	}, []);
}
