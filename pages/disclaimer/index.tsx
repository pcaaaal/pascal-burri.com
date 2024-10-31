import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - Disclaimer',
	description: 'Disclaimer für die Website pascal-burri.com',
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0 tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="md:tw-text-6xl text-medium tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Disclaimer
					</h1>
				</div>
				<div className="pannel-size">
					<div className="glass-pannel tw-flex tw-flex-col tw-gap-2">
						<h1 className="tw-font-bold text-medium">Disclaimer</h1>
						<p className="text-small">
							Alle Texte und Links wurden sorgfältig geprüft und
							werden laufend aktualisiert. Wir sind bemüht,
							richtige und vollständige Informationen auf dieser
							Website bereitzustellen, übernehmen aber keinerlei
							Verantwortung, Garantien oder Haftung dafür, dass
							die durch diese Website bereitgestellten
							Informationen, richtig, vollständig oder aktuell
							sind. Wir behalten uns das Recht vor, jederzeit und
							ohne Vorankündigung die Informationen auf dieser
							Website zu ändern und verpflichten uns auch nicht,
							die enthaltenen Informationen zu aktualisieren. Alle
							Links zu externen Anbietern wurden zum Zeitpunkt
							ihrer Aufnahme auf ihre Richtigkeit überprüft,
							dennoch haften wir nicht für Inhalte und
							Verfügbarkeit von Websites, die mittels Hyperlinks
							zu erreichen sind. Für illegale, fehlerhafte oder
							unvollständige Inhalte und insbesondere für Schäden,
							die durch Inhalte verknüpfter Seiten entstehen,
							haftet allein der Anbieter der Seite, auf welche
							verwiesen wurde. Dabei ist es gleichgültig, ob der
							Schaden direkter, indirekter oder finanzieller Natur
							ist oder ein sonstiger Schaden vorliegt, der sich
							aus Datenverlust, Nutzungsausfall oder anderen
							Gründen aller Art ergeben könnte.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
