import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauTirageComponent } from './nouveau-tirage/nouveau-tirage.component';
import { ListeDetailsComponent } from './liste-details/liste-details.component';
import { TirageDetailsComponent } from './tirage-details/tirage-details.component';


const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'tirage', component: NouveauTirageComponent},
  {path:'liste-details/:id', component: ListeDetailsComponent},
  {path:'liste-details', component: ListeDetailsComponent},
  {path:'tirage-details/:id', component: TirageDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
