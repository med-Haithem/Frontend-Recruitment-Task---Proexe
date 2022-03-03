interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
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

export class C_USER implements I_USER {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  constructor(args: I_USER) {
    for (let key in args) {
      this[key] = args[key];
    }
  }
  getAddress(): Address {
    return this.address;
  }

  getCompany(): Company {
    return this.company;
  }

  getEmail(): string {
    return this.email;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPhone(): string {
    return this.phone;
  }

  getUsername(): string {
    return this.username;
  }

  getWebsite(): string {
    return this.website;
  }
}
