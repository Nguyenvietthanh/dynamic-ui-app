import { FactoryLoader } from '@diaas/ux-web';
import { DefaultCustomFactory } from './defaultCustomFactory';

export class CustomFactoryLoader implements FactoryLoader {
  getCustomFactory(factory: string) {
    switch (factory) {
      case 'defaultFactory':
        return new DefaultCustomFactory();
      default:
        return new DefaultCustomFactory();
    }
  }
  getCustomPropertyFactory() {
    return null;
  }
}
