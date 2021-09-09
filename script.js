var data;

var presensi;
var tugas;
var uts;
var uas;
var jumlah;
var grade;

data = () => {
    var nama = document.getElementById('nama_in').value;
    var m1 = document.getElementById('n1').value;
    var m2 = document.getElementById('n2').value;
    var m3 = document.getElementById('n3').value;
    var m4 = document.getElementById('n4').value;

    presensi    = ((m1/14)*0.1)*100;
    tugas       = 0.2*m2;
    uts         = 0.3*m3;
    uas         = 0.4*m4;

    jumlah      = presensi+tugas+uts+uas;

    grade = jumlah >= 80 ? 'A' : (jumlah >= 70 ? 'B' : (jumlah >= 59 ? 'C' : (jumlah >= 50 ? 'D' : 'E')));
    
    //Output
    document.getElementById("nama_out").innerHTML="Nama : "+nama;
    document.getElementById("presensi_out").innerHTML="Total Presensi : "+m1;
    document.getElementById("tugas_out").innerHTML="Nilai Tugas : "+m2;
    document.getElementById("uts_out").innerHTML="Nilai UTS : "+m3;
    document.getElementById("uas_out").innerHTML="Nilai UAS : "+m4;

    //Note
    document.getElementById("note").innerHTML="Note : ";
    document.getElementById("ket_presensi").innerHTML="Nilai Presensi (10%) : "+presensi;
    document.getElementById("ket_tugas").innerHTML="Nilai Tugas (20%) : "+tugas;
    document.getElementById("ket_uts").innerHTML="Niai UTS (30%) : "+uts;
    document.getElementById("ket_uas").innerHTML="Nilai UAS (40%) : "+uas;

    //Grade Akhir
    document.getElementById("jumlah_out").innerHTML="Nilai Akhir : "+jumlah;
    document.getElementById("grade_out").innerHTML="Grade : "+grade;
}