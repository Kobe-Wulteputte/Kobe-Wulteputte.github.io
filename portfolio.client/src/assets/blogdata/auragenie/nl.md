# Experimenteren met AI chatbots

## Het idee

Uit interesse voor de opkomende LLM's heb ik zelf mijn eigen chatbot gemaakt die gebeurtenissen analyseert en hierop "aura punten" uitdeelt. Deze chatbot heeft de naam Aura genie gekregen.
De chatbot werkt op basis van de OpenAI API. Hierin is een prompt meegevegen om vast te leggen wat van de genie verwacht wordt.

Om dit toegankelijk te maken heb ik een simpele chat applicatie geschreven en gehost in Azure. Als authenticatie is Azure AD gebruikt. Zo kon iedereen van de software afdeling inloggen en zijn leukste momenten delen en werd hiervoor een aura-klassement bijgehouden.

Het heeft niet lang geduurd vooraleer dit een hit was onder de collega's en de applicatie bijgevolg ook aan een stress test onderworpen werd.

## Een leerrijke ervaring

Dit project was voor mij een leuke manier om kennis te maken met de OpenAI API en de mogelijkheden van LLM's. Daarnaast was het ook een goede oefening in het opzetten van real time communicatie via websockets en het beheren van gebruikersauthenticatie met Azure AD.

---

**Context:** Hobby project

**Tech stack:** OpenAI API, Vue, .net, SqlLite, Azure
