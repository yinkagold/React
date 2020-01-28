import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex) // slice the array from that startIndex
    .take(pageSize)
    .value(); // paginating data on the client side
}
