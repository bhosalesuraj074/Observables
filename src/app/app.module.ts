import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreationComponent } from './observables/creation/creation.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromiseComponent } from './promise/promise.component';
import { TaskComponent } from './task/task.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'promises', component: PromiseComponent },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [{ path: 'creation', component: CreationComponent }],
  },
  { path: 'task', component: TaskComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HomeComponent,
    PromiseComponent,
    ObservablesComponent,
    TaskComponent,
    CreationComponent,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
