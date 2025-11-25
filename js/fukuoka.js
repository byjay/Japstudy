/**
 * fukuoka.js - 후쿠오카 여행 일정 관리 (Ultimate Rich Data Ver.)
 * * [업데이트 사항]
 * 1. 주변 맛집/명소(Recommend) 데이터 대폭 추가
 * 2. '꿀팁(Tips)' 섹션 추가
 * 3. 리스트 클릭 시 지도 자동 포커싱(PanTo) 기능 추가
 * 4. 내 위치 기반 길찾기 UI 개선
 */

// --- 1. 초고밀도 여행 데이터베이스 ---
const placesDB = {
    // ================= [ 1일차 ] =================
    'airport_in': {
        name: '후쿠오카 공항 (도착)',
        lat: 33.5859, lng: 130.4507,
        type: 'transport',
        rating: 4.2,
        desc: '후쿠오카 여행의 시작점. 시내 접근성 세계 최고.',
        tips: '공항에서 시내 나갈 때, 짐이 많다면 택시도 추천 (하카타역까지 약 1,500엔). 지하철은 국내선 터미널로 셔틀 타고 이동해야 함.',
        info: [
            { label: '지하철', val: '무료 셔틀 → 국내선 이동 → 지하철 탑승 (260엔)' },
            { label: '버스', val: '국제선 2번 승강장 → 하카타역 직행 (270엔)' },
            { label: '편의점', val: '세븐일레븐 (도착 로비 1층)' }
        ],
        photos: [
            'https://placehold.co/600x400/2563eb/white?text=Airport+Arrival',
            'https://placehold.co/600x400/orange/white?text=Shuttle+Bus',
            'https://placehold.co/600x400/green/white?text=Subway+Pass',
            'https://placehold.co/600x400/gray/white?text=Taxi+Stand'
        ]
    },
    'hotel_checkin': {
        name: '몬탄 하카타 (숙소)',
        lat: 33.5878, lng: 130.4285,
        type: 'hotel',
        rating: 4.5,
        desc: '가족 여행객에게 최적화된 넓고 쾌적한 호스텔형 호텔.',
        tips: '1층 라운지에서 무료 커피 제공. 자전거 대여 가능(유료). 체크인 전/후 짐 보관 서비스 무료.',
        info: [
            { label: '체크인', val: '15:00 (짐 보관은 언제나 가능)' },
            { label: '조식', val: '07:00 ~ 09:30 (간편식 뷔페)' },
            { label: '주변', val: '도보 3분 거리 로손, 패밀리마트 있음' }
        ],
        // 주변 추천 장소 데이터 추가
        recommend: [
            { name: '코메다 커피', type: '카페', desc: '아침 모닝세트가 유명한 카페' },
            { name: '서니(Sunny) 마트', type: '마트', desc: '24시간 대형 마트 (간식 사기 좋음)' }
        ],
        photos: [
            'https://placehold.co/600x400/333/white?text=Montan+Exterior',
            'https://placehold.co/600x400/555/white?text=Family+Room',
            'https://placehold.co/600x400/777/white?text=Lounge+Area',
            'https://placehold.co/600x400/888/white?text=Breakfast'
        ]
    },
    'lunch_hakata': {
        name: '하카타 우동 하가쿠레',
        lat: 33.5855, lng: 130.4250,
        type: 'food',
        rating: 4.4,
        desc: '백종원도 다녀간 식감이 예술인 우동 맛집.',
        tips: '평일 점심에도 줄이 깁니다. 11:30 오픈런 추천. 회전율은 빠른 편입니다.',
        menus: [
            { name: '고기 우동 (니쿠)', price: '650엔', desc: '달달한 고기 육수가 일품' },
            { name: '우엉튀김 (고보텐)', price: '500엔', desc: '바삭하고 고소한 필수 토핑' },
            { name: '유부초밥', price: '200엔', desc: '우동 국물과 찰떡궁합' }
        ],
        recommend: [
            { name: '하카타역 크로와상', type: '간식', desc: '일 포르노 델 미뇽 (줄 서서 먹는 집)' },
            { name: 'Rec Coffee', type: '카페', desc: '하카타역 마루이 6층 뷰 맛집' }
        ],
        reviews: [
            { user: '면발요정', text: '지금까지 먹던 우동과 차원이 다름. 부들부들함.', score: 5 },
            { user: '대기1시간', text: '기다린 보람이 있다. 국물이 끝내줌.', score: 4.5 }
        ],
        photos: [
            'https://placehold.co/600x400/orange/white?text=Niku+Udon',
            'https://placehold.co/600x400/yellow/black?text=Gobo+Tempura',
            'https://placehold.co/600x400/white/black?text=Store+Front',
            'https://placehold.co/600x400/brown/white?text=Menu+Board'
        ]
    },
    'canal_city': {
        name: '캐널시티 하카타',
        lat: 33.5898, lng: 130.4108,
        type: 'tour',
        rating: 4.3,
        desc: '쇼핑, 엔터테인먼트, 맛집이 모인 복합 문화 공간.',
        tips: '분수쇼는 B1층 선플라자 스테이지에서 가장 잘 보입니다. 저녁 8시 이후 3D 매핑 쇼 추천!',
        info: [
            { label: '분수쇼', val: '매시 정각 / 30분 (야간 조명쇼 포함)' },
            { label: '쇼핑', val: '프랑프랑(인테리어), 디즈니, 무인양품, 유니클로' },
            { label: '면세', val: '5,500엔 이상 구매 시 면세 카운터 이용' }
        ],
        recommend: [
            { name: '라멘 스타디움', type: '식당', desc: '5층, 전국의 유명 라멘집 집결' },
            { name: '긴타코', type: '간식', desc: '겉바속촉 타코야키 맛집' }
        ],
        photos: [
            'https://placehold.co/600x400/purple/white?text=Fountain+Show',
            'https://placehold.co/600x400/red/white?text=Canal+City+View',
            'https://placehold.co/600x400/blue/white?text=Shopping+Mall',
            'https://placehold.co/600x400/green/white?text=Ramen+Stadium'
        ]
    },
    'dinner_motsu': {
        name: '모츠나베 라쿠텐치 (하카타점)',
        lat: 33.5905, lng: 130.4200,
        type: 'food',
        rating: 4.2,
        desc: '후쿠오카 3대 명물, 부추 산더미 곱창전골.',
        tips: '저녁 피크타임 예약 필수. 다 먹고 짬뽕면 추가는 국룰입니다. 국물이 짜지면 육수 추가 요청하세요.',
        menus: [
            { name: '모츠나베 코스', price: '2,600엔~', desc: '곱창전골 + 두부 + 짬뽕면' },
            { name: '스모츠 (곱창초무침)', price: '세트포함', desc: '맥주 안주로 최고' },
            { name: '생맥주/하이볼', price: '580엔~', desc: '시원한 주류 필수' }
        ],
        photos: [
            'https://placehold.co/600x400/green/white?text=Motsunabe+Visual',
            'https://placehold.co/600x400/white/black?text=Chive+Mountain',
            'https://placehold.co/600x400/yellow/black?text=Beer+Cheers',
            'https://placehold.co/600x400/red/white?text=Rakutenchi+Sign'
        ]
    },

    // ================= [ 2일차 ] =================
    'tour_meet': {
        name: '🚩 투어 미팅 (오리엔탈 호텔 앞)',
        lat: 33.5902, lng: 130.4225,
        type: 'transport',
        rating: 5.0,
        desc: '버스 투어 집결 장소. 늦으면 버스는 떠납니다!',
        tips: '하카타역 "치쿠시구치(Chikushi Exit)"로 나와야 가깝습니다. 로손 편의점 앞에서 가이드가 깃발 들고 있음.',
        photos: [
            'https://placehold.co/600x400/red/white?text=Meeting+Point',
            'https://placehold.co/600x400/blue/white?text=Oriental+Hotel',
            'https://placehold.co/600x400/gray/white?text=Bus+Waiting',
            'https://placehold.co/600x400/green/white?text=Chikushi+Exit'
        ]
    },
    'dazaifu': {
        name: '다자이후 텐만구',
        lat: 33.5215, lng: 130.5348,
        type: 'tour',
        rating: 4.6,
        desc: '학문의 신을 모시는 신사. 합격 기원 명소.',
        tips: '신사 입구 "소 동상"의 뿔과 머리를 만지면 머리가 좋아진대요. 스타벅스 컨셉스토어 앞에서 사진 필수!',
        menus: [
            { name: '우메가에 모치', price: '130엔', desc: '따끈한 매화 찹쌀떡' },
            { name: '스타벅스', price: '음료값', desc: '나무를 엮어 만든 독특한 건축' }
        ],
        recommend: [
            { name: '카사노야', type: '카페', desc: '분위기 좋은 전통 찻집' },
            { name: '이치란 라멘', type: '식당', desc: '다자이후 한정 합격 라멘(그릇이 5각형)' }
        ],
        photos: [
            'https://placehold.co/600x400/red/white?text=Dazaifu+Main',
            'https://placehold.co/600x400/brown/white?text=Starbucks+Concept',
            'https://placehold.co/600x400/white/red?text=Umegae+Mochi',
            'https://placehold.co/600x400/green/white?text=Ox+Statue'
        ]
    },
    'yufuin': {
        name: '유후인 (긴린코 호수)',
        lat: 33.2655, lng: 131.3600,
        type: 'tour',
        rating: 4.8,
        desc: '동화 속에 들어온 듯한 온천 마을과 신비로운 호수.',
        tips: '긴린코 호수는 새벽이나 아침에 물안개가 껴서 가장 예쁩니다. 상점가는 5시면 문을 닫으니 서두르세요.',
        menus: [
            { name: '금상 고로케', price: '200엔', desc: '겉바속촉 고기 감자 고로케' },
            { name: '미르히 치즈케이크', price: '150엔', desc: '떠먹는 따뜻한 치즈케이크' },
            { name: '비스피크 롤케익', price: '1,500엔', desc: '예약 없으면 사기 힘든 롤케익' }
        ],
        recommend: [
            { name: '플로랄 빌리지', type: '구경', desc: '해리포터 느낌의 아기자기한 마을' },
            { name: '스누피 찻집', type: '카페', desc: '스누피 굿즈와 귀여운 디저트' }
        ],
        photos: [
            'https://placehold.co/600x400/green/white?text=Kinrin+Lake',
            'https://placehold.co/600x400/orange/white?text=Yufuin+Street',
            'https://placehold.co/600x400/yellow/black?text=Gold+Croquette',
            'https://placehold.co/600x400/brown/white?text=Floral+Village'
        ]
    },
    'beppu': {
        name: '벳푸 가마도 지옥',
        lat: 33.3150, lng: 131.4750,
        type: 'tour',
        rating: 4.3,
        desc: '땅에서 증기가 뿜어져 나오는 지옥 온천 순례.',
        tips: '족욕 체험 공간이 있습니다. 수건을 미리 챙겨가면 좋아요(대여료 200엔 절약). 담배쇼 아저씨 설명이 재밌습니다.',
        menus: [
            { name: '온천 달걀', price: '70엔', desc: '유황 향이 밴 구운 달걀' },
            { name: '라무네 (사이다)', price: '200엔', desc: '구슬을 눌러 따는 재미' },
            { name: '악어 지옥', price: '입장료', desc: '근처에 악어를 키우는 온천도 있음' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Blue+Hell',
            'https://placehold.co/600x400/red/white?text=Red+Hell',
            'https://placehold.co/600x400/white/orange?text=Egg+&+Cider',
            'https://placehold.co/600x400/gray/white?text=Foot+Bath'
        ]
    },

    // ================= [ 3일차 ] =================
    'ohori': {
        name: '오호리 공원',
        lat: 33.5861, lng: 130.3764,
        type: 'tour',
        rating: 4.7,
        desc: '도심 속 거대한 호수 공원. 현지인들의 힐링 스팟.',
        tips: '호수 중앙의 섬들을 다리로 건널 수 있습니다. 스타벅스 창가 자리는 경쟁이 치열해요. 자전거 대여 추천.',
        info: [
            { label: '입장료', val: '무료 (일본 정원은 250엔)' },
            { label: '오리배', val: '30분 1,000엔 (가족끼리 타기 좋음)' },
            { label: '카페', val: '스타벅스, 앤 로컬스(전통차)' }
        ],
        recommend: [
            { name: '후쿠오카 미술관', type: '문화', desc: '공원 내 위치. 쿠사마 야요이 호박 있음' },
            { name: '마이즈루 공원', type: '산책', desc: '바로 옆, 후쿠오카 성터가 있는 곳' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Ohori+Lake+View',
            'https://placehold.co/600x400/green/white?text=Park+Bridge',
            'https://placehold.co/600x400/brown/white?text=Starbucks+Park',
            'https://placehold.co/600x400/yellow/black?text=Pumpkin+Statue'
        ]
    },
    'lunch_sushi': {
        name: '효탄 스시 (텐진 솔라리아점)',
        lat: 33.5900, lng: 130.3980,
        type: 'food',
        rating: 4.5,
        desc: '텐진 최고의 가성비 회전 초밥 맛집.',
        tips: '본점(세트 위주)보다 솔라리아점(회전초밥)이 가족끼리 골라 먹기 좋습니다. 점심시간 피해서 2시쯤 가세요.',
        menus: [
            { name: '오늘의 특선', price: '380엔~', desc: '그날 가장 신선한 생선' },
            { name: '활고등어 초밥', price: '480엔', desc: '비리지 않고 고소함 끝판왕' },
            { name: '구운 붕장어', price: '580엔', desc: '한 마리가 통째로 올라감' }
        ],
        recommend: [
            { name: '베이크(BAKE)', type: '디저트', desc: '텐진 지하상가 치즈타르트 맛집' },
            { name: '링고(RINGO)', type: '디저트', desc: '애플파이 전문점 (줄 서서 구매)' }
        ],
        photos: [
            'https://placehold.co/600x400/orange/white?text=Sushi+Belt',
            'https://placehold.co/600x400/red/white?text=Fresh+Tuna',
            'https://placehold.co/600x400/yellow/black?text=Anago+Sushi',
            'https://placehold.co/600x400/white/black?text=Store+Entrance'
        ]
    },
    'momochi': {
        name: '모모치 해변 & 후쿠오카 타워',
        lat: 33.5932, lng: 130.3515,
        type: 'tour',
        rating: 4.4,
        desc: '이국적인 인공 해변과 후쿠오카의 랜드마크.',
        tips: '해질녘(일몰) 30분 전에 가세요. 타워 야경과 해변의 석양을 동시에 볼 수 있는 골든타임입니다.',
        info: [
            { label: '타워 요금', val: '성인 800엔 (여권 제시시 20% 할인)' },
            { label: '운영시간', val: '09:30 ~ 22:00 (입장 마감 21:30)' },
            { label: '포토존', val: '해변가 예식장(마리존) 배경으로 사진 필수' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Fukuoka+Tower+Night',
            'https://placehold.co/600x400/orange/white?text=Momochi+Sunset',
            'https://placehold.co/600x400/white/blue?text=Marizon+Wedding',
            'https://placehold.co/600x400/black/white?text=Observation+Deck'
        ]
    },
    'dinner_yakiniku': {
        name: '야키니쿠 바쿠로 (하카타)',
        lat: 33.5920, lng: 130.4150,
        type: 'food',
        rating: 4.8,
        desc: '자체 농장에서 키운 최상급 와규를 합리적인 가격에.',
        tips: '예약 필수입니다. "메가 죠" 같은 특수 부위는 일찍 품절되니 미리 주문하세요. 한국어 메뉴판 있습니다.',
        menus: [
            { name: '바쿠로 모듬', price: '6,000엔', desc: '다양한 부위를 한 번에 (2~3인분)' },
            { name: '특상 우설', price: '1,500엔', desc: '두툼하고 쫄깃한 식감' },
            { name: '스키야키 풍 로스', price: '1,200엔', desc: '계란 노른자에 찍어 먹는 고기' }
        ],
        photos: [
            'https://placehold.co/600x400/red/white?text=Premium+Wagyu',
            'https://placehold.co/600x400/brown/white?text=Charcoal+Grill',
            'https://placehold.co/600x400/white/black?text=Menu+Set',
            'https://placehold.co/600x400/black/white?text=Luxury+Interior'
        ]
    },

    // ================= [ 4일차 ] =================
    'airport_out': {
        name: '후쿠오카 공항 (귀국)',
        lat: 33.5859, lng: 130.4507,
        type: 'transport',
        rating: 4.0,
        desc: '아쉬운 귀국. 마지막 쇼핑 찬스.',
        tips: '보안검색 후 면세점 줄이 깁니다. "로이즈 초콜릿", "히요코 만쥬"는 보일 때 바로 사세요. 동전 남은 건 "가챠(뽑기)"로 탕진 추천.',
        photos: [
            'https://placehold.co/600x400/gray/white?text=Departure+Gate',
            'https://placehold.co/600x400/blue/white?text=Duty+Free+Shop',
            'https://placehold.co/600x400/yellow/red?text=Hiyoko+Manju',
            'https://placehold.co/600x400/white/black?text=Goodbye+Japan'
        ]
    }
};

const schedule = {
    1: { title: '1일차: 도착 & 먹방', items: ['airport_in', 'hotel_checkin', 'lunch_hakata', 'canal_city', 'dinner_motsu'] },
    2: { title: '2일차: 버스투어', items: ['tour_meet', 'dazaifu', 'yufuin', 'beppu'] },
    3: { title: '3일차: 시내 관광', items: ['ohori', 'lunch_sushi', 'momochi', 'dinner_yakiniku'] },
    4: { title: '4일차: 귀국', items: ['hotel_checkin', 'airport_out'] }
};

let activeDay = 1;
let map, markers = [];
let directionsService, directionsRenderer;

// --- 2. 시스템 초기화 ---

function initFukuokaTrip() {
    console.log('Fukuoka Trip: Ultimate Version Initialized');
    renderTabs();
    renderSchedule(activeDay);

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initMap();
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer({ map: map, suppressMarkers: true });
    } else {
        console.warn('Google Maps API not loaded.');
    }
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    map = new google.maps.Map(mapElement, {
        center: { lat: 33.5902, lng: 130.4207 },
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        styles: [ // 지도 스타일 조금 더 깔끔하게
            { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] } 
        ]
    });
    
    updateMarkers(activeDay);
}

// --- 3. UI 렌더링 ---

function renderTabs() {
    const container = document.getElementById('day-tabs');
    if (!container) return;

    container.innerHTML = Object.keys(schedule).map(day =>
        `<button onclick="changeFukuokaDay(${day})" class="day-tab px-4 py-2 rounded-full border shadow-sm text-sm font-bold ${day == activeDay ? 'bg-red-500 text-white border-red-600 transform scale-105' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'} transition-all duration-200">
            ${schedule[day].title}
        </button>`
    ).join('');
}

function changeFukuokaDay(day) {
    activeDay = day;
    renderTabs();
    renderSchedule(day);
    if (map) updateMarkers(day);
    // 탭 변경 시 지도 경로 초기화
    if(directionsRenderer) directionsRenderer.setDirections({routes: []});
}

function updateMarkers(day) {
    if (!map || typeof google === 'undefined') return;

    markers.forEach(m => m.setMap(null));
    markers = [];
    const bounds = new google.maps.LatLngBounds();

    schedule[day].items.forEach((key, idx) => {
        const item = placesDB[key];
        if(!item) return;

        const marker = new google.maps.Marker({
            position: { lat: item.lat, lng: item.lng },
            map: map,
            label: { text: (idx + 1).toString(), color: "white", fontWeight: "bold" },
            title: item.name,
            animation: google.maps.Animation.DROP
        });

        marker.addListener('click', () => {
            // 마커 클릭 시 리스트 해당 항목 열기
            const listElement = document.getElementById(`place-item-${idx}`);
            if(listElement) {
                listElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const panel = document.getElementById(`detail-${idx}`);
                if (panel && panel.classList.contains('hidden')) {
                    toggleDetail(idx, item.lat, item.lng);
                }
            }
        });

        markers.push(marker);
        bounds.extend(marker.getPosition());
    });

    if (markers.length > 0) {
        map.fitBounds(bounds);
        // 줌이 너무 당겨지지 않게 조정
        const listener = google.maps.event.addListener(map, "idle", () => { 
            if (map.getZoom() > 15) map.setZoom(15); 
            google.maps.event.removeListener(listener); 
        });
    }
}

function renderSchedule(day) {
    const container = document.getElementById('itinerary-content');
    if (!container) return;

    container.innerHTML = '';

    schedule[day].items.forEach((key, idx) => {
        const item = placesDB[key];
        if (!item) return;

        let iconClass = 'fa-map-marker-alt';
        let typeColor = 'text-gray-400';
        if (item.type === 'food') { iconClass = 'fa-utensils'; typeColor = 'text-orange-500'; }
        if (item.type === 'hotel') { iconClass = 'fa-bed'; typeColor = 'text-blue-500'; }
        if (item.type === 'transport') { iconClass = 'fa-plane'; typeColor = 'text-purple-500'; }
        if (item.type === 'tour') { iconClass = 'fa-camera'; typeColor = 'text-green-500'; }

        const div = document.createElement('div');
        div.id = `place-item-${idx}`;
        div.className = "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg mb-4";
        
        div.innerHTML = `
            <div class="click-trigger p-4 cursor-pointer flex items-center justify-between bg-white hover:bg-gray-50 transition" onclick="toggleDetail(${idx}, ${item.lat}, ${item.lng})">
                <div class="flex items-center gap-4 overflow-hidden">
                    <span class="flex-none w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg border border-red-100 shadow-sm">
                        ${idx + 1}
                    </span>
                    <div class="flex flex-col min-w-0">
                        <h4 class="font-bold text-gray-800 text-lg truncate">${item.name}</h4>
                        <span class="text-sm text-gray-500 truncate flex items-center gap-1">
                            <i class="fas ${iconClass} ${typeColor}"></i> ${item.desc}
                        </span>
                    </div>
                </div>
                <div class="flex-none ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                     <i id="chevron-${idx}" class="fas fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                </div>
            </div>
            
            <div id="detail-${idx}" class="hidden border-t border-gray-100 bg-gray-50">
                ${generateDetailHTML(item, idx)}
            </div>
        `;
        
        container.appendChild(div);
    });
}

// --- 4. 상세 콘텐츠 생성 (비주얼 & 정보 강화) ---
function generateDetailHTML(item, idx) {
    // 1. 별점
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="fas fa-star ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'} text-xs"></i>`
    ).join('');

    // 2. 사진 그리드 (4장)
    let photosHTML = '';
    if (item.photos && item.photos.length > 0) {
        photosHTML = `<div class="grid grid-cols-2 gap-1.5 mb-4 px-4 pt-4">
            ${item.photos.slice(0, 4).map(url => 
                `<div class="aspect-video rounded-lg overflow-hidden shadow-sm relative group">
                    <img src="${url}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="사진">
                </div>`
            ).join('')}
        </div>`;
    }

    // 3. 꿀팁 박스 (NEW)
    let tipsHTML = '';
    if (item.tips) {
        tipsHTML = `
            <div class="px-4 mb-4">
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg shadow-sm">
                    <div class="flex items-start gap-2">
                        <i class="fas fa-lightbulb text-yellow-500 mt-1"></i>
                        <div>
                            <p class="text-xs font-bold text-yellow-800 mb-1">여행 천재의 꿀팁</p>
                            <p class="text-sm text-gray-700 leading-snug">${item.tips}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 4. 정보 테이블 (메뉴 or 기본정보)
    let tableHTML = '';
    if (item.menus) {
        const rows = item.menus.map(m => `
            <tr class="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td class="py-2.5 pl-3 text-sm font-medium text-gray-700">${m.name}</td>
                <td class="py-2.5 pr-3 text-right text-sm font-bold text-red-600 whitespace-nowrap">${m.price}</td>
            </tr>
            <tr class="last:border-0"><td colspan="2" class="pb-2 pl-3 text-xs text-gray-500">${m.desc}</td></tr>
        `).join('');
        tableHTML = `
            <div class="px-4 mb-4">
                <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div class="bg-gray-50 px-3 py-2 border-b border-gray-100 flex items-center gap-2">
                        <i class="fas fa-utensils text-orange-400"></i> <span class="text-xs font-bold text-gray-600">추천 메뉴</span>
                    </div>
                    <table class="w-full">${rows}</table>
                </div>
            </div>`;
    } else if (item.info) {
        const rows = item.info.map(info => `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2.5 pl-3 text-xs font-bold text-gray-500 w-20 bg-gray-50 border-r border-gray-100">${info.label}</td>
                <td class="py-2.5 pl-3 text-sm text-gray-700">${info.val}</td>
            </tr>
        `).join('');
        tableHTML = `
            <div class="px-4 mb-4">
                <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                     <div class="bg-gray-50 px-3 py-2 border-b border-gray-100 flex items-center gap-2">
                        <i class="fas fa-info-circle text-blue-400"></i> <span class="text-xs font-bold text-gray-600">이용 정보</span>
                    </div>
                    <table class="w-full">${rows}</table>
                </div>
            </div>`;
    }

    // 5. 주변 추천 장소 (NEW)
    let recommendHTML = '';
    if (item.recommend && item.recommend.length > 0) {
        const items = item.recommend.map(rec => `
            <div class="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    ${rec.type}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${rec.name}</p>
                    <p class="text-xs text-gray-500 truncate">${rec.desc}</p>
                </div>
            </div>
        `).join('');
        recommendHTML = `
            <div class="px-4 mb-4">
                <h5 class="text-xs font-bold text-gray-500 mb-2 pl-1"><i class="fas fa-map-marked text-indigo-500"></i> 놓치면 손해! 주변 핫플</h5>
                <div class="grid grid-cols-1 gap-2">
                    ${items}
                </div>
            </div>
        `;
    }

    // 6. 길찾기 섹션 (강화됨)
    const directionsHTML = `
        <div class="px-4 mb-4">
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-md p-4 text-white">
                <div class="flex justify-between items-center mb-3">
                    <h5 class="font-bold text-sm flex items-center gap-2">
                        <i class="fas fa-route"></i> 내 위치에서 가는 법
                    </h5>
                    <span class="text-[10px] bg-blue-700 px-2 py-1 rounded-full">실시간 검색</span>
                </div>
                <button onclick="calculateRoute(${item.lat}, ${item.lng}, 'route-result-${idx}')" 
                        class="w-full bg-white text-blue-600 font-bold py-2.5 px-4 rounded-lg text-sm hover:bg-blue-50 transition shadow-sm flex items-center justify-center gap-2">
                    <i class="fas fa-search-location"></i> 최적 경로 검색하기 (버스/지하철)
                </button>
                <div id="route-result-${idx}" class="mt-3 hidden text-sm bg-white/10 rounded-lg p-2 backdrop-blur-sm"></div>
            </div>
        </div>
    `;

    // 7. 구글맵 링크
    const mapLinkHTML = `
        <div class="px-4 pb-6">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}&query_place_id=${item.lat},${item.lng}" target="_blank" 
               class="flex items-center justify-center w-full bg-gray-100 text-gray-600 py-3 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-200 transition gap-2">
                <span>구글맵 앱으로 크게 보기</span> <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;

    return `
        ${photosHTML}
        <div class="px-4 mb-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded font-bold">평점 ${item.rating}</span>
                <span class="flex gap-0.5">${stars}</span>
            </div>
        </div>
        ${tipsHTML}
        ${tableHTML}
        ${recommendHTML}
        ${directionsHTML}
        ${mapLinkHTML}
    `;
}

// --- 5. 지도 조작 및 길찾기 로직 ---

function toggleDetail(idx, lat, lng) {
    const detailPanel = document.getElementById(`detail-${idx}`);
    const chevron = document.getElementById(`chevron-${idx}`);
    
    // 다른 패널 닫기 (선택사항)
    /*
    document.querySelectorAll('[id^="detail-"]').forEach(el => {
        if(el.id !== `detail-${idx}`) el.classList.add('hidden');
    });
    */

    if (detailPanel.classList.contains('hidden')) {
        detailPanel.classList.remove('hidden');
        chevron.classList.add('rotate-180');
        
        // ★ 지도 자동 이동 (중요: 모바일에서 지도 확인용)
        if (map && lat && lng) {
            const pos = { lat: lat, lng: lng };
            map.panTo(pos);
            map.setZoom(16); // 줌을 당겨서 위치 확인시켜줌
            
            // 지도 화면으로 부드럽게 스크롤할지 여부 (원하면 주석 해제)
            // document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        detailPanel.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }
}

function calculateRoute(destLat, destLng, resultDivId) {
    const resultDiv = document.getElementById(resultDivId);
    if (!resultDiv) return;

    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="flex items-center justify-center py-2 text-white/80 gap-2">
            <div class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span>경로 탐색 중...</span>
        </div>
    `;

    if (!navigator.geolocation) {
        resultDiv.innerHTML = '<p class="text-red-200 text-center">GPS 오류: 권한을 확인해주세요.</p>';
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            const end = new google.maps.LatLng(destLat, destLng);

            const request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.TRANSIT,
                provideRouteAlternatives: true
            };

            directionsService.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    // 지도에 경로 그리기
                    directionsRenderer.setDirections(result);
                    renderRouteResult(result, resultDiv);
                } else {
                    resultDiv.innerHTML = '<p class="text-red-200 text-center">경로를 찾을 수 없습니다. (너무 가깝거나 멈)</p>';
                }
            });
        },
        (error) => {
            resultDiv.innerHTML = '<p class="text-red-200 text-center">현재 위치를 가져올 수 없습니다.</p>';
        }
    );
}

