export class ItemDetail {
    sold_quantity: string;
    price: number;
    title: string;
    pictures: [] = [];

    constructor(object?: any) {
        if (!object) {
            return;
        }

        this.sold_quantity = object.sold_quantity || 0;
        this.title = object.title;
        this.price = object.price || 100;
        this.pictures = object.pictures || [];
    }
}