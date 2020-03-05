import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleReactiveFormComponent } from './example-reactive-form/example-reactive-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PrettyJsonPipe } from './example-reactive-form/pretty-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleReactiveFormComponent,
    PrettyJsonPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
