const guests = [
  { id: "1", name: "Sr. Alfonso Pinillos, Sra e hijo", passes: 3 },
  { id: "2", name: "Sr. Julio Espinoza Sandoval", passes: 1 },
  { id: "3", name: "Sra. Maria Elena Pérez", passes: 1 },
  { id: "4", name: "Sr. David Yool y Sra. Viry García", passes: 2 },
  { id: "5", name: "Sr. Daniel Pérez, Sra e hijo", passes: 3 },
  { id: "6", name: "Sr. Daniel Espinoza, Sra e hijos", passes: 4 },
  { id: "7", name: "Sr. Audencio Polanco, Sra e hija", passes: 3 },
  { id: "8", name: "Sra. Mayra Espinoza", passes: 1 },
  { id: "9", name: "Sr. Hector Diaz y Sra", passes: 2 },
  { id: "10", name: "Sr. Esvin Alarcón y Sra", passes: 2 },
  { id: "11", name: "Sr. Luis Carlos Rosito y Sra", passes: 2 },
  { id: "12", name: "Sra. Sandra Lam", passes: 1 },
  { id: "13", name: "Sra. Gabriela Pérez e hijos", passes: 3 },
  { id: "14", name: "Coronel Marco Aurelio Aragon C.", passes: 1 },
  { id: "15", name: "Sra. Zoila Pérez", passes: 1 },
  { id: "16", name: "Sr. Paulo Méndes y Sra", passes: 2 },
  { id: "17", name: "Sr. Francisco Fuentes y Sra", passes: 2 },
  { id: "18", name: "Sr. Eduardo Toledo y Sra", passes: 2 },
  { id: "19", name: "Sra. Liliana Fernández", passes: 1 },
  { id: "20", name: "Sr. Jose Angel Guzmán Vasquez", passes: 1 },
  { id: "21", name: "Sra. Morena Leticia Vásquez", passes: 1 },
  { id: "22", name: "Sr. Flavio Guzmán y Sra e hijos", passes: 5 },
  { id: "23", name: "Sr. Juan Pablo Guzmán, Sra e hija", passes: 3 },
  { id: "24", name: "Sra. Karla Guzmán e hijos", passes: 3 },
  { id: "25", name: "Diego Gonzáles y Karla Molina", passes: 2 },
  { id: "26", name: "Sr. Rolando González", passes: 1 },
  { id: "27", name: "Srita. Leslie Rodas y Christian Cifuentes", passes: 2 },
  { id: "28", name: "Srita. Daniela Espinoza y Josué Ralda", passes: 2 },
  { id: "29", name: "Sr. Hugo Bernal y Sra e hijo", passes: 3 },
  { id: "30", name: "Sr. Mario Ordoñez y Sra", passes: 2 },
  { id: "31", name: "Sr. Ricardo Cartagena y Sra", passes: 2 },
  { id: "32", name: "Sr. Edgar Pérez y Sra", passes: 2 },
  { id: "33", name: "Sra. Elizabeth Bosque", passes: 1 },
  { id: "34", name: "Sr. Diego Soto, Sra e hijo", passes: 3 },
  { id: "35", name: "Sr. Giancarlo Chur y Sra", passes: 2 },
  { id: "36", name: "Sr. Omar Chur y Sra", passes: 2 },
  { id: "37", name: "Sr. Alexander Chur y Sra", passes: 2 },
  { id: "38", name: "Srita. Keren Méndez", passes: 1 },
  { id: "39", name: "Srita. Megan Yax", passes: 1 },
  { id: "40", name: "Sr. Jorge Luis Rodriguez y Sra", passes: 2 },
  { id: "41", name: "Sr. Alejandro Correa y Sra", passes: 2 },
  { id: "42", name: "Ing. Edgar Flores Izaguirre y Sra", passes: 2 },
  { id: "43", name: "Sr. Gerson Pop y Sra e hija", passes: 3 },
  { id: "44", name: "Sra. Alba Donado", passes: 1 },
  { id: "45", name: "Sra. Griselda Williamson", passes: 1 },
  { id: "46", name: "Sr. Ivan Toca y Sra", passes: 2 },
  { id: "47", name: "Sr. Federico Pinillos y Sra", passes: 2 },
  { id: "48", name: "Sr. Eduardo Pinillos y Sra", passes: 2 },
  { id: "49", name: "Sr. Luis Taracena y Sra", passes: 2 },
  { id: "50", name: "Sr. Mavil Vega", passes: 1 },
  { id: "51", name: "Sr. Dieter Majus y Sra", passes: 2 },
  { id: "52", name: "Ing. Victor Hugo Barrios Ortega y Sra", passes: 2 },
  { id: "53", name: "Sr. Sergio Guerra, Sra e hijos", passes: 5 },
  { id: "54", name: "Sra. Aldina Monroy e hija", passes: 2 },
  { id: "55", name: "Sr. Edgar Monroy y Sra", passes: 2 },
  { id: "56", name: "Sra. Paola Monroy e hijo", passes: 2 },
  { id: "57", name: "Sra. Maricarmen Barrientos, Esposo e hijas", passes: 5 },
  { id: "58", name: "Sra. Lubia Monroy", passes: 1 },
  { id: "59", name: "Sra. Nancy Barrientos y Esposo", passes: 2 },
  { id: "60", name: "Sr. José Victor Mejia y Sra.", passes: 2 },
  { id: "61", name: "Sr. Victor Mejia y Sra.", passes: 2 },
  { id: "62", name: "Sr. Gerber Monroy e hijo", passes: 2 },
  { id: "63", name: "Srita. Astrid Castañeda y Hna.", passes: 2 },
  { id: "64", name: "Sr. Jose Marroquin y Sra.", passes: 2 },
  { id: "65", name: "Sr. Marvin Marroquin, Sra e hija", passes: 3 },
  { id: "66", name: "Sr. Antonio Marroquin y Sra e hijos", passes: 4 },
  { id: "67", name: "Sra. Nancy Marroquin y Esposo", passes: 2 },
  { id: "68", name: "Sr. William Rosales", passes: 1 },
  { id: "69", name: "Sr. Luis Fernando Rosales, Sra e hijo", passes: 3 },
  { id: "70", name: "Sr. Nelson de León y Sra e hijos", passes: 4 },
  { id: "71", name: "Sra. Arminda Marroquin", passes: 2 },
  { id: "72", name: "Sra. Melissa Bojorquez y Esposo", passes: 2 },
  { id: "73", name: "Sr. Manuel Bojorquez", passes: 2 },
  { id: "74", name: "Sr. Fredy Marroquin y Sra", passes: 2 },
  { id: "75", name: "Sr. Julio Chavez y Sra", passes: 4 },
  { id: "76", name: "Sr. Gustavo Nuñez y Sra.", passes: 2 },
  { id: "77", name: "Sra. Ena Aguirre", passes: 2 },
  { id: "78", name: "Sr. Rafael Maldonado y Sra", passes: 2 },
  { id: "79", name: "Sr. Alfredo Barco y Sra", passes: 2 },
  { id: "80", name: "Sra. Silvia Bojorquez", passes: 1 },
  { id: "81", name: "Sr. Eduardo Marroquin y Sra.", passes: 2 },
  { id: "82", name: "Sra. Andrea Marroquin y esposo", passes: 2 },
  { id: "83", name: "Sr. Mynor Lopez y Sra.", passes: 2 },
  { id: "84", name: "Sr. Juan Molina y Sra", passes: 2 },
  { id: "85", name: "Sr. Cesar Molina y Sra", passes: 2 },
  { id: "86", name: "Sr. Dilmar Escobar", passes: 2 },
  { id: "87", name: "Sr. José Alfredo Gudiel y Sra", passes: 2 },
  { id: "88", name: "Sr. Alejandro Alcazar y Sra", passes: 2 },
  { id: "89", name: "Sr. Luis Hernández y Sra", passes: 3 },
  { id: "90", name: "Sr. German Otero y Sra.", passes: 2 },
  { id: "91", name: "Carlos Calderón", passes: 2 },
  { id: "92", name: "Alejandro Herrera", passes: 2 },
  { id: "93", name: "Sr. Daniel Perez", passes: 1 },
  { id: "94", name: "Sra. Ada Espinoza", passes: 1 }
];

