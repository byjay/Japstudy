/**
 * fukuoka.js - 후쿠오카 여행 일정 관리 (Rich Data + Realtime Directions Ver.)
 * * [업데이트 내용]
 * 1. 상세 정보 하드코딩 (속도 향상)
 * 2. 내 위치 기반 실시간 길찾기 기능 추가 (Google Directions API)
 * - 소요시간, 교통비, 상세 환승 경로(버스 번호 등) 표시
 */

// --- 1. 상세 데이터 베이스 (사전 조사된 정보 내장) ---
const placesDB = {
    // [1일차]
    'airport_in': {
        name: '후쿠오카 공항 (도착)',
        lat: 33.5859, lng: 130.4507,
        type: 'transport',
        rating: 4.0,
        desc: '후쿠오카의 관문. 하카타역까지 지하철로 2정거장(5분).',
        info: [
            { label: '지하철', val: '국제선→셔틀버스→국내선→지하철 탑승' },
            { label: '버스', val: '국제선 터미널 2번 승강장에서 하카타행' }
        ],
        photos: [
            'https://placehold.co/600x400/2563eb/white?text=Fukuoka+Airport',
            'https://placehold.co/600x400/orange/white?text=Shuttle+Bus'
        ]
    },
    'hotel_checkin': {
        name: '몬탄 하카타 (숙소)',
        lat: 33.5878, lng: 130.4285,
        type: 'hotel',
        rating: 4.4,
        desc: '가성비가 뛰어나고 깔끔한 호스텔형 호텔.',
        info: [
            { label: '체크인', val: '15:00 부터' },
            { label: '체크아웃', val: '10:00 까지' }
        ],
        reviews: [
            { user: '김철수', text: '하카타역에서 도보 10분, 조용하고 깨끗함.', score: 5 }
        ],
        photos: [
            'https://placehold.co/600x400/333/white?text=Montan+Hotel',
            'https://placehold.co/600x400/555/white?text=Room+View'
        ]
    },
    'lunch_hakata': {
        name: '하카타 우동 하가쿠레',
        lat: 33.5855, lng: 130.4250,
        type: 'food',
        rating: 4.3,
        desc: '미슐랭 빕구르망 우동 맛집.',
        menus: [
            { name: '고기 우동 (니쿠)', price: '650엔', desc: '달콤 짭짤한 고기 토핑' },
            { name: '우엉튀김 우동', price: '500엔', desc: '바삭한 식감' }
        ],
        reviews: [
            { user: 'UdonLover', text: '면이 진짜 부들부들해서 술술 넘어갑니다.', score: 5 }
        ],
        photos: [
            'https://placehold.co/600x400/orange/white?text=Niku+Udon',
            'https://placehold.co/600x400/white/black?text=Menu'
        ]
    },
    'canal_city': {
        name: '캐널시티 하카타',
        lat: 33.5898, lng: 130.4108,
        type: 'tour',
        rating: 4.2,
        desc: '운하가 흐르는 대형 쇼핑몰.',
        info: [
            { label: '분수쇼', val: '매시 정각 / 30분' },
            { label: '쇼핑', val: '프랑프랑, 무인양품, 디즈니스토어' }
        ],
        photos: [
            'https://placehold.co/600x400/purple/white?text=Fountain+Show',
            'https://placehold.co/600x400/red/white?text=Canal+City'
        ]
    },
    'dinner_motsu': {
        name: '모츠나베 라쿠텐치 (하카타역점)',
        lat: 33.5905, lng: 130.4200,
        type: 'food',
        rating: 4.1,
        desc: '후쿠오카 소울푸드 모츠나베 원조.',
        menus: [
            { name: '모츠나베 코스', price: '2,600엔~', desc: '전골 + 짬뽕면' },
            { name: '단품 전골', price: '1,590엔', desc: '주문 필수' }
        ],
        reviews: [
            { user: '곱창러버', text: '부추가 산더미! 국물이 끝내줘요.', score: 5 }
        ],
        photos: [
            'https://placehold.co/600x400/green/white?text=Motsunabe',
            'https://placehold.co/600x400/white/black?text=Chive+Mountain'
        ]
    },

    // [2일차]
    'tour_meet': {
        name: '🚩 투어 미팅 (오리엔탈 호텔 앞)',
        lat: 33.5902, lng: 130.4225,
        type: 'transport',
        rating: 5.0,
        desc: '일일 버스 투어 집결 장소. 08:30 집결.',
        info: [
            { label: '위치', val: '하카타역 치쿠시구치 로손 편의점 앞' }
        ],
        photos: [
            'https://placehold.co/600x400/red/white?text=Meeting+Point'
        ]
    },
    'dazaifu': {
        name: '다자이후 텐만구',
        lat: 33.5215, lng: 130.5348,
        type: 'tour',
        rating: 4.5,
        desc: '학문의 신을 모시는 신사.',
        menus: [
            { name: '우메가에 모치', price: '130엔', desc: '구운 찹쌀떡' },
            { name: '스타벅스', price: '음료값', desc: '유명한 목조 컨셉' }
        ],
        photos: [
            'https://placehold.co/600x400/red/white?text=Dazaifu',
            'https://placehold.co/600x400/brown/white?text=Starbucks'
        ]
    },
    'yufuin': {
        name: '유후인 (긴린코 호수)',
        lat: 33.2655, lng: 131.3600,
        type: 'tour',
        rating: 4.7,
        desc: '동화 같은 온천 마을과 호수.',
        menus: [
            { name: '금상 고로케', price: '200엔', desc: '대회 1등' },
            { name: '미르히 치즈케익', price: '150엔', desc: '따뜻한 치즈케익' }
        ],
        photos: [
            'https://placehold.co/600x400/green/white?text=Kinrin+Lake',
            'https://placehold.co/600x400/yellow/black?text=Yufuin+Street'
        ]
    },
    'beppu': {
        name: '벳푸 가마도 지옥',
        lat: 33.3150, lng: 131.4750,
        type: 'tour',
        rating: 4.3,
        desc: '온천 증기 지옥 순례.',
        menus: [
            { name: '온천 달걀', price: '70엔', desc: '사이다와 찰떡' },
            { name: '라무네', price: '200엔', desc: '일본 사이다' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Hell+Tour'
        ]
    },

    // [3일차]
    'ohori': {
        name: '오호리 공원',
        lat: 33.5861, lng: 130.3764,
        type: 'tour',
        rating: 4.6,
        desc: '후쿠오카 시민들의 호수 공원.',
        info: [
            { label: '입장료', val: '무료' },
            { label: '오리배', val: '30분 1,000엔' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Ohori+Park'
        ]
    },
    'lunch_sushi': {
        name: '효탄 스시 (텐진점)',
        lat: 33.5900, lng: 130.3980,
        type: 'food',
        rating: 4.4,
        desc: '가성비 최고의 회전/세트 초밥.',
        menus: [
            { name: '점심 특선', price: '1,100엔~', desc: '초밥 10피스' },
            { name: '활고등어 초밥', price: '380엔', desc: '후쿠오카 명물' }
        ],
        reviews: [
            { user: '초밥왕', text: '웨이팅 있지만 가성비 최고. 네타가 큼.', score: 5 }
        ],
        photos: [
            'https://placehold.co/600x400/orange/white?text=Sushi+Set',
            'https://placehold.co/600x400/white/black?text=Entrance'
        ]
    },
    'momochi': {
        name: '모모치 해변 & 타워',
        lat: 33.5932, lng: 130.3515,
        type: 'tour',
        rating: 4.3,
        desc: '인공 해변과 야경 명소.',
        info: [
            { label: '타워 입장료', val: '성인 800엔 (여권할인)' },
            { label: '운영시간', val: '09:30 ~ 22:00' }
        ],
        photos: [
            'https://placehold.co/600x400/blue/white?text=Fukuoka+Tower'
        ]
    },
    'dinner_yakiniku': {
        name: '야키니쿠 바쿠로 (하카타)',
        lat: 33.5920, lng: 130.4150,
        type: 'food',
        rating: 4.7,
        desc: '흑우 와규 전문점.',
        menus: [
            { name: '모듬 세트', price: '5,000엔~', desc: '2~3인용' },
            { name: '특상 갈비', price: '1,800엔', desc: '입에서 녹음' }
        ],
        reviews: [
            { user: '고기러버', text: '예약 필수. 정말 맛있습니다.', score: 5 }
        ],
        photos: [
            'https://placehold.co/600x400/red/white?text=Wagyu+Beef'
        ]
    },

    // [4일차]
    'airport_out': {
        name: '후쿠오카 공항 (귀국)',
        lat: 33.5859, lng: 130.4507,
        type: 'transport',
        rating: 4.0,
        desc: '귀국. 공항 내 면세점 쇼핑.',
        info: [
            { label: '체크인', val: '2시간 전 도착 권장' }
        ],
        photos: [
            'https://placehold.co/600x400/gray/white?text=Departure'
        ]
    }
};

const schedule = {
    1: { title: '1일차: 도착', items: ['airport_in', 'hotel_checkin', 'lunch_hakata', 'canal_city', 'dinner_motsu'] },
    2: { title: '2일차: 버스투어', items: ['tour_meet', 'dazaifu', 'yufuin', 'beppu'] },
    3: { title: '3일차: 시내', items: ['ohori', 'lunch_sushi', 'momochi', 'dinner_yakiniku'] },
    4: { title: '4일차: 귀국', items: ['hotel_checkin', 'airport_out'] }
};

let activeDay = 1;
let map, markers = [];
let directionsService = null;
let directionsRenderer = null; // (옵션) 지도에 선을 그릴 때 사용

// --- 2. 초기화 로직 ---

function initFukuokaTrip() {
    console.log('Fukuoka Trip Initialized (Rich Data + Directions)');
    renderTabs();
    renderSchedule(activeDay);

    // 구글맵 API 로드 확인
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initMap();
        // 길찾기 서비스 초기화
        directionsService = new google.maps.DirectionsService();
    } else {
        console.warn('Google Maps API not loaded.');
    }
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    map = new google.maps.Map(mapElement, {
        center: { lat: 33.5902, lng: 130.4207 },
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false
    });
    
    updateMarkers(activeDay);
}

function renderTabs() {
    const container = document.getElementById('day-tabs');
    if (!container) return;

    container.innerHTML = Object.keys(schedule).map(day =>
        `<button onclick="changeFukuokaDay(${day})" class="day-tab px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-bold ${day == activeDay ? 'bg-red-500 text-white border-red-500' : 'text-gray-600 hover:bg-gray-100'} transition-all duration-200">
            ${schedule[day].title}
        </button>`
    ).join('');
}

function changeFukuokaDay(day) {
    activeDay = day;
    renderTabs();
    renderSchedule(day);
    if (map) updateMarkers(day);
}

function updateMarkers(day) {
    if (!map || typeof google === 'undefined') return;

    // 기존 마커 삭제
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
            title: item.name
        });

        marker.addListener('click', () => {
            const listElement = document.getElementById(`place-item-${idx}`);
            if(listElement) {
                listElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const panel = document.getElementById(`detail-${idx}`);
                if (panel && panel.classList.contains('hidden')) {
                    listElement.querySelector('.click-trigger').click();
                }
            }
        });

        markers.push(marker);
        bounds.extend(marker.getPosition());
    });

    if (markers.length > 0) {
        map.fitBounds(bounds);
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
        if (item.type === 'food') iconClass = 'fa-utensils';
        if (item.type === 'hotel') iconClass = 'fa-bed';
        if (item.type === 'transport') iconClass = 'fa-plane';

        const div = document.createElement('div');
        div.id = `place-item-${idx}`;
        div.className = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md";
        
        div.innerHTML = `
            <div class="click-trigger p-4 cursor-pointer flex items-center justify-between bg-white hover:bg-gray-50 transition" onclick="toggleDetail(${idx})">
                <div class="flex items-center gap-3 overflow-hidden">
                    <span class="flex-none w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm border border-red-200 shadow-sm">
                        ${idx + 1}
                    </span>
                    <div class="flex flex-col truncate">
                        <h4 class="font-bold text-gray-800 text-base truncate">${item.name}</h4>
                        <span class="text-xs text-gray-500 truncate flex items-center gap-1">
                            <i class="fas ${iconClass} text-gray-400"></i> ${item.desc}
                        </span>
                    </div>
                </div>
                <div class="flex-none ml-2">
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

// --- 3. 상세 HTML 생성 (길찾기 포함) ---
function generateDetailHTML(item, idx) {
    // 별점
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="fas fa-star ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'} text-xs"></i>`
    ).join('');

    // 사진
    let photosHTML = '';
    if (item.photos && item.photos.length > 0) {
        photosHTML = `<div class="grid grid-cols-2 gap-2 mb-4 px-4 pt-4">
            ${item.photos.slice(0, 2).map(url => 
                `<div class="aspect-video rounded-lg overflow-hidden shadow-sm">
                    <img src="${url}" class="w-full h-full object-cover" alt="사진">
                </div>`
            ).join('')}
        </div>`;
    }

    // 메뉴/정보
    let tableHTML = '';
    if (item.menus) {
        const rows = item.menus.map(m => `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2 pl-2 text-sm text-gray-700">${m.name}</td>
                <td class="py-2 text-right text-sm font-bold text-red-600 w-16">${m.price}</td>
            </tr>
            <tr class="last:border-0"><td colspan="2" class="pb-2 pl-2 text-xs text-gray-500">${m.desc}</td></tr>
        `).join('');
        tableHTML = `<div class="px-4 mb-4"><div class="bg-white rounded-lg border border-gray-200 p-3 shadow-sm"><table class="w-full">${rows}</table></div></div>`;
    } else if (item.info) {
        const rows = item.info.map(info => `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2 pl-2 text-xs font-bold text-gray-500 w-16 bg-gray-50">${info.label}</td>
                <td class="py-2 pl-3 text-sm text-gray-700">${info.val}</td>
            </tr>
        `).join('');
        tableHTML = `<div class="px-4 mb-4"><div class="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"><table class="w-full">${rows}</table></div></div>`;
    }

    // 리뷰
    let reviewsHTML = '';
    if (item.reviews) {
        reviewsHTML = `<div class="px-4 mb-4"><h5 class="text-xs font-bold text-gray-500 mb-2 uppercase"><i class="fas fa-comment-dots text-blue-400"></i> 방문자 리뷰</h5><div class="bg-gray-100 p-2 rounded-lg space-y-2">${
            item.reviews.map(r => `<div class="bg-white p-2 rounded shadow-sm text-xs"><span class="font-bold">${r.user}</span> <span class="text-yellow-500">★${r.score}</span><br><span class="text-gray-600">${r.text}</span></div>`).join('')
        }</div></div>`;
    }

    // ★★★ 길찾기 섹션 (여기가 핵심) ★★★
    // 클릭 시 calculateRoute() 함수를 호출하여 결과를 이 div에 뿌려줍니다.
    const directionsHTML = `
        <div class="px-4 mb-4">
            <h5 class="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                <i class="fas fa-route text-green-500"></i> 실시간 길찾기
            </h5>
            <div class="bg-white rounded-xl border border-blue-100 p-3 shadow-sm">
                <button onclick="calculateRoute(${item.lat}, ${item.lng}, 'route-result-${idx}')" 
                        class="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition flex items-center justify-center gap-2">
                    <i class="fas fa-location-arrow"></i> 내 위치에서 가는 법 보기 (지하철/버스)
                </button>
                <div id="route-result-${idx}" class="mt-3 hidden text-sm"></div>
            </div>
        </div>
    `;

    // 하단 링크
    const mapLinkHTML = `
        <div class="px-4 pb-4">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}&query_place_id=${item.lat},${item.lng}" target="_blank" 
               class="block w-full bg-gray-100 text-gray-600 text-center py-3 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-200 transition">
                <i class="fas fa-external-link-alt mr-2"></i> 구글맵 앱으로 열기
            </a>
        </div>
    `;

    return `
        ${photosHTML}
        <div class="px-4 mb-2 flex items-center gap-2">
            <span class="bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded font-bold">평점 ${item.rating}</span>
            <span class="flex gap-0.5">${stars}</span>
        </div>
        ${tableHTML}
        ${directionsHTML}
        ${reviewsHTML}
        ${mapLinkHTML}
    `;
}

