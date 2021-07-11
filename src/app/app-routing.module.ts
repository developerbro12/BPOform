import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailConfigComponent } from './email-config/email-config.component';
import { EmailFormComponent } from './email-form/email-form.component';


const routes: Routes = [ 
  {
    path: ''
    , component: EmailConfigComponent
  }, 
  {
    path: 'form'
    , component: EmailFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
