import { ManagedService } from 'typescene';

const BASE_URL = 'http://localhost:5000/';

export default class RemoteService extends ManagedService {
  name = "App.Remote";

  async getAsync(path: string){
    return this.requestAsync("GET", path);
  }

  async postAsync(path: string, data: any) {
    return this.requestAsync("POST", path, data);
  }

  async requestAsync(method: string, path: string, payload?: any) {
    let headers: any = {};
    let body: string | undefined;

    if (payload) {
      body = JSON.stringify(payload);
      headers["Content-type"] = "application/json";
    }

    let res = await fetch(`${BASE_URL}${path}`, { method, headers, body });
    if (res.status !== 200) {
      let errors = await res.json();
      console.log(errors);
    } else {
      return await res.json();
    }
  }
}