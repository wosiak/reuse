import Donor from "../model/Donor";
import Address from "../model/Address";
import DonorService from "../service/DonorService";

export default class DonorController {
    constructor (private donorService: DonorService) {}

    public registerDonor(name: string, email: string, password: string, address: Address): Donor {
        return this.donorService.registerDonor(name, email, password, address);
    }

    public login(email: string, password: string): Donor | undefined {
        return this.donorService.login(email, password);
    }

    public listDonors(): Donor[] {
        return this.donorService.listDonors();
    }
}
