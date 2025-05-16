document.addEventListener('DOMContentLoaded', function () {
  const heroImg = document.querySelector('.hero img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  // 点击图片打开模态框
  heroImg.addEventListener('click', function () {
    modal.style.display = 'flex';
    modalImg.src = heroImg.src;
  });

  // 点击关闭按钮
  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // 点击遮罩关闭模态框
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
