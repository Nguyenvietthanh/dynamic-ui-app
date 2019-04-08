import { Component, OnInit } from '@angular/core';
import { OcInfraModule, ResourceService } from '@diaas/ux-web';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  private id='';
  private distributorId='';
  private quote = 'https://apig.everest.dxchub.com/evdev/omni-new-business-services/omni/service/quotes';
  constructor() { }

  ngOnInit() {
  }
  search(): void {


    if (this.id !== '' && this.distributorId !== '') {
      this.quote += '?quote-identifier=' + this.id + "&quote-distributor-id=" + this.distributorId;
      console.log(this.quote);
    }
    else if (this.id !== '') {
      this.quote += '?quote-identifier=' + this.id;
    }
    else if (this.distributorId !== '') {
      this.quote += "?quote-distributor-id=" + this.distributorId;
    }
    OcInfraModule.AppInjector.get(ResourceService).updateCreateAliasName('quotes',
      this.quote, true);
      console.log(this.quote);
    this.quote = 'https://apig.everest.dxchub.com/evdev/omni-new-business-services/omni/service/quotes';
  }

  reset(): void {
    OcInfraModule.AppInjector.get(ResourceService).updateCreateAliasName('quotes',
    'https://apig.everest.dxchub.com/evdev/omni-new-business-services/omni/service/quotes?', true);
       console.log(this.quote);
  }

}
