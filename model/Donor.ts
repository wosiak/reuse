import Account from "./Account";
import Address from "./Address";

export default class Donor extends Account {
    constructor(name: string, email: string, password: string, address: Address) {
        super(name, email, password, address);
    }
}
