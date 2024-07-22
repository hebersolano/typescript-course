class Account {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  // nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
    // this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // record a transaction
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  // set balance(value: number) {
  //   if (value <= 0) throw new Error("Invalid amount");
  //   this._balance = value;
  // }
  get tax() {
    return this.calculateTax();
  }
  private calculateTax() {
    return this.balance * 0.25;
  }
}

let account = new Account(1, "Heber", 0);
account.deposit(100);
console.log(account.balance);
