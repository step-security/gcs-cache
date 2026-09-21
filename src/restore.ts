import { restoreRun } from "./restoreImpl";
import { validateSubscription } from "./utils/subscriptionUtils";

async function run() {
    await validateSubscription();
    await restoreRun(true);
}

run();
