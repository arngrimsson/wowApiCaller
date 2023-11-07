"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auctions = void 0;
class Auctions {
    constructor(bid, buyout, quantity, name) {
        this._buyOutString = "0c";
        this._bidString = "0c";
        this._bid = bid;
        this._buyOut = buyout;
        this._quantity = quantity;
        this._name = name;
        this.updateFormattedValues();
    }
    toJSON() {
        return {
            bid: this._bidString,
            buyOut: this._buyOutString,
            quantity: this._quantity,
            name: this._name,
        };
    }
    toString() {
        return `
    ________________
    name:     ${this._name}
    Bid:      ${this._bidString},
    Buyout:   ${this._buyOutString},
    Quantity: ${this._quantity}
    ________________`;
    }
    updateFormattedValues() {
        const gold = Math.floor(this._buyOut / 10000);
        const silver = Math.floor((this._buyOut % 10000) / 100);
        const copper = Math.floor(this._buyOut % 100);
        this._buyOutString = `${gold}g ${silver}s ${copper}c`;
        const goldBid = Math.floor(this._bid / 10000);
        const silverBid = Math.floor((this._bid % 10000) / 100);
        const copperBid = Math.floor(this._bid % 100);
        this._bidString = `${goldBid}g ${silverBid}s ${copperBid}c`;
    }
    get name() {
        return this._name;
    }
    /**
     * Getter bid
     * @return {number}
     */
    get bid() {
        return this._bid;
    }
    /**
     * Setter bid
     * @param {number} value
     */
    set bid(value) {
        this._bid = value;
    }
    /**
     * Getter buyOut
     * @return {number}
     */
    get buyOut() {
        return this._buyOut;
    }
    /**
     * Setter buyOut
     * @param {number} value
     */
    set buyOut(value) {
        this._buyOut = value;
    }
    /**
     * Getter quantity
     * @return {number}
     */
    get quantity() {
        return this._quantity;
    }
    /**
     * Setter quantity
     * @param {number} value
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     * Getter buyOutString
     * @return {string }
     */
    get buyOutString() {
        return this._buyOutString;
    }
    /**
     * Setter buyOutString
     * @param {string } value
     */
    set buyOutString(value) {
        this._buyOutString = value;
    }
    /**
     * Getter bidString
     * @return {string }
     */
    get bidString() {
        return this._bidString;
    }
    /**
     * Setter bidString
     * @param {string } value
     */
    set bidString(value) {
        this._bidString = value;
    }
}
exports.Auctions = Auctions;
//# sourceMappingURL=Auctions.js.map