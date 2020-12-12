import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cliente } from 'src/app/interfaces/cliente.interface';
import { CuentaBancaria } from 'src/app/models/cuentas.bancarias';
import { Transferencia } from 'src/app/models/transferencia.model';
import { AuthService } from 'src/app/services/auth.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  
  transf:Boolean = false;
  fecha:Date = new Date("2020-11-12T08:23:11.236+00:00");
  cliente: cliente;
  datosHistorial: Array<any> = [];
  listaHistorial: Array<any> = [];
  
  constructor(private authService: AuthService, private clienteService: ClienteService, private router: Router, private transferenciaService: TransferenciaService) {
    if ( authService.getCliente() !== null ) {
      
      this.cliente = JSON.parse( authService.getCliente() );
      let historyData = {
        monto: 0.0,
        nombres: '',
        fecha: new Date()
      };

      transferenciaService.obtenerTranferenciaByCliente(this.cliente.cod_cli)
              .subscribe(
                ( data ) => {
                  let resp = data as Array<any>
                  resp.map( (trans:Transferencia)=> {
                    historyData = {
                      ...historyData,
                      monto: trans.monto,
                      fecha: trans.fecha,
                      nombres: trans.cod_destino_cuenta.toString()
                    }

                    this.datosHistorial = [
                      ...this.datosHistorial,
                      historyData
                    ]
                    
                  });
                  
                },
                ( err ) => {
                  console.log(err);
                  
                }, () => {
                  this.datosHistorial.map( ( dato ) => {
                    clienteService.getCuentaById( dato.nombres )
                        .subscribe(
                          (data: CuentaBancaria) => {
                            dato = 
                              {...dato,
                              nombres: `${data.codCli.nom_cli} ${data.codCli.apepat_cli}`}
                            
                            this.listaHistorial.push(dato)
                          }
                          );
                        });
                        
                      }
                      );
      

    } else {
      this.router.navigateByUrl("/login");
    }
  }


  ngOnInit(): void {
  }

  comenzarTransferencia() {
    
  }

}
