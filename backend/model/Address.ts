import IGetInfo from "../interface/IGetInfo";

export default class Address implements IGetInfo {
    constructor(
        private street: string,
        private number: string,
        private city: string,
        private zipCode: string
    ) {}

    public getStreet(): string {
        return this.street;
    }

    public setStreet(street: string): void {
        this.street = street;
    }

    public getNumber(): string {
        return this.number;
    }

    public setNumber(number: string): void {
        this.number = number;
    }

    public getCity(): string {
        return this.city;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public getZipCode(): string {
        return this.zipCode;
    }

    public setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }

    getInfo(): string {
        return `${this.street}, ${this.number} - ${this.city} (${this.zipCode})`;
    }
}
