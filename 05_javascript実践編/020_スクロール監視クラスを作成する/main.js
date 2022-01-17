document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer){
    
      entries.forEach( entry => {
        if(entry.isIntersecting) {
            //const ta = new TextAnimation('.animate-title');
            //上記のような記述にすると.animate-titleが複数あるが、一番上のanimate-titleしか探せないので、
            //以下のようにentry.targetでターゲットとなるDOMを入れてあげる必要がある
            const ta = new TextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target);
        } else {
        }
      });
      // alert('intersecting');
    };
    const options = {
      root: null, //rootを設定することで、親要素や先祖要素が交差すると起動する
      rootMargin: "-300px 0px",
      threshold: 0
    }
    const io = new IntersectionObserver(cb, options);
    els.forEach( el => io.observe(el));
});

