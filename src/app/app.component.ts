import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	optionsNotification = {
		timeOut: 5000,
		showProgressBar: true,
		pauseOnHover: true,
		clickToClose: true,
		animate: 'scale'
	}
	
}
