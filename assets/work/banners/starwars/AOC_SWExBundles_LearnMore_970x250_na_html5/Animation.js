var NoxTimeline = {
    init: function() {
        NoxTimeline.frame1();
    },
    frame1: function() {
        TweenLite.to(enterFor, .8, {
            delay: 2,
            opacity: 1,
            ease: Linear.eastOut
        });
        TweenLite.delayedCall(5, NoxTimeline.frame2);
    },
    frame2: function() {
        TweenLite.to(enterFor, 0.4, {
            opacity: 0,
            display: 'none',
            ease: Linear.easeOut
        });
        TweenLite.to(tweet, 0.8, {
            delay: .5,
            display: 'block',
            opacity: 1,
            ease: Linear.easeIn
        });
        TweenLite.delayedCall(3, NoxTimeline.frame3);
    },
    frame3: function() {
        TweenLite.to(tweet, 0.4, {
            opacity: 0,
            display: 'none',
            ease: Linear.easeOut
        });
        TweenLite.to(hashtag, 0.5, {
            delay: .5,
            display: 'block',
            opacity: 1,
            ease: Linear.easeIn
        });
        TweenLite.to(noPurch, 0.5, {
            delay: 1,
            display: 'block',
            opacity: 1,
            ease: Linear.easeOut
        });
        TweenLite.delayedCall(3, NoxTimeline.frame4);
    },
    frame4: function() {
        TweenLite.to(finalFrame, .5, {
            delay: .5,
            opacity: 1,
            display: 'block',
            ease: Linear.easeIn
        });
        TweenLite.to(logo, .5, {
            delay: 0.5,
            opacity: 1,
            display: 'block',
            ease: Linear.easeIn
        });
        TweenLite.to(finaltxt, 0.5, {
            delay: 0.5,
            opacity: 1,
            display: 'block',
            ease: Linear.easeIn
        });
        TweenLite.to(hash, 0.5, {
            delay: 1.5,
            opacity: 1,
            display: 'block',
            ease: Linear.easeIn
        });
        TweenLite.to(lrnBtn, 0.5, {
            delay: 2.5,
            opacity: 1,
            display: 'block',
            ease: Linear.easeIn
        });
    }
};
NoxTimeline.init();
