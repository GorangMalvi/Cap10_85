
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Assume all accounts are initially active
}

BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid amount for deposit.");
    }
}

BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Insufficient balance or invalid amount for withdrawal.");
    }
}

BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}.`);
}

BankAccount.prototype.isActive = function() {
    return this.active;
}

var account1 = new BankAccount(123456, "John Doe", "Savings", 1000);
var account2 = new BankAccount(789012, "Jane Smith", "Checking", 5000);

account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

account2.deposit(1000);
account2.withdraw(600);
account2.checkBalance();

console.log("Account 1 is active:", account1.isActive());
console.log("Account 2 is active:", account2.isActive());

function getTotalBalance() {
    var totalBalance = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].isActive()) {
            totalBalance += arguments[i].balance;
        }
    }
    return totalBalance;
}

console.log("Total balance of all active accounts:", getTotalBalance(account1, account2));
