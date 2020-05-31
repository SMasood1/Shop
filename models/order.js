import { format } from 'date-fns'

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  // Corrected error with date and time
  get readableDate() {
    return format(new Date(), 'Pp')
  }
}
export default Order;
