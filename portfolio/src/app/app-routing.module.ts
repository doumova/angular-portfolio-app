import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { WorkedonComponent } from './components/workedon/workedon.component';


const routes: Routes = [
{path:'workedon', component:WorkedonComponent},
{path:'experiences', component:ExperiencesComponent},
{path:'formations', component:FormationsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
