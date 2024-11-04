import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - Impressum',
	description: 'Impressum für die Website pascal-burri.com',
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0  tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="md:tw-text-6xl text-medium tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Impressum
					</h1>
				</div>
				<div className="pannel-size">
					<div className="glass-pannel tw-flex tw-flex-col tw-gap-2">
						<h1 className="tw-font-bold text-medium">
							Verantwortlich für den Inhalt der Seiten
						</h1>
						<p className="text-small">
							Pascal Burri
							<br />
							Lorainestrasse 1
							<br />
							Bern 3000
							<br />
							Schweiz
							<br />
							<a
								href="mailto:info@pascal-burri.com"
								className="tw-underline"
							>
								info@pascal-burri.com
							</a>
						</p>
						<p className="text-medium tw-font-bold">
							Haftungsausschluss
						</p>
						<p className="text-small">
							Der Autor übernimmt keine Gewähr für die
							Richtigkeit, Genauigkeit, Aktualität,
							Zuverlässigkeit und Vollständigkeit der
							Informationen. Haftungsansprüche gegen den Autor
							wegen Schäden materieller oder immaterieller Art,
							die aus dem Zugriff oder der Nutzung bzw.
							Nichtnutzung der veröffentlichten Informationen,
							durch Missbrauch der Verbindung oder durch
							technische Störungen entstanden sind, werden
							ausgeschlossen. Alle Angebote sind freibleibend. Der
							Autor behält es sich ausdrücklich vor, Teile der
							Seiten oder das gesamte Angebot ohne gesonderte
							Ankündigung zu verändern, zu ergänzen, zu löschen
							oder die Veröffentlichung zeitweise oder endgültig
							einzustellen.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
