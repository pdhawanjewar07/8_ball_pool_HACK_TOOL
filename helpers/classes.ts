class Table{
    id: number;
    name: string; // table name
    mode: string; // "8ball" or "9ball"
    staticFrictionCoeff: number;

    constructor(id:number, name:string, mode:string,
                staticFrictionCoeff:number){
        this.id = id;
        this.name = name;
        this.mode = mode;
        this.staticFrictionCoeff = staticFrictionCoeff;
    }
}

class Ball{
    id: number;
    name: string;
    type: string; // "CueBall", "8ball", "Solids", "Stripes"
    color: string;
    radius: number;
    positionX: number;
    positionY: number;
    isPocketed: boolean;
    isInMotion: boolean;

    constructor(id:number, name:string, type:string, color:string, 
                radius:number, positionX:number, positionY:number){
        this.id = id;
        this.name = name
        this.type = type;
        this.color = color;
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
        this.isPocketed = false; // default: not pocketed
        this.isInMotion = false; // default: not in motion
    }
}

class CueStick{
    id: number;
    forceValue: number; // cue force i.e. 0-13

    constructor(id:number, forceValue:number) {
        this.id = id;
        this.forceValue = forceValue;
    }
}
