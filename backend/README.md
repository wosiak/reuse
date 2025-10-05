# ReUse – Backend

API e aplicação em **TypeScript** com **Programação Orientada a Objetos (POO)** para gerenciar o fluxo de doações entre **doadores** e **organizações**.

---

## Visão Geral

O ReUse conecta pessoas que querem doar itens (roupas, brinquedos, eletrônicos, alimentos etc.) com organizações (ONGs ou empresas) que podem recebê-los.

### Principais Fluxos
- **Donor (Doador)**  
  - Cria doações com um ou mais itens.  
  - Escolhe uma organização específica ou deixa em aberto.  
  - Consulta histórico de doações.

- **Organization (Organização)**  
  - Pertence a uma categoria (ex.: roupas, alimentos, brinquedos).  
  - Visualiza doações pendentes da sua categoria.  
  - Aceita doações e altera o status.

- **Donation (Doação)**  
  - Status: `PENDING` → `ACCEPTED` → `COMPLETED`.  
  - Contém doador, organização (opcional), lista de itens e data.

---

## Conceitos de POO Utilizados
- **Herança**: `Donor` e `Organization` herdam de `Account`.  
- **Classe Abstrata**: `Account` não pode ser instanciada diretamente.  
- **Enum**: `Category`, `Condition`, `DonationStatus`.  
- **Injeção de Dependência**: Controllers recebem serviços via interfaces.  
- **Interfaces**: garantem contratos para os serviços (`I*Service`).  
- **Composição**: `Account` contém `Address`.  
- **Encapsulamento**: getters e setters nas entidades.
