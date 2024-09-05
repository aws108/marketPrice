export interface LocationsVillage {
    id: number;
    city: string;
    province: string;
    autonomous_community: string;
    country: string;
    code: string;
    latitude: number;
    longitude: number;
    lat?: number | undefined;
    lng?: number | undefined;
    zoom?: number | undefined;
}