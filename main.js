let buttons = document.querySelectorAll(".btn");
let text = document.getElementById("textArea");

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", () => {
    if (buttons[i].innerText === "clear") {
      text.value = "";
    } else if (buttons[i].innerText === "del") {
      text.value = text.value.slice(0, -1);
    } else if (buttons[i].innerText === "=") {
      const result = eval(text.value);
      setTimeout(() => {
        text.value = result;
      }, 100);

      setTimeout(() => {
        text.value = "";
      }, 1000);
    } else {
      text.value += buttons[i].innerText;
    }
  });
}
