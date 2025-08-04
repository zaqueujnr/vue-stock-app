export default class Exit {
  constructor(
    readonly entryId: string,
    readonly productId: string,
    readonly quantity: number,
    readonly dateExit: Date,
    readonly reason: string,
    readonly providerId: string
  ) {}
}
