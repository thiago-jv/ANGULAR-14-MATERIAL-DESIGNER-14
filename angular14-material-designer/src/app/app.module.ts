import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ButonsIconsComponent } from './butons-icons/butons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { DialogComponent } from './dialog-modal/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ButonsIconsComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatapickerComponent,
    SnackbarComponent,
    DialogModalComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
