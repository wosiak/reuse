import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";
import Database from "../db/Database";

export default class DonationService {
  private db = Database.getInstance();

  public createDonation(donor: Donor, items: DonationItem[]): Donation {
    const id = "1"; // temporário, depois podemos melhorar para gerar IDs únicos
    const newDonation = new Donation(id, donor, items);
    this.db.addDonation(newDonation);
    return newDonation;
  }

  public listDonations(): Donation[] {
    return this.db.getDonations();
  }
}
