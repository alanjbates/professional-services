import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatMenuModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as Sentry from '@sentry/browser';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AngularResizedEventModule} from 'angular-resize-event';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './/app-routing.module';
import {AppComponent} from './app.component';
import {JobComponent} from './job/job.component';
import {LogDisplayComponent} from './log-display/log-display.component';
import {PlanSideDisplayComponent} from './plan-side-display/plan-side-display.component';
import {PlanStatusCardComponent} from './plan-status-card/plan-status-card.component';
import {ProjectsComponent} from './projects/projects.component';
import {StageDetailsComponent} from './stage-details/stage-details.component';
import {StepDetailsComponent} from './step-details/step-details.component';
import {TimingDisplayComponent} from './timing-display/timing-display.component';
import {VisDisplayComponent} from './vis-display/vis-display.component';

Sentry.init({
  dsn: 'https://1cfbb9646b584e9b9e4973d39970075a@sentry.io/1370691',
  environment: environment.name,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    TimingDisplayComponent,
    PlanStatusCardComponent,
    ProjectsComponent,
    VisDisplayComponent,
    LogDisplayComponent,
    PlanSideDisplayComponent,
    StageDetailsComponent,
    StepDetailsComponent,
  ],
  imports: [
    AngularResizedEventModule,
    FlexLayoutModule,
    ScrollDispatchModule,
    MatDividerModule,
    MatTabsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    BrowserModule,
    // note to self: import HttpClientModule after BrowserModule, otherwise
    // there is trouble.
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    {provide: ErrorHandler, useClass: SentryErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
