interface Props {
  endpoint: string;
  query?: Record<string, string> | string;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  sortBy?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param sortBy - key to sort by
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  sortBy = "",
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  let url = `${
    import.meta.env.STRAPI_URL
  }/api/${endpoint}?${query}&sort=${sortBy}`;

  const res = await fetch(url);
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
