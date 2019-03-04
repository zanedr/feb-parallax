import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
