export const generatePageCount = (totalCount: number, itemsCount: number) => {
  if (itemsCount) {
    const data = new Array(Math.ceil(totalCount / itemsCount));
    return data.fill(0).map((_, index) => {
      return index + 1;
    });
  }
};
