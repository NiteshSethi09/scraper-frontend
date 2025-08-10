import { apiRequest } from "./queryClient";
import type { ScrapeRequest, SchemaResponse } from "@shared/schema";

export async function scrapeUrl(data: ScrapeRequest): Promise<SchemaResponse> {
  const response = await apiRequest("POST", "/api/scrape", data);
  return await response.json();
}
