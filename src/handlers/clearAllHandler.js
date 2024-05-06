import dom from "../dom.js";
import data from "../data.js";

const clearAllHandler = () => {
  dom.itemsList.innerText = "";
  data.items = [];
  dom.clearBtn.style.display = "none"
};

export default clearAllHandler;