function renderRouteResult(response, container) {
    const route = response.routes[0];
    const leg = route.legs[0];

    // 결과 HTML 생성 (흰색 박스 스타일로 변경)
    let html = `
        <div class="bg-white rounded-lg p-3 mt-2 text-gray-800 shadow-inner">
            <div class="flex justify-between items-center mb-2 border-b pb-2">
                <span class="font-bold text-lg text-blue-600">${leg.duration.text}</span>
                <span class="text-xs text-gray-500">${leg.distance.text}</span>
            </div>
            <div class="space-y-2 text-xs">
    `;

    leg.steps.forEach(step => {
        if (step.travel_mode === 'TRANSIT') {
            const t = step.transit;
            const lineName = t.line.short_name || t.line.name;
            const color = t.line.vehicle.type === 'BUS' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700';
            
            html += `
                <div class="flex items-start gap-2">
                    <i class="fas ${t.line.vehicle.type === 'BUS' ? 'fa-bus' : 'fa-subway'} mt-0.5 text-gray-400"></i>
                    <div>
                        <span class="${color} px-1.5 py-0.5 rounded font-bold">${lineName}</span>
                        <span class="text-gray-600"> ${t.departure_stop.name} 승차</span>
                        <div class="text-[10px] text-gray-400 pl-1 my-0.5 border-l-2 border-gray-200">
                            ${step.duration.text} (${t.num_stops}개 정류장)
                        </div>
                        <span class="text-gray-600"> ${t.arrival_stop.name} 하차</span>
                    </div>
                </div>
            `;
        } else if (step.travel_mode === 'WALKING') {
            html += `
                <div class="flex items-center gap-2 text-gray-500">
                    <i class="fas fa-walking text-gray-400"></i>
                    <span>도보 ${step.duration.text}</span>
                </div>
            `;
        }
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

// 전역 함수 노출
window.initFukuokaTrip = initFukuokaTrip;
window.changeFukuokaDay = changeFukuokaDay;
window.toggleDetail = toggleDetail;
window.calculateRoute = calculateRoute;
