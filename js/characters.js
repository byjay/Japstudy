/**
 * characters.js - 50음도 학습, 쓰기, 퀴즈, 통계 시스템 (Final Complete Ver.)
 */

// --- 1. 데이터 (50음도) ---
const charData = {
    hiragana: [
        { char: 'あ', romaji: 'a', pron: '아' }, { char: 'い', romaji: 'i', pron: '이' }, { char: 'う', romaji: 'u', pron: '우' }, { char: 'え', romaji: 'e', pron: '에' }, { char: 'お', romaji: 'o', pron: '오' },
        { char: 'か', romaji: 'ka', pron: '카' }, { char: 'き', romaji: 'ki', pron: '키' }, { char: 'く', romaji: 'ku', pron: '쿠' }, { char: 'け', romaji: 'ke', pron: '케' }, { char: 'こ', romaji: 'ko', pron: '코' },
        { char: 'さ', romaji: 'sa', pron: '사' }, { char: 'し', romaji: 'shi', pron: '시' }, { char: 'す', romaji: 'su', pron: '스' }, { char: 'せ', romaji: 'se', pron: '세' }, { char: 'そ', romaji: 'so', pron: '소' },
        { char: 'た', romaji: 'ta', pron: '타' }, { char: 'ち', romaji: 'chi', pron: '치' }, { char: 'つ', romaji: 'tsu', pron: '츠' }, { char: 'て', romaji: 'te', pron: '테' }, { char: 'と', romaji: 'to', pron: '토' },
        { char: 'な', romaji: 'na', pron: '나' }, { char: 'に', romaji: 'ni', pron: '니' }, { char: 'ぬ', romaji: 'nu', pron: '누' }, { char: 'ね', romaji: 'ne', pron: '네' }, { char: 'の', romaji: 'no', pron: '노' },
        { char: 'は', romaji: 'ha', pron: '하' }, { char: 'ひ', romaji: 'hi', pron: '히' }, { char: 'ふ', romaji: 'fu', pron: '후' }, { char: 'へ', romaji: 'he', pron: '헤' }, { char: 'ほ', romaji: 'ho', pron: '호' },
        { char: 'ま', romaji: 'ma', pron: '마' }, { char: 'み', romaji: 'mi', pron: '미' }, { char: 'む', romaji: 'mu', pron: '무' }, { char: 'め', romaji: 'me', pron: '메' }, { char: 'も', romaji: 'mo', pron: '모' },
        { char: 'や', romaji: 'ya', pron: '야' }, { char: '', romaji: '', pron: '' }, { char: 'ゆ', romaji: 'yu', pron: '유' }, { char: '', romaji: '', pron: '' }, { char: 'よ', romaji: 'yo', pron: '요' },
        { char: 'ら', romaji: 'ra', pron: '라' }, { char: 'り', romaji: 'ri', pron: '리' }, { char: 'る', romaji: 'ru', pron: '루' }, { char: 'れ', romaji: 're', pron: '레' }, { char: 'ろ', romaji: 'ro', pron: '로' },
        { char: 'わ', romaji: 'wa', pron: '와' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: 'を', romaji: 'wo', pron: '오' },
        { char: 'ん', romaji: 'n', pron: '응' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }
    ],
    katakana: [
        { char: 'ア', romaji: 'a', pron: '아' }, { char: 'イ', romaji: 'i', pron: '이' }, { char: 'ウ', romaji: 'u', pron: '우' }, { char: 'エ', romaji: 'e', pron: '에' }, { char: 'オ', romaji: 'o', pron: '오' },
        { char: 'カ', romaji: 'ka', pron: '카' }, { char: 'キ', romaji: 'ki', pron: '키' }, { char: 'ク', romaji: 'ku', pron: '쿠' }, { char: 'ケ', romaji: 'ke', pron: '케' }, { char: 'コ', romaji: 'ko', pron: '코' },
        { char: 'サ', romaji: 'sa', pron: '사' }, { char: 'シ', romaji: 'shi', pron: '시' }, { char: 'ス', romaji: 'su', pron: '스' }, { char: 'セ', romaji: 'se', pron: '세' }, { char: 'ソ', romaji: 'so', pron: '소' },
        { char: 'タ', romaji: 'ta', pron: '타' }, { char: 'チ', romaji: 'chi', pron: '치' }, { char: 'ツ', romaji: 'tsu', pron: '츠' }, { char: 'テ', romaji: 'te', pron: '테' }, { char: 'ト', romaji: 'to', pron: '토' },
        { char: 'ナ', romaji: 'na', pron: '나' }, { char: 'ニ', romaji: 'ni', pron: '니' }, { char: 'ヌ', romaji: 'nu', pron: '누' }, { char: 'ネ', romaji: 'ne', pron: '네' }, { char: 'ノ', romaji: 'no', pron: '노' },
        { char: 'ハ', romaji: 'ha', pron: '하' }, { char: 'ヒ', romaji: 'hi', pron: '히' }, { char: 'フ', romaji: 'fu', pron: '후' }, { char: 'ヘ', romaji: 'he', pron: '헤' }, { char: 'ホ', romaji: 'ho', pron: '호' },
        { char: 'マ', romaji: 'ma', pron: '마' }, { char: 'ミ', romaji: 'mi', pron: '미' }, { char: 'ム', romaji: 'mu', pron: '무' }, { char: 'メ', romaji: 'me', pron: '메' }, { char: 'モ', romaji: 'mo', pron: '모' },
        { char: 'ヤ', romaji: 'ya', pron: '야' }, { char: '', romaji: '', pron: '' }, { char: 'ユ', romaji: 'yu', pron: '유' }, { char: '', romaji: '', pron: '' }, { char: 'ヨ', romaji: 'yo', pron: '요' },
        { char: 'ラ', romaji: 'ra', pron: '라' }, { char: 'リ', romaji: 'ri', pron: '리' }, { char: 'ル', romaji: 'ru', pron: '루' }, { char: 'レ', romaji: 're', pron: '레' }, { char: 'ロ', romaji: 'ro', pron: '로' },
        { char: 'ワ', romaji: 'wa', pron: '와' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: 'ヲ', romaji: 'wo', pron: '오' },
        { char: 'ン', romaji: 'n', pron: '응' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }, { char: '', romaji: '', pron: '' }
    ]
};

