import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";

export interface IDonationService {
    createDonation(donor : Donor, items: DonationItem[]) : Donation;
    
    listDonations(): Donation[];
}