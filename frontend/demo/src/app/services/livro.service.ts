import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
    providedIn: 'root'
})
export class LivroService {
    API: string = 'http://localhost:8080/api/livro';
    http = inject(HttpClient);

    constructor() { }

    listAll(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.API);
      }
    
      save(livro: Livro): Observable<Livro> {
        return this.http.post<Livro>(this.API, livro);
      }
    
      exemploErro(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.API + '/erro');
      }

      update(livro: Livro): Observable<Livro> {
        return this.http.put<Livro>(this.API, livro);
      }

      delete(id: number): Observable<any> {
        return this.http.delete(this.API + '/' + id);
      }
    

    
}
