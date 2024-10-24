import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    @Output() openingPolicy = new EventEmitter<boolean>();

    onOpeningPolicy() {

        this.openingPolicy.emit(true);
    }

}
