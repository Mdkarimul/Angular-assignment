import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Local-shop';
  tabs = [1, 2];
	counter = this.tabs.length + 1;
	active: any;
}
