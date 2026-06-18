const form = document.getElementById('consultForm');

if (form) {
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('من فضلك املئي جميع الحقول قبل الإرسال.');
    } else {
      alert('تم إرسال النموذج بنجاح (وهميًا) 😊');
    }
  });
}
