
import {Component, Inject, Input} from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Portrait } from './portrait.model';
import { PortraitService } from './portrait.service';
import { PortraitComponent } from './portrait/portrait.component';
import { DataService } from '../posts/data.service';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MaterialModule, PortraitComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

    @Input() dataFile!: string;
    imageGallery : any[] = [];

    constructor(private portraitService: DataService) {}
    ngOnInit() {
        this.portraitService.getData(this.dataFile).subscribe(data => {
            this.imageGallery = data;
            console.log(this.imageGallery);
        });
    }



    //Medimos los índices de las imágenes que se están mostrando (currentIndex para la central)
    firstIndex: number = 0;
    lastIndex: number = 3;
    currentImage?: Portrait;

    openImage(image: any) {
        console.log("Opening image: " + image.imgUrl);
        this.currentImage = image;
    }

    nextImage() {
        this.firstIndex++;
        this.lastIndex++;
        if (this.lastIndex > this.imageGallery.length) {
            this.lastIndex = this.imageGallery.length;
            this.firstIndex = this.lastIndex - 3;
        }
    }

    previousImage() {
        this.firstIndex--;
        this.lastIndex--;
        if (this.firstIndex < 0 ) {
            this.firstIndex = 0;
            this.lastIndex = 3;
        }
    }

}
