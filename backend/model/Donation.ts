import Donor from "./Donor";
import Organization from "./Organization";
import DonationItem from "./DonationItem";
import DonationStatus from "./DonationStatus";
import IGetInfo from "../interface/IGetInfo";

export default class Donation implements IGetInfo {
    private id: string;
    private donor: Donor;
    private organization?: Organization; // pode ser undefined
    private items: DonationItem[];
    private status: DonationStatus;
    private date: Date;

    constructor(id: string, donor: Donor, items: DonationItem[]) {
        this.id = id;
        this.donor = donor;
        this.items = items;
        this.status = DonationStatus.PENDING;
        this.date = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getDonor(): Donor {
        return this.donor;
    }

    public getItems(): DonationItem[] {
        return this.items;
    }

    public getStatus(): DonationStatus {
        return this.status;
    }

    public setStatus(status: DonationStatus): void {
        this.status = status;
    }

    public getDate(): Date {
        return this.date;
    }

    public assignToOrganization(organization: Organization): void {
        this.organization = organization;
        this.status = DonationStatus.ACCEPTED;
    }

    public completeDonation(): void {
        this.status = DonationStatus.COMPLETED;
    }

    public getAssignedOrganization(): Organization | undefined {
        return this.organization;
    }

    getInfo(): string {
        const orgInfo = this.organization ? this.organization.getInfo() : "Not assigned";
        return `Donation ${this.id} by ${this.donor.getInfo()} to ${orgInfo}, Items: ${this.items.length}, Status: ${this.status}, Date: ${this.date.toLocaleDateString()}`;
    }
}
