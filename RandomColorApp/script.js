function changeBodyColor() {
    // Tüm range input'ları bul ve bir diziye ata
    const inputs = document.querySelectorAll('input[type="range"]');
  
    // Her bir input için
    inputs.forEach(input => {
      // Kardeş elemente (label veya span) değeri yazdır
      input.nextElementSibling.innerText = input.value;
  
      // Değer değiştiğinde çalışacak fonksiyon
      input.addEventListener('input', () => {
        // Kardeş elemente yeni değeri yazdır
        input.nextElementSibling.innerText = input.value;
        // Arka plan rengini güncelle
        changeBodyColor();
      });
    });
  
    // RGB değerlerini bir diziye al ve string'e çevir
    let rgb = [...inputs].reduce((previousValue, currentValue) => [...previousValue, currentValue.value], []);
    // Body'nin arka plan rengini ayarla
    document.body.style.backgroundColor = `rgb(${rgb.join(',')})`;
  }
  
  // Sayfa yüklendiğinde bir kez çalıştır
  changeBodyColor();