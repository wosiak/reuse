import Category from "./Category";
import Condition from "./Condition";
import IGetInfo from "../interface/IGetInfo";

export default class DonationItem implements IGetInfo {
    constructor(
        private name: string,
        private description: string,
        private category: Category,
        private condition: Condition
    ) {}

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

    getInfo(): string {
        return `Item: ${this.name}, Category: ${this.category}, Condition: ${this.condition}, Description: ${this.description}`;
    }
}
