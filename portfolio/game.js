let action_btn = document.getElementById('action_btn');
let counter = document.getElementById('counter');
let count = 1;
let interval_id;

function start_game(){
  let btn_text = action_btn.innerHTML;

  if(btn_text == 'スタート'){
    interval_id = setInterval(function(){
      count++;
      counter.innerHTML = count;
    }, 200);
    action_btn.innerHTML = 'ストップ'
  } else if(btn_text == 'ストップ'){
    clearInterval(interval_id);
    action_btn.innerHTML = 'スタート';
    let li = document.createElement('li');
    let text;
    if(count % 3 == 0){
      text = document.createTextNode('カウント:'+count+' 結果: 成功');
    }
    else{
      text = document.createTextNode('カウント:'+count+' 結果: 失敗');
    }
    li.appendChild(text);
    results.appendChild(li);
    count = 1;
    counter.innerHTML = count;
  }
}
action_btn.addEventListener('click', start_game);
