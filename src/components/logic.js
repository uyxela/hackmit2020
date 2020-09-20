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

  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      carbon *= 1.0 / gpu["GFLOPS32/W"];
    }
  });

  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact / 1000.0;
    }
  });
  // (GFLOP / s) * (3600s / hr) * hrs * (W/GFLOPS32) * hrs * (kg CO2 / KWh)

  return carbon;
}