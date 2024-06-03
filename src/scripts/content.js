function loadContent(page) {
  const content = document.getElementById("main-content");
  let newContent = "";

  switch (page) {
    case "pengunjung":
      newContent = `
      <section class="pengunjung w-100 d-flex justify-content-center align-items-center m-auto" style="height: 100vh">
      <div class="text-center w-50 m-auto">
        <div class="header text-start m-auto">
          <h3 class="gradient-text fw-bold">Selamat Datang,</h3>
          <h5 class="fst-italic fw-medium">Silahkan mengisi form dibawah ini</h5>
        </div>
  
        <div class="form-texts text-start my-5">
          <form>
            <div class="mb-4">
              <label for="nama" class="form-label fw-medium">Nama Pengunjung</label>
              <input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan nama Anda" required />
            </div>
            <div class="mb-3">
              <label for="notelp" class="form-label fw-medium">Nomor Telepon</label>
              <input type="text" class="form-control" id="notelp" name="notelp" placeholder="Masukkan nomor telepon Anda" required />
            </div>
            <div class="d-flex mb-4 justify-content-between">
              <p class="fw-medium">Perwakilan Instansi?</p>
              <label class="switch">
                <input type="checkbox" id="toggleInstansi" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="mb-3">
              <label for="alamat" class="form-label fw-medium">Alamat</label>
              <input type="text" class="form-control" id="alamat" name="alamat" placeholder="Masukkan alamat Anda" required />
            </div>
            <div id="instansiField" class="mb-4" style="display: none;">
              <label for="instansi" class="form-label fw-medium">Nama Instansi</label>
              <input type="text" class="form-control" id="instansi" name="instansi" placeholder="Tuliskan nama instansi Anda"></input>
            </div>
            <div class="mb-4">
              <label for="tujuan" class="form-label fw-medium">Tujuan</label>
              <textarea class="form-control" id="tujuan" name="tujuan" rows="3" placeholder="Deskripsikan tujuan Anda" required></textarea>
            </div>
            <div class="mb-4">
              <label for="dengan" class="form-label fw-medium">Bertemu Dengan</label>
              <select class="form-select" id="dengan" name="dengan" required>
                <option selected disabled>-- Pilih Guru --</option>
                <option value="g1">Guru 1</option>
                <option value="g2">Guru 2</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="sign" class="form-label fw-medium">Tanda Tangan</label>
              <canvas id="signature-pad" class="border border-secondary" style="width: 100%; height: 200px"></canvas>
              <div class="d-flex justify-content-end w-100 mt-2">
                <button type="button" id="clear-signature" class="btn btn-danger">Hapus</button>
              </div>
            </div>
          </form>
        </div>
  
        <div class="button">
          <button type="submit" class="btn btn-primary w-100">Simpan</button>
        </div>
      </div>
    </section>
    `;
      history.pushState({ page: "pengunjung" }, "Pengunjung", "#pengunjung");
      break;
    case "operator":
      const today = new Date();
      const monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      const currentMonth = monthNames[today.getMonth()];
      const currentYear = today.getFullYear();

      newContent = `
      <section class="operator w-100 d-flex justify-content-center align-items-center m-auto" style="height: 100vh">
          <div class="text-center w-75 m-auto">
            <div class="d-flex justify-content-between align-items-center">
              <div class="header text-start">
                <h3 class="fw-bold">Operator</h3>
                <h5>${currentMonth} ${currentYear}</h5>
              </div>
              <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addressCardModal">
                <i class="fas fa-address-card fa-2x"></i>
              </button>

              <!-- Modal -->
              <div class="modal fade" id="addressCardModal" tabindex="-1" aria-labelledby="addressCardModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="addressCardModalLabel">Data Guru</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex flex-column align-items-center">
                      <div class="p-3 border border-dashed border-secondary rounded">
                        <h5>Tarik file disini</h5>
                        <i class="fas fa-arrow-alt-circle-up fa-4x text-secondary my-3"></i>
                        <p>Atau, pilih file secara manual 
                        <span id="fileInput" class="text-decoration-underline fst-italic fw-bold" style="cursor: pointer;">Disini</span></p>
                        <input type="file" id="fileSelector" style="display: none;" accept=".xls,.xlsx,.doc,.docx">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="download my-2 w-100 bg-primary-subtle rounded p-3">
              <p class="m-0">Operator yang terhormat, saat ini kita memasuki pekan unduh rekap. Silahkan unduh rekap kunjungan
                <span class="fst-italic text-decoration-underline text-primary fw-bold"><a href="#" class="pe-auto">di sini</a></span>.
              </p> 
            </div>

            <div class="scrollable-table-container">
              <table id="operator-table" class="table table-bordered table-striped text-start">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tanggal</th>
                    <th>Nama</th>
                    <th>No. Telp</th>
                    <th>Alamat</th>
                    <th>Instansi</th>
                    <th>Tujuan</th>
                    <th>Dengan</th>
                    <th>TTD</th>
                  </tr>
                </thead>
                <tbody>
                  ${generateTableRows(4)}
                </tbody>
              </table>
            </div>
          </div>
        </section>`;
      history.pushState({ page: "operator" }, "Operator", "#operator");
      break;
    default:
      newContent = `
            <section class="pengunjung w-100 d-flex justify-content-center align-items-center m-auto" style="height: 100vh">
             
            </section>`;
      history.pushState({ page: "pengunjung" }, "Pengunjung", "#pengunjung");
      break;
  }

  content.innerHTML = newContent;

  if (page === "pengunjung") {
    initializeSignaturePad();
  } else if (page === "operator") {
    adjustTableScrolling();
  }
}

