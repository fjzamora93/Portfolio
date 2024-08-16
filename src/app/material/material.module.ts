import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDialogActions, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatGridAvatarCssMatStyler, MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTab, MatTabBody, MatTabGroup } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';


//Gráficas
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatDivider } from '@angular/material/divider';


@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatList, MatListItem, 
    MatDialogActions, MatDialogContent, MatDialogClose,
    MatGridAvatarCssMatStyler, MatGridList, MatGridTile, //GALERÍA DE IMÁGENES
    MatProgressBarModule, MatSliderModule, FormsModule, MatRadioModule, MatSlider ,
    MatTab, MatTabBody, MatTabGroup, MatDivider,
    
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatList, MatListItem, 
    MatDialogActions, MatDialogContent, MatDialogClose,
    MatGridAvatarCssMatStyler, MatGridList, MatGridTile,
    MatProgressBarModule, MatSliderModule, FormsModule, MatRadioModule, MatSlider ,
    MatTab, MatTabBody, MatTabGroup, MatDivider,
  ]
})
export class MaterialModule { }
