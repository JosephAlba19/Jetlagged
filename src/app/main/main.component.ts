import { Component, OnInit } from '@angular/core';

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // tiles: Tile[] = [
  //   { text: '', cols: 3, rows: 2, color: '#eee' },
  //   { text: 'Two', cols: 1, rows: 2, color: '#eee' }
  //   // { text: 'Three', cols: 1, rows: 1, color: '#eee' },
  //   // { text: 'Four', cols: 2, rows: 1, color: '#eee' },
  // ];

  constructor() { }

  ngOnInit() {
  }


}
