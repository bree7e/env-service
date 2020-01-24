import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENV_TOKEN, environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{
      provide: ENV_TOKEN,
      useFactory: () => environment
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
