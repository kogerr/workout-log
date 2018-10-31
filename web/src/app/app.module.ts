import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthenticationInterceptor } from './service/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
