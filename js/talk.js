$(function() {
    $('#yes').click(function(event) {
        modal('嘻嘻，我就知道你一定记得(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('我生气啦！', A);
    });
});

function A() {
    modal('怎么连这么重要的事情都忘啦！', B);
}

function B() {
    modal('快哄哄我，要不我会生气的', C);
}

function C() {
    modal('哼，亲亲脸', D);
}

function D() {
    modal('这边呢', E);
}

function E() {
    modal('好吧，原谅你啦', F);
}

function F() {
    modal('知不知道今天是什么日子呀', G);
}

function G() {
    modal('嘻嘻，说爱我', H);
}

function H() {
    modal('说好想好想见到我', I);
}

function I() {
    modal('开学就可以见面啦，开心！', J)
}

function J() {
    modal('请欣赏你的宝贝送你的烟花', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
