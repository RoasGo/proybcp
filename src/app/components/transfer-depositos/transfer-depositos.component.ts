import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { CuentaBancaria } from 'src/app/models/cuentas.bancarias';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Transferencia } from 'src/app/models/transferencia.model';

@Component({
  selector: 'app-transfer-depositos',
  templateUrl: './transfer-depositos.component.html',
  styleUrls: ['./transfer-depositos.component.css']
})
export class TransferDepositosComponent implements OnInit {

  transf:Boolean = false;
  resumen:Boolean = false;
  confirmacion:Boolean = false;

  cuentaOrigen: CuentaBancaria = new CuentaBancaria();
  cuentaDestino: CuentaBancaria = new CuentaBancaria();
  numeroCuenta: string;
  cliente: cliente;
  clienteDestino: cliente;
  cuentasBancarias: CuentaBancaria[]
  transferenciaData: Transferencia = new Transferencia();
  constructor(private authService: AuthService, private clienteService: ClienteService, private router: Router, private tranferenciaService: TransferenciaService) {
    if ( authService.getCliente() !== null ) {
      
      this.cliente = JSON.parse( authService.getCliente() );
      
        clienteService.getCuentasBancarias(this.cliente.cod_cli)
                  .subscribe( (data) => {
                    
                    this.cuentasBancarias = data as CuentaBancaria[]
  
                    }, (err) => {
                      console.log(err);
                      
                    }
                  );

    } else {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit(): void {
  }

  verificarDatos() {
    if (this.transferenciaData.monto > 0 && this.transferenciaData.codCuenta) {
      this.tranferenciaService.verificarCuenta(this.numeroCuenta)
            .subscribe( 
              (data: CuentaBancaria) => {
                this.transferenciaData.cod_destino_cuenta = data.cod_cuenta;
                this.cuentaDestino.numCuenta = data.numCuenta;
                this.cuentaDestino.tarjeta = data.tarjeta;
                this.cuentaDestino.codCli = data.codCli;
                this.transf = true;
              }, 
              (err) => {
                console.log(err);
              }
            );
      this.tranferenciaService.obtenerCuentaById(this.transferenciaData.codCuenta)
            .subscribe( 
              (data: CuentaBancaria) => {
                this.cuentaOrigen.numCuenta = data.numCuenta;
                this.cuentaOrigen.tarjeta = data.tarjeta;
                this.cuentaOrigen.codCli = data.codCli;
                
                this.transf = true;
                this.resumen = true;
              }, 
              (err) => {
                console.log(err);
              }
            );      
      
    }
    
  }
  
  realizarTransferencia(transfe:NgForm) {
    this.transferenciaData.cod_tipo = { "cod_tipo": 1 }
    this.transferenciaData.codCuenta = { "cod_cuenta": this.transferenciaData.codCuenta }
    this.transferenciaData.fecha = new Date('yyyy-MM-dd');
    this.transferenciaData.hora = new Date().getTime().toString();

    this.tranferenciaService.realizarTransferencia(this.transferenciaData)
              .subscribe(
                (data) => {
                  this.resumen = false;
                  this.confirmacion = true;
                }, 
                (err) => {
                  console.log("Error");
                  
                }
              );
    
  }
  

}

