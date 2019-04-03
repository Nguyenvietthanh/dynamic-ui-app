import { FactoryLoader, OcInfraConfig } from '@diaas/ux-web';
import { CustomFactoryLoader } from '../app/factories/custom-factory-loader';
import { AppConfig } from '../app/config/app.config';

export function CustomFactoryLoaderFunction() {
  return new CustomFactoryLoader();
}
export const ocInfraConfig: OcInfraConfig = {
  hostURL: {
    defaultHostUrl: AppConfig.hostURL,
    multiHostUrl: [{ alias: 'quotes', url: AppConfig.hostURL }]
  },
  debug: true,
  allowEmptyPatch: false,
  metamodelBaseURL: AppConfig.metamodelBaseURL,
  modifiedHeaderTag: 'X-GraphTalk-Modified',
  deletedHeaderTag: 'X-Delete',
  apiDateFormat: 'yyyy-mm-dd',
  dateFormat: 'dd/mm/yyyy',
  apiDateSeparator: '-',
  custom: {
    provide: FactoryLoader,
    useFactory: CustomFactoryLoaderFunction
  },
  headers: AppConfig.headers,
  typeAheadMinChar: 3,
  printErrors: false,
  leftDirLanguages: ['en'],
  defaultLanguage: AppConfig.defaultLanguage,
  recaptchaSiteKey: '',
  loginPage: '/',
  logoutPage: '/logout',
  landingPage: 'dashboard',
  themes: ['dxc'],
  SOR: 'Integral',
  dateOptions: {
    showTodayBtn: false,
    firstDayOfWeek: 0,
    satHighlight: true,
    sunHighlight: true,
    markCurrentDay: true,
    monthSelector: true,
    yearSelector: true,
    minYear: 1800,
    dateFormat: "dd/mm/yyyy",
    maxYear: 2200
  }
};
