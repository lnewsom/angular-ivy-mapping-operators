import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MapTestComponent } from './map-test/map-test.component';
import { DifferencesComponent } from './differences/differences.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MapTestComponent, DifferencesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
