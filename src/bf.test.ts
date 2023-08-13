import Brandfetch from "./branfetch";
import axios from "axios";

// Mocking the axios module
jest.mock("axios");

describe("Brandfetch", () => {
  let mockAxios: jest.Mocked<typeof axios>;

  beforeEach(() => {
    // Setting up our mock for axios
    mockAxios = axios as jest.Mocked<typeof axios>;
  });

  it("should fetch brand by domain", async () => {
    const domain = "example.com";
    const mockResponse = { data: { brand: "Example" } };

    mockAxios.get.mockResolvedValue(mockResponse);

    const instance = new Brandfetch("testApiKey");
    const result = await instance.getBrandByDomain(domain);

    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.brandfetch.io/v2/brands/${domain}`, {
      headers: {
        Authorization: "Bearer testApiKey",
      },
    });

    expect(result).toEqual(mockResponse.data);
  });

  it("should search brand", async () => {
    const query = "testQuery";
    const mockResponse = { data: [{ brand: "TestBrand" }] };

    mockAxios.get.mockResolvedValue(mockResponse);

    const instance = new Brandfetch("testApiKey");
    const result = await instance.searhBrand(query);

    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.brandfetch.io/v2/brands/${query}`, {
      headers: {
        Authorization: "Bearer testApiKey",
        Referer: "https://example.com/searchIntegrationPage",
      },
    });

    expect(result).toEqual(mockResponse.data);
  });
});
