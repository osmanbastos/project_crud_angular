export interface Product {
    id?: number; // ? means that this attribute is optional
    name: string;
    price: number | null;
}