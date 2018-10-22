import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: '#303030' },
    { text: 'Two', cols: 1, rows: 2, color: '#303030' },
    { text: 'Three', cols: 1, rows: 1, color: '#303030' },
    { text: 'Four', cols: 2, rows: 1, color: '#303030' },
  ];

  ngOnInit() {
  }


}
