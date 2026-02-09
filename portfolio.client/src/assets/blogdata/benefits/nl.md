# Migratie van een Legacy Overheidsplatform naar Azure AD B2C

## De uitdaging

Ik kwam bij een project om een overheidsplatform voor arbeidsvoorwaarden te moderniseren dat duizenden actieve en gepensioneerde medewerkers bedient. De applicatie was een MVC-app met enkele React-componenten, draaiend op een legacy IdentityServer voor authenticatie. Onze opdracht was om te migreren naar Azure AD B2C en de authenticatie naar de cloud te verplaatsen.

De belangrijkste uitdaging was werken met beperkte documentatie over het bestaande systeem. We moesten begrijpen hoe alles werkte, de migratie plannen en uitvoeren zonder downtime te veroorzaken of gebruikers te dwingen hun wachtwoord opnieuw in te stellen. Omdat de gebruikersbasis zowel actieve medewerkers als gepensioneerden omvat, wilden we het zo eenvoudig mogelijk houden voor iedereen.

## Technische aanpak

Na het analyseren van het bestaande systeem, realiseerde ik me dat we een voordeel hadden: toegang tot de gehashte wachtwoorden van de legacy IdentityServer. Dit betekende dat we gebruikers konden migreren zonder dat ze hun wachtwoord opnieuw moesten instellen.

De oplossing was om Azure AD B2C op te zetten met custom policies die authenticatie tegen beide systemen konden afhandelen tijdens de transitie. Wanneer een gebruiker inlogde, zou het systeem eerst Azure AD B2C controleren. Als ze nog niet gemigreerd waren, valideerden we hun inloggegevens tegen de oude IdentityServer, en bij succes werd hun wachtwoord automatisch opgeslagen in Azure AD B2C. De gebruiker logde gewoon normaal in en werd gemigreerd zonder te weten dat er iets veranderd was.

Deze aanpak vermeed de rompslomp van het coördineren van wachtwoordresets met duizenden gebruikers en betekende dat we mensen geleidelijk konden migreren naarmate ze natuurlijk inlogden.

## Architectuurbeslissingen

Ik koos ervoor om Azure AD B2C custom policies te gebruiken in plaats van de standaard user flows omdat we die extra flexibiliteit nodig hadden voor de hybride authenticatielogica. Custom policies hebben een steilere leercurve, maar gaven ons de controle om de transitie soepel af te handelen.

In plaats van een bulk migratie in één keer, ontwierpen we het om geleidelijk te gebeuren terwijl gebruikers inlogden. Dit was minder risicovol en liet ons monitoren hoe het ging in productie. Als we edge cases tegenkwamen, konden we die aanpakken zonder iedereen te beïnvloeden.

Tijdens de transitie onderhielden we een verbinding tussen Azure AD B2C en de IdentityServer, met passende beveiligingsmaatregelen en fallback-opties om de betrouwbaarheid te waarborgen.

## Resultaten en impact

De migratie verliep soepel. Er was geen downtime en zeer weinig supporttickets. Gebruikers werden naar het nieuwe systeem gemigreerd zonder wachtwoordresets nodig te hebben, wat het hoofddoel was.

Naast het voltooien van de migratie, zette de overstap naar Azure AD B2C de applicatie klaar voor toekomstige verbeteringen. Het platform heeft ingebouwde ondersteuning voor multi-factor authenticatie, conditional access en integratie met andere cloudservices, wat veel moeilijker zou zijn geweest om toe te voegen aan de oude setup.

## Belangrijkste leerpunten

Dit project leerde me een paar dingen over werken met legacy systemen. Ten eerste, zelfs als documentatie schaars is, loont het de moeite om echt de tijd te nemen om de bestaande setup te begrijpen. Ten tweede, soms kun je gebruiken wat er al is (zoals die gehashte wachtwoorden) om problemen op te lossen op manieren die beter zijn voor gebruikers. Ten derde, het kiezen van de juiste tools en aanpak vooraf, zelfs als ze initieel complexer zijn, maakt de uitvoering meestal soepeler.

Mijn rol omvatte het analyseren van het probleem, het plannen van de oplossing en het tot een goed einde brengen. Het was goede ervaring in het balanceren van technische vereisten met gebruikersbehoeften, vooral bij het bedienen van een diverse gebruikersbasis.

---

**Context:** Flexstaffing voor Orbid

**Tech stack:** MVC Asp.net, React, Azure AD B2C, IdentityServer, Azure hosting