// --- 4. 실시간 길찾기 로직 (핵심 기능) ---
function calculateRoute(destLat, destLng, resultDivId) {
    const resultDiv = document.getElementById(resultDivId);
    if (!resultDiv) return;

    // 초기화 및 로딩 표시
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="flex items-center justify-center py-4 text-gray-500 gap-2">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <span>내 위치 확인 및 경로 탐색 중...</span>
        </div>
    `;

    // 1. 내 위치 가져오기
    if (!navigator.geolocation) {
        resultDiv.innerHTML = '<p class="text-red-500 text-center">GPS를 지원하지 않는 브라우저입니다.</p>';
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const myLat = position.coords.latitude;
            const myLng = position.coords.longitude;
            const start = new google.maps.LatLng(myLat, myLng);
            const end = new google.maps.LatLng(destLat, destLng);

            // 2. Google Directions Service 호출
            const request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.TRANSIT, // 대중교통 모드
                provideRouteAlternatives: false,
                transitOptions: {
                    routingPreference: 'FEWER_TRANSFERS' // 적은 환승 우선
                }
            };

            directionsService.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    renderRouteResult(result, resultDiv);
                } else {
                    console.error('Directions request failed due to ' + status);
                    resultDiv.innerHTML = `
                        <div class="text-center py-2">
                            <p class="text-red-500 font-bold mb-1">경로를 찾을 수 없습니다.</p>
                            <p class="text-xs text-gray-500">너무 가깝거나(도보), 대중교통이 끊겼을 수 있습니다.</p>
                        </div>`;
                }
            });
        },
        (error) => {
            console.error('Geolocation error:', error);
            let msg = '위치 정보를 가져올 수 없습니다.';
            if (error.code === 1) msg = '위치 정보 권한을 허용해주세요.';
            resultDiv.innerHTML = `<p class="text-red-500 text-center py-2">${msg}</p>`;
        }
    );
}

// 경로 결과 HTML 렌더링
function renderRouteResult(response, container) {
    const route = response.routes[0];
    const leg = route.legs[0];

    // 총 소요 시간 및 요금(있을 경우)
    let fareText = '';
    if (route.fare) {
        fareText = `<span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs ml-2 font-bold">${route.fare.text}</span>`;
    }

    // 요약 헤더
    let html = `
        <div class="border-b border-gray-200 pb-2 mb-2 flex justify-between items-end">
            <div>
                <span class="text-xl font-bold text-gray-800">${leg.duration.text}</span>
                <span class="text-xs text-gray-500 ml-1">(${leg.distance.text})</span>
            </div>
            ${fareText}
        </div>
        <div class="space-y-3 relative pl-2">
            <div class="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-200"></div>
    `;

    // 상세 스텝 반복
    leg.steps.forEach((step, i) => {
        let icon = '<i class="fas fa-walking"></i>';
        let colorClass = 'bg-gray-400';
        let lineInfo = '';

        if (step.travel_mode === 'TRANSIT') {
            const transit = step.transit;
            const vehicle = transit.line.vehicle.type;
            
            if (vehicle === 'BUS') {
                icon = '<i class="fas fa-bus"></i>';
                colorClass = 'bg-blue-500';
                lineInfo = `<span class="text-blue-600 font-bold">[버스] ${transit.line.short_name || transit.line.name}</span>`;
            } else if (vehicle === 'SUBWAY' || vehicle === 'HEAVY_RAIL') {
                icon = '<i class="fas fa-subway"></i>';
                colorClass = 'bg-green-600';
                lineInfo = `<span class="text-green-700 font-bold">[지하철] ${transit.line.short_name || transit.line.name}</span>`;
            }
            
            html += `
                <div class="relative flex items-start gap-3 z-10">
                    <div class="flex-none w-6 h-6 rounded-full ${colorClass} text-white flex items-center justify-center text-xs shadow-sm mt-0.5">
                        ${icon}
                    </div>
                    <div class="flex-1 bg-gray-50 p-2 rounded border border-gray-100">
                        <div class="text-xs font-bold mb-0.5">${lineInfo}</div>
                        <div class="text-xs text-gray-700">${transit.departure_stop.name} 승차</div>
                        <div class="text-[10px] text-gray-400 my-0.5">↓ ${step.duration.text} (${step.transit.num_stops}개 정류장)</div>
                        <div class="text-xs text-gray-700">${transit.arrival_stop.name} 하차</div>
                    </div>
                </div>
            `;
        } else if (step.travel_mode === 'WALKING') {
            html += `
                <div class="relative flex items-center gap-3 z-10">
                    <div class="flex-none w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs mt-0.5">
                        <i class="fas fa-walking"></i>
                    </div>
                    <div class="text-xs text-gray-500 py-1">
                        도보 ${step.duration.text}
                    </div>
                </div>
            `;
        }
    });

    html += `</div>`;
    
    // 도착 표시
    html += `
        <div class="mt-3 flex items-center gap-3 pl-2">
            <div class="flex-none w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs z-10">
                <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="text-sm font-bold text-gray-800">도착!</div>
        </div>
    `;

    container.innerHTML = html;
}

// UI 토글
function toggleDetail(idx) {
    const detailPanel = document.getElementById(`detail-${idx}`);
    const chevron = document.getElementById(`chevron-${idx}`);
    
    if (detailPanel.classList.contains('hidden')) {
        detailPanel.classList.remove('hidden');
        chevron.classList.add('rotate-180');
    } else {
        detailPanel.classList.add('hidden');
        chevron.classList.remove('rotate-180');
    }
}

// 전역 노출
window.initFukuokaTrip = initFukuokaTrip;
window.changeFukuokaDay = changeFukuokaDay;
window.toggleDetail = toggleDetail;
window.calculateRoute = calculateRoute;
