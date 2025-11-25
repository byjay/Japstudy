/**
 * conversation.js - 심층 일본어 회화 학습 (Deep Research Edition)
 * 카테고리: 10개
 * 특징: 상황별 티키타카 대화, 정교한 한글 발음 표기
 */

// ==========================================
// 1. 회화 데이터 (Deep Research Results)
// ==========================================
const conversationModuleData = {
    'immigration': {
        title: '입국 심사',
        icon: 'fas fa-passport',
        color: 'blue',
        conversations: [
            {
                question: { jp: 'パスポートと入国カードを見せてください。', kr: '여권과 입국 카드를 보여주세요.', romaji: '파스포-토토 뉴-코쿠카-도오 미세테 쿠다사이' },
                answers: [
                    { jp: 'はい、どうぞ。', kr: '네, 여기 있습니다.', romaji: '하이, 도-조' },
                    { jp: '入国カードはどこにありますか？', kr: '입국 카드는 어디에 있나요?', romaji: '뉴-코쿠카-도와 도코니 아리마스카?' }
                ]
            },
            {
                question: { jp: '訪問の目的は何ですか？', kr: '방문 목적은 무엇입니까?', romaji: '호-몬노 모쿠테키와 난데스카?' },
                answers: [
                    { jp: '観光です。', kr: '관광입니다.', romaji: '칸코-데스' },
                    { jp: '仕事できました。', kr: '일 때문에 왔습니다.', romaji: '시고토데 키마시타' },
                    { jp: '友人に会いに来ました。', kr: '친구를 만나러 왔습니다.', romaji: '유-진니 아이니 키마시타' }
                ]
            },
            {
                question: { jp: '滞在期間はどのくらいですか？', kr: '체류 기간은 어느 정도입니까?', romaji: '타이자이 키칸와 도노쿠라이 데스카?' },
                answers: [
                    { jp: '3泊4日です。', kr: '3박 4일입니다.', romaji: '삼파쿠 욧카데스' },
                    { jp: '一週間です。', kr: '일주일입니다.', romaji: '잇슈-칸데스' }
                ]
            },
            {
                question: { jp: 'どこに泊まりますか？', kr: '어디에 머무십니까?', romaji: '도코니 토마리마스카?' },
                answers: [
                    { jp: '新宿のホテルです。', kr: '신주쿠의 호텔입니다.', romaji: '신쥬쿠노 호테루데스' },
                    { jp: '知人の家です。', kr: '지인의 집입니다.', romaji: '치진노 이에데스' }
                ]
            },
            {
                question: { jp: '帰りのチケットは持っていますか？', kr: '돌아가는 티켓은 가지고 있습니까?', romaji: '카에리노 치켓토와 못테 이마스카?' },
                answers: [
                    { jp: 'はい、これです。', kr: '네, 이것입니다.', romaji: '하이, 코레데스' },
                    { jp: 'スマホに保存してあります。', kr: '스마트폰에 저장해 뒀습니다.', romaji: '스마호니 호존시테 아리마스' }
                ]
            }
        ]
    },
    'transportation': {
        title: '교통 / 이동',
        icon: 'fas fa-subway',
        color: 'red',
        conversations: [
            {
                question: { jp: 'この電車は渋谷に行きますか？', kr: '이 전철은 시부야에 갑니까?', romaji: '코노 덴샤와 시부야니 이키마스카?' },
                answers: [
                    { jp: 'はい、行きますよ。', kr: '네, 갑니다.', romaji: '하이, 이키마스요' },
                    { jp: 'いいえ、反対方向です。', kr: '아뇨, 반대 방향입니다.', romaji: '이-에, 한타이 호-코-데스' }
                ]
            },
            {
                question: { jp: '切符売り場はどこですか？', kr: '표 사는 곳은 어디입니까?', romaji: '킵푸 우리바와 도코데스카?' },
                answers: [
                    { jp: '改札の隣にあります。', kr: '개찰구 옆에 있습니다.', romaji: '카이사츠노 토나리니 아리마스' },
                    { jp: 'あそこの自動券売機です。', kr: '저기 있는 자동 발매기입니다.', romaji: '아소코노 지도-켄바이키데스' }
                ]
            },
            {
                question: { jp: 'ICカードにチャージしたいんですが。', kr: 'IC카드(교통카드)에 충전하고 싶은데요.', romaji: '아이시-카-도니 챠-지 시타인 데스가' },
                answers: [
                    { jp: '千円からチャージできます。', kr: '천엔부터 충전 가능합니다.', romaji: '센엔카라 챠-지 데키마스' },
                    { jp: '画面の「チャージ」を押してください。', kr: '화면의 "충전"을 눌러주세요.', romaji: '가멘노 "챠-지"오 오시테쿠다사이' }
                ]
            },
            {
                question: { jp: 'ここから東京駅までどれくらいかかりますか？', kr: '여기서 도쿄역까지 얼마나 걸립니까?', romaji: '코코카라 토-쿄-에키마데 도레쿠라이 카카리마스카?' },
                answers: [
                    { jp: '電車で30分くらいです。', kr: '전철로 30분 정도입니다.', romaji: '덴샤데 산쥿푼 쿠라이데스' },
                    { jp: 'タクシーだと高いですよ。', kr: '택시라면 비싸요.', romaji: '타쿠시-다토 타카이데스요' }
                ]
            },
            {
                question: { jp: '運転手さん、ここで降ろしてください。', kr: '기사님, 여기서 내려주세요.', romaji: '운텐슈산, 코코데 오로시테 쿠다사이' },
                answers: [
                    { jp: 'はい、わかりました。', kr: '네, 알겠습니다.', romaji: '하이, 와카리마시타' },
                    { jp: '左側に停めますね。', kr: '왼쪽에 세울게요.', romaji: '히다리가와니 토메마스네' }
                ]
            }
        ]
    },
    'hotel': {
        title: '호텔 / 숙박',
        icon: 'fas fa-bed',
        color: 'green',
        conversations: [
            {
                question: { jp: 'チェックインをお願いします。', kr: '체크인을 부탁합니다.', romaji: '쳇쿠인오 오네가이시마스' },
                answers: [
                    { jp: 'お名前をいただけますか？', kr: '성함을 알 수 있을까요?', romaji: '오나마에오 이타다케마스카?' },
                    { jp: 'パスポートをお預かりします。', kr: '여권을 잠시 맡아두겠습니다.', romaji: '파스포-토오 오아즈카리 시마스' }
                ]
            },
            {
                question: { jp: '朝食は何時からですか？', kr: '조식은 몇 시부터입니까?', romaji: '쵸-쇼쿠와 난지카라 데스카?' },
                answers: [
                    { jp: '朝7時から10時までです。', kr: '아침 7시부터 10시까지입니다.', romaji: '아사 시치지카라 쥬-지마데 데스' },
                    { jp: '1階のレストランでどうぞ。', kr: '1층 레스토랑에서 드세요.', romaji: '잇카이노 레스토란데 도-조' }
                ]
            },
            {
                question: { jp: 'Wi-Fiのパスワードを教えてください。', kr: '와이파이 비밀번호를 알려주세요.', romaji: '와이파이노 파스와-도오 오시에테 쿠다사이' },
                answers: [
                    { jp: 'カードキーの裏に書いてあります。', kr: '카드키 뒤에 적혀 있습니다.', romaji: '카-도키-노 우라니 카이테 아리마스' },
                    { jp: '部屋番号と同じです。', kr: '방 번호와 같습니다.', romaji: '헤야방고-토 오나지데스' }
                ]
            },
            {
                question: { jp: '荷物を預かってもらえますか？', kr: '짐을 맡아주실 수 있나요?', romaji: '니모츠오 아즈캇테 모라에마스카?' },
                answers: [
                    { jp: 'はい、チェックアウト後でも大丈夫です。', kr: '네, 체크아웃 후에도 괜찮습니다.', romaji: '하이, 쳇쿠아우토 아토데모 다이죠-부데스' },
                    { jp: '引換証をお持ちください。', kr: '보관증을 가지고 계세요.', romaji: '히키카에쇼-오 오모치쿠다사이' }
                ]
            },
            {
                question: { jp: 'お湯が出ないんですが。', kr: '뜨거운 물이 안 나오는데요.', romaji: '오유가 데나인 데스가' },
                answers: [
                    { jp: '申し訳ありません。すぐ確認します。', kr: '죄송합니다. 바로 확인하겠습니다.', romaji: '모-시와케 아리마센. 스구 카쿠닌 시마스' },
                    { jp: '少々お待ちください。', kr: '잠시만 기다려주세요.', romaji: '쇼-쇼- 오마치 쿠다사이' }
                ]
            }
        ]
    },
    'restaurant': {
        title: '식당 / 맛집',
        icon: 'fas fa-utensils',
        color: 'orange',
        conversations: [
            {
                question: { jp: '何名様ですか？', kr: '몇 분이십니까?', romaji: '난메-사마 데스카?' },
                answers: [
                    { jp: '2人です。', kr: '4명입니다.', romaji: '후타리데스' },
                    { jp: '4人ですが、席はありますか？', kr: '4명인데, 자리 있나요?', romaji: '요닌데스가, 세키와 아리마스카?' }
                ]
            },
            {
                question: { jp: 'ご注文はお決まりですか？', kr: '주문하시겠습니까?', romaji: '고츄-몬와 오키마리 데스카?' },
                answers: [
                    { jp: 'これとこれをください。', kr: '이것과 이것을 주세요.', romaji: '코레토 코레오 쿠다사이' },
                    { jp: 'おすすめのメニューは何ですか？', kr: '추천 메뉴는 무엇인가요?', romaji: '오스스메노 메뉴-와 난데스카?' },
                    { jp: 'もう少し時間をください。', kr: '시간을 조금 더 주세요.', romaji: '모-스코시 지칸오 쿠다사이' }
                ]
            },
            {
                question: { jp: 'パクチーは入っていますか？', kr: '고수가 들어있나요?', romaji: '파쿠치-와 하잇테 이마스카?' },
                answers: [
                    { jp: 'はい、入っています。', kr: '네, 들어있습니다.', romaji: '하이, 하잇테 이마스' },
                    { jp: '抜くこともできますよ。', kr: '뺄 수도 있어요.', romaji: '누쿠코토모 데키마스요' }
                ]
            },
            {
                question: { jp: 'お会計をお願いします。', kr: '계산 부탁합니다.', romaji: '오카이케이오 오네가이시마스' },
                answers: [
                    { jp: 'ご一緒でよろしいですか？', kr: '같이 계산해 드릴까요?', romaji: '고잇쇼데 요로시-데스카?' },
                    { jp: '別々にお願いします。', kr: '따로따로 부탁합니다.', romaji: '베츠베츠니 오네가이시마스' }
                ]
            },
            {
                question: { jp: 'クレジットカードは使えますか？', kr: '신용카드 사용할 수 있나요?', romaji: '쿠레짓토카-도와 츠카에마스카?' },
                answers: [
                    { jp: 'はい、ご利用いただけます。', kr: '네, 이용 가능합니다.', romaji: '하이, 고리요- 이타다케마스' },
                    { jp: '申し訳ありません。現金のみです。', kr: '죄송합니다. 현금만 가능합니다.', romaji: '모-시와케 아리마센. 겐킨노미데스' }
                ]
            }
        ]
    },
    'shopping': {
        title: '쇼핑 / 면세',
        icon: 'fas fa-shopping-bag',
        color: 'purple',
        conversations: [
            {
                question: { jp: '試着してもいいですか？', kr: '입어봐도 될까요?', romaji: '시챠쿠 시테모 이-데스카?' },
                answers: [
                    { jp: 'はい、試着室はこちらです。', kr: '네, 탈의실은 이쪽입니다.', romaji: '하이, 시챠쿠시츠와 코치라데스' },
                    { jp: 'フェイスカバーをお願いします。', kr: '페이스 커버를 부탁드립니다.', romaji: '페이스카바-오 오네가이시마스' }
                ]
            },
            {
                question: { jp: 'もう少し大きいサイズはありますか？', kr: '좀 더 큰 사이즈 있나요?', romaji: '모-스코시 오-키- 사이즈와 아리마스카?' },
                answers: [
                    { jp: '在庫を確認してきます。', kr: '재고를 확인하고 오겠습니다.', romaji: '자이코오 카쿠닌시테 키마스' },
                    { jp: 'これが入荷した最後の一点です。', kr: '이게 들어온 마지막 한 장입니다.', romaji: '코레가 뉴-카시타 사이고노 잇텐데스' }
                ]
            },
            {
                question: { jp: 'これは免税になりますか？', kr: '이거 면세 되나요?', romaji: '코레와 멘제-니 나리마스카?' },
                answers: [
                    { jp: 'はい、パスポートをお持ちですか？', kr: '네, 여권을 가지고 계십니까?', romaji: '하이, 파스포-토오 오모치데스카?' },
                    { jp: '税抜5000円以上から可能です。', kr: '세금 제외 5000엔 이상부터 가능합니다.', romaji: '제-누키 고센엔 이죠-카라 카노-데스' }
                ]
            },
            {
                question: { jp: 'プレゼント用に包んでください。', kr: '선물용으로 포장해 주세요.', romaji: '푸레젠토요-니 츠츤데 쿠다사이' },
                answers: [
                    { jp: 'かしこまりました。', kr: '알겠습니다.', romaji: '카시코마리 마시타' },
                    { jp: '有料になりますが、よろしいですか？', kr: '유료인데, 괜찮으십니까?', romaji: '유-료-니 나리마스가, 요로시-데스카?' }
                ]
            },
            {
                question: { jp: '新しいものを出してもらえますか？', kr: '새 상품으로 주실 수 있나요?', romaji: '아타라시- 모노오 다시테 모라에마스카?' },
                answers: [
                    { jp: 'はい、少々お待ちください。', kr: '네, 잠시만 기다려주세요.', romaji: '하이, 쇼-쇼- 오마치쿠다사이' },
                    { jp: '現品限りとなっております。', kr: '진열된 상품이 전부입니다.', romaji: '겐핀 카기리토 낫테 오리마스' }
                ]
            }
        ]
    },
    'convenience': {
        title: '편의점',
        icon: 'fas fa-store',
        color: 'teal',
        conversations: [
            {
                question: { jp: 'お弁当、温めますか？', kr: '도시락, 데워 드릴까요?', romaji: '오벤토-, 아타타메 마스카?' },
                answers: [
                    { jp: 'はい、お願いします。', kr: '네, 부탁합니다.', romaji: '하이, 오네가이시마스' },
                    { jp: 'いいえ、そのままでいいです。', kr: '아뇨, 그대로 괜찮습니다.', romaji: '이-에, 소노마마데 이-데스' }
                ]
            },
            {
                question: { jp: 'ポイントカードはお持ちですか？', kr: '포인트 카드 가지고 계신가요?', romaji: '포인토카-도와 오모치 데스카?' },
                answers: [
                    { jp: 'ないです。', kr: '없습니다.', romaji: '나이데스' },
                    { jp: '持っていません。', kr: '안 가지고 있어요.', romaji: '못테 이마센' }
                ]
            },
            {
                question: { jp: 'レジ袋はご利用ですか？', kr: '비닐봉투 필요하신가요?', romaji: '레지부쿠로와 고리요- 데스카?' },
                answers: [
                    { jp: 'はい、一枚ください。', kr: '네, 한 장 주세요.', romaji: '하이, 이치마이 쿠다사이' },
                    { jp: 'いいえ、テープだけでいいです。', kr: '아뇨, 테이프만 붙여주세요.', romaji: '이-에, 테-푸다케데 이-데스' }
                ]
            },
            {
                question: { jp: '年齢確認ボタンを押してください。', kr: '연령 확인 버튼을 눌러주세요. (술/담배 구매 시)', romaji: '넨레-카쿠닌 보탄오 오시테 쿠다사이' },
                answers: [
                    { jp: 'はい、これですね。', kr: '네, 이거군요.', romaji: '하이, 코레데스네' },
                    { jp: '画面をタッチします。', kr: '화면을 터치합니다.', romaji: '가멘오 탓치 시마스' }
                ]
            },
            {
                question: { jp: 'トイレを借りてもいいですか？', kr: '화장실 좀 써도 될까요?', romaji: '토이레오 카리테모 이-데스카?' },
                answers: [
                    { jp: 'はい、奥にあります。', kr: '네, 안쪽에 있습니다.', romaji: '하이, 오쿠니 아리마스' },
                    { jp: '申し訳ありません。貸出していません。', kr: '죄송합니다. 개방하지 않습니다.', romaji: '모-시와케 아리마센. 카시다시테 이마센' }
                ]
            }
        ]
    },
    'cafe': {
        title: '카페 / 주문',
        icon: 'fas fa-coffee',
        color: 'brown',
        conversations: [
            {
                question: { jp: '店内でお召し上がりですか？', kr: '매장에서 드시고 가십니까?', romaji: '텐나이데 오메시아가리 데스카?' },
                answers: [
                    { jp: 'はい、店内で。', kr: '네, 먹고 갈게요.', romaji: '하이, 텐나이데' },
                    { jp: '持ち帰りでお願いします。', kr: '포장해 주세요 (테이크아웃).', romaji: '모치카에리데 오네가이시마스' }
                ]
            },
            {
                question: { jp: 'サイズはいかがなさいますか？', kr: '사이즈는 어떻게 하시겠습니까?', romaji: '사이즈와 이카가 나사이마스카?' },
                answers: [
                    { jp: 'トールサイズで。', kr: '톨 사이즈로요.', romaji: '토-루 사이즈데' },
                    { jp: 'アイスコーヒーのSください。', kr: '아이스 커피 스몰 주세요.', romaji: '아이스코-히-노 에스 쿠다사이' }
                ]
            },
            {
                question: { jp: 'コンセントのある席はありますか？', kr: '콘센트 있는 자리 있나요?', romaji: '콘센토노 아루 세키와 아리마스카?' },
                answers: [
                    { jp: 'カウンター席にございます。', kr: '카운터석에 있습니다.', romaji: '카운타-세키니 고자이마스' },
                    { jp: 'あちらの窓側です。', kr: '저쪽 창가입니다.', romaji: '아치라노 마도가와 데스' }
                ]
            },
            {
                question: { jp: '氷少なめにできますか？', kr: '얼음 적게 해 주실 수 있나요?', romaji: '코-리 스쿠나메니 데키마스카?' },
                answers: [
                    { jp: 'はい、可能です。', kr: '네, 가능합니다.', romaji: '하이, 카노-데스' },
                    { jp: 'その分、ミルクを足しますか？', kr: '그만큼 우유를 더 넣어드릴까요?', romaji: '소노분, 미루쿠오 타시마스카?' }
                ]
            },
            {
                question: { jp: 'ごちそうさまでした。返却口はどこですか？', kr: '잘 먹었습니다. 반납구는 어디인가요?', romaji: '고치소-사마데시타. 헨캬쿠구치와 도코데스카?' },
                answers: [
                    { jp: '入り口の右手にございます。', kr: '입구 오른쪽에 있습니다.', romaji: '이리구치노 미기테니 고자이마스' },
                    { jp: 'そのままテーブルに置いて大丈夫です。', kr: '그대로 테이블에 두셔도 됩니다.', romaji: '소노마마 테-부루니 오이테 다이죠-부데스' }
                ]
            }
        ]
    },
    'tourism': {
        title: '관광지',
        icon: 'fas fa-map-marked-alt',
        color: 'indigo',
        conversations: [
            {
                question: { jp: '写真を撮ってもらえませんか？', kr: '사진 좀 찍어주시겠어요?', romaji: '샤신오 톳테 모라에마센카?' },
                answers: [
                    { jp: 'いいですよ。はい、チーズ！', kr: '좋아요. 자, 치즈!', romaji: '이-데스요. 하이, 치-즈!' },
                    { jp: 'ここを押せばいいですか？', kr: '여기를 누르면 되나요?', romaji: '코코오 오세바 이-데스카?' }
                ]
            },
            {
                question: { jp: '大人2枚ください。', kr: '어른 2장 주세요 (티켓).', romaji: '오토나 니마이 쿠다사이' },
                answers: [
                    { jp: '2000円になります。', kr: '2000엔입니다.', romaji: '니센엔니 나리마스' },
                    { jp: 'パンフレットはどの言語がいいですか？', kr: '팜플렛은 어느 언어가 좋으세요?', romaji: '판후렛토와 도노 겐고가 이-데스카?' }
                ]
            },
            {
                question: { jp: 'ここから一番近い駅はどこですか？', kr: '여기서 가장 가까운 역은 어디인가요?', romaji: '코코카라 이치방 치카이 에키와 도코데스카?' },
                answers: [
                    { jp: 'この道をまっすぐです。', kr: '이 길을 쭉 가시면 됩니다.', romaji: '코노 미치오 맛스구 데스' },
                    { jp: '歩くと20分かかりますよ。', kr: '걸으면 20분 걸려요.', romaji: '아루쿠토 니쥿푼 카카리마스요' }
                ]
            },
            {
                question: { jp: '何時まで開いていますか？', kr: '몇 시까지 합니까?', romaji: '난지마데 아이테 이마스카?' },
                answers: [
                    { jp: '午後6時までです。', kr: '오후 6시까지입니다.', romaji: '고고 로쿠지마데 데스' },
                    { jp: '最終入場は5時半です。', kr: '최종 입장은 5시 반입니다.', romaji: '사이슈-뉴-죠-와 고지한 데스' }
                ]
            },
            {
                question: { jp: 'コインロッカーはありますか？', kr: '코인 로커(물품보관함) 있나요?', romaji: '코인롯카-와 아리마스카?' },
                answers: [
                    { jp: '駅の改札前にあります。', kr: '역 개찰구 앞에 있습니다.', romaji: '에키노 카이사츠마에니 아리마스' },
                    { jp: 'あそこにあります。', kr: '저기에 있습니다.', romaji: '아소코니 아리마스' }
                ]
            }
        ]
    },
    'emergency': {
        title: '긴급 / 약국',
        icon: 'fas fa-first-aid',
        color: 'red',
        conversations: [
            {
                question: { jp: '頭が痛いんですが、薬はありますか？', kr: '머리가 아픈데, 약 있습니까?', romaji: '아타마가 이타인 데스가, 쿠스리와 아리마스카?' },
                answers: [
                    { jp: '鎮痛剤ならこれです。', kr: '진통제라면 이겁니다.', romaji: '친츠-자이나라 코레데스' },
                    { jp: '薬剤師に相談してください。', kr: '약사와 상담해 주세요.', romaji: '야쿠자이시니 소-단 시테쿠다사이' }
                ]
            },
            {
                question: { jp: '財布をなくしました。', kr: '지갑을 잃어버렸습니다.', romaji: '사이후오 나쿠시마시타' },
                answers: [
                    { jp: '交番に行きましたか？', kr: '파출소(코반)에 갔습니까?', romaji: '코-반니 이키마시타카?' },
                    { jp: 'どんな財布ですか？', kr: '어떤 지갑입니까?', romaji: '돈나 사이후 데스카?' }
                ]
            },
            {
                question: { jp: '警察を呼んでください！', kr: '경찰을 불러주세요!', romaji: '케이사츠오 욘데 쿠다사이!' },
                answers: [
                    { jp: 'わかりました。すぐ通報します。', kr: '알겠습니다. 바로 신고하겠습니다.', romaji: '와카리마시타. 스구 츠-호- 시마스' },
                    { jp: '落ち着いてください。', kr: '진정하세요.', romaji: '오치츠이테 쿠다사이' }
                ]
            },
            {
                question: { jp: '救急車をお願いします。', kr: '구급차를 부탁합니다.', romaji: '큐-큐-샤오 오네가이시마스' },
                answers: [
                    { jp: '場所はどこですか？', kr: '장소가 어디입니까?', romaji: '바쇼와 도코데스카?' },
                    { jp: 'どうしましたか？', kr: '무슨 일이십니까?', romaji: '도-시마시타카?' }
                ]
            },
            {
                question: { jp: '日本語が話せません。', kr: '일본어를 못합니다.', romaji: '니혼고가 하나세마센' },
                answers: [
                    { jp: '英語は話せますか？', kr: '영어는 할 수 있습니까?', romaji: '에이고와 하나세마스카?' },
                    { jp: '翻訳アプリを使いましょう。', kr: '번역 앱을 씁시다.', romaji: '혼야쿠아푸리오 츠카이마쇼-' }
                ]
            }
        ]
    },
    'social': {
        title: '인사 / 사교',
        icon: 'fas fa-handshake',
        color: 'pink',
        conversations: [
            {
                question: { jp: '初めまして。韓国から来ました。', kr: '처음 뵙겠습니다. 한국에서 왔습니다.', romaji: '하지메마시테. 칸코쿠카라 키마시타' },
                answers: [
                    { jp: 'よろしくお願いします。', kr: '잘 부탁드립니다.', romaji: '요로시쿠 오네가이시마스' },
                    { jp: '旅行ですか？', kr: '여행입니까?', romaji: '료코- 데스카?' }
                ]
            },
            {
                question: { jp: '日本語がお上手ですね。', kr: '일본어를 잘하시네요.', romaji: '니혼고가 오죠-즈 데스네' },
                answers: [
                    { jp: 'まだまだです。', kr: '아직 멀었습니다(겸손).', romaji: '마다마다데스' },
                    { jp: 'ドラマで勉強しました。', kr: '드라마로 공부했습니다.', romaji: '도라마데 벤쿄- 시마시타' }
                ]
            },
            {
                question: { jp: '今、何時ですか？', kr: '지금 몇 시인가요?', romaji: '이마, 난지 데스카?' },
                answers: [
                    { jp: 'ちょうど3時です。', kr: '딱 3시입니다.', romaji: '쵸-도 산지데스' },
                    { jp: 'わかりません。時計がなくて。', kr: '모르겠습니다. 시계가 없어서요.', romaji: '와카리마센. 토케-가 나쿠테' }
                ]
            },
            {
                question: { jp: '今日はいい天気ですね。', kr: '오늘 날씨가 좋네요.', romaji: '쿄-와 이- 텐키 데스네' },
                answers: [
                    { jp: 'そうですね。散歩日和です。', kr: '그렇네요. 산책하기 좋은 날입니다.', romaji: '소-데스네. 산포비요리 데스' },
                    { jp: '明日は雨らしいですよ。', kr: '내일은 비가 온다네요.', romaji: '아시타와 아메라시- 데스요' }
                ]
            },
            {
                question: { jp: 'すみません、ちょっとお尋ねします。', kr: '죄송합니다, 잠시 여쭤볼게요.', romaji: '스미마센, 춋토 오타즈네 시마스' },
                answers: [
                    { jp: 'はい、何でしょうか？', kr: '네, 무엇입니까?', romaji: '하이, 난데쇼-카?' },
                    { jp: '急いでいるので、すみません。', kr: '바빠서요, 죄송합니다.', romaji: '이소이데 이루노데, 스미마센' }
                ]
            }
        ]
    }
};

