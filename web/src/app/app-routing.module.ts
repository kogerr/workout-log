import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
