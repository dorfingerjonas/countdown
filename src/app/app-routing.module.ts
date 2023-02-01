import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { NavComponent } from './nav/nav.component';
import { NavGuard } from './guard/nav.guard';

const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    canActivate: [ NavGuard ]
  },
  {
    path: ':path',
    component: CountdownComponent
  },
  {
    path: '**',
    component: CountdownComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
