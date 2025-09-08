import Category from "./Category";
import Condition from "./Condition";

export default class DonationItem {
    private name: string;
    private description: string;
    private category: Category;
    private condition: Condition;

    constructor(name: string, description: string, category: Category, condition: Condition) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.condition = condition;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCategory(): Category {
        return this.category;
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public getCondition(): Condition {
        return this.condition;
    }

    public setCondition(condition: Condition): void {
        this.condition = condition;
    }
}
