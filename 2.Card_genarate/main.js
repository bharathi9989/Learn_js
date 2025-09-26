let container = document.getElementById("card-container");
let generateBtn = document.getElementById("genarate-card");

generateBtn.addEventListener("click", function () {
  // create generate card

  let card = document.createElement("div");
  card.className = "card";
  card.style.cssText = `
            border   : 1px solid black
            padding :20px;
            margin: 10px;'
            background-color:$=#f9f9f9;
            border-radius :8px;
    `;
  let title = document.createElement("h3");
  title.textContent = "card title" + (container.children.length + 1);

  let content = document.createElement("p");
  content.textContent = "this is card with some example text.";

  let button = document.createElement("button");
  button.textContent = "Action";
  button.style.cssText = `
                background :blue;
                color:white;
                border:none;
                padding :5px 10px;
                border-radius : 3px;
                `;

  // apend allElement to card

  card.append(title, content, button);

  container.appendChild(card);
});
