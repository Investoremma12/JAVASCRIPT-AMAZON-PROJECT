import { calculateCartQuantity } from '../../data/cart.js';
// import { updateCartQuantity } from './paymentSummary.js';

export function renderCheckoutHeader() {
	const checkoutHeaderHtml = `
    Checkout (<a
			class="return-to-home-link js-checkouts-items-header"
			href="amazon.html"
			>${calculateCartQuantity()} items</a
		>)
    `;
	const checkoutHeader = (document.querySelector(
		'.js-checkout-middle-header'
	).innerHTML = checkoutHeaderHtml);
	return checkoutHeader;
}

export function deleteLink(
	removeFromCart,
	renderPaymentSummary,
	renderOrderSummary
) {
	document.querySelectorAll('.js-delete-link').forEach((link) => {
		link.addEventListener('click', () => {
			const productId = link.dataset.productId;
			removeFromCart(productId);
			renderPaymentSummary();
			renderOrderSummary();
			renderCheckoutHeader();
		});
	});
}
