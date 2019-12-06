import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.less']
})
export class FormationDetailComponent implements OnInit {

  formation = {};


  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getFormationDetail(this.route.snapshot.params['id']);
  }

  getFormationDetail(id) {
    this.http.get('http://localhost:3001/formation/'+ id).subscribe(data => {
      this.formation = data;
      console.log(this.formation);
    });
  }

}
