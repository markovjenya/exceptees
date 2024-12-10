// Assuming d3-scale is imported
import { scaleLog } from 'd3-scale';

function loggish(baseTransform) {
  // Here baseTransform might be a configuration function for your scale
  return scaleLog().base(baseTransform.base).unknown(undefined);
}

function transformer$2() {
  // Example transformer configuration
  return { base: 10 };
}

var scale = loggish(transformer$2()).domain([1, 10]);

console.log(scale(1));  // Output will depend on the scale configuration
console.log(scale(10)); // Output will depend on the scale configuration
