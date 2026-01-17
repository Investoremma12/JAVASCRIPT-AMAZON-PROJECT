import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import isSatSun from './utils/datePractice.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/cart-class.js';
renderOrderSummary();
renderPaymentSummary();
renderCheckoutHeader();

console.log(isSatSun(1, 'day'));
console.log(isSatSun(2, 'day'));
