export interface Operator{
    id: string;
    "operator_id": string;
    firstname: string;
    state: string[];
    country: string;
    standards: Standards[];
    "contact_number": string;
    type: number;
    "contact_person": string;
    address: string;
    email: string;
    approved: boolean;
}

export interface Standards{
    id: string;
    name: string;
    code: string;
    count: number;
    subunits: SubUnits[]
}

export interface SubUnits{
    status: number;
    name: string
}