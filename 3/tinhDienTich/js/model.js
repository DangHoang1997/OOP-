class Sharp {
    // lớp cha
    constructor(ten, mauNen, chieuDai, chieuCao) {
      this.ten = ten;
      this.mauNen = mauNen;
      this.chieuDai = chieuDai;
      this.chieuCao = chieuCao;
    }
    tinhDienTich() {}
  }
  
  export class Square extends Sharp {
    constructor(canhHinhVuong, ten, mauNen, chieuDai, chieuCao) {
      super(ten, mauNen, chieuDai, chieuCao);
      this.canhHinhVuong = canhHinhVuong;
    }
    tinhDienTich() {
      return this.canhHinhVuong * this.canhHinhVuong;
    }
  }
  
  export class Rectangle extends Sharp {
    constructor(canhDai, canhRong, ten, mauNen, chieuDai, chieuCao) {
      super(ten, mauNen, chieuDai, chieuCao);
      this.canhDai = canhDai;
      this.canhRong = canhRong;
    }
    tinhDienTich() {
      return this.canhDai * this.canhRong;
    }
  }
  export class Circle extends Sharp {
    constructor(banKinh, ten, mauNen, chieuDai, chieuCao) {
      super(ten, mauNen, chieuDai, chieuCao);
      this.banKinh = banKinh;
    }
    tinhDienTich() {
      return Math.PI * this.banKinh * this.banKinh;
    }
  }
  