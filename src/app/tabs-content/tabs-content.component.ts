import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-tabs-content',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.css'
})
export class TabsContentComponent {

}
