import axios from 'axios';
import { IBrandFetch, IBrandFetchSearch } from './interface';

class Brandfetch {
  baseUrl = 'https://api.brandfetch.io/v2/brands';
  apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getBrandByDomain(domain: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/${domain}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      });
      return response.data as IBrandFetch;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async searhBrand(query: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/${query}`, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Referer: 'https://example.com/searchIntegrationPage',
        },
      });
      return response.data as IBrandFetchSearch[];
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default Brandfetch;
