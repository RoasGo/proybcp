import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { campana } from '../interfaces/campana.interface';
@Injectable({
  providedIn: 'root'
})
export class CampanaService {

  constructor(private http: HttpClient) { }




  public getAll(){
    return this.http.get('http://localhost:8080/api/campanas');
  }



  public registra(campana: campana){


    const api = 'http://localhost:8080';
    const url = `${api}/api/campanas/registrar`;

    return this.http.post<campana>(url, {

      descripcion: campana.descripcion,
      fech_fin: campana.fech_fin,
      fech_ini: campana.fech_ini,
      fecha: campana.fecha,
      hora: campana.hora,
      titulo: campana.titulo,
      cod_usu: {
        cod_usu: campana.cod_usu
      }
    });

}

public actualizar(campana: campana): Observable<campana>{


  const api = 'http://localhost:8080';
  const url = `${api}/api/campanas/actualizar`;

  return this.http.put<campana>(url, {
    cod_camp: campana.cod_camp,
    descripcion: campana.descripcion,
    fech_fin: campana.fech_fin,
    fech_ini: campana.fech_ini,
    fecha: campana.fecha,
    hora: campana.hora,
    titulo: campana.titulo,
    cod_usu: campana.cod_usu
  });

}

public eliminar(id: campana){
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  const api = 'http://localhost:8080';
  const url = `${api}/api/campanas/eliminar/${id.cod_camp}` ;

  return this.http.delete<campana>(url, options).subscribe(s => {
    console.log(s);
  });

}

}
