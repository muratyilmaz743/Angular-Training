import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.less']
})
export class SalesPersonListComponent implements OnInit {
  faCoffee = faCoffee;
  faCheck = faCheck;
  faTimes = faTimes;
  salesPersonList: SalesPerson[] =[
    new SalesPerson("Murat","Yilmaz","mrt.yilmaz743@gmail.com",1000),
    new SalesPerson("Mert","Yildiz","mrt.yildiz@gmail.com",3000),
    new SalesPerson("Omer","Yilmaz","Omr.yilmaz744@gmail.com",5000),
    new SalesPerson("Cengizhan","Ozeyranoglu","cilgin.cengo@gmail.com",8000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
