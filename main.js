class PinCode {
  constructor(domParent) {
    this.container = domParent;
    this.init();
  }

  init() {
    this.buttons = this.container.querySelectorAll(".js-pin-code-number");
    this.input = this.container.querySelector(".js-pin-code-output");
    this.access = this.container.querySelector(".js-pin-code-access");

    this.initEvents();
  }

  initEvents() {
    this.buttons.forEach((element) => {
      element.addEventListener("click", () => {
        if (this.input.value.length >= 4) {
          this.input.value = "";
        }
        this.input.value += element.value;
      });
    });

    this.access.addEventListener("click", () => {
      if (this.input.value === "8931") {
        alert("Ты ж моя умничка!!!");
      } else {
        alert("Попробуй еще");
        this.input.value = "";
      }
    });
  }

  handleClickButton() {}
}

const pinCode = document.querySelector(".js-pin-code");
new PinCode(pinCode);
