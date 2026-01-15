// LearnCode-Academy - Vanilla JS enhancements
// Minimal, progressive interactivity for existing pages

(function () {
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  // NAV: Mobile hamburger toggle
  function initNavbarToggle() {
    const nav = qs(".navbar");
    if (!nav) return;
    const toggle = qs(".navbar .menu-toggle");
    if (!toggle) return;

    // If UL exists, hide/show on mobile when toggled
    const menu = qs("ul", toggle);
    const checkbox = qs('input[type="checkbox"]', toggle);

    const setOpen = (open) => {
      toggle.classList.toggle("open", !!open);
      if (checkbox) checkbox.checked = !!open;
      if (menu) menu.setAttribute("aria-hidden", open ? "false" : "true");
    };

    // Click bars or checkbox toggles menu
    qsa("span", toggle).forEach((bar) => {
      bar.addEventListener("click", (e) => {
        e.stopPropagation();
        setOpen(!toggle.classList.contains("open"));
      });
    });

    if (checkbox) {
      checkbox.addEventListener("change", () => setOpen(checkbox.checked));
    }

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target)) setOpen(false);
    });
  }

  // FORMS: lightweight validation
  function initFormValidation() {
    const forms = qsa(".auth-form");
    if (!forms.length) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, msg) {
      input.classList.add("field-error");
      let err = input.parentElement.querySelector(".error-text");
      if (!err) {
        err = document.createElement("div");
        err.className = "error-text";
        input.parentElement.appendChild(err);
      }
      err.textContent = msg;
    }

    function clearError(input) {
      input.classList.remove("field-error");
      const err = input.parentElement.querySelector(".error-text");
      if (err) err.textContent = "";
    }

    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        let valid = true;
        const inputs = qsa("input, textarea", form);

        inputs.forEach((input) => clearError(input));

        inputs.forEach((input) => {
          const id = input.id || "";
          const val = (input.value || "").trim();

          if (input.hasAttribute("required") && !val) {
            showError(input, "This field is required");
            valid = false;
            return;
          }

          if (id === "email" && val && !emailRegex.test(val)) {
            showError(input, "Please enter a valid email");
            valid = false;
            return;
          }

          if (id === "password" && val && val.length < 8) {
            showError(input, "Password must be at least 8 characters");
            valid = false;
            return;
          }
        });

        if (!valid) {
          e.preventDefault();
        }
      });

      // Live clear errors on input
      qsa("input, textarea", form).forEach((input) => {
        input.addEventListener("input", () => clearError(input));
      });
    });
  }

  // MODAL: simple preview modal for courses
  function initPreviewModals() {
    const buttons = qsa(".preview-btn");
    if (!buttons.length) return;

    function openModal(title, imgSrc) {
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      backdrop.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true">
          <div class="modal-header">
            <h3>${title || "Course Preview"}</h3>
            <button class="modal-close" aria-label="Close">×</button>
          </div>
          <div class="modal-body">
            ${
              imgSrc
                ? `<img src="${imgSrc}" alt="Preview" style="width:100%;border-radius:8px;"/>`
                : ""
            }
            <p style="margin-top:12px;color:#6b7280">This is a sample preview. React frontend will render dynamic previews later.</p>
          </div>
        </div>`;

      document.body.appendChild(backdrop);

      const closeBtn = qs(".modal-close", backdrop);
      const close = () => {
        backdrop.remove();
        document.removeEventListener("keydown", onKey);
      };
      const onKey = (e) => {
        if (e.key === "Escape") close();
      };
      closeBtn.addEventListener("click", close);
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) close();
      });
      document.addEventListener("keydown", onKey);
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const card = btn.closest(".modern-course-card");
        const title = card ? qs("h3", card)?.textContent : "Course Preview";
        const imgSrc = card ? qs(".card-image img", card)?.src : null;
        openModal(title, imgSrc);
      });
    });
  }

  // OPTIONAL: simple testimonial carousel on homepage
  function initTestimonialCarousel() {
    const grid = qs(".testimonial-grid");
    if (!grid) return;
    const cards = qsa(".testimonial-card", grid);
    if (cards.length < 2) return;

    let idx = 0;
    cards.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));

    setInterval(() => {
      cards[idx].style.display = "none";
      idx = (idx + 1) % cards.length;
      cards[idx].style.display = "block";
    }, 5000);
  }

  onReady(() => {
    initNavbarToggle();
    initFormValidation();
    initPreviewModals();
    initTestimonialCarousel();
  });
})();
