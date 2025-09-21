import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";
import Database from "../db/Database";
import { IDonationService } from './../interface/IDonationService';

export default class DonationService implements IDonationService{
  private db = Database.getInstance();

  public createDonation(donor: Donor, items: DonationItem[]): Donation {
    const id = "1"; // por enquanto fixo, dps mudamos
    const newDonation = new Donation(id, donor, items);
    this.db.addDonation(newDonation);
    return newDonation;
  }

  public listDonations(): Donation[] {
    return this.db.getDonations();
  }
}
