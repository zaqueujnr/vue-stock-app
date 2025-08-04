import Http from "../http/AxiosAdapter";
import type { ProductGateway } from "./GatewaysTypes";

export default class ProductGatewayHttp implements ProductGateway {
  constructor(readonly baseUrl: string, readonly http: Http) {}
  async saveProduct(product: any): Promise<any> {
    return await this.http.post(`${this.baseUrl}/product`, product);
  }
  async getProduct(params?: any): Promise<any> {
    return await this.http.get(`${this.baseUrl}/product`, params);
  }
}
