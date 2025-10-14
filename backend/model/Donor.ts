import Address from "./Address";
import Account from "./Account";
import IGetInfo from "../interface/IGetInfo";

export default class Donor extends Account implements IGetInfo {
    constructor(
        name: string,
        email: string,
        password: string,
        address: Address
    ) {
        super(name, email, password, address);
    }

    getInfo(): string {
        return `Donor: ${this.getName()}, Email: ${this.getEmail()}, Address: ${this.getAddress().getInfo()}`;
    }

    public override viewProfile(): void {
        console.log("===== Donor =====");
        super.viewProfile();
    }
}
