const CONFIG = {

  secretCode: "love",

  mainMessage: "Haii sayangg… selamat ulang tahun yaa 🎂✨ Gila sih, gak kerasa kamu udah nambah umur aja. Tapi gapapa, makin tua dikit yang penting makin sayang sama akuu (hehe iya kan? 😌). Makasih yaa udah bertahan sejauh ini, udah jadi kamu yang sekarang, udah jadi perempuan yang aku banggain bangettt. Aku tau hidup kamu gak selalu gampang, tapi kamu selalu bisa lewatin semuanya. Keren banget sih kamu, serius. Di umur baru ini aku pengen banget kamu dapet rezeki yang lancar dan gak pernah putus 💸, kesehatan yang bener-bener dijaga (jangan begadang mulu yaa 🥲), semua mimpi kamu satu-satu terwujud 🌟, dan yang paling penting… kamu bahagia, beneran bahagia 🤍. Aku bakal selalu bangga sama setiap proses yang kamu jalanin, sekecil apapun itu. Kamu gak harus jadi sempurna, kamu cuma harus jadi kamu. Pokoknya… happy birthday yaa sayangg. Semoga aku masih jadi orang yang bisa kamu peluk tiap kali dunia lagi capek.",

  specialTitle: "Semua hal harus kamu hadapi, tapi jangan sampe stres karena dipikirin sendiri, ajak aku stres bareng wkwk",

  specialText: "Kalau aku bisa milih lagi, aku tetep milih kamu. Di setiap versi hidupku, aku berharap jalan kita selalu ketemu.",

  author: "From Maikel",

  finalTitle: "Terima kasih sudah sampai di sini.",

  finalMessage: "Kalau kamu baca ini, berarti seluruh perjalanan kecil ini sudah kamu lewati. Selamat ulang tahun, sayang",

  finalAuthor: "Dengan hangat, seseorang yang menulis cerita ini",


  playlist: [
    {
      title: "Shape Of My Heart.mp3",
      artist: "Backstreet Boys",
      file: "assets/musik1.mp3"
    },
    {
      title: "Its You.mp3",
      artist: "Ali Gatie",
      file: "assets/musik2.mp3"
    },
    {
      title: "I Lay My Love on You.mp3",
      artist: "Westlife",
      file: "assets/musik3.mp3"
    }
  ],


  journey: [

    {
      date: "First",
      title: "Pertama kali ketemu",
      text: "Awal pas kelas 11, gak sengaja nunjuk kamu cina, disitu kamu jutek, tpi aku kepo kamu siapa jadi aku mintain deh wa nya ke adnan wkwk"
    },

    {
      date: "20 September 2023",
      title: "Awal pacaran",
      text: "Gak nyangka aja sih bisa pacaran ama kamu, dan kamu setulus ini, bahkan langsung dikenalin ke mama papa wkwk"
    },

    {
      date: "After PKL",
      title: "kita putus...",
      text: "Gak nyangka aja sih kita putus, but its okey kita sama2 salah paham"
    },

    {
      date: "20 September 2025",
      title: "Balikan lagi",
      text: "2 tahun asing, ehh balikan lagi, entah apa yang tuhsn mau kok bisa begini yaa"
    },

    {
      date: "September 2026",
      title: "Putus lagi..",
      text: "Terlalu banyak kesalahan mungkin jadinya kamu capek sama aku hehe, maafin yaa.."
    }

  ],


  constellationWords: [

    {
      x: 68,
      y: 24,
      word: "Cantik",
      note: "Karena setiap cerita yang baik dimulai dari rasa percaya."
    },

    {
      x: 82,
      y: 42,
      word: "Penyayang",
      note: "Bukan tentang menjadi sempurna, tetapi tentang terus tumbuh."
    },

    {
      x: 61,
      y: 61,
      word: "Happy",
      note: "Tempat sederhana yang membuat hati terasa tenang."
    },

    {
      x: 78,
      y: 76,
      word: "Tulus",
      note: "Satu senyum kecil kamu bisa mengubah seluruh suasana."
    },

    {
      x: 45,
      y: 35,
      word: "Lucuu",
      note: "Wajah kamu adalah semangat buat oranglain yang memandangnya."
    },

    {
      x: 52,
      y: 78,
      word: "Baik",
      note: "Karena setiap perjalanan meninggalkan cerita yang layak diingat."
    }

  ]

};


