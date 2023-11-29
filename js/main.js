$(document).ready(function(){

    // $('#fullpage').fullpage({
    //     anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    //     navigation: true,
    //     navigationPosition: 'left',
    //     navigationTooltips: ['메뉴1', '메뉴2', '메뉴3', '메뉴4', '메뉴5', '푸터'],
    //     responsiveWidth: 1000, // 1000px 이하가 되면 풀페이지 해제
    //     keyboardScrolling : false, // 키보드로 페이지 이동 해제
    // })

    $('#fullpage').fullpage({
        anchors: ['page1','page2', 'page3', 'page4', 'page5', 'page6'],
       //options here
        autoScrolling:true,  //기본값 true
        scrollHorizontally: true,
        // sectionsColor: ['#aaa','#bbb','#ccc','#ddd','#eee', "#fff"],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['메뉴1','메뉴2','메뉴3','메뉴4','메뉴5', '메뉴6'],
        slidesNavigation: true,

        responsiveWidth: 1000,  //1000 이하가 되면 풀페이지 해제하기 
    
    
       afterLoad: function(anchorLink, index){
            if(index == 1) {
                const title = document.querySelector('.title')
                title.classList.add('active')

                const rightT = document.querySelector('.right-text')
                rightT.classList.add('right')
            }
            if(index == 2) {
                const about = document.querySelector('.se-2 .about')
                about.classList.add('acti')

                const fade = document.querySelector('.fade')
                fade.classList.add('fadee')
            }
            if(index == 3) {
                const faddd = document.querySelector('.se-3 .fad')
                faddd.classList.add('fadee')
            }
            if(index == 4) {
                const fad = document.querySelector('.se-4 .fad')
                fad.classList.add('fadee')
            }
            if(index == 6) {
                const fadd = document.querySelector('.se-5 .fad')
                fadd.classList.add('fadee')
            }
            if(index == 5) {
                const faddd = document.querySelector('.se-6 .fad')
                faddd.classList.add('fadee')
            }

        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log('현재 활성화된 슬라이드 번호는' + slideAnchor)
        }
    })

    $('.leftbox').click(function(){
        $('.left').fadeIn(300)
        $('.popupbg > a').fadeIn(300)
        $('.popupbg').fadeIn(300)
    })
    $('.popupbg > a').click(function(){
        $('.left').fadeOut(300)
        $('.popupbg > a').fadeOut()
        $('.popupbg').fadeOut()
    })
    $('.popupbg').click(function(){
        $('.left').fadeOut(300)
        $('.popupbg > a').fadeOut()
        $('.popupbg').fadeOut()
    })

    $('.rightbox').click(function(){
        $('.right').fadeIn(300)
        $('.popupbg > a').fadeIn(300)
        $('.popupbg').fadeIn(300)
    })
    $('.popupbg > a').click(function(){
        $('.right').fadeOut(300)
        $('.popupbg > a').fadeOut()
        $('.popupbg').fadeOut()
    })
    $('.popupbg').click(function(){
        $('.right').fadeOut(300)
        $('.popupbg > a').fadeOut()
        $('.popupbg').fadeOut()
    })
    
})






    		// 특정 인덱스일 때
		// 'afterLoad': function (anchorLink, index) {
        //     const title = document.querySelector('.title')
        //     if (index == 1){
        //         title.classList.add('active')
        //         alert ('dd')
		// 	}
		// },	

		// 페이지 이동할 때
		// 'onLeave' : function (index, nextIndex, direction){
		// 	if (index == 3 && direction == 'down'){
		// 		alert ('3번에서 4번으로');
		// 	} else if (index == 3 && direction == 'up'){
		// 		alert ('3번에서 2번으로');
		// 	}
		// }
