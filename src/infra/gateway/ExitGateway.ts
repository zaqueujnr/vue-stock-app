import Http from "../http/AxiosAdapter";
import type { ExitGateway } from "./GatewaysTypes";

export default class ExitGatewayHttp implements ExitGateway {
  constructor(readonly baseUrl: string, readonly http: Http) {}
  async saveExit(exit?: any): Promise<any> {
    return await this.http.post(`${this.baseUrl}/exit`, exit);
  }
  async getExit(params?: any): Promise<any> {
    return await this.http.get(`${this.baseUrl}/exit`, params);
  }
}
