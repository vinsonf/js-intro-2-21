type Class = new (...args: any[]) => any;

function DisposaleMixin<Base extends Class>(base: Base) {
    return class extends base {
        isDisposable: boolean = false;
        dispose() {
            this.isDisposable = true;
        }
    }
}

function ActivatableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isActivate: boolean = false;
        activate() {
            this.isActivate = true;
        }
        deactivate() {
            this.isActivate = false;
        }
    }
}


class Example extends DisposaleMixin(ActivatableMixin(class {})) {
    member = 123;
    constructor() {
        super();
        console.log(this.member);
    }
};

const example = new Example();

example.activate();

function takeExample(example: Example) {
    console.log(example.member);
}