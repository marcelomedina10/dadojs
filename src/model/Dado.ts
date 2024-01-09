export class Dado {
    private cara: number;
    constructor() {
        this.cara = 0;
    }

    public lanzar() {
        this.cara = Math.floor(Math.random() * 6) + 1;
        return this.cara;
    }
}