import Organization from "../model/Organization";
import Address from "../model/Address";
import Category from "../model/Category";

export interface IOrganizationService {
    registerOrganization(name: string, email: string, password: string, address: Address, category: Category): Organization;

    login (email: string, password: string) : Organization | undefined;

    listOrganizations(): Organization[];
}