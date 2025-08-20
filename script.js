// Mobile menu toggle
function toggleMenu() {
  var nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("show");
}

// Reveal on scroll (IntersectionObserver)
(function () {
  var elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    // Fallback: show all
    elements.forEach(function (el) {
      el.classList.add("show");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(function (el) {
    io.observe(el);
  });
})();

// Simple contact form validation (no internet, no libs)
function validateContactForm() {
  var name = document.getElementById("fullName");
  var email = document.getElementById("email");
  var msg = document.getElementById("message");
  var note = document.getElementById("formNote");
  if (!name || !email || !msg || !note) return false;

  var errors = [];
  if (!name.value.trim()) errors.push("Name is required");
  if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value))
    errors.push("Valid email is required");
  if (!msg.value.trim()) errors.push("Message is required");

  if (errors.length) {
    note.textContent = errors.join(" • ");
    note.style.color = "#c0392b";
    return false;
  } else {
    note.textContent = "Thanks! Your message has been noted (demo).";
    note.style.color = "#2e7d32";
    // prevent actual navigation on demo
    return false;
  }
}
