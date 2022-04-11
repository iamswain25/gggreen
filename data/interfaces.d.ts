export interface RootData {
  type: string;
  name: string;
  crs: Crs;
  bbox?: (number)[] | null;
  features?: (FeaturesEntity)[] | null;
}
export interface Crs {
  type: string;
  properties: Properties;
}
export interface Properties {
  name: string;
}
export interface FeaturesEntity {
  type: string;
  properties: Properties1;
  bbox?: (number)[] | null;
  geometry: Geometry;
}
export interface Properties1 {
  OBJECTID: number;
  adm_nm: string;
  adm_cd: string;
  adm_cd2: string;
  sgg: string;
  sido: string;
  sidonm: string;
  sggnm: string;
  adm_cd8: string;
  emd_nm: string;
  ELEC_CD: string;
  ELEC_SIDO: string;
  ELEC_GU: string;
  ELEC_EMD: string;
}
export interface Geometry {
  type: string;
  coordinates?: ((((number)[] | null)[] | null)[] | null)[] | null;
}
