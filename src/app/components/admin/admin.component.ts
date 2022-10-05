import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  matches: any;

  delete(id: string) {
    let pos;
    for (let index = 0; index < this.matches.length; index++) {
      if (this.matches[index].id == id) {
        pos = index;
      }
    }
    this.matches.splice(pos, 1);
    localStorage.setItem('matches', JSON.stringify(this.matches));
  }

  constructor() {}

  ngOnInit(): void {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    console.log(this.matches);
  }
}
