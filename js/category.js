(function(window){
 
    var swiper = new Swiper('.category-left .swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
		roundLengths : true, //防止文字模糊
    });

    var swiper2 = new Swiper('.category-right .swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
		roundLengths : true, //防止文字模糊
    });
    var parentHeight = document.querySelector('.swiper-container').offsetHeight;
    var childHeight = document.querySelector('.swiper-slide').offsetHeight;
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var li = document.querySelectorAll('.category-left ul li');
    for(var i = 0;i< li.length;i++){
        (function(index){
            li[i].addEventListener('click',function(){
                var translateY = -index * this.offsetHeight;
                var minTranslateY = parentHeight-childHeight;
                if(translateY < minTranslateY){
                    translateY = minTranslateY;
                }
                swiperWrapper.style.transform = 'translate3d(0,'+ translateY + 'px,0)';
                swiperWrapper.style.transition = 'all .3s';
                for(var j = 0;j< li.length;j++){
                    li[j].classList.remove('active');
                }
                this.classList.add('active');
            })
        })(i);
    }
})(window)