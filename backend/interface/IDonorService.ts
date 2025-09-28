import Donor from "../model/Donor";
import Address from "../model/Address";

export interface IDonorService {
    registerDonor (name: string, email: string, password: string, address: Address) : Donor;

    login (email: string, password: string): Donor | undefined;
    
    listDonors(): Donor[];
}