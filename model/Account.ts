import Address from "./Address";

export default abstract class Account {
    private name: string;
    private email: string;
    private password: string;
    private address: Address;

    constructor(name: string, email: string, password: string, address: Address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getAddress(): Address {
        return this.address;
    }

    public setAddress(address: Address): void {
        this.address = address;
    }

    public login(): boolean {
        return true;
    }

    public logout(): void {
        console.log(`${this.name} foi deslogado.`);
    }

    public viewProfile(): void {
        console.log(`Usuário: ${this.name}, Email: ${this.email}, Endereço: ${this.address}`);
    }
}
