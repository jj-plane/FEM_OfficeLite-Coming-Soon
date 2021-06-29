import '../styles/homeStyle.scss';
import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function() {
    gsap.set('.heroOutterContentContainer', {autoAlpha: 1}); 
    var animateHeroBackground = () => {
        const tl = gsap.timeline({repeat:-1});
        tl.to('#heroImageSVG', {
            transformOrigin: '50% 50%',
            rotation:360,
            duration:40,
            ease:'none'
        })
        return tl;
    }

    var animatePricingCards = () => {
        const tl = gsap.timeline();
        tl.set('.pricingCardsContainer', {autoAlpha:1});
        tl.from('.pricingCard', {y:100, stagger:.3, duration:1.5, opacity:0, ease: "back.out(1)"});
        return tl;
    }

    var createCountdown = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        const future = new Date();
        future.setDate(future.getDate() + 30);

        document.getElementById('comingDate').innerText = `${future.getDay()} ${monthNames[future.getMonth()]} ${future.getFullYear()}`;

        setInterval(function(){
            let now = new Date().getTime();
            let distance = future - now;
    
    
            document.getElementById('secondsValueSpan').innerText = Math.floor((distance % (minute)) / second);
            document.getElementById('minutesValueSpan').innerText = Math.floor((distance % (hour)) / minute);
            document.getElementById('hoursValueSpan').innerText = Math.floor((distance % (day)) / hour);
            document.getElementById('daysValueSpan').innerText = Math.floor(distance  / day);
        }, 1000) 

        
    }


    
    animateHeroBackground();
    animatePricingCards();
    createCountdown();
});