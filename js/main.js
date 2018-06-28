(function() {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.random();
    //大吉がたくさん出でハッピーなおみくじ
    if (n < 0.02) {
      this.textContent = '凶'; //2%
    } else if (n < 0.18) {
      this.textContent = '中吉'; //18%
    } else {
      this.textContent = '大吉'; //80%
    }
    //以下、メモ
    // var results = ['大吉','中吉','凶'];
    // // var n = Math.floor(Math.random() * 3);
    // var n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
    //   if (n === 0) {
    //     this.textContent = '大吉';
    //   } else if (n === 1) {
    //   this.textContent = '中吉';
    // } else {
    //   this.textContent = '凶'
    // }
    //this.textContent = n;
  });
  btn.addEventListener('mousedown', function() {
    this.className= 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className= '';
  });
})();
