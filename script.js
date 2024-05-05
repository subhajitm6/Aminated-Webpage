function page1Animation(){
    var tl=gsap.timeline();

    tl.from('nav h1',{
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.5
    })

    tl.from('nav h4',{
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

    tl.from('nav button',{
        y: -30,
        opacity: 0,
        duration: 0.5
    })

    tl.from('.center-part1',{
        x:-300,
        opacity: 0,
        duration: 0.5
    })

    tl.from('.center-part1 p',{
        x:-100,
        opacity: 0,
        duration: 0.3
    })

    tl.from('.center-part1 button',{
        opacity: 0,
        duration: 2
    })

    tl.from('.center-part2 img',{
        opacity: 0,
        x:200
    },"-=2.5")

    tl.from('.s1btn img',{
        y:30,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger:{
            trigger: '.s1btn',
            scroller: 'body',
            start: 'top 80%',
            end: 'top 0',
            scrub: 2,
        }
    })

}

// page1Animation()


function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger: {
            trigger: '.services',
            scroller: 'body',
            // markers: true,
            start: 'top 50%',
            end: 'top 0',
            scrub:2,
        }
    })
    tl2.from('.services',{
        y: 30,
        opacity: 0, 
        duration: 0.5,
    })
    
    tl2.from('.elem.line1.left',{
        x: -50,
        opacity: 0, 
        duration: 1
    },"together")
    
    tl2.from('.elem.line1.right',{
        x: 50,
        opacity: 0, 
        duration: 1
    },"together")
    
    tl2.from('.elem.line2.left',{
        x: -50,
        opacity: 0, 
        duration: 1
    },"together2")
    
    tl2.from('.elem.line2.right',{
        x: 50,
        opacity: 0, 
        duration: 1
    },"together2")

    tl2.from('.elem.line3.left',{
        x: -50,
        opacity: 0, 
        duration: 1
    },"together3")
    
    tl2.from('.elem.line3.right',{
        x: 50,
        opacity: 0, 
        duration: 1
    },"together3")
}

page1Animation();
page2Animation();