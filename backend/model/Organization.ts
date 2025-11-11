import Category from "./Category";
import Address from "./Address";
import Account from "./Account";
import IGetInfo from "../interface/IGetInfo";

export default class Organization extends Account implements IGetInfo {
    private category: Category;
    private itemsReceived: number = 0;

    constructor(
        name: string,email: string,password: string,address: Address,category: Category) {
        super(name, email, password, address);
        this.category = category;
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getCategory(): Category {
        return this.category;
    }

    public getInfo(): string {
        return `Organization: ${this.getName()}, Email: ${this.getEmail()}, Category: ${this.category}, Address: ${this.getAddress().getInfo()}`;
    }

    public override viewProfile(): void {
        console.log("Organization");
        super.viewProfile();
        console.log(`Category: ${this.category}`);
    }

    public showProfileSummary(): void {
        console.log(`Organization: ${this.getName()} | Category: ${this.category} | Items received: ${this.itemsReceived}`);
    }

    public performAction(): void {
        this.itemsReceived++;
        console.log(`${this.getName()} just received a new donation! Total items: ${this.itemsReceived}`);
    }
}
