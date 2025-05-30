
// 中文朗读功能
(function () {
    const btn = document.getElementById('readBtn');
    const text = document.getElementById('storyContent').innerText;
    let utter = null;

    btn.addEventListener('click', () => {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        btn.textContent = '🔊 朗读';
        return;
    }

    utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 1;
    utter.onend = () => btn.textContent = '🔊 朗读';
    speechSynthesis.speak(utter);
    btn.textContent = '⏸ 停止';
    });
})();

// 点击图片全屏查看功能
(function () {
    const images = document.querySelectorAll('.story-image');
    images.forEach(img => {
    img.addEventListener('click', () => {
        const fullImg = img.getAttribute('data-full') || img.src;
        const viewer = document.createElement('div');
        viewer.style.position = 'fixed';
        viewer.style.top = 0;
        viewer.style.left = 0;
        viewer.style.width = '100vw';
        viewer.style.height = '100vh';
        viewer.style.background = 'rgba(0,0,0,0.9)';
        viewer.style.zIndex = 9999;
        viewer.style.display = 'flex';
        viewer.style.alignItems = 'center';
        viewer.style.justifyContent = 'center';

        const image = document.createElement('img');
        image.src = fullImg;
        image.style.maxWidth = '90%';
        image.style.maxHeight = '90%';
        image.style.borderRadius = '12px';
        image.style.boxShadow = '0 0 20px rgba(255,255,255,0.2)';
        viewer.appendChild(image);

        viewer.addEventListener('click', () => {
        document.body.removeChild(viewer);
        });

        document.body.appendChild(viewer);
    });
    });
})();