import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  // headers = headers.append('Authorization', this.authToken);

  private baseUrl = 'http://localhost:5000/service/users/';

  SignUpClient(user: FormData): Observable<any> {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}SignUpClient/`, user).pipe(
      map((auth: any) => {
        if (auth.success) {
          localStorage.setItem('TOKEN', auth.token);
          localStorage.setItem('currentUser', JSON.stringify(auth.user));

          0;
          return auth.success;
        } else {
        }
      }),
      catchError((err: any) => {
        console.log(err);
        return undefined;
      })
    );
  }
  SignUpAdmin(user: FormData): Observable<any> {
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}SignUpAdmin/`, user).pipe(
      map((auth: any) => {
        if (auth.success) {
          localStorage.setItem('TOKEN', auth.token);
          localStorage.setItem('currentUser', JSON.stringify(auth.user));

          0;
          return auth.success;
        } else {
        }
      }),
      catchError((err: any) => {
        console.log(err);
        return undefined;
      })
    );
  }
  signin(user: any): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.baseUrl}SignIn`, user, { headers: headers })
      .pipe(
        map((auth: any) => {
          if (auth.success) {
            localStorage.setItem('TOKEN', auth.token);
            localStorage.setItem('currentUser', JSON.stringify(auth.user));

            0;
            return auth.success;
          } else {
          }
        }),
        catchError((err: any) => {
          console.log(err);
          return undefined;
        })
      );
  }
  logOut() {
    localStorage.clear();
  }

  isLogedInClient() {
    return (
      localStorage.getItem('currentUser') != null &&
      JSON.parse(localStorage.getItem('currentUser')).__type == 'Client'
    );
  }

  isLogedInAdmin() {
    return (
      localStorage.getItem('currentUser') != null &&
      JSON.parse(localStorage.getItem('currentUser')).__type == 'Admin'
    );
  }

  constructor(private http: HttpClient) {}
}
