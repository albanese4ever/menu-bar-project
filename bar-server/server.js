const express = require("express");
const cors = require("cors");
const { saveOrder } = require("./database");

// 🖨️ LIBRERIA STAMPANTE
const escpos = require("escpos");
escpos.Network = require("escpos-network");

// ==============================
// CONFIG STAMPANTE
// ==============================

// 👉 METTI QUI IP DELLA STAMPANTE
const PRINTER_IP = "192.168.1.100";   // CAMBIA QUESTO
const PRINTER_PORT = 9100;           // standard POS

const device = new escpos.Network(PRINTER_IP, PRINTER_PORT);
const printer = new escpos.Printer(device);

// ==============================

const app = express();
app.use(cors());
app.use(express.json());

// ==============================
// API RICEZIONE ORDINE
// ==============================

app.post("/order", async (req, res) => {

    const order = req.body;

    console.log("\n📦 NUOVO ORDINE RICEVUTO:");
    console.log(order);

    try {

        // 💾 SALVA DATABASE
        await saveOrder(order);
        console.log("💾 Ordine salvato nel database!");

        // 🖨️ STAMPA
        printOrder(order);

        res.json({ ok: true, message: "Ordine ricevuto e stampato" });

    } catch (err) {

        console.error("❌ ERRORE:", err);
        res.status(500).json({ ok: false, message: "Errore server" });

    }

});

// ==============================
// FUNZIONE STAMPA ORDINE
// ==============================

function printOrder(order) {

    device.open(function (error) {

        if (error) {
            console.error("❌ ERRORE STAMPANTE:", error);
            return;
        }

        printer
            .font("A")
            .align("CT")
            .style("B")
            .size(1, 1)
            .text("BAR FERRARI")
            .text("---------------------------")

            .align("LT")
            .style("NORMAL")
            .text(`Tavolo: ${order.table}`)
            .text(`Ordine: ${order.orderId}`)
            .text(new Date(order.createdAt).toLocaleString())
            .text("---------------------------");

        order.items.forEach(item => {

            printer.text(`${item.qty}x ${item.name}`);

            if (item.note && item.note.trim() !== "") {
                printer.text(`  Nota: ${item.note}`);
            }

            printer.text("");
        });

        printer
            .text("---------------------------")
            .style("B")
            .text(`TOTALE: ${order.total}`)
            .text("---------------------------")

            .feed(2)
            .cut()
            .close();

        console.log("🖨️ Ordine stampato!");

    });
}

// ==============================

const PORT = 3000;
app.listen(PORT, () => {
    console.log("🚀 Server avviato su http://localhost:" + PORT);
});
