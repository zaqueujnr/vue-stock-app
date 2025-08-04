export interface ProductGateway {
    getProduct(params?: any): Promise<any>
    saveProduct(product: any): Promise<any>
}
export interface ProviderGateway {
    getProvider(params?: any): Promise<any>
    saveProvider(provider?: any): Promise<any>
}
export interface EntryGateway {
    getEntry(params?: any): Promise<any>
    saveEntry(entry?: any): Promise<any>
}
export interface ExitGateway {
    getExit(params?: any): Promise<any>
    saveExit(exit?: any): Promise<any>
}
export interface StockGateway {
    getStock(params?: any): Promise<any>
    saveStock(stock?: any): Promise<any>
}

// type Paginated<T extends string, U> = {
//  [K in T]: U[] } & {
//     total: number;
//     totalPages: number;
//  }


// export type ProductList = Paginated<'products', ProductGateway>
// export type ProviderList = Paginated<'providers', ProviderGateway>
// export type EntryList = Paginated<'entries', EntryGateway>
// export type ExitList = Paginated<'exits', ExitGateway>
// export type StockList = Paginated<'stocks', StockGateway>