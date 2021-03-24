var app = new Vue({
    el: '#root',
    data:{
        index: 0,
        imgSrc: [
            './assets/img/img.jpg',
            './assets/img/img1.jpg',
            './assets/img/img2.jpg',
            './assets/img/img3.jpg',
            './assets/img/img4.jpg',
            './assets/img/img5.jpg',
            './assets/img/img6.jpg',
            './assets/img/img7.jpg'
        ]
    },
    methods: {
        next: function(){
            if(this.index < this.imgSrc.length -1){
                this.index++;
            }else{
                this.index = 0;
            }
        },
        prev: function(){
            if(this.index > 0){
                this.index--;
            }else{
                this.index = this.imgSrc.length -1              
            }
        }
    }
});