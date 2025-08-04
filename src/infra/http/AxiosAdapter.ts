// import type { Params } from '../gateways/GatewaysTypes';
import axios from 'axios';

export default interface Http {
    get<T>(url: string, params: any): Promise<T>;
    post<T>(url: string, params: any): Promise<T>
}

export default class AxiosAdapter implements Http {
  public constructor() {}
  public async get<T>(url: string, params: any): Promise<T> {
    const response = await axios.get(url, { params });
    return response.data;
  }
  public async post<T>(url: string, params: any): Promise<T> {
    const response = await axios.post(url, params );
    console.log(response)
    return response.data;
  }
}
