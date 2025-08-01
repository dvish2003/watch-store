import { getAuth } from "@/util/cookies"

export const authHandle = () => {
    const isAuth = getAuth();
    if (isAuth === 'true') {
        return 'true';
    } else {
        return 'false';
    }
}