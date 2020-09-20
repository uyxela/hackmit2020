import gpus from "../data/gpus.json";
import sources from "../data/sources.json";
import models from "../data/models.json";

export function withprovider(gpuhardware, hours, provider, region, modelname) {
  // Eq: (GFLOP / s) * (3600s / hr) * hrs * (W/GFLOPS32) * hrs * (kg CO2 / KWh)
  let carbon = 3600 * hours; // in units of kg of CO2
  models.forEach((model) => {
    if (model.name === modelname) {
      carbon *= model.flops;
    }
  });
  // `carbon`: # of GFLOPs that will occur in execution
  // console.log("# of GFLOPs that will occur: " + carbon);

  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      // console.log("GFLOPS32/W: " + gpu["GFLOPS32/W"]);
      carbon /= gpu["GFLOPS32/W"];
    }
  });
  // `carbon`: The wattage of the model
  carbon *= hours; // Wh
  carbon /= 1000.0; // kWh
  let kilowatt = carbon;
  // console.log("The kWh: " + carbon);

  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact;
      carbon /= 1000.0;
    }
  });

  // console.log("final kg of CO2: " + carbon);
  return [kilowatt, carbon];
}

export function withee(gpuhardware, hours, ee, region, modelname) {
  let carbon = 3600 * hours; // in units of kg of CO2
  models.forEach((model) => {
    if (model.name === modelname) {
      carbon *= model.flops;
    }
  });
  // `carbon`: # of GFLOPs that will occur in execution
  // console.log("# of GFLOPs that will occur: " + carbon);

  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      // console.log("GFLOPS32/W: " + gpu["GFLOPS32/W"]);
      carbon /= gpu["GFLOPS32/W"];
    }
  });
  // `carbon`: The wattage of the model
  carbon *= hours; // Wh
  carbon /= 1000.0; // kWh
  let kilowatt = carbon;

  carbon *= ee;
  carbon /= 1000.0;
  // console.log("final kg of CO2: " + carbon);
  return [kilowatt, carbon];
}
