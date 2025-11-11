import Donation from "../model/Donation";
import Donor from "../model/Donor";
import DonationItem from "../model/DonationItem";
import Database from "../db/Database";
import AppError from "../error/error";

export default class DonationService {
  private db = Database.getInstance();

  public createDonation(donor: Donor, item: DonationItem): Donation;
  public createDonation(donor: Donor, items: DonationItem[]): Donation;

  public createDonation(donor: Donor, itemOrItems: DonationItem | DonationItem[]): Donation {
    try {
      const items = Array.isArray(itemOrItems) ? itemOrItems : [itemOrItems];

      if (!items || items.length === 0) {
        throw new AppError("Donation must contain at least one item.", 400);
      }

      const id = String(Date.now());
      const newDonation = new Donation(id, donor, items);
      this.db.addDonation(newDonation);
      return newDonation;

    } catch (error) {
      if (error instanceof AppError) {
        console.error(`AppError: ${error.message} (Status: ${error.statusCode})`);
      } else {
        console.error("Unexpected error:", error);
      }
      throw error;
    }
  }

  public listDonations(): Donation[] {
    return this.db.getDonations();
  }
}
