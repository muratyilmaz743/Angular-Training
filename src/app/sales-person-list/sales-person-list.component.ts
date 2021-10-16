import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.less']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] =[
    new SalesPerson("Murat","Yilmaz","mrt.yilmaz743@gmail.com",1000),
    new SalesPerson("Mert","Yildiz","mrt.yildiz@gmail.com",3000),
    new SalesPerson("Omer","Yilmaz","Omr.yilmaz744@gmail.com",5000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
