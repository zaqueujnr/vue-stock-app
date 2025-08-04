export default class Entry {
  constructor(
    readonly entryId: string,
    readonly productId: string,
    readonly quantity: number,
    readonly dateEntry: Date,
    readonly providerId: string
  ) {}
}
