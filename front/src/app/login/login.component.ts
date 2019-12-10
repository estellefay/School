import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})



export class LoginComponent implements OnInit {

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
    this.http.post('http://localhost:3001/users/login', body)
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

  //   (err: any) => {
  //     if (err instanceof HttpErrorResponse) {
  //       if (err.status !== 401) {
  //        return;
  //       }
  //       this.router.navigate(['login']);
  //     }
  // }


          //(res:any) => {
      //   if (condition) {
          
      //   }
      //   if (res.token !== undefined && res.token !== null) { 
      //     console.log("authentification raté")       
      //   } else {
      //     console.log(res.token);
      //   }
      // SI erreur 
      // si token 