import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ws1Component } from './ws1/ws1.component';
import { Ws2Component } from './ws2/ws2.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    Ws1Component,
    Ws2Component,
    ChatComponent
  ],
  exports: [
    Ws1Component
  ],
})
export class WsModule { }
