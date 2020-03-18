import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CheckoutItemContainer = compose(connect(mapStateToProps)(CheckoutItem));

export default CheckoutItemContainer;
