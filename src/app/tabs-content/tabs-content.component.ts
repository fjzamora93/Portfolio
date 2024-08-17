import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DataService } from '../posts/data.service';

@Component({
  selector: 'app-tabs-content',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.css'
})
export class TabsContentComponent {
    @Input() dataFile!: string;
    dataSource: any;

    constructor (private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getData(this.dataFile).subscribe(data => {
            this.dataSource = data;
            console.log(this.dataSource);
        });
    }   

}
