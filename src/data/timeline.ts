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
		type: 'website' | 'certificate' | 'project' | 'other';
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	// {
	// 	id: "current-work",
	// 	title: "全栈开发工程师",
	// 	description:
	// 		"负责Web应用的前后端开发，参与产品架构设计和技术选型，带领团队完成多个重要项目。",
	// 	type: "work",
	// 	startDate: "2023-06-01",
	// 	location: "北京",
	// 	organization: "TechCorp Inc.",
	// 	position: "Senior Full Stack Developer",
	// 	skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
	// 	achievements: [
	// 		"主导开发了公司核心产品的前端架构重构",
	// 		"优化系统性能，页面加载速度提升40%",
	// 		"建立了完善的代码审查和测试流程",
	// 	],
	// 	icon: "material-symbols:work",
	// 	color: "#2563EB",
	// 	featured: true,
	// },
	// {
	// 	id: "mizuki-project",
	// 	title: "Mizuki博客主题开源项目",
	// 	description:
	// 		"基于Astro框架开发的现代化博客主题，获得了社区的广泛认可和使用。",
	// 	type: "project",
	// 	startDate: "2024-01-01",
	// 	endDate: "2024-06-01",
	// 	skills: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
	// 	achievements: [
	// 		"GitHub获得500+ Stars",
	// 		"支持多语言和主题切换",
	// 		"完善的文档和示例",
	// 	],
	// 	links: [
	// 		{
	// 			name: "GitHub Repository",
	// 			url: "https://github.com/example/mizuki",
	// 			type: "project",
	// 		},
	// 		{
	// 			name: "Live Demo",
	// 			url: "https://mizuki-demo.example.com",
	// 			type: "website",
	// 		},
	// 	],
	// 	icon: "material-symbols:code",
	// 	color: "#059669",
	// 	featured: true,
	// },
	// {
	// 	id: "frontend-developer",
	// 	title: "前端开发工程师",
	// 	description:
	// 		"专注于React生态系统开发，负责多个企业级Web应用的前端架构和开发。",
	// 	type: "work",
	// 	startDate: "2022-03-01",
	// 	endDate: "2023-05-31",
	// 	location: "上海",
	// 	organization: "WebTech Solutions",
	// 	position: "Frontend Developer",
	// 	skills: ["React", "JavaScript", "CSS3", "Webpack", "Jest"],
	// 	achievements: [
	// 		"开发了公司主要产品的用户界面",
	// 		"建立了组件库和设计系统",
	// 		"提升了团队的开发效率和代码质量",
	// 	],
	// 	icon: "material-symbols:work",
	// 	color: "#DC2626",
	// },
	// {
	// 	id: "react-certification",
	// 	title: "React开发者认证",
	// 	description: "通过了React官方认证考试，证明了在React开发方面的专业能力。",
	// 	type: "achievement",
	// 	startDate: "2022-08-15",
	// 	organization: "Meta (Facebook)",
	// 	links: [
	// 		{
	// 			name: "Certificate",
	// 			url: "https://certificates.example.com/react-cert",
	// 			type: "certificate",
	// 		},
	// 	],
	// 	icon: "material-symbols:verified",
	// 	color: "#7C3AED",
	// },
	// {
	// 	id: "computer-science-degree",
	// 	title: "计算机科学与技术学士学位",
	// 	description:
	// 		"系统学习了计算机科学基础理论，包括数据结构、算法、操作系统、数据库等核心课程。",
	// 	type: "education",
	// 	startDate: "2018-09-01",
	// 	endDate: "2022-06-30",
	// 	location: "北京",
	// 	organization: "北京理工大学",
	// 	skills: ["Java", "C++", "Python", "MySQL", "Linux"],
	// 	achievements: [
	// 		"GPA: 3.8/4.0",
	// 		"获得校级优秀学生奖学金",
	// 		"参与多个课程项目和实习",
	// 	],
	// 	icon: "material-symbols:school",
	// 	color: "#059669",
	// 	featured: true,
	// },
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
		education: timelineData.filter(item => item.type === 'education').length,
		work: timelineData.filter(item => item.type === 'work').length,
		project: timelineData.filter(item => item.type === 'project').length,
		achievement: timelineData.filter(item => item.type === 'achievement').length
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === 'all') {
		return timelineData.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
	}
	return timelineData
		.filter(item => item.type === type)
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter(item => item.featured)
		.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter(item => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter(item => item.type === 'work');
	let totalMonths = 0;

	workItems.forEach(item => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12
	};
};