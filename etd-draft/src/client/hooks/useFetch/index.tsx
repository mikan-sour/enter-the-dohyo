import React from 'react'
import { TApiResponse, TApiResult } from '../../../shared/types';

export default function useFetch() {
  return {
    async get<T>(url:string, options?:Request):TApiResult<T>{
        try {
            const request = await fetch(url, options);
            const response:TApiResponse<T> = await request.json();
            if(response.status == 'nok') {
                throw response.error
            }
            return { errored: false, result: response.result };
        } catch (error) {
            console.error(error);
            return { errored: true, result: error };
        }
    }
  }
}
