/**
 * ui.js - UI 제어
 */

// 탭 전환
function showTab(tabName) {
    console.log('showTab called:', tabName);

    // 모든 탭 숨기기
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('hidden');
    });

    // 모든 네비게이션 버튼 비활성화
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    // 선택된 탭 표시
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
        targetTab.classList.remove('hidden');
        console.log('Tab activated:', tabName);
    } else {
        console.error('Tab not found:', tabName);
    }

    // 홈이 아닌 탭에서는 메인 메뉴(4개 카드) 숨기기
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        if (tabName === 'home') {
            mainMenu.style.display = 'grid';
        } else {
            mainMenu.style.display = 'none';
        }
    }

    // 선택된 네비게이션 버튼 활성화
    const navButtons = document.querySelectorAll('.nav-tab');
    navButtons.forEach(btn => {
        const btnOnClick = btn.getAttribute('onclick');
        if (btnOnClick && btnOnClick.includes(`'${tabName}'`)) {
            btn.classList.add('active');
        }
    });

    // 탭별 초기화
    if (tabName === 'study') {
        // 학습 탭 초기화
        if (typeof showStudyMode === 'function') {
            showStudyMode('vocabulary');
        }
    } else if (tabName === 'progress') {
        // 진행 상황 초기화
        if (typeof renderProgressCharts === 'function') {
            renderProgressCharts();
        }
    } else if (tabName === 'fukuoka') {
        // 후쿠오카 탭 - 이미 렌더링되어 있음
        console.log('Fukuoka tab shown');
    } else if (tabName === 'word_study') {
        // 단어 암기 탭 초기화
        if (typeof initWordStudy === 'function') {
            initWordStudy();
        }
    } else if (tabName === 'conversation') {
        // 실전 회화 탭 초기화
        if (typeof initConversation === 'function') {
            initConversation();
        }
    }
}

// 메인 메뉴에서 섹션 열기
function openSection(tabName) {
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }

    if (typeof showTab === 'function') {
        showTab(tabName);
    }

    // 스크롤 맨 위로
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 모달 표시
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
}

// 모달 숨기기
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

// 오디오 재생 (TTS)
function playAudio(text) {
    if (!text) return;

    // 브라우저 TTS 사용
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; // 일본어 설정
    utterance.rate = 0.9; // 약간 느리게
    window.speechSynthesis.speak(utterance);

    console.log('Playing audio:', text);
}

console.log('ui.js loaded');
