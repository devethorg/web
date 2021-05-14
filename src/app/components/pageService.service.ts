import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Data {
    title: string;
    content: string;
}

@Injectable()
export class PageService {

   constructor(private http: HttpClient) {
   
    }

    public getJSON(): Observable<any> {
        return this.http.get<Data>("../assets/data/pages.json");
    }
}