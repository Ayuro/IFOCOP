/**
 * Ce type représente l’état asynchrone d’une donnée, généralement utilisée
 * via le pipe async dans les templates.
 *
 * Il utilise un type générique pour représenter le type de la donnée.
 *
 * Le type de l’erreur est également générique afin de pouvoir utiliser
 * contextuellement aussi bien une erreur JS, une chaîne, ou tout autre type
 * qui sera défini localement.
 */
export interface AsyncState<Data, Error> {
  data: Data | null;
  loading: boolean;
  error: Error;
}
