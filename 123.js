(function() {
  alert('外部Script実行');
  console.log('外部Script実行');
  var node = document.getElementById('imCid1012448');
  var callbackNm = node.dataset.callback;
  console.log(callbackNm);

  window[callbackNm]({
    uid : '12345',
    sids : [1,2,3]
  });
})();
