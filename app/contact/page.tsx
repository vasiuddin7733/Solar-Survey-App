import React from "react";

const About = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 overflow-hidden h-screen">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-yellow-300 transform -skew-y-3" />
      <div className="relative z-10 max-w-4xl mx-auto py-24 space-y-12">
        <h1 className="text-4xl">Über Schoenergie</h1>
        <p>
          Etwas für den Klimaschutz zu tun, ist leichter, als viele Menschen
          glauben. Erzeugen Sie Ihren Strom mit einer Photovoltaikanlage einfach
          selbst. Wir unterstützen Sie dabei! Unsere Vision ist eine nachhaltige
          Energieerzeugung von der alle profitieren. Mit den unterschiedlichen
          Geschäftsbereichen deckt Schoenergie ein breites Spektrum an
          Dienstleistungen ab. Wir bauen Solarstromanlagen für private
          Haushalte, gewerbliche Einrichtungen oder Industrieanlagen in
          unterschiedlichen Leistungsstärken sowie Solarkraftwerke auf
          Freiflächen. Wir schaffen für Sie effiziente Ladeinfrastruktur,
          beraten Sie zum Thema Fördermittel und beantworten alle Ihre Fragen
          rund um die Solarenergie. Unsere Mitarbeiter:innen finden für Sie die
          beste Lösung.
        </p>
      </div>
    </div>
  );
};

export default About;
