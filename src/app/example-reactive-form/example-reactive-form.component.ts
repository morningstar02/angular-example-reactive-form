import { Component } from '@angular/core';

@Component({
  selector: 'app-example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css']
})
export class ExampleReactiveFormComponent {

  current = 1;
  features = [
    { id: 1, name: 'Prototype', link: 'prototype' },
    { id: 2, name: 'FormControl', link: 'form-control' },
    { id: 3, name: 'FormGroup', link: 'form-group' },
    { id: 4, name: 'FormBuilder', link: 'form-builder' },
  ];

  changeItem(item: any) {
    this.current = item.id;
  }

}
