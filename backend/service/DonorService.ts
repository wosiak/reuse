import Donor from "../model/Donor";
import Address from "../model/Address";
import Database from "../db/Database";

export default class DonorService {
  private db = Database.getInstance();

  public registerDonor(name: string, email: string, password: string, address: Address): Donor {
    const newDonor = new Donor(name, email, password, address);
    this.db.addDonor(newDonor);
    return newDonor;
  }

  public login(email: string, password: string): Donor | undefined {
    const donors = this.db.getDonors();
    return donors.find(d => d["email"] === email && d["password"] === password);
  }

  public listDonors(): Donor[] {
    return this.db.getDonors();
  }
}
