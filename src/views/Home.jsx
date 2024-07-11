import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import MAIN_SLIDE_1 from '/src/assets/main_slide_n1.png';
import MAIN_SLIDE_2 from '/src/assets/main_slide_n2.png';
import MAIN_SLIDE_3 from '/src/assets/main_slide_n3.png';
import mSection2_icon from '/src/assets/mSection2_icon.png';
import mSection_slide01 from '/src/assets/mSection2_slide01.png';
import mSection_slide02 from '/src/assets/mSection2_slide02.png';
import mSection_slide03 from '/src/assets/mSection2_slide03.png';
import mSection_slide04 from '/src/assets/mSection2_slide04.png';
import msection3_img01 from '/src/assets/Msection3_img01.png'
import msection3_img02 from '/src/assets/Msection3_img02.png'
import Msection4_list_img from '/src/assets/Msection4_list_img.jpg'
import Msection5_list_img from '/src/assets/Msection5_list_img.jpg'
import Msection6_list_img from '/src/assets/Msection6_list_img.jpg'
import systemSection_btn from '/src/assets/systemSection_btn.jpg'

import { Navigation, Autoplay, EffectFade, Controller,Scrollbar  } from 'swiper/modules';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [bgActiveIndex, setBgActiveIndex] = useState(0);
    const [textActiveIndex, setTextActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const bgSwiperRef = useRef(null);
    const textSwiperRef = useRef(null);

    const logoRef = useRef(null);
    const MsectionRef = useRef(null);
    const bgOrangeRef = useRef(null);

    const section2Ref = useRef(null);

    // section3
    const msection3Line1Ref = useRef(null);
    const msection3Line2Ref = useRef(null);
    const msection3Line3Ref = useRef(null);
    const section3Ref = useRef(null);
    const smartlogoRef = useRef(null);

    // section4
    const section4Ref = useRef(null);
    const Msection4ImgBoxRef = useRef(null);
    const Msection4TitleLinkRef = useRef(null);
    const Msection5ImgBoxRef = useRef(null);
    const Msection5TitleLinkRef = useRef(null);
    const Msection6ImgBoxRef = useRef(null);
    const Msection6TitleLinkRef = useRef(null);

    const slides = ['1', '2', '3'];

    useEffect(() => {
        window.scrollTo(0,0)
        const logo = logoRef.current
        const Msection = MsectionRef.current
        const section2 = section2Ref.current
        const bgOrange = bgOrangeRef.current
        
        // section3
        const section3 = section3Ref.current;
        const msection3Line1 = msection3Line1Ref.current
        const msection3Line2 = msection3Line2Ref.current
        const msection3Line3 = msection3Line3Ref.current
        const smartlogo = smartlogoRef.current

        //section4
        const section4 = section4Ref.current;
        const Msection4ImgBox = Msection4ImgBoxRef.current;
        const Msection4TitleLink = Msection4TitleLinkRef.current;
        const Msection5ImgBox = Msection5ImgBoxRef.current;
        const Msection5TitleLink = Msection5TitleLinkRef.current;
        const Msection6ImgBox = Msection6ImgBoxRef.current;
        const Msection6TitleLink = Msection6TitleLinkRef.current;

        const tl = gsap.timeline()
        
        tl.from(logo,{
            width : "100%",
            height : "100vh",
            autoAlpha : 0,
        })
        .to(logo,{
            autoAlpha : 1,
            duration :1,
            immediateRender : true
        })
        .to(logo,{
            top : "3vw",
            left : "4vw",
            width : "8vw",
            height : "8vw",
            duration : 1,
            immediateRender : true
        },"+=0.5")
        .from(Msection,{
            yPercent : 100
        },"<")
        .to(Msection, {
            yPercent : 0,
            duration : 1,
            immediateRender : true
        },"<")

        // 
        gsap.to(bgOrange,{
            autoAlpha : 0,
            scrollTrigger : {
                trigger : section2,
                start : "top bottom",
                end : "top 99%",
                scrub : 1
            }
        })

        gsap.to(Msection,{
            scale : 0.9,
            scrollTrigger : {
                trigger : section2,
                start : "top bottom",
                end : "center center",
                scrub : 1
            }
        })

        // section3
        Aos.init();
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() { Aos.refresh(); }, 500);
        });

        // section4
        // const msection4tl = gsap.timeline({
        //     scrollTrigger : {
        //         trigger : Msection4ImgBox,
        //         start : "top 100%-=100px",
        //         toggleActions : "restart none none reset",
        //     },
        // })

        // msection4tl.fromTo(Msection4ImgBox,{
        //     y : 100,
        //     opacity : 0,
        // },{
        //     y : 0,
        //     opacity :1,
        //     scrollTrigger : {
        //         trigger : Msection4ImgBox,
        //         start : "top 100%-=100px",
        //         toggleActions : "restart none none reset",
                
        //     },
        //     ease : "power3.inOut",
        //     duration : 0.9
        // }).to(Msection4ImgBox,{
        //     scrollTrigger : {
        //         trigger : Msection4ImgBox,
        //         start : "top 100%-=100px",
        //         toggleClass : "aos-animate",
        //         toggleActions : "restart none none reset",
               
        //     },
        //     ease : "power3.inOut",
            
            
        // },"-=0.3")
        // .from(Msection4TitleLink,{
        //     y : 100,
        //     opacity : 0,
        // },0)
        // .to(Msection4TitleLink,{
        //     y : 0,
        //     opacity :1,
        //     scrollTrigger : {
        //         trigger : Msection4TitleLink,
        //         start : "top 100%-=10px",
        //         toggleActions : "restart none none reset",
                
        //     },
        //     ease : "power2.out",
        //     duration : 0.9,
        //     delay : 0.3
        // })

        const msection4tl = gsap.timeline({
            scrollTrigger: {
                trigger: Msection4ImgBox,
                start: "top 100%", // 조금 더 일찍 시작
                toggleActions: "restart none none reset",
                toggleClass: {targets: Msection4ImgBox, className: "aos-animate"}
            },
        });
        
        msection4tl
            .fromTo(Msection4ImgBox, 
                {y: 100, opacity: 0},
                {y: 0, opacity: 1, duration: 0.9, ease: "power3.inOut"}
            )
        
        gsap.fromTo(Msection4TitleLink,
            {y: 100, opacity: 0},
            {
                y: 0, 
                opacity: 1, 
                duration: 0.9,
                delay : 0.3, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: Msection4TitleLink,
                    start: "center 100%", // 조금 더 일찍 시작
                    toggleActions: "restart none none reset",
                   
                }
            }
        );
        
        // Msection5 애니메이션
        const msection5tl = gsap.timeline({
            scrollTrigger: {
                trigger: Msection5ImgBox,
                start: "top 100%", // 조금 더 일찍 시작
                toggleActions: "restart none none reset",
                toggleClass: {targets: Msection5ImgBox, className: "aos-animate"}
            },
        });
        
        msection5tl
            .fromTo(Msection5ImgBox,
                {y: 100, opacity: 0},
                {y: 0, opacity: 1, duration: 0.9, ease: "power3.inOut"}
            )
            

        gsap.fromTo(Msection5TitleLink,
            {y: 100, opacity: 0},
            {
                y: 0, 
                opacity: 1, 
                duration: 0.9, 
                delay : 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: Msection5TitleLink,
                    start: "center 100%", // 조금 더 일찍 시작
                    toggleActions: "restart none none reset",
                  
                }
            }
        );

       

        if (bgSwiperRef.current && textSwiperRef.current) {
            const bgSwiper = bgSwiperRef.current.swiper;
            const textSwiper = textSwiperRef.current.swiper;
    
            bgSwiper.on('slideChange', () => {
                // console.log("bg_index", bgSwiper.realIndex);
                textSwiper.slideTo(bgSwiper.realIndex);
                
            });
        }

        return () => {
            msection4tl.kill();
            tl.kill(); // Timeline 중지 및 정리
            ScrollTrigger.getAll().forEach(st => st.kill());
            Aos.refresh();
        };
    }, []);



    const goNext = () => {
    if (bgSwiperRef.current && bgSwiperRef.current.swiper) {
        const bgswiper = bgSwiperRef.current.swiper;
        const textswiper = textSwiperRef.current.swiper;
        if (bgActiveIndex === slides.length - 1) {
            bgswiper.slideTo(0);
            textswiper.slideTo(0);
        } else {
            bgswiper.slideNext();
            textswiper.slideNext();
        }
        }
    };
    
    const goPrev = () => {
        if (bgSwiperRef.current && bgSwiperRef.current.swiper) {
            const bgswiper = bgSwiperRef.current.swiper;
            const textswiper = textSwiperRef.current.swiper;
            if (bgActiveIndex === 0) {
                bgswiper.slideTo(slides.length - 1);
                textswiper.slideTo(slides.length - 1);
            } else {
                bgswiper.slidePrev();
                textswiper.slidePrev();
            }
            }
    };

    const goToSlide = (index) => {
        if (bgSwiperRef.current && bgSwiperRef.current.swiper) {
            bgSwiperRef.current.swiper.slideTo(index);
            textSwiperRef.current.swiper.slideTo(index)
        }
    };
        
    const togglePlayPause = () => {
        const bgswiper = bgSwiperRef.current.swiper;
        const textswiper = textSwiperRef.current.swiper;
        if (isPlaying) {
            bgswiper.autoplay.stop();
            setIsPlaying(false);
            } else {
            bgswiper.autoplay.start();
            setIsPlaying(true);
            }
    };


    return (
        <>
            <section className="section" id="section1">
                <header className='header-wrap main'>
                    <div className='inner flex justify-center items-center'>
                    <div className='logo' ref={logoRef}>
                        <Link to={'/'} className='logo_img'>스마트통증의학과</Link>
                    </div>
                    </div>
                </header>
                <div className="main_home Msection1" >
                    <div className=" borderPadding" >
                        <div ref={MsectionRef} style={{width : "100%", height : "100%"}}>
                            {/* <div className="main_bg_slider main_slider"></div> */}
                            <Swiper
                                ref={bgSwiperRef}
                                slidesPerView={1}
                                spaceBetween={30}
                                effect={'fade'}
                                onSlideChange={(swiper) => {setBgActiveIndex(swiper.realIndex)}}
                                loop={true}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                modules={[EffectFade, Navigation, Autoplay, Controller]}
                                className="mySwiper main_bg_slider main_slider"
                            >
                                <SwiperSlide>
                                    <div className="img" style={{background : `url(${MAIN_SLIDE_1}) no-repeat center / cover`}}></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img" style={{background : `url(${MAIN_SLIDE_2}) no-repeat center / cover`}}></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img" style={{background : `url(${MAIN_SLIDE_3}) no-repeat center / cover`}}></div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="text_slider_wrap">
                                <div className="inner">
                                    <Swiper
                                        ref={textSwiperRef}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        // onSlideChange={(swiper) => {setTextActiveIndex(swiper.realIndex);}}
                                        // autoplay={{
                                        //     delay: 6000,
                                        //     disableOnInteraction: false,
                                        //     pauseOnMouseEnter: false,
                                        // }}
                                        effect={'fade'}
                                        modules={[EffectFade, Navigation,Controller]}
                                        className="mySwiper main_text_slider main_slider"
                                    >
                                        <SwiperSlide>
                                            <div className="text_wrap">
                                                <div className="title1">
                                                    <p>통증, 스마트에서 길을 찾다.</p>
                                                </div>
                                                <div className="txt1">
                                                    <p>
                                                    이제 먼 길로 돌아가지 마세요.<br/>
                                                    스마트가 여러분의 건강을 책임집니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="text_wrap">
                                                <div className="title1">
                                                    <p>
                                                        남다른 관점으로<br/>
                                                        환자를 바라보는<br/>
                                                        스마트통증의학과입니다.
                                                    </p>
                                                </div>
                                                <div className="txt1">
                                                    <p>
                                                    신체의 일부분이 아닌, 전체적인 관점에서<br/>
                                                    바라보며 치료합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="text_wrap">
                                                <div className="title1">
                                                    <p>
                                                        세심한 대화는 올바른<br/>
                                                        치료의 첫 걸음입니다.
                                                    </p>
                                                </div>
                                                <div className="txt1">
                                                    <p>
                                                    풍부한 임상경험과 노하우로<br/>
                                                    꼼꼼하고 정밀한 진료를 약속드립니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="custom-controls">
                                        <div className="custom-bullets">
                                        {slides.map((_, index) => (
                                            <span
                                            key={index}
                                            className={`custom-bullet ${index === bgActiveIndex ? 'active' : ''}`}
                                            onClick={() => goToSlide(index)}
                                            >
                                            </span>
                                        ))}
                                        </div>
                                        <button className="status_wrap" onClick={togglePlayPause}>
                                            <span className={`status ${isPlaying ? 'stop' : 'play'}`}></span>
                                        </button>
                                        <button onClick={goPrev} className="btn prev"></button>
                                        <button onClick={goNext} className="btn next"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="orange_bg" ref={bgOrangeRef}></div>
                </div>
            </section>
            <section className="section" id="section2" ref={section2Ref}>
                <div className="Msection2">
                    <div className="main--inner">
                        <div className="tit">
                            <div className="line">
                                welcome !
                                <img src={mSection2_icon} alt="hello" />
                            </div>
                            <div>smart pain clinic</div>
                        </div>
                        <div className="slide_wrap">
                            <Swiper 
                                slidesPerView="auto"
                                spaceBetween={30}
                                scrollbar = {{draggable : true}}
                                centeredSlides={false}
                                modules={[Scrollbar]}
                            >
                                <SwiperSlide>
                                    <Link>
                                        <img src={mSection_slide01}/>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link>
                                        <img src={mSection_slide02}/>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link>
                                        <img src={mSection_slide03}/>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link>
                                        <img src={mSection_slide04}/>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="section3" ref={section3Ref}>
                <div className="Msection3">
                    <div className="flex_box">
                        <div className="text_wrap">
                            <div className="line_wrap msection3--line1" ref={msection3Line1Ref} data-aos="fade-up" data-aos-duration="900">
                                <span className="text">스마트의</span>
                                <span className="item_img" ref={smartlogoRef}>
                                    <img src={msection3_img01} alt="logoimg" />
                                </span>
                                <span className="text">5가지</span>
                            </div>
                            <div className="line_wrap msection3--line2" ref={msection3Line2Ref} data-aos="fade-up" data-aos-duration="900"  data-aos-delay="200">
                                <span className="text">차별화 진료 다름에는</span>
                            </div>
                            <div className="line_wrap msection3--line3" ref={msection3Line3Ref} data-aos="fade-up" data-aos-duration="900"  data-aos-delay="400">
                                <span className="text">이유가</span>
                                <span className="item_img">
                                    <img src={msection3_img02} alt="logoimg" />
                                </span>
                                <span className="text">있습니다.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section systemSection" id="section4" ref={section4Ref}>
                <div className="Msection4">
                    <div className="img_txt" ref={Msection4ImgBoxRef}>
                        <div className="txt">Delicate examination</div>
                        <div className="img_wrap">
                            <div className="ani_orange right"></div>
                            <img src={Msection4_list_img} alt="Msection4_list_img" />
                        </div>
                    </div>
                    <div className="tit_link" ref={Msection4TitleLinkRef}>
                        <div className="tit">꼼꼼한 검사 시스템</div>
                        <Link className="btn">
                            <img src={systemSection_btn} alt="systemSection_btn" />
                        </Link>
                    </div>
                </div>
                <div className="Msection5">
                    <div className="img_txt" ref={Msection5ImgBoxRef}>
                        <div className="txt">Principles of treatment</div>
                        <div className="img_wrap">
                            <div className="ani_orange left"></div>
                            <img src={Msection5_list_img} alt="Msection5_list_img" />
                        </div>
                    </div>
                    <div className="tit_link" ref={Msection5TitleLinkRef}>
                        <div className="tit">환자 중심의 치료 원칙</div>
                        <Link className="btn">
                            <img src={systemSection_btn} alt="systemSection_btn" />
                        </Link>
                    </div>
                </div>
                <div className="Msection6">
                    <div className="img_txt" ref={Msection6ImgBoxRef}>
                        <div className="txt">Principles of treatment</div>
                        <div className="img_wrap">
                            <div className="ani_orange right2"></div>
                            <img src={Msection6_list_img} alt="Msection5_list_img" />
                        </div>
                    </div>
                    <div className="tit_link" ref={Msection6TitleLinkRef}>
                        <div className="tit">환자 중심의 치료 원칙</div>
                        <Link className="btn">
                            <img src={systemSection_btn} alt="systemSection_btn" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;