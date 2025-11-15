import DonorView from "./DonorView";
import DonationView from "./DonationView";
import * as readlineSync from "readline-sync";

const donorView = new DonorView();
const donationView = new DonationView();

let option: number;
do {
  console.log("\n===== Main Menu =====");
  console.log("1. Donor Menu");
  console.log("2. Donation Menu");
  console.log("0. Exit");

  option = Number(readlineSync.question("Escolha uma opção: "));

  switch (option) {
    case 1:
      donorView.showMenu();
      break;
    case 2:
      donationView.showMenu();
      break;
    case 0:
      console.log("Até logo!");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (option !== 0);
