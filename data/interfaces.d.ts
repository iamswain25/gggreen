export interface RootData {
  type: string;
  name: string;
  crs: Crs;
  bbox?: number[] | null;
  features?: FeaturesEntity[] | null;
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
  bbox?: number[] | null;
  geometry: Geometry;
}
export interface Properties1 {
  OBJECTID: number;
  /** 속성의 adm_nm 은 통계청에서 사용하는 전국 행정동 이름입니다. */
  adm_nm: string;
  /** 속성의 adm_cd 는 통계청에서 사용하는 7자리의 [한국행정구역분류코드]입니다. */
  adm_cd: string;
  /** 속성의 adm_cd2 는 행정안전부 사용하는 10자리의 [행정기관코드]입니다. */
  adm_cd2: string;
  sgg: string;
  sido: string;
  sidonm: string;
  sggnm: string;
  /** 속성의 adm_cd8 는 통계청에서 사용하는 8자리의 새로운 [한국행정구역분류코드]입니다. */
  adm_cd8: string;
  emd_nm: string;
  ELEC_CD: string;
  ELEC_SIDO: string;
  ELEC_GU: string;
  ELEC_EMD: string;
}
export interface Geometry {
  type: string;
  coordinates?: (((number[] | null)[] | null)[] | null)[] | null;
}