const $ = (s) =>
  document.querySelector(s);

const $$ = (s) =>
  [...document.querySelectorAll(s)];


const audio = $("#globalAudio");

let currentSong = 0;

let userInteracted = false;


/* ==================================================
   BACKGROUND STARS
   ================================================== */

const starsLayer = $("#starsLayer");

for (let i = 0; i < 140; i++) {

  const s = document.createElement("i");

  s.className = "star-bg";

  s.style.left =
    Math.random() * 100 + "%";

  s.style.top =
    Math.random() * 100 + "%";

  s.style.animationDelay =
    Math.random() * 3 + "s";

  s.style.opacity =
    (.25 + Math.random() * .75).toFixed(2);

  starsLayer.appendChild(s);
}


/* ==================================================
   CONFIG TEXT
   ================================================== */

$("#mainMessage").textContent =
  CONFIG.mainMessage;

$("#specialTitle").textContent =
  CONFIG.specialTitle;

$("#specialText").textContent =
  CONFIG.specialText;

$("#author").textContent =
  CONFIG.author;

$("#finalTitle").textContent =
  CONFIG.finalTitle;

$("#finalMessage").textContent =
  CONFIG.finalMessage;

$("#finalAuthor").textContent =
  CONFIG.finalAuthor;


/* ==================================================
   SECRET CODE
   ================================================== */

$("#check").addEventListener(
  "click",
  checkCode
);

$("#code").addEventListener(
  "keydown",
  e => {

    if (e.key === "Enter") {
      checkCode();
    }

  }
);


const lockedSections = [
  "#giftSection",
  "#message",
  "#memories",
  "#journey",
  "#constellation",
  "#specialWords",
  "#video",
  "#playlist",
  "#final"
];


lockedSections.forEach(id => {

  const section = $(id);

  if (section) {
    section.style.display = "none";
  }

});


function checkCode() {

  const input = $("#code");

  const err = $("#error");


  if (
    input.value
      .trim()
      .toLowerCase()
      ===
    CONFIG.secretCode.toLowerCase()
  ) {

    err.textContent = "";

    input.value = "";


    lockedSections.forEach(id => {

      const section = $(id);

      if (section) {

        section.style.removeProperty(
          "display"
        );

      }

    });


    setTimeout(() => {

      setupConstellation();

    }, 50);


    $("#giftSection").scrollIntoView({
      behavior: "smooth"
    });


    startMusic(0);


  } else {

    err.textContent =
      "Kode belum tepat. Coba lagi ✦";

    input.classList.remove("shake");

    void input.offsetWidth;

    input.classList.add("shake");

  }

}


/* ==================================================
   GIFT + FIREWORKS
   ================================================== */

$("#gift").addEventListener(
  "click",
  () => {

    const g = $("#gift");

    if (
      g.classList.contains("open")
    ) {
      return;
    }

    g.classList.add("open");

    fireworks();

    setTimeout(
      () =>
        $("#message").scrollIntoView({
          behavior: "smooth"
        }),
      900
    );

    startMusic(currentSong);

  }
);


const canvas =
  $("#fireworksCanvas");

const ctx =
  canvas.getContext("2d");


let fw = [];

let particles = [];

let fireworksRunning = false;

let fwTimer;


function resizeCanvas() {

  const dpr =
    window.devicePixelRatio || 1;

  canvas.width =
    innerWidth * dpr;

  canvas.height =
    innerHeight * dpr;

  canvas.style.width =
    innerWidth + "px";

  canvas.style.height =
    innerHeight + "px";

  ctx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

}


resizeCanvas();

addEventListener(
  "resize",
  resizeCanvas
);


