import Helmet from "../Components/Helmet";
import ProductRelative from "../Components/Product/ProductRelative";
import Payment_Successful_Content from "../Components/Payment/Payment_Successful_Content";
const Payment_Successful = () => {
  return (
    <Helmet title="Thanh toán">
      <Payment_Successful_Content></Payment_Successful_Content>
      <ProductRelative />
    </Helmet>
  );
};
export default Payment_Successful;
