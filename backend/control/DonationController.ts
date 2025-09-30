import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";
import DonationService from "../service/DonationService";

export default class DonationController {
    constructor (private donationService: DonationService) {}

    public createDonation(donor: Donor, items: DonationItem[]): Donation {
        return this.donationService.createDonation(donor, items);
    }

    public listDonations(): Donation[] {
        return this.donationService.listDonations();
    }
}
