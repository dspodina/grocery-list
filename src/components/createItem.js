/**
 * Create an Item element.
 *
 * @param {object} item - Item object.
 * @returns {HTMLElement} - Item element.
 */

import deleteBtnHandler from "../handlers/deleteBtnHandler.js";
import editBtnHandler from "../handlers/editBtnHandler.js";

const createItem = (item) => {
  const container = document.createElement("div");
  container.classList.add("new-task");
  container.id = item.id;

  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("checkbox-container");

  // checkbox container
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.id = item.id;
  checkbox.setAttribute("name", "task");

  const label = document.createElement("label");
  label.setAttribute("for", `task-checkbox-${item.id}`);
  label.innerHTML = item.text;
  label.classList.add("item-value");
  checkbox.checked = false;

  // buttons container
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  // edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.classList.add("edit-btn");

  editBtn.addEventListener("click", () => {
    editBtnHandler(item);
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    deleteBtnHandler(item.id);
  });

  checkboxContainer.append(checkbox, label);
  btnContainer.append(editBtn, deleteBtn);
  container.append(checkboxContainer, btnContainer);

  return container;
};

export default createItem;
