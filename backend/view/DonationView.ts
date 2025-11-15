// view/DonationView.ts
import * as readlineSync from "readline-sync";
import DonationController from "../control/DonationController";
import DonationService from "../service/DonationService";
import DonationItem from "../model/DonationItem";
import Donor from "../model/Donor";
import Category from "../model/Category";
import Condition from "../model/Condition";
import DonorService from "../service/DonorService";

// Setup do controller e services
const donationService = new DonationService();
const donationController = new DonationController(donationService);

const donorService = new DonorService(); // usamos aqui para buscar doadores existentes

export default class DonationView {
  public showMenu(): void {
    let option: number;

    do {
      console.log("\n===== Donation Menu =====");
      console.log("1. Criar doação");
      console.log("2. Listar doações");
      console.log("0. Voltar ao menu principal");

      option = Number(readlineSync.question("Escolha uma opção: "));

      switch (option) {
        case 1:
          this.createDonation();
          break;
        case 2:
          this.listDonations();
          break;
        case 0:
          console.log("Voltando ao menu principal...");
          break;
        default:
          console.log("Opção inválida, tente novamente.");
      }
    } while (option !== 0);
  }

  private createDonation(): void {
    console.log("\n--- Criar Doação ---");

    const email = readlineSync.question("Email do doador: ");
    const donor: Donor | undefined = donorService.getDonorByEmail?.(email);

    if (!donor) {
      console.log("Doador não encontrado ❌");
      return;
    }

    const items: DonationItem[] = [];

    let addMore = true;
    while (addMore) {
      console.log("\nAdicionando item à doação:");

      const name = readlineSync.question("Nome do item: ");
      const description = readlineSync.question("Descrição: ");
      const categoryInput = readlineSync.question("Categoria (ex: ROUPA, CALÇADO): ").toUpperCase();
      const conditionInput = readlineSync.question("Condição (ex: NOVO, USADO): ").toUpperCase();

      let category: Category;
      let condition: Condition;

      try {
        category = Category[categoryInput as keyof typeof Category];
        condition = Condition[conditionInput as keyof typeof Condition];
      } catch {
        console.log("Categoria ou condição inválida ❌");
        return;
      }

      const item = new DonationItem(name, description, category, condition);
      items.push(item);

      const more = readlineSync.question("Adicionar outro item? (s/n): ").toLowerCase();
      addMore = more === "s";
    }

    const donation = donationController.createDonation(donor, items);
    donor.performAction(); // incrementa contador de doações

    console.log("✅ Doação registrada com sucesso!");
    console.log(donation.getInfo());
  }

  private listDonations(): void {
    console.log("\n--- Doações Registradas ---");

    const donations = donationController.listDonations();

    if (donations.length === 0) {
      console.log("Nenhuma doação registrada.");
      return;
    }

    donations.forEach((donation, index) => {
      console.log(`${index + 1}. ${donation.getInfo()}`);
    });
  }
}
