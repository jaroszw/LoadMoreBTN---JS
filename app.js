const containers = document.querySelector(".add-container");
const loadBtn = document.querySelector(".load-btn");

const items = [
  { title: "item1", desc: "desc item1" },
  { title: "item2", desc: "desc item2" },
  { title: "item3", desc: "desc item3" },
  { title: "item4", desc: "desc item4" },
  { title: "item5", desc: "desc item5" },
  { title: "item6", desc: "desc item6" },
  { title: "item7", desc: "desc item7" },
  { title: "item8", desc: "desc item8" },
  { title: "item9", desc: "desc item9" },
];

let currentIndex = 0;

loadBtn.addEventListener("click", () => {
  let maxSize = 3;
  for (let i = 0; i < maxSize; i++) {
    const div = document.createElement("div");
    div.classList.add("content");
    div.innerHTML = `<h1>${items[currentIndex + i].title}</h1>
      <p>${items[currentIndex + i].desc}</p>`;
    containers.appendChild(div);
  }
  currentIndex += maxSize;
  if (currentIndex >= items.length) {
    loadBtn.style.display = "none";
    return;
  }
});
