document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  const policyVersionDropdowns = document.querySelectorAll(".policy-version-control");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", (event) => {
      event.preventDefault();

      const isOpen = dropdown.classList.contains("is-open");

      dropdowns.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.matchMedia("(hover: hover)").matches) {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".nav-dropdown")) return;

    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });
  });

  policyVersionDropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".policy-version-toggle");
    const options = dropdown.querySelectorAll(".policy-version-option");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.contains("is-open");

      policyVersionDropdowns.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".policy-version-toggle")?.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".policy-version-control")) return;

    policyVersionDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".policy-version-toggle")?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
    });

    policyVersionDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".policy-version-toggle")?.setAttribute("aria-expanded", "false");
    });
  });
});
