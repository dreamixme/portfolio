import { apiClient } from '@/services/http/client';
import type { HealthResponse } from '@/features/starter-demo/types';

export async function getHealth() {
  const { data } = await apiClient.get<HealthResponse>('/health');
  return data;
}
