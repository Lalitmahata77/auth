import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery : fetchBaseQuery({baseUrl : "/api/v2"}),
    endpoints : (builder)=>({
        register : builder.mutation({
            query(body) {
                return{
                    url : "/register",
                    method : "POST",
                    body
                }
            }
        }),

        login : builder.mutation({
            query(body) {
                return{
                    url : "/login",
                    method : "POST",
                    body
                }
            },
          
        })
    })
})

export const {useLoginMutation, useRegisterMutation} = authApi
