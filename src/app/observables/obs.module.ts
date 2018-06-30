import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Obs1Component } from './obs1/obs1.component';
import { Obs2Component } from './obs2/obs2.component';
import { Obs3Component } from './obs3/obs3.component';
import { Obs6Component } from './obs6/obs6.component';
import { Obs7Component } from './obs7/obs7.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    Obs1Component,
    Obs2Component,
    Obs3Component,
    Obs6Component,
    Obs7Component,
  ],
  exports: [
    Obs1Component,
    Obs2Component,
  ]
})
export class ObsModule { }
