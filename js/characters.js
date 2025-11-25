
/**
 * characters.js - 50음도 학습 & 따라쓰기 (Overlay Tracing Ver.)
 * * 업데이트: 그리드 높이 축소, 글자 위에 바로 쓰기 기능 추가
 */

// 데이터 (50음도) - 빈 문자열은 그리드 정렬용 공백
const charData = {
    hiragana: [
        { char: 'あ', romaji: 'a', pron: '아' }, { char: 'い', romaji: 'i', pron: '이' }, { char: 'う', romaji: 'u', pron: '우' }, { char: 'え', romaji: 'e', pron: '에' }, { char: 'お', romaji: 'o', pron: '오' },
        { char: 'か', romaji: 'ka', pron: '카' }, { char: 'き', romaji: 'ki', pron: '키' }, { char: 'く', romaji: 'ku', pron: '쿠' }, { char: 'け', romaji: 'ke', pron: '케' }, { char: 'こ', romaji: 'ko', pron: '코' },
        { char: 'さ', romaji: 'sa', pron: '사' }, { char: 'し', romaji: 'shi', pron: '시' }, { char: 'す', romaji: 'su', pron: '스' }, { char: 'せ', romaji: 'se', pron: '세' }, { char: 'そ', romaji: 'so', pron: '소' },
        { char: 'た', romaji: 'ta', pron: '타' }, { char: 'ち', romaji: 'chi', pron: '치' }, { char: 'つ', romaji: 'tsu', pron: '츠' }, { char: 'て', romaji: 'te', pron: '테' }, { char: 'と', romaji: 'to', pron: '토' },
        { char: 'な', romaji: 'na', pron: '나' }, { char: 'に', romaji: 'ni', pron: '니' }, { char: 'ぬ', romaji: 'nu', pron: '누' }, { char: 'ね', romaji: 'ne', pron: '네' }, { char: 'の', romaji: 'no', pron: '노' },
        { char: 'は', romaji: 'ha', pron: '하' }, { char: 'ひ', romaji: 'hi', pron: '히' }, { char: 'ふ', romaji: 'fu', pron: '후' }, { char: 'へ', romaji: 'he', pron: '헤' }, { char: 'ほ', romaji: 'ho', pron: '호' },
        { char: 'ま', romaji: 'ma', pron: '마' }, { char: 'み', romaji: 'mi', pron: '미' }, { char: 'む', romaji: 'mu', pron: '무' }, { char: 'め', romaji: 'me', pron: '메' }, { char: 'も', romaji: 'mo', pron: '모' },
        { char: 'や', romaji: 'ya', pron: '야' }, { char: '', romaji: '', pron: '' },     { char: 'ゆ', romaji: 'yu', pron: '유' }, { char: '', romaji: '', pron: '' },     { char: 'よ', romaji: 'yo', pron: '요' },
        { char: 'ら', romaji: 'ra', pron: '라' }, { char: 'り', romaji: 'ri', pron: '리' }, { char: 'る', romaji: 'ru', pron: '루' }, { char: 'れ', romaji: 're', pron: '레' }, { char: 'ろ', romaji: 'ro', pron: '로' },
        { char: 'わ', romaji: 'wa', pron: '와' }, { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: 'を', romaji: 'wo', pron: '오' },
        { char: 'ん', romaji: 'n', pron: '응' },  { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' }
    ],
    katakana: [
        { char: 'ア', romaji: 'a', pron: '아' }, { char: 'イ', romaji: 'i', pron: '이' }, { char: 'ウ', romaji: 'u', pron: '우' }, { char: 'エ', romaji: 'e', pron: '에' }, { char: 'オ', romaji: 'o', pron: '오' },
        { char: 'カ', romaji: 'ka', pron: '카' }, { char: 'キ', romaji: 'ki', pron: '키' }, { char: 'ク', romaji: 'ku', pron: '쿠' }, { char: 'ケ', romaji: 'ke', pron: '케' }, { char: 'コ', romaji: 'ko', pron: '코' },
        { char: 'サ', romaji: 'sa', pron: '사' }, { char: 'シ', romaji: 'shi', pron: '시' }, { char: 'ス', romaji: 'su', pron: '스' }, { char: 'セ', romaji: 'se', pron: '세' }, { char: 'ソ', romaji: 'so', pron: '소' },
        { char: 'タ', romaji: 'ta', pron: '타' }, { char: 'チ', romaji: 'chi', pron: '치' }, { char: 'ツ', romaji: 'tsu', pron: '츠' }, { char: 'テ', romaji: 'te', pron: '테' }, { char: 'ト', romaji: 'to', pron: '토' },
        { char: 'ナ', romaji: 'na', pron: '나' }, { char: 'ニ', romaji: 'ni', pron: '니' }, { char: 'ヌ', romaji: 'nu', pron: '누' }, { char: 'ネ', romaji: 'ne', pron: '네' }, { char: 'ノ', romaji: 'no', pron: '노' },
        { char: 'ハ', romaji: 'ha', pron: '하' }, { char: 'ヒ', romaji: 'hi', pron: '히' }, { char: 'フ', romaji: 'fu', pron: '후' }, { char: 'ヘ', romaji: 'he', pron: '헤' }, { char: 'ホ', romaji: 'ho', pron: '호' },
        { char: 'マ', romaji: 'ma', pron: '마' }, { char: 'ミ', romaji: 'mi', pron: '미' }, { char: 'ム', romaji: 'mu', pron: '무' }, { char: 'メ', romaji: 'me', pron: '메' }, { char: 'モ', romaji: 'mo', pron: '모' },
        { char: 'ヤ', romaji: 'ya', pron: '야' }, { char: '', romaji: '', pron: '' },     { char: 'ユ', romaji: 'yu', pron: '유' }, { char: '', romaji: '', pron: '' },     { char: 'ヨ', romaji: 'yo', pron: '요' },
        { char: 'ラ', romaji: 'ra', pron: '라' }, { char: 'リ', romaji: 'ri', pron: '리' }, { char: 'ル', romaji: 'ru', pron: '루' }, { char: 'レ', romaji: 're', pron: '레' }, { char: 'ロ', romaji: 'ro', pron: '로' },
        { char: 'ワ', romaji: 'wa', pron: '와' }, { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: 'ヲ', romaji: 'wo', pron: '오' },
        { char: 'ン', romaji: 'n', pron: '응' },  { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' },     { char: '', romaji: '', pron: '' }
    ]
};

let currentCanvas = null;
let currentContext = null;
let isDrawing = false;

// --- 1. 초기화 및 탭 전환 ---
function showCharacterGrid(type) {
    const grid = document.getElementById('character-grid');
    const tabHiragana = document.getElementById('tab-hiragana');
    const tabKatakana = document.getElementById('tab-katakana');
    
    if (!grid) return;

    // 탭 스타일 활성화
    if (type === 'hiragana') {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-red-500 shadow-md transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
    } else {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-blue-500 shadow-md transition-transform active:scale-95";
    }

    // 그리드 생성 (높이를 h-16으로 줄임 - 요청사항 반영)
    const data = charData[type];
    grid.innerHTML = data.map((item) => {
        if (!item.char) return `<div class="invisible"></div>`;
        
        return `
            <button onclick="openWritingModal('${item.char}', '${item.pron}', '${item.romaji}')" 
                class="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm active:bg-gray-50 active:scale-95 transition-all h-16">
                <span class="text-xl font-bold text-gray-800 leading-none mb-1" style="font-family: 'Noto Sans JP', sans-serif;">${item.char}</span>
                <span class="text-[10px] text-gray-400 font-medium leading-none">${item.pron}</span>
            </button>
        `;
    }).join('');
}

// --- 2. 쓰기 연습 모달 (핵심: 글자 위 덮어쓰기) ---
function openWritingModal(char, pron, romaji) {
    const container = document.getElementById('character-study-container');
    
    // 모달 HTML 구성 
    // .relative 컨테이너 안에 1) 회색 가이드 글자, 2) 투명 캔버스를 겹칩니다.
    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/85 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
            
            <div class="w-full max-w-sm flex justify-between items-center mb-6 px-4">
                <div class="text-white">
                    <h3 class="text-3xl font-black">${char}</h3>
                    <p class="text-gray-300 text-sm">${pron} [ ${romaji} ]</p>
                </div>
                <button onclick="closeWritingModal()" class="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-[300px] h-[300px] select-none">
                
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span class="text-[200px] text-gray-200 font-medium leading-none pb-4" style="font-family: 'Noto Sans JP', sans-serif;">
                        ${char}
                    </span>
                </div>
                
                <div class="absolute w-full h-px bg-red-100 top-1/2 pointer-events-none"></div>
                <div class="absolute h-full w-px bg-red-100 left-1/2 pointer-events-none"></div>

                <canvas id="writing-canvas" width="300" height="300" class="absolute inset-0 w-full h-full cursor-crosshair touch-none"></canvas>
            </div>

            <div class="flex gap-4 mt-8 w-full max-w-[300px]">
                <button onclick="clearCanvas()" class="flex-1 py-3 bg-gray-700 text-white rounded-xl font-bold shadow-lg active:scale-95 transition flex items-center justify-center gap-2">
                    <i class="fas fa-eraser"></i> 지우기
                </button>
                <button onclick="playAudio('${char}')" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition flex items-center justify-center gap-2">
                    <i class="fas fa-volume-up"></i> 듣기
                </button>
            </div>
            
            <p class="text-white/40 text-xs mt-4 animate-pulse">회색 글자를 따라 빨간색으로 써보세요!</p>
        </div>
    `;

    container.classList.remove('hidden');
    initCanvas(); // 캔버스 기능 활성화
    playAudio(char); // 열리자마자 소리 한 번 들려줌
}

function closeWritingModal() {
    const container = document.getElementById('character-study-container');
    container.classList.add('hidden');
    container.innerHTML = '';
}

// --- 3. 캔버스 그리기 로직 (터치/마우스 통합) ---
function initCanvas() {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // 펜 스타일 설정 (빨간색 굵은 펜)
    ctx.lineWidth = 14; 
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(255, 75, 75, 0.8)'; // 반투명 빨강

    currentCanvas = canvas;
    currentContext = ctx;
    isDrawing = false;

    // 마우스 이벤트
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // 모바일 터치 이벤트
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
}

// 좌표 계산 (터치/마우스 공용)
function getTouchPos(canvasDom, touchEvent) {
    const rect = canvasDom.getBoundingClientRect();
    return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
    };
}

function startDrawing(e) {
    isDrawing = true;
    currentContext.beginPath();
    const x = e.offsetX;
    const y = e.offsetY;
    currentContext.moveTo(x, y);
    currentContext.lineTo(x, y); // 점 찍기
    currentContext.stroke();
}

function draw(e) {
    if (!isDrawing) return;
    currentContext.lineTo(e.offsetX, e.offsetY);
    currentContext.stroke();
}

// 터치 핸들러 (좌표 보정 포함)
function handleTouchStart(e) {
    e.preventDefault(); // 스크롤 방지
    isDrawing = true;
    const pos = getTouchPos(currentCanvas, e);
    currentContext.beginPath();
    currentContext.moveTo(pos.x, pos.y);
    currentContext.lineTo(pos.x, pos.y);
    currentContext.stroke();
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!isDrawing) return;
    const pos = getTouchPos(currentCanvas, e);
    currentContext.lineTo(pos.x, pos.y);
    currentContext.stroke();
}

function stopDrawing() {
    isDrawing = false;
    if (currentContext) {
        currentContext.closePath();
    }
}

function clearCanvas() {
    if (currentCanvas && currentContext) {
        currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
    }
}

// --- 4. 오디오 재생 ---
function playAudio(text) {
    if ('speechSynthesis' in window) {
        // 기존 음성 취소 (연타 방지)
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// 전역 노출
window.showCharacterGrid = showCharacterGrid;
window.openWritingModal = openWritingModal;
window.closeWritingModal = closeWritingModal;
window.clearCanvas = clearCanvas;
window.playAudio = playAudio;

// 초기 실행 보장
document.addEventListener('DOMContentLoaded', () => {
    // 탭이 열려있다면 초기화
    if(!document.getElementById('character-grid').innerHTML.trim()) {
        showCharacterGrid('hiragana');
    }
});

