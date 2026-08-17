// NovaVest — واجهة تجريبية
// لا توجد هنا أي معاملات مالية حقيقية.

document.addEventListener("DOMContentLoaded", () => {
  // حركة ظهور العناصر
  const elements = document.querySelectorAll(".metric, .panel, .welcome");

  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(15px)";

    setTimeout(() => {
      element.style.transition = "all 0.5s ease";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 100);
  });

  // تحديث الساعة
  const clock = document.getElementById("clock");

  if (clock) {
    const updateClock = () => {
      clock.textContent = new Date().toLocaleTimeString("ar-SA");
    };

    updateClock();
    setInterval(updateClock, 1000);
  }
});
