import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASE_URL: string = environment.BaseUrl;
  CLIENT_URL: string = `${this.BASE_URL}/client.json`;
  constructor(private _http: HttpClient) {}

  AddClient(AddClient: any): Observable<any> {
    return this._http.post<any>(this.CLIENT_URL, AddClient);
  }

  fetchALlClient(): Observable<any> {
    return this._http.get<any>(this.CLIENT_URL).pipe(
      map((data: any) => {
        let clientArr: any[] = [];
        for (const key in data) {
          clientArr.push({ ...data[key], Id: key });
        }
        return clientArr;
      })
    );
  }

  getSinglePost(Id: string): Observable<any> {
    return this._http.get<any>(`${this.BASE_URL}/client/${Id}.json`)!;
  }

  updatePost(update: any): Observable<any> {
    let UPDTAE_URL: string = `${this.BASE_URL}/client/${update.Id}.json`;
    return this._http.patch<any>(UPDTAE_URL, update);
  }

  remove(remove: any): Observable<null> {
    let REMOVE_URL: string = `${this.BASE_URL}/client/${remove.Id}.json`;
    return this._http.delete<null>(REMOVE_URL);

    
  }
}
