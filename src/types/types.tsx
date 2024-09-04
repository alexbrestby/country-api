export interface Country {
  capital: string;
  flag: string;
  independent: boolean;
  name: string;
  population: number;
  region: string;
  currencies: Currency[];
  borders: string[];
  onClick: () => void;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}
