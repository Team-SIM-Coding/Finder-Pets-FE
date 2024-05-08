export const waitForMSWActivation = async (delay = 500): Promise<void> => {
  while (!navigator.serviceWorker.controller) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  await new Promise((resolve) => setTimeout(resolve, delay));
  console.log("MSW activation delayed and now active");
};
