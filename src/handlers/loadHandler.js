import data from "../data.js";
import dom from "../dom.js";

const loadHandler = () => {
  data.items.forEach((item) => {
    const container = createItem(item);
    dom.itemsList.append(container);
  });
};

export default loadHandler;
