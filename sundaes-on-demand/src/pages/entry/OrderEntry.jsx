import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

const OrderEntry = () => {
  const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
  //const orderDisabled = orderDetails.totals.scoops === "$0.00";

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
