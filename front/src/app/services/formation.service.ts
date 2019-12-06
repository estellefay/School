import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormationService {


  private _formationListUrl = "http://localhost:3001/formation";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this._formationListUrl)
    .subscribe(res => {
      console.log(res);
  });
}

}

