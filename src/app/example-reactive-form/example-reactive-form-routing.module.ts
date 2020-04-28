import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleReactiveFormComponent } from './example-reactive-form.component';

import { ExerciceComponent } from './01-prototype/Exercice.component';

const routes: Routes = [
  {
    path: '', component: ExampleReactiveFormComponent, children: [
      { path: 'prototype', component: ExerciceComponent },
      {
        path: 'form-builder',
        loadChildren: () => import('./04-form-builder/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-group',
        loadChildren: () => import('./03-form-group/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: 'form-control',
        loadChildren: () => import('./02-form-control/exercice.module')
          .then(mod => mod.ExerciceModule)
      },
      {
        path: '',
        redirectTo: '/reactive-form/prototype',
        pathMatch: 'full'
      },
      { path: '**', component: ExerciceComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleReactiveFormRoutingModule { }
