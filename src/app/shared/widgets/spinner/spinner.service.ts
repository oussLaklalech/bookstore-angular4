import { Injectable } from '@angular/core';

/**
 * SpinnerService est un service qui permet d'afficher / cacher le spinner selon le contexte
 */
@Injectable()
export class SpinnerService {

  /**
   * spinnerIsHidden est le boolean qui gère l'affichage du spinner
   * true : cache le spinner / false : montre le spinner
   */
  private spinnerIsHidden: boolean;
  /**
   * ressourceIsLoaded est le boolean qui permet de cacher l'arriere plan du spinner
   * tant que les données ne sont pas chargées
   */
  private ressourceIsLoaded: boolean;

  constructor() {
    this.spinnerIsHidden = true;
    this.ressourceIsLoaded = false;
  }

  /**
   * hideSpinner permet de cacher le spinner au bout de 700ms afin de créer une transition plus souple
   * pour les connexions lentes
   */
  hideSpinner() {
        this.spinnerIsHidden = true;
  }

  /**
   * displaySpinner permet d'afficher le spinner
   */
  displaySpinner() {
    this.spinnerIsHidden = false;
  }

  /**
   * getSpinnerHidden permet de savoir si le spinner est caché ou non
   * @returns {boolean}
   */
  getSpinnerHidden(): boolean {
    return this.spinnerIsHidden;
  }
}
