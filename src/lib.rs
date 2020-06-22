use wasm_bindgen::prelude::*;
//max item in array

#[wasm_bindgen]
pub fn alg_n(arr: &[i32]) -> i32 {
    let mut max = arr[0];

    for x in arr {
        if x > &max {
            max = *x;
        }
    }

    return max;
}

//binary search
#[wasm_bindgen]
pub fn alg_log_n(arr: &[f64], x: f64) -> i32 {
    let (mut l, mut r): (i32, i32) = (0, arr.len() as i32);

    loop {
        let m: i32 = l + (r - l) / 2;

        let idx = m as usize;

        if arr[idx] == x {
            return m;
        }

        if arr[idx] < x {
            l = m + 1;
        } else {
            r = m - 1;
        }

        if l > r {
            return -1;
        }
    }
}

//buble sort
#[wasm_bindgen]
pub fn alg_quadratic_n() {}
