import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  transf:Boolean = false;
  fecha:Date = new Date("2020-11-12T08:23:11.236+00:00");

  constructor() { }

  ngOnInit(): void {
  }

}
