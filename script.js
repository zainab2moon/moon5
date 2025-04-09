function highlightSection(button) {
    const section = button.closest("section");
    section.style.boxShadow = "0 0 25px 5px #ffe600";
    section.style.transition = "box-shadow 0.5s ease-in-out";
  
    setTimeout(() => {
      section.style.boxShadow = "none";
    }, 1500);
  }