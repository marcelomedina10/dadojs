/**
 * @class Dado
 * @description Representa un dado de 6 caras
 * @property cara: number
 * @method lanzar(): number
 */
class Dado {
  cara: number;

  constructor() {
    this.cara = 0;
  }

  lanzar(): number {
    this.cara = Math.floor(Math.random() * 6) + 1;
    return this.cara;
  }
}

export default function lanzar(): number {
  const dado = new Dado();
  return dado.lanzar();
}