function generateTableRows(count) {
  let rows = "";
  for (let i = 1; i <= count; i++) {
    rows += `
      <tr>
        <td>${i}</td>
        <td>2024-05-27</td>
        <td>John Doe</td>
        <td>1234567890</td>
        <td>Jl. Perusahaan No 123 rt.5 rw 10, Singosari</td>
        <td>Umbrella. Corp</td>
        <td>blablablablbalablabla</td>
        <td>Leon S. Kennedy s.Pd</td>
        <td>image ttd agak lebar y</td>
      </tr>
    `;
  }
  return rows;
}

function initializeSignaturePad() {
  $(function () {
    $("#toggleInstansi").on("change", function () {
      if ($(this).is(":checked")) {
        $("#instansiField").show();
      } else {
        $("#instansiField").hide();
      }
    });
  });

  var canvas = document.getElementById("signature-pad");
  var signaturePad = new SignaturePad(canvas);

  function resizeCanvas() {
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePad.clear();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  document
    .getElementById("clear-signature")
    .addEventListener("click", function () {
      signaturePad.clear();
    });
}

function adjustTableScrolling() {
  const table = document.getElementById("operator-table");
  const tbody = table.querySelector("tbody");
  const rows = tbody.querySelectorAll("tr");

  if (rows.length > 10) {
    table.classList.add("scrollable-table");
  } else {
    table.classList.remove("scrollable-table");
  }
}

function openFileManager() {
  const fileInput = document.getElementById("fileSelector");
  fileInput.click();
}

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileSelector");
  const fileSpan = document.getElementById("fileInput");
  fileSpan.addEventListener("click", function () {
    openFileManager();
  });

  fileInput.addEventListener("change", function () {
    const files = fileInput.files;
    if (files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop().toLowerCase();
      if (
        fileExtension === "xls" ||
        fileExtension === "xlsx" ||
        fileExtension === "doc" ||
        fileExtension === "docx"
      ) {
        console.log("Selected file:", fileName);
      } else {
        alert("Please select an Excel or Word file.");
        fileInput.value = "";
      }
    }
  });
});
