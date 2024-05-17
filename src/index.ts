import { install, is_installed } from "./stages/install";
import { configure } from "./stages/configure";
import { push } from "./stages/push";
import { getState, saveState, info } from "@actions/core";

const isPost = !!getState("isPost");

const main = async () => {
    if(await is_installed()){
        info("Skipping attic installation because it is already installed");
    }else{
        await install();
    }
	await configure();
};

if (!isPost) {
	saveState("isPost", true);
	main();
} else {
	push();
}
