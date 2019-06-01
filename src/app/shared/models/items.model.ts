export class SearchItem {
    id: String;
    thumbnail: string;
    accepts_mercadopago: Boolean;
    price: number;
    title: string;
    address: {} = {};

    constructor(object?: any) {
        if (!object) {
            return;
        }

        this.id = object.id || 0;
        this.thumbnail = object.thumbnail;
        this.title = object.title;
        this.accepts_mercadopago = object.accepts_mercadopago || false;
        this.price = object.price || 100;
        this.address = object.address || {};
    }
}
