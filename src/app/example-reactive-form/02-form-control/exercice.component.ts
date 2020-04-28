import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-classes',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  name = new FormControl('');
  releaseDate = new FormControl('');
  franchise = new FormControl('');
  budget = new FormControl('');
  worldwide = new FormControl('');
  summary = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.name.setValue('Avengers: Endgame');
    this.releaseDate.setValue('26/04/2019');
    this.franchise.setValue(true);
    this.budget.setValue('356000000');
    this.worldwide.setValue('2797800564');
    this.summary.setValue('After the devastating events of Avengers: Infinity War (2018), ' +
      'the universe is in ruins.');
  }

  updateControls() {
    this.name.setValue('update name');
    this.releaseDate.setValue('update Date');
    this.franchise.setValue(true);
    this.budget.setValue('update Budget');
    this.worldwide.setValue('update Worlwide');
    this.summary.setValue('update Summary');
  }

  resetControls() {
    this.name.setValue(null);
    this.releaseDate.setValue(null);
    this.franchise.setValue(null);
    this.budget.setValue(null);
    this.worldwide.setValue(null);
    this.summary.setValue(null);
  }

}
