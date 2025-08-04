export default class Stock {
  constructor(
    readonly stockId: string,
    readonly productId: string,
    readonly quantity: string,
    readonly location: string,
  ) {}
}
