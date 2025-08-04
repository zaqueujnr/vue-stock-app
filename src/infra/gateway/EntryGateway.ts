import Http from "../http/AxiosAdapter";
import type { EntryGateway } from "./GatewaysTypes";

export default class EntryGatewayHttp implements EntryGateway {
  constructor(readonly baseUrl: string, readonly http: Http) {}
  async saveEntry(entry?: any): Promise<any> {
    return await this.http.post(`${this.baseUrl}/entry`, entry)
  }
  async getEntry(params?: any): Promise<any> {
    return await this.http.get(`${this.baseUrl}/entry`, params);
  }
}
