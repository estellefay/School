import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {


  hide = true;
  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.resetForm();
  }

  // Reset le formulaire
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.data  = {
      Email: "",
      Password: "",
    }
  };


  // qund
  onSubmit(form: NgForm) {
    var body = {
      email: this.data.Email,
      password: this.data.Password,
    }
    this.http.post('http://localhost:3001/users/signup', body)
      .subscribe(
        (data:any) => this.successCo(data.token),
        (error:any) => this.errorCo(error)
      );
  }


  errorCo(error) {
    console.log(error.error)
    // redirection sur la page de conection
    // Proposer de créer un compte
  }

  successCo(token) {
    console.log(token)
    // save token 
    // redirection page admin
  }
}
