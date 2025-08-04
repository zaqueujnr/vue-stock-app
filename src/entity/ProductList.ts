import Product from "./Product";

export default class ProductList {
  productList: Product[]
  currentPage: number
  totalPages: number
  pageSize: number
  constructor() {
   this.productList = []
   this.currentPage = 1
   this.totalPages = 0
   this.pageSize = 10
  }
  public addProduct(productData: Product) {
    const product = new Product(
    productData.productId,
    productData.name,
    productData.description,
    productData.unitPrice,
    productData.barcode,
    productData.active,
    productData.categoryId
  )
  this.productList.push(product)
  }
  public setProducts(productsList: any): void{
    const { products, totalPages } = productsList
    this.removeProducts()
    products.map((product: Product) => this.addProduct(product) )
    this.totalPages = totalPages
  }
  public removeProducts(): void {
    this.productList = []
  }
  public totalProducts(): number {
    return this.productList.length
  }
  public setCurrentPage(page: number): void {
    this.currentPage = page
  }
  public getProducts(): Product[] {
    return this.productList
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