import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  templateUrl: './step-form.component.html',
  styleUrl: './step-form.component.css'
})
export class StepFormComponent {


        // En tu componente
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', [Validators.required, Validators.email]], // Añadido Validators.email
    });
    this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required],
    });
}

}
