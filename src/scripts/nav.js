document
  .querySelector("[data-nav-toggle]")
  ?.addEventListener("change", (evt) => {
    if (evt.target.checked) {
      document.body.classList.add("modal");
      document
        .querySelector("[data-nav-overlay]")
        ?.classList.remove("nav__overlay--hidden");
    } else {
      document.body.classList.remove("modal");
      document
        .querySelector("[data-nav-overlay]")
        ?.classList.add("nav__overlay--hidden");
    }
  });
