import acquaintedFate from "../assets/Item_Acquaint_Fate.webp";
import intertwinedFate from "../assets/Item_Intertwined_Fate.webp";
import saintQuartz from "../assets/Saintquartz.webp";
import diamonds from "../assets/daimonds.png";
import covenantBookmark from "../assets/Covenant-Bookmark.png";
import galaxyBookmark from "../assets/galaxy-bookmark.png";

const items = [
  {
    id: "acquainted-fate",
    name: "Acquainted Fate",
    price: 1,
    image: acquaintedFate,
    imgLink: "Item_Acquaint_Fate.webp",
  },
  {
    id: "intertwined-fate",
    name: "Intertwined Fate",
    price: 1,
    image: intertwinedFate,
    imgLink: "Item_Intertwined_Fate.webp",
  },
  {
    id: "saint-quartz",
    name: "Saint Quartz",
    price: 1,
    image: saintQuartz,
    imgLink: "Saintquartz.webp",
  },
  {
    id: "diamonds",
    name: "Diamonds",
    price: 1,
    image: diamonds,
    imgLink: "daimonds.png",
  },
  {
    id: "covenant-bookmark",
    name: "Covenant Bookmark",
    price: 1,
    image: covenantBookmark,
    imgLink: "Covenant-Bookmark.png",
  },
  {
    id: "galaxy-bookmark",
    name: "Galaxy Bookmark",
    price: 1,
    image: galaxyBookmark,
    imgLink: "galaxy-bookmark.png",
  },
];

async function getProduct(id) {
  let product = items.find((item) => item.id === id);
  return product ?? null;
}

export { items, getProduct };
