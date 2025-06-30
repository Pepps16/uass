// Login validation
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            if (user === "admin" && pass === "1234") {
                alert("Login berhasil!");
                document.getElementById("loginError").textContent = "";
            } else {
                document.getElementById("loginError").textContent = "Username atau password salah.";
            }
        });
    }

    const transaksiForm = document.getElementById("transaksiForm");
    if (transaksiForm) {
        transaksiForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const jumlah = document.getElementById("jumlah").value;
            const kategori = document.getElementById("kategori").value;
            const error = document.getElementById("transaksiError");

            if (!nama || !jumlah || !kategori) {
                error.textContent = "Semua field harus diisi.";
                return;
            }

            error.textContent = "";
            const tabel = document.getElementById("tabelTransaksi");
            const row = tabel.insertRow();
            row.insertCell(0).textContent = nama;
            row.insertCell(1).textContent = jumlah;
            row.insertCell(2).textContent = kategori;

            transaksiForm.reset();
        });
    }
})