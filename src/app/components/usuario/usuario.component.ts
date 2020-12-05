import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';
import { UsuarioActualizarComponent } from '../usuario-actualizar/usuario-actualizar.component';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data: Usuario[];
  ELEMENT_DATA: Usuario[];
  displayedColumns: string[] = ['cod','nombre', 'apellido', 'usuario','a'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);

  constructor(
    private service: UsuarioService,
    public dialog: MatDialog

    ) { }

  ngOnInit(): void {
    this.getUsuarios();

  }

  openDialog(usu: Usuario ){
    this.dialog.open(UsuarioActualizarComponent, {
      data: {
        cod_usu: usu.cod_usu,
        nombre_usu: usu.nombre_usu,
        apellido_usu: usu.apellido_usu,
        username: usu.username,
        password: usu.password
      }
    });
  }

  openDialog2(){
    this.dialog.open(RegistroUsuarioComponent, {
      data: {
        cod_usu: "",
        nombre_usu:  "",
        apellido_usu: "",
        username: "",
        password: ""
      }
    });

  }


   getUsuarios(){
    let resp = this.service.getUsuarios();
    resp.subscribe((report) => {

      this.dataSource.data = report as Usuario[];
      this.data = report as Usuario[];

    });

    }




  public eliminar(id: Usuario){

    console.log(this.data);
    this.data.splice(this.data.indexOf(id));
    this.service.eliminarUsuario(id);
    console.log(this.data);





  }

  public registrar(usu: Usuario){
    console.log(usu);
    console.log(this.data);
    this.service.registrarUsuario(usu).subscribe(response => {



    });
  }

  public actualizar(usu: Usuario){

    this.service.actualizarUsuario(usu).subscribe(response =>{


    });
  }

}
