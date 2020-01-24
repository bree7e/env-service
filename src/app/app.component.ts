import { Component, Inject } from '@angular/core';

import { ENV_TOKEN } from '../environments/environment';
import { Environment } from 'src/environments/environment.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly url = this.environment.apiUrl;

  constructor(@Inject(ENV_TOKEN) private environment: Environment) {}
}
