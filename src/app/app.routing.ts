import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Obs1Component } from './observables/obs1/obs1.component';
import { Obs2Component } from './observables/obs2/obs2.component';
import { Obs3Component } from './observables/obs3/obs3.component';
import { Obs6Component } from './observables/obs6/obs6.component';
import { Obs7Component } from './observables/obs7/obs7.component';
import { OverviewComponent } from './overview/overview/overview.component';
import { ChatComponent } from './ws/chat/chat.component';
import { Ws1Component } from './ws/ws1/ws1.component';
import { Ws2Component } from './ws/ws2/ws2.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: 'obs1',
    component: Obs1Component
  },
  {
    path: 'obs2',
    component: Obs2Component
  },
  {
    path: 'obs3',
    component: Obs3Component
  },
  {
    path: 'obs6',
    component: Obs6Component
  },
  {
    path: 'obs7',
    component: Obs7Component
  },
  {
    path: 'ws1',
    component: Ws1Component
  },
  {
    path: 'ws2',
    component: Ws2Component
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
