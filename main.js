let input = document.getElementById("item-input");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("item-list");

addBtn.addEventListener("click", function () {
  let itemText = input.value.trim();

  if (itemText) {
    // Create new list item
    let li = document.createElement("li");
    li.textContent = itemText;

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    // Append both text and button to list item
    li.appendChild(deleteBtn);

    // Add to list
    list.appendChild(li);

    // Clear input
    input.value = "";
  }
});
