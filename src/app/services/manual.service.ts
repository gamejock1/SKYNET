import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { promise } from 'protractor';


@Injectable()



export class manualService {

  constructor(private http: HttpClient) {}

  turnLeft():Promise<any> {
    console.log('request made succesfully');
    return this.http.get<any>("https://api.giphy.com/v1/gifs/search?q=dog&api_key=cIzQ2aJwHt8s72O4ZDpwXVX8LpRi78L1&limit=10").toPromise(); 
  }

}













