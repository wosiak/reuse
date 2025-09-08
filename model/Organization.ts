import Account from "./Account";
import Category from "./Category";
import Address from "./Address";

export default class Organization extends Account {
    private category!: Category;

    constructor(name: string, email: string, password: string, address: Address) {
        super(name, email, password, address);
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getCategory(): Category {
        return this.category;
    }
}
