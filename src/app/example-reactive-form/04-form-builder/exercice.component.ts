import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-classes',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    franchise: [''],
    budget: [''],
    worldwide: [''],
    summary: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      budget: 356000000,
      worldwide: 2797800564,
      summary: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.'
    });
  }

  updateControls() {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame patchValue',
      releaseDate: '26/04/2019 patchValue',
    });
  }

  resetControls() {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
    });
  }


}
