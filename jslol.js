let sub=document.getElementById('sub');
let unsub=document.getElementById('unsub');
let cnt=document.getElementById('cnt');
let subscr=document.getElementById('subscr');
function subs(){
    if(cnt.textContent=="0 подписчиков"){
        cnt.textContent="1 подписчик";
        sub.style.opacity=0;
        unsub.style.opacity="100%";
        subscr.style.backgroundColor="rgb(192, 192, 230)";
    }else{
        cnt.textContent="0 подписчиков";
        sub.style.opacity="100%";
        unsub.style.opacity=0;
        subscr.style.backgroundColor="rgb(141, 141, 236)";
    }
}
let lik1=document.getElementById('like1');
let dis1=document.getElementById('dis1');
let cnt1=document.getElementById('cnt1');
function like1(){
    if(cnt1.textContent=='0'){
        cnt1.textContent='1';
        lik1.style.opacity="100%";
        dis1.style.opacity=0;
    }else{
        cnt1.textContent='0';
        lik1.style.opacity=0;
        dis1.style.opacity="100%";
    }
}
let lik2=document.getElementById('like2');
let dis2=document.getElementById('dis2');
let cnt2=document.getElementById('cnt2');
function like2(){
    if(cnt2.textContent=='0'){
        cnt2.textContent='1';
        lik2.style.opacity="100%";
        dis2.style.opacity=0;
    }else{
        cnt2.textContent='0';
        lik2.style.opacity=0;
        dis2.style.opacity="100%";
    }
}
let lik3=document.getElementById('like3');
let dis3=document.getElementById('dis3');
let cnt3=document.getElementById('cnt3');
function like3(){
    if(cnt3.textContent=='0'){
        document.getElementById('cnt3')='1';
        lik3.style.opacity="100%";
        dis3.style.opacity=0;
    }else{
        cnt3.textContent='0';
        lik3.style.opacity=0;
        dis3.style.opacity="100%";
    }
}
let lik4=document.getElementById('like4');
let dis4=document.getElementById('dis4');
let cnt4=document.getElementById('cnt4');
function like4(){
    if(cnt4.textContent=='0'){
        cnt1.textContent='1';
        lik4.style.opacity="100%";
        dis4.style.opacity=0;
    }else{
        cnt4.textContent='0';
        lik4.style.opacity=0;
        dis4.style.opacity="100%";
    }
}
let lik5=document.getElementById('like5');
let dis5=document.getElementById('dis5');
let cnt5=document.getElementById('cnt5');
function like5(){
    if(cnt5.textContent=='0'){
        cnt5.textContent='1';
        lik5.style.opacity="100%";
        dis5.style.opacity=0;
    }else{
        cnt5.textContent='0';
        lik5.style.opacity=0;
        dis5.style.opacity="100%";
    }
}
function send1() {
    let input=document.getElementById('input1');
    let text=input.value.trim();
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='ты.png';
        img.style.height="25px";
        img.style.width="25px";
        img.style.borderRadius="13px";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="5px 5px";
        let name=document.createElement('p');
        name.style.fontSize="15px"
        name.textContent='Вы:';
        name.style.margin="5px 5px";
        let ttext=document.createElement('p');
        ttext.style.fontSize="15px"
        ttext.textContent = text;
        ttext.style.margin="5px 5px";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        document.getElementById('comment1').appendChild(comment);
        input.value='';
    }else{
        alert('Введите текст комментария');
    }
}
function send2() {
    let input=document.getElementById('input2');
    let text=input.value.trim();
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='ты.png';
        img.style.height="25px";
        img.style.width="25px";
        img.style.borderRadius="13px";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="5px 5px";
        let name=document.createElement('p');
        name.style.fontSize="15px"
        name.textContent='Вы:';
        name.style.margin="5px 5px";
        let ttext=document.createElement('p');
        ttext.style.fontSize="15px"
        ttext.textContent = text;
        ttext.style.margin="5px 5px";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        document.getElementById('comment2').appendChild(comment);
        input.value='';
    }else{
        alert('Введите текст комментария');
    }
}
function send3() {
    let input=document.getElementById('input3');
    let text=input.value.trim();
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='ты.png';
        img.style.height="25px";
        img.style.width="25px";
        img.style.borderRadius="13px";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="5px 5px";
        let name=document.createElement('p');
        name.style.fontSize="15px"
        name.textContent='Вы:';
        name.style.margin="5px 5px";
        let ttext=document.createElement('p');
        ttext.style.fontSize="15px"
        ttext.textContent = text;
        ttext.style.margin="5px 5px";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        document.getElementById('comment3').appendChild(comment);
        input.value='';
    }else{
        alert('Введите текст комментария');
    }
}
function send4() {
    let input=document.getElementById('input4');
    let text=input.value.trim();
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='ты.png';
        img.style.height="25px";
        img.style.width="25px";
        img.style.borderRadius="13px";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="5px 5px";
        let name=document.createElement('p');
        name.style.fontSize="15px"
        name.textContent='Вы:';
        name.style.margin="5px 5px";
        let ttext=document.createElement('p');
        ttext.style.fontSize="15px"
        ttext.textContent = text;
        ttext.style.margin="5px 5px";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        document.getElementById('comment4').appendChild(comment);
        input.value='';
    }else{
        alert('Введите текст комментария');
    }
}
function send5() {
    let input=document.getElementById('input5');
    let text=input.value.trim();
    if (text!=''){
        let comment=document.createElement('div');
        comment.style.display="flex";
        comment.style.alignItems="center";
        let img=document.createElement('img');
        img.src='ты.png';
        img.style.height="25px";
        img.style.width="25px";
        img.style.borderRadius="13px";
        img.style.objectPosition="top";
        img.style.objectFit="cover";
        img.style.margin="5px 5px";
        let name=document.createElement('p');
        name.style.fontSize="15px"
        name.textContent='Вы:';
        name.style.margin="5px 5px";
        let ttext=document.createElement('p');
        ttext.style.fontSize="15px"
        ttext.textContent = text;
        ttext.style.margin="5px 5px";
        comment.appendChild(img);
        comment.appendChild(name);
        comment.appendChild(ttext);
        document.getElementById('comment5').appendChild(comment);
        input.value='';
    }else{
        alert('Введите текст комментария');
    }
}