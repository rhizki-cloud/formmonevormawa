const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwwpOSnN7FjVEJezhpIMnFcaevcMounDYcS9z5aa5A-nnmsp7wlWxiFyLSg8KIpZtGTEw/exec";

const questions = [
  {
    id: "q1",
    text: "1. Memiliki Visi Misi",
    options: [
      ["Tidak memiliki Visi Misi", 0],
      ["Memiliki Visi Misi tetapi belum sesuai dengan realisme ormawa", 50],
      ["Memiliki Visi dan Misi dan sudah sesuai dengan realisme Ormawa", 100]
    ]
  },
  {
    id: "q2",
    text: "2. Memiliki AD/ART",
    options: [
      ["Tidak memiliki AD/ART", 0],
      ["Memiliki AD/ART tetapi tidak lengkap", 50],
      ["Memiliki AD/ART lengkap dan sesuai realisme Ormawa", 100]
    ]
  },
  {
    id: "q3",
    text: "3. Memiliki Buku Induk / Daftar Inventaris Ormawa",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi belum lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q4",
    text: "4. Memiliki Arsip Proposal dan LPJ",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q5",
    text: "5. Ketersediaan Buku Agenda Surat Masuk dan Keluar",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q6",
    text: "6. Ketersediaan Buku Kas dan Pencatatan Transaksi",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q7",
    text: "7. Memiliki Tata Tertib Organisasi",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap dan tidak efektif", 50],
      ["Memiliki tata tertib jelas, lengkap, dan efektif", 100]
    ]
  },
  {
    id: "q8",
    text: "8. Jumlah Anggota Aktif",
    options: [
      ["Semua anggota aktif 100%", 100],
      ["Anggota aktif >75%", 75],
      ["Anggota aktif >50%", 50],
      ["Anggota aktif >25%", 25],
      ["Anggota aktif <25%", 0]
    ]
  },
  {
    id: "q9",
    text: "9. Jumlah kegiatan terlaksana dalam 1 tahun",
    options: [
      ["Kegiatan 100%", 100],
      ["Kegiatan 80%", 80],
      ["Kegiatan 50-75%", 60],
      ["Kegiatan 25-50%", 40],
      ["Kegiatan 0-25%", 0]
    ]
  },
  {
    id: "q10",
    text: "10. Level Kegiatan",
    options: [
      ["Internasional", 100],
      ["Nasional", 80],
      ["Wilayah", 60],
      ["Lokal", 40],
      ["Universitas", 20]
    ]
  },
  {
    id: "q11",
    text: "11. Keterlibatan Mahasiswa dalam Kegiatan",
    options: [
      [">400 orang", 100],
      [">300 orang", 80],
      [">200 orang", 60],
      [">100 orang", 40],
      ["<50 orang", 20]
    ]
  },
  {
    id: "q12",
    text: "12. Keikutsertaan dalam Kompetisi",
    options: [
      ["Internasional", 100],
      ["Nasional", 80],
      ["Wilayah", 60],
      ["Lokal", 40],
      ["Universitas", 20]
    ],
    extra: "kompetisiText"
  },
  {
    id: "q13",
    text: "13. Capaian Prestasi",
    options: [
      ["Internasional", 100],
      ["Nasional", 80],
      ["Wilayah", 60],
      ["Lokal", 40],
      ["Universitas", 20],
      ["Tidak ada", 0]
    ],
    extra: "prestasiText"
  },
  {
    id: "q14",
    text: "14. Kelengkapan Rencana Program Kerja",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q15",
    text: "15. Kelengkapan Pelaporan Keuangan",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q16",
    text: "16. Laporan Prestasi",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q17",
    text: "17. Evaluasi Kinerja",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q18",
    text: "18. Laporan Pertanggungjawaban Organisasi",
    options: [
      ["Tidak memiliki", 0],
      ["Memiliki tetapi tidak lengkap", 50],
      ["Memiliki dan lengkap", 100]
    ]
  },
  {
    id: "q19",
    text: "19. Tingkat Optimalisasi Penggalangan Dana",
    options: [
      ["100% didanai sponsor", 100],
      [">75% didanai sponsor", 80],
      [">50% didanai sponsor", 60],
      [">25% didanai sponsor", 40],
      ["<25% didanai sponsor", 20]
    ]
  },
  {
    id: "q20",
    text: "20. Tingkat Partisipasi Rapat Para Pimpinan Ormawa",
    options: [
      ["12 kali minimal", 100],
      ["10 kali minimal", 80],
      ["8 kali minimal", 60],
      ["6 kali minimal", 40],
      ["4 kali minimal", 20]
    ]
  }
];

