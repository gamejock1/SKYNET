import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './menu.component';
import { manualComponent } from './manual.component';
import { manualControlsComponent } from './manualControls.component';
import { planComponent } from './plan.component';
import { HttpClientModule } from '@angular/common/http';
import { manualService } from './services/manual.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    manualComponent,
    manualControlsComponent,
    planComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'plan', component: planComponent},
      {path: 'manualControls', component: manualControlsComponent},
      {path: 'manual', component: manualComponent},
      { path: '', component: TestComponent }
    ]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
