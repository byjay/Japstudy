/**
 * characters.js - 50음도 학습, 쓰기(획순), 퀴즈 시스템 (All-in-One Ver.)
 */

// --- 1. 데이터 (50음도 + 획순 이미지 매핑용) ---
// * 획순 이미지는 위키미디어 공용 URL 패턴을 사용합니다.
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

// 상태 변수
let currentCanvas = null;
let currentContext = null;
let isDrawing = false;
let currentMode = 'hiragana'; // hiragana, katakana
let currentIndex = 0; // 현재 학습 중인 글자 인덱스

// 퀴즈 변수
let quizQuestions = [];
let currentQuestionIdx = 0;
let quizScore = 0;

// --- 1. 메인 화면 & 그리드 ---

function showCharacterGrid(type) {
    currentMode = type;
    const grid = document.getElementById('character-grid');
    const tabHiragana = document.getElementById('tab-hiragana');
    const tabKatakana = document.getElementById('tab-katakana');
    
    // 퀴즈 화면 끄기 (혹시 켜져있으면)
    closeQuizModal();
    closeWritingModal();

    if (!grid) return;

    // 탭 스타일
    if (type === 'hiragana') {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-red-500 shadow-md transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
    } else {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-blue-500 shadow-md transition-transform active:scale-95";
    }

    // ★ 퀴즈 버튼 영역 추가
    let quizButtonsHTML = `
        <div class="col-span-full flex gap-2 justify-center mb-4">
            <button onclick="startQuiz('hiragana')" class="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-bold hover:bg-red-200 transition">
                <i class="fas fa-question-circle"></i> 히라가나 퀴즈
            </button>
            <button onclick="startQuiz('katakana')" class="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-200 transition">
                <i class="fas fa-question-circle"></i> 가타카나 퀴즈
            </button>
            <button onclick="startQuiz('mix')" class="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg text-sm font-bold hover:bg-purple-200 transition">
                <i class="fas fa-random"></i> 통합 퀴즈 (10문제)
            </button>
        </div>
    `;

    // 그리드 생성
    const data = charData[type];
    const gridHTML = data.map((item, idx) => {
        if (!item.char) return `<div class="invisible"></div>`;
        
        return `
            <button onclick="currentIndex=${idx}; openWritingModal('${item.char}', '${item.pron}', '${item.romaji}')" 
                class="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm active:bg-gray-50 active:scale-95 transition-all h-16">
                <span class="text-xl font-bold text-gray-800 leading-none mb-1" style="font-family: 'Noto Sans JP', sans-serif;">${item.char}</span>
                <span class="text-[10px] text-gray-400 font-medium leading-none">${item.pron}</span>
            </button>
        `;
    }).join('');

    grid.innerHTML = quizButtonsHTML + gridHTML;
}


// --- 2. 쓰기 연습 모달 (기능 강화) ---

