import { Component, Input, inject, input } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DataService } from '../posts/data.service';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MaterialModule, MatStepperModule, MatIcon],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    @Input() dataFile!: string;
    dataList: any[] = [];
    private _formBuilder = inject(FormBuilder);

    

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        if (this.dataFile) {
            this.dataService.getData(this.dataFile).subscribe(data => {
                this.dataList = data;
            });
        }
    }
}
