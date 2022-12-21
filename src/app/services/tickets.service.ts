import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  ticketsURL = 'http://localhost:8090/getAllTickets';

  constructor(private http: HttpClient) {}
  getAllTickets() {
    return this.http.get<{ res: any }>(this.ticketsURL);
  }
}
