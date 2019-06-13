HSP-Tickets zur Evaluierung und Modularisierung von Mirador

### Task 8503: Ist-Analyse Mirador 3 hinsichtlich Flexibilität

Mirador ist gegenwärtig (Stand 3.0.0-alpha.9) ein Viewer für Bild-Ressourcen, d.h. es werden lediglich IIIF-Manifeste unterstützt, deren Ressourcen Bilder sind, die wiederum über die Image-API von IIIF geladen werden können. Die Hauptkomponente in einem Mirador-Fenster ist ein Bildbetrachter und einige Features wie Annotationen und Ansichtstypen sind speziell für Bilder konzipiert.

Die Ressourcen des Handscrhiftenportals bestehen neben Bilden zum großen Teil aus Texten (mit möglicherweise unterschiedlichen Formaten). Wenn wir Mirador zur Darstellung und Arbeit mit diesen Texten einsetzen wollen, muss es möglich sein, dass Mirador auch IIIF-Manifeste mit Text-Ressourcen konsumieren kann. Im Sinne der Nachhaltigkeit des Handschriftenportals wäre es wünschenswert, dass Mirador mit allen validen IIIF-Manifesten, unabhängig vom Typ der enthaltenen Ressourcen, umgehen kann.

Da der IIIF-Standard prinzipiell keine Beschränkungen hinsichtlich der Typen von Ressourcen stellt, ist es nicht möglich, alle Use Cases in Mirador zu antizipieren. Eine Möglichkeit mit diesem Problem umzugehen ist es, die Kernfunktionen von Mirador auf die gemeinsamen Merkmale aller IIIF-Manifeste zu beschränken und Funktionen, die auf bestimmte Typen von Ressourcen zielen, in Erweiterungen auszulagern.

Um diese Kern-Erweiterung-Architektur in Mirador zu implementieren, wäre ein Refactoring nötig, das durch die gegenwärtige monolithische Architektur von Mirador erschwert wird. Das größte Problem stellt dabei die fehlende Modularisierung des Codes dar, die sich negativ auf die Veränderbarkeit auswirkt.

* Sämtliche React-Komponenten (ca. 80) liegen flach in einem einzelnen Verzeichnis. Dadurch sind die Grenzen zwischen den Verantwortlichkeiten schwer zu erkennen (geringe Kohäsion)

* Es existieren keine definierten APIs für die zu einem funktionalen Bereich gehörenden Komponenten (führt zu hoher Kopplung)

* Direkte Importe über Bereichsgrenzen hinweg erschwert das Ersetzen bzw. die Wiederverwendbarkeit einzelner Komponenten (kein Dependency Injection).

* Die Grenzen zwischen Geschäftslogik und Päsentation wurden bisher nicht konzeptionell ausgearbeitet, was dazu führt, dass beide Aspekte uneinheitlich implementiert sind.

Probleme der Flexibilität existieren also aus Perspektive des Handschriftenportals in zwei Bereichen:

1) hinsichtlich der funktionalen Anforderungen an die Darstellung und Interaktion mit Textressourcen,

2) hinsichtlich der nicht-funktionalen Anforderungen an die Modularisierung des Codes als Voraussetzung für funktionale Anpassungen.


### Task 8504: Konzeption von Mirador-Verbesserungen

Die Aufgabe ist es, ein Architektur-Konzept zu erarbeiten, das die in Ticket #8503 festgestellten Probleme von Mirador 3 löst. Demnach wäre es das Ziel, Mirador zu einem IIIF-Viewer zu machen, der Manifeste mit unterschiedlichen Typen von Ressourcen darstellen kann. Voraussetzung dafür ist ein Extension-System und ein hoher Grad an Modularisierung des Codes.

Die Arbeit an diesem Konzept ist nicht abgeschlossen. Wir experimentieren mit unterschiedlichen Lösungen, wovon eine hier präsentiert wird.

##### Trennung zwischen Core und Extensions

Die Grundidee ist die Trennung zwischen Core und Extensions. Core stellt Funktionen und UI-Komponenten bereit, die zur Darstellung und Interaktion mit IIIF-Manifesten im allgemeinen, also unabhängig vom Typ der enthaltenen Ressourcen nötig sind. Dazu zählen:

  - Bereitstellung eines Containers für die Applikation mit generellen Funktionen wie Vollbild, Liste aller offenen Fenster, Auswahl des Themes, Auswahl des Fenstermanagers

  - Bereitstellung eines oder mehrerer Fenstermanager (Elastic, Mosaic). Jedes Fenster ist mit einem Manifest assoziiert.

  - Layout und Funktionen *innerhalb* eines Fensters. Zum Layout gehört etwa die Topbar, die Hauptansicht, die Begleitfenster. Funktionen sind etwa das Ein- und Ausblenden der Begleitfenster. Das Layout und die Funktionen sind aber undabhängig von den jeweiligen Ressourcen des Manifests. Es ist also etwa nicht die Aufgabe einen Bildbetrachter bereitzustellen.

  - Es ist offen, ob das Networking Teil von Core ist, oder ob es in eine Extension ausgelagert werden soll.

  - Mechanismus zum Einbinden von Extensions

Extensions existieren und zwei Formen: Content Extensions und Catalog Extensions

  - Content Extensions stellen Funktionen und UI-Komponenten zur Darstellung und Interaktion mit spezifischen Ressourcen bereit. Die Komponenten werden in das Fensterlayout von Core gerendert. Eine Extension zur Darstellung von Texten könnte also etwa einen Textreader enthalten.

  - Catalog Extensions stellen Funktionen und UI-Komponenten zum Suchen und Laden von IIIF-Manifesten bereit. Die Komponenten werden in den Workspace gerendert wenn der User den Add-Button klickt. Das Discovery-System des HSP könnte als Catalog Extension realisiert werden.

Der Stack einer laufenden Mirador-Instanz könnte also etwa wie folgt aussehen, wobei die roten Boxen Extensions darstellen:

#### Model-View-Controller bzw. State-Components-Containers

Die modulare Architektur von Mirador soll in einer dem Model-View-Controller-Pattern ähnlichen Weise realisiert werden. Dieses Pattern lässt sich ungefähr auf die im Bereich React/Redux üblichen Begriffe State, Components und Containers abbilden. Richtig angewandt führt dieses Pattern dazu, dass Model und View bzw. State und Components keine direkten Abhängigkeiten haben.

__State-Module (Redux)__:

- Bilden die Datenstrukturen und Geschäftslogik der Applikation.
- Jedes Modul stellt einen Reducer und Actions/Selectors bereit, die auf den Reducer arbeiten.
- Reducer, Actions und Selectors bilden die API eines Moduls
- Die Module haben keine Abhängigkeiten zu anderen State-Modulen oder anderen Teilen der Applikation

__Component-Module (React)__:

- Realisieren das User Interface der Applikation.
- Jedes Modul kann mehrere React-Componenten umfassen.
- Idealerweise sollte jedes Modul genau eine Root-Componente exportieren.
- Diese Root-Componente ist die API des Moduls
- Die Module haben keine Abhängigkeiten zu anderen Component-Modulen oder anderen Teilen der Applikation
- Alle benötigten Abhängigkeiten empfängt die Root-Componente durch Dependency Injection (entweder via Props-Passing oder Content-Provider)

__Container-Module (React/Redux)__:

- Binden Component-Module und State-Module zusammen.
- Können Abhängigkeiten zu anderen Container-Module haben
- Eines der Container-Module stellt die Root-Componente der gesamten Applikation dar.
