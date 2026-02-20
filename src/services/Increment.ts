import { api } from "./api";

export function increment() {
    return api.post("/increment");
}
