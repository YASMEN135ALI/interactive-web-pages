const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('سيتم إضافة صفحة تفاصيل المقال لاحقًا 😊');
  });
});
