import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ObsModule } from './observables/obs.module';
import { WsModule } from './ws/ws.module';
import { WsService } from './ws/ws.service';
import { OverviewComponent } from './overview/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ObsModule,
    WsModule,
  ],
  providers: [WsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
