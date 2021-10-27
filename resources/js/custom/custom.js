
    document.getElementsByClassName('checkup')[0].addEventListener('click', function(){
        document.getElementsByClassName('hide')[0].style.display = 'none'
    });
    $('.checkup').on('click', function(){
        $('.hide').hide();
    })

    $('.checkup').on('click', function(){
        $('.modal').show();
    })

    $('.back').on('click', function(){
        $('.modal').hide();
    })