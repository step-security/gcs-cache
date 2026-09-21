import { restoreOnlyRun } from "./restoreImpl";
import { validateSubscription } from "./utils/subscriptionUtils";

async function run() {
    await validateSubscription();
    await restoreOnlyRun(true);
}

run();
