var ems = document.querySelectorAll('.skill_list em');
var spans = document.querySelectorAll('.skill_list li>span');
var arr = [];
Array.from(spans).map(obj=>{
    arr.push(obj.innerHTML);
})
for(var i=0;i<ems.length;i++){
    ems[i].style.width = arr[i];
}
var listContent = document.querySelector('.list_content');
//点击h2的展开收缩
/*var h2s  = document.querySelectorAll('.case_list h2');
var casespan  = document.querySelectorAll('.case_list h2 span');
for(var i=0;i<h2s.length;i++){
    h2s[i].onoff = false;
    h2s[i].index = i;
    h2s[0].onoff = true;
    h2s[i].onclick = function () {
        if(this.nextElementSibling){
            if(this.onoff){
                this.nextElementSibling.style.display = 'none';
                casespan[this.index].className = '';
            }else{
                this.nextElementSibling.style.display = 'block';
                casespan[this.index].className = 'active';
            }
            this.onoff =  !this.onoff;
        }
    }
}

//点击li显示对应的内容
var lis = document.querySelectorAll('.case_content li');
var contents = document.querySelectorAll('.list_content li');
var listContent = document.querySelector('.list_content');
var icon = document.querySelector('.list_content .icon');
console.log(icon);*/

/*icon.onclick = function () {
    listContent.style.transition = 'transform .2s';
    listContent.style.transform = 'translateX(100vw)';
}*/
/*for(var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onclick = function () {
        for(var j=0;j<lis.length;j++){
            lis[j].className = '';
            contents[j].style.display = 'none';
        }
        this.className = 'checked';
        contents[this.index].style.display = 'block';
        if(getSize() == 'xs'){
            listContent.style.transition = 'transform .2s';
            listContent.style.transform = 'translateX(0)';
    }
    }
}*/

//滑屏(移动端自定义滑屏事件)
/*(function () {
    var firstPoint = 0;
    var nowPoint = 0;
    var dex = 0;
    var beforelength = 0;
    var vr =0;
    //手指按下
    listContent.addEventListener('touchstart',function (e) {
        firstPoint = e.changedTouches[0].clientY;
    })
    //手指移动
    listContent.addEventListener('touchmove',function (e) {
        if(getSize() == 'lg'){
            return;
        }
        e.preventDefault();
        nowPoint = e.changedTouches[0].clientY;
        dex = nowPoint - firstPoint;
        // console.log(dex);
        vr = beforelength + dex;
        if(vr>0){
            vr = 0;
        }
        console.log(listContent.offsetHeight);
        if(vr<window.innerHeight - listContent.offsetHeight){
            vr = window.innerHeight - listContent.offsetHeight;
        }
        listContent.style.top = vr + 'px';
    })
    listContent.addEventListener('touchend',function () {
        beforelength = vr;
    })
})()*/

window.onresize = function () {
    if(getSize() == 'lg'){
        listContent.style.transform = 'translateX(0)';
    }

}

//划分屏幕, 小于960 大于等于960

function getSize() {
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth;
    if(deviceWidth<960){
        return 'xs'
    }else{
        return 'lg'
    }
}
//返回顶部
var backtop = document.querySelector('.backtop');
backtop.onclick = function () {
   window.scrollTo(0,0);
   console.log(11111);
}
window.onscroll = function () {
    backtop.style.display = window.pageYOffset>100?"block":"none";
}