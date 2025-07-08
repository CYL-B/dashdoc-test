import type { Address, Action, Step, Result } from "./types";

const deliveryChecker = (deliveries: Address[][], path: Address[]) : Result => {
  const pickupAddresses: Address[] = [];
  const dropoffAddresses: Address[] = [];
  for (const delivery of deliveries) {
      //vérifie si le path est complet
    for (const tour of delivery) {
      if (!path.includes(tour)) {
        return {
          status: "error",
          error_code: "delivery_address_not_in_path",
          error_message: `L'adresse ${tour} ne figure pas dans l'itinéraire choisi.`,
        };
      }
    }
    //vérification de la cohérence du path
    const [pickup, dropoff] = delivery;
    if (path.indexOf(pickup) > path.indexOf(dropoff)) {
      return {
        status: "error",
        error_code: "delivery_dropoff_before_pickup",
        error_message: `Le pickup à l'adresse ${pickup} doit se faire avant le dropoff à l'adresse ${dropoff}.`,
      };
    }
    pickupAddresses.push(pickup);
    dropoffAddresses.push(dropoff);
  }

   const steps: Step[] = [];
  //attribution une action à chaque adresse
  for (const address of path) {
    let action: Action = null;
    if (pickupAddresses.includes(address)) {
      action = "pickup";
    } else if (dropoffAddresses.includes(address)) {
      action = "dropoff";
    }
    steps.push({ address, action });
  }
  return { status: "success", steps: steps };
};

export default deliveryChecker;
