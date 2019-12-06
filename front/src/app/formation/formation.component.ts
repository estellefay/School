import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Config } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../formation';



@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.less']
})
export class FormationComponent implements OnInit {

  private _formationListUrl = "http://localhost:3001/formation";
  formations;

  constructor(private formationService: FormationService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this._formationListUrl)
    .subscribe(res => {
      console.log(res);
      this.formations = res;
    }
  )}
  
}
