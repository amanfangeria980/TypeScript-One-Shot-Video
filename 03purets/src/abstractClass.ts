abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}
    
    abstract getSepia():void
}

// const Aman = new TakePhoto("test","aesthetic");

// we cannot create instance of abstract class, it's just like a blueprint

class InstagramC extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter);
    }
    getSepia(): void {
        console.log("Sepia sent")
    }
}

const amanfang=new InstagramC("test","aesthetic",2);

amanfang.getSepia()