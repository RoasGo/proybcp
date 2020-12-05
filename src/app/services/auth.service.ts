import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAuth } from '../interfaces/auth.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


}
