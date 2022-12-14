import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NouveauTirageComponent } from './nouveau-tirage/nouveau-tirage.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ListeDetailsComponent } from './liste-details/liste-details.component';
import { TirageDetailsComponent } from './tirage-details/tirage-details.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AccueilComponent,
    NouveauTirageComponent,
    ListeDetailsComponent,
    TirageDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
