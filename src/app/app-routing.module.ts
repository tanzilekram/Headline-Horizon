import { DocumentationComponent } from './components/public/documentation/documentation.component';
import { PnfComponent } from './components/public/pnf/pnf.component';
import { ReportComponent } from './components/public/report/report.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { AboutComponent } from './components/public/about/about.component';
import { HeroComponent } from './components/public/hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HeroComponent },
  {path:'hero', redirectTo:'', pathMatch:'full', component:HeroComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent },
  {path:'report', component:ReportComponent },
  {path:'docs', component:DocumentationComponent },
  {path:'pnff', component:PnfComponent },
  {path:'**', component:PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
