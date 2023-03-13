import {AxiosInstance, AxiosResponse} from 'axios';
import {createAxiosInstance} from '../../constants';

export const get = async (url: string, params: any = {}): Promise<any> => {
  return await request(url, params, 'get');
};

export const post = async (url: string, data: any = {}): Promise<any> => {
  return await request(url, data, 'post');
};

export const deleteRequest = async (
  url: string,
  data: any = {},
): Promise<any> => {
  return await request(url, data, 'delete');
};

export const postDelete = async (url: string): Promise<any> => {
  return await request(url, {}, 'delete');
};

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export const request = async (
  url: string,
  data: any = {},
  method: HttpMethod = 'post',
): Promise<any> => {
  try {
    const axiosInstance: AxiosInstance = createAxiosInstance();
    const response: AxiosResponse<any> = await axiosInstance[method]<any>(
      url,
      data,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
