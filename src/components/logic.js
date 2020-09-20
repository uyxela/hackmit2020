import gpus from "../data/gpus.json";
import sources from "../data/sources.json";
import models from "../data/models.json";
import gfgconvs from "../data/gfgconvs.json";
import green from "../data/green500.json";
import countries from "../data/countries.json";
import api from "../data/api.json";

export function withprovider(gpuhardware, hours, provider, region, modelname) {
  // Eq: (GFLOP / s) * (3600s / hr) * hrs * (W/GFLOPS32) * hrs * (kg CO2 / KWh)
  console.log(
    gpuhardware + " " + hours + " " + provider + " " + region + " " + modelname
  );
  let carbon = 3600 * hours; // in units of kg of CO2
  models.forEach((model) => {
    if (model.name === modelname) {
      carbon *= model.flops;
    }
  });
  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      carbon /= gpu["GFLOPS32/W"];
    }
  });
  carbon *= hours; // Wh
  carbon /= 1000.0; // kWh
  let kilowatt = carbon;

  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact;
      carbon /= 1000.0;
    }
  });

  //console.log("final kg of CO2: " + carbon);
  window.localStorage.setItem(
    "conversionData",
    JSON.stringify({
      kilowatt: kilowatt,
      carbon: carbon,
    })
  );
  console.log({
    kilowatt: kilowatt,
    carbon: carbon,
  });
  return {
    kilowatt: kilowatt,
    carbon: carbon,
  };
}

export function withee(gpuhardware, hours, ee, modelname) {
  console.log(gpuhardware, hours, ee, modelname);
  let carbon = 3600 * hours; // in units of kg of CO2
  models.forEach((model) => {
    if (model.name === modelname) {
      carbon *= model.flops;
    }
  });
  // `carbon`: # of GFLOPs that will occur in execution
  carbon /= ee;

  // `carbon`: The wattage of the model
  carbon *= hours; // Wh
  carbon /= 1000.0; // kWh
  let kilowatt = carbon;

  carbon *= 8000; // default g of CO2 for 1 KWh
  carbon /= 1000.0;
  // console.log("final kg of CO2: " + carbon);
  window.localStorage.setItem(
    "conversionData",
    JSON.stringify({
      kilowatt: kilowatt,
      carbon: carbon,
    })
  );
  // console.log({
  //   'kilowatt': kilowatt,
  //   'carbon': carbon
  // })
  return {
    kilowatt: kilowatt,
    carbon: carbon,
  };
}

export function equivnum(pattern, carbon) {
  // gfgconvs.forEach((gfgconv) => {
  //   console.log(gfgconv.id)
  //   if (pattern === gfgconv.id) {
  //     return carbon * gfgconv.amt;
  //   }
  // });
  const conv = gfgconvs.find((gfgconv) => gfgconv.id === pattern);
  if (conv) {
    return carbon * conv.amt;
  }
  console.log(
    "ERROR IN EQUIVNUM(): DID NOT FIND `" + pattern + "` IN THE JSON"
  );
  return carbon * 0.4; // default (should never get to this case)
}

export function calcCarbon(name) {
  const machine = green.find((item) => item.Name === name);
  console.log(machine);
  let power = 1;
  var carbonIntensity = 1;
  if (machine) {
    power = machine["Power (kW)"];
    const country = countries.find((item) => item.name === machine.Country);

    let s = country["alpha-2"];
    api.forEach((ap) => {
      if (ap.code === s) {
        carbonIntensity = ap.carbonintensity / 1000.0;
      }
    });
    console.log(`DID NOT FIND THE COUNTRY CODE: ${s}`);
  }
  return power * carbonIntensity;
}
