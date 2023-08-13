import axios from "axios";
import { IBrandFetch, IBrandFetchSearch } from "./interface";

class Brandfetch {
  baseUrl = "https://api.brandfetch.io/v2/brands";
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getBrandByDomain(domain: string) {
    const response = await axios.get(`${this.baseUrl}/${domain}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
    return response.data as IBrandFetch;
  }

  async searhBrand(query: string) {
    const response = await axios.get(`${this.baseUrl}/${query}`, {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Referer: "https://example.com/searchIntegrationPage",
      },
    });
    return response.data as IBrandFetchSearch[];
  }
}

export default Brandfetch;
