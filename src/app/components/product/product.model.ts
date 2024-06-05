export interface Product {
    name: string;
    price: number | null;
    id?: number; // ? means that this attribute is optional
}