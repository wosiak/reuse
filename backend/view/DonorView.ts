import * as readlineSync from "readline-sync";
import DonorController from "../control/DonorController";
import DonorService from "../service/DonorService";
import Address from "../model/Address";

// Injeção de dependência: Controller recebe o service
const donorService = new DonorService();
const donorController = new DonorController(donorService);

export default class DonorView {
  public showMenu(): void {
    let option: number;

    do {
      console.log("\n===== Donor Menu =====");
      console.log("1. Register Donor");
      console.log("2. Login");
      console.log("3. List Donors");
      console.log("0. Back to Main Menu");

      option = Number(readlineSync.question("Choose an option: "));

      switch (option) {
        case 1:
          this.registerDonor();
          break;
        case 2:
          this.login();
          break;
        case 3:
          this.listDonors();
          break;
        case 0:
          console.log("Returning to main menu...");
          break;
        default:
          console.log("Invalid option, try again.");
      }
    } while (option !== 0);
  }

  private registerDonor(): void {
    console.log("\n--- Register Donor ---");
    const name = readlineSync.question("Name: ");
    const email = readlineSync.question("Email: ");
    const password = readlineSync.question("Password: ");
    const street = readlineSync.question("Street: ");
    const number = readlineSync.question("Number: ");
    const city = readlineSync.question("City: ");
    const zipCode = readlineSync.question("Zip Code: ");

    const address = new Address(street, number, city, zipCode);
    const donor = donorController.registerDonor(name, email, password, address);

    console.log(`Donor registered successfully! Welcome, ${donor.getName()} 🎉`);
  }

  private login(): void {
    console.log("\n--- Donor Login ---");
    const email = readlineSync.question("Email: ");
    const password = readlineSync.question("Password: ");

    const donor = donorController.login(email, password);

    if (donor) {
      console.log(`Welcome back, ${donor.getName()}! ✅`);
      donor.viewProfile();
    } else {
      console.log("Invalid email or password ❌");
    }
  }

  private listDonors(): void {
    console.log("\n--- Registered Donors ---");
    const donors = donorController.listDonors();

    if (donors.length === 0) {
      console.log("No donors registered yet.");
      return;
    }

    donors.forEach((donor, index) => {
      console.log(`${index + 1}. ${donor.getName()} - ${donor.getEmail()}`);
    });
  }
}
