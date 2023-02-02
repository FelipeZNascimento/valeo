import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TQuery } from './types';
import {
  apiBaseUrl,
  guests as guestsEndpoint,
  guest as guestEndpoint,
  setGuest as setGuestEndpoint
} from '../../services/endpoints';

export const baseApi = createApi({
  reducerPath: 'valeoApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    getGuests: builder.mutation<TQuery, void>({
      query: () => {
        return { url: guestsEndpoint(), credentials: 'include' };
      }
    }),
    getGuestsByCode: builder.mutation<TQuery, { code: string }>({
      query: (arg) => {
        const { code } = arg;
        return { url: guestEndpoint(code), credentials: 'include' };
      }
    }),
    setGuest: builder.mutation<
      TQuery,
      { id: number; code: string; confirmed: boolean }
    >({
      query: (arg) => {
        const { id, code, confirmed } = arg;
        return {
          url: setGuestEndpoint(),
          method: 'post',
          body: {
            id: id,
            code: code,
            confirmed: confirmed
          },
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          credentials: 'include'
        };
      }
    })
  })
});

export const {
  useGetGuestsByCodeMutation,
  useGetGuestsMutation,
  useSetGuestMutation
} = baseApi;
