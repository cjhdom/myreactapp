import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import PrevButton from './PrevButton';
import NextButton from './NextButton';

class MasterContainer extends Component {

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
            <div className="master">
                <h2>여긴 어때요?<span>마스터</span></h2>
                <Slider {...settings}>
                    <div className="list_slide">
                        <ul className="list_banner">
                            <li className="banner_page">
                                <ul>
                                    <li>
                                        <a ng-click="moveView('5922693b962608eb38211d0d', '다솔하우스 신천점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/dasolhouse.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>다솔 하우스</h3>
                                                <p><span className="line2">호선 잠실새내역 인근</span></p>
                                                <p>&#9679;2인실 보유&#9679; 깔끔한 원룸 다솔하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('58dc9cb13a4e765a6254d41c', '홍익 고시텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/hongik.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>홍익 고시텔</h3>
                                                <p><span className="school">홍익대학교</span><span
                                                    className="line6">호선 상수역 인근</span></p>
                                                <p>&#9679;홍대생 환영&#9679; 깔끔하고 위치좋은 홍익 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5e38', '대성 고시텔 (여성전용)')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/daesung.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>대성 고시텔 (여성전용)</h3>
                                                <p><span className="school">성신여대</span><span
                                                    className="line4">호선 성신여대역 인근</span></p>
                                                <p>&#9679;여성전용&#9679; 성신여대역 도보 3분 대성 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('58eb25661e0daa8b3bc0f8a4', '멀티하우스 종로점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/multy.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>멀티하우스 종로점</h3>
                                                <p><span className="line1"/><span className="line3"/><span
                                                    className="line5">호선 종로3가역 인근</span></p>
                                                <p>종로3가역 도보 1분에 위치한 멀티하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59facc2a18d14d5f6698ac86', '훼미리 레지던스 신촌점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_17.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>훼미리 레지던스 신촌점</h3>
                                                <p><span className="school">연세대학교</span><span
                                                    className="line2">호선 신촌역 인근</span></p>
                                                <p>연대정문 앞, 신촌역 1번출구 도보 7분거리에 있는 훼미리 레지던스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('598be5754ca2aa6e354aa21a', '해피하우스 대방점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/happydb.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>해피하우스 대방점</h3>
                                                <p><span className="line1">호선 대방역, 신길역 인근</span></p>
                                                <p>대방역, 신길역 도보 7분, 여의도 차량 10분 해피하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5994f3b9b14c10421b0b7f67', '힐탑 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/hilltop.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>힐탑 고시원</h3>
                                                <p><span className="line1"/><span className="line9">호선 노량진역 인근</span>
                                                </p>
                                                <p>노량진역, 장승배기역 사이에 있는 힐탑 고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('595de8251723d15316e4190c', '이삭 리빙텔 신촌점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/isak.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>이삭 리빙텔</h3>
                                                <p><span className="school">서강대학교</span><span
                                                    className="line2">호선 신촌역 인근</span></p>
                                                <p>신촌역 5분거리, 시강대학교 앞 이삭 리빙텔입니다.</p>
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
                                        <a ng-click="moveView('599b9a0b01a777cd39518785', '이삭 리빙텔 신촌점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_1.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>큰방 대학로 굿스테이</h3>
                                                <p><span className="school">가톨릭대 성신교정</span><span className="line4">호선 혜화역 인근</span>
                                                </p>
                                                <p>&#9679;2인실 보유&#9679; 깔끔한 원룸 큰방 굿스테이이입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('599bc28be34419363c5acdb4', '코코레지던스 약수역점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_2.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코레지던스 약수역점</h3>
                                                <p><span className="line3"/><span className="line6">호선 약수역 인근</span>
                                                </p>
                                                <p>약수역 도보 1분거리, 코코레지던스 약수역점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59a3a1552723e86f7cf47cad', '순남 고시텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_3.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>순남 고시텔</h3>
                                                <p><span className="school">안양대</span><span
                                                    className="line1">호선 안양역 인근</span></p>
                                                <p>안양역 1번 출구 도보 5분 깨끗한 순남 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5dfe', '스카이 고시텔 목동점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_4.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스카이 고시텔</h3>
                                                <p><span className="line5">호선 목동역 인근</span></p>
                                                <p>목동역과 등촌역 사이에 있는 스카이 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59b8feeb525f9f3f6a2b45f1', '참조운 고시텔 백석역점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_5.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>참조운 고시텔</h3>
                                                <p><span className="line3">호선 백석역 인근</span></p>
                                                <p>일산병원 옆 백석역 도보 10분 참조운 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5f86', '네오빌')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_6.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>네오빌</h3>
                                                <p><span className="school">경희대 국제캠</span><span
                                                    className="bundang">선 영통역 인근</span></p>
                                                <p>경희대학교 국제캠퍼스 바로 앞에 위치한 네오빌입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('58ae709d1f3247fb36581b94', '현대 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_7.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>현대 고시원</h3>
                                                <p><span className="line4"/><span className="line7">호선 이수역 인근</span>
                                                </p>
                                                <p>방배동 카페골목에 위치한 현대고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5f9e', '클라임 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_8.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>클라임 고시원</h3>
                                                <p><span className="line7">호선 신중동역, 부천시청역 인근</span></p>
                                                <p>신중동역, 부천시청역 사이에 있는 클라임 고시원입니다.</p>
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
                                        <a ng-click="moveView('59df07b9fbc2633f6b3c6c3c', '노블스 고시텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_9.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>노블스 고시텔</h3>
                                                <p><span className="line7">호선 부천시청역 인근</span></p>
                                                <p>부천시청역 3번출구 도보 3분거리에 위치한 노블스 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59df1f2e358b07516b474eef', '메종드빌 송파점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_10.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>메종드빌 송파점</h3>
                                                <p><span className="line8">호선 송파역 인근</span></p>
                                                <p>송파역 2번출구 도보 5분거리에 위치한 메종드빌 송파점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59defa2832c01b4a6b80df7e', '부천 아이비하우스')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_11.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>부천 아이비하우스</h3>
                                                <p><span className="school">부천대학교</span><span
                                                    className="line1">호선 부천역 인근</span></p>
                                                <p>부천대앞, 부천역 3번출구 도보 5분거리 아이비하우스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5f41', '스타원룸 리빙텔 홍대점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_12.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스타원룸 리빙텔 홍대점</h3>
                                                <p><span className="school">홍익대</span><span className="line2">호선 홍대입구역, 합정역 인근</span>
                                                </p>
                                                <p>홍대입구역 9번출구/합정역 3번출구/홍대거리에 위치한 스타원룸 리빙텔 홍대점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5d24', '코코리빙텔 서울대점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/cocoseoul.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코코리빙텔 서울대점</h3>
                                                <p><span className="school">서울대</span><span
                                                    className="line2">호선 서울대입구역 인근</span></p>
                                                <p>서울대입구역 도보 5분! 싱글족을 위한 보증금이 없는 월세 선불형의 신개념 주거공간</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5de6', '플러스하우스 영등포점')"
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
                                        <a ng-click="moveView('597b0d41528cb3d25ee81524', '싱글하우스 주안역점')"
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
                                        <a ng-click="moveView('59ca152dc226e25878940b14', '코엑스 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_14.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>코엑스 고시원</h3>
                                                <p><span className="line2">호선 삼성역 인근</span></p>
                                                <p>삼성역 7번 출구 도보 3분 코엑스 고시원입니다.</p>
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
                                        <a ng-click="moveView('59f02effbd3f18d230b6985f', '굿스테이 대방역점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_13.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>굿스테이 대방역점</h3>
                                                <p><span className="line1">호선 대방역</span><span
                                                    className="line7">호선 보라매역 인근</span></p>
                                                <p>&#9679;2인실 보유&#9679; 풀옵션 원룸텔 굿스테이 대방역점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('589f0f221f3247fb36581b22', '메이플하우스 서울대점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/mater_22.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>메이플하우스 서울대점</h3>
                                                <p><span className="school">서울대</span><span
                                                    className="line2">호선 서울대입구역 인근</span></p>
                                                <p>서울대입구역 2번출구 청룡산쪽에 위치한 메이플하우스 서울대점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59e71703f0c8de7b16cf0ba4', '하이빌 고시텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_16.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>하이빌 고시텔</h3>
                                                <p><span className="line1">호선 노량진역</span><span
                                                    className="line7">호선 상도역 인근</span></p>
                                                <p>노량진역 3번 출구, 상도역 3번 출구 도보 7분 거리에 위치한 하이빌 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59f6c1ce18d14d5f6698abb2', '양재 굿스테이')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_18.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>양재 굿스테이</h3>
                                                <p><span className="line3">호선 양재역 인근</span></p>
                                                <p>★2017년 11월 신설오픈★양재역5번출구 도보 3분 거리</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5eba', '소호리빙텔 정동점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_19.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>소호리빙텔 정동점</h3>
                                                <p><span className="line5">호선 서대문역 인근</span></p>
                                                <p>서대문역 도보 5분 거리에 위치한 소호리빙텔 정동점입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5a0a479f32ad342050d6c657', '파인리빙텔 경희2호점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_20.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>파인리빙텔 경희2호점</h3>
                                                <p><span className="school">경희대학교</span><span
                                                    className="line1">호선 회기역 인근</span></p>
                                                <p>★첫달 3만원 할인 이벤트 ★ 경희대학교와 도보 3분 거리에 위치해 있습니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5a1e7caaf6326d9d383c5ffe', '보보 레지던스 테헤란로점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_21.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>보보 레지던스 테헤란로점</h3>
                                                <p><span className="line2">호선</span><span
                                                    className="bundang">선 선릉역 인근</span></p>
                                                <p>선릉역 10번 출구 도보 5거리에 있는 보보레지던스입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5a25169a8bc5b1ef41177fe2', '리빙고시텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_23.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>리빙고시텔</h3>
                                                <p><span className="line2"/><span
                                                    className="line5">호선 영등포구청역 인근</span></p>
                                                <p>영등포구청역 6번출구 에서 도보 5분 거리 리빙고시텔입니다.</p>
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
                                        <a ng-click="moveView('57fe101c48b3063022eb5e79', '허브 레지던스 교대점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_24.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>허브 레지던스 교대점</h3>
                                                <p><span className="school">교대</span><span className="line2"/><span
                                                    className="line3">호선 교대역 인근</span></p>
                                                <p>교대역 6번출구에서 1분거리 풀옵션 원룸텔!</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5a3a639ecd93abf249ad6cfc', '내자리 원룸텔')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_25.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>내자리 원룸텔</h3>
                                                <p><span className="school">서울대</span><span
                                                    className="line2">호선 서울대입구역 인근</span></p>
                                                <p>★신축★2017년 11월 OPEN! 풀옵션 원룸텔 내자리 원룸텔!</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('5a24fc784d07bbff4160aff7', '휴식 사가정 본점')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_26.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>휴식 사가정 본점</h3>
                                                <p><span className="school">서일대</span><span
                                                    className="line7">호선 사가정역 인근</span></p>
                                                <p>★12월 신설오픈★ 사가정역 4번출구 도보 1분 풀옵션 레지던스</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5dfe', '스카이 고시텔 목동점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_4.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>스카이 고시텔</h3>
                                                <p><span className="line5">호선 목동역 인근</span></p>
                                                <p>목동역과 등촌역 사이에 있는 스카이 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('59b8feeb525f9f3f6a2b45f1', '참조운 고시텔 백석역점')"
                                           target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_5.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>참조운 고시텔</h3>
                                                <p><span className="line3">호선 백석역 인근</span></p>
                                                <p>일산병원 옆 백석역 도보 10분 참조운 고시텔입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5f86', '네오빌')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_6.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>네오빌</h3>
                                                <p><span className="school">경희대 국제캠</span><span
                                                    className="bundang">선 영통역 인근</span></p>
                                                <p>경희대학교 국제캠퍼스 바로 앞에 위치한 네오빌입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('58ae709d1f3247fb36581b94', '현대 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_7.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>현대 고시원</h3>
                                                <p><span className="line4"/><span className="line7">호선 이수역 인근</span>
                                                </p>
                                                <p>방배동 카페골목에 위치한 현대고시원입니다.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a ng-click="moveView('57fe101c48b3063022eb5f9e', '클라임 고시원')" target="_blank">
                                            <div className="thumbnail_top">
                                                <img alt="고시원 사진" src="/img/master_8.jpg"/>
                                            </div>
                                            <div className="thumbnail_bottom">
                                                <h3>클라임 고시원</h3>
                                                <p><span className="line7">호선 신중동역, 부천시청역 인근</span></p>
                                                <p>신중동역, 부천시청역 사이에 있는 클라임 고시원입니다.</p>
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

export default MasterContainer;