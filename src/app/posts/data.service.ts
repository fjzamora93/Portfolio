import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { CsrfService } from '../csrf.service';
import { environment } from '../../environments/environment';

//Importación e los datos


@Injectable({ providedIn: 'root' })
export class DataService {

    constructor(private http: HttpClient) { }

    // Método que acepta un parámetro para cargar el JSON correspondiente
    getData(fileName: string): Observable<any> {
        const url = `data/${fileName}.json`;
        return this.http.get(url);
    }

}
