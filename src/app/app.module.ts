import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Route[] = [
  { path: '', redirectTo: 'promises', pathMatch: 'full' },
  { path: 'promises', component: PromiseComponent },
  { path: 'observables', component: ObservablesComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, PromiseComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
