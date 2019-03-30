import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HappyComponent } from './happy/happy.component';
import { SadComponent } from './sad/sad.component';
import { BlushComponent } from './blush/blush.component';
import { SickComponent } from './sick/sick.component';
import { ProudComponent } from './proud/proud.component';
import {NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes=[
  {path:'happy', component:HappyComponent},
  {path:'sad', component:SadComponent},
  {path:'blush', component:BlushComponent},
  {path:'proud', component:ProudComponent},
  {path:'sick', component:SickComponent},
  {path:'navbar/:id', component:NavbarComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HappyComponent,
    SadComponent,
    BlushComponent,
    SickComponent,
    ProudComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
