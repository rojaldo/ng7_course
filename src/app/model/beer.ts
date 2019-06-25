export class Beer {
    name = '';
    description = '';
    alcohol = 0;
    image = '';

    constructor(json: any) {
        this.name = json.name;
        this.description = json.description;
        this.alcohol = json.abv;
        this.image = json.image_url;
    }
}
