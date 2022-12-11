$(function(){
 
    const select_language = $('.select_language');
    const search_container = $('.search-container');
    const h_open_Btn= $('.h_open_search');
    const h_close = $('.sch_close');

    // nav
    const gnb = $('.gnb');//Active
    const gnb_menu_list = $('.nav_d1.d1_Over');//selector
    const sub_menu =$('.sub_menu');//On
    const sub_menu_list= $('.sub_menu>ul>li');//현재 순서값에 Over
    
    const mob_nav_btn = $('.mob_nav_btn');
    const mob_nav = $('.mob_nav ');
    const m_nav_bg = $('.m_nav_bg');
    const mob_btn =$('.m_nav_list_tit');
    const m_sub_menu =$('.m_nav_list li>dl');

    const main = $('#main')


    mob_nav_btn.click(function(){
        mob_nav.addClass('left_move');
        m_nav_bg.delay(500).fadeIn();
    })
    
    m_nav_bg.click(function(){
        mob_nav.removeClass('left_move');
        m_nav_bg.fadeOut(0);

    })


    mob_btn.click(function(){
        mob_btn.removeClass('On');
        m_sub_menu.slideUp();
        $(this).addClass('On');
        $(this).next('dl').slideToggle();
    })






    gnb_menu_list.mouseenter(function(){
        const idx = $(this).index();
        console.log(idx);


        pc_menu_reset()
        sub_menu.addClass('On');
        sub_menu_list.eq(idx).addClass('Over');
        gnb.addClass('Active');
        i=1;
    })
    

    sub_menu.mouseleave(function(){
        


                setTimeout(pc_menu_reset,1000);




    })
    
    function pc_menu_reset(){
        sub_menu_list.removeClass('Over');
        sub_menu.removeClass('On');
        gnb.removeClass('Active');
      
     }
     
     
     
     
     
     $(window).resize(pc_menu_reset);
     $(window).scroll(pc_menu_reset);
   





    select_language.click(function(){
        $(this).toggleClass('show');
    })

    h_open_Btn.click(function(){
        search_container.addClass('show');
        main.addClass('On');
    })
    h_close.click(function(){
        search_container.removeClass('show');
        
    })
    main.click(function(){
        
        search_container.removeClass('show');
        $(this).removeClass('On');
    })



})