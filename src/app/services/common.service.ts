import { Injectable } from '@angular/core';
import { OcInfraModule, APICallerService, ResourceService, ResourceDirectoryService } from '@diaas/ux-web';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {
    // tslint:disable-next-line:no-inferrable-types
    public triggerAccordionCollapse: boolean = false;
    private apiCallerService: APICallerService;
    private resourceService: ResourceService;
    private resourceDirectory: ResourceDirectoryService;

  constructor(private http: HttpClient) {
    this.apiCallerService = OcInfraModule.AppInjector.get(APICallerService);
    this.resourceService = OcInfraModule.AppInjector.get(ResourceService);
    this.resourceDirectory = OcInfraModule.AppInjector.get(ResourceDirectoryService);
  }
}
