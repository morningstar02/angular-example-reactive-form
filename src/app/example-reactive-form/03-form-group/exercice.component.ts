import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-classes',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = new FormGroup({
    name: new FormControl(''),
    releaseDate: new FormControl(''),
    franchise: new FormControl(''),
    budget: new FormControl(''),
    worldwide: new FormControl(''),
    summary: new FormControl('')
  });

  constructor() { }

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
