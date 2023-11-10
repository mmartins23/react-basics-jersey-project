export default function OrderDetails({ itemsInBag }) {

  function calculateOrderTotal() {
    let orderTotal = 0;
    itemsInBag.forEach((item) => (orderTotal += item.price * item.quantity));
    return orderTotal.toFixed(2);
  }

  return (
    <section className="summary">
      <strong>Order Details</strong>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {itemsInBag.map((item) => (
            <tr>
              <td>
                {item.quantity} x {item.name}
              </td>
              <td>$ {(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}

          <tr>
            <th>Total</th>
            <th>$ 119.99</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
