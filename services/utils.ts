export const simulateDelay = async <T>(data: T, ms = 450): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));
