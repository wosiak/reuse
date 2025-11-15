import DonorService from '../service/DonorService';
import Address from '../model/Address';
import Donor from '../model/Donor';
import Database from '../db/Database';

import mockDB from './mockDatabase';

jest.mock('../db/Database');

describe('DonorService', () => {
  let service: DonorService;

  beforeEach(() => {
    (Database.getInstance as jest.Mock).mockReturnValue(mockDB);
    service = new DonorService();
  });

  const address = new Address('XPTO Street', '123', 'Guarapuava', '12345678');

  test('Registers a new donor', () => {
    const donor = service.registerDonor('Wosiak', 'wosiak@gmail.com', 'senha', address);
    expect(donor).toBeInstanceOf(Donor);
    expect(donor.getInfo()).toContain('Wosiak');
  });

  test('Logs in an existing donor', () => {
    const result = service.login('emerson@gmail.com', '1234');
    expect(result?.getInfo()).toContain('Emerson');
  });
});
