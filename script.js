const WHATSAPP_NUMBER = "595000000000";
const WHATSAPP_MESSAGE = "Hola Wunder Electronics, quiero consultar por un celular.";
const SOCIAL_USER = "wunderelectronics";

const LINKS = [
  { name: "TikTok", url: "https://www.tiktok.com/@wunderelectronics" + SOCIAL_USER, icon: "tiktok", type: "social" },
  { name: "Instagram", url: "https://www.instagram.com/wunderelectronics" + SOCIAL_USER, icon: "instagram", type: "social" },
  { name: "Facebook", url: "https://www.facebook.com/share/1C5Totpapf/" + SOCIAL_USER, icon: "facebook", type: "social" },
  { name: "Pedir por WhatsApp", url: "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE), icon: "whatsapp", type: "whatsapp" }
];

const ICONS = {
  tiktok: '<path d="M14.5 3.5v10.8a3.8 3.8 0 1 1-3.8-3.8"/><path d="M14.5 3.5c.3 2.6 2 4.4 4.8 4.6"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
  facebook: '<path d="M13.5 21v-7.5H16l.5-3.2h-3V8.6c0-.9.4-1.5 1.7-1.5h1.5V4.3c-.3 0-1.2-.2-2.3-.2-2.3 0-3.9 1.4-3.9 4v2.2H7.5v3.2H10V21"/>',
  whatsapp: '<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9.2 8.4c-.3.8 0 2.2 1.5 3.8s3 2.1 3.9 1.8l1-1.1-1.8-1-.9.7c-.7-.3-1.5-1-1.9-1.8l.6-.9-.9-1.8z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
};

const ARROW = '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>';

function svg(className, inner) {
  return '<svg class="' + className + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + inner + "</svg>";
}

function renderLinks() {
  const list = document.getElementById("links");
  const fragment = document.createDocumentFragment();

  LINKS.forEach(function (item) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "link link--" + item.type;
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", item.name + " (se abre en una pestaña nueva)");
    a.innerHTML =
      svg("link__icon", ICONS[item.icon] || ICONS.link) +
      '<span class="link__text"></span>' +
      svg("link__arrow", ARROW);
    a.querySelector(".link__text").textContent = item.name;
    li.appendChild(a);
    fragment.appendChild(li);
  });

  list.appendChild(fragment);
}

renderLinks();
