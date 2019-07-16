function backTimer() { //定义计时函数
    this.millis = this.millis + 50; //毫秒
    if (this.millis >= 500) {
        this.millis = 0;
        this.second = this.second + 1; //秒
    }
    if (this.second >= 60) {
        this.second = 0;
        this.minute = this.minute + 1; //分钟
    }
    this.str = this.addZero(this.minute) + "分" + this.addZero(this.second) + "秒" 
}

function addZero(m) { 
    if (m < 10) {
        return "0" + m;
    } else {
        return "" + m;
    }
}
export { backTimer, addZero }