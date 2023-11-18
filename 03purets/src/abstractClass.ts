abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void

    getReelTime(): number {
        // some complex calculation
        return 8
    }
}

class Insta extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

const hc = new Insta("AI Camera", "none", 8)