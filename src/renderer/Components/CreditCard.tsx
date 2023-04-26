class CreditCard {
  name: string;

  currentBalance: number;

  pendingCharges: number;

  constructor(name: string, currentBalance: number, pendingCharges: number) {
    this.name = name;
    this.currentBalance = currentBalance;
    this.pendingCharges = pendingCharges;
  }
}

export default CreditCard;
