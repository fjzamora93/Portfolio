import { Component, Input } from '@angular/core';
import { DataService } from '../posts/data.service';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  ];


@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {
    @Input({required: true}) dataFile!: string;

    displayedColumns: string[] = ['center', 'date', 'id', 'imgUrl', 'title'];
    dataSource = ELEMENT_DATA;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        if (this.dataFile) {
            console.log(this.dataFile);
            this.dataService.getData(this.dataFile).subscribe(data => {
                this.dataSource = data;
                console.log(this.dataSource);
            });
        }
    }

}
