import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  orders = [
    {
      id: 1,
      cname: "Mahesh",
      address:"H.No:32-3,kormangala 5th block,Near sony signal.8484848zzz.",
      item: "Dominos Onion",
      quantity: 2,
      uprice: 50,
      status: 1
    }, 
    {
      id: 2,
      cname: "Kumar",
      address:"H.No:45-4,Bannergatta, Near Goplam Mall,97848xxxxx.",
      item: "Chicken Pizza",
      quantity: 1,
      uprice: 50,
      status: 1
    },
    {
      id: 3,
      cname: "Smith",
      address:"Flat No:99-23,Esteem mall Road,Hebbal,9884xx843.",
      item: "Tandoori Pizza",
      quantity: 4,
      uprice: 50,
      status: 1
    },
    {
      id: 4,
      cname: "Kohili",
      address:"Shop No:32/4,Majestic Bustand,Near Anand circle,9884xxx843.",
      item: "Paneer Pizza",
      quantity: 1,
      uprice: 50,
      status: 1
    },
    {
      id: 5,
      cname: "Rohith",
      address:"H.No:21-12,Dommluru,9884xxxx43.",
      item: "Chilli Pizza",
      quantity: 3,
      uprice: 50,
      status: 1
    }
  ];

  constructor() {}

  report() {
    return this.orders;
  }
  statusChange(id, status) {
    this.orders.map(row => {
      if (row.id == id) {
        row.status = status;
      }
    });
  }
}
