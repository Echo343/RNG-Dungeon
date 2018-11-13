import { Component, ViewChild } from '@angular/core';
import { Room } from './room';
import { HistoryComponent } from './history/history.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rm1: Room;
  private idCounter: number = 0;

  @ViewChild(HistoryComponent)
  private historyList: HistoryComponent;
  
  constructor() {
    this.randomize();
  }
  
  randomize(): void {
    this.rm1 = new Room(<string> <any> this.idCounter++, 'SOUTH');
    if (this.historyList) {
      this.historyList.addRoom(this.rm1);
    }
  }

}