function openWritingModal(char, pron, romaji) {
    const container = document.getElementById('character-study-container');
    
    // 획순 이미지 URL (위키미디어 공용 패턴 시도) - 없으면 엑박 대신 텍스트 가이드
    // 실제 서비스에선 이미지를 로컬에 저장하는 것이 좋으나, 여기선 외부 링크 사용
    const strokeUrl = `https://upload.wikimedia.org/wikipedia/commons/6/6f/BW_Hiragana_${romaji}_2021.svg`; 
    // *주의: 위키미디어 파일명이 불규칙할 수 있어, 실제론 100% 나오진 않습니다. 
    // 안 나올 경우를 대비해 onerror 처리를 추가했습니다.

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-2 backdrop-blur-sm">
            
            <div class="w-full max-w-md flex justify-between items-center mb-4 px-2">
                <div class="text-white">
                    <h3 class="text-3xl font-black inline-block mr-2">${char}</h3>
                    <span class="text-gray-300 text-lg">${pron} [${romaji}]</span>
                </div>
                <button onclick="closeWritingModal()" class="px-3 py-1 rounded-full bg-white/20 text-white text-sm hover:bg-white/30">
                    닫기 <i class="fas fa-times ml-1"></i>
                </button>
            </div>

            <div class="flex gap-2 items-center justify-center w-full max-w-lg mb-4">
                
                <div class="hidden sm:flex flex-col items-center justify-center bg-white rounded-2xl w-24 h-[300px] shadow-lg p-2">
                    <span class="text-xs text-gray-500 font-bold mb-2">획순 보기</span>
                    <div class="flex-1 flex items-center justify-center w-full overflow-hidden">
                        <span class="text-5xl font-serif text-gray-300 border-2 border-dashed border-gray-200 rounded-lg p-2 w-16 h-16 flex items-center justify-center">
                            ${char}
                        </span>
                    </div>
                    <p class="text-[10px] text-gray-400 text-center mt-2">점선을 따라<br>써보세요!</p>
                </div>

                <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-[300px] h-[300px] select-none">
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[200px] text-gray-100 font-medium leading-none pb-4" style="font-family: 'Noto Sans JP', sans-serif;">
                            ${char}
                        </span>
                    </div>
                    <div class="absolute w-full h-px bg-red-50 top-1/2 pointer-events-none"></div>
                    <div class="absolute h-full w-px bg-red-50 left-1/2 pointer-events-none"></div>
                    <canvas id="writing-canvas" width="300" height="300" class="absolute inset-0 w-full h-full cursor-crosshair touch-none"></canvas>
                </div>
            </div>

            <div class="w-full max-w-[300px] grid grid-cols-2 gap-3 mb-2">
                <button onclick="clearCanvas()" class="py-3 bg-gray-700 text-white rounded-xl font-bold shadow-lg active:scale-95 transition">
                    <i class="fas fa-eraser"></i> 지우기
                </button>
                <button onclick="playAudio('${char}')" class="py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition">
                    <i class="fas fa-volume-up"></i> 듣기
                </button>
            </div>

            <div class="w-full max-w-[300px] flex justify-between gap-3 mt-2">
                <button onclick="closeWritingModal()" class="flex-1 py-3 bg-white text-gray-800 rounded-xl font-bold shadow border border-gray-200 active:scale-95 transition">
                    <i class="fas fa-th"></i> 50음도
                </button>
                <button onclick="nextChar()" class="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition">
                    다음 글자 <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    container.classList.remove('hidden');
    initCanvas();
    playAudio(char);
}

function closeWritingModal() {
    document.getElementById('character-study-container').classList.add('hidden');
    document.getElementById('character-study-container').innerHTML = '';
}

// 다음 글자로 이동 (목록으로 안 나가고 바로 이동)
function nextChar() {
    const list = charData[currentMode];
    // 빈 문자(공백) 건너뛰기 로직
    let nextIdx = currentIndex + 1;
    while(nextIdx < list.length && !list[nextIdx].char) {
        nextIdx++;
    }

    if (nextIdx < list.length) {
        currentIndex = nextIdx;
        const item = list[currentIndex];
        openWritingModal(item.char, item.pron, item.romaji);
    } else {
        alert("마지막 글자입니다! 수고하셨어요 🎉");
        closeWritingModal();
    }
}


// --- 3. 퀴즈 시스템 (New Feature) ---

