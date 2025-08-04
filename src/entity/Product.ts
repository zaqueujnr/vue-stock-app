export default class Product {
  constructor(readonly productId: string, readonly name: string, readonly description: string, readonly unitPrice: number,
    readonly barcode: number, readonly active: boolean, readonly categoryId: string
  ) {
  }
}