import { saveRun } from "./saveImpl";
import { validateSubscription } from "./utils/subscriptionUtils";

async function run() {
    await validateSubscription();
    await saveRun(true);
}

run();