function normalizeGuestMembers(rawMembers) {
  if (!Array.isArray(rawMembers)) return [];

  return rawMembers
    .map((member, index) => {
      const name = String(member?.name || member?.nombre || "").trim();
      if (!name) return null;

      return {
        id: String(member?.id || member?.guestId || `member-${index + 1}`),
        name,
        passes: Math.max(1, Number(member?.passes || member?.pases || 1))
      };
    })
    .filter(Boolean);
}

window.guests = guests;
window.LocalGuestSeeds = {
  ...(window.LocalGuestSeeds || {}),
  eduardoymichelle2027: guests.reduce((acc, guest) => {
    acc[String(guest.id)] = {
      id: String(guest.id),
      nombre: guest.name,
      pases: Number(guest.passes || 1),
      integrantes: normalizeGuestMembers(guest.members).map((member) => ({
        id: member.id,
        nombre: member.name,
        pases: member.passes
      })),
      activo: true
    };
    return acc;
  }, {})
};

window.seedEventGuestsToFirebase = async function seedEventGuestsToFirebase() {
  const eventId = window.config?.event?.defaultEventId || "eduardoymichelle2027";
  const rsvpDB = window.RSVPDatabase;
  if (!rsvpDB?.migrateLocalGuestsToFirebase) {
    console.warn("RSVPDatabase no está disponible. Revisa que database.js esté cargado.");
    return { ok: false, guests: 0 };
  }

  await rsvpDB.seedEventConfigToFirebase?.(eventId, { force: true });
  const result = await rsvpDB.migrateLocalGuestsToFirebase(eventId, { force: true });
  console.log(`Invitados creados en Firebase: ${result.total || guests.length}`);
  return { ok: true, guests: result.total || guests.length };
};

