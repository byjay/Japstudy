/**
 * characters.js - 50음도 (히라가나/가타카나) 학습 시스템
 */

// 50음도 데이터 (순서 포함)
const hiraganaList = [
    { char: 'あ', romaji: 'a', order: 1 },
    { char: 'い', romaji: 'i', order: 2 },
    { char: 'う', romaji: 'u', order: 3 },
    { char: 'え', romaji: 'e', order: 4 },
    { char: 'お', romaji: 'o', order: 5 },
    { char: 'か', romaji: 'ka', order: 6 },
    { char: 'き', romaji: 'ki', order: 7 },
    { char: 'く', romaji: 'ku', order: 8 },
    { char: 'け', romaji: 'ke', order: 9 },
    { char: 'こ', romaji: 'ko', order: 10 },
    { char: 'さ', romaji: 'sa', order: 11 },
    { char: 'し', romaji: 'shi', order: 12 },
    { char: 'す', romaji: 'su', order: 13 },
    { char: 'せ', romaji: 'se', order: 14 },
    { char: 'そ', romaji: 'so', order: 15 },
    { char: 'た', romaji: 'ta', order: 16 },
    { char: 'ち', romaji: 'chi', order: 17 },
    { char: 'つ', romaji: 'tsu', order: 18 },
    { char: 'て', romaji: 'te', order: 19 },
    { char: 'と', romaji: 'to', order: 20 },
    { char: 'な', romaji: 'na', order: 21 },
    { char: 'に', romaji: 'ni', order: 22 },
    { char: 'ぬ', romaji: 'nu', order: 23 },
    { char: 'ね', romaji: 'ne', order: 24 },
    { char: 'の', romaji: 'no', order: 25 },
    { char: 'は', romaji: 'ha', order: 26 },
    { char: 'ひ', romaji: 'hi', order: 27 },
    { char: 'ふ', romaji: 'fu', order: 28 },
    { char: 'へ', romaji: 'he', order: 29 },
    { char: 'ほ', romaji: 'ho', order: 30 },
    { char: 'ま', romaji: 'ma', order: 31 },
    { char: 'み', romaji: 'mi', order: 32 },
    { char: 'む', romaji: 'mu', order: 33 },
    { char: 'め', romaji: 'me', order: 34 },
    { char: 'も', romaji: 'mo', order: 35 },
    { char: 'や', romaji: 'ya', order: 36 },
    { char: 'ゆ', romaji: 'yu', order: 37 },
    { char: 'よ', romaji: 'yo', order: 38 },
    { char: 'ら', romaji: 'ra', order: 39 },
    { char: 'り', romaji: 'ri', order: 40 },
    { char: 'る', romaji: 'ru', order: 41 },
    { char: 'れ', romaji: 're', order: 42 },
    { char: 'ろ', romaji: 'ro', order: 43 },
    { char: 'わ', romaji: 'wa', order: 44 },
    { char: 'を', romaji: 'wo', order: 45 },
    { char: 'ん', romaji: 'n', order: 46 }
];

