import * as WASM from "./pkg/speed_test.js";
import { performance } from "perf_hooks";

//ES6
const es6AlgN = (arr) => {
  let max = arr[0];
  arr.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });
  return max;
};

//javascript
const jsAlgN = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const genArrForAlgN = (n) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.round(Math.random() * 1000000));
  }

  return arr;
};

const countPerformance = (fn) => {
  let t0 = performance.now();
  let x = fn();
  let t1 = performance.now();
  return t1 - t0;
};

const main = async () => {
  const arrAlgN0 = genArrForAlgN(1000);
  let wasmPerfAlgN0 = countPerformance(() => WASM.default.alg_n(arrAlgN0));
  let nodeES6PerfAlgN0 = countPerformance(() => es6AlgN(arrAlgN0));
  let nodePerfAlgN0 = countPerformance(() => jsAlgN(arrAlgN0));

  const arrAlgN1 = genArrForAlgN(10000);
  let wasmPerfAlgN1 = countPerformance(() => WASM.default.alg_n(arrAlgN1));
  let nodeES6PerfAlgN1 = countPerformance(() => es6AlgN(arrAlgN1));
  let nodePerfAlgN1 = countPerformance(() => jsAlgN(arrAlgN1));

  const arrAlgN2 = genArrForAlgN(100000);
  let wasmPerfAlgN2 = countPerformance(() => WASM.default.alg_n(arrAlgN2));
  let nodeES6PerfAlgN2 = countPerformance(() => es6AlgN(arrAlgN2));
  let nodePerfAlgN2 = countPerformance(() => jsAlgN(arrAlgN2));

  const arrAlgN3 = genArrForAlgN(1000000);
  let wasmPerfAlgN3 = countPerformance(() => WASM.default.alg_n(arrAlgN3));
  let nodeES6PerfAlgN3 = countPerformance(() => es6AlgN(arrAlgN3));
  let nodePerfAlgN3 = countPerformance(() => jsAlgN(arrAlgN3));

  const arrAlgN4 = genArrForAlgN(10000000);
  let wasmPerfAlgN4 = countPerformance(() => WASM.default.alg_n(arrAlgN4));
  let nodeES6PerfAlgN4 = countPerformance(() => es6AlgN(arrAlgN4));
  let nodePerfAlgN4 = countPerformance(() => jsAlgN(arrAlgN4));
  // 4294967296
  const arrAlgN5 = genArrForAlgN(100000000);
  let wasmPerfAlgN5 = countPerformance(() => WASM.default.alg_n(arrAlgN5));
  let nodeES6PerfAlgN5 = countPerformance(() => es6AlgN(arrAlgN5));
  let nodePerfAlgN5 = countPerformance(() => jsAlgN(arrAlgN5));

  console.log("Algorithm complexity O(n):");
  console.table({
    "n = 1000": {
      wasm: wasmPerfAlgN0,
      ES6: nodeES6PerfAlgN0,
      node: nodePerfAlgN0,
    },
    "n = 10000": {
      wasm: wasmPerfAlgN1,
      ES6: nodeES6PerfAlgN1,
      node: nodePerfAlgN1,
    },
    "n = 100000": {
      wasm: wasmPerfAlgN2,
      ES6: nodeES6PerfAlgN2,
      node: nodePerfAlgN2,
    },
    "n = 1000000": {
      wasm: wasmPerfAlgN3,
      ES6: nodeES6PerfAlgN3,
      node: nodePerfAlgN3,
    },
    "n = 10000000": {
      wasm: wasmPerfAlgN4,
      ES6: nodeES6PerfAlgN4,
      node: nodePerfAlgN4,
    },
    "n = 100000000": {
      wasm: wasmPerfAlgN5,
      ES6: nodeES6PerfAlgN5,
      node: nodePerfAlgN5,
    },
  });
};

main();
