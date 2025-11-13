import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButonsIconsComponent } from './butons-icons/butons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

const routes: Routes = [
  {
    path: 'buttonIcon', component: ButonsIconsComponent
  },
  {
    path: 'formFiledInput', component: FormFieldInputComponent
  },
  {
    path: 'progBarSpinner', component: ProgressSpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
