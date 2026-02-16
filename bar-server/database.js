const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./orders.db");

// crea tabella se non esiste
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            orderId TEXT,
            tableNumber TEXT,
            total TEXT,
            items TEXT,
            createdAt TEXT
        )
    `);
});

function saveOrder(order) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO orders (orderId, tableNumber, total, items, createdAt)
            VALUES (?, ?, ?, ?, ?)
        `,
            [
                order.orderId,
                order.table,
                order.total,
                JSON.stringify(order.items),   // salviamo gli articoli come JSON
                order.createdAt
            ],
            function (err) {
                if (err) reject(err);
                else resolve(this.lastID);
            }
        );
    });
}

module.exports = { saveOrder };
