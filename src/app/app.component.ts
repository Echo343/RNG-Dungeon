import { Component } from '@angular/core';
import { Room } from './room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rm1: Room;
  rm2: Room;
  
  constructor() {
    this.randomize();
  }
  
  randomize(): void {
    this.rm1 = new Room('Alpha', 'SOUTH');
    this.rm2 = new Room('Beta', 'South');
  }

}