const katakanaList = [
    { char: 'ア', romaji: 'a', order: 1 },
    { char: 'イ', romaji: 'i', order: 2 },
    { char: 'ウ', romaji: 'u', order: 3 },
    { char: 'エ', romaji: 'e', order: 4 },
    { char: 'オ', romaji: 'o', order: 5 },
    { char: 'カ', romaji: 'ka', order: 6 },
    { char: 'キ', romaji: 'ki', order: 7 },
    { char: 'ク', romaji: 'ku', order: 8 },
    { char: 'ケ', romaji: 'ke', order: 9 },
    { char: 'コ', romaji: 'ko', order: 10 },
    { char: 'サ', romaji: 'sa', order: 11 },
    { char: 'シ', romaji: 'shi', order: 12 },
    { char: 'ス', romaji: 'su', order: 13 },
    { char: 'セ', romaji: 'se', order: 14 },
    { char: 'ソ', romaji: 'so', order: 15 },
    { char: 'タ', romaji: 'ta', order: 16 },
    { char: 'チ', romaji: 'chi', order: 17 },
    { char: 'ツ', romaji: 'tsu', order: 18 },
    { char: 'テ', romaji: 'te', order: 19 },
    { char: 'ト', romaji: 'to', order: 20 },
    { char: 'ナ', romaji: 'na', order: 21 },
    { char: 'ニ', romaji: 'ni', order: 22 },
    { char: 'ヌ', romaji: 'nu', order: 23 },
    { char: 'ネ', romaji: 'ne', order: 24 },
    { char: 'ノ', romaji: 'no', order: 25 },
    { char: 'ハ', romaji: 'ha', order: 26 },
    { char: 'ヒ', romaji: 'hi', order: 27 },
    { char: 'フ', romaji: 'fu', order: 28 },
    { char: 'ヘ', romaji: 'he', order: 29 },
    { char: 'ホ', romaji: 'ho', order: 30 },
    { char: 'マ', romaji: 'ma', order: 31 },
    { char: 'ミ', romaji: 'mi', order: 32 },
    { char: 'ム', romaji: 'mu', order: 33 },
    { char: 'メ', romaji: 'me', order: 34 },
    { char: 'モ', romaji: 'mo', order: 35 },
    { char: 'ヤ', romaji: 'ya', order: 36 },
    { char: 'ユ', romaji: 'yu', order: 37 },
    { char: 'ヨ', romaji: 'yo', order: 38 },
    { char: 'ラ', romaji: 'ra', order: 39 },
    { char: 'リ', romaji: 'ri', order: 40 },
    { char: 'ル', romaji: 'ru', order: 41 },
    { char: 'レ', romaji: 're', order: 42 },
    { char: 'ロ', romaji: 'ro', order: 43 },
    { char: 'ワ', romaji: 'wa', order: 44 },
    { char: 'ヲ', romaji: 'wo', order: 45 },
    { char: 'ン', romaji: 'n', order: 46 }
];

let currentCharType = 'hiragana'; // 'hiragana' or 'katakana'
let currentCharIndex = 0;
let isStudyMode = false;

// 50음도 그리드 표시
function showCharacterGrid(type) {
    currentCharType = type;
    isStudyMode = false;

    const gridContainer = document.getElementById('character-grid-container');
    const studyContainer = document.getElementById('character-study-container');

    if (gridContainer) gridContainer.style.display = 'block';
    if (studyContainer) studyContainer.style.display = 'none';

    renderCharacterGrid();
    updateCharacterTypeTabs();
}

// 그리드 렌더링
function renderCharacterGrid() {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    const charList = currentCharType === 'hiragana' ? hiraganaList : katakanaList;

    grid.innerHTML = charList.map((item, index) => `
        <div class="char-cell bg-white p-3 rounded-lg text-center cursor-pointer border border-gray-200 hover:border-red-500 hover:bg-red-50 active:scale-95 transition-all" 
             onclick="startCharacterStudy(${index})">
            <div class="text-3xl font-bold text-gray-800 mb-1">${item.char}</div>
            <div class="text-xs text-gray-500 uppercase">${item.romaji}</div>
        </div>
    `).join('');
}

// 개별 글자 학습 모드 시작
function startCharacterStudy(index) {
    currentCharIndex = index;
    isStudyMode = true;

    const gridContainer = document.getElementById('character-grid-container');
    const studyContainer = document.getElementById('character-study-container');

    if (gridContainer) gridContainer.style.display = 'none';
    if (studyContainer) studyContainer.style.display = 'block';

    renderStudyMode();
}

