import Category from "./Category";
import Address from "./Address";
import IGetInfo from "../interface/IGetInfo";

export default class Organization implements IGetInfo {
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private address: Address,
        private category: Category
    ) {}

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getCategory(): Category {
        return this.category;
    }

    getInfo(): string {
        return `Organization: ${this.name}, Email: ${this.email}, Category: ${this.category}, Address: ${this.address.getInfo()}`;
    }
}
