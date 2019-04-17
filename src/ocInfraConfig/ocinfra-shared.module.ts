import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OcInfraModule } from '@diaas/ux-web';

import { CommonService } from '../app/services/common.service';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PagenumberComponent } from 'src/app/components/pagenumber/pagenumber.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { DefaultCustomFactory } from 'src/app/factories/defaultCustomFactory';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    OcInfraModule,
    FormsModule,
    CommonModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [LoginComponent,PagenumberComponent,SearchComponent,FooterComponent],
  // tslint:disable-next-line:max-line-length
  exports: [LoginComponent,PagenumberComponent,SearchComponent,FooterComponent],
  providers: [
    CommonService,
    DefaultCustomFactory
  ]
})
export class SharedModule {

}