function getKategori(avg) {
  if (avg >= 85) return "A - Sehat dengan pujian";
  if (avg >= 70) return "B - Sehat dengan kebaikan";
  if (avg >= 50) return "C - Sakit";
  return "D - Mati";
}

function renderQuestions() {
  const container = document.getElementById("questionContainer");

  container.innerHTML = `
    <div class="section-header">
      <h2>Instrumen Penilaian</h2>
      <p>Pilih satu jawaban pada setiap indikator berikut.</p>
    </div>
  `;

  questions.forEach((q) => {
    const questionItem = document.createElement("div");
    questionItem.className = "question-item";

    let html = `<h3>${q.text}</h3>`;
    html += `<div class="options-group">`;

    q.options.forEach((opt, index) => {
      const radioId = `${q.id}_${index}`;

      html += `
        <label class="option-card" for="${radioId}">
          <input
            type="radio"
            id="${radioId}"
            name="${q.id}"
            value="${opt[0]}"
            data-score="${opt[1]}"
            required
          />
          <div class="option-content">
            <span class="option-text">${opt[0]}</span>
          </div>
        </label>
      `;
    });

    html += `</div>`;

    if (q.extra === "kompetisiText") {
      html += `
        <div class="form-group" style="margin-top:16px;">
          <label for="kompetisiText">Sebutkan kompetisi</label>
          <textarea
            id="kompetisiText"
            rows="2"
            placeholder="Tuliskan nama kompetisi yang diikuti"
          ></textarea>
        </div>
      `;
    }

    if (q.extra === "prestasiText") {
      html += `
        <div class="form-group" style="margin-top:16px;">
          <label for="prestasiText">Sebutkan prestasi</label>
          <textarea
            id="prestasiText"
            rows="2"
            placeholder="Tuliskan prestasi yang diperoleh"
          ></textarea>
        </div>
      `;
    }

    questionItem.innerHTML = html;
    container.appendChild(questionItem);
  });
}

function ambilJawaban() {
  let total = 0;
  const hasil = {};

  for (const q of questions) {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);

    if (!selected) {
      throw new Error(`Jawaban untuk "${q.text}" belum dipilih.`);
    }

    hasil[q.id] = selected.value;
    total += Number(selected.dataset.score);
  }

  const rataRata = total / questions.length;
  const kategori = getKategori(rataRata);

  hasil.totalNilai = total;
  hasil.rataRata = rataRata.toFixed(2);
  hasil.kategori = kategori;

  return hasil;
}

function tampilkanHasil(payload) {
  document.getElementById("totalNilai").textContent = payload.totalNilai;
  document.getElementById("rataRata").textContent = payload.rataRata;
  document.getElementById("kategori").textContent = payload.kategori;
}

async function kirimKeSpreadsheet(payload) {
  const response = await fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    redirect: "follow"
  });

  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error("Respons dari server bukan JSON: " + text);
  }
}

document.getElementById("penilaianForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const statusKirim = document.getElementById("statusKirim");

  try {
    const jawaban = ambilJawaban();

    const payload = {
      namaOrmawa: document.getElementById("namaOrmawa").value.trim(),
      diisiOleh: document.getElementById("diisiOleh").value.trim(),
      jumlahPengurus: document.getElementById("jumlahPengurus").value.trim(),
      jumlahKegiatanText: document.getElementById("jumlahKegiatanText").value.trim(),
      totalAnggaran: document.getElementById("totalAnggaran").value.trim(),
      kompetisiText: document.getElementById("kompetisiText")?.value.trim() || "",
      prestasiText: document.getElementById("prestasiText")?.value.trim() || "",
      catatan: document.getElementById("catatan").value.trim() || "",
      ...jawaban
    };

    tampilkanHasil(payload);
    statusKirim.textContent = "Mengirim data ke spreadsheet...";

    const result = await kirimKeSpreadsheet(payload);

    if (result.success) {
      statusKirim.textContent = "Data berhasil dikirim ke spreadsheet.";
    } else {
      statusKirim.textContent = "Gagal mengirim: " + (result.message || "Terjadi kesalahan.");
    }
  } catch (error) {
    statusKirim.textContent = "Gagal mengirim data.";
    alert("Gagal mengirim data: " + error.message);
  }
});

renderQuestions();