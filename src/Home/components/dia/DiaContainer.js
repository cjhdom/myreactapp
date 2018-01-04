import React, {Component} from 'react';
import Slider from 'react-slick';

import PrevButton from './PrevButton';
import NextButton from './NextButton';

class DiaContainer extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevButton/>,
            nextArrow: <NextButton/>,
            lazyLoad: true
        };

        return (
            <div className="diamond">
                <h2>여기도 있어요&#33;<span>다이아</span></h2>
                <Slider {...settings}>
                    <div className="list_slide">
                        <ul className="list_banner">
                            <li className="banner_page">
                                <ul>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58c0c2003a4e765a6254d330"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/goodmorning.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>굿모닝럭스텔 숙대역점</h3>
                                                <p><span className="school">숙명여대</span><span
                                                    className="line4">호선 숙대입구역</span><span
                                                    className="line1">호선 남영역 인근</span></p>
                                                <p>숙대역, 남영역 도보 3분에 위치한 굿모닝럭스텔 숙대역점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59439d3467dc19a170612dce"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/suyufull.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>풀하우스 수유점</h3>
                                                <p><span className="line4">호선 수유역 인근</span></p>
                                                <p>4호선 수유역 8번출구 도보 3분거리 풀하우스 수유점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/593ded6767dc19a170612bb5"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/sinsa.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>신사 고시텔</h3>
                                                <p><span className="line3">호선 신사역 인근</span></p>
                                                <p>신사역 8번 출구 도보로 5분이내 거리에 위치한 조용하고 깨끗한 신사 원룸 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58dc9b273a4e765a6254d41a"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/aplus.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>에이플러스 리빙텔</h3>
                                                <p><span className="school">연세대, 이화여대</span><span className="line2">호선 신촌역 인근</span>
                                                </p>
                                                <p>신촌역 5분거리에 위치한 에이플러스 리빙텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/590065918312279d18f7b898"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/eden_ss.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>에덴고시원 성신여대점</h3>
                                                <p><span className="school">성신여대</span><span className="line4">호선 성신여대역 인근</span>
                                                </p>
                                                <p>성신여대역 도보 5분거리 에덴고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58e207be1e0daa8b3bc0f7a1"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/sohojongro.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>소호 종로 고시원</h3>
                                                <p><span className="line1">호선 종각역 인근</span></p>
                                                <p>종각역 1번 출구에서 도보 3분거리에 위치한 소호종로고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58db4da13a4e765a6254d408"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/gyoung.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>근영 고시텔 (여성전용)</h3>
                                                <p><span className="school">경희대, 외대</span><span className="line1">호선 회기역 인근</span>
                                                </p>
                                                <p>&#9679;여성전용&#9679; 회기역 1번 출구 1분거리 근영 고시텔니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58d0fe593a4e765a6254d3c7"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/fordream.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>꿈을 향한 고시텔</h3>
                                                <p><span className="school">성균관대</span><span
                                                    className="line4">호선 혜화역 인근</span></p>
                                                <p>혜화역 4번출구 도보 3분거리에 위치한 꿈을향한고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58049a8668ec91e2220004ba"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/elete_hansung.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>엘리트 리빙텔 한성대점</h3>
                                                <p><span className="school">한성대학교</span><span className="line4">호선 한성대입구역 인근</span>
                                                </p>
                                                <p>4호선 한성대역 7번출구에서 도보1분거리에 위치한 엘리트리빙텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58c0c2003a4e765a6254d330"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/snsdgosi.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>소호리빙텔 을지로 3가점(여성전용)</h3>
                                                <p><span className="line2" /><span
                                                    className="line3">호선 을지로 3가역 인근</span></p>
                                                <p>&#9679;여성전용&#9679; 을지로 3가역 7번출구에서 도보1분거리에 위치해 있습니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5e42"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/feelgosi.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>필 고시텔</h3>
                                                <p><span className="school">한양대</span><span
                                                    className="line2" /><span className="line5">호선 왕십리역 인근</span>
                                                </p>
                                                <p>왕십리역/한양대 정문에서 3~4분거리에 위치한 필 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/589d5a4a1f3247fb36581adf"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/citile.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>씨틸하우스 양재점</h3>
                                                <p><span className="line3">호선 양재역 인근</span></p>
                                                <p>3호선 양재역 4번출구에서 도보 5분거리에 위치한 씨틸하우스 양재점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="list_slide">
                        <ul className="list_banner">
                            <li className="banner_page">
                                <ul>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5de6"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/plushouse.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>플러스하우스 영등포점</h3>
                                                <p><span className="line1">호선 영등포역 인근</span></p>
                                                <p>영등포역 도보 5분 살기 좋은 생활공간 플러스하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/581af780b867a9b02a8db624"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/euddeum.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>으뜸 고시텔</h3>
                                                <p><span className="school">성균관대</span><span
                                                    className="line4">호선 혜화역 인근</span></p>
                                                <p>혜화역 4번출구 성균관대학교 근처에 위치한 으뜸 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58ff38e8102849c910809bd7"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/coaliving.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코아 리빙텔 성신여대점 (여성전용)</h3>
                                                <p><span className="school">성신여대</span><span className="line4">호선 성신여대역 인근</span>
                                                </p>
                                                <p>&#9679;여성전용&#9679; 성신여대역 도보 2분 코아 리빙텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/598417f508b3e09145b80d72"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/miraegosi.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>미래 고시텔 (여성전용)</h3>
                                                <p><span className="school">이화여대</span><span
                                                    className="line2">호선 이대역 인근</span></p>
                                                <p>&#9679;여성전용&#9679; 이대역 5분거리에 위치한 미래 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59841d5b08b3e09145b80d73"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/ceogosi.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>CEO 고시원</h3>
                                                <p><span className="line2">호선 잠실새내역 인근</span></p>
                                                <p>잠실새내역 도보 5분 거리에 있는 CEO 고시원입니다..</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5eae"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/cocohongik.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코 리빙텔 홍대점</h3>
                                                <p><span className="line2">호선 홍대입구역 인근</span></p>
                                                <p>2호선/공항철도 홍대역 도보5분거리내에 위치한 코코리빙텔 홍대점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5f2b"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/zionvile.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>자이언빌</h3>
                                                <p><span className="school">이화여대</span><span
                                                    className="line2">호선 이대역 인근</span></p>
                                                <p>이대역 5분거리에 위치한 자이언빌입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/5891a6d91f3247fb3658199d"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/hanrim.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>한림 고시원</h3>
                                                <p><span className="school">서울대</span><span
                                                    className="line2">호선 신림역 인근</span></p>
                                                <p>신림역 대학동에 위치한 한림고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5d24"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/cocoseoul.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코리빙텔 서울대점</h3>
                                                <p><span className="school">서울대</span><span className="line2">호선 서울대입구역 인근</span>
                                                </p>
                                                <p>서울대입구역 도보 5분! 싱글족을 위한 보증금이 없는 월세 선불형의 신개념 주거공간</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5c9c"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/beakma.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>백마 고시텔 경희대점</h3>
                                                <p><span className="school">경희대</span><span
                                                    className="line1">호선 회기역 인근</span></p>
                                                <p>경희대 정문, 경희치대 1분 거리 백마 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59699a421723d15316e41b49"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/rodem.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>로뎀 고시원</h3>
                                                <p><span className="line6">호선 월곡역</span><span className="line4">호선 길음역 인근</span>
                                                </p>
                                                <p>월곡역 길음역 사이에 위치한 로뎀 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5d28"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_1.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>로얄홈 리빙텔</h3>
                                                <p><span className="school">폴리텍대 강서캠</span><span className="line5">호선 발산역, 우장산역 인근</span>
                                                </p>
                                                <p>우장산공원 인근에 위치한 로얄홈 리빙텔 입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="list_slide">
                        <ul className="list_banner">
                            <li className="banner_page">
                                <ul>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/598eaec0cbd916365b3c4510"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_3.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>드림 하우스</h3>
                                                <p><span className="line2" /><span
                                                    className="line8">호선 잠실역 인근</span></p>
                                                <p>★신축 오픈★ 잠실역 10번출구에서 도보 10분 거리에 위치해 있습니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/589d88011f3247fb36581b15"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_2.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>W레지던스 삼성병원점</h3>
                                                <p><span className="line3">호선 대청역 인근</span></p>
                                                <p>대청역 3번출구에서 15분거리에 위치한 W레지던스 삼성병원점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59a3a67f128434857c24d770"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_4.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>햇빛 고시원</h3>
                                                <p><span className="line7">호선 철산역 인근</span></p>
                                                <p>철산역 1번 출구 도보 1분 깔끔한 햇빛 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/597b0d41528cb3d25ee81524"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_5.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>싱글하우스 주안역점</h3>
                                                <p><span className="line1">호선 주안역 인근</span></p>
                                                <p>주안역에서 도보 8분거리에 있는 싱글하우스 주안역점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5ef4"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/solliving.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>솔 리빙텔</h3>
                                                <p><span className="line1">호선 종각역 인근</span></p>
                                                <p>종각역 12번출구/종각 젊음의 거리에 위치한 솔 리빙텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59b7965b25a1d4a80b2573d8"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_6.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>사당 굿스테이 원룸텔</h3>
                                                <p><span className="line4">호선 사당역, 이수역 인근</span></p>
                                                <p>사당역 도보 5분, 이수역 도보 10분 풀옵션 원룸텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5dfc"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_7.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>사과나무 리빙텔</h3>
                                                <p><span className="line5">호선 오목교역 인근</span></p>
                                                <p>5호선 오목교역 6번출구 바로 앞에 위치한 사과나무리빙텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59b76f1e83299b870b0f1ef3"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_8.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>애플 하우스</h3>
                                                <p><span className="line1">호선 노량진역 인근</span></p>
                                                <p>노량진 도보 10분 원룸텔, 공부방 애플 하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5ec6"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_9.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코레지던스 을지로점</h3>
                                                <p><span className="line2" /><span
                                                    className="line3">호선 을지로 3가역 인근</span></p>
                                                <p>을지로3가역 30초거리에 있는 조용하고 깨끗한 초역세권 고시원!</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5eee"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_10.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스마텔 고시원</h3>
                                                <p><span className="line4">호선 혜화역 인근</span></p>
                                                <p>혜화역 1번출구에서 1분거리에 위치한 스마텔 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58b42bf53a4e765a6254d310"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_11.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스위트 리빙텔 서초점</h3>
                                                <p><span className="line2">호선 서초역 인근</span></p>
                                                <p>서초역 2번출구에서 3분거리에 위치한 스위트 리빙텔 서초점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59ca11fbc226e25878940b13"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_12.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>우등 고시원</h3>
                                                <p><span className="line2">호선 서울대입구역 인근</span></p>
                                                <p>서울대입구역 8번출구에서 도보 5분거리에 위치한 우등 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="list_slide">
                        <ul className="list_banner">
                            <li className="banner_page">
                                <ul>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58cf9ad13a4e765a6254d3c4"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_15.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>드림리빙텔 장안점</h3>
                                                <p><span className="line5">호선 장한평역 인근</span></p>
                                                <p>장안동 사거리에 위치한 드림리빙텔 장안점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5e03"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_14.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>허브레지던스 잠실새내점</h3>
                                                <p><span className="line2">호선 잠실새내역, 종합운동장역 인근</span></p>
                                                <p>가격할인행사중@ 2호선 신천역과 9호선 종합운동장 사이에 있는 허브 레지던스 입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/59e57c76db630a6b70c98285"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_16.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>마이홈리빙텔 상도점</h3>
                                                <p><span className="line7">호선 상도역 인근</span></p>
                                                <p>상도역 2번출구 도보 5분거리에 위치한 마이홈리빙텔 상도점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/596886071723d15316e41b1f"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_17.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코리빙텔 상봉점</h3>
                                                <p><span className="jungang">선 망우역 인근</span></p>
                                                <p>망우역 1번 출구에서 도보 5분거리에 위치한 코코리빙텔 상봉점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/5a0a79721363f0de52716f61"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_18.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>올컴 고시원</h3>
                                                <p><span className="line3">호선 백석역 인근</span></p>
                                                <p> 백석역 6번 출구 도보 1분 거리에 위치한 올컴 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/5a1ccc15f93d4191382181b6"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_19.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>글로리아 원룸텔</h3>
                                                <p><span className="school">서울대</span><span className="line2">호선 서울대입구역 인근</span>
                                                </p>
                                                <p>서울대입구역 8번출구 도보 5분 글로리아 원룸텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5e2a"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_20.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스토리하우스 가락점</h3>
                                                <p><span className="line3">호선 경찰병원역, 가락시장역 인근</span></p>
                                                <p>경찰병원역 1번 출구에서 3~4분 거리에 위치한 스토리하우스 가락점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5f12"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_21.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>그린 고시원</h3>
                                                <p><span className="line7">호선 장승배기역 인근</span></p>
                                                <p>장승배기역 6번출구 바로앞에 위치한 그린 고시원 장승배기점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/5886e1a080a45d1b172457ac"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_22.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>리빙고시텔</h3>
                                                <p><span className="school">세종대</span><span className="line7">호선 어린이대공원역 인근</span>
                                                </p>
                                                <p>화양사거리에 위치한 리빙고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/58db0d803a4e765a6254d403"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dia_22.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>e-편한 고시원</h3>
                                                <p><span className="school">경희대</span><span
                                                    className="line1">호선 회기역 인근</span></p>
                                                <p>회기역 1번출구 5분거리에 위치한 e-편한 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/57fe101c48b3063022eb5e42"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/feelgosi.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>필 고시텔</h3>
                                                <p><span className="school">한양대</span><span
                                                    className="line2" /><span className="line5">호선 왕십리역 인근</span>
                                                </p>
                                                <p>왕십리역/한양대 정문에서 3~4분거리에 위치한 필 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.kosirock.co.kr/#!/main/kosiwon-view/589d5a4a1f3247fb36581adf"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/citile.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>씨틸하우스 양재점</h3>
                                                <p><span className="line3">호선 양재역 인근</span></p>
                                                <p>3호선 양재역 4번출구에서 도보 5분거리에 위치한 씨틸하우스 양재점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default DiaContainer;