function launch() {

  fw.push({

    x:
      Math.random() *
      innerWidth,

    y:
      innerHeight,

    target:
      70 +
      Math.random() *
      innerHeight *
      .45,

    v:
      7 +
      Math.random() * 4,

    h:
      Math.random() * 360

  });

}


function explode(f) {

  for (
    let i = 0;
    i < 70;
    i++
  ) {

    const a =
      Math.PI * 2 * i / 70;

    const s =
      1.5 +
      Math.random() * 4.5;

    particles.push({

      x: f.x,

      y: f.y,

      vx:
        Math.cos(a) * s,

      vy:
        Math.sin(a) * s,

      life: 1,

      dec:
        .012 +
        Math.random() * .012,

      h: f.h

    });

  }

}


function drawFireworks() {

  ctx.fillStyle =
    "rgba(4,4,15,.18)";

  ctx.fillRect(
    0,
    0,
    innerWidth,
    innerHeight
  );


  fw.forEach(
    (f, i) => {

      f.y -= f.v;

      ctx.fillStyle =
        `hsl(${f.h},90%,78%)`;

      ctx.fillRect(
        f.x,
        f.y,
        2,
        5
      );


      if (f.y <= f.target) {

        explode(f);

        fw.splice(i, 1);

      }

    }
  );


  particles.forEach(
    (p, i) => {

      p.x += p.vx;

      p.y += p.vy;

      p.vy += .035;

      p.life -= p.dec;


      ctx.fillStyle =
        `hsla(
          ${p.h},
          90%,
          78%,
          ${Math.max(p.life,0)}
        )`;


      ctx.fillRect(
        p.x,
        p.y,
        2,
        2
      );


      if (p.life <= 0) {
        particles.splice(i, 1);
      }

    }
  );


  if (fireworksRunning) {

    requestAnimationFrame(
      drawFireworks
    );

  }

}


function fireworks() {

  fireworksRunning = true;

  fw = [];

  particles = [];

  drawFireworks();

  clearInterval(fwTimer);

  fwTimer =
    setInterval(
      () =>
        fireworksRunning &&
        launch(),
      430
    );


  setTimeout(
    () => {

      clearInterval(
        fwTimer
      );

      fireworksRunning = false;

      setTimeout(
        () =>
          ctx.clearRect(
            0,
            0,
            innerWidth,
            innerHeight
          ),
        1800
      );

    },
    7000
  );

}


/* ==================================================
   GALLERY
   ================================================== */

$$(".photo").forEach(
  card => {

    const img =
      new Image();


    img.onload = () => {

      card.style.backgroundImage =
        `url("${card.dataset.img}")`;

      card.classList.add(
        "has-image"
      );

      const b =
        card.querySelector("b");

      if (b) {
        b.style.textShadow =
          "0 2px 12px #000";
      }

    };


    img.src =
      card.dataset.img;


    card.addEventListener(
      "click",
      () => {

        $("#modalImg").src =
          card.dataset.img;

        $("#modalTitle").textContent =
          card.dataset.title;

        $("#modalText").textContent =
          card.dataset.text;

        $("#modal")
          .classList
          .remove("hidden");

      }
    );

  }
);


function closeModal() {

  $("#modal")
    .classList
    .add("hidden");

}


$("#close").addEventListener(
  "click",
  closeModal
);


$(".shade").addEventListener(
  "click",
  closeModal
);


addEventListener(
  "keydown",
  e => {

    if (e.key === "Escape") {
      closeModal();
    }

  }
);


/* ==================================================
   MEMORY JOURNEY
   ================================================== */

const timeline =
  $("#timeline");


CONFIG.journey.forEach(
  item => {

    const el =
      document.createElement(
        "article"
      );

    el.className =
      "timeline-item";


    el.innerHTML = `
      <div class="timeline-date">
        ${item.date}
      </div>

      <h3>
        ${item.title}
      </h3>

      <p>
        ${item.text}
      </p>
    `;


    timeline.appendChild(el);

  }
);


/* ==================================================
   INTERACTIVE CONSTELLATION
   ================================================== */

const board =
  $("#constellationBoard");

