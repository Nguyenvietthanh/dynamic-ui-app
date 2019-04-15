import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdvGrowlModule, AdvGrowlService } from 'primeng-advanced-growl';
import { AppComponent } from '../main/app.component';
import { AppRoutingModule } from './app-routing.module';

import { ocInfraConfig } from './../../ocInfraConfig/ocinfra-config';
import { SharedModule } from './../../ocInfraConfig/ocinfra-shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { OcInfraWebModule } from '@diaas/ux-web';
import { MatDialogModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { CommonService } from '../services/common.service';
import { PaginationService } from '../services/pagination.service';
import { MessageComponent } from '../components/message/message.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    
    AppComponent,
    MessageComponent
  ],
  imports: [
    MatButtonToggleModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    BrowserModule,
    OcInfraWebModule.forRoot(ocInfraConfig, SharedModule),
    SharedModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AdvGrowlModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    CommonService,
    PaginationService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent],
})
export class AppModule { }
