import { OcInfraModule, APICallerService, ResourceService } from '@diaas/ux-web';

export class ServiceFactory {
  public static getService(serviceType: string): any {
    switch (serviceType) {
      case 'APICallerService':
        return OcInfraModule.AppInjector.get(APICallerService);
      case 'ResourceService':
        return OcInfraModule.AppInjector.get(ResourceService);
      default:
        return null;
    }
  }
}
