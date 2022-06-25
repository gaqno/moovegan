import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Profile {
  id: number;       
  email: string;    
  password: string; 
  firstName: string;
  lastName: string;
  imageUrl?: string;
}
export interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface RegisterReturn {
	token: string,
	user: {
		id: number,
		createdAt: string,
		email: string,
    password: string;
		firstName: string,
		lastName: string,
		imageUrl?: string,
		role?: string
  }
}

const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZzJAc3RyaW5nLmNvbSIsImlhdCI6MTY1NjE4ODQxMSwiZXhwIjoxNjU2MTkyMDExfQ.5zGgrEeSggPbs0r7jl5BcNrUO2t9HWmlinHStJCF53c'

export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:3001',
    prepareHeaders(headers) {
      headers.set('Authorization', 'Bearer ' + JWT_TOKEN);
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    postRegister: builder.mutation<Register[], RegisterReturn>({
      query(text) {
        console.log('postRegister');
        return {
          url: '/auth/register',
          method: "POST",
          body: { text }
        }
      }  
    }),
    postLogin: builder.mutation<Login[], void>({
      query(text) {
        console.log('postLogin');
        return {
          url: '/auth/login',
          method: "POST",
          body: { text }
        }
      }  
    }),   
    getProfile: builder.query<Profile[], void>({
      query: () => `/auth/validate`,
      providesTags: (result) => 
        result ? [...result.map(({ id }) => ({ type: "Users" as const, id: "LIST" }))]
          : [{ type: "Users" as const, id: "LIST" }]
    }),
  })
})
// yes, returns automatically.
export const { useGetProfileQuery, usePostLoginMutation, usePostRegisterMutation } = userApi;