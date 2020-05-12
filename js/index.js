var current = document.querySelectorAll('.sxd li')
// 排他思想
for (var i =0; i<current.length;i++) {
    current[i].onmouseover = function() {
        for (var i =0; i<current.length;i++) {
            current[i].className = ''
        }
        this.className = 'current'
    } 
}
for (var i =0; i<current.length;i++) {
    current[i].onmouseout = function() {
        for (var i =0; i<current.length;i++) {
            current[i].className = ''
        }
        current[0].className = 'current'
    } 
}
var content = document.querySelector('#content3')
var tag = document.querySelector('.tag')
window.onscroll = () => {
    console.log(document.documentElement.scrollTop);
    console.log(content.offsetTop);
    
    if(document.documentElement.scrollTop >= content.offsetTop) {
        tag.className = 'tag active'      
    }else {
        tag.className = 'tag'
    }
}


    
    
