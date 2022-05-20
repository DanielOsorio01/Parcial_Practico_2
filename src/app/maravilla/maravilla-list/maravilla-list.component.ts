import { Component, OnInit } from '@angular/core';
import { Maravilla } from '../maravilla';
import { MaravillaService } from '../maravilla.service';

@Component({
  selector: 'app-maravilla-list',
  templateUrl: './maravilla-list.component.html',
  styleUrls: ['./maravilla-list.component.css']
})
export class MaravillaListComponent implements OnInit {

  constructor(private maravillaService: MaravillaService) { }

  maravillas: Array<Maravilla> = [];
  selectedMaravilla!: Maravilla;
  selected: Boolean = false;

  onSelected(maravilla: Maravilla): void {
    this.selected = true;
    this.selectedMaravilla = maravilla;
  }

  getMaravillas(): void {
    this.maravillaService.getMaravillas().subscribe(( maravillas: Array<Maravilla>) => {
      this.maravillas = maravillas;
      this.maravillas.sort( (m1, m2) => m1.country < m2.country ? -1 : 1);
      console.log(maravillas);
    })
  }

  ngOnInit() {
    this.getMaravillas();
  }

}
