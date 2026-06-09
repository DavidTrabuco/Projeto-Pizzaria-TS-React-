import PhotoPizza from "../Photo/PhotoPizza.jpg";
import PhotoCoffe from "../Photo/PhotoCoffe.jpg";
import PhotoMaking from "../Photo/PhotoMaking.jpg";

export interface Prato {
  id: number;
  category: "Pizza" | "Sobremesa" | "Bebidas";
  cardName: string;
  cardMeta: string;
  preco: number;
  cardOldprice: string;
  img: string;
}

export const Pratos: Prato[] = [
  // ── Pizzas ──────────────────────────────────────────────
  {
    id: 1,
    category: "Pizza",
    cardName: "Pizza Calabresa G",
    cardMeta: "Tempo: 30 - 40 min | Serve: 4 pessoas",
    preco: 45.00,
    cardOldprice: "R$50.00",
    img: PhotoPizza,
  },
  {
    id: 2,
    category: "Pizza",
    cardName: "Pizza Margherita P",
    cardMeta: "Tempo: 25 - 35 min | Serve: 1 pessoa",
    preco: 22.00,
    cardOldprice: "R$25.50",
    img: PhotoPizza,
  },
  {
    id: 3,
    category: "Pizza",
    cardName: "Pizza Pepperoni M",
    cardMeta: "Tempo: 25 - 35 min | Serve: 2 pessoas",
    preco: 30.00,
    cardOldprice: "R$33.00",
    img: PhotoPizza,
  },
  {
    id: 4,
    category: "Pizza",
    cardName: "Pizza Quatro Queijos G",
    cardMeta: "Tempo: 30 - 40 min | Serve: 4 pessoas",
    preco: 50.00,
    cardOldprice: "R$55.00",
    img: PhotoMaking,
  },
  {
    id: 5,
    category: "Pizza",
    cardName: "Pizza Portuguesa M",
    cardMeta: "Tempo: 30 - 40 min | Serve: 2 pessoas",
    preco: 35.00,
    cardOldprice: "R$38.00",
    img: PhotoPizza,
  },
  {
    id: 6,
    category: "Pizza",
    cardName: "Pizza Frango com Catupiry G",
    cardMeta: "Tempo: 30 - 40 min | Serve: 4 pessoas",
    preco: 48.00,
    cardOldprice: "R$52.00",
    img: PhotoMaking,
  },
  {
    id: 7,
    category: "Pizza",
    cardName: "Pizza Mussarela P",
    cardMeta: "Tempo: 20 - 30 min | Serve: 1 pessoa",
    preco: 20.00,
    cardOldprice: "R$23.00",
    img: PhotoPizza,
  },

  // ── Bebidas ─────────────────────────────────────────────
  {
    id: 8,
    category: "Bebidas",
    cardName: "Cappuccino Especial",
    cardMeta: "Tempo: 5 - 10 min | Serve: 1 pessoa",
    preco: 9.90,
    cardOldprice: "R$12.00",
    img: PhotoCoffe,
  },
  {
    id: 9,
    category: "Bebidas",
    cardName: "Suco de Laranja Natural",
    cardMeta: "Tempo: 5 min | Serve: 1 pessoa",
    preco: 8.00,
    cardOldprice: "R$10.00",
    img: PhotoCoffe,
  },
  {
    id: 10,
    category: "Bebidas",
    cardName: "Refrigerante Lata",
    cardMeta: "Gelado | Serve: 1 pessoa",
    preco: 6.00,
    cardOldprice: "R$7.00",
    img: PhotoCoffe,
  },
  {
    id: 11,
    category: "Bebidas",
    cardName: "Água com Gás",
    cardMeta: "Gelada | Serve: 1 pessoa",
    preco: 4.00,
    cardOldprice: "R$5.00",
    img: PhotoCoffe,
  },
  {
    id: 12,
    category: "Bebidas",
    cardName: "Milk Shake de Chocolate",
    cardMeta: "Tempo: 10 min | Serve: 1 pessoa",
    preco: 14.00,
    cardOldprice: "R$16.00",
    img: PhotoCoffe,
  },

  // ── Sobremesas ───────────────────────────────────────────
  {
    id: 13,
    category: "Sobremesa",
    cardName: "Torrada Francesa com Frutas",
    cardMeta: "Tempo: 10 - 15 min | Serve: 1 pessoa",
    preco: 12.50,
    cardOldprice: "R$14.00",
    img: PhotoMaking,
  },
  {
    id: 14,
    category: "Sobremesa",
    cardName: "Pudim de Leite",
    cardMeta: "Tempo: 5 min | Serve: 1 pessoa",
    preco: 10.00,
    cardOldprice: "R$12.00",
    img: PhotoMaking,
  },
  {
    id: 15,
    category: "Sobremesa",
    cardName: "Brownie com Sorvete",
    cardMeta: "Tempo: 5 min | Serve: 1 pessoa",
    preco: 15.00,
    cardOldprice: "R$18.00",
    img: PhotoMaking,
  },
  {
    id: 16,
    category: "Sobremesa",
    cardName: "Petit Gateau",
    cardMeta: "Tempo: 10 min | Serve: 1 pessoa",
    preco: 18.00,
    cardOldprice: "R$21.00",
    img: PhotoMaking,
  },
];
