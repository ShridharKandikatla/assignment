const lines = [[], [], []];

function printContainer(glowIndex = -1) {
  const container = document.getElementById("itemContainer");
  container.innerHTML = "";
  lines.forEach((line, i) => {
    const div = document.createElement("div");
    div.className = "checkout";
    if (i === glowIndex) {
      div.classList.add("glow");
      setTimeout(() => div.classList.remove("glow"), 1000);
    }
    div.innerHTML = `<h3>Counter ${i + 1}</h3><h3>${
      line.length
    }Customers</h3><ul class="line">${line
      .map((item) => `<li>${item} items</li>`)
      .join("")}</ul><h5>Total items: ${line.reduce((a, b) => a + b, 0)}</h5>`;
    container.appendChild(div);
  });
}

function addCustomer() {
  const input = document.getElementById("count");
  const items = parseInt(input.value);
  if (!items || items < 1) return alert("Enter a valid number.");

  let total = Infinity;
  let index = 0;

  lines.forEach((line, i) => {
    const totalItems = line.reduce((a, b) => a + b, 0);
    if (totalItems < total) {
      total = totalItems;
      index = i;
    }
  });

  lines[index].push(items);
  input.value = "";
  printContainer(index);
}

printContainer();