const savedWords =
  $("#savedWords");

const STORAGE_KEY =
  "galaxy-special-words";


let saved =
  JSON.parse(
    localStorage.getItem(
      STORAGE_KEY
    ) || "[]"
  );


function renderSaved() {

  if (!saved.length) {

    savedWords.textContent =
      "Belum ada kata yang disimpan.";

    return;

  }


  savedWords.innerHTML =
    saved
      .map(
        w =>
          `<span class="saved-word">
            ✦ ${escapeHtml(w)}
          </span>`
      )
      .join("");

}


function escapeHtml(s) {

  return s.replace(
    /[&<>"']/g,
    c =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[c])
  );

}


function showToast(text) {

  const t =
    $("#toast");

  t.textContent =
    text;

  t.classList.add(
    "show"
  );


  clearTimeout(
    showToast.timer
  );


  showToast.timer =
    setTimeout(
      () =>
        t.classList.remove(
          "show"
        ),
      2200
    );

}


/*
 * Membuat constellation
 * dengan ukuran yang aman
 * untuk desktop dan HP.
 */

function setupConstellation() {

  if (!board) {
    return;
  }


  /*
   * Hapus bintang lama agar
   * tidak dibuat dua kali.
   */

  board
    .querySelectorAll(
      ".constellation-star"
    )
    .forEach(
      el => el.remove()
    );


  /*
   * Hapus SVG lama.
   */

  const oldSvg =
    board.querySelector(
      ".constellation-lines"
    );

  if (oldSvg) {
    oldSvg.remove();
  }


  /*
   * SVG garis constellation.
   */

  const constellationSvg =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );


  constellationSvg.setAttribute(
    "viewBox",
    "0 0 100 100"
  );


  constellationSvg.setAttribute(
    "preserveAspectRatio",
    "none"
  );


  constellationSvg.classList.add(
    "constellation-lines"
  );


  constellationSvg.style.cssText = `
    position:absolute;
    inset:0;
    width:100%;
    height:100%;
    pointer-events:none;
    opacity:.28;
    z-index:1;
  `;


  constellationSvg.innerHTML = `
    <g
      fill="none"
      stroke="#c8a9ff"
      stroke-width=".12"
    >

      <path
        d="M68 24 L82 42 L61 61 L78 76"
      />

      <path
        d="M68 24 L45 35 L61 61 L52 78"
      />

      <path
        d="M45 35 L82 42"
      />

    </g>
  `;


  board.appendChild(
    constellationSvg
  );


  /*
   * Buat bintang.
   */

  CONFIG.constellationWords.forEach(
    (item, idx) => {

      const b =
        document.createElement(
          "button"
        );


      b.type = "button";

      b.className =
        "constellation-star";


      /*
       * Posisi menggunakan persen,
       * jadi tetap responsive.
       */

      b.style.left =
        item.x + "%";

      b.style.top =
        item.y + "%";


      b.style.animationDelay =
        idx * .25 + "s";


      b.title =
        `${item.word} — klik untuk menyimpan`;


      b.setAttribute(
        "aria-label",
        `Bintang ${item.word}`
      );


      b.addEventListener(
        "click",
        () => {

          if (
            !saved.includes(
              item.word
            )
          ) {

            saved.push(
              item.word
            );


            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify(saved)
            );


            renderSaved();


            showToast(
              `"${item.word}" disimpan ✦`
            );

          } else {

            showToast(
              `"${item.word}" sudah ada di koleksi.`
            );

          }

        }
      );


      board.appendChild(b);

    }
  );

}


/*
 * Jalankan constellation
 * saat halaman dibuka jika
 * section sudah terlihat.
 */

setupConstellation();

renderSaved();


/*
 * Jika section baru dibuka
 * setelah kode dimasukkan,
 * buat ulang constellation.
 */

window.addEventListener(
  "resize",
  () => {

    if (
      $("#constellation").style.display !== "none"
    ) {

      setupConstellation();

    }

  }
);


