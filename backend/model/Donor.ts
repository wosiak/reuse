import Address from "./Address";
import IGetInfo from "../interface/IGetInfo";

export default class Donor implements IGetInfo {
    constructor(
        private name: string,
        private email: string,
        private password: string,
        private address: Address
    ) {}

    getInfo(): string {
        return `Donor: ${this.name}, Email: ${this.email}, Address: ${this.address.getInfo()}`;
    }
}
