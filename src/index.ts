import { Dado } from './model/Dado';

export const lanzar = (): number => {
  const dado = new Dado();
  return dado.lanzar();
}
