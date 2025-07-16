// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
    
    // アコーディオン機能
    function initAccordion() {
        const questions = document.querySelectorAll('.question');
        
        questions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = faqItem.querySelector('.answer');
                const toggle = this.querySelector('.toggle');
                
                // 現在の項目がアクティブかどうかチェック
                const isActive = faqItem.classList.contains('active');
                
                // すべての項目を閉じる（オプション：一度に一つだけ開く場合）
                // closeAllAccordions();
                
                if (!isActive) {
                    // 開く
                    faqItem.classList.add('active');
                    answer.classList.add('active');
                    toggle.textContent = '−';
                } else {
                    // 閉じる
                    faqItem.classList.remove('active');
                    answer.classList.remove('active');
                    toggle.textContent = '+';
                }
            });
        });
    }
    
    // すべてのアコーディオンを閉じる関数（必要に応じて使用）
    function closeAllAccordions() {
        const faqItems = document.querySelectorAll('.faq-item');
        const answers = document.querySelectorAll('.answer');
        const toggles = document.querySelectorAll('.toggle');
        
        faqItems.forEach(item => item.classList.remove('active'));
        answers.forEach(answer => answer.classList.remove('active'));
        toggles.forEach(toggle => toggle.textContent = '+');
    }
    

    
    // スムーススクロール機能
    function initSmoothScroll() {
        // ページ内リンクのスムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // キーボードショートカット
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Escapeキーですべてのアコーディオンを閉じる
            if (e.key === 'Escape') {
                closeAllAccordions();
            }
        });
    }
    
    // アニメーション効果
    function initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // FAQ項目コンテナを監視対象に追加
        const faqContainer = document.querySelector('.faq-items');
        faqContainer.style.opacity = '0';
        faqContainer.style.transform = 'translateY(20px)';
        faqContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(faqContainer);
    }
    
    // ドラッグ無効化
    function disableDragging() {
        // すべての画像要素のドラッグを無効化
        document.querySelectorAll('img').forEach(img => {
            img.draggable = false;
        });
        
        // リンクやボタンのドラッグを無効化
        document.querySelectorAll('a, button').forEach(element => {
            element.draggable = false;
        });
        
        // コンテキストメニューを無効化（右クリック防止）
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        
        // ドラッグスタートイベントを無効化
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
        
        // 選択開始イベントを無効化
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });
    }
    
    // 初期化
    function init() {
        initAccordion();
        initSmoothScroll();
        initKeyboardShortcuts();
        initAnimations();
        disableDragging();
        
        console.log('POCHICO Q&A システムが初期化されました');
    }
    
    // すべての機能を初期化
    init();
    
}); 
