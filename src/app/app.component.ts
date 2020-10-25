import { Component, VERSION } from "@angular/core";
import { OrderService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';
  orderDetail : any = {};
  order = [];
  constructor(public o: OrderService) {
    this.order = o.report();
  }
  changeStatus(id, status) {
    let nextStatus = status + 1;
    this.o.statusChange(id, nextStatus);
  }
  detailOrder(id) {
    this.orderDetail = this.order.filter(row => {
      if (row.id == id) {
        return row;
      }
    })[0];
  }
}





  

