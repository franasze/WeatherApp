import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showComponentTwo: boolean = false;

  loadComponentTwo() {
    this.showComponentTwo = true;
  }
}
