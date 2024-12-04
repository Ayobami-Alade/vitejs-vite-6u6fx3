export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility
  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
  if (step === 0) {
    throw new Error('Step cannot be zero');
  }

  if (start > 0 && end == undefined) {
    for (let i = 0; i < start; i += step) {
      output.push(i);
    }
  } else if (start < end) {
    // assending range
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  }

  return output;
};
