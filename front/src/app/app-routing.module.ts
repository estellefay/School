import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';



export const appRouteList: Routes = [
  {
      path: 'formation',
      component: FormationComponent
  },
  {
    path: 'formation-details/:id',
    component: FormationDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRouteList)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
