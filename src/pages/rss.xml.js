import rss from "@astrojs/rss";

export function GET(context) {
	return rss({
		title: "Jinmokai’s Blog",
		description: "A Simple Blog for Documenting Your Life",
		site: context.site,
		items: [],
		customData: `<language>zh-cn</language>`,
	});
}
