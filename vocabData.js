const vocabData = [
    {
        "theme": "Professionnel",
        "words": [
            {
                "nl": "het bedrijf",
                "fr": "l'entreprise"
            },
            {
                "nl": "de onderneming",
                "fr": "la soci\u00e9t\u00e9"
            },
            {
                "nl": "de afdeling",
                "fr": "le service / le d\u00e9partement"
            },
            {
                "nl": "de directie",
                "fr": "la direction"
            },
            {
                "nl": "het management",
                "fr": "la gestion / le management"
            },
            {
                "nl": "de leidinggevende",
                "fr": "le responsable"
            },
            {
                "nl": "de collega",
                "fr": "le coll\u00e8gue"
            },
            {
                "nl": "de werknemer",
                "fr": "l'employ\u00e9"
            },
            {
                "nl": "de werkgever",
                "fr": "l'employeur"
            },
            {
                "nl": "de zelfstandige",
                "fr": "l'ind\u00e9pendant"
            },
            {
                "nl": "de consultant",
                "fr": "le consultant"
            },
            {
                "nl": "de stagiair",
                "fr": "le stagiaire"
            },
            {
                "nl": "de werkplek",
                "fr": "le lieu de travail"
            },
            {
                "nl": "het kantoor",
                "fr": "le bureau"
            },
            {
                "nl": "de open ruimte",
                "fr": "l'open space"
            },
            {
                "nl": "de vergaderzaal",
                "fr": "la salle de r\u00e9union"
            },
            {
                "nl": "de receptie",
                "fr": "l'accueil"
            },
            {
                "nl": "de administratie",
                "fr": "l'administration"
            },
            {
                "nl": "de boekhouding",
                "fr": "la comptabilit\u00e9"
            },
            {
                "nl": "de HR-afdeling",
                "fr": "le service RH"
            },
            {
                "nl": "de IT-dienst",
                "fr": "le service informatique"
            },
            {
                "nl": "de logistiek",
                "fr": "la logistique"
            },
            {
                "nl": "de productie",
                "fr": "la production"
            },
            {
                "nl": "de dienstensector",
                "fr": "le secteur des services"
            },
            {
                "nl": "de arbeidsmarkt",
                "fr": "le march\u00e9 du travail"
            },
            {
                "nl": "werken",
                "fr": "travailler"
            },
            {
                "nl": "solliciteren",
                "fr": "postuler"
            },
            {
                "nl": "de sollicitatiebrief",
                "fr": "la lettre de candidature"
            },
            {
                "nl": "het cv",
                "fr": "le CV"
            },
            {
                "nl": "de vacature",
                "fr": "l'offre d'emploi"
            },
            {
                "nl": "aangenomen worden",
                "fr": "\u00eatre engag\u00e9"
            },
            {
                "nl": "ontslagen worden",
                "fr": "\u00eatre licenci\u00e9"
            },
            {
                "nl": "de werkuren",
                "fr": "les heures de travail"
            },
            {
                "nl": "de ploegendienst",
                "fr": "le travail en \u00e9quipe"
            },
            {
                "nl": "de nachtdienst",
                "fr": "le service de nuit"
            },
            {
                "nl": "de werkdruk",
                "fr": "la charge de travail"
            },
            {
                "nl": "de verantwoordelijkheid",
                "fr": "la responsabilit\u00e9"
            },
            {
                "nl": "de taak",
                "fr": "la t\u00e2che"
            },
            {
                "nl": "de planning",
                "fr": "la planification"
            },
            {
                "nl": "de deadline",
                "fr": "la date limite"
            },
            {
                "nl": "de afspraak",
                "fr": "le rendez-vous"
            },
            {
                "nl": "de vergadering",
                "fr": "la r\u00e9union"
            },
            {
                "nl": "notuleren",
                "fr": "prendre des notes"
            },
            {
                "nl": "rapporteren",
                "fr": "faire un rapport"
            },
            {
                "nl": "samenwerken",
                "fr": "collaborer"
            },
            {
                "nl": "overleggen",
                "fr": "se concerter"
            },
            {
                "nl": "beslissen",
                "fr": "d\u00e9cider"
            },
            {
                "nl": "uitvoeren",
                "fr": "ex\u00e9cuter"
            },
            {
                "nl": "afronden",
                "fr": "terminer"
            },
            {
                "nl": "prioriteiten stellen",
                "fr": "d\u00e9finir les priorit\u00e9s"
            },
            {
                "nl": "het contract",
                "fr": "le contrat"
            },
            {
                "nl": "het arbeidscontract",
                "fr": "le contrat de travail"
            },
            {
                "nl": "de arbeidsovereenkomst",
                "fr": "la convention de travail"
            },
            {
                "nl": "voltijds",
                "fr": "\u00e0 temps plein"
            },
            {
                "nl": "deeltijds",
                "fr": "\u00e0 temps partiel"
            },
            {
                "nl": "het loon",
                "fr": "le salaire"
            },
            {
                "nl": "het nettoloon",
                "fr": "le salaire net"
            },
            {
                "nl": "het brutoloon",
                "fr": "le salaire brut"
            },
            {
                "nl": "de loonsverhoging",
                "fr": "l'augmentation salariale"
            },
            {
                "nl": "de premie",
                "fr": "la prime"
            },
            {
                "nl": "de maaltijdcheques",
                "fr": "les ch\u00e8ques-repas"
            },
            {
                "nl": "de hospitalisatieverzekering",
                "fr": "l'assurance hospitalisation"
            },
            {
                "nl": "de pensioenregeling",
                "fr": "le r\u00e9gime de pension"
            },
            {
                "nl": "de verlofdagen",
                "fr": "les jours de cong\u00e9"
            },
            {
                "nl": "het ziekteverlof",
                "fr": "le cong\u00e9 maladie"
            },
            {
                "nl": "het ouderschapsverlof",
                "fr": "le cong\u00e9 parental"
            },
            {
                "nl": "de opzegtermijn",
                "fr": "le pr\u00e9avis"
            },
            {
                "nl": "de arbeidsvoorwaarden",
                "fr": "les conditions de travail"
            },
            {
                "nl": "de CAO (collectieve arbeidsovereenkomst)",
                "fr": "la CCT"
            },
            {
                "nl": "de vakbond",
                "fr": "le syndicat"
            },
            {
                "nl": "de staking",
                "fr": "la gr\u00e8ve"
            },
            {
                "nl": "de werkloosheid",
                "fr": "le ch\u00f4mage"
            },
            {
                "nl": "de werkloosheidsuitkering",
                "fr": "l'allocation de ch\u00f4mage"
            },
            {
                "nl": "de sociale zekerheid",
                "fr": "la s\u00e9curit\u00e9 sociale"
            },
            {
                "nl": "de arbeidsongeval",
                "fr": "l'accident de travail"
            },
            {
                "nl": "de e-mail",
                "fr": "l'e-mail"
            },
            {
                "nl": "de bijlage",
                "fr": "la pi\u00e8ce jointe"
            },
            {
                "nl": "de telefoonvergadering",
                "fr": "la r\u00e9union t\u00e9l\u00e9phonique"
            },
            {
                "nl": "videobellen",
                "fr": "appeler en visioconf\u00e9rence"
            },
            {
                "nl": "het platform",
                "fr": "la plateforme"
            },
            {
                "nl": "de software",
                "fr": "le logiciel"
            },
            {
                "nl": "het bestand",
                "fr": "le fichier"
            },
            {
                "nl": "uploaden",
                "fr": "t\u00e9l\u00e9charger (vers le serveur)"
            },
            {
                "nl": "downloaden",
                "fr": "t\u00e9l\u00e9charger (vers l'ordinateur)"
            },
            {
                "nl": "opslaan",
                "fr": "enregistrer"
            },
            {
                "nl": "printen",
                "fr": "imprimer"
            },
            {
                "nl": "scannen",
                "fr": "scanner"
            },
            {
                "nl": "de presentatie",
                "fr": "la pr\u00e9sentation"
            },
            {
                "nl": "de projector",
                "fr": "le projecteur"
            },
            {
                "nl": "het whiteboard",
                "fr": "le tableau blanc"
            },
            {
                "nl": "de agenda",
                "fr": "l'agenda"
            },
            {
                "nl": "de planningstool",
                "fr": "l'outil de planification"
            },
            {
                "nl": "het intranet",
                "fr": "l'intranet"
            },
            {
                "nl": "de memo",
                "fr": "la note interne"
            },
            {
                "nl": "de feedback",
                "fr": "le retour / feedback"
            },
            {
                "nl": "het overleg",
                "fr": "la concertation"
            },
            {
                "nl": "de brainstorm",
                "fr": "le brainstorming"
            },
            {
                "nl": "de briefing",
                "fr": "le briefing"
            },
            {
                "nl": "de opleiding",
                "fr": "la formation"
            },
            {
                "nl": "de evaluatie",
                "fr": "l'\u00e9valuation"
            }
        ]
    },
    {
        "theme": "Commerce",
        "words": [
            {
                "nl": "de winkel",
                "fr": "le magasin"
            },
            {
                "nl": "het warenhuis",
                "fr": "le grand magasin"
            },
            {
                "nl": "de supermarkt",
                "fr": "le supermarch\u00e9"
            },
            {
                "nl": "de bakkerij",
                "fr": "la boulangerie"
            },
            {
                "nl": "de slagerij",
                "fr": "la boucherie"
            },
            {
                "nl": "de groentewinkel",
                "fr": "le magasin de l\u00e9gumes"
            },
            {
                "nl": "de kledingwinkel",
                "fr": "le magasin de v\u00eatements"
            },
            {
                "nl": "de boekhandel",
                "fr": "la librairie"
            },
            {
                "nl": "de drogisterij",
                "fr": "la droguerie"
            },
            {
                "nl": "de apotheek",
                "fr": "la pharmacie"
            },
            {
                "nl": "de markt",
                "fr": "le march\u00e9"
            },
            {
                "nl": "de kraam",
                "fr": "l'\u00e9tal"
            },
            {
                "nl": "de winkelstraat",
                "fr": "la rue commer\u00e7ante"
            },
            {
                "nl": "het winkelcentrum",
                "fr": "le centre commercial"
            },
            {
                "nl": "de kassa",
                "fr": "la caisse"
            },
            {
                "nl": "de paskamer",
                "fr": "la cabine d'essayage"
            },
            {
                "nl": "de etalage",
                "fr": "la vitrine"
            },
            {
                "nl": "de voorraadkamer",
                "fr": "la r\u00e9serve"
            },
            {
                "nl": "de groothandel",
                "fr": "le grossiste"
            },
            {
                "nl": "de detailhandel",
                "fr": "le commerce de d\u00e9tail"
            },
            {
                "nl": "de klant",
                "fr": "le client"
            },
            {
                "nl": "de verkoper",
                "fr": "le vendeur"
            },
            {
                "nl": "de verkoopster",
                "fr": "la vendeuse"
            },
            {
                "nl": "de kassier",
                "fr": "le caissier"
            },
            {
                "nl": "de dienst na verkoop",
                "fr": "le service apr\u00e8s-vente"
            },
            {
                "nl": "de klantendienst",
                "fr": "le service client"
            },
            {
                "nl": "de leverancier",
                "fr": "le fournisseur"
            },
            {
                "nl": "de besteller",
                "fr": "le livreur"
            },
            {
                "nl": "de vertegenwoordiger",
                "fr": "le repr\u00e9sentant"
            },
            {
                "nl": "de handelaar",
                "fr": "le commer\u00e7ant"
            },
            {
                "nl": "de koper",
                "fr": "l'acheteur"
            },
            {
                "nl": "de consument",
                "fr": "le consommateur"
            },
            {
                "nl": "de doelgroep",
                "fr": "le public cible"
            },
            {
                "nl": "de vaste klant",
                "fr": "le client fid\u00e8le"
            },
            {
                "nl": "de nieuwe klant",
                "fr": "le nouveau client"
            },
            {
                "nl": "de klacht",
                "fr": "la plainte"
            },
            {
                "nl": "de terugbetaling",
                "fr": "le remboursement"
            },
            {
                "nl": "de garantie",
                "fr": "la garantie"
            },
            {
                "nl": "de herstelling",
                "fr": "la r\u00e9paration"
            },
            {
                "nl": "de bestelling",
                "fr": "la commande"
            },
            {
                "nl": "de prijs",
                "fr": "le prix"
            },
            {
                "nl": "de prijsstijging",
                "fr": "l'augmentation des prix"
            },
            {
                "nl": "de prijsdaling",
                "fr": "la baisse des prix"
            },
            {
                "nl": "de korting",
                "fr": "la r\u00e9duction"
            },
            {
                "nl": "de promotie",
                "fr": "la promotion"
            },
            {
                "nl": "het voordeel",
                "fr": "l'avantage"
            },
            {
                "nl": "de aanbieding",
                "fr": "l'offre promotionnelle"
            },
            {
                "nl": "het kassabonnetje",
                "fr": "le ticket de caisse"
            },
            {
                "nl": "de factuur",
                "fr": "la facture"
            },
            {
                "nl": "de betaling",
                "fr": "le paiement"
            },
            {
                "nl": "contant betalen",
                "fr": "payer en liquide"
            },
            {
                "nl": "met kaart betalen",
                "fr": "payer par carte"
            },
            {
                "nl": "contactloos betalen",
                "fr": "payer sans contact"
            },
            {
                "nl": "de bankkaart",
                "fr": "la carte bancaire"
            },
            {
                "nl": "de kredietkaart",
                "fr": "la carte de cr\u00e9dit"
            },
            {
                "nl": "het wisselgeld",
                "fr": "la monnaie (rendu)"
            },
            {
                "nl": "de prijsetiket",
                "fr": "l'\u00e9tiquette de prix"
            },
            {
                "nl": "de btw",
                "fr": "la TVA"
            },
            {
                "nl": "het budget",
                "fr": "le budget"
            },
            {
                "nl": "duur / goedkoop",
                "fr": "cher / bon march\u00e9"
            },
            {
                "nl": "het product",
                "fr": "le produit"
            },
            {
                "nl": "de verpakking",
                "fr": "l'emballage"
            },
            {
                "nl": "het merk",
                "fr": "la marque"
            },
            {
                "nl": "het huismerk",
                "fr": "la marque propre"
            },
            {
                "nl": "de kwaliteit",
                "fr": "la qualit\u00e9"
            },
            {
                "nl": "de voorraad",
                "fr": "le stock"
            },
            {
                "nl": "uitverkocht",
                "fr": "\u00e9puis\u00e9"
            },
            {
                "nl": "op voorraad",
                "fr": "en stock"
            },
            {
                "nl": "de levering",
                "fr": "la livraison"
            },
            {
                "nl": "leveren",
                "fr": "livrer"
            },
            {
                "nl": "de verzending",
                "fr": "l'exp\u00e9dition"
            },
            {
                "nl": "verzendkosten",
                "fr": "frais d'envoi"
            },
            {
                "nl": "het magazijn",
                "fr": "l'entrep\u00f4t"
            },
            {
                "nl": "de opslag",
                "fr": "le stockage"
            },
            {
                "nl": "de retour",
                "fr": "le retour"
            },
            {
                "nl": "terugsturen",
                "fr": "renvoyer"
            },
            {
                "nl": "de verpakkingseenheid",
                "fr": "l'unit\u00e9 d'emballage"
            },
            {
                "nl": "het serienummer",
                "fr": "le num\u00e9ro de s\u00e9rie"
            },
            {
                "nl": "de productiefout",
                "fr": "le d\u00e9faut de fabrication"
            },
            {
                "nl": "de vervaldatum",
                "fr": "la date de p\u00e9remption"
            },
            {
                "nl": "de handel",
                "fr": "le commerce"
            },
            {
                "nl": "de internationale handel",
                "fr": "le commerce international"
            },
            {
                "nl": "importeren",
                "fr": "importer"
            },
            {
                "nl": "exporteren",
                "fr": "exporter"
            },
            {
                "nl": "de invoer",
                "fr": "l'importation"
            },
            {
                "nl": "de uitvoer",
                "fr": "l'exportation"
            },
            {
                "nl": "de concurrentie",
                "fr": "la concurrence"
            },
            {
                "nl": "concurreren",
                "fr": "concurrencer"
            },
            {
                "nl": "de marktprijs",
                "fr": "le prix du march\u00e9"
            },
            {
                "nl": "de vraag en aanbod",
                "fr": "l'offre et la demande"
            },
            {
                "nl": "de omzet",
                "fr": "le chiffre d'affaires"
            },
            {
                "nl": "de winst",
                "fr": "le b\u00e9n\u00e9fice"
            },
            {
                "nl": "het verlies",
                "fr": "la perte"
            },
            {
                "nl": "de investering",
                "fr": "l'investissement"
            },
            {
                "nl": "de handelsovereenkomst",
                "fr": "l'accord commercial"
            },
            {
                "nl": "de economische groei",
                "fr": "la croissance \u00e9conomique"
            },
            {
                "nl": "de recessie",
                "fr": "la r\u00e9cession"
            },
            {
                "nl": "de inflatie",
                "fr": "l'inflation"
            },
            {
                "nl": "de koopkracht",
                "fr": "le pouvoir d'achat"
            },
            {
                "nl": "de markttrend",
                "fr": "la tendance du march\u00e9"
            }
        ]
    },
    {
        "theme": "Guerre Mondiale",
        "words": [
            {
                "nl": "de soldaat",
                "fr": "le soldat"
            },
            {
                "nl": "de officier",
                "fr": "l'officier"
            },
            {
                "nl": "de generaal",
                "fr": "le g\u00e9n\u00e9ral"
            },
            {
                "nl": "de commandant",
                "fr": "le commandant"
            },
            {
                "nl": "de infanterie",
                "fr": "l'infanterie"
            },
            {
                "nl": "de artillerie",
                "fr": "l'artillerie"
            },
            {
                "nl": "de luchtmacht",
                "fr": "l'arm\u00e9e de l'air"
            },
            {
                "nl": "de marine",
                "fr": "la marine"
            },
            {
                "nl": "de tank",
                "fr": "le char"
            },
            {
                "nl": "de parachutist",
                "fr": "le parachutiste"
            },
            {
                "nl": "de piloot",
                "fr": "le pilote"
            },
            {
                "nl": "de verkenner",
                "fr": "l'\u00e9claireur"
            },
            {
                "nl": "de gewonde",
                "fr": "le bless\u00e9"
            },
            {
                "nl": "de krijgsgevangene",
                "fr": "le prisonnier de guerre"
            },
            {
                "nl": "de veteraan",
                "fr": "le v\u00e9t\u00e9ran"
            },
            {
                "nl": "de dienstplicht",
                "fr": "le service militaire"
            },
            {
                "nl": "de mobilisatie",
                "fr": "la mobilisation"
            },
            {
                "nl": "de aanval",
                "fr": "l'attaque"
            },
            {
                "nl": "de verdediging",
                "fr": "la d\u00e9fense"
            },
            {
                "nl": "de bevelen",
                "fr": "les ordres"
            },
            {
                "nl": "het geweer",
                "fr": "le fusil"
            },
            {
                "nl": "het pistool",
                "fr": "le pistolet"
            },
            {
                "nl": "het machinegeweer",
                "fr": "la mitrailleuse"
            },
            {
                "nl": "de granaat",
                "fr": "la grenade"
            },
            {
                "nl": "de bom",
                "fr": "la bombe"
            },
            {
                "nl": "de mijn",
                "fr": "la mine"
            },
            {
                "nl": "de raket",
                "fr": "la roquette"
            },
            {
                "nl": "de munitie",
                "fr": "les munitions"
            },
            {
                "nl": "het kanon",
                "fr": "le canon"
            },
            {
                "nl": "de loopgraaf",
                "fr": "la tranch\u00e9e"
            },
            {
                "nl": "het gasmasker",
                "fr": "le masque \u00e0 gaz"
            },
            {
                "nl": "de helm",
                "fr": "le casque"
            },
            {
                "nl": "het uniform",
                "fr": "l'uniforme"
            },
            {
                "nl": "de veldradio",
                "fr": "la radio de campagne"
            },
            {
                "nl": "de verrekijker",
                "fr": "les jumelles"
            },
            {
                "nl": "de bajonet",
                "fr": "la ba\u00efonnette"
            },
            {
                "nl": "de pantserwagen",
                "fr": "le v\u00e9hicule blind\u00e9"
            },
            {
                "nl": "het oorlogsschip",
                "fr": "le navire de guerre"
            },
            {
                "nl": "het jachtvliegtuig",
                "fr": "le chasseur (avion)"
            },
            {
                "nl": "de bommenwerper",
                "fr": "le bombardier"
            },
            {
                "nl": "de Eerste Wereldoorlog",
                "fr": "la Premi\u00e8re Guerre mondiale"
            },
            {
                "nl": "de Tweede Wereldoorlog",
                "fr": "la Seconde Guerre mondiale"
            },
            {
                "nl": "de geallieerden",
                "fr": "les alli\u00e9s"
            },
            {
                "nl": "de asmogendheden",
                "fr": "les puissances de l'Axe"
            },
            {
                "nl": "de bezetting",
                "fr": "l'occupation"
            },
            {
                "nl": "de invasie",
                "fr": "l'invasion"
            },
            {
                "nl": "de capitulatie",
                "fr": "la capitulation"
            },
            {
                "nl": "de wapenstilstand",
                "fr": "l'armistice"
            },
            {
                "nl": "de bevrijding",
                "fr": "la lib\u00e9ration"
            },
            {
                "nl": "de bezetter",
                "fr": "l'occupant"
            },
            {
                "nl": "het front",
                "fr": "le front"
            },
            {
                "nl": "het slagveld",
                "fr": "le champ de bataille"
            },
            {
                "nl": "de opmars",
                "fr": "l'avanc\u00e9e"
            },
            {
                "nl": "de terugtrekking",
                "fr": "la retraite"
            },
            {
                "nl": "de opstand",
                "fr": "le soul\u00e8vement"
            },
            {
                "nl": "het verzet",
                "fr": "la r\u00e9sistance"
            },
            {
                "nl": "de collaboratie",
                "fr": "la collaboration"
            },
            {
                "nl": "de propaganda",
                "fr": "la propagande"
            },
            {
                "nl": "de censuur",
                "fr": "la censure"
            },
            {
                "nl": "de oorlogsmisdaden",
                "fr": "les crimes de guerre"
            },
            {
                "nl": "de schuilkelder",
                "fr": "l'abri"
            },
            {
                "nl": "de rantsoenering",
                "fr": "le rationnement"
            },
            {
                "nl": "de hongersnood",
                "fr": "la famine"
            },
            {
                "nl": "de evacuatie",
                "fr": "l'\u00e9vacuation"
            },
            {
                "nl": "de vluchteling",
                "fr": "le r\u00e9fugi\u00e9"
            },
            {
                "nl": "de deportatie",
                "fr": "la d\u00e9portation"
            },
            {
                "nl": "de bezettingsmacht",
                "fr": "les forces d'occupation"
            },
            {
                "nl": "de avondklok",
                "fr": "le couvre-feu"
            },
            {
                "nl": "de identificatiepapieren",
                "fr": "les papiers d'identit\u00e9"
            },
            {
                "nl": "de controlepost",
                "fr": "le poste de contr\u00f4le"
            },
            {
                "nl": "de bombardementen",
                "fr": "les bombardements"
            },
            {
                "nl": "de schade",
                "fr": "les d\u00e9g\u00e2ts"
            },
            {
                "nl": "de wederopbouw",
                "fr": "la reconstruction"
            },
            {
                "nl": "de oorlogsindustrie",
                "fr": "l'industrie de guerre"
            },
            {
                "nl": "de zwarte markt",
                "fr": "le march\u00e9 noir"
            },
            {
                "nl": "de smokkel",
                "fr": "la contrebande"
            },
            {
                "nl": "de onderduiker",
                "fr": "la personne cach\u00e9e"
            },
            {
                "nl": "de geheime zender",
                "fr": "l'\u00e9metteur clandestin"
            },
            {
                "nl": "de oorlogspropaganda",
                "fr": "la propagande de guerre"
            },
            {
                "nl": "de oorlogsherinnering",
                "fr": "la m\u00e9moire de guerre"
            },
            {
                "nl": "uitbreken (van een oorlog)",
                "fr": "\u00e9clater (pour une guerre)"
            },
            {
                "nl": "de vijand",
                "fr": "l'ennemi"
            },
            {
                "nl": "de bondgenoot",
                "fr": "l'alli\u00e9"
            },
            {
                "nl": "de strijd",
                "fr": "le combat"
            },
            {
                "nl": "de overwinning",
                "fr": "la victoire"
            },
            {
                "nl": "de nederlaag",
                "fr": "la d\u00e9faite"
            },
            {
                "nl": "de aanval inzetten",
                "fr": "lancer l'attaque"
            },
            {
                "nl": "zich overgeven",
                "fr": "se rendre"
            },
            {
                "nl": "sneuvelen",
                "fr": "tomber au combat"
            },
            {
                "nl": "bombarderen",
                "fr": "bombarder"
            },
            {
                "nl": "bezetten",
                "fr": "occuper"
            },
            {
                "nl": "verdedigen",
                "fr": "d\u00e9fendre"
            },
            {
                "nl": "vluchten",
                "fr": "fuir"
            },
            {
                "nl": "onderdrukken",
                "fr": "opprimer"
            },
            {
                "nl": "vernietigen",
                "fr": "d\u00e9truire"
            },
            {
                "nl": "herdenken",
                "fr": "comm\u00e9morer"
            },
            {
                "nl": "de oorlogsslachtoffers",
                "fr": "les victimes de guerre"
            },
            {
                "nl": "de oorlogsperiode",
                "fr": "la p\u00e9riode de guerre"
            },
            {
                "nl": "de militaire strategie",
                "fr": "la strat\u00e9gie militaire"
            },
            {
                "nl": "de vredesonderhandelingen",
                "fr": "les n\u00e9gociations de paix"
            }
        ]
    },
    {
        "theme": "Finance",
        "words": [
            {
                "nl": "de bank",
                "fr": "la banque"
            },
            {
                "nl": "de bankrekening",
                "fr": "le compte bancaire"
            },
            {
                "nl": "de zichtrekening",
                "fr": "le compte \u00e0 vue"
            },
            {
                "nl": "de spaarrekening",
                "fr": "le compte \u00e9pargne"
            },
            {
                "nl": "de bankkaart",
                "fr": "la carte bancaire"
            },
            {
                "nl": "de kredietkaart",
                "fr": "la carte de cr\u00e9dit"
            },
            {
                "nl": "de overschrijving",
                "fr": "le virement"
            },
            {
                "nl": "geld overschrijven",
                "fr": "faire un virement"
            },
            {
                "nl": "geld opnemen",
                "fr": "retirer de l'argent"
            },
            {
                "nl": "het saldo",
                "fr": "le solde"
            },
            {
                "nl": "de bankautomaat",
                "fr": "le distributeur automatique"
            },
            {
                "nl": "de pincode",
                "fr": "le code PIN"
            },
            {
                "nl": "het bankfiliaal",
                "fr": "l'agence bancaire"
            },
            {
                "nl": "de bankmedewerker",
                "fr": "l'employ\u00e9 de banque"
            },
            {
                "nl": "de onlinebanking",
                "fr": "la banque en ligne"
            },
            {
                "nl": "de beveiliging",
                "fr": "la s\u00e9curit\u00e9"
            },
            {
                "nl": "de transactie",
                "fr": "la transaction"
            },
            {
                "nl": "de domicili\u00ebring",
                "fr": "la domiciliation"
            },
            {
                "nl": "de rentevoet",
                "fr": "le taux d'int\u00e9r\u00eat"
            },
            {
                "nl": "de bankkosten",
                "fr": "les frais bancaires"
            },
            {
                "nl": "het geld",
                "fr": "l'argent"
            },
            {
                "nl": "contant betalen",
                "fr": "payer en liquide"
            },
            {
                "nl": "met kaart betalen",
                "fr": "payer par carte"
            },
            {
                "nl": "contactloos betalen",
                "fr": "payer sans contact"
            },
            {
                "nl": "de betaling",
                "fr": "le paiement"
            },
            {
                "nl": "de factuur",
                "fr": "la facture"
            },
            {
                "nl": "de schuld",
                "fr": "la dette"
            },
            {
                "nl": "afbetalen",
                "fr": "rembourser"
            },
            {
                "nl": "besparen",
                "fr": "\u00e9conomiser"
            },
            {
                "nl": "uitgeven",
                "fr": "d\u00e9penser"
            },
            {
                "nl": "de uitgave",
                "fr": "la d\u00e9pense"
            },
            {
                "nl": "het budget",
                "fr": "le budget"
            },
            {
                "nl": "de begroting",
                "fr": "le budget (\u00e9tatique)"
            },
            {
                "nl": "de prijs",
                "fr": "le prix"
            },
            {
                "nl": "de prijsstijging",
                "fr": "l'augmentation des prix"
            },
            {
                "nl": "de inflatie",
                "fr": "l'inflation"
            },
            {
                "nl": "de koopkracht",
                "fr": "le pouvoir d'achat"
            },
            {
                "nl": "de korting",
                "fr": "la r\u00e9duction"
            },
            {
                "nl": "de financi\u00eble problemen",
                "fr": "les probl\u00e8mes financiers"
            },
            {
                "nl": "failliet gaan",
                "fr": "faire faillite"
            },
            {
                "nl": "investeren",
                "fr": "investir"
            },
            {
                "nl": "de investering",
                "fr": "l'investissement"
            },
            {
                "nl": "de belegging",
                "fr": "le placement"
            },
            {
                "nl": "beleggen",
                "fr": "placer de l'argent"
            },
            {
                "nl": "de aandelen",
                "fr": "les actions"
            },
            {
                "nl": "de obligaties",
                "fr": "les obligations"
            },
            {
                "nl": "de aandelenmarkt",
                "fr": "le march\u00e9 boursier"
            },
            {
                "nl": "de beurs",
                "fr": "la bourse"
            },
            {
                "nl": "de beurscrash",
                "fr": "le krach boursier"
            },
            {
                "nl": "de koers",
                "fr": "le cours"
            },
            {
                "nl": "de winst",
                "fr": "le b\u00e9n\u00e9fice"
            },
            {
                "nl": "het verlies",
                "fr": "la perte"
            },
            {
                "nl": "de dividenden",
                "fr": "les dividendes"
            },
            {
                "nl": "de portefeuille",
                "fr": "le portefeuille (d'investissement)"
            },
            {
                "nl": "de risico's",
                "fr": "les risques"
            },
            {
                "nl": "de volatiliteit",
                "fr": "la volatilit\u00e9"
            },
            {
                "nl": "de speculatie",
                "fr": "la sp\u00e9culation"
            },
            {
                "nl": "de makelaar",
                "fr": "le courtier"
            },
            {
                "nl": "de economische groei",
                "fr": "la croissance \u00e9conomique"
            },
            {
                "nl": "de recessie",
                "fr": "la r\u00e9cession"
            },
            {
                "nl": "de economie",
                "fr": "l'\u00e9conomie"
            },
            {
                "nl": "de economische crisis",
                "fr": "la crise \u00e9conomique"
            },
            {
                "nl": "de werkloosheid",
                "fr": "le ch\u00f4mage"
            },
            {
                "nl": "de belasting",
                "fr": "l'imp\u00f4t"
            },
            {
                "nl": "de inkomstenbelasting",
                "fr": "l'imp\u00f4t sur le revenu"
            },
            {
                "nl": "de vennootschapsbelasting",
                "fr": "l'imp\u00f4t des soci\u00e9t\u00e9s"
            },
            {
                "nl": "de btw",
                "fr": "la TVA"
            },
            {
                "nl": "de belastingaangifte",
                "fr": "la d\u00e9claration d'imp\u00f4ts"
            },
            {
                "nl": "de overheid",
                "fr": "le gouvernement / les autorit\u00e9s"
            },
            {
                "nl": "de begrotingstekort",
                "fr": "le d\u00e9ficit budg\u00e9taire"
            },
            {
                "nl": "de staatsschuld",
                "fr": "la dette publique"
            },
            {
                "nl": "de subsidies",
                "fr": "les subsides"
            },
            {
                "nl": "de sociale bijdragen",
                "fr": "les cotisations sociales"
            },
            {
                "nl": "de pensioenbijdrage",
                "fr": "la cotisation pension"
            },
            {
                "nl": "het minimumloon",
                "fr": "le salaire minimum"
            },
            {
                "nl": "de loonkosten",
                "fr": "les co\u00fbts salariaux"
            },
            {
                "nl": "de economische indicatoren",
                "fr": "les indicateurs \u00e9conomiques"
            },
            {
                "nl": "de conjunctuur",
                "fr": "la conjoncture"
            },
            {
                "nl": "de handelsbalans",
                "fr": "la balance commerciale"
            },
            {
                "nl": "de import / export",
                "fr": "l'importation / l'exportation"
            },
            {
                "nl": "de verzekering",
                "fr": "l'assurance"
            },
            {
                "nl": "de autoverzekering",
                "fr": "l'assurance auto"
            },
            {
                "nl": "de brandverzekering",
                "fr": "l'assurance incendie"
            },
            {
                "nl": "de hospitalisatieverzekering",
                "fr": "l'assurance hospitalisation"
            },
            {
                "nl": "de levensverzekering",
                "fr": "l'assurance vie"
            },
            {
                "nl": "de polis",
                "fr": "la police d'assurance"
            },
            {
                "nl": "de schadevergoeding",
                "fr": "l'indemnisation"
            },
            {
                "nl": "de lening",
                "fr": "le pr\u00eat"
            },
            {
                "nl": "de hypotheek",
                "fr": "l'hypoth\u00e8que"
            },
            {
                "nl": "de rente",
                "fr": "l'int\u00e9r\u00eat"
            },
            {
                "nl": "de afbetaling",
                "fr": "le remboursement"
            },
            {
                "nl": "de kredietwaardigheid",
                "fr": "la solvabilit\u00e9"
            },
            {
                "nl": "het contract",
                "fr": "le contrat"
            },
            {
                "nl": "de voorwaarden",
                "fr": "les conditions"
            },
            {
                "nl": "de handtekening",
                "fr": "la signature"
            },
            {
                "nl": "het document",
                "fr": "le document"
            },
            {
                "nl": "de aanvraag",
                "fr": "la demande"
            },
            {
                "nl": "goedkeuren",
                "fr": "approuver"
            },
            {
                "nl": "weigeren",
                "fr": "refuser"
            },
            {
                "nl": "het financieel advies",
                "fr": "le conseil financier"
            }
        ]
    },
    {
        "theme": "Lifestyle",
        "words": [
            {
                "nl": "de kledingstijl",
                "fr": "le style vestimentaire"
            },
            {
                "nl": "de outfit",
                "fr": "la tenue"
            },
            {
                "nl": "de accessoires",
                "fr": "les accessoires"
            },
            {
                "nl": "de schoenen",
                "fr": "les chaussures"
            },
            {
                "nl": "de jas",
                "fr": "le manteau"
            },
            {
                "nl": "de trui",
                "fr": "le pull"
            },
            {
                "nl": "de broek",
                "fr": "le pantalon"
            },
            {
                "nl": "de jurk",
                "fr": "la robe"
            },
            {
                "nl": "de zonnebril",
                "fr": "les lunettes de soleil"
            },
            {
                "nl": "de sieraden",
                "fr": "les bijoux"
            },
            {
                "nl": "het kapsel",
                "fr": "la coiffure"
            },
            {
                "nl": "de kapper",
                "fr": "le coiffeur"
            },
            {
                "nl": "de make-up",
                "fr": "le maquillage"
            },
            {
                "nl": "zich aankleden",
                "fr": "s'habiller"
            },
            {
                "nl": "zich omkleden",
                "fr": "se changer"
            },
            {
                "nl": "de modetrend",
                "fr": "la tendance mode"
            },
            {
                "nl": "de maat",
                "fr": "la taille"
            },
            {
                "nl": "passen",
                "fr": "essayer"
            },
            {
                "nl": "de stijl",
                "fr": "le style"
            },
            {
                "nl": "elegant / casual",
                "fr": "\u00e9l\u00e9gant / d\u00e9contract\u00e9"
            },
            {
                "nl": "de gezondheid",
                "fr": "la sant\u00e9"
            },
            {
                "nl": "fit blijven",
                "fr": "rester en forme"
            },
            {
                "nl": "sporten",
                "fr": "faire du sport"
            },
            {
                "nl": "ontspannen",
                "fr": "se d\u00e9tendre"
            },
            {
                "nl": "de massage",
                "fr": "le massage"
            },
            {
                "nl": "de ademhalingsoefening",
                "fr": "l'exercice de respiration"
            },
            {
                "nl": "de meditatie",
                "fr": "la m\u00e9ditation"
            },
            {
                "nl": "de yoga",
                "fr": "le yoga"
            },
            {
                "nl": "de sauna",
                "fr": "le sauna"
            },
            {
                "nl": "de spa",
                "fr": "le spa"
            },
            {
                "nl": "de huidverzorging",
                "fr": "le soin de la peau"
            },
            {
                "nl": "de voeding",
                "fr": "l'alimentation"
            },
            {
                "nl": "de slaap",
                "fr": "le sommeil"
            },
            {
                "nl": "het dieet",
                "fr": "le r\u00e9gime"
            },
            {
                "nl": "de allergie",
                "fr": "l'allergie"
            },
            {
                "nl": "de dokter",
                "fr": "le m\u00e9decin"
            },
            {
                "nl": "de afspraak",
                "fr": "le rendez-vous (m\u00e9dical)"
            },
            {
                "nl": "de vaccinatie",
                "fr": "la vaccination"
            },
            {
                "nl": "de pijn",
                "fr": "la douleur"
            },
            {
                "nl": "genezen",
                "fr": "gu\u00e9rir"
            },
            {
                "nl": "het dagelijks leven",
                "fr": "la vie quotidienne"
            },
            {
                "nl": "de routine",
                "fr": "la routine"
            },
            {
                "nl": "opstaan",
                "fr": "se lever"
            },
            {
                "nl": "ontbijten",
                "fr": "prendre le petit- d\u00e9jeuner"
            },
            {
                "nl": "lunchen",
                "fr": "d\u00e9jeuner"
            },
            {
                "nl": "avondeten",
                "fr": "d\u00eener"
            },
            {
                "nl": "schoonmaken",
                "fr": "nettoyer"
            },
            {
                "nl": "opruimen",
                "fr": "ranger"
            },
            {
                "nl": "boodschappen doen",
                "fr": "faire les courses"
            },
            {
                "nl": "koken",
                "fr": "cuisiner"
            },
            {
                "nl": "wassen",
                "fr": "laver"
            },
            {
                "nl": "strijken",
                "fr": "repasser"
            },
            {
                "nl": "plannen",
                "fr": "planifier"
            },
            {
                "nl": "ontspannen",
                "fr": "se relaxer"
            },
            {
                "nl": "de hobby",
                "fr": "le hobby"
            },
            {
                "nl": "de vrije tijd",
                "fr": "le temps libre"
            },
            {
                "nl": "de afspraak",
                "fr": "le rendez-vous"
            },
            {
                "nl": "het weekend",
                "fr": "le week-end"
            },
            {
                "nl": "de gewoonte",
                "fr": "l'habitude"
            },
            {
                "nl": "genieten van",
                "fr": "profiter de"
            },
            {
                "nl": "uitgaan",
                "fr": "sortir"
            },
            {
                "nl": "naar de film gaan",
                "fr": "aller au cin\u00e9ma"
            },
            {
                "nl": "naar een concert gaan",
                "fr": "aller \u00e0 un concert"
            },
            {
                "nl": "het theater",
                "fr": "le th\u00e9\u00e2tre"
            },
            {
                "nl": "het museum",
                "fr": "le mus\u00e9e"
            },
            {
                "nl": "de tentoonstelling",
                "fr": "l'exposition"
            },
            {
                "nl": "lezen",
                "fr": "lire"
            },
            {
                "nl": "gamen",
                "fr": "jouer aux jeux vid\u00e9o"
            },
            {
                "nl": "muziek luisteren",
                "fr": "\u00e9couter de la musique"
            },
            {
                "nl": "dansen",
                "fr": "danser"
            },
            {
                "nl": "reizen",
                "fr": "voyager"
            },
            {
                "nl": "fotograferen",
                "fr": "faire de la photo"
            },
            {
                "nl": "schilderen",
                "fr": "peindre"
            },
            {
                "nl": "tekenen",
                "fr": "dessiner"
            },
            {
                "nl": "tuinieren",
                "fr": "jardiner"
            },
            {
                "nl": "wandelen",
                "fr": "se promener"
            },
            {
                "nl": "fietsen",
                "fr": "faire du v\u00e9lo"
            },
            {
                "nl": "kamperen",
                "fr": "camper"
            },
            {
                "nl": "de vakantie",
                "fr": "les vacances"
            },
            {
                "nl": "de citytrip",
                "fr": "le city-trip"
            },
            {
                "nl": "vegetarisch",
                "fr": "v\u00e9g\u00e9tarien"
            },
            {
                "nl": "veganistisch",
                "fr": "v\u00e9gan"
            },
            {
                "nl": "biologisch",
                "fr": "biologique"
            },
            {
                "nl": "lokaal eten",
                "fr": "manger local"
            },
            {
                "nl": "fastfood",
                "fr": "fast-food"
            },
            {
                "nl": "gezond eten",
                "fr": "manger sainement"
            },
            {
                "nl": "de smoothie",
                "fr": "le smoothie"
            },
            {
                "nl": "de maaltijd",
                "fr": "le repas"
            },
            {
                "nl": "de snack",
                "fr": "l'en-cas"
            },
            {
                "nl": "de brunch",
                "fr": "le brunch"
            },
            {
                "nl": "de koffiebar",
                "fr": "le caf\u00e9 (lieu)"
            },
            {
                "nl": "de foodtruck",
                "fr": "le foodtruck"
            },
            {
                "nl": "de chef-kok",
                "fr": "le chef cuisinier"
            },
            {
                "nl": "het recept",
                "fr": "la recette"
            },
            {
                "nl": "de smaak",
                "fr": "le go\u00fbt"
            },
            {
                "nl": "pittig",
                "fr": "\u00e9pic\u00e9"
            },
            {
                "nl": "zoet",
                "fr": "sucr\u00e9"
            },
            {
                "nl": "zout",
                "fr": "sal\u00e9"
            },
            {
                "nl": "bitter",
                "fr": "amer"
            },
            {
                "nl": "vers",
                "fr": "frais"
            }
        ]
    },
    {
        "theme": "Nourriture",
        "words": [
            {
                "nl": "de appel",
                "fr": "la pomme"
            },
            {
                "nl": "de peer",
                "fr": "la poire"
            },
            {
                "nl": "de banaan",
                "fr": "la banane"
            },
            {
                "nl": "de sinaasappel",
                "fr": "l'orange"
            },
            {
                "nl": "de citroen",
                "fr": "le citron"
            },
            {
                "nl": "de druiven",
                "fr": "les raisins"
            },
            {
                "nl": "de aardbei",
                "fr": "la fraise"
            },
            {
                "nl": "de kers",
                "fr": "la cerise"
            },
            {
                "nl": "de perzik",
                "fr": "la p\u00eache"
            },
            {
                "nl": "de meloen",
                "fr": "le melon"
            },
            {
                "nl": "de tomaat",
                "fr": "la tomate"
            },
            {
                "nl": "de komkommer",
                "fr": "le concombre"
            },
            {
                "nl": "de wortel",
                "fr": "la carotte"
            },
            {
                "nl": "de ui",
                "fr": "l'oignon"
            },
            {
                "nl": "de knoflook",
                "fr": "l'ail"
            },
            {
                "nl": "de paprika",
                "fr": "le poivron"
            },
            {
                "nl": "de courgette",
                "fr": "la courgette"
            },
            {
                "nl": "de aubergine",
                "fr": "l'aubergine"
            },
            {
                "nl": "de sla",
                "fr": "la salade"
            },
            {
                "nl": "de spinazie",
                "fr": "les \u00e9pinards"
            },
            {
                "nl": "het brood",
                "fr": "le pain"
            },
            {
                "nl": "het stokbrood",
                "fr": "la baguette"
            },
            {
                "nl": "het volkorenbrood",
                "fr": "le pain complet"
            },
            {
                "nl": "de boterham",
                "fr": "la tartine"
            },
            {
                "nl": "de rijst",
                "fr": "le riz"
            },
            {
                "nl": "de pasta",
                "fr": "les p\u00e2tes"
            },
            {
                "nl": "de aardappelen",
                "fr": "les pommes de terre"
            },
            {
                "nl": "de bloem",
                "fr": "la farine"
            },
            {
                "nl": "de suiker",
                "fr": "le sucre"
            },
            {
                "nl": "het zout",
                "fr": "le sel"
            },
            {
                "nl": "de peper",
                "fr": "le poivre"
            },
            {
                "nl": "de olie",
                "fr": "l'huile"
            },
            {
                "nl": "de boter",
                "fr": "le beurre"
            },
            {
                "nl": "de margarine",
                "fr": "la margarine"
            },
            {
                "nl": "de honing",
                "fr": "le miel"
            },
            {
                "nl": "de jam",
                "fr": "la confiture"
            },
            {
                "nl": "de ontbijtgranen",
                "fr": "les c\u00e9r\u00e9ales"
            },
            {
                "nl": "het meel",
                "fr": "la farine (fine)"
            },
            {
                "nl": "het deeg",
                "fr": "la p\u00e2te"
            },
            {
                "nl": "het gebak",
                "fr": "la p\u00e2tisserie"
            },
            {
                "nl": "het vlees",
                "fr": "la viande"
            },
            {
                "nl": "de kip",
                "fr": "le poulet"
            },
            {
                "nl": "het rundvlees",
                "fr": "le buf"
            },
            {
                "nl": "het varkensvlees",
                "fr": "le porc"
            },
            {
                "nl": "het lamsvlees",
                "fr": "l'agneau"
            },
            {
                "nl": "de worst",
                "fr": "la saucisse"
            },
            {
                "nl": "de ham",
                "fr": "le jambon"
            },
            {
                "nl": "het spek",
                "fr": "le bacon / lard"
            },
            {
                "nl": "de vis",
                "fr": "le poisson"
            },
            {
                "nl": "de zalm",
                "fr": "le saumon"
            },
            {
                "nl": "de tonijn",
                "fr": "le thon"
            },
            {
                "nl": "de garnalen",
                "fr": "les crevettes"
            },
            {
                "nl": "de mosselen",
                "fr": "les moules"
            },
            {
                "nl": "de ei",
                "fr": "l'uf"
            },
            {
                "nl": "het omelet",
                "fr": "l'omelette"
            },
            {
                "nl": "de tofu",
                "fr": "le tofu"
            },
            {
                "nl": "de bonen",
                "fr": "les haricots"
            },
            {
                "nl": "de linzen",
                "fr": "les lentilles"
            },
            {
                "nl": "de kikkererwten",
                "fr": "les pois chiches"
            },
            {
                "nl": "de noten",
                "fr": "les noix"
            },
            {
                "nl": "de melk",
                "fr": "le lait"
            },
            {
                "nl": "de yoghurt",
                "fr": "le yaourt"
            },
            {
                "nl": "de kaas",
                "fr": "le fromage"
            },
            {
                "nl": "de room",
                "fr": "la cr\u00e8me"
            },
            {
                "nl": "de slagroom",
                "fr": "la cr\u00e8me fouett\u00e9e"
            },
            {
                "nl": "de ijsjes",
                "fr": "les glaces"
            },
            {
                "nl": "de chocolademelk",
                "fr": "le lait chocolat\u00e9"
            },
            {
                "nl": "de koffie",
                "fr": "le caf\u00e9"
            },
            {
                "nl": "de thee",
                "fr": "le th\u00e9"
            },
            {
                "nl": "de kruidenthee",
                "fr": "la tisane"
            },
            {
                "nl": "het water",
                "fr": "l'eau"
            },
            {
                "nl": "het bruiswater",
                "fr": "l'eau p\u00e9tillante"
            },
            {
                "nl": "de frisdrank",
                "fr": "la boisson gazeuse"
            },
            {
                "nl": "het fruitsap",
                "fr": "le jus de fruits"
            },
            {
                "nl": "de smoothie",
                "fr": "le smoothie"
            },
            {
                "nl": "de wijn",
                "fr": "le vin"
            },
            {
                "nl": "het bier",
                "fr": "la bi\u00e8re"
            },
            {
                "nl": "de cocktail",
                "fr": "le cocktail"
            },
            {
                "nl": "de melkproducten",
                "fr": "les produits laitiers"
            },
            {
                "nl": "de drank",
                "fr": "la boisson"
            },
            {
                "nl": "koken",
                "fr": "cuisiner"
            },
            {
                "nl": "bakken",
                "fr": "cuire au four / frire"
            },
            {
                "nl": "braden",
                "fr": "r\u00f4tir"
            },
            {
                "nl": "snijden",
                "fr": "couper"
            },
            {
                "nl": "mengen",
                "fr": "m\u00e9langer"
            },
            {
                "nl": "roeren",
                "fr": "remuer"
            },
            {
                "nl": "proeven",
                "fr": "go\u00fbter"
            },
            {
                "nl": "serveren",
                "fr": "servir"
            },
            {
                "nl": "het ontbijt",
                "fr": "le petit-d\u00e9jeuner"
            },
            {
                "nl": "de lunch",
                "fr": "le d\u00e9jeuner"
            },
            {
                "nl": "het avondeten",
                "fr": "le d\u00eener"
            },
            {
                "nl": "het voorgerecht",
                "fr": "l'entr\u00e9e"
            },
            {
                "nl": "het hoofdgerecht",
                "fr": "le plat principal"
            },
            {
                "nl": "het nagerecht",
                "fr": "le dessert"
            },
            {
                "nl": "de smaak",
                "fr": "le go\u00fbt"
            },
            {
                "nl": "pittig",
                "fr": "\u00e9pic\u00e9"
            },
            {
                "nl": "zoet",
                "fr": "sucr\u00e9"
            },
            {
                "nl": "zout",
                "fr": "sal\u00e9"
            },
            {
                "nl": "bitter",
                "fr": "amer"
            },
            {
                "nl": "vers",
                "fr": "frais"
            }
        ]
    },
    {
        "theme": "Sport",
        "words": [
            {
                "nl": "voetbal",
                "fr": "le football"
            },
            {
                "nl": "basketbal",
                "fr": "le basketball"
            },
            {
                "nl": "volleybal",
                "fr": "le volleyball"
            },
            {
                "nl": "tennis",
                "fr": "le tennis"
            },
            {
                "nl": "tafeltennis",
                "fr": "le tennis de table"
            },
            {
                "nl": "zwemmen",
                "fr": "la natation"
            },
            {
                "nl": "atletiek",
                "fr": "l'athl\u00e9tisme"
            },
            {
                "nl": "wielrennen",
                "fr": "le cyclisme"
            },
            {
                "nl": "hardlopen",
                "fr": "la course \u00e0 pied"
            },
            {
                "nl": "boksen",
                "fr": "la boxe"
            },
            {
                "nl": "judo",
                "fr": "le judo"
            },
            {
                "nl": "karate",
                "fr": "le karat\u00e9"
            },
            {
                "nl": "rugby",
                "fr": "le rugby"
            },
            {
                "nl": "hockey",
                "fr": "le hockey"
            },
            {
                "nl": "golf",
                "fr": "le golf"
            },
            {
                "nl": "ski\u00ebn",
                "fr": "le ski"
            },
            {
                "nl": "snowboarden",
                "fr": "le snowboard"
            },
            {
                "nl": "schaatsen",
                "fr": "le patinage"
            },
            {
                "nl": "turnen",
                "fr": "la gymnastique"
            },
            {
                "nl": "paardrijden",
                "fr": "l'\u00e9quitation"
            },
            {
                "nl": "B. Lieux infrastructures (20) 21. het stadion",
                "fr": "le stade"
            },
            {
                "nl": "de sporthal",
                "fr": "la salle de sport"
            },
            {
                "nl": "het zwembad",
                "fr": "la piscine"
            },
            {
                "nl": "de atletiekpiste",
                "fr": "la piste d'athl\u00e9tisme"
            },
            {
                "nl": "de tennisbaan",
                "fr": "le court de tennis"
            },
            {
                "nl": "het voetbalveld",
                "fr": "le terrain de football"
            },
            {
                "nl": "de kleedkamer",
                "fr": "le vestiaire"
            },
            {
                "nl": "de tribune",
                "fr": "la tribune"
            },
            {
                "nl": "de sportclub",
                "fr": "le club sportif"
            },
            {
                "nl": "de fitnesszaal",
                "fr": "la salle de fitness"
            },
            {
                "nl": "de gym",
                "fr": "la salle de gym"
            },
            {
                "nl": "de sportwinkel",
                "fr": "le magasin de sport"
            },
            {
                "nl": "de piste",
                "fr": "la piste"
            },
            {
                "nl": "de dojo",
                "fr": "le dojo"
            },
            {
                "nl": "de manege",
                "fr": "le man\u00e8ge"
            },
            {
                "nl": "de ijsbaan",
                "fr": "la patinoire"
            },
            {
                "nl": "de klimzaal",
                "fr": "la salle d'escalade"
            },
            {
                "nl": "de sportvloer",
                "fr": "le sol sportif"
            },
            {
                "nl": "de loopband",
                "fr": "le tapis de course"
            },
            {
                "nl": "de halterruimte",
                "fr": "la zone d'halt\u00e8res"
            },
            {
                "nl": "de bal",
                "fr": "la balle / le ballon"
            },
            {
                "nl": "de helm",
                "fr": "le casque"
            },
            {
                "nl": "de handschoenen",
                "fr": "les gants"
            },
            {
                "nl": "de sportschoenen",
                "fr": "les chaussures de sport"
            },
            {
                "nl": "de sportkleding",
                "fr": "les v\u00eatements de sport"
            },
            {
                "nl": "de racket",
                "fr": "la raquette"
            },
            {
                "nl": "de stick",
                "fr": "la crosse"
            },
            {
                "nl": "de fiets",
                "fr": "le v\u00e9lo"
            },
            {
                "nl": "de loopband",
                "fr": "le tapis de course"
            },
            {
                "nl": "de halter",
                "fr": "l'halt\u00e8re"
            },
            {
                "nl": "de barbell",
                "fr": "la barre"
            },
            {
                "nl": "de gewichten",
                "fr": "les poids"
            },
            {
                "nl": "de mat",
                "fr": "le tapis"
            },
            {
                "nl": "de zwembril",
                "fr": "les lunettes de natation"
            },
            {
                "nl": "de badmuts",
                "fr": "le bonnet de bain"
            },
            {
                "nl": "de scheenbeschermers",
                "fr": "les prot\u00e8ge-tibias"
            },
            {
                "nl": "de kniebeschermers",
                "fr": "les genouill\u00e8res"
            },
            {
                "nl": "de sporttas",
                "fr": "le sac de sport"
            },
            {
                "nl": "de stopwatch",
                "fr": "le chronom\u00e8tre"
            },
            {
                "nl": "de bidon",
                "fr": "la gourde"
            },
            {
                "nl": "de speler",
                "fr": "le joueur"
            },
            {
                "nl": "de speelster",
                "fr": "la joueuse"
            },
            {
                "nl": "de tegenstander",
                "fr": "l'adversaire"
            },
            {
                "nl": "de scheidsrechter",
                "fr": "l'arbitre"
            },
            {
                "nl": "de coach",
                "fr": "l'entra\u00eeneur"
            },
            {
                "nl": "de trainer",
                "fr": "le coach / entra\u00eeneur"
            },
            {
                "nl": "de ploeg",
                "fr": "l'\u00e9quipe"
            },
            {
                "nl": "de aanvoerder",
                "fr": "le capitaine"
            },
            {
                "nl": "de supporter",
                "fr": "le supporter"
            },
            {
                "nl": "de fan",
                "fr": "le fan"
            },
            {
                "nl": "de kampioen",
                "fr": "le champion"
            },
            {
                "nl": "de winnaar",
                "fr": "le gagnant"
            },
            {
                "nl": "de verliezer",
                "fr": "le perdant"
            },
            {
                "nl": "de reserve",
                "fr": "le rempla\u00e7ant"
            },
            {
                "nl": "de spits",
                "fr": "l'attaquant"
            },
            {
                "nl": "de verdediger",
                "fr": "le d\u00e9fenseur"
            },
            {
                "nl": "de middenvelder",
                "fr": "le milieu de terrain"
            },
            {
                "nl": "de doelman",
                "fr": "le gardien"
            },
            {
                "nl": "de wisselspeler",
                "fr": "le joueur rempla\u00e7ant"
            },
            {
                "nl": "de selectie",
                "fr": "la s\u00e9lection"
            },
            {
                "nl": "de wedstrijd",
                "fr": "le match"
            },
            {
                "nl": "de competitie",
                "fr": "la comp\u00e9tition"
            },
            {
                "nl": "het kampioenschap",
                "fr": "le championnat"
            },
            {
                "nl": "de finale",
                "fr": "la finale"
            },
            {
                "nl": "de halve finale",
                "fr": "la demi-finale"
            },
            {
                "nl": "de score",
                "fr": "le score"
            },
            {
                "nl": "scoren",
                "fr": "marquer"
            },
            {
                "nl": "winnen",
                "fr": "gagner"
            },
            {
                "nl": "verliezen",
                "fr": "perdre"
            },
            {
                "nl": "gelijkspelen",
                "fr": "faire match nul"
            },
            {
                "nl": "trainen",
                "fr": "s'entra\u00eener"
            },
            {
                "nl": "opwarmen",
                "fr": "s'\u00e9chauffer"
            },
            {
                "nl": "presteren",
                "fr": "performer"
            },
            {
                "nl": "de blessure",
                "fr": "la blessure"
            },
            {
                "nl": "geblesseerd zijn",
                "fr": "\u00eatre bless\u00e9"
            },
            {
                "nl": "herstellen",
                "fr": "se r\u00e9tablir"
            },
            {
                "nl": "de overwinning",
                "fr": "la victoire"
            },
            {
                "nl": "de nederlaag",
                "fr": "la d\u00e9faite"
            },
            {
                "nl": "het record",
                "fr": "le record"
            },
            {
                "nl": "de fairplay",
                "fr": "le fair-play"
            }
        ]
    },
    {
        "theme": "Loisir",
        "words": [
            {
                "nl": "de film",
                "fr": "le film"
            },
            {
                "nl": "de serie",
                "fr": "la s\u00e9rie"
            },
            {
                "nl": "naar de cinema gaan",
                "fr": "aller au cin\u00e9ma"
            },
            {
                "nl": "de acteur",
                "fr": "l'acteur"
            },
            {
                "nl": "de actrice",
                "fr": "l'actrice"
            },
            {
                "nl": "de regisseur",
                "fr": "le r\u00e9alisateur"
            },
            {
                "nl": "de sc\u00e8ne",
                "fr": "la sc\u00e8ne"
            },
            {
                "nl": "de trailer",
                "fr": "la bande-annonce"
            },
            {
                "nl": "de aflevering",
                "fr": "l'\u00e9pisode"
            },
            {
                "nl": "het seizoen",
                "fr": "la saison"
            },
            {
                "nl": "de special effects",
                "fr": "les effets sp\u00e9ciaux"
            },
            {
                "nl": "de soundtrack",
                "fr": "la bande sonore"
            },
            {
                "nl": "de animatiefilm",
                "fr": "le film d'animation"
            },
            {
                "nl": "de documentaire",
                "fr": "le documentaire"
            },
            {
                "nl": "de komedie",
                "fr": "la com\u00e9die"
            },
            {
                "nl": "het drama",
                "fr": "le drame"
            },
            {
                "nl": "de thriller",
                "fr": "le thriller"
            },
            {
                "nl": "de horrorfilm",
                "fr": "le film d'horreur"
            },
            {
                "nl": "de bioscoopzaal",
                "fr": "la salle de cin\u00e9ma"
            },
            {
                "nl": "de ticketverkoop",
                "fr": "la vente de tickets"
            },
            {
                "nl": "de muziek",
                "fr": "la musique"
            },
            {
                "nl": "het lied",
                "fr": "la chanson"
            },
            {
                "nl": "de zanger",
                "fr": "le chanteur"
            },
            {
                "nl": "de zangeres",
                "fr": "la chanteuse"
            },
            {
                "nl": "het concert",
                "fr": "le concert"
            },
            {
                "nl": "het festival",
                "fr": "le festival"
            },
            {
                "nl": "het orkest",
                "fr": "l'orchestre"
            },
            {
                "nl": "de gitaar",
                "fr": "la guitare"
            },
            {
                "nl": "de piano",
                "fr": "le piano"
            },
            {
                "nl": "de viool",
                "fr": "le violon"
            },
            {
                "nl": "de drum",
                "fr": "la batterie"
            },
            {
                "nl": "zingen",
                "fr": "chanter"
            },
            {
                "nl": "dansen",
                "fr": "danser"
            },
            {
                "nl": "schilderen",
                "fr": "peindre"
            },
            {
                "nl": "tekenen",
                "fr": "dessiner"
            },
            {
                "nl": "beeldhouwen",
                "fr": "sculpter"
            },
            {
                "nl": "fotograferen",
                "fr": "faire de la photo"
            },
            {
                "nl": "de tentoonstelling",
                "fr": "l'exposition"
            },
            {
                "nl": "het museum",
                "fr": "le mus\u00e9e"
            },
            {
                "nl": "de kunstgalerij",
                "fr": "la galerie d'art"
            },
            {
                "nl": "het bordspel",
                "fr": "le jeu de soci\u00e9t\u00e9"
            },
            {
                "nl": "het kaartspel",
                "fr": "le jeu de cartes"
            },
            {
                "nl": "gamen",
                "fr": "jouer aux jeux vid\u00e9o"
            },
            {
                "nl": "de puzzel",
                "fr": "le puzzle"
            },
            {
                "nl": "schaken",
                "fr": "jouer aux \u00e9checs"
            },
            {
                "nl": "dammen",
                "fr": "jouer aux dames"
            },
            {
                "nl": "biljarten",
                "fr": "jouer au billard"
            },
            {
                "nl": "darten",
                "fr": "jouer aux fl\u00e9chettes"
            },
            {
                "nl": "bowlen",
                "fr": "faire du bowling"
            },
            {
                "nl": "de quiz",
                "fr": "le quiz"
            },
            {
                "nl": "de escape room",
                "fr": "l'escape room"
            },
            {
                "nl": "de hobby",
                "fr": "le hobby"
            },
            {
                "nl": "knutselen",
                "fr": "bricoler"
            },
            {
                "nl": "naaien",
                "fr": "coudre"
            },
            {
                "nl": "breien",
                "fr": "tricoter"
            },
            {
                "nl": "verzamelen",
                "fr": "collectionner"
            },
            {
                "nl": "tuinieren",
                "fr": "jardiner"
            },
            {
                "nl": "vissen",
                "fr": "p\u00eacher"
            },
            {
                "nl": "kamperen",
                "fr": "camper"
            },
            {
                "nl": "wandelen",
                "fr": "se promener"
            },
            {
                "nl": "fietsen",
                "fr": "faire du v\u00e9lo"
            },
            {
                "nl": "joggen",
                "fr": "faire du jogging"
            },
            {
                "nl": "picknicken",
                "fr": "pique-niquer"
            },
            {
                "nl": "de speeltuin",
                "fr": "la plaine de jeux"
            },
            {
                "nl": "het park",
                "fr": "le parc"
            },
            {
                "nl": "de dierentuin",
                "fr": "le zoo"
            },
            {
                "nl": "de kermis",
                "fr": "la f\u00eate foraine"
            },
            {
                "nl": "de markt",
                "fr": "le march\u00e9"
            },
            {
                "nl": "de rommelmarkt",
                "fr": "le march\u00e9 aux puces"
            },
            {
                "nl": "de barbecue",
                "fr": "le barbecue"
            },
            {
                "nl": "de strandwandeling",
                "fr": "la promenade sur la plage"
            },
            {
                "nl": "zonnebaden",
                "fr": "prendre le soleil"
            },
            {
                "nl": "de bergwandeling",
                "fr": "la randonn\u00e9e en montagne"
            },
            {
                "nl": "de boottocht",
                "fr": "la balade en bateau"
            },
            {
                "nl": "de uitstap",
                "fr": "l'excursion"
            },
            {
                "nl": "de citytrip",
                "fr": "le city-trip"
            },
            {
                "nl": "het weekendje weg",
                "fr": "le week- end escapade"
            },
            {
                "nl": "de vakantie",
                "fr": "les vacances"
            },
            {
                "nl": "de reisgids",
                "fr": "le guide de voyage"
            },
            {
                "nl": "E. Vie sociale d\u00e9tente (20) 81. uitgaan",
                "fr": "sortir"
            },
            {
                "nl": "iets gaan drinken",
                "fr": "aller boire un verre"
            },
            {
                "nl": "het caf\u00e9",
                "fr": "le caf\u00e9 (bar)"
            },
            {
                "nl": "de bar",
                "fr": "le bar"
            },
            {
                "nl": "het restaurant",
                "fr": "le restaurant"
            },
            {
                "nl": "de club",
                "fr": "la bo\u00eete de nuit"
            },
            {
                "nl": "de lounge",
                "fr": "le lounge"
            },
            {
                "nl": "afspreken met vrienden",
                "fr": "voir des amis"
            },
            {
                "nl": "een feestje",
                "fr": "une f\u00eate"
            },
            {
                "nl": "de verjaardag",
                "fr": "l'anniversaire"
            },
            {
                "nl": "vieren",
                "fr": "c\u00e9l\u00e9brer"
            },
            {
                "nl": "chillen",
                "fr": "se d\u00e9tendre"
            },
            {
                "nl": "relaxen",
                "fr": "se relaxer"
            },
            {
                "nl": "een boek lezen",
                "fr": "lire un livre"
            },
            {
                "nl": "muziek luisteren",
                "fr": "\u00e9couter de la musique"
            },
            {
                "nl": "een dutje doen",
                "fr": "faire une sieste"
            },
            {
                "nl": "de vrije tijd",
                "fr": "le temps libre"
            },
            {
                "nl": "genieten van",
                "fr": "profiter de"
            },
            {
                "nl": "zich amuseren",
                "fr": "s'amuser"
            },
            {
                "nl": "zich vervelen",
                "fr": "s'ennuyer"
            }
        ]
    },
    {
        "theme": "Nature",
        "words": [
            {
                "nl": "de natuur",
                "fr": "la nature"
            },
            {
                "nl": "het landschap",
                "fr": "le paysage"
            },
            {
                "nl": "het bos",
                "fr": "la for\u00eat"
            },
            {
                "nl": "de boom",
                "fr": "l'arbre"
            },
            {
                "nl": "de struik",
                "fr": "le buisson"
            },
            {
                "nl": "de weide",
                "fr": "la prairie"
            },
            {
                "nl": "de berg",
                "fr": "la montagne"
            },
            {
                "nl": "de heuvel",
                "fr": "la colline"
            },
            {
                "nl": "de vallei",
                "fr": "la vall\u00e9e"
            },
            {
                "nl": "de rivier",
                "fr": "la rivi\u00e8re"
            },
            {
                "nl": "de beek",
                "fr": "le ruisseau"
            },
            {
                "nl": "het meer",
                "fr": "le lac"
            },
            {
                "nl": "de zee",
                "fr": "la mer"
            },
            {
                "nl": "de oceaan",
                "fr": "l'oc\u00e9an"
            },
            {
                "nl": "het strand",
                "fr": "la plage"
            },
            {
                "nl": "de duin",
                "fr": "la dune"
            },
            {
                "nl": "de grot",
                "fr": "la grotte"
            },
            {
                "nl": "de waterval",
                "fr": "la cascade"
            },
            {
                "nl": "het eiland",
                "fr": "l'\u00eele"
            },
            {
                "nl": "het schiereiland",
                "fr": "la presqu'\u00eele"
            },
            {
                "nl": "het weer",
                "fr": "le temps (m\u00e9t\u00e9o)"
            },
            {
                "nl": "de temperatuur",
                "fr": "la temp\u00e9rature"
            },
            {
                "nl": "de regen",
                "fr": "la pluie"
            },
            {
                "nl": "de sneeuw",
                "fr": "la neige"
            },
            {
                "nl": "de hagel",
                "fr": "la gr\u00eale"
            },
            {
                "nl": "de wind",
                "fr": "le vent"
            },
            {
                "nl": "de storm",
                "fr": "la temp\u00eate"
            },
            {
                "nl": "de bliksem",
                "fr": "l'\u00e9clair"
            },
            {
                "nl": "de donder",
                "fr": "le tonnerre"
            },
            {
                "nl": "de wolk",
                "fr": "le nuage"
            },
            {
                "nl": "de zon",
                "fr": "le soleil"
            },
            {
                "nl": "de hittegolf",
                "fr": "la vague de chaleur"
            },
            {
                "nl": "de droogte",
                "fr": "la s\u00e9cheresse"
            },
            {
                "nl": "de overstroming",
                "fr": "l'inondation"
            },
            {
                "nl": "de mist",
                "fr": "le brouillard"
            },
            {
                "nl": "de regenboog",
                "fr": "l'arc-en-ciel"
            },
            {
                "nl": "het klimaat",
                "fr": "le climat"
            },
            {
                "nl": "de seizoenen",
                "fr": "les saisons"
            },
            {
                "nl": "de lente",
                "fr": "le printemps"
            },
            {
                "nl": "de herfst",
                "fr": "l'automne"
            },
            {
                "nl": "de plant",
                "fr": "la plante"
            },
            {
                "nl": "de bloem",
                "fr": "la fleur"
            },
            {
                "nl": "de roos",
                "fr": "la rose"
            },
            {
                "nl": "de tulp",
                "fr": "la tulipe"
            },
            {
                "nl": "de lelie",
                "fr": "le lys"
            },
            {
                "nl": "de zonnebloem",
                "fr": "le tournesol"
            },
            {
                "nl": "het gras",
                "fr": "l'herbe"
            },
            {
                "nl": "het mos",
                "fr": "la mousse"
            },
            {
                "nl": "de varen",
                "fr": "la foug\u00e8re"
            },
            {
                "nl": "de cactus",
                "fr": "le cactus"
            },
            {
                "nl": "de struik",
                "fr": "l'arbuste"
            },
            {
                "nl": "de wortel (plant)",
                "fr": "la racine"
            },
            {
                "nl": "de stam",
                "fr": "le tronc"
            },
            {
                "nl": "de tak",
                "fr": "la branche"
            },
            {
                "nl": "het blad",
                "fr": "la feuille"
            },
            {
                "nl": "de zaad",
                "fr": "la graine"
            },
            {
                "nl": "de bloesem",
                "fr": "la floraison"
            },
            {
                "nl": "de oogst",
                "fr": "la r\u00e9colte"
            },
            {
                "nl": "zaaien",
                "fr": "semer"
            },
            {
                "nl": "groeien",
                "fr": "pousser"
            },
            {
                "nl": "het ecosysteem",
                "fr": "l'\u00e9cosyst\u00e8me"
            },
            {
                "nl": "de biodiversiteit",
                "fr": "la biodiversit\u00e9"
            },
            {
                "nl": "de natuurreservaat",
                "fr": "la r\u00e9serve naturelle"
            },
            {
                "nl": "het nationaal park",
                "fr": "le parc national"
            },
            {
                "nl": "de habitat",
                "fr": "l'habitat"
            },
            {
                "nl": "de fauna",
                "fr": "la faune"
            },
            {
                "nl": "de flora",
                "fr": "la flore"
            },
            {
                "nl": "de bodem",
                "fr": "le sol"
            },
            {
                "nl": "de luchtkwaliteit",
                "fr": "la qualit\u00e9 de l'air"
            },
            {
                "nl": "de waterkwaliteit",
                "fr": "la qualit\u00e9 de l'eau"
            },
            {
                "nl": "de vervuiling",
                "fr": "la pollution"
            },
            {
                "nl": "het afval",
                "fr": "les d\u00e9chets"
            },
            {
                "nl": "recycleren",
                "fr": "recycler"
            },
            {
                "nl": "beschermen",
                "fr": "prot\u00e9ger"
            },
            {
                "nl": "bedreigd",
                "fr": "menac\u00e9"
            },
            {
                "nl": "uitsterven",
                "fr": "dispara\u00eetre (esp\u00e8ce)"
            },
            {
                "nl": "de natuurramp",
                "fr": "la catastrophe naturelle"
            },
            {
                "nl": "de bosbrand",
                "fr": "l'incendie de for\u00eat"
            },
            {
                "nl": "de aardbeving",
                "fr": "le tremblement de terre"
            },
            {
                "nl": "de vulkaanuitbarsting",
                "fr": "l'\u00e9ruption volcanique"
            },
            {
                "nl": "wandelen in de natuur",
                "fr": "se promener dans la nature"
            },
            {
                "nl": "kamperen",
                "fr": "camper"
            },
            {
                "nl": "picknicken",
                "fr": "pique-niquer"
            },
            {
                "nl": "vogels spotten",
                "fr": "observer les oiseaux"
            },
            {
                "nl": "bergbeklimmen",
                "fr": "escalader"
            },
            {
                "nl": "vissen",
                "fr": "p\u00eacher"
            },
            {
                "nl": "kano\u00ebn",
                "fr": "faire du cano\u00eb"
            },
            {
                "nl": "kajakken",
                "fr": "faire du kayak"
            },
            {
                "nl": "zwemmen in het meer",
                "fr": "nager dans le lac"
            },
            {
                "nl": "de zonsondergang",
                "fr": "le coucher du soleil"
            },
            {
                "nl": "de zonsopgang",
                "fr": "le lever du soleil"
            },
            {
                "nl": "genieten van het uitzicht",
                "fr": "profiter de la vue"
            },
            {
                "nl": "frisse lucht",
                "fr": "l'air frais"
            },
            {
                "nl": "de stilte",
                "fr": "le silence"
            },
            {
                "nl": "de schaduw",
                "fr": "l'ombre"
            },
            {
                "nl": "de natuur ontdekken",
                "fr": "d\u00e9couvrir la nature"
            },
            {
                "nl": "het wandelpad",
                "fr": "le sentier"
            },
            {
                "nl": "de bergtop",
                "fr": "le sommet"
            },
            {
                "nl": "de horizon",
                "fr": "l'horizon"
            },
            {
                "nl": "de omgeving",
                "fr": "les environs / l'environnement"
            }
        ]
    },
    {
        "theme": "Animalier",
        "words": [
            {
                "nl": "de hond",
                "fr": "le chien"
            },
            {
                "nl": "de kat",
                "fr": "le chat"
            },
            {
                "nl": "het konijn",
                "fr": "le lapin"
            },
            {
                "nl": "de hamster",
                "fr": "le hamster"
            },
            {
                "nl": "de cavia",
                "fr": "le cochon d'Inde"
            },
            {
                "nl": "de papegaai",
                "fr": "le perroquet"
            },
            {
                "nl": "de parkiet",
                "fr": "la perruche"
            },
            {
                "nl": "de goudvis",
                "fr": "le poisson rouge"
            },
            {
                "nl": "het aquarium",
                "fr": "l'aquarium"
            },
            {
                "nl": "de schildpad",
                "fr": "la tortue"
            },
            {
                "nl": "de puppy",
                "fr": "le chiot"
            },
            {
                "nl": "de kitten",
                "fr": "le chaton"
            },
            {
                "nl": "de halsband",
                "fr": "le collier"
            },
            {
                "nl": "de riem",
                "fr": "la laisse"
            },
            {
                "nl": "het hondenhok",
                "fr": "la niche"
            },
            {
                "nl": "de kattenbak",
                "fr": "la liti\u00e8re"
            },
            {
                "nl": "het voer",
                "fr": "la nourriture (pour animaux)"
            },
            {
                "nl": "de dierenarts",
                "fr": "le v\u00e9t\u00e9rinaire"
            },
            {
                "nl": "de verzorging",
                "fr": "les soins"
            },
            {
                "nl": "aaien",
                "fr": "caresser"
            },
            {
                "nl": "de koe",
                "fr": "la vache"
            },
            {
                "nl": "de stier",
                "fr": "le taureau"
            },
            {
                "nl": "het kalf",
                "fr": "le veau"
            },
            {
                "nl": "het paard",
                "fr": "le cheval"
            },
            {
                "nl": "de pony",
                "fr": "le poney"
            },
            {
                "nl": "het varken",
                "fr": "le cochon"
            },
            {
                "nl": "het schaap",
                "fr": "le mouton"
            },
            {
                "nl": "het lam",
                "fr": "l'agneau"
            },
            {
                "nl": "de geit",
                "fr": "la ch\u00e8vre"
            },
            {
                "nl": "de kip",
                "fr": "la poule"
            },
            {
                "nl": "de haan",
                "fr": "le coq"
            },
            {
                "nl": "het kuiken",
                "fr": "le poussin"
            },
            {
                "nl": "de eend",
                "fr": "le canard"
            },
            {
                "nl": "de gans",
                "fr": "l'oie"
            },
            {
                "nl": "de boerderij",
                "fr": "la ferme"
            },
            {
                "nl": "de stal",
                "fr": "l'\u00e9table"
            },
            {
                "nl": "het hooi",
                "fr": "le foin"
            },
            {
                "nl": "de melk",
                "fr": "le lait"
            },
            {
                "nl": "de wol",
                "fr": "la laine"
            },
            {
                "nl": "het erf",
                "fr": "la cour de ferme"
            },
            {
                "nl": "de leeuw",
                "fr": "le lion"
            },
            {
                "nl": "de tijger",
                "fr": "le tigre"
            },
            {
                "nl": "de beer",
                "fr": "l'ours"
            },
            {
                "nl": "de wolf",
                "fr": "le loup"
            },
            {
                "nl": "de vos",
                "fr": "le renard"
            },
            {
                "nl": "het hert",
                "fr": "le cerf"
            },
            {
                "nl": "het everzwijn",
                "fr": "le sanglier"
            },
            {
                "nl": "de haas",
                "fr": "le li\u00e8vre"
            },
            {
                "nl": "de egel",
                "fr": "le h\u00e9risson"
            },
            {
                "nl": "de das",
                "fr": "le blaireau"
            },
            {
                "nl": "de panter",
                "fr": "la panth\u00e8re"
            },
            {
                "nl": "de giraf",
                "fr": "la girafe"
            },
            {
                "nl": "de olifant",
                "fr": "l'\u00e9l\u00e9phant"
            },
            {
                "nl": "de zebra",
                "fr": "le z\u00e8bre"
            },
            {
                "nl": "de nijlpaard",
                "fr": "l'hippopotame"
            },
            {
                "nl": "de krokodil",
                "fr": "le crocodile"
            },
            {
                "nl": "de slang",
                "fr": "le serpent"
            },
            {
                "nl": "de aap",
                "fr": "le singe"
            },
            {
                "nl": "de kangoeroe",
                "fr": "le kangourou"
            },
            {
                "nl": "de bizon",
                "fr": "le bison"
            },
            {
                "nl": "de vogel",
                "fr": "l'oiseau"
            },
            {
                "nl": "de duif",
                "fr": "le pigeon"
            },
            {
                "nl": "de merel",
                "fr": "le merle"
            },
            {
                "nl": "de mus",
                "fr": "le moineau"
            },
            {
                "nl": "de kraai",
                "fr": "le corbeau"
            },
            {
                "nl": "de uil",
                "fr": "la chouette / le hibou"
            },
            {
                "nl": "de adelaar",
                "fr": "l'aigle"
            },
            {
                "nl": "de meeuw",
                "fr": "la mouette"
            },
            {
                "nl": "de vlinder",
                "fr": "le papillon"
            },
            {
                "nl": "de bij",
                "fr": "l'abeille"
            },
            {
                "nl": "de wesp",
                "fr": "la gu\u00eape"
            },
            {
                "nl": "de mier",
                "fr": "la fourmi"
            },
            {
                "nl": "de spin",
                "fr": "l'araign\u00e9e"
            },
            {
                "nl": "de libel",
                "fr": "la libellule"
            },
            {
                "nl": "de kever",
                "fr": "le scarab\u00e9e"
            },
            {
                "nl": "de mug",
                "fr": "le moustique"
            },
            {
                "nl": "de kikker",
                "fr": "la grenouille"
            },
            {
                "nl": "de pad",
                "fr": "le crapaud"
            },
            {
                "nl": "de mol",
                "fr": "la taupe"
            },
            {
                "nl": "de muis",
                "fr": "la souris"
            },
            {
                "nl": "de vis",
                "fr": "le poisson"
            },
            {
                "nl": "de haai",
                "fr": "le requin"
            },
            {
                "nl": "de dolfijn",
                "fr": "le dauphin"
            },
            {
                "nl": "de walvis",
                "fr": "la baleine"
            },
            {
                "nl": "de zeehond",
                "fr": "le phoque"
            },
            {
                "nl": "de octopus",
                "fr": "la pieuvre"
            },
            {
                "nl": "de kwal",
                "fr": "la m\u00e9duse"
            },
            {
                "nl": "de krab",
                "fr": "le crabe"
            },
            {
                "nl": "de kreeft",
                "fr": "le homard"
            },
            {
                "nl": "de schelp",
                "fr": "la coquille"
            },
            {
                "nl": "het koraal",
                "fr": "le corail"
            },
            {
                "nl": "de zeester",
                "fr": "l'\u00e9toile de mer"
            },
            {
                "nl": "de inktvis",
                "fr": "le calamar"
            },
            {
                "nl": "de zeebodem",
                "fr": "le fond marin"
            },
            {
                "nl": "de stroming",
                "fr": "le courant"
            },
            {
                "nl": "de golf",
                "fr": "la vague"
            },
            {
                "nl": "de duik",
                "fr": "la plong\u00e9e"
            },
            {
                "nl": "snorkelen",
                "fr": "faire du snorkeling"
            },
            {
                "nl": "de vissersboot",
                "fr": "le bateau de p\u00eache"
            },
            {
                "nl": "de visser",
                "fr": "le p\u00eacheur"
            }
        ]
    },
    {
        "theme": "Vie De Tous Les Jours",
        "words": [
            {
                "nl": "opstaan",
                "fr": "se lever"
            },
            {
                "nl": "zich wassen",
                "fr": "se laver"
            },
            {
                "nl": "zich aankleden",
                "fr": "s'habiller"
            },
            {
                "nl": "ontbijten",
                "fr": "prendre le petit- d\u00e9jeuner"
            },
            {
                "nl": "naar het werk gaan",
                "fr": "aller au travail"
            },
            {
                "nl": "thuiskomen",
                "fr": "rentrer \u00e0 la maison"
            },
            {
                "nl": "lunchen",
                "fr": "d\u00e9jeuner"
            },
            {
                "nl": "avondeten",
                "fr": "d\u00eener"
            },
            {
                "nl": "slapen gaan",
                "fr": "aller dormir"
            },
            {
                "nl": "wakker worden",
                "fr": "se r\u00e9veiller"
            },
            {
                "nl": "zich haasten",
                "fr": "se d\u00e9p\u00eacher"
            },
            {
                "nl": "pauze nemen",
                "fr": "prendre une pause"
            },
            {
                "nl": "rusten",
                "fr": "se reposer"
            },
            {
                "nl": "plannen",
                "fr": "planifier"
            },
            {
                "nl": "de dag beginnen",
                "fr": "commencer la journ\u00e9e"
            },
            {
                "nl": "de dag eindigen",
                "fr": "terminer la journ\u00e9e"
            },
            {
                "nl": "de wekker",
                "fr": "le r\u00e9veil"
            },
            {
                "nl": "de agenda",
                "fr": "l'agenda"
            },
            {
                "nl": "de gewoonte",
                "fr": "l'habitude"
            },
            {
                "nl": "de dagelijkse routine",
                "fr": "la routine quotidienne"
            },
            {
                "nl": "schoonmaken",
                "fr": "nettoyer"
            },
            {
                "nl": "stofzuigen",
                "fr": "passer l'aspirateur"
            },
            {
                "nl": "dweilen",
                "fr": "passer la serpilli\u00e8re"
            },
            {
                "nl": "afwassen",
                "fr": "faire la vaisselle"
            },
            {
                "nl": "de afwasmachine vullen",
                "fr": "remplir le lave-vaisselle"
            },
            {
                "nl": "de afwasmachine leegmaken",
                "fr": "vider le lave-vaisselle"
            },
            {
                "nl": "opruimen",
                "fr": "ranger"
            },
            {
                "nl": "wassen",
                "fr": "faire la lessive"
            },
            {
                "nl": "strijken",
                "fr": "repasser"
            },
            {
                "nl": "koken",
                "fr": "cuisiner"
            },
            {
                "nl": "boodschappen doen",
                "fr": "faire les courses"
            },
            {
                "nl": "het vuilnis buitenzetten",
                "fr": "sortir les poubelles"
            },
            {
                "nl": "de tuin onderhouden",
                "fr": "entretenir le jardin"
            },
            {
                "nl": "de ramen wassen",
                "fr": "laver les vitres"
            },
            {
                "nl": "de tafel dekken",
                "fr": "mettre la table"
            },
            {
                "nl": "de tafel afruimen",
                "fr": "d\u00e9barrasser la table"
            },
            {
                "nl": "het bed opmaken",
                "fr": "faire le lit"
            },
            {
                "nl": "de vloer vegen",
                "fr": "balayer le sol"
            },
            {
                "nl": "de kast",
                "fr": "l'armoire"
            },
            {
                "nl": "de schoonmaakproducten",
                "fr": "les produits de nettoyage"
            },
            {
                "nl": "bellen",
                "fr": "t\u00e9l\u00e9phoner"
            },
            {
                "nl": "sms'en",
                "fr": "envoyer un SMS"
            },
            {
                "nl": "chatten",
                "fr": "discuter en ligne"
            },
            {
                "nl": "e-mailen",
                "fr": "envoyer un e-mail"
            },
            {
                "nl": "afspreken",
                "fr": "fixer un rendez-vous"
            },
            {
                "nl": "iemand bezoeken",
                "fr": "rendre visite \u00e0 quelqu'un"
            },
            {
                "nl": "op bezoek gaan",
                "fr": "aller en visite"
            },
            {
                "nl": "praten",
                "fr": "parler"
            },
            {
                "nl": "luisteren",
                "fr": "\u00e9couter"
            },
            {
                "nl": "ontmoeten",
                "fr": "rencontrer"
            },
            {
                "nl": "de vriend",
                "fr": "l'ami"
            },
            {
                "nl": "de vriendin",
                "fr": "l'amie"
            },
            {
                "nl": "de buren",
                "fr": "les voisins"
            },
            {
                "nl": "de familie",
                "fr": "la famille"
            },
            {
                "nl": "het gezin",
                "fr": "la famille (foyer)"
            },
            {
                "nl": "samen eten",
                "fr": "manger ensemble"
            },
            {
                "nl": "samen tijd doorbrengen",
                "fr": "passer du temps ensemble"
            },
            {
                "nl": "uitnodigen",
                "fr": "inviter"
            },
            {
                "nl": "feliciteren",
                "fr": "f\u00e9liciter"
            },
            {
                "nl": "bedanken",
                "fr": "remercier"
            },
            {
                "nl": "winkelen",
                "fr": "faire du shopping"
            },
            {
                "nl": "de winkel",
                "fr": "le magasin"
            },
            {
                "nl": "de supermarkt",
                "fr": "le supermarch\u00e9"
            },
            {
                "nl": "de bakker",
                "fr": "le boulanger"
            },
            {
                "nl": "de slager",
                "fr": "le boucher"
            },
            {
                "nl": "de apotheek",
                "fr": "la pharmacie"
            },
            {
                "nl": "de kapper",
                "fr": "le coiffeur"
            },
            {
                "nl": "de dokter",
                "fr": "le m\u00e9decin"
            },
            {
                "nl": "de tandarts",
                "fr": "le dentiste"
            },
            {
                "nl": "de bank",
                "fr": "la banque"
            },
            {
                "nl": "de post",
                "fr": "la poste"
            },
            {
                "nl": "het pakket",
                "fr": "le colis"
            },
            {
                "nl": "de levering",
                "fr": "la livraison"
            },
            {
                "nl": "betalen",
                "fr": "payer"
            },
            {
                "nl": "de rekening",
                "fr": "l'addition / la facture"
            },
            {
                "nl": "de prijs",
                "fr": "le prix"
            },
            {
                "nl": "de korting",
                "fr": "la r\u00e9duction"
            },
            {
                "nl": "kiezen",
                "fr": "choisir"
            },
            {
                "nl": "proberen",
                "fr": "essayer"
            },
            {
                "nl": "bestellen",
                "fr": "commander"
            },
            {
                "nl": "geen probleem",
                "fr": "pas de probl\u00e8me"
            },
            {
                "nl": "het maakt niet uit",
                "fr": "peu importe"
            },
            {
                "nl": "ik ben bezig",
                "fr": "je suis occup\u00e9"
            },
            {
                "nl": "ik heb geen tijd",
                "fr": "je n'ai pas le temps"
            },
            {
                "nl": "ik heb haast",
                "fr": "je suis press\u00e9"
            },
            {
                "nl": "dat is een goed idee",
                "fr": "c'est une bonne id\u00e9e"
            },
            {
                "nl": "ik begrijp het",
                "fr": "je comprends"
            },
            {
                "nl": "ik weet het niet",
                "fr": "je ne sais pas"
            },
            {
                "nl": "even wachten",
                "fr": "attends un instant"
            },
            {
                "nl": "tot straks",
                "fr": "\u00e0 tout \u00e0 l'heure"
            },
            {
                "nl": "tot morgen",
                "fr": "\u00e0 demain"
            },
            {
                "nl": "tot binnenkort",
                "fr": "\u00e0 bient\u00f4t"
            },
            {
                "nl": "succes",
                "fr": "bonne chance"
            },
            {
                "nl": "voorzichtig",
                "fr": "prudence"
            },
            {
                "nl": "geen zorgen",
                "fr": "ne t'inqui\u00e8te pas"
            },
            {
                "nl": "ik ben moe",
                "fr": "je suis fatigu\u00e9"
            },
            {
                "nl": "ik heb honger",
                "fr": "j'ai faim"
            },
            {
                "nl": "ik heb dorst",
                "fr": "j'ai soif"
            },
            {
                "nl": "ik voel me goed",
                "fr": "je me sens bien"
            },
            {
                "nl": "ik voel me niet zo goed",
                "fr": "je ne me sens pas tr\u00e8s bien"
            }
        ]
    },
    {
        "theme": "La Maison",
        "words": [
            {
                "nl": "het huis",
                "fr": "la maison"
            },
            {
                "nl": "het appartement",
                "fr": "l'appartement"
            },
            {
                "nl": "de studio",
                "fr": "le studio"
            },
            {
                "nl": "de woonkamer",
                "fr": "le salon"
            },
            {
                "nl": "de eetkamer",
                "fr": "la salle \u00e0 manger"
            },
            {
                "nl": "de keuken",
                "fr": "la cuisine"
            },
            {
                "nl": "de badkamer",
                "fr": "la salle de bain"
            },
            {
                "nl": "de slaapkamer",
                "fr": "la chambre"
            },
            {
                "nl": "de gang",
                "fr": "le couloir"
            },
            {
                "nl": "de kelder",
                "fr": "la cave"
            },
            {
                "nl": "de zolder",
                "fr": "le grenier"
            },
            {
                "nl": "het balkon",
                "fr": "le balcon"
            },
            {
                "nl": "het terras",
                "fr": "la terrasse"
            },
            {
                "nl": "de tuin",
                "fr": "le jardin"
            },
            {
                "nl": "de garage",
                "fr": "le garage"
            },
            {
                "nl": "de voordeur",
                "fr": "la porte d'entr\u00e9e"
            },
            {
                "nl": "de achterdeur",
                "fr": "la porte arri\u00e8re"
            },
            {
                "nl": "het raam",
                "fr": "la fen\u00eatre"
            },
            {
                "nl": "de trap",
                "fr": "l'escalier"
            },
            {
                "nl": "de lift",
                "fr": "l'ascenseur"
            },
            {
                "nl": "de tafel",
                "fr": "la table"
            },
            {
                "nl": "de stoel",
                "fr": "la chaise"
            },
            {
                "nl": "de zetel",
                "fr": "le fauteuil"
            },
            {
                "nl": "de sofa",
                "fr": "le canap\u00e9"
            },
            {
                "nl": "het bed",
                "fr": "le lit"
            },
            {
                "nl": "de kast",
                "fr": "l'armoire"
            },
            {
                "nl": "de kleerkast",
                "fr": "la garde-robe"
            },
            {
                "nl": "de boekenkast",
                "fr": "la biblioth\u00e8que"
            },
            {
                "nl": "het bureau",
                "fr": "le bureau (meuble)"
            },
            {
                "nl": "de lade",
                "fr": "le tiroir"
            },
            {
                "nl": "de plank",
                "fr": "l'\u00e9tag\u00e8re"
            },
            {
                "nl": "de spiegel",
                "fr": "le miroir"
            },
            {
                "nl": "het tapijt",
                "fr": "le tapis"
            },
            {
                "nl": "de lamp",
                "fr": "la lampe"
            },
            {
                "nl": "de nachtkastje",
                "fr": "la table de nuit"
            },
            {
                "nl": "de salontafel",
                "fr": "la table basse"
            },
            {
                "nl": "de gordijnen",
                "fr": "les rideaux"
            },
            {
                "nl": "de matras",
                "fr": "le matelas"
            },
            {
                "nl": "het hoofdkussen",
                "fr": "l'oreiller"
            },
            {
                "nl": "het dekbed",
                "fr": "la couette"
            },
            {
                "nl": "de koelkast",
                "fr": "le frigo"
            },
            {
                "nl": "de diepvriezer",
                "fr": "le cong\u00e9lateur"
            },
            {
                "nl": "de oven",
                "fr": "le four"
            },
            {
                "nl": "het fornuis",
                "fr": "la cuisini\u00e8re"
            },
            {
                "nl": "de microgolfoven",
                "fr": "le micro- ondes"
            },
            {
                "nl": "de vaatwasser",
                "fr": "le lave- vaisselle"
            },
            {
                "nl": "de wasmachine",
                "fr": "la machine \u00e0 laver"
            },
            {
                "nl": "de droogkast",
                "fr": "le s\u00e8che-linge"
            },
            {
                "nl": "de stofzuiger",
                "fr": "l'aspirateur"
            },
            {
                "nl": "de strijkijzer",
                "fr": "le fer \u00e0 repasser"
            },
            {
                "nl": "de televisie",
                "fr": "la t\u00e9l\u00e9vision"
            },
            {
                "nl": "de afstandsbediening",
                "fr": "la t\u00e9l\u00e9commande"
            },
            {
                "nl": "de computer",
                "fr": "l'ordinateur"
            },
            {
                "nl": "de router",
                "fr": "le routeur"
            },
            {
                "nl": "de luidsprekers",
                "fr": "les haut- parleurs"
            },
            {
                "nl": "de boiler",
                "fr": "le chauffe-eau"
            },
            {
                "nl": "de thermostaat",
                "fr": "le thermostat"
            },
            {
                "nl": "de airco",
                "fr": "la climatisation"
            },
            {
                "nl": "de verwarming",
                "fr": "le chauffage"
            },
            {
                "nl": "de rookmelder",
                "fr": "le d\u00e9tecteur de fum\u00e9e"
            },
            {
                "nl": "schoonmaken",
                "fr": "nettoyer"
            },
            {
                "nl": "afstoffen",
                "fr": "d\u00e9poussi\u00e9rer"
            },
            {
                "nl": "dweilen",
                "fr": "passer la serpilli\u00e8re"
            },
            {
                "nl": "stofzuigen",
                "fr": "aspirer"
            },
            {
                "nl": "de vuilniszak",
                "fr": "le sac poubelle"
            },
            {
                "nl": "het vuilnis",
                "fr": "les d\u00e9chets"
            },
            {
                "nl": "de vuilnisbak",
                "fr": "la poubelle"
            },
            {
                "nl": "de spons",
                "fr": "l'\u00e9ponge"
            },
            {
                "nl": "de emmer",
                "fr": "le seau"
            },
            {
                "nl": "de borstel",
                "fr": "la brosse"
            },
            {
                "nl": "de schoonmaakproducten",
                "fr": "les produits de nettoyage"
            },
            {
                "nl": "de was",
                "fr": "la lessive"
            },
            {
                "nl": "de wasmand",
                "fr": "le panier \u00e0 linge"
            },
            {
                "nl": "de waslijn",
                "fr": "la corde \u00e0 linge"
            },
            {
                "nl": "de strijkplank",
                "fr": "la planche \u00e0 repasser"
            },
            {
                "nl": "de zeep",
                "fr": "le savon"
            },
            {
                "nl": "de doek",
                "fr": "le chiffon"
            },
            {
                "nl": "de ontkalker",
                "fr": "le d\u00e9tartrant"
            },
            {
                "nl": "de luchtverfrisser",
                "fr": "le d\u00e9sodorisant"
            },
            {
                "nl": "poetsen",
                "fr": "frotter / nettoyer"
            },
            {
                "nl": "de gereedschap",
                "fr": "les outils"
            },
            {
                "nl": "de hamer",
                "fr": "le marteau"
            },
            {
                "nl": "de schroevendraaier",
                "fr": "le tournevis"
            },
            {
                "nl": "de boormachine",
                "fr": "la perceuse"
            },
            {
                "nl": "de schroef",
                "fr": "la vis"
            },
            {
                "nl": "de nagel",
                "fr": "le clou"
            },
            {
                "nl": "de waterpas",
                "fr": "le niveau"
            },
            {
                "nl": "de ladder",
                "fr": "l'\u00e9chelle"
            },
            {
                "nl": "de zekering",
                "fr": "le fusible"
            },
            {
                "nl": "de elektriciteitskast",
                "fr": "le tableau \u00e9lectrique"
            },
            {
                "nl": "de sleutel",
                "fr": "la cl\u00e9"
            },
            {
                "nl": "het slot",
                "fr": "la serrure"
            },
            {
                "nl": "de bel",
                "fr": "la sonnette"
            },
            {
                "nl": "de deurmat",
                "fr": "le paillasson"
            },
            {
                "nl": "de brievenbus",
                "fr": "la bo\u00eete aux lettres"
            },
            {
                "nl": "de huisnummer",
                "fr": "le num\u00e9ro de maison"
            },
            {
                "nl": "de buren",
                "fr": "les voisins"
            },
            {
                "nl": "de huur",
                "fr": "le loyer"
            },
            {
                "nl": "de eigenaar",
                "fr": "le propri\u00e9taire"
            },
            {
                "nl": "verhuizen",
                "fr": "d\u00e9m\u00e9nager"
            }
        ]
    },
    {
        "theme": "Les Transports",
        "words": [
            {
                "nl": "de auto",
                "fr": "la voiture"
            },
            {
                "nl": "de wagen",
                "fr": "la voiture (synonyme)"
            },
            {
                "nl": "de vrachtwagen",
                "fr": "le camion"
            },
            {
                "nl": "de bestelwagen",
                "fr": "la camionnette"
            },
            {
                "nl": "de bus",
                "fr": "le bus"
            },
            {
                "nl": "de touringcar",
                "fr": "le car"
            },
            {
                "nl": "de taxi",
                "fr": "le taxi"
            },
            {
                "nl": "de motor",
                "fr": "la moto"
            },
            {
                "nl": "de scooter",
                "fr": "le scooter"
            },
            {
                "nl": "de fiets",
                "fr": "le v\u00e9lo"
            },
            {
                "nl": "de elektrische fiets",
                "fr": "le v\u00e9lo \u00e9lectrique"
            },
            {
                "nl": "de step",
                "fr": "la trottinette"
            },
            {
                "nl": "de elektrische step",
                "fr": "la trottinette \u00e9lectrique"
            },
            {
                "nl": "de caravan",
                "fr": "la caravane"
            },
            {
                "nl": "de camper",
                "fr": "le camping-car"
            },
            {
                "nl": "de ambulance",
                "fr": "l'ambulance"
            },
            {
                "nl": "de brandweerwagen",
                "fr": "le camion de pompiers"
            },
            {
                "nl": "de politiewagen",
                "fr": "la voiture de police"
            },
            {
                "nl": "de tractor",
                "fr": "le tracteur"
            },
            {
                "nl": "de heftruck",
                "fr": "le chariot \u00e9l\u00e9vateur"
            },
            {
                "nl": "de trein",
                "fr": "le train"
            },
            {
                "nl": "de metro",
                "fr": "le m\u00e9tro"
            },
            {
                "nl": "de tram",
                "fr": "le tram"
            },
            {
                "nl": "de buslijn",
                "fr": "la ligne de bus"
            },
            {
                "nl": "het station",
                "fr": "la gare"
            },
            {
                "nl": "het metrostation",
                "fr": "la station de m\u00e9tro"
            },
            {
                "nl": "de halte",
                "fr": "l'arr\u00eat"
            },
            {
                "nl": "de conducteur",
                "fr": "le conducteur"
            },
            {
                "nl": "de machinist",
                "fr": "le conducteur de train"
            },
            {
                "nl": "de reiziger",
                "fr": "le voyageur"
            },
            {
                "nl": "de pendelaar",
                "fr": "le navetteur"
            },
            {
                "nl": "overstappen",
                "fr": "faire une correspondance"
            },
            {
                "nl": "de dienstregeling",
                "fr": "l'horaire"
            },
            {
                "nl": "de vertraging",
                "fr": "le retard"
            },
            {
                "nl": "de spitsuren",
                "fr": "les heures de pointe"
            },
            {
                "nl": "de ticketautomaat",
                "fr": "la borne de tickets"
            },
            {
                "nl": "het abonnement",
                "fr": "l'abonnement"
            },
            {
                "nl": "het vervoersbewijs",
                "fr": "le titre de transport"
            },
            {
                "nl": "de controleur",
                "fr": "le contr\u00f4leur"
            },
            {
                "nl": "de spoorlijn",
                "fr": "la ligne ferroviaire"
            },
            {
                "nl": "de luchthaven",
                "fr": "l'a\u00e9roport"
            },
            {
                "nl": "de gate",
                "fr": "la porte d'embarquement"
            },
            {
                "nl": "de vlucht",
                "fr": "le vol"
            },
            {
                "nl": "inchecken",
                "fr": "s'enregistrer"
            },
            {
                "nl": "boarden",
                "fr": "embarquer"
            },
            {
                "nl": "de handbagage",
                "fr": "le bagage \u00e0 main"
            },
            {
                "nl": "de ruimbagage",
                "fr": "le bagage en soute"
            },
            {
                "nl": "de steward",
                "fr": "le steward"
            },
            {
                "nl": "de stewardess",
                "fr": "l'h\u00f4tesse de l'air"
            },
            {
                "nl": "de piloot",
                "fr": "le pilote"
            },
            {
                "nl": "de turbulentie",
                "fr": "la turbulence"
            },
            {
                "nl": "de landing",
                "fr": "l'atterrissage"
            },
            {
                "nl": "het vertrek",
                "fr": "le d\u00e9part"
            },
            {
                "nl": "de aankomst",
                "fr": "l'arriv\u00e9e"
            },
            {
                "nl": "de boot",
                "fr": "le bateau"
            },
            {
                "nl": "de veerboot",
                "fr": "le ferry"
            },
            {
                "nl": "het schip",
                "fr": "le navire"
            },
            {
                "nl": "de kapitein",
                "fr": "le capitaine"
            },
            {
                "nl": "de haven",
                "fr": "le port"
            },
            {
                "nl": "de weg",
                "fr": "la route"
            },
            {
                "nl": "de snelweg",
                "fr": "l'autoroute"
            },
            {
                "nl": "de afrit",
                "fr": "la sortie (autoroute)"
            },
            {
                "nl": "de oprit",
                "fr": "l'entr\u00e9e (autoroute)"
            },
            {
                "nl": "de rotonde",
                "fr": "le rond-point"
            },
            {
                "nl": "het kruispunt",
                "fr": "le carrefour"
            },
            {
                "nl": "de verkeerslichten",
                "fr": "les feux de signalisation"
            },
            {
                "nl": "de file",
                "fr": "l'embouteillage"
            },
            {
                "nl": "de verkeersdrukte",
                "fr": "la circulation dense"
            },
            {
                "nl": "de parkeerplaats",
                "fr": "le parking"
            },
            {
                "nl": "parkeren",
                "fr": "se garer"
            },
            {
                "nl": "de parkeermeter",
                "fr": "l'horodateur"
            },
            {
                "nl": "de rijstrook",
                "fr": "la bande de circulation"
            },
            {
                "nl": "de maximumsnelheid",
                "fr": "la vitesse maximale"
            },
            {
                "nl": "de boete",
                "fr": "l'amende"
            },
            {
                "nl": "de rijbewijs",
                "fr": "le permis de conduire"
            },
            {
                "nl": "de verzekering",
                "fr": "l'assurance"
            },
            {
                "nl": "de autogarage",
                "fr": "le garage automobile"
            },
            {
                "nl": "de pech",
                "fr": "la panne"
            },
            {
                "nl": "de wegenwacht",
                "fr": "l'assistance routi\u00e8re"
            },
            {
                "nl": "het transport",
                "fr": "le transport"
            },
            {
                "nl": "de levering",
                "fr": "la livraison"
            },
            {
                "nl": "het pakket",
                "fr": "le colis"
            },
            {
                "nl": "verzenden",
                "fr": "exp\u00e9dier"
            },
            {
                "nl": "ontvangen",
                "fr": "recevoir"
            },
            {
                "nl": "de logistiek",
                "fr": "la logistique"
            },
            {
                "nl": "de chauffeur",
                "fr": "le chauffeur"
            },
            {
                "nl": "de routeplanner",
                "fr": "le planificateur d'itin\u00e9raire"
            },
            {
                "nl": "de rit",
                "fr": "le trajet"
            },
            {
                "nl": "de afstand",
                "fr": "la distance"
            },
            {
                "nl": "de reistijd",
                "fr": "le temps de trajet"
            },
            {
                "nl": "vertrekken",
                "fr": "partir"
            },
            {
                "nl": "aankomen",
                "fr": "arriver"
            },
            {
                "nl": "onderweg",
                "fr": "en route"
            },
            {
                "nl": "vertraging hebben",
                "fr": "avoir du retard"
            },
            {
                "nl": "de overstap",
                "fr": "la correspondance"
            },
            {
                "nl": "de mobiliteit",
                "fr": "la mobilit\u00e9"
            },
            {
                "nl": "het verkeer",
                "fr": "la circulation"
            },
            {
                "nl": "de brandstof",
                "fr": "le carburant"
            },
            {
                "nl": "tanken",
                "fr": "faire le plein"
            }
        ]
    },
    {
        "theme": "Le Secr\u00e9tariat",
        "words": [
            {
                "nl": "de secretaresse",
                "fr": "la secr\u00e9taire"
            },
            {
                "nl": "de administratief medewerker",
                "fr": "l'employ\u00e9 administratif"
            },
            {
                "nl": "de management assistant",
                "fr": "l'assistant de direction"
            },
            {
                "nl": "de receptioniste",
                "fr": "le/la r\u00e9ceptionniste"
            },
            {
                "nl": "de telefoniste",
                "fr": "l'op\u00e9rateur t\u00e9l\u00e9phonique"
            },
            {
                "nl": "de office manager",
                "fr": "le gestionnaire de bureau"
            },
            {
                "nl": "de assistent",
                "fr": "l'assistant"
            },
            {
                "nl": "het secretariaat",
                "fr": "le secr\u00e9tariat"
            },
            {
                "nl": "de ondersteuning",
                "fr": "le support"
            },
            {
                "nl": "de planning",
                "fr": "la planification"
            },
            {
                "nl": "de organisatie",
                "fr": "l'organisation"
            },
            {
                "nl": "de opvolging",
                "fr": "le suivi"
            },
            {
                "nl": "de administratie",
                "fr": "l'administration"
            },
            {
                "nl": "de co\u00f6rdinatie",
                "fr": "la coordination"
            },
            {
                "nl": "de archivering",
                "fr": "l'archivage"
            },
            {
                "nl": "de rapportage",
                "fr": "le reporting"
            },
            {
                "nl": "de correspondentie",
                "fr": "la correspondance"
            },
            {
                "nl": "de agenda beheren",
                "fr": "g\u00e9rer l'agenda"
            },
            {
                "nl": "afspraken regelen",
                "fr": "organiser des rendez-vous"
            },
            {
                "nl": "vergaderingen voorbereiden",
                "fr": "pr\u00e9parer les r\u00e9unions"
            },
            {
                "nl": "de telefoon opnemen",
                "fr": "d\u00e9crocher le t\u00e9l\u00e9phone"
            },
            {
                "nl": "doorverbinden",
                "fr": "transf\u00e9rer l'appel"
            },
            {
                "nl": "een bericht achterlaten",
                "fr": "laisser un message"
            },
            {
                "nl": "de voicemail",
                "fr": "la messagerie vocale"
            },
            {
                "nl": "de e-mail",
                "fr": "l'e-mail"
            },
            {
                "nl": "de bijlage",
                "fr": "la pi\u00e8ce jointe"
            },
            {
                "nl": "de uitnodiging",
                "fr": "l'invitation"
            },
            {
                "nl": "de bevestiging",
                "fr": "la confirmation"
            },
            {
                "nl": "de klacht",
                "fr": "la plainte"
            },
            {
                "nl": "de aanvraag",
                "fr": "la demande"
            },
            {
                "nl": "de informatie geven",
                "fr": "fournir des informations"
            },
            {
                "nl": "de bezoekers ontvangen",
                "fr": "accueillir les visiteurs"
            },
            {
                "nl": "de receptie",
                "fr": "l'accueil"
            },
            {
                "nl": "het onthaal",
                "fr": "l'accueil (synonyme)"
            },
            {
                "nl": "de badge",
                "fr": "le badge"
            },
            {
                "nl": "de wachtruimte",
                "fr": "la salle d'attente"
            },
            {
                "nl": "de telefooncentrale",
                "fr": "le standard t\u00e9l\u00e9phonique"
            },
            {
                "nl": "de communicatie",
                "fr": "la communication"
            },
            {
                "nl": "notuleren",
                "fr": "prendre des notes"
            },
            {
                "nl": "verslag maken",
                "fr": "r\u00e9diger un compte rendu"
            },
            {
                "nl": "het document",
                "fr": "le document"
            },
            {
                "nl": "het formulier",
                "fr": "le formulaire"
            },
            {
                "nl": "de factuur",
                "fr": "la facture"
            },
            {
                "nl": "de offerte",
                "fr": "l'offre (de prix)"
            },
            {
                "nl": "het contract",
                "fr": "le contrat"
            },
            {
                "nl": "de overeenkomst",
                "fr": "l'accord"
            },
            {
                "nl": "de lijst",
                "fr": "la liste"
            },
            {
                "nl": "het dossier",
                "fr": "le dossier"
            },
            {
                "nl": "het archief",
                "fr": "les archives"
            },
            {
                "nl": "klasseren",
                "fr": "classer"
            },
            {
                "nl": "scannen",
                "fr": "scanner"
            },
            {
                "nl": "kopi\u00ebren",
                "fr": "photocopier"
            },
            {
                "nl": "printen",
                "fr": "imprimer"
            },
            {
                "nl": "opslaan",
                "fr": "enregistrer"
            },
            {
                "nl": "verzenden",
                "fr": "envoyer"
            },
            {
                "nl": "ontvangen",
                "fr": "recevoir"
            },
            {
                "nl": "de handtekening",
                "fr": "la signature"
            },
            {
                "nl": "de stempel",
                "fr": "le tampon"
            },
            {
                "nl": "de map",
                "fr": "la farde / le classeur"
            },
            {
                "nl": "de databank",
                "fr": "la base de donn\u00e9es"
            },
            {
                "nl": "de computer",
                "fr": "l'ordinateur"
            },
            {
                "nl": "het toetsenbord",
                "fr": "le clavier"
            },
            {
                "nl": "de muis",
                "fr": "la souris"
            },
            {
                "nl": "het scherm",
                "fr": "l'\u00e9cran"
            },
            {
                "nl": "de printer",
                "fr": "l'imprimante"
            },
            {
                "nl": "de scanner",
                "fr": "le scanner"
            },
            {
                "nl": "de kopieermachine",
                "fr": "la photocopieuse"
            },
            {
                "nl": "de software",
                "fr": "le logiciel"
            },
            {
                "nl": "het tekstverwerkingsprogramma",
                "fr": "le traitement de texte"
            },
            {
                "nl": "de spreadsheet",
                "fr": "le tableur"
            },
            {
                "nl": "de presentatie",
                "fr": "la pr\u00e9sentation"
            },
            {
                "nl": "de agenda-app",
                "fr": "l'application agenda"
            },
            {
                "nl": "de planningstool",
                "fr": "l'outil de planification"
            },
            {
                "nl": "de database",
                "fr": "la base de donn\u00e9es"
            },
            {
                "nl": "de cloud",
                "fr": "le cloud"
            },
            {
                "nl": "uploaden",
                "fr": "t\u00e9l\u00e9verser"
            },
            {
                "nl": "downloaden",
                "fr": "t\u00e9l\u00e9charger"
            },
            {
                "nl": "back-up maken",
                "fr": "faire une sauvegarde"
            },
            {
                "nl": "de beveiliging",
                "fr": "la s\u00e9curit\u00e9"
            },
            {
                "nl": "het wachtwoord",
                "fr": "le mot de passe"
            },
            {
                "nl": "een afspraak inplannen",
                "fr": "planifier un rendez-vous"
            },
            {
                "nl": "een e-mail sturen",
                "fr": "envoyer un e-mail"
            },
            {
                "nl": "een document opstellen",
                "fr": "r\u00e9diger un document"
            },
            {
                "nl": "een rapport voorbereiden",
                "fr": "pr\u00e9parer un rapport"
            },
            {
                "nl": "een vergadering organiseren",
                "fr": "organiser une r\u00e9union"
            },
            {
                "nl": "de agenda bijhouden",
                "fr": "tenir l'agenda \u00e0 jour"
            },
            {
                "nl": "de planning aanpassen",
                "fr": "modifier la planification"
            },
            {
                "nl": "prioriteiten stellen",
                "fr": "d\u00e9finir les priorit\u00e9s"
            },
            {
                "nl": "deadlines opvolgen",
                "fr": "suivre les deadlines"
            },
            {
                "nl": "een dossier openen",
                "fr": "ouvrir un dossier"
            },
            {
                "nl": "een dossier sluiten",
                "fr": "cl\u00f4turer un dossier"
            },
            {
                "nl": "gegevens invoeren",
                "fr": "encoder des donn\u00e9es"
            },
            {
                "nl": "informatie opzoeken",
                "fr": "rechercher des informations"
            },
            {
                "nl": "een lijst maken",
                "fr": "faire une liste"
            },
            {
                "nl": "een tabel invullen",
                "fr": "remplir un tableau"
            },
            {
                "nl": "een telefoontje plegen",
                "fr": "passer un appel"
            },
            {
                "nl": "een memo schrijven",
                "fr": "\u00e9crire une note"
            },
            {
                "nl": "een probleem melden",
                "fr": "signaler un probl\u00e8me"
            },
            {
                "nl": "ondersteuning bieden",
                "fr": "apporter du support"
            },
            {
                "nl": "alles in orde brengen",
                "fr": "mettre tout en ordre"
            }
        ]
    },
    {
        "theme": "La Construction",
        "words": [
            {
                "nl": "de baksteen",
                "fr": "la brique"
            },
            {
                "nl": "het beton",
                "fr": "le b\u00e9ton"
            },
            {
                "nl": "het gewapend beton",
                "fr": "le b\u00e9ton arm\u00e9"
            },
            {
                "nl": "de cement",
                "fr": "le ciment"
            },
            {
                "nl": "de mortel",
                "fr": "le mortier"
            },
            {
                "nl": "het zand",
                "fr": "le sable"
            },
            {
                "nl": "de grind",
                "fr": "le gravier"
            },
            {
                "nl": "de kalk",
                "fr": "la chaux"
            },
            {
                "nl": "de isolatie",
                "fr": "l'isolation"
            },
            {
                "nl": "de gipsplaat",
                "fr": "la plaque de pl\u00e2tre"
            },
            {
                "nl": "de hout",
                "fr": "le bois"
            },
            {
                "nl": "de balk",
                "fr": "la poutre"
            },
            {
                "nl": "de plank",
                "fr": "la planche"
            },
            {
                "nl": "de staal",
                "fr": "l'acier"
            },
            {
                "nl": "de aluminium",
                "fr": "l'aluminium"
            },
            {
                "nl": "de kunststof",
                "fr": "le plastique"
            },
            {
                "nl": "de dakpannen",
                "fr": "les tuiles"
            },
            {
                "nl": "de glaswol",
                "fr": "la laine de verre"
            },
            {
                "nl": "de bak",
                "fr": "la cuve"
            },
            {
                "nl": "de fundering",
                "fr": "la fondation"
            },
            {
                "nl": "de hamer",
                "fr": "le marteau"
            },
            {
                "nl": "de boormachine",
                "fr": "la perceuse"
            },
            {
                "nl": "de schroevendraaier",
                "fr": "le tournevis"
            },
            {
                "nl": "de zaag",
                "fr": "la scie"
            },
            {
                "nl": "de slijpmachine",
                "fr": "la meuleuse"
            },
            {
                "nl": "de betonmixer",
                "fr": "la b\u00e9tonni\u00e8re"
            },
            {
                "nl": "de kruiwagen",
                "fr": "la brouette"
            },
            {
                "nl": "de waterpas",
                "fr": "le niveau"
            },
            {
                "nl": "de rolmeter",
                "fr": "le m\u00e8tre ruban"
            },
            {
                "nl": "de ladder",
                "fr": "l'\u00e9chelle"
            },
            {
                "nl": "de steiger",
                "fr": "l'\u00e9chafaudage"
            },
            {
                "nl": "de hijskraan",
                "fr": "la grue"
            },
            {
                "nl": "de bulldozer",
                "fr": "le bulldozer"
            },
            {
                "nl": "de graafmachine",
                "fr": "la pelleteuse"
            },
            {
                "nl": "de trilplaat",
                "fr": "la plaque vibrante"
            },
            {
                "nl": "de compressor",
                "fr": "le compresseur"
            },
            {
                "nl": "de generator",
                "fr": "le g\u00e9n\u00e9rateur"
            },
            {
                "nl": "de slijpschijf",
                "fr": "le disque de coupe"
            },
            {
                "nl": "de veiligheidshelm",
                "fr": "le casque de s\u00e9curit\u00e9"
            },
            {
                "nl": "de gehoorbescherming",
                "fr": "la protection auditive"
            },
            {
                "nl": "de muur",
                "fr": "le mur"
            },
            {
                "nl": "de draagmuur",
                "fr": "le mur porteur"
            },
            {
                "nl": "de vloerplaat",
                "fr": "la dalle"
            },
            {
                "nl": "de funderingssleuf",
                "fr": "la tranch\u00e9e de fondation"
            },
            {
                "nl": "de bekisting",
                "fr": "le coffrage"
            },
            {
                "nl": "de wapening",
                "fr": "l'armature"
            },
            {
                "nl": "de kolom",
                "fr": "la colonne"
            },
            {
                "nl": "de balk",
                "fr": "la poutre"
            },
            {
                "nl": "de draagstructuur",
                "fr": "la structure porteuse"
            },
            {
                "nl": "de metselwerk",
                "fr": "la ma\u00e7onnerie"
            },
            {
                "nl": "de voeg",
                "fr": "le joint"
            },
            {
                "nl": "de dakconstructie",
                "fr": "la charpente"
            },
            {
                "nl": "de helling",
                "fr": "la pente"
            },
            {
                "nl": "de afvoer",
                "fr": "l'\u00e9vacuation"
            },
            {
                "nl": "de riolering",
                "fr": "l'\u00e9gouttage"
            },
            {
                "nl": "de waterdichting",
                "fr": "l'\u00e9tanch\u00e9it\u00e9"
            },
            {
                "nl": "de isolatielaag",
                "fr": "la couche isolante"
            },
            {
                "nl": "de ventilatie",
                "fr": "la ventilation"
            },
            {
                "nl": "de nutsleidingen",
                "fr": "les conduites techniques"
            },
            {
                "nl": "de kelderwand",
                "fr": "le mur de cave"
            },
            {
                "nl": "de pleister",
                "fr": "l'enduit"
            },
            {
                "nl": "pleisteren",
                "fr": "plafonner"
            },
            {
                "nl": "schilderen",
                "fr": "peindre"
            },
            {
                "nl": "behangen",
                "fr": "tapisser"
            },
            {
                "nl": "de vloerbekleding",
                "fr": "le rev\u00eatement de sol"
            },
            {
                "nl": "de tegels",
                "fr": "les carreaux"
            },
            {
                "nl": "tegelen",
                "fr": "carreler"
            },
            {
                "nl": "de plint",
                "fr": "la plinthe"
            },
            {
                "nl": "de deurkader",
                "fr": "le chambranle"
            },
            {
                "nl": "de binnendeur",
                "fr": "la porte int\u00e9rieure"
            },
            {
                "nl": "de ramen",
                "fr": "les fen\u00eatres"
            },
            {
                "nl": "het schrijnwerk",
                "fr": "la menuiserie"
            },
            {
                "nl": "de elektriciteit",
                "fr": "l'\u00e9lectricit\u00e9"
            },
            {
                "nl": "de zekeringkast",
                "fr": "le tableau \u00e9lectrique"
            },
            {
                "nl": "de leidingen",
                "fr": "les conduites"
            },
            {
                "nl": "de verwarmingsinstallatie",
                "fr": "l'installation de chauffage"
            },
            {
                "nl": "de thermostaat",
                "fr": "le thermostat"
            },
            {
                "nl": "de sanitaire installatie",
                "fr": "l'installation sanitaire"
            },
            {
                "nl": "de kraan",
                "fr": "le robinet"
            },
            {
                "nl": "de afwerking",
                "fr": "la finition"
            },
            {
                "nl": "de werfleider",
                "fr": "le chef de chantier"
            },
            {
                "nl": "de aannemer",
                "fr": "l'entrepreneur"
            },
            {
                "nl": "de onderaannemer",
                "fr": "le sous- traitant"
            },
            {
                "nl": "de arbeider",
                "fr": "l'ouvrier"
            },
            {
                "nl": "de veiligheidsvoorschriften",
                "fr": "les consignes de s\u00e9curit\u00e9"
            },
            {
                "nl": "de signalisatie",
                "fr": "la signalisation"
            },
            {
                "nl": "de werfkeet",
                "fr": "la baraque de chantier"
            },
            {
                "nl": "de bouwvergunning",
                "fr": "le permis de construire"
            },
            {
                "nl": "de inspectie",
                "fr": "l'inspection"
            },
            {
                "nl": "de planning",
                "fr": "le planning"
            },
            {
                "nl": "de oplevering",
                "fr": "la r\u00e9ception des travaux"
            },
            {
                "nl": "de vertraging",
                "fr": "le retard"
            },
            {
                "nl": "de meerkost",
                "fr": "le surco\u00fbt"
            },
            {
                "nl": "de ruwbouw",
                "fr": "le gros uvre"
            },
            {
                "nl": "de afwerking",
                "fr": "la finition"
            },
            {
                "nl": "de stabiliteit",
                "fr": "la stabilit\u00e9"
            },
            {
                "nl": "de bouwmaterialen leveren",
                "fr": "livrer les mat\u00e9riaux"
            },
            {
                "nl": "opmeten",
                "fr": "mesurer"
            },
            {
                "nl": "de werf betreden",
                "fr": "acc\u00e9der au chantier"
            }
        ]
    }
];