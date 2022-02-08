import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  {path: 'employeeform', component:FormComponentComponent},
  {path: 'displaydata', component:TableComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
