import Organization from "../model/Organization";
import Address from "../model/Address";
import Category from "../model/Category";
import OrganizationService from "../service/OrganizationService";

export default class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  public registerOrganization(
    name: string,
    email: string,
    password: string,
    address: Address,
    category: Category
  ): Organization {
    return this.organizationService.registerOrganization(name, email, password, address, category);
  }

  public login(email: string, password: string): Organization | undefined {
    return this.organizationService.login(email, password);
  }

  public listOrganizations(): Organization[] {
    return this.organizationService.listOrganizations();
  }
}
