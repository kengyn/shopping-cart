import acquaintFate from "../assets/Item_Acquaint_Fate.webp";
import intertwinedFate from "../assets/Item_Intertwined_Fate.webp";
import saintQuartz from "../assets/Saintquartz.webp";
import diamonds from "../assets/daimonds.png";
import covenantBookmark from "../assets/Covenant-Bookmark.png";
import galaxyBookmark from "../assets/galaxy-bookmark.png";

const items = [
  {
    id: "acquaint-fate",
    name: "Acquaint Fate",
    price: 1,
    image: acquaintFate,
    imgLink: "Item_Acquaint_Fate.webp",
    game: "Genshin Impact",
    banner: "Standard Wishes",
    description:
      "A seed that lights up the night. No matter the distance apart, guided by the stone's glimmer, the fated will meet under the stars.",
  },
  {
    id: "intertwined-fate",
    name: "Intertwined Fate",
    price: 1,
    image: intertwinedFate,
    imgLink: "Item_Intertwined_Fate.webp",
    game: "Genshin Impact",
    banner: "Event Wishes",
    description:
      "A fateful stone that connects dreams. Its glimmers can entwine fates and connect dreams, just as how its glimmer links stars into the shapes of a heart's desires.",
  },
  {
    id: "saint-quartz",
    name: "Saint Quartz",
    price: 1,
    image: saintQuartz,
    imgLink: "Saintquartz.webp",
    game: "Fate Grand Order",
    banner: "All SQ Summons",
    description:
      "Stone with divine power. A crystallization of concepts that decides many a future. Also called pseudo-spiritron crystal.",
  },
  {
    id: "gem",
    name: "Gem",
    price: 1,
    image: diamonds,
    imgLink: "daimonds.png",
    game: "Guardian Tales",
    banner: "All GT Hero Summons",
  },
  {
    id: "covenant-bookmark",
    name: "Covenant Bookmark",
    price: 1,
    image: covenantBookmark,
    imgLink: "Covenant-Bookmark.png",
    game: "Epic Seven",
    banner: "Covenant Summons",
    description:
      "Open up a special page and make a holy contract using Covenant Bookmarks.",
  },
  {
    id: "galaxy-bookmark",
    name: "Galaxy Bookmark",
    price: 1,
    image: galaxyBookmark,
    imgLink: "galaxy-bookmark.png",
    game: "Epic Seven",
    banner: "Moonlight Summmons",
    description:
      "A Bookmark with the power of the universe used to summon unique Heroes who might not normally be found in this world.",
  },
];

function getProduct(id) {
  let product = items.find((item) => item.id === id);
  return product ?? null;
}

export { items, getProduct };