// 상태 변수
let currentCanvas = null;
let currentContext = null;
let isDrawing = false;
let currentMode = 'hiragana';
let currentIndex = 0;
let studyStartTime = 0; // 학습 시작 시간 측정용

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

    // 모달 닫기
    closeQuizModal();
    closeWritingModal();
    closeHistoryModal(); // 통계 모달 닫기

    if (!grid) return;

    // 탭 스타일
    if (type === 'hiragana') {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-red-500 shadow-md transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
    } else {
        tabHiragana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-gray-500 bg-white border border-gray-200 shadow-sm transition-transform active:scale-95";
        tabKatakana.className = "char-type-tab px-6 py-2 rounded-full font-bold text-white bg-blue-500 shadow-md transition-transform active:scale-95";
    }

    // 퀴즈 및 통계 버튼 (상단 배치)
    let topButtonsHTML = `
        <div class="col-span-full mb-4 space-y-3">
            <div class="flex gap-2 justify-center">
                <button onclick="startQuiz('hiragana')" class="flex-1 max-w-[120px] px-3 py-2 bg-red-100 text-red-600 rounded-lg text-sm font-bold hover:bg-red-200 transition shadow-sm">
                    <i class="fas fa-question-circle"></i> 히라가나
                </button>
                <button onclick="startQuiz('katakana')" class="flex-1 max-w-[120px] px-3 py-2 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-200 transition shadow-sm">
                    <i class="fas fa-question-circle"></i> 가타카나
                </button>
                <button onclick="startQuiz('mix')" class="flex-1 max-w-[120px] px-3 py-2 bg-purple-100 text-purple-600 rounded-lg text-sm font-bold hover:bg-purple-200 transition shadow-sm">
                    <i class="fas fa-random"></i> 복합 퀴즈
                </button>
            </div>
            <div class="flex justify-center">
                <button onclick="showHistory()" class="w-full max-w-sm px-4 py-2 bg-gray-800 text-white rounded-xl text-sm font-bold hover:bg-gray-900 transition shadow-md">
                    <i class="fas fa-chart-line text-yellow-400 mr-2"></i> 나의 학습 통계 (History)
                </button>
            </div>
        </div>
    `;

    // 그리드 생성
    const data = charData[type];
    const gridHTML = data.map((item, idx) => {
        if (!item.char) return `<div class="invisible"></div>`;

        // 마스터 여부 체크 (간단히 localStorage 사용 기록 체크)
        const history = getStudyHistory();
        const isMastered = history.masteredChars.includes(item.char);
        const masterBadge = isMastered ? '<span class="absolute top-1 right-1 text-[10px] text-yellow-500">⭐</span>' : '';

        return `
            <button onclick="currentIndex=${idx}; openWritingModal('${item.char}', '${item.pron}', '${item.romaji}')" 
                class="relative flex flex-col items-center justify-center bg-white rounded-lg border ${isMastered ? 'border-yellow-300 bg-yellow-50' : 'border-gray-200'} shadow-sm active:bg-gray-50 active:scale-95 transition-all h-16">
                ${masterBadge}
                <span class="text-xl font-bold text-gray-800 leading-none mb-1" style="font-family: 'Noto Sans JP', sans-serif;">${item.char}</span>
                <span class="text-[10px] text-gray-400 font-medium leading-none">${item.pron}</span>
            </button>
        `;
    }).join('');

    grid.innerHTML = topButtonsHTML + gridHTML;
}


