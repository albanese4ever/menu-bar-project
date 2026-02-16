// ========================
//  LISTA DRINK — MODIFICA QUI 👍
// ========================

const DRINKS = [

    /* ===========================
    ☕ CAFFETTERIA
=========================== */

    {
        category: "Caffetteria",
        name: "Caffè Espresso",
        price: 1.2,
        description: "Caffè espresso classico italiano.",
        tags: ["coffee"],
        image: "images/coffee.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè Decaffeinato",
        price: 1.3,
        description: "Caffè decaffeinato.",
        tags: ["coffee"],
        image: "images/coffee.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè Corretto",
        price: 1.5,
        description: "Caffè con aggiunta di liquore.",
        tags: ["coffee", "alcohol"],
        image: "images/coffee.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè Americano",
        price: 2.0,
        description: "Caffè lungo stile americano.",
        tags: ["coffee"],
        image: "images/caffeamericano.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè Marocchino",
        price: 2.0,
        description: "Caffè con cacao e crema di latte.",
        tags: ["coffee", "sweet"],
        image: "images/marocchino.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè con Nutella",
        price: 2.5,
        description: "Caffè con Nutella.",
        tags: ["coffee", "sweet"],
        image: "images/marocchino.jpg"
    },

    {
        category: "Caffetteria",
        name: "Caffè d'Orzo Piccolo",
        price: 1.5,
        description: "Orzo caldo formato piccolo.",
        tags: ["hot"],
        image: "images/coffee.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè d'Orzo Grande",
        price: 2.0,
        description: "Orzo caldo formato grande.",
        tags: ["hot"],
        image: "images/coffee.jpg"
    },

    {
        category: "Caffetteria",
        name: "Ginseng Piccolo",
        price: 1.5,
        description: "Caffè al ginseng piccolo.",
        tags: ["coffee"],
        image: "images/coffee.jpg"
    },
    {
        category: "Caffetteria",
        name: "Ginseng Grande",
        price: 2.0,
        description: "Caffè al ginseng grande.",
        tags: ["coffee"],
        image: "images/coffee.jpg"
    },

    {
        category: "Caffetteria",
        name: "Crema Caffè",
        price: 3.0,
        description: "Crema fredda al caffè.",
        tags: ["cold", "sweet"],
        image: "images/cremacaffe.jpg"
    },
    {
        category: "Caffetteria",
        name: "Caffè Shakerato",
        price: 2.0,
        description: "Caffè freddo shakerato.",
        tags: ["cold"],
        image: "images/shakerato.jpg"
    },
    {
        category: "Caffetteria",
        name: "Shakerato con Baileys",
        price: 3.5,
        description: "Caffè shakerato con Baileys.",
        tags: ["cold", "alcohol"],
        image: "images/shakerato.jpg"
    },

    {
        category: "Caffetteria",
        name: "Cappuccino",
        price: 1.5,
        description: "Cappuccino classico.",
        tags: ["coffee"],
        image: "images/cappuccino.jpg"
    },
    {
        category: "Caffetteria",
        name: "Cappuccino Soia",
        price: 1.8,
        description: "Cappuccino con latte di soia.",
        tags: ["coffee", "vegan"],
        image: "images/cappuccino.jpg"
    },
    {
        category: "Caffetteria",
        name: "Cappuccino Decaffeinato",
        price: 1.8,
        description: "Cappuccino decaffeinato.",
        tags: ["coffee"],
        image: "images/cappuccino.jpg"
    },

    {
        category: "Caffetteria",
        name: "Latte Macchiato",
        price: 2.0,
        description: "Latte caldo con caffè.",
        tags: ["milk"],
        image: "images/lattemacchiato.jpg"
    },
    {
        category: "Caffetteria",
        name: "Latte Caldo o Freddo",
        price: 1.5,
        description: "Latte semplice caldo o freddo.",
        tags: ["milk"],
        image: "images/latte.jpg"
    },

    {
        category: "Caffetteria",
        name: "Tè / Camomilla / Tisane",
        price: 2.5,
        description: "Bevande calde assortite.",
        tags: ["hot"],
        image: "images/tea.jpg"
    },
    {
        category: "Caffetteria",
        name: "Cioccolata Classica",
        price: 3.0,
        description: "Cioccolata calda.",
        tags: ["hot", "sweet"],
        image: "images/chocolate.jpg"
    },
    {
        category: "Caffetteria",
        name: "Cioccolata con Panna",
        price: 3.8,
        description: "Cioccolata calda con panna.",
        tags: ["hot", "sweet"],
        image: "images/chocolate.jpg"
    },
    {
        category: "Caffetteria",
        name: "Spremuta d'Arancia",
        price: 4.0,
        description: "Spremuta fresca di arancia.",
        tags: ["fresh"],
        image: "images/spremuta.jpg"
    },
    {
        category: "Caffetteria",
        name: "Succo di Frutta",
        price: 3.0,
        description: "Succo di frutta assortito.",
        tags: ["fresh"],
        image: "images/spremuta.jpg"
    },


    /* ===========================
        🥃 10 COCKTAIL CLASSICI
    ===========================*/


    {
        category: "Classics",
        name: "Margarita",
        price: 7,
        description: "Tequila, Triple Sec, succo di lime, sale.",
        tags: ["citrus"],
        image: "images/margarita.jpg"
    },
    {
        category: "Classics",
        name: "Cosmopolitan",
        price: 7,
        description: "Vodka, Cointreau, lime, cranberry.",
        tags: ["fruity"],
        image: "images/cosmopolitan.jpg"
    },
    {
        category: "Classics",
        name: "Daiquiri",
        price: 7,
        description: "Rum, succo di lime fresco, zucchero.",
        tags: ["citrus"],
        image: "images/daiquiri.jpg"
    },
    {
        category: "Classics",
        name: "Gimlet",
        price: 7,
        description: "Gin, lime.",
        tags: ["citrus"],
        image: "images/gimlet.jpg"
    },
    {
        category: "Classics",
        name: "Manhattan",
        price: 7,
        description: "Whisky, vermouth rosso, Angostura bitters.",
        tags: ["strong"],
        image: "images/manhattan.jpg"
    },
    {
        category: "Classics",
        name: "Negroni",
        price: 7,
        description: "Bitter Campari, Vermouth rosso, Gin.",
        tags: ["classic", "bitter"],
        image: "images/negroni.jpg"
    },
    {
        category: "Classics",
        name: "Old Fashioned",
        price: 7,
        description: "Whisky, zucchero, Angostura, scorza d’arancia.",
        tags: ["classic"],
        image: "images/oldfashioned.jpg"
    },
    {
        category: "Classics",
        name: "Sex on the Beach",
        price: 7,
        description: "Vodka, pesca, arancia, mirtillo.",
        tags: ["fruity"],
        image: "images/sexonthebeach.jpg"
    },
    {
        category: "Classics",
        name: "Passion Fruit Martini",
        price: 7,
        description: "Vodka, maracuja, passoa, lime.",
        tags: ["fruity"],
        image: "images/passionfruitmartini.jpg"
    },
    {
        category: "Classics",
        name: "Mimosa",
        price: 7,
        description: "Champagne, succo d'arancia.",
        tags: ["fruity"],
        image: "images/mimosa.jpg"
    },







    /* ===========================
        🍹 DRINK LIST — TUTTI IN "COCKTAILS"
    ===========================*/







    {
        category: "Cocktails",
        name: "Moscow Mule",
        price: 7,
        description: "Vodka, ginger beer, succo di lime.",
        tags: ["refreshing"],
        image: "images/moscowmule.jpg"
    },


    {
        category: "Cocktails",
        name: "Whiskey Sour",
        price: 7,
        description: "Whisky, limone, zucchero.",
        tags: ["classic"],
        image: "images/whiskeysour.jpg"
    },





    {
        category: "Spritz",
        name: "Aperol Spritz",
        price: 6,
        description: "Aperol, Prosecco, acqua frizzante, arancia.",
        tags: ["italian"],
        image: "images/aperolspritz.jpg"
    },
    {
        category: "Spritz",
        name: "Campari Spritz",
        price: 6,
        description: "Bitter Campari, Prosecco, acqua frizzante, limone.",
        tags: ["bitter"],
        image: "images/camparispritz.jpg"
    },
    {
        category: "Spritz",
        name: "Hugo Spritz",
        price: 6,
        description: "Prosecco, acqua tonica, menta, sciroppo fiori di sambuco.",
        tags: ["floral"],
        image: "images/hugospritz.jpg"
    },
    {
        category: "Spritz",
        name: "Spritz Violet",
        price: 6,
        description: "Prosecco, sciroppo alla violetta, acqua frizzante.",
        tags: ["sweet"],
        image: "images/violet.jpg"
    },
    {
        category: "Spritz",
        name: "Spritz Fragola",
        price: 6,
        description: "Prosecco, sciroppo di fragola, acqua frizzante.",
        tags: ["fruity"],
        image: "images/fragola.jpg"
    },
    {
        category: "Spritz",
        name: "Spritz Cocco",
        price: 6,
        description: "Prosecco, sciroppo di cocco, acqua frizzante.",
        tags: ["tropical"],
        image: "images/cocco.jpg"
    },
    {
        category: "Spritz",
        name: "Spritz St. Germain",
        price: 10,
        description: "St. Germain, Prosecco, lime.",
        tags: ["premium"],
        image: "images/stgermain.jpg"
    },
    {
        category: "Cocktails",
        name: "Mojito",
        price: 7,
        description: "Rum bianco, lemon soda, menta, lime, zucchero di canna.",
        tags: ["refreshing"],
        image: "images/mojito.jpg"
    },
    {
        category: "Analcolici",
        name: "Mojito Virgin",
        price: 7,
        description: "Menta, lime, zucchero di canna, ghiaccio tritato, lemon soda.",
        tags: ["no-alcohol"],
        image: "images/mojitovirgin.jpg"
    },
    {
        category: "Cocktails",
        name: "Mojito Malibu",
        price: 7,
        description: "Malibu, RedBull, menta, lime, zucchero di canna.",
        tags: ["tropical"],
        image: "images/mojitomalibu.jpg"
    },
    {
        category: "Cocktails",
        name: "Japanese Ice Tea",
        price: 7,
        description: "Rum, Triple Sec, Vodka, Tequila, Midori, Gin.",
        tags: ["strong"],
        image: "images/japaneseicetea.jpg"
    },
    {
        category: "Cocktails",
        name: "Negroni Sbagliato",
        price: 7,
        description: "Bitter Campari, Vermouth rosso, Prosecco.",
        tags: ["bitter"],
        image: "images/negronisbagliato.jpg"
    },
    {
        category: "Cocktails",
        name: "Americano",
        price: 7,
        description: "Bitter Campari, Vermouth rosso, acqua frizzante.",
        tags: ["classic"],
        image: "images/americano.jpg"
    },
    {
        category: "Cocktails",
        name: "Moscow Mule",
        price: 7,
        description: "Ginger beer, vodka, succo di lime, ghiaccio.",
        tags: ["refreshing"],
        image: "images/moscowmule.jpg"
    },
    {
        category: "Cocktails",
        name: "Flamingo Lounge",
        price: 7,
        description: "Vodka fragola e panna, vodka pesca, succhi misti.",
        tags: ["sweet"],
        image: "images/flamingolounge.jpg"
    },
    {
        category: "Cocktails",
        name: "Margarita",
        price: 7,
        description: "Triple Sec, tequila, succo di lime, sale.",
        tags: ["citrus"],
        image: "images/margarita.jpg"
    },
    {
        category: "Cocktails",
        name: "Cuba Libre",
        price: 7,
        description: "Rum bianco, Coca Cola, succo di lime.",
        tags: ["refreshing"],
        image: "images/cubalibre.jpg"
    },
    {
        category: "Cocktails",
        name: "Japanese",
        price: 7,
        description: "Midori, Cointreau, lemon soda, succo lime.",
        tags: ["tropical"],
        image: "images/japanese.jpg"
    },
    {
        category: "Cocktails",
        name: "Acquarium",
        price: 7,
        description: "Vodka fragola, vodka pesca, Blue Curaçao, lemon soda.",
        tags: ["fruity"],
        image: "images/acquarium.jpg"
    },
    {
        category: "Cocktails",
        name: "Caipiroska",
        price: 7,
        description: "Vodka, zucchero, lime.",
        tags: ["citrus"],
        image: "images/caipiroska.jpg"
    },
    {
        category: "Cocktails",
        name: "Long Island",
        price: 7,
        description: "Vodka, gin, tequila, rum, triple sec, cola.",
        tags: ["strong"],
        image: "images/longisland.jpg"
    },
    {
        category: "Cocktails",
        name: "Black Russian",
        price: 7,
        description: "Vodka, Kahlua.",
        tags: ["coffee"],
        image: "images/blackrussian.jpg"
    },

    {
        category: "Cocktails",
        name: "Piña Colada",
        price: 7,
        description: "Succo ananas, latte cocco, rum bianco.",
        tags: ["tropical"],
        image: "images/pinacolada.jpg"
    },
    {
        category: "Cocktails",
        name: "Blu Margarita",
        price: 7,
        description: "Blue Curaçao, tequila, lime, sale.",
        tags: ["citrus"],
        image: "images/bluemargarita.jpg"
    },
    {
        category: "Cocktails",
        name: "Caipirinha",
        price: 7,
        description: "Cachaça, zucchero di canna, lime.",
        tags: ["citrus"],
        image: "images/caipirinha.jpg"
    },
    {
        category: "Cocktails",
        name: "Lady Pink",
        price: 7,
        description: "Tequila, Triple Sec, succo lime, sciroppo granatina.",
        tags: ["sweet"],
        image: "images/ladypink.jpg"
    },
    {
        category: "Cocktails",
        name: "Bad Boys",
        price: 7,
        description: "Grand Marnier, succo arancia, Sprite.",
        tags: ["citrus"],
        image: "images/badboys.jpg"
    },
    {
        category: "Cocktails",
        name: "Ferrari Rosso Summer",
        price: 7,
        description: "Vodka, lampone, fiori di sambuco, lime, soda.",
        tags: ["fruity"],
        image: "images/ferrarirossosummer.jpg"
    },




    /* ===========================
      🍹 CUCINA — TUTTI IN "Food"
  ===========================*/




    {
        category: "Food",
        name: "Toast",
        price: 3.5,
        description: "Toast con prosciutto e formaggio.",
        tags: ["Salato"],
        image: "images/toast.jpg"
    },    {
        category: "Food",
        name: "Panini, Focacce, Piadine",
        price: 5,
        description: "Panino, focaccio o piadina farcita.",
        tags: ["Salato"],
        image: "images/paninifocaccepiadine.jpg"
    },    {
        category: "Food",
        name: "Insalatona",
        price: 6,
        description: "Insalata mista abbondante.",
        tags: ["Salato"],
        image: "images/caprese.jpg"
    },    {
        category: "Food",
        name: "Caprese",
        price: 6,
        description: "Pomodoro, mozzarella e basilico.",
        tags: ["Salato"],
        image: "images/caprese.jpg"
    },    {
        category: "Food",
        name: "Tagliere",
        price: 7,
        description: "Selezione di salumi e formaggi.",
        tags: ["Salato"],
        image: "images/tagliere.jpg"
    },    {
        category: "Food",
        name: "Bresaola",
        price: 8,
        description: "Rucola, pomodorini e grana.",
        tags: ["Salato"],
        image: "images/bresaola.jpg"
    },




    /* ===========================
      🍹 PASTICCERIA — TUTTI IN "Pasticceria"
  ===========================*/


    {
        category: "Pasticceria",
        name: "Brioches",
        price: 1.5,
        description: "Brioche vuota fresca.",
        tags: ["Dolce"],
        image: "images/brioche.jpg"
    },
    {
        category: "Pasticceria",
        name: "Brioches Farcite",
        price: 1.8,
        description: "Brioche con ripieno a scelta.",
        tags: ["Dolce"],
        image: "images/brioche.jpg"
    },

    {
        category: "Pasticceria",
        name: "Muffin",
        price: 2,
        description: "Muffin al cioccolato o vaniglia.",
        tags: ["Dolce"],
        image: "images/muffin.jpg"
    },
    {
        category: "Pasticceria",
        name: "Fetta di Torta",
        price: 2,
        description: "Fetta di torta del giorno.",
        tags: ["Dolce"],
        image: "images/torta.jpg"
    },





];

// (serve per eventuali test in locale)
if (typeof module !== "undefined") {
    module.exports = DRINKS;
}
