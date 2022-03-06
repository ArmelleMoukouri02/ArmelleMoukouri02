import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilsComponent } from './Composants/profils/profils.component';
import { CompetenceComponent } from './Composants/competence/competence.component';
import { ProfessionComponent } from './Composants/profession/profession.component';
import { LangueComponent } from './Composants/langue/langue.component';
import { PointInteretComponent } from './Composants/point-interet/point-interet.component';
import { CursusComponent } from './Composants/cursus/cursus.component';
import { TechComponent } from './tech/tech.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilsComponent,
    CompetenceComponent,
    ProfessionComponent,
    LangueComponent,
    PointInteretComponent,
    CursusComponent,
    TechComponent,
    EditCompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
