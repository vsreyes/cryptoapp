import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '23a75a1255msh99f5f0760d8aaf5p141db4jsnf7a5d579ca91',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/count?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
