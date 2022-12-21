import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets:any=[]

  constructor(private ticketservice:TicketsService) { }

  ngOnInit(): void {
    this.tickets=this.ticketservice.getAllTickets().subscribe(
      (data)=>{ 
      this.tickets=data
      console.log("liste des tickets",data)
      }
    );
  }

}
