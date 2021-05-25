import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';//fontawesome module imported


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//browser anmation module imported
import { ToastrModule } from 'ngx-toastr';//toster module imported


@NgModule({
  declarations: [
    AppComponent,
    IconComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
