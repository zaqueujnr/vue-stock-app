import Http from "../http/AxiosAdapter";
import type { StockGateway } from "./GatewaysTypes";

export default class StockGatewayHttp implements StockGateway {
  constructor(readonly baseUrl: string, readonly http: Http) {}
  async saveStock(stock?: any): Promise<any> {
    return await this.http.post(`${this.baseUrl}/stock`, stock);
  }
  async getStock(params?: any): Promise<any> {
    return await this.http.get(`${this.baseUrl}/stock`, params);
  }
}
