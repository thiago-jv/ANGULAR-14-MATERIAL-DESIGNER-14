import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButonsIconsComponent } from './butons-icons/butons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { DialogComponent } from './dialog-modal/dialog/dialog.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {
    path: 'buttonIcon', component: ButonsIconsComponent
  },
  {
    path: 'formFiledInput', component: FormFieldInputComponent
  },
  {
    path: 'progBarSpinner', component: ProgressSpinnerComponent
  },
  {
    path: 'tabs', component: TabsComponent
  },
  {
    path: 'datapicker', component: DatapickerComponent
  },
  {
    path: 'snackbar', component: SnackbarComponent
  },
  {
    path: 'dialog', component: DialogComponent
  },
  {
    path: 'data-table', component: DataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
