window.onload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas instanceof HTMLCanvasElement) {
        const data:ICanvas  = {
            canvas,
            width:400,
            height:500
        }
        const app = new App(data);
        app.drawField()
    } else {
        console.error('Canvas element not found.');
    }
};


class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;

    constructor(props: ICanvas ) {
        this.canvas = props.canvas
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = props.width
        this.canvas.height = props.height
    }
    
    drawField(){
        const margin: number = 10
        const width: number = 50
        const height: number = 50

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const data:ISquares = {
                    x: j === 0 ? margin : (margin * j + margin) + (width * j),
                    y: i === 0 ? margin : (margin * i + margin) + (width * i),
                    width,
                    height
                }
                const square = new Squares(data)
                square.drawSquares(this.ctx)
            }
        }
    }

}


class Squares {
    x:number
    y:number
    width:number
    height:number


    constructor(props:ISquares){
        this.x = props.x
        this.y = props.y
        this.width = props.width
        this.height = props.height
    }


    drawSquares(ctx: CanvasRenderingContext2D | null) {
        const cornerRadius = 10; 
        if(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x + cornerRadius, this.y);
            ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + cornerRadius, cornerRadius);
            ctx.arcTo(this.x + this.width, this.y + this.height, this.x + this.width - cornerRadius, this.y + this.height, cornerRadius);
            ctx.arcTo(this.x, this.y + this.height, this.x, this.y + this.height - cornerRadius, cornerRadius);
            ctx.arcTo(this.x, this.y, this.x + cornerRadius, this.y, cornerRadius);
            ctx.closePath();
        
            ctx.fillStyle = '#5A1E76';
            ctx.fill();
        }
    }
}

