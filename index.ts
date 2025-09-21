import DonorService from "./service/DonorService";
import Address from "./model/Address";

const donorService = new DonorService();

const address = new Address("Rua das Flores", "123", "São Paulo", "01234-567");
const joao = donorService.registerDonor("Emerson", "emerson@email.com", "1234", address);

const loggedIn = donorService.login("emerson@email.com", "1234");

if (loggedIn) {
  console.log("Login successful! Welcome,", loggedIn.getName());
} else {
  console.log("Invalid email or password.");
}
