import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';


import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { TabsContentComponent } from "./tabs-content/tabs-content.component";
import { TableListComponent } from "./table-list/table-list.component";
import { StepFormComponent } from './step-form/step-form.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, 
   PostCreateComponent, PostListComponent, TabsContentComponent,
    GalleryComponent, GraphicsComponent, NavBarComponent, NavBarComponent, TabsContentComponent, TableListComponent,
    StepFormComponent, ExperienceComponent, FooterComponent]
})

export class AppComponent {
    
}
