/**
 * this class should not be used as a substitute of modular app factory
 * this means that each screen should be bound to its specific factory (to keep the separation of concerns)
 * the use of this factory to provide a default placehold for app factory to reduce the size of skeleton for a new screen.
 */
export class DefaultCustomFactory {

    public voidMethod() {
        console.log('Default app level methods');
    }

    public test() {
      console.log('test');
    }

}
