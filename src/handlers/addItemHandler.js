import dom from "../dom.js";
import data from "../data.js";
import createItem from "../components/createItem.js";

const addItemHandler = (e) => {
  e.preventDefault();
  const value = dom.input.value.trim();
  const btnType = dom.submitBtn.innerText;

  if (btnType === "Submit") {
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
      dom.clearBtn.style.display = "block";
    }
  } else {
    const selectedItem = document.querySelector(".selected");
    selectedItem.querySelector(".item-value").innerText = value;
    const id = Number(selectedItem.id);
    const itemData = data.items.find((item) => item.id === id);
    itemData.text = value;
    dom.input.value = "";
    dom.submitBtn.innerText = "Submit";
    selectedItem.classList.remove("selected");
  }
};

export default addItemHandler;
