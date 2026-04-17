function tampilkanRamalan() {
    let zodiak = document.getElementById("pilihZodiak").value;
    let hasil = document.getElementById("hasil");

    let ramalan = {
        aries: "Hari ini kamu penuh semangat, tapi jangan terlalu emosional.",
        taurus: "Fokus pada tujuanmu, hasilnya akan terlihat.",
        gemini: "Komunikasi adalah kunci hari ini.",
        cancer: "Perasaanmu sensitif, jaga mood ya.",
        leo: "Kamu akan jadi pusat perhatian hari ini.",
        virgo: "Detail kecil akan membawa keberuntungan.",
        libra: "Cari keseimbangan dalam keputusan.",
        scorpio: "Intuisi kamu sangat kuat hari ini.",
        sagitarius: "Petualangan baru menunggumu.",
        capricorn: "Kerja kerasmu mulai membuahkan hasil.",
        aquarius: "Ide kreatifmu sangat berguna hari ini.",
        pisces: "Ikuti kata hati, jangan ragu."
    };

    if (zodiak === "") {
        hasil.innerHTML = "Pilih zodiak dulu!";
    } else {
        hasil.innerHTML = "✨ Ramalan: " + ramalan[zodiak];
    }
}
