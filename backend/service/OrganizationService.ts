import Organization from "../model/Organization";
import Address from "../model/Address";
import Category from "../model/Category";
import Database from "../db/Database";

export default class OrganizationService {
  private db = Database.getInstance();

  public registerOrganization(
    name: string,
    email: string,
    password: string,
    address: Address,
    category: Category
  ): Organization {
    const newOrg = new Organization(name, email, password, address, category);
    this.db.addOrganization(newOrg);
    return newOrg;
  }

  public login(email: string, password: string): Organization | undefined {
    const organizations = this.db.getOrganizations();
    return organizations.find(o => o["email"] === email && o["password"] === password);
  }

  public listOrganizations(): Organization[] {
    return this.db.getOrganizations();
  }
}
