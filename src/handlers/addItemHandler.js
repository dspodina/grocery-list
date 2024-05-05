import dom from "../dom.js";
import data from "../data.js";
import createItem from "../components/createItem.js";

const addItemHandler = (e) => {
  e.preventDefault();
  const value = dom.input.value.trim();

  if (!value) {
    dom.error.innerText = "Please type something";
    setTimeout(() => {
      dom.error.innerText = "";
    }, 2000);
  } else {
    const newItem = {
      id: data.items.length + 1,
      text: value,
    };

    const itemDom = createItem(newItem);
    dom.itemsList.prepend(itemDom);
    dom.input.value = "";
    data.items.push(newItem);
  }
};

export default addItemHandler;