// --- 2. 쓰기 연습 모달 (행 표시 및 획순 기능 강화) ---

function openWritingModal(char, pron, romaji) {
    studyStartTime = Date.now(); // 학습 시작 시간 기록
    saveStudyLog('view', char); // 학습 기록 저장

    const container = document.getElementById('character-study-container');

    // [기능 추가] 상단 행(Row) 글자 가져오기 (5개 단위)
    const list = charData[currentMode];
    const rowStartIdx = Math.floor(currentIndex / 5) * 5;
    const rowItems = list.slice(rowStartIdx, rowStartIdx + 5);

    // 상단 행 네비게이션 HTML 생성
    const rowNavHTML = rowItems.map(item => {
        if (!item.char) return `<div class="w-8"></div>`;
        const isCurrent = item.char === char;
        return `
            <div class="flex flex-col items-center justify-center w-9 h-9 rounded-lg ${isCurrent ? 'bg-red-500 text-white shadow-md transform scale-110 ring-2 ring-red-200' : 'bg-white text-gray-400 border border-gray-100'}">
                <span class="text-sm font-bold">${item.char}</span>
            </div>
        `;
    }).join('');

    // 획순 이미지 (위키미디어)
    const strokeUrl = `https://upload.wikimedia.org/wikipedia/commons/6/6f/BW_Hiragana_${romaji}_2021.svg`;

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-2 backdrop-blur-sm animate-fade-in">
            
            <div class="w-full max-w-md flex flex-col items-center mb-4 gap-3">
                <div class="w-full flex justify-between items-center px-2">
                    <span class="text-gray-400 text-xs font-bold uppercase tracking-widest">${currentMode.toUpperCase()} STUDY</span>
                    <button onclick="closeWritingModal()" class="px-3 py-1 rounded-full bg-white/20 text-white text-xs hover:bg-white/30">
                        닫기 <i class="fas fa-times ml-1"></i>
                    </button>
                </div>
                <div class="flex gap-2 p-2 bg-gray-800/50 rounded-xl backdrop-blur-md">
                    ${rowNavHTML}
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-2xl mb-4">
                
                <div class="flex flex-col gap-2 w-full max-w-[200px]">
                    <div class="bg-white rounded-2xl p-4 text-center shadow-lg">
                        <h3 class="text-5xl font-black text-gray-800 mb-1" style="font-family: 'Noto Sans JP', sans-serif;">${char}</h3>
                        <p class="text-gray-500 font-bold text-lg">${pron} <span class="text-gray-300 font-normal">[${romaji}]</span></p>
                    </div>
                    
                    <div class="bg-white rounded-2xl p-2 text-center shadow-lg flex-1 min-h-[150px] flex flex-col items-center justify-center relative overflow-hidden">
                        <span class="absolute top-2 left-2 text-[10px] text-gray-400 font-bold bg-gray-100 px-1 rounded">획순 가이드</span>
                        <div class="w-24 h-24 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                            <span class="text-6xl text-gray-200 font-serif absolute opacity-50">${char}</span>
                            <img src="${strokeUrl}" class="w-full h-full object-contain relative z-10 opacity-80" onerror="this.style.display='none'">
                        </div>
                    </div>
                </div>

                <div class="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-[300px] h-[300px] select-none cursor-crosshair group">
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span class="text-[200px] text-gray-100 font-medium leading-none pb-4 group-hover:text-gray-200 transition-colors" 
                              style="font-family: 'Noto Sans JP', sans-serif;">
                            ${char}
                        </span>
                    </div>
                    <div class="absolute w-full h-px bg-red-50 top-1/2 pointer-events-none"></div>
                    <div class="absolute h-full w-px bg-red-50 left-1/2 pointer-events-none"></div>
                    
                    <canvas id="writing-canvas" width="300" height="300" class="absolute inset-0 w-full h-full touch-none"></canvas>
                    
                    <div class="absolute bottom-2 right-2 opacity-50 pointer-events-none text-[10px] text-gray-400">
                        <i class="fas fa-pen"></i> 여기에 써보세요
                    </div>
                </div>
            </div>

            <div class="w-full max-w-[300px] grid grid-cols-2 gap-3 mb-4">
                <button onclick="clearCanvas()" class="py-3 bg-gray-700 text-white rounded-xl font-bold shadow-lg active:scale-95 transition text-sm">
                    <i class="fas fa-eraser"></i> 지우기
                </button>
                <button onclick="playAudio('${char}')" class="py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition text-sm">
                    <i class="fas fa-volume-up"></i> 듣기
                </button>
            </div>

            <div class="w-full max-w-[300px]">
                <button onclick="nextChar()" class="w-full py-3.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold shadow-lg active:scale-95 transition flex items-center justify-center gap-2">
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
    // 학습 시간 저장 로직
    const duration = (Date.now() - studyStartTime) / 1000; // 초 단위
    if (duration > 2) { // 2초 이상 봤을 때만 시간 인정
        saveStudyLog('time', duration);
    }

    document.getElementById('character-study-container').classList.add('hidden');
    document.getElementById('character-study-container').innerHTML = '';
    // 그리드 리렌더링 (마스터 배지 업데이트 위해)
    showCharacterGrid(currentMode);
}

