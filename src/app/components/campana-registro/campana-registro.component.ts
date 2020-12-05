import { Component, OnInit, Inject } from '@angular/core';

import { campana } from 'src/app/interfaces/campana.interface';
import { CampanasComponent } from '../campanas/campanas.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-campana-registro',
  templateUrl: './campana-registro.component.html',
  styleUrls: ['./campana-registro.component.css']
})
export class CampanaRegistroComponent implements OnInit {

  constructor(

    private camp: CampanasComponent,
    @Inject(MAT_DIALOG_DATA) public data: campana
  ) { }

  usuario: Usuario;
  c: campana;
  ngOnInit(): void {
  }


  onFocus(event) {
    let parent = event.srcElement.parentNode.parentNode;

    parent.classList.add('focus');
  }

  onBlur(event) {
    let parent = event.srcElement.parentNode.parentNode;

    if(event.srcElement.value == "") {
      parent.classList.remove('focus');
    }
  }

  onKeyUp(event) {
    let pwd = event.srcElement.value;
    const showpwd = document.querySelector('.showpwd');

    if (event.srcElement.value != "") {
      if(showpwd.classList.contains('d-none')) {
        showpwd.classList.remove('d-none');
      } else {
        showpwd.classList.add('d-block');
      }
    } else {
      if(showpwd.classList.contains('d-block')) {
        showpwd.classList.remove('d-block');
      } else {
        showpwd.classList.add('d-none');
      }
    }
  }

  showPassword(event) {
    const showpwd = document.querySelector('.showpwd');
    const pwd = document.querySelector('#pwd');

    if(showpwd.classList.contains('fa-eye-slash')) {
      showpwd.classList.remove('fa-eye-slash');
      showpwd.classList.add('fa-eye');

      pwd.setAttribute('type','password');
    } else {
      showpwd.classList.remove('fa-eye');
      showpwd.classList.add('fa-eye-slash');

      pwd.setAttribute('type','text');
    }
  }

  saveapi(val: campana) {

    this.usuario={
      cod_usu: val.cod_usu.cod_usu,
      nombre_usu: "string",
      apellido_usu: "string",
      username: "string",
      password: "string",
    }

      console.log('aqui es');
      this.c = {
      cod_camp: val.cod_camp,
      descripcion: val.descripcion,
      fech_fin: val.fech_fin,
      fech_ini: val.fech_ini,
      fecha: val.fecha,
      hora: val.hora,
      titulo: val.titulo,
      cod_usu: this.usuario
    }
    console.log(this.c)
    this.camp.registrar(val);

  }

}
