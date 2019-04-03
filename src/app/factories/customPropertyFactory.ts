import { Property } from '@diaas/ux-web';

export class CustomPropertyFactory {

    public instanceProperty(property: any): Property {
        switch(property.type) {
            default:
                return null;
        }
    }

}
