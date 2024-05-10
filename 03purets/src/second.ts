interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// interfaces are more of like a protocol that we must have to implement while creating something

interface Story{
    createStory():void
}

class Facebook implements TakePhoto,Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    createStory(): void {
        console.log("Story was created!")
    }

}