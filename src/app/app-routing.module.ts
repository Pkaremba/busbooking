import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrepareComponent } from './prepare/prepare.component';
import { PlanComponent } from './plan/plan.component';
import { ProgramComponent } from './program/program.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { TalkComponent } from './talk/talk.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'prepare', component: PrepareComponent},
  {path:'plan', component: PlanComponent},
  {path:'program', component: ProgramComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'contact', component: ContactComponent},
  {path:'talk', component: TalkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
