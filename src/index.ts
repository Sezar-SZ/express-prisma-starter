import app from "./app";
import { config } from "../src/lib/config";

const port = config.PORT;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});
