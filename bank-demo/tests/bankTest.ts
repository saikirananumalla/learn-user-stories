import { Bank } from '../src/bank';
// setup
const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];
const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);
// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount('user1', 23, 1234567892);
if(acc.id !== 1234567892 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('Scenario 0 failed');
}
else {
    console.log('Scenario 0 passed');
}
try {
    const acc1 = bank.createAccount('user1', 23, 1234567892);
    console.log('Scenario 1 failed');   
}
catch(e) {
    console.log('Scenario 1 passed');
}
// Scenario 2: customer is unable to create a new bank account due to invalid age
try {
    bank.createAccount('user1', 17, 1234567893);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}
// Scenario 3: customer is unable to create a new bank account due to invalid username
try {
    bank.createAccount('user3', 23, 1234567894);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// Scenario 4: Deposit is successful
try {
    bank.depositMoney(1234567890, 1000);
    const account = accounts.find(acc => acc.id === 1234567890);
    if (account?.balance === 3448 + 1000) {
        console.log('Scenario 4 passed');
    } else {
        console.log('Scenario 4 failed');
    }
} catch (e) {
    console.log('Scenario 4 failed');
}

// Scenario 5: Deposit fails due to invalid account number
try {
    bank.depositMoney(2323, 1000);
    console.log('Scenario 5 failed');
} catch (e) {
    console.log('Scenario 5 passed');
}

// Scenario 6: Deposit fails for zero deposit amount
try {
    bank.depositMoney(1234567890, 0);
    console.log('Scenario 6 failed');
} catch (e) {
    console.log('Scenario 6 passed');
}

// Scenario 7: Deposit fails due to invalid deposit amount
try {
    bank.depositMoney(1234567890, -10);
    console.log('Scenario 7 failed');
} catch (e) {
    console.log('Scenario 7 passed');
}

// Scenario 8: Withdrawl is successful
try {
    bank.withdrawMoney(1234567890, 1000);
    const account = accounts.find(acc => acc.id === 1234567890);
    if (account?.balance === 4448 - 1000) {
        console.log('Scenario 8 passed');
    } else {
        console.log('Scenario 8 failed');
    }
} catch (e) {
    console.log('Scenario 8 failed');
}

// Scenario 9: Withdraw fails due to invalid account number
try {
    bank.withdrawMoney(2323, 1000);
    console.log('Scenario 9 failed');
} catch (e) {
    console.log('Scenario 9 passed');
}

// Scenario 10: Withdraw fails for invalid amount
try {
    bank.depositMoney(1234567890, -10);
    console.log('Scenario 10 failed');
} catch (e) {
    console.log('Scenario 10 passed');
}

// Scenario 11: Withdraw fails due to insufficient amount
try {
    bank.withdrawMoney(1234567890, 10000);
    console.log('Scenario 11 failed');
} catch (e) {
    console.log('Scenario 11 passed');
}

// Scenario 12: Check balance of an account
try {
    const bal = bank.checkBalance(1234567890);
    if (bal == 3448) {
        console.log('Scenario 12 passed');
    } else {
        console.log('Scenario 12 failed');
    }
} catch (e) {
    console.log('Scenario 12 passed');
}

// Scenario 13: Check balance of an account
try {
    bank.checkBalance(2312);
    console.log('Scenario 13 failed');
} catch (e) {
    console.log('Scenario 13 passed');
}