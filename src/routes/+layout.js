import posthog from "posthog-js";
import {browser} from "$app/environment";

export const load = async ()=>{
    if(browser){
        posthog.init("phc_5JlcKbVxyQP5uOTE1RNHoPXjlqJzT0czMAuqcx1WegX", {
            api_host: "https://us.i.posthog.com",
            person_profiles: "identified_only"
        });
    }
    return;
}
