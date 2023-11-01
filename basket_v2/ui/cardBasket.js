const DEFAULT_OBJECT_CONTENT = {
	product: {
		id: '0000',
		title_product: 'ERROR',
		price_product: 'ERROR',
		type_product: 'ERROR',
	},
	count: 0,
};

export default function CardBasket(content = DEFAULT_OBJECT_CONTENT) {
	return `
  <div data-basket="${content?.product?.type_product}">
    <div>
    <h2>${content?.product.title_product}</h2>
    <h3>${content?.product.price_product}</h3>
    </div>
  </div>
  `;
}
