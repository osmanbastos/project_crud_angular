export interface Product {
    id?: number | null; // ? means that this attribute is optional
    name: string;
    price: number | null;
}