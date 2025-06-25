import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pet } from './models/pet.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'techintapp';
  petForm: FormGroup;
  pets: Pet[] = [];
  statutes: string[] = ['Listed', 'Examining', 'Finally Back to Hooman'];

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  addPet() {
    if (this.petForm.valid) {
      const petData: Pet = {
        name: this.petForm.value.name,
        status: 'Listed',
      };
      this.pets.push(petData);
      this.petForm.reset();
    }
  }

  moveStatus(pet: Pet) {
    if (pet.status === 'Listed') {
      pet.status = 'Examining';
    } else if (pet.status === 'Examining') {
      pet.status = 'Finally Back to Hooman';
    }
  }
}
