// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "Mizuki Blog 自用",
		description:
			"基于Astro框架开发的现代化博客主题，支持多语言、暗黑模式、响应式设计等功能。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.kemiaosw.top",
		sourceCode: "https://github.com/kemiaofxjun/mizuki",
		startDate: "2025-08-19",
		endDate: "2025-08-22",
		featured: true,
		tags: ["Blog", "Open Source"],
	},
	{
		id: "blog-v3",
		title: "纸鹿的博客魔改",
		description: "nuxt4的博客，感谢@661111佬的修改",
		image: "",
		category: "web",
		techStack: ["nuxt4", "vue", "TypeScript"],
		status: "in-progress",
		liveDemo: "https://kemeow.kemiaosw.top",
		sourceCode: "https://github.com/kemiaofxjun/kemiaofxjun_Blog_Nuxt",
		startDate: "2025-08-16",
		endDate: "2025-08-20",
		featured: true,
		tags: ["Blog", "nuxt4", "zhilu"],
	},
	{
		id: "Echo-Memos",
		title: "Ech0",
		description:
			"可以替代Memos的微博客，开源、自托管、专注思想流动的轻量级发布平台",
		image: "",
		category: "web",
		techStack: ["vue", "Go", "TypeScript"],
		status: "completed",
		liveDemo: "https://echo.050815.xyz",
		sourceCode: "https://github.com/kemiaofxjun/kemiaofxjun_Blog_Nuxt3",
		startDate: "2025-07-16",
		endDate: "2025-08-05",
		featured: true,
		tags: ["Ech0", "Memos", "Go"],
	},
	{
		id: "notionnext",
		title: "NotionNext",
		description: "使用 NextJS + Notion API 实现的博客系统。",
		image: "",
		category: "web",
		techStack: ["nextjs", "notion", "JavaScript"],
		status: "completed",
		liveDemo: "https://myboke.kemiaosw.top",
		sourceCode: "https://github.com/kemiaofxjun/kemiaofxjun-NotionNext",
		startDate: "2025-08-08",
		endDate: "2025-08-10",
		featured: true,
		tags: ["Blog", "NotionNext"],
	},
	{
		id: "Friend-Circle-Lite",
		title: "克喵的极简朋友圈",
		description:
			"一个精简版，无后端，且仅利用github action运行的精简版友链朋友圈程序",
		image: "",
		category: "web",
		techStack: ["Python", "HTML", "JavaScript"],
		status: "in-progress",
		liveDemo: "https://myboke.kemiaosw.top/fcircle",
		sourceCode: "https://github.com/kemiaofxjun/Friend-Circle-Lite",
		startDate: "2025-08-17",
		// endDate: "2025-08-20",
		// featured: true,
		tags: ["朋友圈", "hexo", "朋友圈"],
	},
	{
		id: "kemiaofxjun-NotionNext",
		title: "克喵的Hexo博客",
		description: "基于hexo的solitude主题的博客",
		image: "",
		category: "web",
		techStack: ["Stylus", "Pug", "JavaScript"],
		status: "completed",
		liveDemo: "https://myboke.kemiaosw.top",
		sourceCode: "https://github.com/kemiaofxjun/hexo-theme-solitude",
		startDate: "2025-08-15",
		endDate: "2025-08-20",
		featured: false,
		tags: ["Blog", "Hexo"],
	},
	// {
	// 	id: "task-manager-app",
	// 	title: "Task Manager App",
	// 	description: "跨平台任务管理应用，支持团队协作和项目管理。",
	// 	image: "",
	// 	category: "mobile",
	// 	techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
	// 	status: "in-progress",
	// 	startDate: "2024-03-01",
	// 	tags: ["Mobile", "Productivity", "Team Collaboration"],
	// },
	// {
	// 	id: "data-visualization-tool",
	// 	title: "Data Visualization Tool",
	// 	description: "数据可视化工具，支持多种图表类型和交互式分析。",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
	// 	status: "completed",
	// 	liveDemo: "https://dataviz.example.com",
	// 	startDate: "2023-06-01",
	// 	endDate: "2023-11-01",
	// 	tags: ["Data Visualization", "Analytics", "Charts"],
	// },
	// {
	// 	id: "e-commerce-platform",
	// 	title: "E-commerce Platform",
	// 	description: "全栈电商平台，包含用户管理、商品管理、订单处理等功能。",
	// 	image: "",
	// 	category: "web",
	// 	techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
	// 	status: "planned",
	// 	startDate: "2024-07-01",
	// 	tags: ["E-commerce", "Full Stack", "Payment Integration"],
	// },
];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// 按分类获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// 获取特色项目
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
