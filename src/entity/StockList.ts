import Stock from "./Stock"

export default class StockList {
  stockList: Stock[]
  currentPage: number
  totalPages: number
  pageSize: number
  constructor() {
   this.stockList = []
   this.currentPage = 1
   this.totalPages = 0
   this.pageSize = 10
  }
  public addStock(stockData: Stock) {
    const stock = new Stock(
    stockData.stockId,
    stockData.productId,
    stockData.quantity,
    stockData.location,
  )
  this.stockList.push(stock)
  }
  public setStocks(stocksList: any): void{
    const { stocks, totalPages } = stocksList
    this.removeStocks()
    stocks.map((stock: Stock) => this.addStock(stock) )
    this.totalPages = totalPages
  }
  public removeStocks(): void {
    this.stockList = []
  }
  public totalStocks(): number {
    return this.stockList.length
  }
  public setCurrentPage(page: number): void {
    this.currentPage = page
  }
  public getStocks(): Stock[] {
    return this.stockList
  }; 
  public getTotalPages(): number {
    return this.totalPages
  }
  public getPageSize(): number {
    return this.pageSize
  }
  public getCurrentPage(): number {
    return this.currentPage
  }
}