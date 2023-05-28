import arabe from "../../src/assets/images/coffes/arabe.svg";
import cafeComLeite from "../../src/assets/images/coffes/cafeComLeite.svg";
import capuccino from "../../src/assets/images/coffes/capuccino.svg";
import chocolateQuente from "../../src/assets/images/coffes/chocolateQuente.svg";
import cubano from "../../src/assets/images/coffes/cubano.svg";
import expresso from "../../src/assets/images/coffes/expresso.svg";
import expressoAmericano from "../../src/assets/images/coffes/expressoAmericano.svg";
import expressoCremoso from "../../src/assets/images/coffes/expressoCremoso.svg";
import expressoGelado from "../../src/assets/images/coffes/expressoGelado.svg";
import havaiano from "../../src/assets/images/coffes/havaiano.svg";
import irlandes from "../../src/assets/images/coffes/irlandes.svg";
import latte from "../../src/assets/images/coffes/latte.svg";
import macchiato from "../../src/assets/images/coffes/macchiato.svg";
import mocaccino from "../../src/assets/images/coffes/mocaccino.svg";

export function importCoffeeImage(coffeeName: string) {
  switch (coffeeName) {
    case "arabe":
      return arabe;
    case "cafeComLeite":
      return cafeComLeite;
    case "capuccino":
      return capuccino;
    case "chocolateQuente":
      return chocolateQuente;
    case "cubano":
      return cubano;
    case "expresso":
      return expresso;
    case "expressoAmericano":
      return expressoAmericano;
    case "expressoCremoso":
      return expressoCremoso;
    case "expressoGelado":
      return expressoGelado;
    case "havaiano":
      return havaiano;
    case "irlandes":
      return irlandes;
    case "latte":
      return latte;
    case "macchiato":
      return macchiato;
    case "mocaccino":
      return mocaccino;
    default:
      return null;
  }
}
