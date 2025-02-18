import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { apiClient } from '@/lib/api';

export async function getRequest<T>(
  endpoint: string,
  config: AxiosRequestConfig,
): Promise<T> {
  const controller = new AbortController();

  try {
    const response: AxiosResponse<T> = await apiClient.get(endpoint, {
      ...config,
      signal: controller.signal,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Erro na requisição: ${error.message}`);
    }

    throw new Error('Erro ao realizar a requisição');
  } finally {
    controller.abort();
  }
}
