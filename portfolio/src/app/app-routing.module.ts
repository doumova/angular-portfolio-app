import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationsComponent } from './components/formations/formations.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkedonComponent } from './components/workedon/workedon.component';


const routes: Routes = [
{path:'workedon', component:WorkedonComponent},
{path:'experiences', component:ExperiencesComponent},
{path:'formations', component:FormationsComponent},
{path:'body', component:BodyComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
