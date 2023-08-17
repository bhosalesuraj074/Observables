import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreationComponent } from './observables/creation/creation.component';
import { ErrorHandlingComponent } from './observables/error-handling/error-handling.component';
import { FilteringComponent } from './observables/filtering/filtering.component';
import { JoinComponent } from './observables/join/join.component';
import { MathematicalComponent } from './observables/mathematical/mathematical.component';
import { ObservablesComponent } from './observables/observables.component';
import { TransformationComponent } from './observables/transformation/transformation.component';
import { PromiseComponent } from './promise/promise.component';
import { SubjectService } from './services/subject.service';

import { TaskComponent } from './task/task.component';
import { Comp1Component } from './utility/comp1/comp1.component';
import { Comp2Component } from './utility/comp2/comp2.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'promises', component: PromiseComponent },
  {
    path: 'observables',
    component: ObservablesComponent,
    children: [
      // { path: '', component: ObservablesComponent },
      { path: 'creation', component: CreationComponent },
      { path: 'filter', component: FilteringComponent },
      { path: 'mathematical', component: MathematicalComponent },
      { path: 'join', component: JoinComponent },
      { path: 'error', component: ErrorHandlingComponent },
      { path: 'tranformation', component: TransformationComponent },
    ],
  },
  { path: 'subject', component: UtilityComponent },
  { path: 'task', component: TaskComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    PromiseComponent,
    ObservablesComponent,
    TaskComponent,
    CreationComponent,
    FilteringComponent,
    UtilityComponent,
    Comp1Component,
    Comp2Component,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  providers: [SubjectService],
})
export class AppModule {}
