// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description: "Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description: "A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: ["mizuki-blog", "portfolio-website", "task-manager-app"],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description: "A JavaScript library for building user interfaces, including Hooks, Context, and state management.",
		icon: "logos:react",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 10 },
		projects: ["portfolio-website", "task-manager-app"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
		icon: "logos:vue",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},
	{
		id: "angular",
		name: "Angular",
		description: "An enterprise-level frontend framework developed by Google, a complete single-page application solution.",
		icon: "logos:angular-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 9 },
		projects: ["enterprise-dashboard"],
		color: "#DD0031",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description: "A production-level React framework supporting SSR, SSG, and full-stack development.",
		icon: "logos:nextjs-icon",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["e-commerce-frontend", "blog-platform"],
		color: "#000000",
	},
	{
		id: "nuxtjs",
		name: "Nuxt.js",
		description: "An intuitive Vue.js framework supporting server-side rendering and static site generation.",
		icon: "logos:nuxt-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["vue-ssr-app"],
		color: "#00DC82",
	},
	{
		id: "astro",
		name: "Astro",
		description: "A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 2 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description: "A utility-first CSS framework for rapidly building modern user interfaces.",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["mizuki-blog", "portfolio-website"],
		color: "#06B6D4",
	},
	{
		id: "sass",
		name: "Sass/SCSS",
		description: "A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
		icon: "logos:sass",
		category: "frontend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["legacy-website", "component-library"],
		color: "#CF649A",
	},
	{
		id: "webpack",
		name: "Webpack",
		description: "A static module bundler for modern JavaScript applications.",
		icon: "logos:webpack",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		projects: ["custom-build-tool", "spa-application"],
		color: "#8DD6F9",
	},
	{
		id: "vite",
		name: "Vite",
		description: "Next-generation frontend build tool with fast cold starts and hot updates.",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["vue-project", "react-project"],
		color: "#646CFF",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description: "A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description: "A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "A mainstream programming language for enterprise application development, cross-platform and object-oriented.",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["enterprise-system", "microservices-api"],
		color: "#ED8B00",
	},
	{
		id: "csharp",
		name: "C#",
		description: "A modern object-oriented programming language developed by Microsoft, suitable for the .NET ecosystem.",
		icon: "devicon:csharp",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["desktop-application", "web-api"],
		color: "#239120",
	},
	{
		id: "go",
		name: "Go",
		description: "An efficient programming language developed by Google, suitable for cloud-native and microservices development.",
		icon: "logos:go",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["microservice-demo"],
		color: "#00ADD8",
	},
	{
		id: "rust",
		name: "Rust",
		description: "A systems programming language focusing on safety, speed, and concurrency, with no garbage collector.",
		icon: "logos:rust",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["system-tool", "performance-critical-app"],
		color: "#CE422B",
	},
	{
		id: "cpp",
		name: "C++",
		description: "A high-performance systems programming language widely used in game development, system software, and embedded development.",
		icon: "logos:c-plusplus",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["game-engine", "system-optimization"],
		color: "#00599C",
	},
	{
		id: "c",
		name: "C",
		description: "A low-level systems programming language, the foundation for operating systems and embedded systems development.",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["embedded-system", "kernel-module"],
		color: "#A8B9CC",
	},
	{
		id: "kotlin",
		name: "Kotlin",
		description: "A modern programming language developed by JetBrains, fully compatible with Java, the preferred choice for Android development.",
		icon: "logos:kotlin-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["android-app", "kotlin-backend"],
		color: "#7F52FF",
	},
	{
		id: "swift",
		name: "Swift",
		description: "A modern programming language developed by Apple for iOS, macOS, watchOS, and tvOS development.",
		icon: "logos:swift",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["ios-app", "macos-tool"],
		color: "#FA7343",
	},
	{
		id: "ruby",
		name: "Ruby",
		description: "A dynamic, open-source programming language focusing on simplicity and productivity, the foundation of the Rails framework.",
		icon: "logos:ruby",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 4 },
		projects: ["web-prototype"],
		color: "#CC342D",
	},
	{
		id: "php",
		name: "PHP",
		description: "A widely-used server-side scripting language, particularly suitable for web development.",
		icon: "logos:php",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["cms-system", "e-commerce-backend"],
		color: "#777BB4",
	},
	{
		id: "express",
		name: "Express.js",
		description: "A fast, minimalist Node.js web application framework.",
		icon: "simple-icons:express",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["data-visualization-tool"],
		color: "#000000",
	},
	{
		id: "spring",
		name: "Spring Boot",
		description: "The most popular enterprise application development framework in the Java ecosystem.",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["enterprise-system", "rest-api"],
		color: "#6DB33F",
	},
	{
		id: "django",
		name: "Django",
		description: "A high-level Python web framework with rapid development and clean, pragmatic design.",
		icon: "logos:django-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["blog-backend"],
		color: "#092E20",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description: "The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	{
		id: "postgresql",
		name: "PostgreSQL",
		description: "A powerful open-source relational database management system.",
		icon: "logos:postgresql",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 5 },
		projects: ["e-commerce-platform"],
		color: "#336791",
	},
	{
		id: "redis",
		name: "Redis",
		description: "A high-performance in-memory data structure store, used as a database, cache, and message broker.",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["e-commerce-platform", "real-time-chat"],
		color: "#DC382D",
	},
	{
		id: "mongodb",
		name: "MongoDB",
		description: "A document-oriented NoSQL database with a flexible data model.",
		icon: "logos:mongodb-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 9 },
		color: "#47A248",
	},

	// Tools
	{
		id: "git",
		name: "Git",
		description: "A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "docker",
		name: "Docker",
		description: "A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 3 },
		color: "#2496ED",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
