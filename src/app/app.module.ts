import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatBadgeModule } from '@angular/material';
import { MatTabsModule, MatGridListModule } from '@angular/material';
import { MainComponent } from './main/main.component';


// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatTabsModule,
    MatGridListModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
