import DonationService from "../service/DonationService";
import Donor from "../model/Donor";
import Address from "../model/Address";

const donor = new Donor("Wosiak", "wosiak@email.com", "12345", new Address("Rua A", "0", "Cidade X", "12345"));
const donationService = new DonationService();

donationService.createDonation(donor, []); 