/**
 * fukuoka.js - 후쿠오카 여행 일정 관리 (Reference Implementation)
 */

// --- 데이터 (검색 쿼리 중심) ---
const placesDB = {
    // 1일차
    'airport_in': { name: '후쿠오카 공항 도착', query: 'Fukuoka Airport International Terminal', lat: 33.5859, lng: 130.4507 },
    'hotel_checkin': { name: '몬탄 하카타 (숙소)', query: 'Montan Hakata', lat: 33.5878, lng: 130.4285 },
    'lunch_hakata': { name: '점심: 하카타 우동 하가쿠레', query: 'Hakata Udon Hagakure', lat: 33.5855, lng: 130.4250 },
    'canal_city': { name: '캐널시티 하카타', query: 'Canal City Hakata', lat: 33.5898, lng: 130.4108 },
    'dinner_motsu': { name: '저녁: 모츠나베 라쿠텐치', query: 'Motsunabe Rakutenchi Hakata Station', lat: 33.5905, lng: 130.4200 },

    // 2일차 (투어)
    'tour_meet': { name: '🚩 투어 미팅 장소', query: 'Oriental Hotel Fukuoka Hakata Station', lat: 33.5902, lng: 130.4225 },
    'dazaifu': { name: '다자이후 텐만구', query: 'Dazaifu Tenmangu', lat: 33.5215, lng: 130.5348 },
    'yufuin': { name: '유후인 (긴린코 호수)', query: 'Kinrin Lake Yufuin', lat: 33.2655, lng: 131.3600 },
    'beppu': { name: '벳푸 가마도 지옥', query: 'Kamado Jigoku', lat: 33.3150, lng: 131.4750 },

    // 3일차
    'ohori': { name: '오호리 공원', query: 'Ohori Park', lat: 33.5861, lng: 130.3764 },
    'lunch_sushi': { name: '점심: 효탄 스시', query: 'Hyotan Sushi Tenjin', lat: 33.5900, lng: 130.3980 },
    'momochi': { name: '모모치 해변 & 타워', query: 'Fukuoka Tower', lat: 33.5932, lng: 130.3515 },
    'dinner_yakiniku': { name: '저녁: 야키니쿠 바쿠로', query: 'Yakiniku Bakuro Hakata', lat: 33.5920, lng: 130.4150 },

    // 4일차
    'airport_out': { name: '후쿠오카 공항 (귀국)', query: 'Fukuoka Airport International Terminal', lat: 33.5859, lng: 130.4507 }
};

const schedule = {
    1: { title: '1일차: 도착', items: ['airport_in', 'hotel_checkin', 'lunch_hakata', 'canal_city', 'dinner_motsu'] },
    2: { title: '2일차: 버스투어', items: ['tour_meet', 'dazaifu', 'yufuin', 'beppu'] },
    3: { title: '3일차: 시내', items: ['ohori', 'lunch_sushi', 'momochi', 'dinner_yakiniku'] },
    4: { title: '4일차: 귀국', items: ['hotel_checkin', 'airport_out'] }
};

let activeDay = 1;
let map, placesService, markers = [];

// 후쿠오카 일정 초기화
function initFukuokaTrip() {
    console.log('Initializing Fukuoka trip (Reference Ver.)...');
    // Google Maps API가 로드되었는지 확인
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.warn('Google Maps API not loaded yet.');
        // API 로드 대기 또는 대체 UI 표시 로직 필요할 수 있음
    } else {
        initMap();
    }
    renderTabs();
    renderSchedule(activeDay);
}

function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    map = new google.maps.Map(mapElement, {
        center: { lat: 33.5902, lng: 130.4207 },
        zoom: 12
    });
    placesService = new google.maps.places.PlacesService(map);
}

function renderTabs() {
    const container = document.getElementById('day-tabs');
    if (!container) return;

    container.innerHTML = Object.keys(schedule).map(day =>
        `<button onclick="changeFukuokaDay(${day})" class="day-tab px-4 py-2 rounded-full border border-gray-300 bg-white text-sm font-bold ${day == activeDay ? 'active' : ''} transition-colors duration-200">
            ${schedule[day].title}
        </button>`
    ).join('');
}

