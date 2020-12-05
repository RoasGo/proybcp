import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CampanaRegistroComponent } from '../campana-registro/campana-registro.component';
import { CampanaActulizarComponent } from '../campana-actulizar/campana-actulizar.component';
import { campana } from 'src/app/interfaces/campana.interface';
import { CampanaService } from 'src/app/services/campana.service';
import { Usuario } from '../../interfaces/usuario.interface';
@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {

  data: campana[];
  u: Usuario;
  constructor(
    private service: CampanaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  openDialog(c: campana ){
    this.dialog.open(CampanaActulizarComponent, {
      data: {
        cod_camp: c.cod_camp,
        descripcion: c.descripcion,
        fech_fin: c.fech_fin,
        fech_ini: c.fech_ini,
        fecha: c.fecha,
        titulo: c.titulo,
        cod_usu: c.cod_usu
      }
    });
  }

  openDialog2(){
    this.dialog.open(CampanaRegistroComponent, {
      data: {
        cod_camp: "",
        descripcion:  "",
        fech_fin: "",
        fech_ini: "",
        fecha: "",
        titulo: "",
        cod_usu: this.u
      }
    });

  }


   getUsuarios(){
    let resp = this.service.getAll();
    resp.subscribe((report) => {


      this.data = report as campana[];

    });

    }




  public eliminar(id: campana){

    console.log(this.data);
    this.data.splice(this.data.indexOf(id));
    this.service.eliminar(id);
    console.log(this.data);





  }

  public registrar(c: campana){
    console.log(c);
    console.log(this.data);
    this.service.registra(c).subscribe(response => {



    });
  }

  public actualizar(c: campana){

    this.service.actualizar(c).subscribe(response =>{


    });
  }
}
