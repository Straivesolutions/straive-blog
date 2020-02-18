function goBack() {
    window.history.back();
}

function copyText(){
    var dummy = document.createElement('input'),
        text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("copied!!")
}

function activeNightMode() {
    if ($('#post_body').hasClass('night-mode')){
        $('#switch').removeClass('text-twitter-blue');
        $('#post_body').removeClass('night-mode');
    }else{
        $('#switch').addClass('text-twitter-blue');
        $('#post_body').addClass('night-mode');
    }
}
