export class Auctions {
  private _bid: number;
  private _buyOut: number;
  private _quantity: number;
  private _buyOutString: string = "0c";
  private _bidString: string = "0c";
  private _name: string;

  constructor(bid: number, buyout: number, quantity: number, name: string) {
    this._bid = bid;
    this._buyOut = buyout;
    this._quantity = quantity;
    this._name = name;
    this.updateFormattedValues();
  }

  toString(): string {
    return `
    ________________
    name:     ${this._name}
    Bid:      ${this._bidString},
    Buyout:   ${this._buyOutString},
    Quantity: ${this._quantity}
    ________________`;
  }

  public updateFormattedValues() {
    const gold = Math.floor(this._buyOut / 10_000);
    const silver = Math.floor((this._buyOut % 10_000) / 100);
    const copper = Math.floor(this._buyOut % 100);
    this._buyOutString = `${gold}g ${silver}s ${copper}c`;

    const goldBid = Math.floor(this._bid / 10_000);
    const silverBid = Math.floor((this._bid % 10_000) / 100);
    const copperBid = Math.floor(this._bid % 100);
    this._bidString = `${goldBid}g ${silverBid}s ${copperBid}c`;
  }

  public get name(): string {
    return this._name;
  }

  /**
   * Getter bid
   * @return {number}
   */
  public get bid(): number {
    return this._bid;
  }

  /**
   * Setter bid
   * @param {number} value
   */
  public set bid(value: number) {
    this._bid = value;
  }

  /**
   * Getter buyOut
   * @return {number}
   */
  public get buyOut(): number {
    return this._buyOut;
  }

  /**
   * Setter buyOut
   * @param {number} value
   */
  public set buyOut(value: number) {
    this._buyOut = value;
  }

  /**
   * Getter quantity
   * @return {number}
   */
  public get quantity(): number {
    return this._quantity;
  }

  /**
   * Setter quantity
   * @param {number} value
   */
  public set quantity(value: number) {
    this._quantity = value;
  }

  /**
   * Getter buyOutString
   * @return {string }
   */
  public get buyOutString(): string {
    return this._buyOutString;
  }

  /**
   * Setter buyOutString
   * @param {string } value
   */
  public set buyOutString(value: string) {
    this._buyOutString = value;
  }

  /**
   * Getter bidString
   * @return {string }
   */
  public get bidString(): string {
    return this._bidString;
  }

  /**
   * Setter bidString
   * @param {string } value
   */
  public set bidString(value: string) {
    this._bidString = value;
  }
}
