import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Obs1Component } from './obs1/obs1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Obs1Component
  ],
  exports: [
    Obs1Component
  ]
})
export class ObsModule { }
