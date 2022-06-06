export interface IDataUniversities {
  id: 1;
  slug: string;
  name: string;
  shortName: string;
  logoUrl: string;
}

export interface IUniversities {
  universities: IDataUniversities[];
}
