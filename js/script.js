$(document).ready(function(){
    





    // scroll시 header 조절
    const showNav = gsap.from("header", { 
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showNav.play() : showNav.reverse()
        }
    });

    

    // login
    $('.mypage').click(function(){
        $('.login').fadeIn();
        $('body').css('overflow','hidden');
    });
    $('.cart').click(function(){
        $('.login').fadeIn();
        $('body').css('overflow','hidden');
    });
    $('.log_close').click(function(){
        $('.login').fadeOut();
        $('body').css('overflow','scroll');
    });
    $(document).mouseup(function (e) { // 배경 클릭 시 모달창 닫힘
        if ($(".login").has(e.target).length === 0) {
            $(".login").fadeOut();
            $('body').css({
                'overflow-x': 'hidden',  // 가로 스크롤 방지
                'overflow-y': 'auto'     // 세로 스크롤 가능
            });
        }
    });



    // gnb 호버 시 하위메뉴 활성화
    $('.gnb>li:nth-child(1)').mouseenter(function(){
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(3)').stop().fadeIn();
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(2)').stop().fadeIn(700);
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(1)').stop().fadeIn(1000);

    });  
    $('.gnb>li:nth-child(2)').mouseenter(function(){
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(3)').stop().fadeIn();
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(2)').stop().fadeIn(700);
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(1)').stop().fadeIn(1000);

    }); 
    $('.gnb>li:nth-child(3)').mouseenter(function(){
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(3)').stop().fadeIn();
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(2)').stop().fadeIn(700);
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(1)').stop().fadeIn(1000);

    }); 

    // gnb 호버 시 하위메뉴 비활성화
    $('.gnb>li:nth-child(1)').mouseleave(function(){
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(3)').stop().fadeOut();
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(2)').stop().fadeOut(700);
        $('.gnb>li:nth-child(1)>.sub>li:nth-child(1)').stop().fadeOut(1000);
    });
    $('.gnb>li:nth-child(2)').mouseleave(function(){
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(3)').stop().fadeOut();
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(2)').stop().fadeOut(700);
        $('.gnb>li:nth-child(2)>.sub>li:nth-child(1)').stop().fadeOut(1000);
    });
    $('.gnb>li:nth-child(3)').mouseleave(function(){
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(3)').stop().fadeOut();
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(2)').stop().fadeOut(700);
        $('.gnb>li:nth-child(3)>.sub>li:nth-child(1)').stop().fadeOut(1000);
    });


    //tablet gnb 클릭 이벤트
    $('.m_gnb_line').click(function () {
        $('.m_sub').not($(this).find('.m_sub')).slideUp();
        $(this).find('.m_sub').slideToggle();
    
        let bar = $(this).find('.m_gnb_bar');
    
        if (bar.width() === 0) {
            $('.m_gnb_bar').css('width', '0'); // 다른 메뉴의 바는 닫기
            bar.css('width', '100%'); // 현재 클릭한 메뉴만 열기
        } else {
            bar.css('width', '0'); // 다시 클릭 시 닫기
        }
    });

    $('.m_gnb_icon').click(function(){
        $('.m_gnb').fadeIn();
        $('body').css('overflow','hidden');
    });
    $('.m_gnb_close').click(function(){
        $('.m_gnb').fadeOut();
        $('body').css('overflow','scroll');
    });


    //sub sub sub sub sub sub sub sub sub sub sub sub sub
    $('.sub01_sort ol li:first-child').click(function(){
        $('.sub01_sort ol li:first-child').hide();
        $('.sub01_sort ol li:last-child').show();
    });
    $('.sub01_sort ol li:last-child').click(function(){
        $('.sub01_sort ol li:last-child').hide();
        $('.sub01_sort ol li:first-child').show();
    });







 

    // 반응형 PC PC PC PC PC PC PC PC PC PC PC PC PC PC
    if (matchMedia("screen and (min-width: 1400px)").matches) {

        // search
        $('.search_icon').click(function(){
            $('.search_line').css('width','100%');
            $('.search_icon').hide();
            $('.search_close').show();
        })
        $('.search_close').click(function(){
            $('.search_line').css('width','0');
            $('.search_close').hide();
            $('.search_icon').show();
        })

        // title 숨김
        gsap.to(title, {
            duration: 1,
            x: 0,
            y: -1000,
    
            scrollTrigger: {
                trigger: sec_01,
                start: "top -200px ",
                end: "+=3000",
                scrub: true,    //true, 1, 2,....
                markers: false,
            }
        });
    
        // main_visual 이미지 확대
        const ani1 = gsap.timeline();
        ani1.to("#main_visual .mv_video", {scale: 1.5, duration: 3.5, autoAlpha: 1})
        ScrollTrigger.create({
            animation: ani1,
            trigger: "#main_visual",
            start: "center center",
            end: "+=1500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false
        });
    
        // sec_03 왼쪽 스크롤
        gsap.registerPlugin(ScrollTrigger);
        const pinnedImageWrappers = document.querySelectorAll('#sec_03');
        if (pinnedImageWrappers) {
            pinnedImageWrappers.forEach((wrapper) => {
                const inner = wrapper.querySelector('#sec_03 .left_move');
                    gsap.to(inner, {
                        x: () => -(inner.scrollWidth - document.documentElement.clientWidth) + 'px',            
                        ease: 'none',
                        scrollTrigger: {
                        start: 'top',
                        trigger: wrapper,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        end: () => `+=${inner.offsetWidth}`            
                    }
                });
            });
            
        }

        // sec_04 배경색 변경
        $(window).scroll(function(){
            const nTop = $(this).scrollTop();
            if (nTop >= 7400) { 
                $("#sec_04").css("background","#000");
              } else {
                $("#sec_04").css("background","#fff");
              }

        }); 

        //sec_05 title 생성및숨김
        $(window).scroll(function(){
            const nTop = $(this).scrollTop();
           
           if(nTop >= 12850) {
            $('.sec05_title').css('opacity','0%')
            } else {
                $('.sec05_title').css('opacity','100%')
            }
        });
    
  

    
        }
        
        
        // 1399 1399 1399 1399 1399 1399 1399 1399 1399 1399 1399
        if (matchMedia("screen and (max-width: 1399px) and (min-width: 769px)").matches) {
            document.body.style.overflowX = "hidden"; // 강제 적용
            document.documentElement.style.overflowX = "hidden";
            
        //모바일 검색
        $('.search').click(function(){
            $('.m_search').slideDown();
            

        });
        $('.m_search_close').click(function(){
            $('.m_search').slideUp();

        });
        
    
      // title 숨김
      gsap.to(title, {
        duration: 1,
        x: 0,
        y: -1000,
    
        scrollTrigger: {
            trigger: sec_01,
            start: "center",
            end: "+=1500",
            scrub: 0,    //true, 1, 2,....
            markers: false,
        }
    });
    
        // main_visual 이미지 확대
        const ani1 = gsap.timeline();
        ani1.to("#main_visual .mv_video", {scale: 2.7, duration: 3.5, autoAlpha: 1})
            
    
        ScrollTrigger.create({
            animation: ani1,
            trigger: "#main_visual",
            start: "center center",
            end: "+=1500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false
        });
    
        $('.sec03_main').css({'width':'100%','padding':'0 60px'})

         // sec_04 배경색 변경
         $(window).scroll(function(){

            const nTop = $(this).scrollTop();
    
            if (nTop >= 7500) { 
                $("#sec_04").css("background","#000");
              } else {
                $("#sec_04").css("background","#fff");
              }
    
        }); 
    
        //sec_05 title 생성및숨김
        $(window).scroll(function(){
            const nTop = $(this).scrollTop();
            
            if(nTop >= 12100) {
            $('.sec05_title').css('opacity','0%')
            } else {
                $('.sec05_title').css('opacity','100%')
            }
        });
        

        
                } //반응형 1399 끝
            


        // 반응형 768 768 768 768 768 768 768 768 768 768 768
        if (matchMedia("screen and (max-width: 768px)").matches) {
            
            document.body.style.overflowX = "hidden"; // 강제 적용
            document.documentElement.style.overflowX = "hidden";

        //모바일 검색
        $('.search').click(function(){
            $('.m_search').slideDown();
            

        });
        $('.m_search_close').click(function(){
            $('.m_search').slideUp();

        });
        
        //모바일 로그인
        $('.m_icon div').click(function(){
            $('.m_login').fadeIn();
        });
        $('.m_log_close').click(function(){
            $('.m_login').fadeOut();
        });


                // title 숨김
        gsap.to(title, {
            duration: 1,
            
            y: -1000,
        
            scrollTrigger: {
                trigger: sec_01,
                start: "top top",
                end: "+=500",
                scrub: true,    //true, 1, 2,....
                markers: false,
            }
        });
 

    
        // main_visual 이미지 확대
        const ani1 = gsap.timeline();
        ani1.to("#main_visual .mv_video", {scale: 3.5, duration: 3.5, autoAlpha: 1})
            
    
        ScrollTrigger.create({
            animation: ani1,
            trigger: "#main_visual",
            start: "center center",
            end: "+=500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false
        });
        gsap.set("#main_visual .mv_video", { x: "0%", y: "0%" });
 
        $('.sec03_main').css({'width':'100%','padding':'0 20px'})

        // sec_04 배경색 변경
        $(window).scroll(function(){
            const nTop = $(this).scrollTop();
            if (nTop >= 5100) { 
                $("#sec_04").css("background","#000");
                } else {
                $("#sec_04").css("background","#fff");
                }
        }); 



    }


        // Swiper01 슬라이드
	const swiper01 = new Swiper('.swiper01', {
        // Optional parameters
        loop: false,
        slidesPerView: 1.5,
	    spaceBetween: 6,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1399: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 50,
            },
          },     

        // If we need pagination
        pagination: {
          el: '#sec_01 .swiper-pagination',
          clickable: true,
        },

      });



      // Swiper02 슬라이드
	const swiper02 = new Swiper('.swiper02', {
        // Optional parameters
        loop: false,
        slidesPerView: 1.5,
	    spaceBetween: 6,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1399: {
              slidesPerView: 3.5,
              slidesPerGroup: 3,
              spaceBetween: 50,
            },
          },                         

        // If we need pagination
        pagination: {
          el: '#sec_02 .swiper-pagination',
          clickable: true,
        },

      });
    







      AOS.init({ disable: window.innerWidth < 1399}); // AOS애니메이션

});




// footer_top 무한루프
window.onload = function() { 
    var bannerLeft=0;  
    var first=1; 
    var last; 
    var imgCnt=0; 
    var $img = $(".footer_logo li");
    var $first; 
    var $last; 
    
    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴                
        $(this).css("left",bannerLeft);
            bannerLeft += $(this).width()+60; 
            $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });                        
    
    if( imgCnt > 7){                //배너 8개 이상이면 이동시킴                
    
        last = imgCnt;
        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동                   
                });
                    $first = $("#banner"+first);
                    $last = $("#banner"+last);                   
                    if($first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김 
                        $first.css("left", $last.position().left + $last.width()+60 );
                            first++;
                            last++;
                            if(last > imgCnt) { last=1; }
                            if(first > imgCnt) { first=1; }                   
                        }               
                    }, 15);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 //깔끔하게 변경가능하다         
                }
            };
