const orders = [
  { id: 1, status: "valid", stockAvailable: true, amount: 100 },
  { id: 2, status: "cancelled", stockAvailable: true, amount: 200 },
  { id: 3, status: "invalid", stockAvailable: true, amount: 150 },
  { id: 4, status: "valid", stockAvailable: false, amount: 400 },
  { id: 5, status: "valid", stockAvailable: true, amount: 300 }
];

let totalRevenue = 0;
let successfulOrder = 0;
let processedOrder = 0;
let skipped = 0;
let failureInStock = 0;
let msg = "";

for (let order of orders) {

  processedOrder++;

  if (order.status !== "valid" || !order.stockAvailable) {

    console.log(`Order ${order.id} skipped`);
    skipped++;

    if (!order.stockAvailable) {
      failureInStock++;
    }

    if (skipped === 3 || failureInStock === 3) {
      msg = "System stopped because of problems";
      break;
    }

    continue;
  }

  totalRevenue += order.amount;
  successfulOrder++;
  skipped = 0;

  console.log(`Order ${order.id} processed`);
}

console.log("Revenue =", totalRevenue);
console.log("Successful Orders =", successfulOrder);
console.log("Processed Orders =", processedOrder);

if (msg) {
  console.log(msg);
}