// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: 'education' | 'work' | 'project' | 'achievement' | 'diary';
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "telegram-experience",
		title: "进驻TG",
		description: "在TG找到了很多好用的资源，也以此为起点开始分享资源。",
		type: "diary",
		startDate: "2023-12-17",
		location: "南京",
		organization: "Telegram",
		// position: "Software Development Intern",
		// skills: ["JavaScript", "Vue.js", "Node.js", "MySQL"],
		// achievements: [
		// 	"",
		// ],
		icon: "mdi:telegram",
		color: "#EA580C",
	},
	{
		id: "blog-building",
		title: "博客搭建",
		description: "搭建这个astro博客。",
		type: "diary",
		startDate: "2025-08-19",
		location: "苏州",
		organization: "Astro",
		// position: "Software Development Intern",
		skills: ["JavaScript", "Vue.js", "Node.js", "Astro"],
		// achievements: [
		// 	"",
		// ],
		links: [
			{
				name: "自改代码源码",
				url: "https://github.com/kemiaofxjun/mizuki",
				type: "project",
			},
		],
		icon: "material-symbols:code",
		color: "#059669",
	},
	// {
	// 	id: "hackathon-winner",
	// 	title: "黑客马拉松比赛获奖",
	// 	description: "在48小时内开发了一个创新的Web应用，获得了最佳技术实现奖。",
	// 	type: "achievement",
	// 	startDate: "2021-11-20",
	// 	endDate: "2021-11-22",
	// 	location: "上海",
	// 	organization: "TechHackathon 2021",
	// 	skills: ["React", "Express.js", "MongoDB", "Socket.io"],
	// 	achievements: [
	// 		"获得最佳技术实现奖",
	// 		"团队协作完成复杂项目",
	// 		"在短时间内学习新技术",
	// 	],
	// 	links: [
	// 		{
	// 			name: "Project Demo",
	// 			url: "https://hackathon-project.example.com",
	// 			type: "project",
	// 		},
	// 	],
	// 	icon: "material-symbols:emoji-events",
	// 	color: "#DC2626",
	// },
	{
		id: "resources-sharing",
		title: "接触资源分享",
		description:
			"第一次接触资源分享，在酷安、TG里面被大佬的分享的行动而开始自己的分享之旅。",
		type: "education",
		startDate: "2023-11-01",
		skills: ["app", "website", "exe"],
		achievements: [
			"通过分享资源帮助了身边的人",
			"对相关的技术有了一些的理解和掌握",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
	{
		id: "education-experience",
		title: "开始了大学生活",
		description: "脱离高中的泥沼，开始了相对轻松的大学生活",
		type: "education",
		startDate: "2023-09-06",
		location: "南京",
		organization: "南工大",
		skills: ["自动化"],
		achievements: ["四六级过关"],
		// links: [
		// 	{
		// 		name: "Project Demo",
		// 		url: "https://hackathon-project.example.com",
		// 		type: "project",
		// 	},
		// ],
		icon: "material-symbols:school",
		color: "#DC2626",
	},
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
