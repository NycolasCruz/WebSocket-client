import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

export const echo = new Echo({
    broadcaster: "reverb",
    key: "qtsqporbc5kjhir8r9yw",
    wsHost: "localhost",
    wsPort: 7000,
    forceTLS: false,
    disableStats: true,
});
