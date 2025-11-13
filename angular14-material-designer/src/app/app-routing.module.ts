import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButonsIconsComponent } from './butons-icons/butons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatapickerComponent } from './datapicker/datapicker.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
