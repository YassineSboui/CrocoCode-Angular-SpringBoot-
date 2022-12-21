import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  matches: any;

  delete(id: string) {
    this.matchesService.deleteMatch(id).subscribe((res) => {
      for (let index = 0; index < this.matches.length; index++) {
        if (this.matches[index]._id == id) {
          pos = index;
        }
      }
      this.matches.splice(pos, 1);
    });
    let pos;
  }

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.matchesService.getAllMatchs().subscribe((res) => {
      this.matches = res;
    });
  }
}
