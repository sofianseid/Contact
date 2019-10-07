import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { MatCheckboxModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  providers: []
})
export class HomeModule { }
