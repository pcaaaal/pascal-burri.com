const data = {
	bio: `Hallo, ich bin Pascal, ein Softwareentwickler aus der Schweiz mit einigen Jahren Erfahrung in der Webentwicklung. Ich habe ein breites Wissen in verschiedenen Technologien und bin immer bereit, neue Dinge zu lernen. Momentan bin ich im ${new Date().getFullYear() - 2023 + (new Date().getMonth() >= 7 ? 1 : 0)}. Lehrjahr als Informatiker Applikationsentwicklung.`,

	skills: [
		{
			title: 'HTML5',
			description:
				'Die neueste Version von HTML, mit neuen semantischen Elementen und Multimedia-Fähigkeiten.',
			link: 'https://developer.mozilla.org/de/docs/Web/HTML',
			type: 'Sprache',
			keywords: ['Web', 'Markup', 'Frontend'],
		},
		{
			title: 'CSS',
			description:
				'Eine Stylesheet-Sprache, die die Präsentation von Dokumenten in HTML oder XML beschreibt.',
			link: 'https://developer.mozilla.org/de/docs/Web/CSS',
			type: 'Sprache',
			keywords: ['Stil', 'Web', 'Frontend'],
		},
		{
			title: 'JavaScript',
			description:
				'Eine vielseitige Programmiersprache, die dynamische Inhalte auf Webseiten ermöglicht.',
			link: 'https://developer.mozilla.org/de/docs/Web/JavaScript',
			type: 'Sprache',
			keywords: ['Web', 'Frontend', 'Backend'],
		},
		{
			title: 'TypeScript',
			description:
				'Eine statisch typisierte Erweiterung von JavaScript, die die Codequalität und Wartbarkeit erhöht.',
			link: 'https://www.typescriptlang.org/',
			type: 'Sprache',
			keywords: ['JavaScript', 'typisierung', 'Web'],
		},
		{
			title: 'React',
			description:
				'Eine beliebte JavaScript-Bibliothek zur Erstellung schneller, interaktiver Benutzeroberflächen.',
			link: 'https://react.dev/',
			type: 'Framework',
			keywords: ['Frontend', 'JavaScript', 'UI'],
		},
		{
			title: 'NextJS',
			description:
				'Ein React-Framework für serverseitiges Rendern und statische Seitengenerierung zur Optimierung von Webanwendungen.',
			link: 'https://nextjs.org/',
			type: 'Framework',
			keywords: ['React', 'SSR', 'Web'],
		},
		{
			title: 'Tailwind CSS',
			description:
				'Ein CSS-Framework mit Utility-First-Ansatz für schnelles UI-Design und einheitliche Gestaltung.',
			link: 'https://tailwindcss.com/',
			type: 'Framework',
			keywords: ['CSS', 'UI', 'Web'],
		},
		{
			title: 'Node.js',
			description:
				'Eine JavaScript-Laufzeitumgebung, die auf der V8-Engine von Chrome basiert und ideal für serverseitige Anwendungen ist.',
			link: 'https://nodejs.org/',
			type: 'Runtime',
			keywords: ['JavaScript', 'Backend', 'Server'],
		},
		{
			title: 'Spring Boot',
			description:
				'Ein Java-Framework, das die Entwicklung produktionsbereiter Spring-Anwendungen vereinfacht.',
			link: 'https://spring.io/projects/spring-boot',
			type: 'Framework',
			keywords: ['Java', 'Backend', 'API'],
		},
		{
			title: 'NestJS',
			description:
				'Ein Node.js-Framework für den Aufbau effizienter und skalierbarer serverseitiger Anwendungen.',
			link: 'https://nestjs.com/',
			type: 'Framework',
			keywords: ['Backend', 'Node', 'TypeScript'],
		},
		{
			title: 'Python',
			description:
				'Eine vielseitige Programmiersprache für Webentwicklung, Datenwissenschaft und Scripting.',
			link: 'https://www.python.org/',
			type: 'Sprache',
			keywords: ['Backend', 'Scripting', 'Daten'],
		},
		{
			title: 'Git',
			description:
				'Ein verteiltes Versionskontrollsystem zur Nachverfolgung von Änderungen im Quellcode.',
			link: 'https://git-scm.com/',
			type: 'Tool',
			keywords: ['Versionierung', 'Zusammenarbeit', 'Code'],
		},
		{
			title: 'GitHub',
			description:
				'Eine Plattform für Versionskontrolle und Zusammenarbeit, die Entwicklern ermöglicht, Code zu hosten und zu überprüfen.',
			link: 'https://github.com/',
			type: 'Tool',
			keywords: ['Git', 'Zusammenarbeit', 'Repository'],
		},
		{
			title: 'GitLab',
			description:
				'Eine DevOps-Plattform mit einem Git-Repository-Manager, CI/CD-Pipeline und mehr.',
			link: 'https://about.gitlab.com/',
			type: 'Tool',
			keywords: ['Git', 'CI/CD', 'DevOps'],
		},
		{
			title: 'Prisma',
			description:
				'Ein Open-Source-ORM für Node.js und TypeScript, das Datenbankabfragen und Migrationen vereinfacht.',
			link: 'https://www.prisma.io/',
			type: 'Library',
			keywords: ['Datenbank', 'Node', 'TypeScript'],
		},
		{
			title: 'Express.js',
			description:
				'Ein minimalistisches Web-Framework für Node.js zur Entwicklung von RESTful-APIs und Webanwendungen.',
			link: 'https://expressjs.com/',
			type: 'Framework',
			keywords: ['Backend', 'Node', 'API'],
		},
		{
			title: 'SQL',
			description:
				'Eine Standardsprache zur Verwaltung und Abfrage relationaler Datenbanken.',
			link: 'https://developer.mozilla.org/de/docs/Glossary/SQL',
			type: 'Sprache',
			keywords: ['Datenbank', 'Daten', 'Abfrage'],
		},
		{
			title: 'C#',
			description:
				'Eine objektorientierte Programmiersprache von Microsoft, die häufig für Windows-Anwendungen verwendet wird.',
			link: 'https://learn.microsoft.com/de-de/dotnet/csharp/',
			type: 'Sprache',
			keywords: ['Microsoft', 'Backend', 'OOP'],
		},
		{
			title: 'Java',
			description:
				'Eine objektorientierte Programmiersprache, die für die Entwicklung von Unternehmensanwendungen verwendet wird.',
			link: 'https://www.oracle.com/de/java/',
			type: 'Sprache',
			keywords: ['Backend', 'OOP', 'Enterprise'],
		},
		{
			title: 'Bash',
			description:
				'Eine Unix-Shell und Skriptsprache zur Ausführung von Befehlen und Skripten auf Linux und macOS.',
			link: 'https://www.gnu.org/software/bash/',
			type: 'Sprache',
			keywords: ['Scripting', 'Shell', 'Linux'],
		},
	],

	projects: [
		{
			title: 'Bildergalerie',
			description: `Portfolio Website und Bildergalerie für einen Piloten, um Bilder und Videos seiner Flüge zu präsentieren.`,
			descriptionLong:
				'Dies war mein erstes Projekt, welches ich von einem Privatkunden erhalten habe. Es handelt sich um eine einfache Gallerie für die Flugbilder meines Vaters. Für diese Seite habe ich ein Template von Vercel für die Gallerie verwendet, es auf meine Bedürfnisse angepasst und den Rest der Website designed und entwickelt. Die Seite wurde mit Next.js und TailwindCSS erstellt, und wird auf Vercel gehostet.',
			image: '/markus-burri-ch.webp',
			link: 'https://markus-burri-ch-new.vercel.app/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Image Gallery', 'Responsive', 'Cloudinary'],
			scroll: true,
			date: '2024',
		},
		{
			title: 'Portfolio',
			description:
				'Portfolio Website für einen Softwareentwickler, um seine Projekte und Skills zu präsentieren.',
			descriptionLong:
				'Dies ist meine Portfolio Website, die ich entwickelt habe, um meine Projekte und Fähigkeiten zu präsentieren. Ich habe viel Wert auf ein modernes und ansprechendes Design gelegt, da dies meine Visitenkarte im Internet ist.',
			image: '/pascal-burri-com.webp',
			link: 'https://pascal-burri.com/',
			languages: ['NextJS', 'Tailwind CSS', 'TypeScript'],
			tags: ['Portfolio Website', 'Responsive', 'Mail-Formular'],
			scroll: true,
			date: '2024',
		},
		{
			title: 'Dein Projekt?',
			description:
				'Eine Website für dein Restaurant, dein Geschäft, oder deine Idee. Kontaktiere mich für ein unverbindliches Angebot.',
			image: '/illustrations/your-website.webp',
			link: '',
			languages: ['React', 'NextJS', 'HTML'],
			tags: ['Dein Projekt', 'Deine Idee', 'Dein Erfolg'],
			scroll: true,
			date: 'Jetzt?',
		},
	],
};

export default data;
