/**
 * Motus landing page - internationalization (i18n).
 * Translates every element marked with a data-i18n attribute between
 * Spanish (default) and English, and remembers the visitor's choice.
 */

const DEFAULT_LANGUAGE = 'es';
const STORAGE_KEY = 'motus-language';

/* Translation dictionaries: one entry per data-i18n key. */
const translations = {
    es: {
        "meta.title": "Motus - Gestión Inteligente de Flotas",
        "nav.home": "Inicio",
        "nav.benefits": "Beneficios",
        "nav.features": "Funcionalidades",
        "nav.how": "Cómo funciona",
        "nav.plans": "Planes",
        "nav.contact": "Contacto",
        "nav.login": "Iniciar sesión",
        "hero.badge": "Gestión Inteligente de Flotas",
        "hero.title1": "Controla tu flota.",
        "hero.title2": "Anticípate a las fallas.",
        "hero.text": "Digitaliza el mantenimiento preventivo de tus vehículos, reduce imprevistos y mantén tu operación siempre en movimiento.",
        "cta.trial": "Iniciar Prueba Gratuita",
        "cta.how": "Ver cómo funciona",
        "hero.feat1": "Sin hardware adicional",
        "hero.feat2": "Acceso desde cualquier dispositivo",
        "hero.feat3": "Control preventivo de tu flota",
        "hero.alertTitle": "Alerta de mantenimiento",
        "hero.alertText": "BGT-482 en 500 km",
        "hero.dashTitle": "Resumen de la flota",
        "hero.dashAll": "Ver todo",
        "hero.dashAvailable": "Disponibles",
        "hero.dashMaintenance": "Mantenimiento",
        "hero.dashItem1": "En 500 km",
        "hero.dashItem2": "En 1,200 km",
        "benefits.title": "Una flota más eficiente comienza con prevención",
        "benefits.text": "Motus te ayuda a reducir imprevistos y mantener información clave de tus vehículos en un solo lugar.",
        "benefits.card1Title": "Ahorro preventivo",
        "benefits.card1Text": "Anticipa mantenimientos y reduce los gastos ocasionados por fallas inesperadas.",
        "benefits.card2Title": "Inspección digital",
        "benefits.card2Text": "Digitaliza las revisiones diarias de tus vehículos y mantén un mejor control operativo.",
        "benefits.card3Title": "Sin inversión en hardware",
        "benefits.card3Text": "Gestiona tu flota desde una plataforma web accesible desde computadoras y dispositivos móviles.",
        "features.title": "Todo lo que necesitas para cuidar tu flota",
        "features.text": "Herramientas pensadas para encargados de flota y conductores.",
        "features.card1Title": "Mantenimiento preventivo",
        "features.card1Text": "Configura revisiones según el kilometraje de cada vehículo.",
        "features.card2Title": "Alertas automáticas",
        "features.card2Text": "Identifica vehículos próximos a mantenimiento antes de que aparezca una falla.",
        "features.card3Title": "Checklist pre-viaje",
        "features.card3Text": "Registra inspecciones de luces, fluidos y llantas, incluso cuando no tengas conexión.",
        "features.card4Title": "Registro de odómetro",
        "features.card4Text": "Mantén actualizado el kilometraje acumulado de cada unidad.",
        "features.card5Title": "Reporte de incidencias",
        "features.card5Text": "Permite que los conductores reporten fallas mecánicas durante el trayecto.",
        "features.card6Title": "Historial técnico",
        "features.card6Text": "Consulta mantenimientos, intervenciones, checklists y gastos de cada vehículo.",
        "how.title": "Gestiona tu flota en cuatro pasos",
        "how.step1Title": "Registra tu flota",
        "how.step1Text": "Agrega tus vehículos y la información necesaria para comenzar su seguimiento.",
        "how.step2Title": "Registra la operación",
        "how.step2Text": "Los conductores ingresan el kilometraje y completan sus inspecciones pre-viaje.",
        "how.step3Title": "Motus monitorea",
        "how.step3Text": "La plataforma compara el kilometraje con los intervalos de mantenimiento configurados.",
        "how.step4Title": "Anticípate",
        "how.step4Text": "Recibe alertas y programa las revisiones antes de que una falla afecte tu operación.",
        "team.badge": "Para tu equipo",
        "team.title": "Una plataforma para toda tu operación",
        "team.text": "Herramientas adaptadas a las necesidades de quienes gestionan la flota y quienes están en ruta.",
        "team.managerTag": "Encargado de flota",
        "team.managerTitle": "Controla toda tu flota desde un solo lugar",
        "team.manager1": "Gestiona tus vehículos",
        "team.manager2": "Administra conductores",
        "team.manager3": "Configura mantenimientos",
        "team.manager4": "Consulta alertas preventivas",
        "team.manager5": "Registra servicios de taller",
        "team.manager6": "Consulta el historial técnico",
        "team.driverTag": "Conductor",
        "team.driverTitle": "Registra información rápidamente desde tu celular",
        "team.driver1": "Visualiza tu vehículo asignado",
        "team.driver2": "Registra el odómetro",
        "team.driver3": "Completa el checklist pre-viaje",
        "team.driver4": "Trabaja incluso sin conexión",
        "team.driver5": "Reporta incidencias mecánicas",
        "plans.title": "Elige el plan ideal para tu flota",
        "plans.text": "Opciones flexibles según el tamaño y las necesidades de tu operación.",
        "plans.starterLabel": "Inicial",
        "plans.starterTitle": "Flotas pequeñas",
        "plans.starterDesc": "Para empresas que desean comenzar a digitalizar el mantenimiento de sus vehículos.",
        "plans.starter1": "Gestión de vehículos",
        "plans.starter4": "Alertas de mantenimiento",
        "plans.choose": "Elegir Plan",
        "plans.recommended": "Recomendado",
        "plans.proLabel": "Profesional",
        "plans.proTitle": "Flotas en crecimiento",
        "plans.proDesc": "Mayor control para empresas que necesitan centralizar su operación.",
        "plans.pro1": "Todo lo incluido en Inicial",
        "plans.pro2": "Gestión de conductores",
        "plans.pro4": "Registro de taller",
        "plans.entLabel": "Empresarial",
        "plans.entTitle": "Flotas con mayor operación",
        "plans.entDesc": "Para organizaciones que requieren una solución adaptada al tamaño de su flota.",
        "plans.ent1": "Gestión integral de flota",
        "plans.ent2": "Alertas preventivas",
        "plans.ent3": "Historial consolidado",
        "plans.ent4": "Asesoría especializada",
        "cta.advice": "Solicitar Asesoría",
        "plans.note": "Los precios se definirán de acuerdo con la cantidad de vehículos y el plan seleccionado.",
        "contact.title": "¿Quieres conocer Motus?",
        "contact.text": "Solicita una demostración y descubre cómo Motus puede ayudarte a mejorar el mantenimiento y control de tu flota.",
        "brand.slogan": "Tu flota siempre en movimiento.",
        "form.name": "Nombre",
        "form.namePlaceholder": "Ingresa tu nombre",
        "form.email": "Correo corporativo",
        "form.emailPlaceholder": "nombre@empresa.com",
        "form.phone": "Teléfono",
        "form.fleetSize": "Tamaño de flota",
        "form.size1": "1 - 5 vehículos",
        "form.size2": "6 - 20 vehículos",
        "form.size3": "21 - 50 vehículos",
        "form.size4": "+50 vehículos",
        "footer.ctaTag": "Da el siguiente paso",
        "footer.ctaTitle": "Mantén tu flota siempre en movimiento.",
        "footer.ctaText": "Centraliza el mantenimiento, anticipa fallas y mejora el control de tus vehículos con Motus.",
        "cta.demo": "Solicitar demostración",
        "footer.about": "Gestión inteligente de mantenimiento preventivo para flotas de carga ligera.",
        "footer.product": "Producto",
        "footer.resources": "Recursos",
        "footer.help": "Centro de ayuda",
        "footer.faq": "Preguntas frecuentes",
        "footer.terms": "Términos y condiciones",
        "footer.privacy": "Política de privacidad",
        "footer.writeUs": "Escríbenos",
        "footer.location": "Ubicación",
        "footer.city": "Lima, Perú",
        "cta.contactUs": "Contáctanos",
        "footer.rights": "© 2026 Telemtrix - Motus. Todos los derechos reservados.",
        "footer.privacyShort": "Privacidad",
        "footer.termsShort": "Términos",
        "alt.heroImage": "Flota Motus"
    },
    en: {
        "meta.title": "Motus - Smart Fleet Management",
        "nav.home": "Home",
        "nav.benefits": "Benefits",
        "nav.features": "Features",
        "nav.how": "How it works",
        "nav.plans": "Plans",
        "nav.contact": "Contact",
        "nav.login": "Log in",
        "hero.badge": "Smart Fleet Management",
        "hero.title1": "Take control of your fleet.",
        "hero.title2": "Stay ahead of breakdowns.",
        "hero.text": "Digitize the preventive maintenance of your vehicles, reduce unexpected events and keep your operation always on the move.",
        "cta.trial": "Start Free Trial",
        "cta.how": "See how it works",
        "hero.feat1": "No additional hardware",
        "hero.feat2": "Access from any device",
        "hero.feat3": "Preventive control of your fleet",
        "hero.alertTitle": "Maintenance alert",
        "hero.alertText": "BGT-482 in 500 km",
        "hero.dashTitle": "Fleet overview",
        "hero.dashAll": "View all",
        "hero.dashAvailable": "Available",
        "hero.dashMaintenance": "Maintenance",
        "hero.dashItem1": "In 500 km",
        "hero.dashItem2": "In 1,200 km",
        "benefits.title": "A more efficient fleet starts with prevention",
        "benefits.text": "Motus helps you reduce unexpected events and keep your vehicles' key information in one place.",
        "benefits.card1Title": "Preventive savings",
        "benefits.card1Text": "Anticipate maintenance and reduce the costs caused by unexpected breakdowns.",
        "benefits.card2Title": "Digital inspection",
        "benefits.card2Text": "Digitize the daily checks of your vehicles and keep better operational control.",
        "benefits.card3Title": "No hardware investment",
        "benefits.card3Text": "Manage your fleet from a web platform accessible from computers and mobile devices.",
        "features.title": "Everything you need to take care of your fleet",
        "features.text": "Tools designed for fleet managers and drivers.",
        "features.card1Title": "Preventive maintenance",
        "features.card1Text": "Set up service checks based on the mileage of each vehicle.",
        "features.card2Title": "Automatic alerts",
        "features.card2Text": "Identify vehicles due for maintenance before a breakdown occurs.",
        "features.card3Title": "Pre-trip checklist",
        "features.card3Text": "Record inspections of lights, fluids and tires, even when you are offline.",
        "features.card4Title": "Odometer log",
        "features.card4Text": "Keep the accumulated mileage of each unit up to date.",
        "features.card5Title": "Incident reporting",
        "features.card5Text": "Let drivers report mechanical failures during the trip.",
        "features.card6Title": "Technical history",
        "features.card6Text": "Review the maintenance, interventions, checklists and expenses of each vehicle.",
        "how.title": "Manage your fleet in four steps",
        "how.step1Title": "Register your fleet",
        "how.step1Text": "Add your vehicles and the information needed to start tracking them.",
        "how.step2Title": "Record the operation",
        "how.step2Text": "Drivers enter the mileage and complete their pre-trip inspections.",
        "how.step3Title": "Motus monitors",
        "how.step3Text": "The platform compares the mileage against the configured maintenance intervals.",
        "how.step4Title": "Stay ahead",
        "how.step4Text": "Receive alerts and schedule service checks before a breakdown affects your operation.",
        "team.badge": "For your team",
        "team.title": "One platform for your entire operation",
        "team.text": "Tools tailored to the needs of those who manage the fleet and those who are on the road.",
        "team.managerTag": "Fleet manager",
        "team.managerTitle": "Control your entire fleet from one place",
        "team.manager1": "Manage your vehicles",
        "team.manager2": "Manage drivers",
        "team.manager3": "Set up maintenance plans",
        "team.manager4": "Check preventive alerts",
        "team.manager5": "Record workshop services",
        "team.manager6": "Review the technical history",
        "team.driverTag": "Driver",
        "team.driverTitle": "Record information quickly from your phone",
        "team.driver1": "View your assigned vehicle",
        "team.driver2": "Record the odometer",
        "team.driver3": "Complete the pre-trip checklist",
        "team.driver4": "Work even when offline",
        "team.driver5": "Report mechanical incidents",
        "plans.title": "Choose the ideal plan for your fleet",
        "plans.text": "Flexible options based on the size and needs of your operation.",
        "plans.starterLabel": "Starter",
        "plans.starterTitle": "Small fleets",
        "plans.starterDesc": "For companies that want to start digitizing the maintenance of their vehicles.",
        "plans.starter1": "Vehicle management",
        "plans.starter4": "Maintenance alerts",
        "plans.choose": "Choose Plan",
        "plans.recommended": "Recommended",
        "plans.proLabel": "Professional",
        "plans.proTitle": "Growing fleets",
        "plans.proDesc": "Greater control for companies that need to centralize their operation.",
        "plans.pro1": "Everything included in Starter",
        "plans.pro2": "Driver management",
        "plans.pro4": "Workshop records",
        "plans.entLabel": "Enterprise",
        "plans.entTitle": "Larger fleet operations",
        "plans.entDesc": "For organizations that require a solution tailored to the size of their fleet.",
        "plans.ent1": "Comprehensive fleet management",
        "plans.ent2": "Preventive alerts",
        "plans.ent3": "Consolidated history",
        "plans.ent4": "Specialized advisory",
        "cta.advice": "Request Advice",
        "plans.note": "Prices will be defined according to the number of vehicles and the selected plan.",
        "contact.title": "Want to get to know Motus?",
        "contact.text": "Request a demo and discover how Motus can help you improve the maintenance and control of your fleet.",
        "brand.slogan": "Your fleet always on the move.",
        "form.name": "Name",
        "form.namePlaceholder": "Enter your name",
        "form.email": "Work email",
        "form.emailPlaceholder": "name@company.com",
        "form.phone": "Phone",
        "form.fleetSize": "Fleet size",
        "form.size1": "1 - 5 vehicles",
        "form.size2": "6 - 20 vehicles",
        "form.size3": "21 - 50 vehicles",
        "form.size4": "50+ vehicles",
        "footer.ctaTag": "Take the next step",
        "footer.ctaTitle": "Keep your fleet always on the move.",
        "footer.ctaText": "Centralize maintenance, anticipate breakdowns and improve control of your vehicles with Motus.",
        "cta.demo": "Request a demo",
        "footer.about": "Smart preventive maintenance management for light cargo fleets.",
        "footer.product": "Product",
        "footer.resources": "Resources",
        "footer.help": "Help center",
        "footer.faq": "Frequently asked questions",
        "footer.terms": "Terms and conditions",
        "footer.privacy": "Privacy policy",
        "footer.writeUs": "Write to us",
        "footer.location": "Location",
        "footer.city": "Lima, Peru",
        "cta.contactUs": "Contact us",
        "footer.rights": "© 2026 Telemtrix - Motus. All rights reserved.",
        "footer.privacyShort": "Privacy",
        "footer.termsShort": "Terms",
        "alt.heroImage": "Motus fleet"
    }
};

/* Reads the saved language; falls back to the default when storage is unavailable. */
function getSavedLanguage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return translations[saved] ? saved : DEFAULT_LANGUAGE;
    } catch (error) {
        return DEFAULT_LANGUAGE;
    }
}

/* Saves the selected language so it is kept on the next visit. */
function saveLanguage(language) {
    try {
        localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
        /* Storage blocked (private mode): the page still works without it. */
    }
}

/* Applies the dictionary of the given language to the whole page. */
function applyLanguage(language) {
    const dictionary = translations[language];

    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const text = dictionary[element.dataset.i18n];
        if (text !== undefined) element.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const text = dictionary[element.dataset.i18nPlaceholder];
        if (text !== undefined) element.placeholder = text;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const text = dictionary[element.dataset.i18nAlt];
        if (text !== undefined) element.alt = text;
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
        const isActive = button.dataset.lang === language;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getSavedLanguage());

    document.querySelectorAll('.lang-btn').forEach((button) => {
        button.addEventListener('click', () => {
            saveLanguage(button.dataset.lang);
            applyLanguage(button.dataset.lang);
        });
    });
});
