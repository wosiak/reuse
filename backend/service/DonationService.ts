import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";
import Database from "../db/Database";

export default class DonationService {
  private db = Database.getInstance();

  // sobrecarga
  public createDonation(donor: Donor, item: DonationItem): Donation;
  public createDonation(donor: Donor, items: DonationItem[]): Donation;

  public createDonation(donor: Donor, itemOrItems: DonationItem | DonationItem[]): Donation {
    const id = String(Date.now());
    const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];

    const newDonation = new Donation(id, donor, items);
    this.db.addDonation(newDonation);
    return newDonation;
  }

  public listDonations(): Donation[] {
    return this.db.getDonations();
  }
}
