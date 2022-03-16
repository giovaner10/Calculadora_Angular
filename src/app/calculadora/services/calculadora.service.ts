/**
 * @author Giovane Avelino Tiburcio<giovanerr10@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  
  static readonly SOMA: string = '+'
  static readonly SUBTRACAO: string = '-'
  static readonly DIVISAO: string = '/'
  static readonly MULTIPLICACAO: string = '*'

  /**
   * Metodo que ira calcular a operacao matematica
   * 
   * @param num1 indice 2 da operacao
   * @param num2  indice 2 da operacao
   * @param operacao represena a operacao a ser feita entre os indices
   * @returns retorna o valor da operacao 
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // vai armazenar o resultado da opercao

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2
        break

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2
        break

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2
        break

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2
        break
      default:
        resultado = 0
    }

    return resultado
  }
  constructor() { }
}
