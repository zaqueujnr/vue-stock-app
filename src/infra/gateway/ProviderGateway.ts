import Http from "../http/AxiosAdapter";
import type { ProviderGateway } from "./GatewaysTypes";

export default class ProviderGatewayHttp implements ProviderGateway {
  constructor(readonly baseUrl: string, readonly http: Http) {}
  async saveProvider(provider?: any): Promise<any> {
    return await this.http.post(`${this.baseUrl}/provider`, provider)
  }
  async getProvider(params?: any): Promise<any> {
    return await this.http.get(`${this.baseUrl}/provider`, params);
  }
}
