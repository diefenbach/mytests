import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObsModule } from './observables/obs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ObsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
