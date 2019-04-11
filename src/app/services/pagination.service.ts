import { Injectable } from '@angular/core';
import { APICallerService, OptionParams, ResourceService, OcInfraModule } from '@diaas/ux-web';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
    private apiCallerService: APICallerService
    public pageNumber: number;
    public optionParams = new OptionParams();
    private resourceService: ResourceService

    private count: number;
    public countQuotes: number;

  constructor() { 
    this.apiCallerService = OcInfraModule.AppInjector.get(APICallerService);
    this.resourceService = OcInfraModule.AppInjector.get(ResourceService);
  }
  getListQuotes(setPage: any): void {
    this.optionParams.params = [{ 'key': 'quote-product-id', 'value': 'Life Suite' },
                                { 'key': '_start', 'value': setPage },
                                { 'key': '_num', 'value': 5 }];
    if (this.optionParams.params.length !== 3) {
        this.apiCallerService.refresh(AppConfig.hostURL + 'quotes', this.optionParams)
        .subscribe(response => {
            this.count = response._links._count;
            this.resourceService.updateCreateAliasName('quotes', AppConfig.hostURL + 'quotes', true, this.optionParams);
        });
    } else {
        this.apiCallerService.refresh(AppConfig.hostURL + 'quotes', this.optionParams)
        .subscribe(response => {
            this.count = response._links._count;
            this.resourceService.updateCreateAliasName('quotes', AppConfig.hostURL + 'quotes', true, this.optionParams);
        });
    }
}

setFirstPage(): string {
    localStorage.currentPage = 1;
    this.pageNumber = 1;
    return localStorage.currentPage;
}

setPrevPage(): string {
    localStorage.currentPage = Number(localStorage.currentPage) - 5;
    this.pageNumber--;
    return localStorage.currentPage;
}

setNextPage(): string {
    localStorage.currentPage = Number(localStorage.currentPage) + 5;
    if (localStorage.currentPage > this.count) {
        localStorage.currentPage = Number(localStorage.currentPage) - 5;
    } else {
        this.pageNumber++;
    }
    return localStorage.currentPage;
}

callFirstPage(): void {
    this.getListQuotes(this.setFirstPage());
}
}
