import Address from "./model/Address";
import DonorService from "./service/DonorService";
import DonorController from "./control/DonorController";

// Instaciando a service
const donorService = new DonorService();

// Passando a service pro controller (inj. de dependencia)
const donorController = new DonorController(donorService);

const address = new Address("Rua Belchior", "928", "Guarapuava", "01234-567");

const joao = donorController.registerDonor("Emerson", "emerson@gmail.com", "123", address);

// Simula login via Controller
const loggedIn = donorController.login("emerson@gmail.com", "123");

if (loggedIn) {
  console.log("Login successful! Welcome,", loggedIn.getName());
  loggedIn.viewProfile();
} else {
  console.log("Invalid email or password.");
}