import { saveOnlyRun } from "./saveImpl";
import { validateSubscription } from "./utils/subscriptionUtils";

async function run() {
    await validateSubscription();
    await saveOnlyRun(true);
}

run();
