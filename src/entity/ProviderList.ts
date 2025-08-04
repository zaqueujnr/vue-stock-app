import Provider from "./Provider";

export default class ProviderList {
  providerList: Provider[]
  currentPage: number
  totalPages: number
  pageSize: number
  constructor() {
   this.providerList = []
   this.currentPage = 1
   this.totalPages = 0
   this.pageSize = 10
  }
  public addProvider(providerData: Provider) {
    const provider = new Provider(
    providerData.providerId,
    providerData.name,
    providerData.cnpj,
    providerData.phone,
    providerData.email,
  )
  this.providerList.push(provider)
  }
  public setProviders(providersData: any): void{
    const { providers, totalPages } = providersData
    this.removeProviders()
    providers.map((provider: Provider) => this.addProvider(provider) )
    this.totalPages = totalPages
  }
  public removeProviders(): void {
    this.providerList = []
  }
  public setCurrentPage(page: number): void{
    this.currentPage = page
  }
  public totalProviders(): number {
    return this.providerList.length
  }
  public getProviders(): Provider[] {
    return this.providerList
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