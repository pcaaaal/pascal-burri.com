import {title} from 'process';

const data = {
	bio: `Ich bin ein Softwareentwickler aus der Schweiz, mit schon mehreren Jahren Erfahrung in der Webentwicklung. Ich habe ein breites Wissen in verschiedenen Technologien und bin immer bereit, Neues zu lernen. Ich bin aktuell im ${new Date().getFullYear() - 2023 + (new Date().getMonth() >= 7 ? 1 : 0)}. Lernjahr als Informatiker EFZ Fachrichtung Applikationsentwicklung.`,

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
			title: 'Markus Burri - Portfolio Website',
			description: `Portfolio website for a pilot to showcase pictures and videos of his flights.`,
			image: '/markus-burri-ch.png',
			link: 'https://markus-burri-ch-new.vercel.app/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Image Gallery', 'Responsive', 'Cloudinary'],
		},
		{
			title: 'Markus Burri - Portfolio Website',
			description:
				'Portfolio website for a pilot to showcase pictures and videos of his flights.',
			image: '/markus-burri-ch.png',
			link: 'https://markus-burri-ch-new.vercel.app/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Image Gallery', 'Responsive', 'Cloudinary'],
		},
		{
			title: 'Markus Burri - Portfolio Website',
			description:
				'Portfolio website for a pilot to showcase pictures and videos of his flights.',
			image: '/markus-burri-ch.png',
			link: 'https://markus-burri-ch-new.vercel.app/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Image Gallery', 'Responsive', 'Cloudinary'],
		},
	],
};

export default data;
