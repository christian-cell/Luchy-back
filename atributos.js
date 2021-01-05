"use strict";
// console.log('atributos' )
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var House = /** @class */ (function () {
    function House() {
    }
    House.prototype.storeData = function (house) {
        this.windows = "5";
        this.price = 200.000;
        this.color = 'red';
        house.windows = "3";
        house.price = 123.000;
        house.color = "yellow";
    };
    return House;
}());
var Chalet = /** @class */ (function (_super) {
    __extends(Chalet, _super);
    function Chalet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chalet.prototype.getData = function (house, chalet) {
        this.color = "blue";
        this.price = 100.000;
    };
    return Chalet;
}(House));