function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function notifyGuestUpdated() {
  window.dispatchEvent(new CustomEvent("guest:updated", { detail: window.currentGuest || null }));
}

function renderGuestCard(guest) {
  const nameEl = document.getElementById("guestCardName");
  const seatsEl = document.getElementById("guestCardSeats");
  const seatsTxtEl = document.getElementById("guestCardSeatsTxt");
  const passes = Math.max(1, Number(guest?.passes || 1));

  if (nameEl) nameEl.textContent = guest?.name || "Invitado especial";
  if (seatsEl) seatsEl.textContent = String(passes);
  if (seatsTxtEl) seatsTxtEl.textContent = passes === 1 ? "lugar" : "lugares";
}

function setCurrentGuest(guest) {
  if (!guest) {
    window.currentGuest = { id: getQueryParam("id") || "guest", name: "Invitado especial", passes: 1 };
    renderGuestCard(window.currentGuest);
    notifyGuestUpdated();
    return;
  }

  window.currentGuest = {
    id: String(guest.id),
    name: String(guest.name || guest.nombre || "Invitado especial").trim() || "Invitado especial",
    passes: Math.max(1, Number(guest.passes || guest.pases) || 1),
    members: normalizeGuestMembers(guest.members || guest.integrantes)
  };

  renderGuestCard(window.currentGuest);
  notifyGuestUpdated();
}

function waitForRSVPDatabase(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const timer = window.setInterval(() => {
      if (window.RSVPDatabase?.getInvitadoById) {
        window.clearInterval(timer);
        resolve(window.RSVPDatabase);
        return;
      }
      if (Date.now() - start > timeoutMs) {
        window.clearInterval(timer);
        reject(new Error("RSVPDatabase no disponible."));
      }
    }, 50);
  });
}

async function loadRemoteGuest(guestId) {
  try {
    const eventId = window.config?.event?.defaultEventId || "eduardoymichelle2027";
    console.log("[RSVP][GuestLoad] Esperando Firebase para leer invitado", {
      firebaseReady: Boolean(window.firebaseReady),
      eventId,
      guestId,
      path: `eventos/${eventId}/invitados/${guestId}`
    });
    const db = await waitForRSVPDatabase();
    const remoteGuest = await db.getInvitadoById(eventId, guestId);
    if (remoteGuest && remoteGuest.activo !== false) {
      const localGuest = guests.find((guest) => String(guest.id) === String(guestId));
      const mergedGuest = {
        ...remoteGuest,
        integrantes: Array.isArray(remoteGuest.integrantes) && remoteGuest.integrantes.length > 0
          ? remoteGuest.integrantes
          : (localGuest?.members || [])
      };
      console.log("[RSVP][GuestLoad] Invitado encontrado en Firebase", remoteGuest);
      setCurrentGuest(mergedGuest);
      return;
    }

    console.warn("[RSVP][GuestLoad] Invitado no encontrado o inactivo en Firebase", {
      eventId,
      guestId
    });
  } catch (error) {
    console.warn("[RSVP][GuestLoad] No se pudo cargar invitado remoto", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");
  console.log("[RSVP][GuestLoad] DOM listo. Leyendo parámetro ?id=", {
    guestId,
    firebaseReady: Boolean(window.firebaseReady),
    hasDatabase: Boolean(window.RSVPDatabase)
  });

  if (getQueryParam("seedGuests") === "1") window.seedEventGuestsToFirebase();

  if (!guestId) {
    setCurrentGuest(null);
    return;
  }

  const localGuest = guests.find((guest) => String(guest.id) === String(guestId));
  setCurrentGuest(localGuest || { id: guestId, name: "Invitado especial", passes: 1 });
  loadRemoteGuest(guestId);
});
