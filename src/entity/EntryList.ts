import Entry from "./Entry";

export default class EntryList {
  entryList: Entry[]
  currentPage: number
  totalPages: number
  pageSize: number
  constructor() {
   this.entryList = []
   this.currentPage = 1
   this.totalPages = 0
   this.pageSize = 10
  }
  public addEntry(entryData: Entry) {
    const entry = new Entry(
    entryData.entryId,
    entryData.productId,
    entryData.quantity,
    entryData.dateEntry,
    entryData.providerId,
  )
  this.entryList.push(entry)
  }
  public setEntries(entriesData: any): void{
    const { entries, totalPages } = entriesData
    this.removeEntries()
    entries.map((entry: Entry) => this.addEntry(entry) )
    this.totalPages = totalPages
  }
  public removeEntries(): void {
    this.entryList = []
  }
  public setCurrentPage(page: number): void{
    this.currentPage = page
  }
  public totalEntries(): number {
    return this.entryList.length
  }
  public getEntries(): Entry[] {
    return this.entryList
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