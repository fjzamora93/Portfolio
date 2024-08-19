import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    texts: string[] = [
        'soy desarrollador de software 💻', 
        'diseño aplicaciones ✏️', 
        'me encanta el buen café 😁☕'
    ];
    currentText: string = '';
    currentIndex: number = 0;
    isDeleting: boolean = false;
    typingSpeed: number = 100;
    deletingSpeed: number = 50;
    delayBetweenTexts: number = 2000;

    ngOnInit() {
        this.typingEffect();
      }
    
      typingEffect() {
        const fullText = this.texts[this.currentIndex];
        if (this.isDeleting) {
          this.currentText = fullText.substring(0, this.currentText.length - 1);
        } else {
          this.currentText = fullText.substring(0, this.currentText.length + 1);
        }
    
        let speed = this.typingSpeed;
    
        if (this.isDeleting) {
          speed = this.deletingSpeed;
        }
    
        if (!this.isDeleting && this.currentText === fullText) {
          speed = this.delayBetweenTexts;
          this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
          this.isDeleting = false;
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          speed = this.typingSpeed;
        }
    
        setTimeout(() => this.typingEffect(), speed);
      }
    
}
