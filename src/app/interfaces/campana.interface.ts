import { Usuario } from './usuario.interface';

export interface campana{

 cod_camp: number;
 descripcion: string;
 fech_fin: string;
 fech_ini: string;
 fecha: string;
 hora: string;
 titulo: string;
 cod_usu: Usuario;
}