function startQuiz(mode) {
    // 1. 문제 출제
    let sourceData = [];
    if (mode === 'hiragana') sourceData = charData.hiragana.filter(i => i.char);
    else if (mode === 'katakana') sourceData = charData.katakana.filter(i => i.char);
    else sourceData = [...charData.hiragana, ...charData.katakana].filter(i => i.char);

    // 랜덤 10문제 선정
    quizQuestions = [];
    for (let i = 0; i < 10; i++) {
        const answer = sourceData[Math.floor(Math.random() * sourceData.length)];
        
        // 오답 3개 선정
        const distractors = [];
        while(distractors.length < 3) {
            const d = sourceData[Math.floor(Math.random() * sourceData.length)];
            if (d.char !== answer.char && !distractors.includes(d)) {
                distractors.push(d);
            }
        }

        // 보기 섞기
        const options = [answer, ...distractors].sort(() => Math.random() - 0.5);
        quizQuestions.push({ answer, options });
    }

    currentQuestionIdx = 0;
    quizScore = 0;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('character-study-container');
    const q = quizQuestions[currentQuestionIdx];

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4">
            <div class="w-full max-w-sm mb-8">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-bold text-gray-500">Q. ${currentQuestionIdx + 1} / 10</span>
                    <button onclick="closeWritingModal()" class="text-gray-400"><i class="fas fa-times"></i></button>
                </div>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500 transition-all duration-300" style="width: ${(currentQuestionIdx / 10) * 100}%"></div>
                </div>
            </div>

            <div class="text-center mb-10">
                <p class="text-gray-500 mb-2">이 글자의 발음은?</p>
                <h1 class="text-8xl font-black text-gray-800 animate-bounce-short">${q.answer.char}</h1>
            </div>

            <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
                ${q.options.map((opt, i) => `
                    <button onclick="checkAnswer(${i})" class="quiz-option py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-xl font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition">
                        ${opt.pron} (${opt.romaji})
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    container.classList.remove('hidden');
}

function checkAnswer(selectedIdx) {
    const q = quizQuestions[currentQuestionIdx];
    const isCorrect = q.options[selectedIdx].char === q.answer.char;
    
    if (isCorrect) quizScore++;

    // 피드백 효과 (간단히 다음 문제로 넘어감, 실제론 O/X 보여주면 좋음)
    if (currentQuestionIdx < 9) {
        currentQuestionIdx++;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const container = document.getElementById('character-study-container');
    let msg = quizScore === 10 ? "완벽해요! 🎉" : quizScore >= 7 ? "참 잘했어요! 👍" : "조금 더 연습해봐요 💪";

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 animate-fade-in">
            <div class="text-6xl mb-4">🏆</div>
            <h2 class="text-3xl font-black text-gray-800 mb-2">퀴즈 종료!</h2>
            <p class="text-gray-500 mb-8">${msg}</p>
            
            <div class="bg-gray-50 px-8 py-6 rounded-3xl mb-8 text-center border border-gray-100">
                <span class="block text-sm text-gray-400 uppercase tracking-widest mb-1">SCORE</span>
                <span class="text-5xl font-black ${quizScore >= 7 ? 'text-blue-500' : 'text-red-500'}">
                    ${quizScore} <span class="text-2xl text-gray-300">/ 10</span>
                </span>
            </div>

            <button onclick="showCharacterGrid(currentMode)" class="w-full max-w-xs py-4 bg-gray-800 text-white rounded-xl font-bold shadow-lg active:scale-95 transition">
                돌아가기
            </button>
        </div>
    `;
}

function closeQuizModal() {
    const container = document.getElementById('character-study-container');
    container.classList.add('hidden');
    container.innerHTML = '';
}


// --- 4. 캔버스 로직 (공통) ---
function initCanvas() {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 14; 
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(255, 75, 75, 0.8)'; // JAP-BONG RED

    currentCanvas = canvas;
    currentContext = ctx;
    isDrawing = false;

    // Events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
}

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
    currentContext.lineTo(x, y);
    currentContext.stroke();
}

function draw(e) {
    if (!isDrawing) return;
    currentContext.lineTo(e.offsetX, e.offsetY);
    currentContext.stroke();
}

function handleTouchStart(e) {
    e.preventDefault();
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
    if (currentContext) currentContext.closePath();
}

function clearCanvas() {
    if (currentCanvas && currentContext) {
        currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
    }
}

// 오디오 재생
function playAudio(text) {
    if ('speechSynthesis' in window) {
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
window.nextChar = nextChar;
window.clearCanvas = clearCanvas;
window.playAudio = playAudio;
window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;

// 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 탭이 비어있으면 초기화
    if(!document.getElementById('character-grid').innerHTML.trim()) {
        showCharacterGrid('hiragana');
    }
});