// 학습 모드 렌더링
function renderStudyMode() {
    const charList = currentCharType === 'hiragana' ? hiraganaList : katakanaList;
    const currentChar = charList[currentCharIndex];

    const studyContainer = document.getElementById('character-study-container');
    if (!studyContainer) return;

    studyContainer.innerHTML = `
        <!-- 큰 글자 표시 -->
        <div class="flex flex-col items-center justify-center mb-8 py-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl">
            <div class="text-9xl font-bold text-gray-800 mb-4">${currentChar.char}</div>
            <div class="text-2xl text-gray-600 uppercase tracking-widest">${currentChar.romaji}</div>
            <div class="text-sm text-gray-500 mt-2">${currentCharIndex + 1} / ${charList.length}</div>
        </div>
        
        <!-- 학습 메뉴 버튼 -->
        <div class="grid grid-cols-2 gap-3 mb-4">
            <button onclick="listenCharacter()" class="bg-blue-500 text-white py-4 rounded-xl font-bold text-lg active:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <i class="fas fa-volume-up"></i>
                <span>듣기</span>
            </button>
            <button onclick="showWritingPractice()" class="bg-green-500 text-white py-4 rounded-xl font-bold text-lg active:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                <i class="fas fa-pen"></i>
                <span>따라쓰기</span>
            </button>
        </div>
        
        <!-- 네비게이션 버튼 -->
        <div class="grid grid-cols-2 gap-3">
            <button onclick="showCharacterGrid('${currentCharType}')" class="bg-gray-200 text-gray-800 py-3 rounded-xl font-medium active:bg-gray-300 transition-colors">
                📊 50음도표 보기
            </button>
            <button onclick="nextCharacter()" class="bg-red-600 text-white py-3 rounded-xl font-bold active:bg-red-700 transition-colors ${currentCharIndex >= charList.length - 1 ? 'opacity-50' : ''}">
                다음 →
            </button>
        </div>
        
        <!-- 따라쓰기 연습 영역 (숨김 상태) -->
        <div id="writing-practice" style="display: none;" class="mt-6 bg-white p-6 rounded-2xl shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-gray-800">따라쓰기 연습</h3>
                <button onclick="hideWritingPractice()" class="text-gray-500 hover:text-gray-800">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <canvas id="writing-canvas" width="300" height="300" class="border-2 border-gray-300 rounded-lg mx-auto block touch-none"></canvas>
            <div class="flex justify-center space-x-3 mt-4">
                <button onclick="clearCanvas()" class="bg-gray-200 px-6 py-2 rounded-lg font-medium">지우기</button>
            </div>
        </div>
    `;
}

// 듣기 기능
function listenCharacter() {
    const charList = currentCharType === 'hiragana' ? hiraganaList : katakanaList;
    const currentChar = charList[currentCharIndex];
    playAudio(currentChar.char);
}

// 다음 글자로 이동
function nextCharacter() {
    const charList = currentCharType === 'hiragana' ? hiraganaList : katakanaList;
    if (currentCharIndex < charList.length - 1) {
        currentCharIndex++;
        renderStudyMode();
    }
}

// 탭 업데이트 (히라가나/가타카나 버튼 상태 반영)
function updateCharacterTypeTabs() {
    const buttons = document.querySelectorAll('#characters .char-type-tab');
    buttons.forEach(btn => {
        const type = btn.getAttribute('data-type');
        if (type === currentCharType) {
            btn.classList.add('bg-red-500', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-500');
        } else {
            btn.classList.remove('bg-red-500', 'text-white');
            btn.classList.add('bg-white', 'text-gray-500');
        }
    });
}

// 따라쓰기 표시
function showWritingPractice() {
    const practice = document.getElementById('writing-practice');
    if (practice) {
        practice.style.display = 'block';
        initializeCanvas();
    }
}

// 따라쓰기 숨기기
function hideWritingPractice() {
    const practice = document.getElementById('writing-practice');
    if (practice) practice.style.display = 'none';
}

// Canvas 초기화
let canvas, ctx, isDrawing = false;
function initializeCanvas() {
    canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);

    // Mouse events (for desktop testing)
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
}

function startDrawing(e) {
    isDrawing = true;
    const pos = getPosition(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

function clearCanvas() {
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

console.log('characters.js loaded');
