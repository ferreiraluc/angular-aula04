import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
    providedIn: 'root'
})
export class CarroService {
    save(carro: Carro) {
      throw new Error('Method not implemented.');
    }
    
    API: string = 'http://localhost:8080/api/carro';
    http = inject(HttpClient);

    constructor() { }

    listAll(): Observable<Carro[]> {
        return this.http.get<Carro[]>(this.API);
    }
    

    getCarros(): Observable<Carro[]> {
        return this.http.get<Carro[]>(this.API);
    }

    getCarroById(id: number): Observable<Carro> {
        const url = `${this.API}/${id}`;
        return this.http.get<Carro>(url);
    }

    addCarro(carro: Carro): Observable<Carro> {
        return this.http.post<Carro>(this.API, carro);
    }

    updateCarro(carro: Carro): Observable<Carro> {
        const url = `${this.API}/${carro.id}`;
        return this.http.put<Carro>(url, carro);
    }

    delete(id: number): Observable<Carro> {
        const url = `${this.API}/${id}`;
        return this.http.delete<Carro>(url);
    }


}
