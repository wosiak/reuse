import Donor from "../model/Donor";
import Organization from "../model/Organization";
import Donation from "../model/Donation";

export default class Database {
  private static instance: Database;

  private donors: Donor[] = [];
  private organizations: Organization[] = [];
  private donations: Donation[] = [];

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public addDonor(donor: Donor): void {
    this.donors.push(donor);
  }

  public getDonors(): Donor[] {
    return this.donors;
  }

  public addOrganization(org: Organization): void {
    this.organizations.push(org);
  }

  public getOrganizations(): Organization[] {
    return this.organizations;
  }

  public addDonation(donation: Donation): void {
    this.donations.push(donation);
  } // new error. ex: se for menor que < algum valor... pensar num erro melhor! e editar o arquivo error/error.ts

  public getDonations(): Donation[] {
    return this.donations;
  }
}
