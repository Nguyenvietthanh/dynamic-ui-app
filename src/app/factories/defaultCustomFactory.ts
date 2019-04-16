import { OcInfraModule, NavigationService, APICallerService, ResourceService } from '@diaas/ux-web';
import { AppConfig } from '../config/app.config';

/**
 * this class should not be used as a substitute of modular app factory
 * this means that each screen should be bound to its specific factory (to keep the separation of concerns)
 * the use of this factory to provide a default placehold for app factory to reduce the size of skeleton for a new screen.
 */
export class DefaultCustomFactory  {
    private apiCallerService: APICallerService
    private quote = 'https://apig.everest.dxchub.com/evdev/omni-new-business-services/omni/service/quotes/';
    private resourceService: ResourceService
    constructor() { 
        this.apiCallerService = OcInfraModule.AppInjector.get(APICallerService);
        //console.log(this.apiCallerService);
        this.resourceService = OcInfraModule.AppInjector.get(ResourceService);
        //console.log(this.resourceService);
       
      }

    public voidMethod() {
        console.log('Default app level methods');
    }

    public async test(paramsomb) {
       //console.log(paramsomb) 
       const customParams: any = {};
       
            const quoteDetails = paramsomb.href;
            
           
            customParams.alias="quoteDetails";
            this.apiCallerService.get(quoteDetails).subscribe(async res => {
                this.resourceService.updateCreateAliasName('quoteDetails', quoteDetails, true);
                this.resourceService.getHrefByAliasName('quoteDetails');
                OcInfraModule.AppInjector.get(NavigationService).navigateTo('screen/clientDetails',quoteDetails,customParams.alias);

            })
    }
    public test2(){
        console.log(this.resourceService.getHrefByAliasName('insureds'));
        console.log(this.resourceService.getHrefByAliasName('insured'));
    }


}
