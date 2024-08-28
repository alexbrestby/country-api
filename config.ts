const baseUrl = "https://restcountries.com/v2";

export const ALL_COUNTRIES = `${baseUrl}/all?fields=name,capital,flag,population,region`;

export const searchByName = (name: string) => `${baseUrl}/name/${name}`;

export const searchByCode = (codes: string[]) =>
  `${baseUrl}/alpha?codes=${codes.join(",")}`;