// ==========================================
// 2. 상태 관리 변수
// ==========================================
let currentConversationCategory = '';
let currentConversationIndex = 0;

// ==========================================
// 3. 초기화 함수
// ==========================================
function initConversation() {
    renderConversationCategories();
    console.log('심층 회화 모듈 초기화 완료');
}

// ==========================================
// 4. 카테고리 렌더링 (그리드)
// ==========================================
function renderConversationCategories() {
    const container = document.getElementById('conversation-grid');
    if (!container) return;

    container.innerHTML = '';

    Object.keys(conversationModuleData).forEach(key => {
        const conv = conversationModuleData[key];
        const card = document.createElement('div');
        // 카드 디자인: 호버 효과, 부드러운 전환, 직관적인 아이콘 배치
        card.className = 'bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100';
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-full bg-${conv.color}-100 flex items-center justify-center">
                    <i class="${conv.icon} text-${conv.color}-500 text-2xl"></i>
                </div>
                <span class="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">${conv.conversations.length}개 대화</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-1">${conv.title}</h3>
            <p class="text-sm text-gray-500 mb-4 line-clamp-1">실전 회화 및 핵심 표현 학습</p>
            <button class="w-full py-2.5 rounded-lg bg-gray-50 hover:bg-${conv.color}-50 text-${conv.color}-600 font-medium transition-colors text-sm flex items-center justify-center group">
                학습 시작
                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </button>
        `;

        // 카드 전체 클릭 시 학습 시작
        card.onclick = () => openConversationLesson(key);
        container.appendChild(card);
    });
}

// ==========================================
// 5. 학습 화면 진입
// ==========================================
function openConversationLesson(category) {
    currentConversationCategory = category;
    currentConversationIndex = 0;

    // 화면 전환 애니메이션 효과를 위해 opacity 사용 가능 (여기서는 display 전환만)
    document.getElementById('conversation-categories').style.display = 'none';
    const lessonView = document.getElementById('conversation-lesson');
    lessonView.style.display = 'block';

    // 스크롤 최상단 이동
    window.scrollTo(0, 0);

    const conv = conversationModuleData[category];

    // 헤더 설정
    const headerTitle = document.getElementById('conversation-lesson-title');
    headerTitle.innerHTML = `
        <div class="flex items-center">
            <div class="p-2 bg-white/20 rounded-lg mr-3">
                <i class="${conv.icon}"></i>
            </div>
            <span>${conv.title}</span>
        </div>
    `;

    // 헤더 배경색 변경 (동적 클래스 적용이 어려우므로 style 직접 제어 혹은 클래스 교체)
    // 기존 클래스 유지를 위해 부모 요소의 배경색은 그대로 두고 텍스트만 변경하거나
    // 필요 시 DOM 조작 추가 가능

    displayCurrentConversation();
    updateConversationNavigation();
}

// ==========================================
// 6. 대화 내용 표시 (핵심 로직)
// ==========================================
function displayCurrentConversation() {
    const conv = conversationModuleData[currentConversationCategory];
    const conversation = conv.conversations[currentConversationIndex];
    const total = conv.conversations.length;

    const container = document.getElementById('conversation-content');

    // 진행률 바 계산
    const progressPercent = ((currentConversationIndex + 1) / total) * 100;

    container.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <!-- 진행 상태 바 -->
            <div class="mb-6 flex items-center justify-between text-sm text-gray-500">
                <span>Progress</span>
                <span class="font-medium text-gray-700">${currentConversationIndex + 1} / ${total}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-8">
                <div class="bg-${conv.color}-500 h-2 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <!-- 질문 섹션 (상단) -->
                <div class="p-8 bg-gradient-to-b from-blue-50 to-white border-b border-blue-100">
                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0 mt-1">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">Q</span>
                        </div>
                        <div class="flex-1">
                            <div class="text-sm font-bold text-blue-600 mb-2 tracking-wide uppercase">Question</div>
                            <div class="text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
                                ${conversation.question.jp}
                            </div>
                            <div class="text-lg text-gray-500 mb-2 font-medium break-keep">
                                ${conversation.question.romaji}
                            </div>
                            <div class="text-xl text-blue-600 font-medium break-keep">
                                ${conversation.question.kr}
                            </div>
                            
                            <div class="mt-4 flex gap-2">
                                <button onclick="playAudio('${conversation.question.jp}')" class="inline-flex items-center px-4 py-2 bg-white border border-blue-200 shadow-sm rounded-lg text-blue-600 hover:bg-blue-50 transition-colors">
                                    <i class="fas fa-volume-up mr-2"></i> 듣기
                                </button>
                                <!-- 추후 녹음 기능 확장 가능 -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 답변 옵션 섹션 (하단) -->
                <div class="p-8 bg-white">
                    <div class="text-sm font-bold text-green-600 mb-4 tracking-wide uppercase flex items-center">
                        <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mr-2 text-xs">A</span>
                        Answer Options
                    </div>
                    
                    <div class="space-y-4">
                        ${conversation.answers.map((answer, idx) => `
                            <div class="group relative p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 cursor-pointer" onclick="playAudio('${answer.jp}')">
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold group-hover:bg-green-500 group-hover:text-white transition-colors mt-1">
                                        ${idx + 1}
                                    </div>
                                    <div class="flex-1">
                                        <div class="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-800">
                                            ${answer.jp}
                                        </div>
                                        <div class="text-sm text-gray-500 mb-1 font-medium">
                                            ${answer.romaji}
                                        </div>
                                        <div class="text-base text-gray-600 font-medium group-hover:text-green-700">
                                            ${answer.kr}
                                        </div>
                                    </div>
                                    <div class="text-gray-300 group-hover:text-green-500 self-center">
                                        <i class="fas fa-volume-up"></i>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 7. 네비게이션 제어
// ==========================================
function updateConversationNavigation() {
    const conv = conversationModuleData[currentConversationCategory];
    const prevBtn = document.getElementById('conv-prev-btn');
    const nextBtn = document.getElementById('conv-next-btn');

    // 이전 버튼 상태
    if (prevBtn) {
        prevBtn.disabled = currentConversationIndex === 0;
        prevBtn.className = currentConversationIndex === 0
            ? 'px-6 py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed font-medium'
            : 'px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm font-medium transition-colors';
    }

    // 다음 버튼 상태 및 텍스트 변경 (마지막이면 '완료' 표시 등 가능)
    if (nextBtn) {
        const isLast = currentConversationIndex === conv.conversations.length - 1;
        nextBtn.disabled = isLast; // 여기서는 마지막에서 멈춤. 루프를 원하면 로직 변경

        if (isLast) {
            nextBtn.innerHTML = '완료 <i class="fas fa-check ml-2"></i>';
            nextBtn.className = 'px-6 py-3 rounded-lg bg-green-500 text-white shadow-md font-medium cursor-default opacity-50';
        } else {
            nextBtn.innerHTML = '다음 <i class="fas fa-arrow-right ml-2"></i>';
            nextBtn.className = 'px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg font-medium transition-all transform hover:translate-x-1';
            nextBtn.disabled = false;
        }
    }
}

function previousConversation() {
    if (currentConversationIndex > 0) {
        currentConversationIndex--;
        displayCurrentConversation();
        updateConversationNavigation();
    }
}

function nextConversation() {
    const conv = conversationModuleData[currentConversationCategory];
    if (currentConversationIndex < conv.conversations.length - 1) {
        currentConversationIndex++;
        displayCurrentConversation();
        updateConversationNavigation();
    }
}

// ==========================================
// 8. 목록으로 돌아가기
// ==========================================
function backToConversationCategories() {
    // 애니메이션 처리를 원할 경우 여기에 클래스 토글 추가
    document.getElementById('conversation-categories').style.display = 'block';
    document.getElementById('conversation-lesson').style.display = 'none';
}

// 외부 오디오 재생 함수가 없다면 간단한 더미 함수 혹은 TTS 연결 필요
// window.playAudio = window.playAudio || function(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'ja-JP';
//     window.speechSynthesis.speak(utterance);
// };

console.log('conversation.js (Deep Research Ver.) 로드 완료');
