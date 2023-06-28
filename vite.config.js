import { viteSingleFile } from "vite-plugin-singlefile";

export default {
	root: "./src/",
	base: "/arave/",
	plugins: [viteSingleFile()]
}