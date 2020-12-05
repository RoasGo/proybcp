import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-depositos',
  templateUrl: './transfer-depositos.component.html',
  styleUrls: ['./transfer-depositos.component.css']
})
export class TransferDepositosComponent implements OnInit {

  transf:Boolean = false;
  resumen:Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
