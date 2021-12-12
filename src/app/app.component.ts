import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'capiter-task';
  constructor(private api: AuthServiceService) {}
  ngOnInit() {
    this.api.getApi().subscribe((user) => {});
  }
}
