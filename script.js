document.addEventListener("DOMContentLoaded", function () {
  // تحميل الـ CV عند الضغط على الزر
  document.getElementById("downloadCV").addEventListener("click", function () {
    window.open("Islam-Hefnawy.pdf", "_blank");
  });

  // تأثيرات عند التمرير
  const sections = document.querySelectorAll(".container");

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // استدعاء التأثير عند تحميل الصفحة لأول مرة
});
