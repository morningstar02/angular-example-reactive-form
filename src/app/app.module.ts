import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleReactiveFormModule } from './example-reactive-form/example-reactive-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
