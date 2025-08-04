import Exit from "./Exit";

export default class EntryList {
  exitList: Exit[]
  currentPage: number
  totalPages: number
  pageSize: number
  constructor() {
   this.exitList = []
   this.currentPage = 1
   this.totalPages = 0
   this.pageSize = 10
  }
  public addExit(exitData: Exit) {
    const entry = new Exit(
    exitData.entryId,
    exitData.productId,
    exitData.quantity,
    exitData.dateExit,
    exitData.reason,
    exitData.providerId,
  )
  this.exitList.push(entry)
  }
  public setExits(entriesData: any): void{
    const { exits, totalPages } = entriesData
    this.removeExits()
    exits.map((entry: Exit) => this.addExit(entry) )
    this.totalPages = totalPages
  }
  public removeExits(): void {
    this.exitList = []
  }
  public setCurrentPage(page: number): void{
    this.currentPage = page
  }
  public totalExits(): number {
    return this.exitList.length
  }
  public getExits(): Exit[] {
    return this.exitList
  }
  public getTotalPages(): number {
    return this.totalPages
  }
  public getCurrentPage(): number {
    return this.currentPage
  }
  public getPageSize(): number {
    return this.pageSize
  }
}