import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OcInfraModule } from '@diaas/ux-web';

import { CommonService } from '../app/services/common.service';
import { MyLoginComponent } from 'src/app/components/my-login/my-login.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@NgModule({
  imports: [
    OcInfraModule,
    FormsModule,
    CommonModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [LoginComponent],
  // tslint:disable-next-line:max-line-length
  exports: [LoginComponent],
  providers: [
    CommonService
  ]
})
export class SharedModule {

}
