import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  transf:Boolean = false;
  fecha:Date = new Date("2020-11-12T08:23:11.236+00:00");
  cliente: cliente;
  constructor(private authService: AuthService, private clienteService: ClienteService, private router: Router) {
    if ( authService.getCliente() !== null ) {
      
      this.cliente = JSON.parse( authService.getCliente() );

    } else {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit(): void {
  }

}
