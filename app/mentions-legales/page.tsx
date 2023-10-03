import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

export default function page() {
  return (
    <DefaultLayout>
      <div className="bg-primary w-full h-80"></div>
      <section
        id="mentions-legales"
        className="flex flex-col items-center"
      >
        <div className="max-w-5xl flex flex-col gap-4 -translate-y-40">
          <h1 className="text-6xl lg:text-9xl font-black my-16">Mentions légales</h1>
          <h2 className="font-black text-xl">1 - Édition du site</h2>
          <p>
            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l'économie numérique, il est précisé aux
            utilisateurs du site internet https://latelier30.fr l'identité des
            différents intervenants dans le cadre de sa réalisation et de son
            suivi:
            <ul className="mt-2 list-disc pl-6">
              <li>
                Propriétaire du site : L'Atelier 3.0 - Contact :
                contact@latelier30.fr - Adresse : Rue georges courtelinne.
              </li>
              <li>
                Identification de l'entreprise : SAS L'Atelier 3.0 au capital
                social de 10€ - SIREN : SIRENTMP - RCS ou RM : - Adresse postale
                : Rue georges courtelinne - https://latelier30.fr/cgv
              </li>
              <li>
                Directeur de la publication : L'Atelier 3.0 - Contact :
                contact@latelier30.fr.
              </li>
              <li>
                Hébergeur : AutreHostinger Kaunas, Kauno Apskritis, Lithuania
              </li>
              <li>
                Délégué à la protection des données : Langlais Thibaud -
                thibaud@latelier30.fr
              </li>
              <li>Autres contributeurs : Autres contributeurs</li>
            </ul>
          </p>

          <h2 className="font-black text-xl mb-2">
            2 - Propriété intellectuelle et contrefaçons.
          </h2>
          <p>
            L'Atelier 3.0 est propriétaire des droits de propriété
            intellectuelle et détient les droits d’usage sur tous les éléments
            accessibles sur le site internet, notamment les textes, images,
            graphismes, logos, vidéos, architecture, icônes et sons. Toute
            reproduction, représentation, modification, publication, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable
            de L'Atelier 3.0. Toute exploitation non autorisée du site ou de
            l’un quelconque des éléments qu’il contient sera considérée comme
            constitutive d’une contrefaçon et poursuivie conformément aux
            dispositions des articles L.335-2 et suivants du Code de Propriété
            Intellectuelle.
          </p>
          <h2 className="font-black text-xl mb-2">
            3 - Limitations de responsabilité.
          </h2>
          <p>
            L'Atelier 3.0 ne pourra être tenu pour responsable des dommages
            directs et indirects causés au matériel de l’utilisateur, lors de
            l’accès au site https://latelier30.fr. L'Atelier 3.0 décline toute
            responsabilité quant à l’utilisation qui pourrait être faite des
            informations et contenus présents sur https://latelier30.fr.
            L'Atelier 3.0 s’engage à sécuriser au mieux le site
            https://latelier30.fr, cependant sa responsabilité ne pourra être
            mise en cause si des données indésirables sont importées et
            installées sur son site à son insu.
          </p>
          <h2 className="font-black text-xl mb-2">
            4 - CNIL et gestion des données personnelles.
          </h2>
          <p>
            Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
            modifiée, l’utilisateur du site https://latelier30.fr dispose d’un
            droit d’accès, de modification et de suppression des informations
            collectées. Pour exercer ce droit, envoyez un message à notre
            Délégué à la Protection des Données : Langlais Thibaud -
            thibaud@latelier30.fr. Pour plus d'informations sur la façon dont
            nous traitons vos données (type de données, finalité,
            destinataire...), lisez notre https://latelier30.fr/confidentialite.
          </p>
          <h2 className="font-black text-xl mb-2">
            5 - Liens hypertextes et cookies
          </h2>
          <p>
            Le site https://latelier30.fr contient des liens hypertextes vers
            d’autres sites et dégage toute responsabilité à propos de ces liens
            externes ou des liens créés par d’autres sites vers
            https://latelier30.fr. La navigation sur le site
            https://latelier30.fr est susceptible de provoquer l’installation de
            cookie(s) sur l’ordinateur de l’utilisateur. Un "cookie" est un
            fichier de petite taille qui enregistre des informations relatives à
            la navigation d’un utilisateur sur un site. Les données ainsi
            obtenues permettent d'obtenir des mesures de fréquentation, par
            exemple. Vous avez la possibilité d’accepter ou de refuser les
            cookies en modifiant les paramètres de votre navigateur. Aucun
            cookie ne sera déposé sans votre consentement. Les cookies sont
            enregistrés pour une durée maximale de mois. Pour plus
            d'informations sur la façon dont nous faisons usage des cookies,
            lisez notre https://latelier30.fr/confidentialite.
          </p>
          <h2 className="font-black text-xl mb-2">
            6 - Droit applicable et attribution de juridiction.
          </h2>
          <p>
            Tout litige en relation avec l’utilisation du site
            https://latelier30.fr est soumis au droit français. En dehors des
            cas où la loi ne le permet pas, il est fait attribution exclusive de
            juridiction aux tribunaux compétents du Mans.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
