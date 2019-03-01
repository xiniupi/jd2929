(function(window){
    window.addEventListener('scroll',function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        var slideHeight = document.querySelector('#slide').offsetHeight;
        if(scrollTop<slideHeight){
            var opacity = scrollTop/slideHeight;
            console.log(opacity);
            document.querySelector('#header').style.backgroundColor = 'rgba(222,24,27,' + opacity +')';
        }else{
            document.querySelector('#header').style.backgroundColor = 'rgb(222,24,27)';
        }
    })
    //倒计时功能
    var time = 2* 60*60;
    var spans = document.querySelectorAll('.seckill-downtime span');
    setInterval(function(){
        time--;
        var hour = Math.floor(time / 60 / 60);
        var minute = Math.floor(time % 3600 / 60);
        var second = time %60;
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    },1000)
    
    var swiper = new Swiper('.swiper-container', {
        direction:'horizontal',
        loop:true,
        pagination:{
            el:'.swiper-pagination',
        },
        autoplay:true,
        autoplay:{
            delay:1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        }
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    });
  
})(window);