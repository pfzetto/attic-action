import { install, is_installed } from "./stages/install";
import { configure } from "./stages/configure";
import { push } from "./stages/push";
import { getState, saveState } from "@actions/core";

const isPost = !!getState("isPost");

const main = async () => {
    await is_installed();
	await install();
	await configure();
};

if (!isPost) {
	saveState("isPost", true);
	main();
} else {
	push();
}
