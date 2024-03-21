export const clientJsonFetch = async <T>(
  path: string,
  options?: RequestInit
) => {
  const request = await fetch(`${process.env.baseUrl}/api/${path}`, options);
  return (await request.json()) as T;
};
