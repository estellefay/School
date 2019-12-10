import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';



export const appRouteList: Routes = [
  {
      path: 'formation',
      component: FormationComponent
  },
  {
    path: 'formation-details/:id',
    component: FormationDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
