var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function DisposaleMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isDisposable = false;
            return _this;
        }
        class_1.prototype.dispose = function () {
            this.isDisposable = true;
        };
        return class_1;
    }(base));
}
function ActivatableMixin(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isActivate = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActivate = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActivate = false;
        };
        return class_2;
    }(base));
}
var Example = /** @class */ (function (_super) {
    __extends(Example, _super);
    function Example() {
        var _this = _super.call(this) || this;
        _this.member = 123;
        console.log(_this.member);
        return _this;
    }
    return Example;
}(DisposaleMixin(ActivatableMixin(/** @class */ (function () {
    function class_3() {
    }
    return class_3;
}())))));
;
var example = new Example();
example.activate();
function takeExample(example) {
    console.log(example.member);
}
