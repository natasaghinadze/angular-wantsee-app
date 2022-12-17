import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navigationmodule } from './navigation/navigation.module';
import { MainComponent } from './pages/main/main.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { PlacesComponent } from './pages/places/places.component';
import { JournalComponent } from './pages/journal/journal.component';
import { TraditionalEventsComponent } from './pages/traditional-events/traditional-events.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CountriesComponent,
    PlacesComponent,
    JournalComponent,
    TraditionalEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    Navigationmodule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
