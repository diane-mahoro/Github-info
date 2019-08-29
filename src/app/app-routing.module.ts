import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GtihubComponent } from './gtihub/gtihub.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent },
  {path: 'gtihub', component:GtihubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
