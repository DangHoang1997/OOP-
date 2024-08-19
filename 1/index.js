class ChuyenXe{
    // lop cha
    constructor(soXe,DriverName,maSoChuyen,doanhThu){
        this.soXe = soXe;
        this.DriverName = DriverName;
        this.maSoChuyen = maSoChuyen;
        this.doanhThu = doanhThu;
    }
}

// lop con 
class ChuyenXeNoiThanh extends ChuyenXe{
    constructor (soTuyen,soKmDiDuoc,soXe,tenTaiXe,maSoChuyen,doanhThu){
        super(soXe,tenTaiXe,maSoChuyen,doanhThu);
        this.soTuyen = soTuyen;
        this.soKmDiDuoc = soKmDiDuoc;
    }
}

let xeBus1 = new ChuyenXeNoiThanh(
   
    "tuyen 1",
    100,
    "29A-1234",
    "Nguyen Van A",
    "123",
    1000000,
)
console.log('xeBus1: ', xeBus1);

class ChuyenXeNgoaiThanh extends ChuyenXe{
    constructor (noiDen,soNgayDiDuoc,soXe,tenTaiXe,maSoChuyen,doanhThu){
        super(soXe,tenTaiXe,maSoChuyen,doanhThu);
        this.noiDen = noiDen;
        this.soNgayDiDuoc = soNgayDiDuoc;
    }
}
let xeDaLat1 = new ChuyenXeNgoaiThanh(
    
    "Da Lat",
    3,
    "34B-5678",
    "Nguyen Van B",
    "456",
    2000000,
)
console.log('xeDaLat1: ', xeDaLat1);

