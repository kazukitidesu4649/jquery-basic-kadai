$(function(){
  //ボタンを押すと、色を変化
  $('#change-color').on('click', function(){
    $('#target').css('color','red');
  });
  //ボタンを押すと、文字内容が変わる
  $('#change-text').on('click', function(){
    $('#target').text('Hello!');
  });
  //ボタンを押すと、文字がフェードアウト
  $('#fade-out').on('click', function(){
    $('#target').fadeOut();
  });
  //ボタンを押すと、文字がフェードイン
  $('#fade-in').on('click', function(){
    $('#target').fadeIn();
  });
});