import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  url_atual:any;

  ngOnInit() {
    this.url_atual = window.location.href;
  }
}
