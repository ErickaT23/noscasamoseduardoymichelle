const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const config = {
  event: {
    defaultEventId: "eduardoymichelle2027",
    databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
    eventIdParam: "eventId",
    legacyFallback: {
      read: false,
      write: false,
      subscribe: false
    }
  },
  admin: {
    adminKey: "twodesign123",
    keyParam: "key",
    legacyKeyParam: "admin"
  },
  seo: {
    titulo: "Eduardo Marroquin & Michelle Guzmán • 30.01.2027",
    descripcion: "Boda de Eduardo Marroquin y Michelle Guzmán - 30 de enero de 2027",
    autor: "Two Design"
  },
  pareja: {
    nombres: "Eduardo Marroquin & Michelle Guzmán",
    fecha: "30-01-2027",
    fechaVisible: "30.01.2027"
  },
  musica: {
    titulo: "Playlist Eduardo Marroquin & Michelle Guzmán",
    archivo: "music.mp3"
  },
  evento: {
    ceremonia: {
      titulo: "Ceremonia & Recepción",
      lugar: "Jardín Versatto",
      hora: "6:00 PM",
      direccion: "San Lucas Sacatepéquez, Aldea Chixolis",
      ubicacionUrl: "https://maps.app.goo.gl/xWviD4Awx3wPaChLA"
    },
    recepcion: {
      titulo: "Ceremonia & Recepción",
      lugar: "Jardín Versatto",
      hora: "6:00 PM",
      direccion: "San Lucas Sacatepéquez, Aldea Chixolis",
      ubicacionUrl: "https://maps.app.goo.gl/xWviD4Awx3wPaChLA"
    }
  },
  textos: {
    mensajeInvitado: "Nos encantará compartir este día contigo",
    mensajePases: "Hemos reservado {pases} lugares en su honor"
  },
  footer: {
    hashtag: "#EduardoYMichelle",
    instagramUrl: "https://www.instagram.com/thetwodesign",
    facebookUrl: "https://www.facebook.com/thetwodesign",
    marcaTexto: "Diseño",
    marcaNombre: "Two Design",
    marcaUrl: "https://twodesign.com"
  }
};

window.config = config;
window.firebaseConfig = firebaseConfig;
