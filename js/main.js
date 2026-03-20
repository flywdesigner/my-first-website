document.addEventListener('DOMContentLoaded', function() {
    // 获取页面中所有的轮播容器
    const carousels = document.querySelectorAll('.collection-banner.carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        // 只有当图片数量大于 1 时才执行轮播
        if (images.length > 1) {
            let currentIndex = 0;
            setInterval(() => {
                // 移除当前图片的 active 类
                images[currentIndex].classList.remove('active');
                
                // 计算下一张图片的索引
                currentIndex = (currentIndex + 1) % images.length;
                
                // 为下一张图片添加 active 类
                images[currentIndex].classList.add('active');
            }, 2000); // 每 2 秒切换一次
        }
    });
});