const swap = (arr, x, y) => ([arr[x], arr[y]] = [arr[y], arr[x]]);
const calcMiddle = (x, y) => ~~((x + y) / 2);

function quickSelect(arr) {
  let left = 0;
  let right = arr.length - 1;
  let middle, ll, rr;
  let median = calcMiddle(left, right);

  while (true) {
    if (right <= left) {
      return arr[median];
    }

    if (right === left + 1) {
      if (arr[left] > arr[right]) swap(arr, left, right);
      return arr[median];
    }

    middle = calcMiddle(left, right);

    if (arr[middle] > arr[right]) swap(arr, middle, right);
    if (arr[left] > arr[right]) swap(arr, left, right);
    if (arr[middle] > arr[left]) swap(arr, middle, left);

    swap(arr, middle, left + 1);

    ll = left + 1;
    rr = right;

    while (true) {
      do ll++;
      while (arr[left] > arr[ll]);
      do rr--;
      while (arr[rr] > arr[left]);

      if (rr < ll) break;

      swap(arr, ll, rr);
    }

    swap(arr, left, rr);

    if (rr <= median) left = ll;
    if (rr >= median) right = rr - 1;
  }
}

export default function acharMediana(notas) {
  return quickSelect(notas);
}