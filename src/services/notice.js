const notice = [
    {
        id: 1,
        title: "Nuevas excursiones",
        description: "Descubre las nuevas excursiones que hemos preparado para ti",
    },
    {
        id: 2,
        title: "Nuevas especies declaradas protegidas en Canarias",
        description: "Se han declarado más especies protegidas en las islas, añadidas a las que ya habían",
    },
    {
        id: 3,
        title: "Nuevas excursiones",
        description: "Descubre las nuevas excursiones que hemos preparado para ti",
    },
    {
        id: 4,
        title: "Nuevas excursiones",
        description: "Descubre las nuevas excursiones que hemos preparado para ti",
    },
    {
        id: 5,
        title: "Nuevas especies declaradas protegidas en Canarias",
        description: "Se han declarado más especies protegidas en las islas, añadidas a las que ya habían",
    },
    {
        id: 6,
        title: "Nuevas excursiones",
        description: "Descubre las nuevas excursiones que hemos preparado para ti",
    },
    {
        id: 7,
        title: "Descubren un nuevo arrecife en Canarias",
        description: "Un equipo de biólogos marinos ha descubierto un arrecife oculto en aguas profundas de Canarias.",
    },
    {
        id: 8,
        title: "Regulación de pesca en zonas protegidas",
        description: "Se han impuesto nuevas regulaciones para la pesca en zonas protegidas con el fin de preservar la biodiversidad.",
    },
    {
        id: 9,
        title: "Festival de deportes acuáticos",
        description: "Se anuncia un nuevo festival de deportes acuáticos que incluirá competiciones de surf, windsurf y pesca deportiva.",
    },
    {
        id: 10,
        title: "Avistamiento de cetáceos en Tenerife",
        description: "Expertos han registrado un aumento en la población de delfines y ballenas en la costa de Tenerife.",
    },
    {
        id: 11,
        title: "Temporada alta de pesca deportiva",
        description: "La temporada alta de pesca deportiva ha comenzado y se esperan torneos con gran participación.",
    },
    {
        id: 12,
        title: "Medusas en las playas",
        description: "Autoridades advierten sobre la presencia de medusas en varias playas y recomiendan precaución.",
    },
    {
        id: 13,
        title: "Avance en la conservación de tortugas marinas",
        description: "Nuevos esfuerzos han permitido la recuperación de poblaciones de tortugas marinas en Canarias.",
    },
    {
        id: 14,
        title: "Ampliación de puertos deportivos",
        description: "Se ha anunciado la ampliación de varios puertos deportivos para mejorar el acceso a embarcaciones.",
    },
    {
        id: 15,
        title: "Nuevo récord en pesca deportiva",
        description: "Un pescador ha logrado capturar un ejemplar récord en la última competición de pesca en Gran Canaria.",
    },
    {
        id: 16,
        title: "Curso gratuito de buceo para jóvenes",
        description: "Se abren inscripciones para un curso gratuito de buceo dirigido a jóvenes amantes del mar.",
    },
    {
        id: 17,
        title: "Investigación sobre la salud del océano",
        description: "Un grupo de científicos ha iniciado un estudio sobre el impacto del cambio climático en las aguas de Canarias.",
    },
    {
        id: 18,
        title: "Nuevos puntos de acceso a playas",
        description: "Se han habilitado nuevos accesos para facilitar la llegada de turistas y pescadores a las playas.",
    },
    {
        id: 19,
        title: "Encuentro internacional de pesca sostenible",
        description: "Canarias será la sede de un encuentro internacional sobre pesca sostenible y conservación marina.",
    },
    {
        id: 20,
        title: "Prohibición de plásticos en las playas",
        description: "A partir del próximo mes, se prohibirá el uso de plásticos de un solo uso en las principales playas de Canarias.",
    },
    {
        id: 21,
        title: "Nueva aplicación para pescadores",
        description: "Se lanza una app para ayudar a los pescadores a encontrar las mejores zonas y conocer la normativa vigente.",
    },
    {
        id: 22,
        title: "Expedición científica al Atlántico",
        description: "Un equipo de exploradores iniciará una expedición para estudiar la biodiversidad marina del Atlántico.",
    },
    {
        id: 23,
        title: "Hallazgo de una nueva especie marina",
        description: "Biólogos han descubierto una nueva especie de pez en las aguas profundas del archipiélago.",
    },
    {
        id: 24,
        title: "Restauración de arrecifes de coral",
        description: "Se ha puesto en marcha un proyecto de restauración para proteger los arrecifes de coral en Canarias.",
    },
    {
        id: 25,
        title: "Competencia de fotografía submarina",
        description: "Anuncian un concurso de fotografía submarina para promover la belleza y conservación del ecosistema marino.",
    },
    {
        id: 26,
        title: "Nueva regulación para la pesca de atún",
        description: "Se han establecido nuevas normativas para regular la pesca del atún y evitar su sobreexplotación.",
    },
    {
        id: 27,
        title: "Día Internacional de los Océanos",
        description: "Se celebrará el Día Internacional de los Océanos con actividades educativas y limpiezas de playas.",
    },
    {
        id: 28,
        title: "Apertura de un nuevo acuario en Tenerife",
        description: "Tenerife inaugura un nuevo acuario con especies marinas autóctonas y actividades interactivas.",
    },
    {
        id: 29,
        title: "Investigación sobre la contaminación marina",
        description: "Científicos están analizando los niveles de contaminación marina y sus efectos en la fauna local.",
    },
    {
        id: 30,
        title: "Regresan las tortugas bobas",
        description: "Se confirma el regreso de tortugas bobas a zonas de anidación en Canarias tras años de ausencia.",
    },
    {
        id: 31,
        title: "Gran torneo de pesca en Las Palmas",
        description: "Se organiza un gran torneo de pesca con premios para los mejores pescadores del archipiélago.",
    },
    {
        id: 32,
        title: "Avistamiento de tiburones en Fuerteventura",
        description: "Se reportan avistamientos de tiburones inofensivos cerca de la costa de Fuerteventura.",
    },
    {
        id: 33,
        title: "Nuevo centro de estudios marinos",
        description: "Se ha inaugurado un centro de estudios dedicado a la investigación y conservación del océano.",
    },
    {
        id: 34,
        title: "Alerta por microplásticos en el agua",
        description: "Un estudio revela altos niveles de microplásticos en las costas canarias, generando preocupación.",
    },
    {
        id: 35,
        title: "Vuelve la feria de pesca deportiva",
        description: "Se confirma la fecha de la feria anual de pesca deportiva con expositores y expertos invitados.",
    },
    {
        id: 36,
        title: "Talleres de conservación marina para niños",
        description: "Diversas organizaciones imparten talleres educativos para concienciar a los niños sobre el cuidado del océano.",
    }
];

export default notice;
