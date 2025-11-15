import DonationService from '../service/DonationService';
import Donor from '../model/Donor';
import DonationItem from '../model/DonationItem';
import Address from '../model/Address';
import Database from '../db/Database';
import Category from '../model/Category';
import Condition from '../model/Condition';
import Donation from '../model/Donation';

jest.mock('../db/Database');

describe('DonationService', () => {
  let service: DonationService;

  beforeEach(() => {
    (Database.getInstance as jest.Mock).mockReturnValue({
      addDonation: jest.fn(),
      getDonations: () => ['Donation 1', 'Donation 2'],
    });

    service = new DonationService();
  });

  const donor = new Donor(
    'Emerson',
    'emerson@gmail.com',
    'password123',
    new Address('XPTO Street', '123', 'Guarapuava', '12345678')
  );

  test('Creates a donation with a single item', () => {
    const item = new DonationItem(
      'Book',
      'A programming book',
      Category.TOYS,
      Condition.NEW
    );

    const result = service.createDonation(donor, item);

    expect(result).toBeInstanceOf(Donation);
    expect(result.getItems().length).toBe(1);
    expect(result.getItems()[0].getName()).toBe('Book');
  });

  test('Returns donation list from database', () => {
    const donations = service.listDonations();
    expect(donations).toEqual(['Donation 1', 'Donation 2']);
  });
});
