import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NouveauTirageComponent } from './nouveau-tirage/nouveau-tirage.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'tirage', component: NouveauTirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
