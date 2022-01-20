document.addEventListener('DOMContentLoaded', function () {
    //ここで定義する関数はscrollObserverインスタンスの
    //_init()に渡されるコールバック関数となり、
    //_init()内で呼ばれた場合は、第一引数にentry.targetが、第二引数にboolean型が渡されるので、
    //それを踏まえて定義する必要がある
    const cb = function(el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const cb2 = function(el, isIntersectiong) {
        if(isIntersectiong) {
            el.classList.add('inview');
            alert('検知しました');
        }
    }

    const so = new ScrollObserver('.animate-title', cb, {once: true});
});
