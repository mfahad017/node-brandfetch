import Brandfetch from './branfetch';
import fetchMock from 'jest-fetch-mock';

describe('Brandfetch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getBrandById', () => {
    const apiKey = 'K8PPb5wUkS7zwpYylmKTs9qRdxDmMMcT6ZFWBGrv';
    const brandfetch = new Brandfetch(apiKey);
    it('should have functions', () => {
      expect(
        !!brandfetch.getBrandByDomain && !!brandfetch.searhBrand
      ).toBeTruthy();
    });
    // it('should return the brand for a valid ID', async () => {
    //   const id = 123;
    //   const expectedBrand = { id, name: 'Test Brand' };
    //   fetchMock.mockResponseOnce(JSON.stringify(expectedBrand));

    //   const brand = await brandfetch.getBrandById(id);

    //   expect(brand).toEqual(expectedBrand);
    //   expect(fetchMock.mock.calls[0][0]).toEqual(
    //     `https://api.brandfetch.io/v1/brands/${id}`
    //   );
    //   expect(fetchMock.mock.calls[0][1].headers['Authorization']).toEqual(
    //     `Bearer ${apiKey}`
    //   );
    // });

    // it('should return null for an invalid ID', async () => {
    //   const id = 456;
    //   fetchMock.mockResponseOnce('', { status: 404 });

    //   const brand = await brandfetch.getBrandById(id);

    //   expect(brand).toBeNull();
    //   expect(fetchMock.mock.calls[0][0]).toEqual(
    //     `https://api.brandfetch.io/v1/brands/${id}`
    //   );
    //   expect(fetchMock.mock.calls[0][1].headers['Authorization']).toEqual(
    //     `Bearer ${apiKey}`
    //   );
    // });

    // it('should return null if the API request fails', async () => {
    //   const id = 789;
    //   fetchMock.mockReject(new Error('API error'));

    //   const brand = await brandfetch.getBrandById(id);

    //   expect(brand).toBeNull();
    //   expect(fetchMock.mock.calls[0][0]).toEqual(
    //     `https://api.brandfetch.io/v1/brands/${id}`
    //   );
    //   expect(fetchMock.mock.calls[0][1].headers['Authorization']).toEqual(
    //     `Bearer ${apiKey}`
    //   );
    // });
  });
});
