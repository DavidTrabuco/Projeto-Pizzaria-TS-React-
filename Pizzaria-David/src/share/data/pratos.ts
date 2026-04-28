import PhotoPizza from "../Photo/PhotoPizza.jpg";
import PhotoCoffe from "../Photo/PhotoCoffe.jpg";
import PhotoMaking from "../Photo/PhotoMaking.jpg";

export interface Prato {
  id: number;
  cardName: string;
  cardMeta: string;
  preco: number;
  cardOldprice: string;
  img: string;
}

export const Pratos: Prato[] = [
  {
    id: 1,
    cardName: "Raspberry French Toast",
    cardMeta: "Time: 10 - 15 Minutes | Serves: 1",
    preco: 12.50,
    cardOldprice: "$13.20",
    img: PhotoMaking,
  },
  {
    id: 2,
    cardName: "Cappuccino Especial",
    cardMeta: "Time: 5 - 10 Minutes | Serves: 1",
    preco: 9.90,
    cardOldprice: "$11.00",
    img: PhotoCoffe,
  },
  {
    id: 3,
    cardName: "Pizza Calabresa G",
    cardMeta: "Time: 30 - 40 Minutes | Serves: 4",
    preco: 45.00,
    cardOldprice: "$48.00",
    img: PhotoPizza,
  },
  {
    id: 4,
    cardName: "Pizza Margherita P",
    cardMeta: "Time: 25 - 35 Minutes | Serves: 1",
    preco: 8.50,
    cardOldprice: "$25.50",
    img: PhotoCoffe,
  },
  {
    id: 5,
    cardName: "Pizza Pepperoni M",
    cardMeta: "Time: 25 - 35 Minutes | Serves: 2",
    preco: 30.00,
    cardOldprice: "$33.00",
    img: PhotoPizza,
  },
  {
    id: 6,
    cardName: "Pizza Quatro Queijos G",
    cardMeta: "Time: 30 - 40 Minutes | Serves: 4",
    preco: 50.00,
    cardOldprice: "$55.00",
    img: PhotoMaking,
  },
];
