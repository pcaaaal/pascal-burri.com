import {title} from 'process';

const data = {
	bio: `Hallo, ich bin ein Softwareentwickler aus der Schweiz mit einigen Jahren Erfahrung in der Webentwicklung. Ich habe ein breites Wissen in verschiedenen Technologien und bin immer bereit, neue Dinge zu lernen. Momentan bin ich im ${new Date().getFullYear() - 2023 + (new Date().getMonth() >= 7 ? 1 : 0)}. Lehrjahr als Informatiker Applikationsentwicklung.`,

	skills: [
		'HTML5',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'NextJS',
		'Tailwind CSS',
		'Node.js',
		'Spring Boot',
		'NestJS',
	],

	projects: [
		{
			title: 'Bildergalerie - markus-burri.ch',
			description: `Portfolio Website und Bildergalerie für einen Piloten, um Bilder und Videos seiner Flüge zu präsentieren.`,
			image: '/markus-burri-ch.png',
			link: 'https://markus-burri-ch-new.vercel.app/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Image Gallery', 'Responsive', 'Cloudinary'],
			scroll: true,
		},
		// {
		// 	title: 'Portfolio Website - pascal-burri.ch',
		// 	description:
		// 		'Portfolio Website für einen Softwareentwickler, um seine Projekte und Skills zu präsentieren.',
		// 	image: '/pascal-burri-ch.png',
		// 	link: 'https://pascal-burri.ch/',
		// 	languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
		// 	tags: ['Portfolio Website', 'Responsive', 'Mail-Formular'],
		// 	scroll: true,
		// },
		{
			title: 'Dein Projekt?',
			description:
				'Eine Website für dein Restaurant, um deine Speisekarte und Öffnungszeiten zu präsentieren? Oder eine Website für dein Unternehmen, um deine Dienstleistungen und Produkte zu präsentieren?',
			image: '/illustrations/your-website.png',
			link: '',
			languages: [
				'React',
				'NextJS',
				'Tailwind CSS',
				'Node.js',
				'Deine Sprache',
			],
			tags: ['Dein Projekt', 'Deine Idee', 'Dein Erfolg'],
			scroll: true,
		},
	],
};

export default data;
