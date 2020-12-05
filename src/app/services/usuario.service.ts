import { HttpClient , HttpHeaders} from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroUsuarioComponent } from '../components/registro-usuario/registro-usuario.component';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient ) { }

  user: Usuario;
  public getUsuarios(){
    return this.http.get('http://localhost:8080/api/usuarios');
  }



  public registrarUsuario(usuario: Usuario){


    const api = 'http://localhost:8080';
    const url = `${api}/api/usuarios/registrar`;

    return this.http.post<Usuario>(url, {

      nombre_usu: usuario.nombre_usu,
      apellido_usu: usuario.apellido_usu,
      username: usuario.username,
      password: usuario.password
    });

}

public actualizarUsuario(usuario: Usuario): Observable<Usuario>{


  const api = 'http://localhost:8080';
  const url = `${api}/api/usuarios/actualizar`;

  return this.http.put<Usuario>(url, {

    cod_usu: usuario.cod_usu,
    nombre_usu: usuario.nombre_usu,
    apellido_usu: usuario.apellido_usu,
    username: usuario.username,
    password: usuario.password
  });

}

public eliminarUsuario(id: Usuario){
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  const api = 'http://localhost:8080';
  const url = `${api}/api/usuarios/eliminar/${id.cod_usu}` ;

  return this.http.delete<Usuario>(url, options).subscribe(s => {
    console.log(s);
  });

}
}
