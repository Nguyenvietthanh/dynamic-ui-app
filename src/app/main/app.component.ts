import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { OcInfraModule, NavigationService } from '@diaas/ux-web';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic UI';
  private navigationService: NavigationService;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    this.navigationService = OcInfraModule.AppInjector.get(NavigationService);

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    const username = window.sessionStorage.getItem('username');
    if (!username || username === undefined) {
      this.navigationService.navigateTo('/');
    }
  }
 
}
