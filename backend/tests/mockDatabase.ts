import Donor from "../model/Donor";
import Donation from "../model/Donation";
import Address from "../model/Address";

const mockDonor = new Donor("Emerson", "emerson@gmail.com", "1234", new Address("Rua", "1", "Cidade", "00000-000"));

const mockDB = {
  addDonor: jest.fn(),
  getDonors: jest.fn().mockReturnValue([mockDonor]),
  addDonation: jest.fn(),
  getDonations: jest.fn().mockReturnValue([] as Donation[]),
};

export default mockDB;
