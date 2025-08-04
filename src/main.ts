import { createApp } from "vue";
import App from './App.vue'
import routes from "./router";
import AxiosAdapter from './infra/http/AxiosAdapter';
import './assets/tailwind.css';
import ProductGatewayHttp from "./infra/gateway/ProductGateway";
import ProviderGatewayHttp from "./infra/gateway/ProviderGateway";
import EntryGatewayHttp from "./infra/gateway/EntryGateway";
import ExitGatewayHttp from "./infra/gateway/ExitGateway";
import StockGatewayHttp from "./infra/gateway/StockGateway";


const app = createApp(App);
const axiosAdapter = new AxiosAdapter()
const baseUrl = 'http://localhost:3000'
const productGateway = new ProductGatewayHttp(baseUrl,axiosAdapter)
const providerGateway = new ProviderGatewayHttp(baseUrl,axiosAdapter)
const entryGateway = new EntryGatewayHttp(baseUrl,axiosAdapter)
const exitGateway = new ExitGatewayHttp(baseUrl,axiosAdapter)
const stockGateway = new StockGatewayHttp(baseUrl,axiosAdapter)
app.use(routes)
app.provide('productGateway', productGateway)
app.provide('providerGateway', providerGateway)
app.provide('entryGateway', entryGateway)
app.provide('exitGateway', exitGateway)
app.provide('stockGateway', stockGateway)
app.mount('#app')