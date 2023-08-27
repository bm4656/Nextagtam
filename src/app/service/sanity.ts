import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // 동적 데이터 사용하므로 Cdn 사용하지 않음
  apiVersion: '2023-08-27',
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});
