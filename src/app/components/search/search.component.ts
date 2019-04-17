import { Component, OnInit } from '@angular/core';
import { ResourceService, OcInfraModule, NavigationService, APICallerService, OptionParams } from '@diaas/ux-web';
import { PaginationService } from 'src/app/services/pagination.service';
import { AppConfig } from 'src/app/config/app.config';
// import { DefaultCustomFactory } from 'src/app/factories/defaultCustomFactory';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private id = '';
  //private distributorId='';
  private quote = 'https://apig.everest.dxchub.com/evdev/omni-new-business-services/omni/service/quotes';

  private apiCallerService: APICallerService;
  private paginationService: PaginationService;
  private quoteNumber: string;
  private distributorId: string;
  private resourceService: ResourceService;
  // private defaultCustomFactory: DefaultCustomFactory;

  constructor() {
    this.apiCallerService = OcInfraModule.AppInjector.get(APICallerService);
    this.paginationService = OcInfraModule.AppInjector.get(PaginationService);
    this.resourceService = OcInfraModule.AppInjector.get(ResourceService);
  }

  ngOnInit() {
  }

  search(): void {
    const optionParams = new OptionParams();
    optionParams.params = [{ 'key': '_start', 'value': 1 },
    { 'key': '_num', 'value': 5 },
    { 'key': 'quote-product-id', 'value': 'Life Suite' }]
    if (this.quoteNumber) {
      optionParams.params.push({ 'key': 'quote-identifier', 'value': this.quoteNumber });
    }
    if (this.distributorId) {
      optionParams.params.push({ 'key': 'quote-distributor-id', 'value': this.distributorId });
    }
    this.resourceService.updateCreateAliasName('quotes', AppConfig.hostURL + 'quotes', true, optionParams);
    this.apiCallerService.refresh(AppConfig.hostURL + 'quotes', optionParams)
      .subscribe(response => {
        console.log(AppConfig.hostURL + 'quotes' + optionParams);
        this.paginationService.pageNumber = 1;
      });

  }

  reset(): void {
    const optionParams = new OptionParams();
    optionParams.params = [{ 'key': '_start', 'value': 1 },
    { 'key': '_num', 'value': 5 },
    { 'key': 'quote-product-id', 'value': 'Life Suite' }];
    // this.quoteNumber="";
    //this.distributorId="";
    //optionParams.params.push({ 'key': 'quote-identifier', 'value': this.quoteNumber });
    //optionParams.params.push({ 'key': 'quote-distributor-id', 'value': this.distributorId });
    this.resourceService.updateCreateAliasName('quotes', AppConfig.hostURL + 'quotes', true, optionParams);
    console.log(optionParams);
    this.apiCallerService.refresh(AppConfig.hostURL + 'quotes', optionParams)
      .subscribe(response => {
        this.paginationService.pageNumber = 1;
      });
  }

  newClient(): void {
    OcInfraModule.AppInjector.get(NavigationService).navigateTo('screen/newClient')
  }
}