function changeFukuokaDay(day) {
    activeDay = day;
    renderTabs();
    renderSchedule(day);
}

function renderSchedule(day) {
    const container = document.getElementById('itinerary-content');
    if (!container) return;

    container.innerHTML = '';

    // 지도 마커 초기화
    if (markers) {
        markers.forEach(m => m.setMap(null));
    }
    markers = [];
    let bounds;
    if (typeof google !== 'undefined' && google.maps) {
        bounds = new google.maps.LatLngBounds();
    }

    schedule[day].items.forEach((key, idx) => {
        const item = placesDB[key];

        // 마커 추가 (Google Maps API가 있을 때만)
        if (typeof google !== 'undefined' && google.maps && map) {
            const marker = new google.maps.Marker({
                position: { lat: item.lat, lng: item.lng },
                map: map,
                label: (idx + 1).toString()
            });
            markers.push(marker);
            bounds.extend(marker.getPosition());
        }

        // 리스트 아이템 생성
        const div = document.createElement('div');
        div.className = "bg-white p-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:border-blue-500 transition";
        div.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <span class="bg-blue-100 text-blue-700 font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">${idx + 1}</span>
                    <h4 class="font-bold text-gray-800">${item.name}</h4>
                </div>
                <i class="fas fa-chevron-down text-gray-400"></i>
            </div>
            <div class="details-panel hidden mt-3 p-3 bg-gray-50 rounded-lg border border-gray-100" id="detail-${idx}">
            </div>
        `;

        div.onclick = (e) => {
            // 클릭 시 상세 패널 열기 및 API 호출
            const panel = div.querySelector('.details-panel');
            const wasHidden = panel.classList.contains('hidden');

            document.querySelectorAll('.details-panel').forEach(p => p.classList.add('hidden')); // 다른 거 닫기

            if (wasHidden) {
                panel.classList.remove('hidden');
                if (!panel.dataset.loaded) {
                    loadPlaceDetails(item.query, panel);
                }
            }
        };

        container.appendChild(div);
    });

    if (typeof google !== 'undefined' && google.maps && map && markers.length > 0) {
        map.fitBounds(bounds);
    }
}

function loadPlaceDetails(query, panel) {
    panel.innerHTML = `<div class="spinner border-4 border-gray-200 border-t-blue-500 rounded-full w-6 h-6 animate-spin mx-auto"></div><p class="text-center text-xs text-gray-500 mt-2">구글 최신 정보 불러오는 중...</p>`;

    if (typeof google === 'undefined' || !placesService) {
        panel.innerHTML = `<p class="text-center text-red-500 text-sm">Google Maps API가 로드되지 않았습니다.</p>`;
        return;
    }

    const request = {
        query: query,
        // geometry를 포함해야 주변 맛집 검색(nearbySearch)에 사용할 수 있음
        fields: ['name', 'rating', 'user_ratings_total', 'photos', 'formatted_address', 'price_level', 'place_id', 'url', 'geometry']
    };

    placesService.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
            const place = results[0];

            // 가격대 표시 ($)
            let priceStr = '';
            if (place.price_level) {
                priceStr = '<span class="text-green-600 font-bold ml-2">' + '💰'.repeat(place.price_level) + '</span>';
            }

            // 사진
            let photoUrl = place.photos ? place.photos[0].getUrl({ maxWidth: 400 }) : 'https://via.placeholder.com/400x200?text=No+Image';

            // HTML 1차 렌더링 (장소 기본 정보 + 길찾기 버튼)
            panel.dataset.loaded = true;
            panel.innerHTML = `
                <div class="mt-2 space-y-3">
                    <img src="${photoUrl}" class="w-full h-40 object-cover rounded-lg">
                    
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-1">
                            <i class="fas fa-star text-yellow-400"></i>
                            <span class="font-bold">${place.rating || 'N/A'}</span>
                            <span class="text-xs text-gray-500">(${place.user_ratings_total || 0} 리뷰)</span>
                            ${priceStr}
                        </div>
                    </div>

                    <p class="text-xs text-gray-500"><i class="fas fa-map-marker-alt mr-1"></i>${place.formatted_address}</p>

                    <div class="grid grid-cols-1 gap-2 mt-2 mb-2">
                        <a href="${place.url}" target="_blank" class="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg text-sm font-bold transition">
                            <i class="fas fa-utensils mr-2"></i>메뉴판 & 가격 확인하기 (구글맵)
                        </a>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.name)}&destination_place_id=${place.place_id}" target="_blank" class="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 rounded-lg text-sm font-bold transition">
                            <i class="fas fa-route mr-2"></i>길찾기 (자동/도보)
                        </a>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.name)}&destination_place_id=${place.place_id}&travelmode=transit" target="_blank" class="block w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-center py-2 rounded-lg text-sm font-bold transition">
                            <i class="fas fa-bus mr-2"></i>대중교통 길찾기 (버스/지하철)
                        </a>
                    </div>

                    <div id="nearby-restaurants" class="mt-3 border-t pt-3">
                        <p class="text-xs text-gray-500 mb-2"><i class="fas fa-search-location mr-1"></i>주변 맛집 불러오는 중...</p>
                    </div>
                    <p class="text-xs text-center text-gray-400 mt-1">* 메뉴/가격, 대중교통, 주변 맛집 정보는 구글맵 공식 정보가 가장 정확합니다.</p>
                </div>
            `;

            // 주변 맛집(restaurant) 최소 5개 검색
            if (place.geometry && place.geometry.location) {
                const nearbyContainer = panel.querySelector('#nearby-restaurants');
                const nearbyRequest = {
                    location: place.geometry.location,
                    radius: 800, // 800m 반경
                    type: ['restaurant']
                };

                placesService.nearbySearch(nearbyRequest, (results, nearStatus) => {
                    if (nearStatus === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
                        const topResults = results.slice(0, 5);
                        nearbyContainer.innerHTML = `
                            <p class="text-xs font-semibold text-emerald-700 mb-2">
                                주변 맛집 추천 (${topResults.length}곳)
                            </p>
                            <div class="space-y-2">
                                ${topResults.map(r => {
                                    const rPhoto = r.photos && r.photos[0] ? r.photos[0].getUrl({ maxWidth: 120, maxHeight: 80 }) : null;
                                    const rPrice = r.price_level ? '💰'.repeat(r.price_level) : '';
                                    return `
                                        <div class="flex items-center gap-3 bg-white rounded-lg border border-gray-100 px-2 py-2 hover:border-emerald-400 transition cursor-pointer" onclick="window.open('https://www.google.com/maps/place/?q=place_id:${r.place_id}', '_blank')">
                                            ${rPhoto ? `<img src="${rPhoto}" class=\"w-16 h-12 rounded object-cover flex-shrink-0\">` : '<div class=\"w-16 h-12 rounded bg-gray-100 flex-shrink-0\"></div>'}
                                            <div class="flex-1 min-w-0">
                                                <div class="text-xs font-bold text-gray-800 truncate">${r.name}</div>
                                                <div class="flex items-center text-[11px] text-gray-500 gap-1">
                                                    <i class="fas fa-star text-yellow-400"></i>
                                                    <span>${r.rating || 'N/A'}</span>
                                                    <span>(${r.user_ratings_total || 0} 리뷰)</span>
                                                    <span class="ml-1 text-emerald-600">${rPrice}</span>
                                                </div>
                                                <div class="text-[11px] text-gray-400 truncate">${r.vicinity || ''}</div>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        `;
                    } else {
                        nearbyContainer.innerHTML = '<p class="text-xs text-gray-400">주변 맛집 정보를 불러올 수 없습니다.</p>';
                    }
                });
            }
        } else {
            panel.innerHTML = `<p class="text-center text-red-500 text-sm">정보를 불러올 수 없습니다.</p>`;
        }
    });
}

// 전역 함수로 노출 (HTML에서 호출 가능하도록)
window.changeFukuokaDay = changeFukuokaDay;
window.initFukuokaTrip = initFukuokaTrip;
