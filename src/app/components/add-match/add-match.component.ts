import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  addMatchForm: FormGroup;
  match: any = {};

  addMatch() {
    console.log(this.match);
    this.matchesService.createMatch(this.match).subscribe((res) => {
      alert('match Ajoute');
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private matchesService: MatchesService
  ) {}

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
      equipe1: [''],
      equipe2: [''],
      datematch: [''],
      heurematch: [''],
      lieumatch: [''],
      nbplacerestant: [''],
    });
  }
}
