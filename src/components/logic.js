// THIS IS A MODULE; USE `import { training, inference } from 'logic';`
import gpus from "../data/gpus.json";
import sources from "../data/sources.json";

function training(gpuhardware, hours, provider, region) {
  let carbon = 1; // in units of kg of CO2
  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      carbon *= gpu.watt;
    }
  });
  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact / 1000.0;
    }
  });

  return carbon * hours;
}

function inference(gpuhardware, hours, provider, region) {
  let carbon = 1; // in units of kg of CO2
  gpus.forEach((gpu) => {
    if (gpu.name === gpuhardware) {
      carbon *= gpu.watt;
    }
  });
  sources.forEach((source) => {
    if (source.provider === provider && source.region === region) {
      carbon *= source.impact / 1000.0;
    }
  });

  return carbon;
}

export default { training, inference };
