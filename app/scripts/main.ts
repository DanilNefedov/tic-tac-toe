// interface ICanvas {
//     canvas: HTMLCanvasElement,
// }


class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;

    constructor(props: HTMLCanvasElement) {
        this.canvas = props,
        this.ctx = this.canvas.getContext('2d')
    }


    fillCanvas(color:string):void {
        if (this.ctx !== null) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}


window.onload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas instanceof HTMLCanvasElement) {
        const app = new App( canvas );
        app.fillCanvas('green');
    } else {
        console.error('Canvas element not found.');
    }
};