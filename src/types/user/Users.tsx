export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface I_USER {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  getId(): number;
  getName(): string;
  getUsername(): string;
  getEmail(): string;
  getAddress(): Address;
  getPhone(): string;
  getWebsite(): string;
  getCompany(): Company;
}