$("#clearWords").addEventListener(
  "click",
  () => {

    saved = [];

    localStorage.removeItem(
      STORAGE_KEY
    );

    renderSaved();

    showToast(
      "Koleksi dibersihkan."
    );

  }
);


/* ==================================================
   PLAYLIST
   ================================================== */

function renderPlaylist() {

  $("#playlistList").innerHTML = "";


  CONFIG.playlist.forEach(
    (song, i) => {

      const card =
        document.createElement(
          "button"
        );


      card.type = "button";

      card.className =
        "song";


      card.innerHTML = `
        <div class="song-no">
          0${i + 1}
        </div>

        <h3>
          ${song.title}
        </h3>

        <p>
          ${song.artist}
        </p>
      `;


      card.addEventListener(
        "click",
        () =>
          playSong(i, true)
      );


      $("#playlistList")
        .appendChild(card);

    }
  );

}


function updatePlaylistUI() {

  $$(".song").forEach(
    (el, i) => {

      el.classList.toggle(
        "active",
        i === currentSong
      );

    }
  );


  const song =
    CONFIG.playlist[
      currentSong
    ];


  $("#dockSong").textContent =
    song.title;

  $("#dockArtist").textContent =
    song.artist;


  $("#playlistPlay").textContent =
    audio.paused
      ? "▶ Putar playlist"
      : "❚❚ Pause";

}


function loadSong(
  i,
  autoplay = false
) {

  currentSong =
    (
      i +
      CONFIG.playlist.length
    ) %
    CONFIG.playlist.length;


  audio.src =
    CONFIG.playlist[
      currentSong
    ].file;


  audio.load();


  updatePlaylistUI();


  if (autoplay) {
    startMusic(
      currentSong
    );
  }

}


async function startMusic(
  i = currentSong
) {

  if (i !== currentSong) {

    loadSong(
      i,
      false
    );

  }


  try {

    await audio.play();

    userInteracted = true;

    updatePlaylistUI();

  } catch (err) {

    showToast(
      "Klik tombol musik sekali untuk memulai suara ✦"
    );

  }

}


function playSong(
  i,
  autoplay = true
) {

  currentSong = i;


  audio.src =
    CONFIG.playlist[
      currentSong
    ].file;


  audio.load();


  updatePlaylistUI();


  if (autoplay) {

    startMusic(
      currentSong
    );

  }

}


audio.addEventListener(
  "ended",
  () =>
    playSong(
      currentSong + 1,
      true
    )
);


audio.addEventListener(
  "timeupdate",
  () => {

    const pct =
      audio.duration
        ? (
            audio.currentTime /
            audio.duration
          ) * 100
        : 0;


    $("#dockProgress")
      .style
      .width =
        pct + "%";

  }
);


audio.addEventListener(
  "play",
  updatePlaylistUI
);


audio.addEventListener(
  "pause",
  updatePlaylistUI
);


$("#dockPlay").addEventListener(
  "click",
  () =>
    audio.paused
      ? startMusic(currentSong)
      : audio.pause()
);


$("#dockNext").addEventListener(
  "click",
  () =>
    playSong(
      currentSong + 1,
      true
    )
);


$("#playlistPlay").addEventListener(
  "click",
  () =>
    audio.paused
      ? startMusic(currentSong)
      : audio.pause()
);


$("#playlistNext").addEventListener(
  "click",
  () =>
    playSong(
      currentSong + 1,
      true
    )
);


$("#playlistPrev").addEventListener(
  "click",
  () =>
    playSong(
      currentSong - 1,
      true
    )
);


$("#musicHint").addEventListener(
  "click",
  () =>
    startMusic(currentSong)
);


renderPlaylist();

loadSong(
  0,
  false
);


/* ==================================================
   AUTOPLAY
   ================================================== */

window.addEventListener(
  "load",
  () =>
    startMusic(0)
);


[
  "pointerdown",
  "keydown",
  "touchstart"
].forEach(
  evt => {

    window.addEventListener(
      evt,
      () => {

        if (!userInteracted) {

          startMusic(
            currentSong
          );

        }

      },
      {
        once: true,
        passive: true
      }
    );

  }
);