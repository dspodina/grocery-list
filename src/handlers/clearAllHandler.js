import dom from "../dom.js";
import data from "../data.js";

const clearAllHandler = () => {
  dom.itemsList.innerText = "";
  data.items = [];
};

export default clearAllHandler;
