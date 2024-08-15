import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DataService } from '../posts/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    @Input() dataFile!: string;
    dataList: any[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        if (this.dataFile) {
            this.dataService.getData(this.dataFile).subscribe(data => {
                this.dataList = data;
            });
        }
    }
}
