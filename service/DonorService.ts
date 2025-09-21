import Donor from "../model/Donor";
import Address from "../model/Address";
import Database from "../db/Database";
import { IDonorService } from './../interface/IDonorService';

export default class DonorService implements IDonorService {
  private db = Database.getInstance();

  public registerDonor(name: string, email: string, password: string, address: Address): Donor {
    const newDonor = new Donor(name, email, password, address);
    this.db.addDonor(newDonor);
    return newDonor;
  }

  public login(email: string, password: string): Donor | undefined {
    const donors = this.db.getDonors();
    const found = donors.find(d => d.getEmail() === email && d.getPassword() === password);
    return found;
  }

  public listDonors(): Donor[] {
    return this.db.getDonors();
  }
}
