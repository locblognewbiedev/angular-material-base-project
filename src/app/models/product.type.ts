import { ProductStatus } from "../enums/productStatus.enum";

export default interface Product {
    id?: number,
    name:string,
    image: string | '',
    price: number,
    sold: number,
    remaining_quantity: number,
    active: ProductStatus,
    description: string | '',
    brand_id: number,
    category_id:number,
}
