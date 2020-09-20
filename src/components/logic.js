import gpus from "../data/gpus.json";
import sources from "../data/sources.json";
import models from "../data/models.json";

export function training(gpuhardware, hours, provider, region, modelname) {
  let carbon = 3600 * hours * hours; // in units of kg of CO2
  models.forEach((model) => {
    if (model.name === modelname) {
      carbon *= model.flops;
    }
  });
  // `carbon`: The number of floating point operations that will occur in execution
  console.log("# of GFLOPS that will occur: " + carbon);

  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      carbon /= gpu["GFLOPS32/W"];
    }
  });
  // `carbon`: The wattage of the model
  carbon *= hours;
  carbon /= 1000.0;
  console.log("The kWh: " + carbon);

  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact;
    }
  });
  
  // (GFLOP / s) * (3600s / hr) * hrs * (W/GFLOPS32) * hrs * (kg CO2 / KWh)
  console.log("final kg of CO2: " + carbon);
  return carbon;
}