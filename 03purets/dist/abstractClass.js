"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const Aman = new TakePhoto("test","aesthetic");
// we cannot create instance of abstract class, it's just like a blueprint
class InstagramC extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia sent");
    }
}
const amanfang = new InstagramC("test", "aesthetic", 2);
amanfang.getSepia();
