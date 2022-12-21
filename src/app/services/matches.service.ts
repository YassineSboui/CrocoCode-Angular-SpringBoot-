import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private baseUrl = 'http://localhost:5000/service/match/';

  constructor(private http: HttpClient) {}
  getAllMatchs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  createMatch(Match: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, Match);
  }
  updateMatch(id: string, Match: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, Match);
  }
  deleteMatch(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getOneMatch(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