function nextChar() {
    // 현재 글자 학습 완료 처리 (간단히 다음 버튼 누르면 마스터로 간주)
    const list = charData[currentMode];
    const item = list[currentIndex];
    if (item && item.char) saveStudyLog('master', item.char);

    let nextIdx = currentIndex + 1;
    while (nextIdx < list.length && !list[nextIdx].char) {
        nextIdx++;
    }

    if (nextIdx < list.length) {
        currentIndex = nextIdx;
        const nextItem = list[currentIndex];
        openWritingModal(nextItem.char, nextItem.pron, nextItem.romaji);
    } else {
        alert("마지막 글자입니다! 수고하셨어요 🎉");
        closeWritingModal();
    }
}


// --- 3. 퀴즈 시스템 ---

function startQuiz(mode) {
    let sourceData = [];
    if (mode === 'hiragana') sourceData = charData.hiragana.filter(i => i.char);
    else if (mode === 'katakana') sourceData = charData.katakana.filter(i => i.char);
    else sourceData = [...charData.hiragana, ...charData.katakana].filter(i => i.char);

    quizQuestions = [];
    for (let i = 0; i < 10; i++) {
        const answer = sourceData[Math.floor(Math.random() * sourceData.length)];
        const distractors = [];
        while (distractors.length < 3) {
            const d = sourceData[Math.floor(Math.random() * sourceData.length)];
            if (d.char !== answer.char && !distractors.includes(d)) {
                distractors.push(d);
            }
        }
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
                    <button onclick="closeQuizModal()" class="text-gray-400"><i class="fas fa-times"></i></button>
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
                    <button onclick="checkAnswer(${i})" class="quiz-option py-4 bg-gray-50 border-2 border-gray-200 rounded-xl text-xl font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition shadow-sm active:scale-95">
                        ${opt.pron}
                        <span class="block text-xs text-gray-400 font-normal">(${opt.romaji})</span>
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

    if (currentQuestionIdx < 9) {
        currentQuestionIdx++;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    saveStudyLog('quiz', quizScore); // 퀴즈 점수 저장

    const container = document.getElementById('character-study-container');
    let msg = quizScore === 10 ? "완벽해요! 🎉" : quizScore >= 7 ? "참 잘했어요! 👍" : "조금 더 연습해봐요 💪";

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-4 animate-fade-in">
            <div class="text-6xl mb-4">🏆</div>
            <h2 class="text-3xl font-black text-gray-800 mb-2">퀴즈 종료!</h2>
            <p class="text-gray-500 mb-8">${msg}</p>
            
            <div class="bg-gray-50 px-8 py-6 rounded-3xl mb-8 text-center border border-gray-100 shadow-inner">
                <span class="block text-sm text-gray-400 uppercase tracking-widest mb-1">SCORE</span>
                <span class="text-5xl font-black ${quizScore >= 7 ? 'text-blue-500' : 'text-red-500'}">
                    ${quizScore} <span class="text-2xl text-gray-300">/ 10</span>
                </span>
            </div>

            <div class="flex flex-col w-full max-w-xs gap-2">
                <button onclick="showCharacterGrid(currentMode)" class="w-full py-4 bg-gray-800 text-white rounded-xl font-bold shadow-lg active:scale-95 transition">
                    목록으로
                </button>
                <button onclick="startQuiz('mix')" class="w-full py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 active:scale-95 transition">
                    다시 하기
                </button>
            </div>
        </div>
    `;
}

function closeQuizModal() {
    const container = document.getElementById('character-study-container');
    container.classList.add('hidden');
    container.innerHTML = '';
}


// --- 4. 통계 및 이력 관리 (LocalStorage) ---

const STORAGE_KEY = 'jap_bong_history_v1';

function getStudyHistory() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        return {
            logs: [], // { date: 'YYYY-MM-DD', type: 'view'|'quiz'|'time', val: ... }
            masteredChars: [] // ['あ', 'い', ...]
        };
    }
    return JSON.parse(raw);
}

function saveStudyLog(type, value) {
    const history = getStudyHistory();
    const today = new Date().toISOString().split('T')[0];

    // 로그 추가
    history.logs.push({ date: today, type: type, val: value, ts: Date.now() });

    // 마스터 처리 (중복 방지)
    if (type === 'master' && !history.masteredChars.includes(value)) {
        history.masteredChars.push(value);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function showHistory() {
    const history = getStudyHistory();
    const container = document.getElementById('character-study-container');

    // 분석 로직
    const totalTimeSec = history.logs.filter(l => l.type === 'time').reduce((a, b) => a + parseFloat(b.val), 0);
    const totalTimeMin = Math.floor(totalTimeSec / 60);
    const quizLogs = history.logs.filter(l => l.type === 'quiz');
    const avgQuizScore = quizLogs.length > 0 ? (quizLogs.reduce((a, b) => a + b.val, 0) / quizLogs.length).toFixed(1) : 0;
    const masteredCount = history.masteredChars.length;

    // 일별 공부 횟수 (최근 7일)
    // 간단한 차트 대신 텍스트로 표현
    const today = new Date().toISOString().split('T')[0];
    const todayCount = history.logs.filter(l => l.date === today).length;

    container.innerHTML = `
        <div class="fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center p-4 animate-fade-in text-white">
            <div class="w-full max-w-md bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                <div class="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h2 class="text-xl font-bold text-white"><i class="fas fa-chart-pie mr-2 text-yellow-400"></i>학습 리포트</h2>
                    <button onclick="closeHistoryModal()" class="text-gray-400 hover:text-white"><i class="fas fa-times"></i></button>
                </div>
                
                <div class="p-6 grid grid-cols-2 gap-4">
                    <div class="bg-gray-700/50 p-4 rounded-xl text-center">
                        <p class="text-xs text-gray-400 mb-1">총 학습 시간</p>
                        <p class="text-2xl font-bold text-blue-400">${totalTimeMin}<span class="text-sm text-gray-500">분</span></p>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-xl text-center">
                        <p class="text-xs text-gray-400 mb-1">마스터한 글자</p>
                        <p class="text-2xl font-bold text-green-400">${masteredCount}<span class="text-sm text-gray-500">자</span></p>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-xl text-center">
                        <p class="text-xs text-gray-400 mb-1">퀴즈 평균 점수</p>
                        <p class="text-2xl font-bold text-purple-400">${avgQuizScore}<span class="text-sm text-gray-500">점</span></p>
                    </div>
                    <div class="bg-gray-700/50 p-4 rounded-xl text-center">
                        <p class="text-xs text-gray-400 mb-1">오늘 활동량</p>
                        <p class="text-2xl font-bold text-orange-400">${todayCount}<span class="text-sm text-gray-500">회</span></p>
                    </div>
                </div>

                <div class="px-6 pb-6">
                    <h3 class="text-sm font-bold text-gray-300 mb-3">🏆 학습 등급</h3>
                    <div class="w-full bg-gray-700 rounded-full h-4 mb-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-yellow-400 to-red-500 h-4 rounded-full transition-all duration-1000" style="width: ${Math.min((masteredCount / 100) * 100, 100)}%"></div>
                    </div>
                    <p class="text-xs text-gray-400 text-right">전체 100자 중 ${masteredCount}자 완료</p>
                </div>
                
                <div class="p-4 bg-gray-900/50 text-center">
                    <button onclick="closeHistoryModal()" class="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-bold transition">닫기</button>
                    <button onclick="localStorage.removeItem(STORAGE_KEY); alert('초기화됨'); showHistory();" class="px-6 py-2 text-red-400 hover:text-red-300 rounded-lg text-xs transition ml-2">기록 초기화</button>
                </div>
            </div>
        </div>
    `;
    container.classList.remove('hidden');
}

function closeHistoryModal() {
    const container = document.getElementById('character-study-container');
    container.classList.add('hidden');
    container.innerHTML = '';
}


// --- 5. 캔버스 로직 (공통) ---
function initCanvas() {
    const canvas = document.getElementById('writing-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(255, 75, 75, 0.8)'; // 반투명 붉은색

    currentCanvas = canvas;
    currentContext = ctx;
    isDrawing = false;

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
window.showHistory = showHistory;
window.closeHistoryModal = closeHistoryModal;

// 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('character-grid');
    if (grid && !grid.innerHTML.trim()) {
        showCharacterGrid('hiragana');
    }
});

console.log('characters.js loaded - All-in-One Final.');
