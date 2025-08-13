import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", function () {
  // Create the ScrollSmoother instance
  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
  });

  // --- SCROLL PROGRESS BAR ANIMATION ---
  gsap.to("#progress-bar", {
    scaleX: 1,
    scrollTrigger: {
      trigger: "body",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
    },
  });

  // --- HERO ENTRANCE EFFECT ---
  gsap.from(".hero-heading", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".hero p", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".hero-buttons", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",
  });

  // --- REVEAL ANIMATIONS (Simplified approach) ---

  // Generic reveal for h2.reveal, p.reveal, footer.reveal
  gsap.utils.toArray("h2.reveal, p.reveal, footer.reveal").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Services grid reveal
  gsap.utils.toArray(".service").forEach((service, index) => {
    gsap.fromTo(
      service,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Why Me list items
  gsap.utils.toArray(".why-me li.reveal").forEach((li, index) => {
    gsap.fromTo(
      li,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-me ul",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Project cards
  gsap.utils.toArray(".project").forEach((project, index) => {
    gsap.fromTo(
      project,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project.closest(".portfolio"),
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Tech logos
  gsap.utils.toArray(".tech-logos").forEach((container) => {
    const spans = container.querySelectorAll("span");
    spans.forEach((span, index) => {
      gsap.fromTo(
        span,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  // Testimonial section
  gsap.fromTo(
    ".testimonial",
    {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  // Contact form
  gsap.fromTo(
    "#contact-form",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact-form",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  // --- Formspree Contact Form Logic ---
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          status.innerText = "Thanks! I'll be in touch shortly.";
          status.style.color = "#2563eb";
          form.reset();
        } else {
          status.innerText = "Oops! Something went wrong. Please try again.";
          status.style.color = "#dc2626";
        }
      } catch (error) {
        status.innerText = "Oops! There was a problem submitting the form.";
        status.style.color = "#dc2626";
      }
    });
  }

  console.log(
    "Teague Web Studio with GSAP + ScrollSmoother loaded successfully."
  );
});
