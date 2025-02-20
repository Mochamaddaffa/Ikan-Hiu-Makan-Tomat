document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan efek klik pada daftar nama kelompok
    const teamMembers = document.querySelectorAll(".team-list li");
    teamMembers.forEach((member) => {
      member.addEventListener("click", function () {
        alert(`Anda mengklik nama: ${this.textContent}`);
      });
    });
  
    // Tambahkan efek hover pada gambar
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img) => {
      img.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
      });
  
      img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  });
  