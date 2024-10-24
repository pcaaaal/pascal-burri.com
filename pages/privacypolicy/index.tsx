import Head from 'next/head';

export const metadata = {
	title: 'Pascal Burri - Datenschutzerklärung',
	description: 'Datenschutzerklärung für die Website pascal-burri.com',
};

export default function Home() {
	return (
		<div className="tw-overflow-hidden">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</Head>
			<div className="tw-min-h-screen tw-m-0 tw-p-0 tw-flex tw-flex-col tw-items-center">
				<div className="tw-w-full tw-flex tw-flex-col tw-items-center">
					<h1 className="md:tw-text-6xl text-medium tw-font-bold tw-mb-0 tw-mt-20 tw-text-center tw-z-10">
						Datenschutzerklärung
					</h1>
				</div>
				<div className="pannel-size">
					<div className="glass-pannel tw-flex tw-flex-col tw-gap-2">
						<h1 className="tw-font-bold text-medium">
							Datenschutzerklärung
						</h1>

						<h2 className="text-small tw-font-bold">
							1. Allgemeine Hinweise
						</h2>
						<p className="text-small">
							Der Schutz Ihrer persönlichen Daten ist mir ein
							wichtiges Anliegen. Ich behandle Ihre
							personenbezogenen Daten vertraulich und entsprechend
							der gesetzlichen Datenschutzvorschriften der Schweiz
							(DSG) sowie der Datenschutz-Grundverordnung der EU
							(DSGVO).
						</p>
						<p className="text-small">
							Diese Datenschutzerklärung informiert Sie darüber,
							welche Daten ich erhebe, wie ich diese verwenden und
							welche Rechte Ihnen in Bezug auf Ihre Daten
							zustehen.
						</p>

						<h2 className="text-small tw-font-bold">
							2. Verantwortlicher
						</h2>
						<p className="text-small">
							Verantwortlich für die Verarbeitung der Daten auf
							dieser Website ist:
						</p>
						<p className="text-small">
							Name: Pascal Burri
							<br />
							E-Mail: info@pascal-burri.com
						</p>

						<h2 className="text-small tw-font-bold">
							3. Erhebung und Speicherung personenbezogener Daten
						</h2>
						<p className="text-small">
							Auf dieser Website erhebe ich personenbezogene Daten
							nur dann, wenn Sie mir diese freiwillig zur
							Verfügung stellen, z.B. durch das Ausfüllen des
							Kontaktformulars. Die von Ihnen eingegebenen Daten
							(Name und E-Mail-Adresse) werden ausschließlich zur
							Bearbeitung Ihrer Anfrage verwendet.
						</p>
						<p className="text-small">
							Name: Zur persönlichen Ansprache im Rahmen Ihrer
							Kontaktanfrage.
							<br />
							E-Mail-Adresse: Um Ihnen auf Ihre Anfrage zu
							antworten.
						</p>
						<p className="text-small">
							Die Verarbeitung dieser Daten erfolgt auf Grundlage
							Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie
							können diese Einwilligung jederzeit widerrufen. Dazu
							reicht eine formlose Mitteilung per E-Mail an mich.
							Die Rechtmäßigkeit der bis zum Widerruf erfolgten
							Datenverarbeitungsvorgänge bleibt vom Widerruf
							unberührt.
						</p>

						<h2 className="text-small tw-font-bold">
							4. Datenweitergabe
						</h2>
						<p className="text-small">
							Ich gebe Ihre personenbezogenen Daten nicht an
							Dritte weiter, es sei denn, dies ist zur Erfüllung
							rechtlicher Verpflichtungen erforderlich oder Sie
							haben ausdrücklich eingewilligt.
						</p>

						<h2 className="text-small tw-font-bold">
							5. Speicherdauer
						</h2>
						<p className="text-small">
							Ihre personenbezogenen Daten, die Sie uns über das
							Kontaktformular mitteilen, werden so lange
							gespeichert, bis der Zweck der Verarbeitung entfällt
							(d.h. sobald Ihre Anfrage vollständig bearbeitet
							wurde) oder bis Sie uns zur Löschung auffordern.
						</p>

						<h2 className="text-small tw-font-bold">
							6. SSL-Verschlüsselung
						</h2>
						<p className="text-small">
							Diese Website nutzt eine SSL-Verschlüsselung, um
							Ihre übermittelten Daten zu schützen. Sie erkennen
							eine verschlüsselte Verbindung an der
							&quot;https://&quot; Adresszeile des Browsers und am
							Schloss-Symbol in der Browserzeile.
						</p>

						<h2 className="text-small tw-font-bold">
							7. Rechte der betroffenen Person
						</h2>
						<p className="text-small">
							Sie haben das Recht, jederzeit unentgeltlich
							Auskunft über Ihre gespeicherten personenbezogenen
							Daten zu erhalten. Sie haben außerdem das Recht auf
							Berichtigung, Löschung oder Einschränkung der
							Verarbeitung dieser Daten.
						</p>
						<p className="text-small">
							Falls Sie die Löschung Ihrer Daten verlangen, werde
							ich diesem Wunsch nachkommen, sofern dem keine
							gesetzlichen Aufbewahrungspflichten entgegenstehen.
						</p>
						<p className="text-small">
							Im Einzelnen stehen Ihnen folgende Rechte zu:
						</p>
						<ul className="text-small">
							<li>
								Auskunftsrecht (Art. 15 DSGVO): Sie können
								jederzeit Auskunft über die von uns
								gespeicherten personenbezogenen Daten verlangen.
							</li>
							<li>
								Berichtigungsrecht (Art. 16 DSGVO): Sollten Ihre
								Daten unrichtig oder unvollständig sein, haben
								Sie das Recht auf Berichtigung.
							</li>
							<li>
								Löschungsrecht (Art. 17 DSGVO): Sie können die
								Löschung Ihrer Daten verlangen, sofern keine
								gesetzliche Aufbewahrungspflicht besteht.
							</li>
							<li>
								Recht auf Einschränkung der Verarbeitung (Art.
								18 DSGVO): Sie haben das Recht, die Verarbeitung
								Ihrer personenbezogenen Daten einzuschränken.
							</li>
							<li>
								Recht auf Datenübertragbarkeit (Art. 20 DSGVO):
								Sie haben das Recht, Ihre Daten in einem
								strukturierten, gängigen und maschinenlesbaren
								Format zu erhalten oder an einen anderen
								Verantwortlichen zu übertragen.
							</li>
						</ul>

						<h2 className="text-small tw-font-bold">
							8. Widerspruchsrecht
						</h2>
						<p className="text-small">
							Sie haben das Recht, der Verarbeitung Ihrer
							personenbezogenen Daten jederzeit zu widersprechen
							(Art. 21 DSGVO), sofern die Datenverarbeitung auf
							Grundlage eines berechtigten Interesses erfolgt.
							Wenn Sie Widerspruch einlegen, werden wir Ihre
							personenbezogenen Daten nicht mehr verarbeiten, es
							sei denn, wir können zwingende schutzwürdige Gründe
							für die Verarbeitung nachweisen.
						</p>

						<h2 className="text-small tw-font-bold">
							9. Änderungen dieser Datenschutzerklärung
						</h2>
						<p className="text-small">
							Ich behalte mir vor, diese Datenschutzerklärung
							gelegentlich anzupassen, damit sie stets den
							aktuellen rechtlichen Anforderungen entspricht. Die
							jeweils aktuelle Version ist auf dieser Website
							verfügbar.
						</p>

						<h2 className="text-small tw-font-bold">10. Kontakt</h2>
						<p className="text-small">
							Bei Fragen zur Verarbeitung Ihrer personenbezogenen
							Daten oder zur Ausübung Ihrer Rechte können Sie sich
							jederzeit an mich wenden:
						</p>
						<p className="text-small">
							Pascal Burri
							<br />
							info@pascal-burri.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
