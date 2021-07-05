import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})

export class AppComponent {
  title = 'pipesInAngular';

  todaydate = new Date();
  info = { name: 'Jun', age: '25', address: { a1: 'Paris' } };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

}
