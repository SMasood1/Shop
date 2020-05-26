import * as moment from "moment";

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }

  get readableDate() {
    
    // Not working
    // return moment(this.date).format("MMMM Do YYYY, hh");
    return 'Wed, March 23, 2020'
  }
}
export default Order;
