// ==UserScript==
// @name         Ascenly (Gemini)
// @version      1.0.1
// @match        *://*.edgenuity.com/*
// @match        *://://edgenuity.com*
// @connect      generativelanguage.googleapis.com
// @connect      https://api.groq.com/openai/v1/chat/completions
// @connect      https://api.cerebras.ai/v1/chat/completions
// @connect      localhost
// @connect      127.0.0.1
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @updateURL    https://raw.githubusercontent.com/ilovepandas7384/Ascenly-crack/refs/heads/main/main.js
// @downloadURL  https://raw.githubusercontent.com/ilovepandas7384/Ascenly-crack/refs/heads/main/main.js
// @run-at       document-start
// ==/UserScript==
"use strict";

var cxuqDK;
var wQolDY;
var ldXU2Ow;
var Q16EmFG;
var vDlnfHc;
var yctckmj;
var l06wN2S;
var cKRkdn;
var oOSpQ0F;
var AI_PROVIDERS;
const yVKAai = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 127, 128, 133, 141, 146, 147, 158, 165, null, 171, 173, 166, 175, 176, 185, ",", 202, 219, 223, 226, 228, 239, 246, 232, 249, 250, 254, 261, 263, 279, 291, 318, 320, 317, 311, 322, 312, "px", 332, 333, 334, 335, 338, 339, 340, 341, 323, 345, 342, 362, 371, 368, 361, 373, 385, 386, 388, 374, 375, 376, 392, 406, 416, 408, 409, 419, 425, 417, 410, 424, "u", 442, 402, 403, 391, 379, 452, 355, 356, 466, 351, 477, 478, 481, 496, 215, 534, 535, 536, 270, 548, ", ", 558, "%)", 562, 567, 568, "ms", 581, 582, 584, "id", "kb", "h", 598, 599, 600, 601, 533, "x", 40, "y", 618, 585, 619, 623, 631, 620, 625, 617, 624, 635, 3, "s", 638, 639, 630, 607, 608, 616, 636, 611, 641, 650, 33554432, 2, 67108864, 664, 658, 672, 32768, 688, 670, 696, 695, 691, "iv", "ct", 683, 429, 727, 708, 711, 401, 200, 300, 714, 500, 737, 731, 712, 713, 740, 706, 751, 752, "ok", 762, 702, 660, 763, 766, 704, 5000, 765, 613, 774, 773, 614, 698, "0", 656, 615, 689, 690, 775, 16, 776, 771, 785, 4, false, 760, 809, 812, 779, 820, 829, 784, 786, 810, 833, 838, 830, 831, 832, 834, 835, 821, 822, 819, 825, 840, 842, 667, 797, 666, " ", 772, 858, 699, 845, 850, 846, 852, 659, 861, 657, 10, 661, 865, 887, 889, 190, 189, 187, 191, 57, ")", 48, 188, 32, 685, 848, 795, 849, 896, 897, 898, 860, 643, 872, 885, 886, 888, 867, 868, 869, 870, 907, true, 256, 100, 847, 871, 50, 400, 877, 878, 879, 880, 881, 884, 890, 916, 921, 856, 922, 827, 828, 928, 893, "\"]", 839, 705, 768, 941, 836, 947, 591, 632, undefined, "-", "q_", 948, 967, "/", 863, 964, 965, 25, 10000, 826, 971, 972, 976, 546, 977, 974, 973, 970, 637, 640, 1000, 60000, 968, 992, "…", 994, 621, 950, 952, 957, 960, 953, 2000, 904, 1014, 966, 853, 954, 1038, 1011, 920, 770, "i", 915, 1046, 1058, 1050, 1062, "?", 1066, 1068, 996, 1061, 1067, 1073, 15000, 854, 5, 1075, 60, 1063, 3000, 1070, 1010, 1065, ".", 512, 15, 1023, 192, 31, 224, 240, 18, 24, 19, 64, 9, 65535, 1099, 1013, 626, 65536, 687, 1108, 1119, 1121, 1006, 1084, 782, 627, 1131, 1135, 645, 1136, 1137, 857, 1139, 595, 628, 629, 1048, 642, 1155, 1115, 811, 1122, 1028, 1156, 844, 622, 1054, 1074, 1053, 1051, 1167, 1168, 905, 703, 949, 1166, 946, 1178, 1022, 1015, 1016, 1174, 1161, 1025, 1026, 1031, 1032, 1033, 1034, 1116, 1036, 1190, 781, 1157, 1160, 1021, 1195, 1196, 1199, 1202, 1151, 1208, 1209, 1162, 1203, 837, 1214, 1215, 1154, 1217, 1012, 1216, 1236, 1223, 1242, 1205, 1245, 806, 1211, 634, 1237, 663, 1271, 1200, 1279, 1247, 1194, 1180, 1290, 1291, 1292, 1275, "p", 1230, 1219, 1302, "h2", 1298, 1309, 1267, 1270, 1182, 1314, 876, 799, 1332, 1331, 1328, 1256, 612, 1241, 1350, 1367, 1357, 1365, 1318, 1372, 195, 1385, 1386, 1380, 789, 1341, 1294, 597, 1393, 1394, 593, 594, 1412, 1413, 544, 895, 610, 609, 1233, 1395, 1396, 1433, 1258, 1259, 1260, 1086, 951, 1443, 596, 1449, 1401, 1388, 1272, "a", 1299, 1300, 1381, 1382, 1383, 1384, 524, 220, 606, 1193, 1485, 1192];
function KhDI0Qx(cxuqDK) {
  var wQolDY = "M|NfOTBGALRhH89$^nq7[ei5!KQ\"luoZ]2*d}F(_r~)=Uvwy0gP+W:x;C3XEmspSk@&,b.D#J{jzcI>14YV6at%?<`/";
  var ldXU2Ow;
  var Q16EmFG;
  var vDlnfHc;
  var yctckmj;
  var l06wN2S;
  var cKRkdn;
  var oOSpQ0F;
  b07TQe(ldXU2Ow = "" + (cxuqDK || ""), Q16EmFG = ldXU2Ow.length, vDlnfHc = [], yctckmj = 0, l06wN2S = 0, cKRkdn = -1);
  for (oOSpQ0F = 0; oOSpQ0F < Q16EmFG; oOSpQ0F++) {
    var KhDI0Qx = wQolDY.indexOf(ldXU2Ow[oOSpQ0F]);
    if (KhDI0Qx === -1) {
      continue;
    }
    if (cKRkdn < 0) {
      cKRkdn = KhDI0Qx;
    } else {
      b07TQe(cKRkdn += KhDI0Qx * 91, yctckmj |= cKRkdn << l06wN2S, l06wN2S += (cKRkdn & 8191) > 88 ? 13 : 14);
      do {
        b07TQe(vDlnfHc.push(yctckmj & 255), yctckmj >>= 8, l06wN2S -= 8);
      } while (l06wN2S > 7);
      cKRkdn = -1;
    }
  }
  if (cKRkdn > -1) {
    vDlnfHc.push((yctckmj | cKRkdn << l06wN2S) & 255);
  }
  return a5I4LAb(vDlnfHc);
}
function HoK2xH(ldXU2Ow) {
  if (typeof cxuqDK[ldXU2Ow] === "undefined") {
    return cxuqDK[ldXU2Ow] = KhDI0Qx(wQolDY[ldXU2Ow]);
  }
  return cxuqDK[ldXU2Ow];
}
b07TQe(cxuqDK = {}, wQolDY = []);
function dHhm7IJ() {
  var cxuqDK = [function () {
    return globalThis;
  }, function () {
    return global;
  }, function () {
    return window;
  }, function () {
    return new Function("return this")();
  }];
  var wQolDY;
  var ldXU2Ow;
  var Q16EmFG;
  b07TQe(wQolDY = undefined, ldXU2Ow = []);
  try {
    b07TQe(wQolDY = Object, ldXU2Ow.push("".__proto__.constructor.name));
  } catch (e) {}
  cm6vdz: for (Q16EmFG = 0; Q16EmFG < cxuqDK.length; Q16EmFG++) {
    try {
      var vDlnfHc;
      wQolDY = cxuqDK[Q16EmFG]();
      for (vDlnfHc = 0; vDlnfHc < ldXU2Ow.length; vDlnfHc++) {
        if (typeof wQolDY[ldXU2Ow[vDlnfHc]] === "undefined") {
          continue cm6vdz;
        }
      }
      return wQolDY;
    } catch (e) {}
  }
  return wQolDY || this;
}
b07TQe(ldXU2Ow = dHhm7IJ() || {}, Q16EmFG = ldXU2Ow.TextDecoder, vDlnfHc = ldXU2Ow.Uint8Array, yctckmj = ldXU2Ow.Buffer, l06wN2S = ldXU2Ow.String || String, cKRkdn = ldXU2Ow.Array || Array, oOSpQ0F = function () {
  var cxuqDK = new cKRkdn(128);
  var wQolDY;
  var ldXU2Ow;
  b07TQe(wQolDY = l06wN2S.fromCodePoint || l06wN2S.fromCharCode, ldXU2Ow = []);
  return function (Q16EmFG) {
    var vDlnfHc;
    var yctckmj;
    var cKRkdn;
    var oOSpQ0F;
    b07TQe(yctckmj = undefined, cKRkdn = Q16EmFG.length, ldXU2Ow.length = 0);
    for (oOSpQ0F = 0; oOSpQ0F < cKRkdn;) {
      b07TQe(yctckmj = Q16EmFG[oOSpQ0F++], yctckmj <= 127 ? vDlnfHc = yctckmj : yctckmj <= 223 ? vDlnfHc = (yctckmj & 31) << 6 | Q16EmFG[oOSpQ0F++] & 63 : yctckmj <= 239 ? vDlnfHc = (yctckmj & 15) << 12 | (Q16EmFG[oOSpQ0F++] & 63) << 6 | Q16EmFG[oOSpQ0F++] & 63 : l06wN2S.fromCodePoint ? vDlnfHc = (yctckmj & 7) << 18 | (Q16EmFG[oOSpQ0F++] & 63) << 12 | (Q16EmFG[oOSpQ0F++] & 63) << 6 | Q16EmFG[oOSpQ0F++] & 63 : (vDlnfHc = 63, oOSpQ0F += 3), ldXU2Ow.push(cxuqDK[vDlnfHc] ||= wQolDY(vDlnfHc)));
    }
    return ldXU2Ow.join("");
  };
}());
function a5I4LAb(cxuqDK) {
  if (typeof Q16EmFG !== "undefined" && Q16EmFG) {
    return new Q16EmFG().decode(new vDlnfHc(cxuqDK));
  } else if (typeof yctckmj !== "undefined" && yctckmj) {
    return yctckmj.from(cxuqDK).toString("utf-8");
  } else {
    return oOSpQ0F(cxuqDK);
  }
}
function _iud1X(ldXU2Ow, Q16EmFG, vDlnfHc) {
  function yctckmj(ldXU2Ow) {
    var Q16EmFG = "[GEaJOIMWSBYNqAfbn=o/3d>yg<|9+xwHDZ)`*&TFhiQs5U8^Vv2m!XpCkru#P@R?lj(~K$zet0.{4c7]L_\"6}%,1:;";
    var yctckmj;
    var l06wN2S;
    var cxuqDK;
    var wQolDY;
    var cKRkdn;
    var oOSpQ0F;
    var KhDI0Qx;
    b07TQe(yctckmj = "" + (ldXU2Ow || ""), l06wN2S = yctckmj.length, cxuqDK = [], wQolDY = 0, cKRkdn = 0, oOSpQ0F = -1);
    for (KhDI0Qx = 0; KhDI0Qx < l06wN2S; KhDI0Qx++) {
      var HoK2xH = Q16EmFG.indexOf(yctckmj[KhDI0Qx]);
      if (HoK2xH === -1) {
        continue;
      }
      if (oOSpQ0F < 0) {
        oOSpQ0F = HoK2xH;
      } else {
        b07TQe(oOSpQ0F += HoK2xH * 91, wQolDY |= oOSpQ0F << cKRkdn, cKRkdn += (oOSpQ0F & 8191) > 88 ? 13 : 14);
        do {
          b07TQe(cxuqDK.push(wQolDY & 255), wQolDY >>= 8, cKRkdn -= 8);
        } while (cKRkdn > 7);
        oOSpQ0F = -1;
      }
    }
    if (oOSpQ0F > -1) {
      cxuqDK.push((wQolDY | oOSpQ0F << cKRkdn) & 255);
    }
    return a5I4LAb(cxuqDK);
  }
  function l06wN2S(ldXU2Ow) {
    if (typeof cxuqDK[ldXU2Ow] === "undefined") {
      return cxuqDK[ldXU2Ow] = yctckmj(wQolDY[ldXU2Ow]);
    }
    return cxuqDK[ldXU2Ow];
  }
  switch (ldXU2Ow) {
    case "oE1nfrB":
      return Q16EmFG + vDlnfHc;
  }
}
function OyEKmUI() {}
function n2eRlb() {}
function b07TQe() {
  b07TQe = function () {};
}
(() => {
  var ldXU2Ow;
  var Q16EmFG;
  var vDlnfHc;
  var yctckmj;
  var l06wN2S;
  var cKRkdn;
  var oOSpQ0F;
  var KhDI0Qx;
  var HoK2xH;
  var dHhm7IJ;
  var IoZT_i;
  var fPrXnx;
  var sgFh6d;
  var i9tUoZ;
  var sbTeKU;
  var XMhsLe;
  var NpE97bV;
  var Uyguw1;
  var MV3WKRa;
  var WHivJOf;
  var Z6bwiaJ;
  var cWVaZN;
  var VwxGquh;
  var qZk6aKD;
  var u8aCdFu;
  var NOWx2r;
  var vV9IQnH;
  var bLxPxuA;
  var jKnOri;
  var HldUnBJ;
  var Kq6MDI;
  var YyLqY7;
  var t3NVDC;
  var iE_IrT;
  var CEllbSn;
  var Mh_4FfG;
  var x2_aaGQ;
  var t3QQhTw;
  var eWiK23J;
  var E_acyNp;
  var QYd_9Dr;
  var mW7GYp0;
  var WVEmrT;
  var cy2gjp;
  var BbNEmN;
  var ARJTd9Z;
  var YPQyBa;
  var cSWkCRE;
  var TmC7pJ;
  var UEmki2Q;
  var GZ24GI6;
  var yt3q1m;
  var QdemOlT;
  var VoJYve;
  var BGtSzH;
  var RVWUXz;
  var CYkeucU;
  var tqsjV9r;
  var F7F6RBB;
  var mxtpIbz;
  var tkD5ZbK;
  var toEw_S;
  var L3V2K0U;
  var Ene7WFT;
  var m2nk1T;
  var FAOAWxS;
  var iKyU_no;
  var NQi2tfb;
  var lgF_C2m;
  var mZh05HF;
  var ibeCDQ;
  var hxh87Em;
  var L7Smbsx;
  var Tsh3fDG;
  var RcQm9H7;
  var PxpnFL;
  var hoT5a_S;
  var c5WZXm;
  var glUVlo;
  var gVUXIr;
  var y1MYJYd;
  var pY2ppq;
  var bk2P7DI;
  var qitKle;
  var jngaNZS;
  var zZDosQY;
  var iwwLdG;
  var OA5hTl;
  var QHK6nSo;
  var nMMCZJO;
  var RtFIM3;
  var bIYo7wX;
  var eATa8m;
  var wF2dfzS;
  var yibUmdj;
  var RWfoMQ9;
  var i7EDXk;
  var Q3AzFB;
  var xJ7VAqj;
  var auzIVgW;
  var GWQRi9a;
  var tl8V5lj;
  var iOEuYC;
  var vB1E3s;
  var YNX3NJ;
  var deyC25;
  var fjdMIu;
  var aNQjrC1;
  var Amuw19;
  var P0sEBU;
  var sz1N2k;
  var gpmTKw;
  var xoHwfA;
  var GcP1UO;
  var CkACXuZ;
  var zD7fqU;
  var g8j5uEd;
  var i45R9jC;
  var AnYRwn;
  var Yb34ms;
  var Mu6Gm6;
  var FLmfeTH;
  var VOtkl4;
  var cnU_51A;
  var pI9jMV;
  var u2LkB3;
  var zwkjR6;
  var UI6Myi;
  var _r7zwkD;
  var hPJ2at;
  var UVUiujC;
  var pwfd53f;
  var NLqyq7q;
  var gd1IgC;
  var CpXhrO;
  var pMTL2ov;
  var AnmvBw;
  var GkKJsk;
  var ekRJR4;
  var Ke258Jt;
  var PFGMLg;
  var G2R11XI;
  var XihXUMd;
  var u_86Uk;
  var CQzjQHp;
  var tV4VRe;
  var yVFkIGo;
  var SsJQSyj;
  var DsnoBw;
  var AtQueI;
  var z2zdKH;
  var aRyotgD;
  var LU7azh;
  var VBmVXwu;
  var N_t3c3D;
  var XPqnA2;
  var WxV1WW8;
  var JdDoXRc;
  var pO3xEuC;
  var BmkBnEs;
  var oUaf8p;
  var A3Mpjw9;
  var QVwWa51;
  var vspHDEw;
  var XITjaR;
  var whkOJP6;
  function er0VYsq(ldXU2Ow) {
    var Q16EmFG = "/2)}*`w:.$#+8k\"AWPRpnKxyoBGi1lIM!(SH9XNj{[,rEO~m;6qtV<Lb@Uhs5F%C0dfvQ&a7u?=4zZ>3gD]Ye|T^c_J";
    var vDlnfHc;
    var yctckmj;
    var l06wN2S;
    var cKRkdn;
    var oOSpQ0F;
    var KhDI0Qx;
    var HoK2xH;
    b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
    for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
      var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
      if (dHhm7IJ === -1) {
        continue;
      }
      if (KhDI0Qx < 0) {
        KhDI0Qx = dHhm7IJ;
      } else {
        b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
        do {
          b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
        } while (oOSpQ0F > 7);
        KhDI0Qx = -1;
      }
    }
    if (KhDI0Qx > -1) {
      l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
    }
    return a5I4LAb(l06wN2S);
  }
  function vAVzT7(ldXU2Ow) {
    if (typeof cxuqDK[ldXU2Ow] === "undefined") {
      return cxuqDK[ldXU2Ow] = er0VYsq(wQolDY[ldXU2Ow]);
    }
    return cxuqDK[ldXU2Ow];
  }
  b07TQe(ldXU2Ow = Object.create(null), Q16EmFG = undefined);
  function nUVzU8R(vDlnfHc, yctckmj, l06wN2S, cKRkdn = {}, oOSpQ0F, KhDI0Qx, HoK2xH, dHhm7IJ) {
    if (!KhDI0Qx) {
      KhDI0Qx = function (vDlnfHc) {
        if (typeof cxuqDK[vDlnfHc] === "undefined") {
          return cxuqDK[vDlnfHc] = oOSpQ0F(wQolDY[vDlnfHc]);
        }
        return cxuqDK[vDlnfHc];
      };
    }
    if (!oOSpQ0F) {
      oOSpQ0F = function (vDlnfHc) {
        var yctckmj = "DyAbmstSBdPYiNILJZfRngKjEcOUopH0?lC]aV={#6_3)QhqFxXM4^~rWGkTe2>8\"7.*`},1$!z%9|/5<w+v(:[u@&;";
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        var dHhm7IJ;
        var IoZT_i;
        b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
        for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
          var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
          if (fPrXnx === -1) {
            continue;
          }
          if (dHhm7IJ < 0) {
            dHhm7IJ = fPrXnx;
          } else {
            b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
            } while (HoK2xH > 7);
            dHhm7IJ = -1;
          }
        }
        if (dHhm7IJ > -1) {
          oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
        }
        return a5I4LAb(oOSpQ0F);
      };
    }
    b07TQe(HoK2xH = undefined, dHhm7IJ = {
      ["cOFd9J"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "O187]2w_[}:?4>=X~oiDv9geZ.ETRLrMQH\"V5A+dnpUc@SP6fh0G)^B;,#&JF(<q$uCKj%Yx3`zby{/kl|atNIWs!m*";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var HoK2xH;
            var IoZT_i;
            var fPrXnx;
            var KhDI0Qx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
            for (KhDI0Qx = 0; KhDI0Qx < cKRkdn; KhDI0Qx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[KhDI0Qx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = sgFh6d;
              } else {
                b07TQe(fPrXnx += sgFh6d * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              oOSpQ0F.push((HoK2xH | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        if (!!bIYo7wX.has(cKRkdn) && !!eATa8m.has(l06wN2S)) {
          function oOSpQ0F(vDlnfHc) {
            var yctckmj = "xCpT\"EY/S[7Wjiz&`l{|a9m5GeO!+32rFLRBv?d<o#P*ywV;nJZ.Hu,)]1^N=gQMDs$6t~fAkqc@0:4%Uh}IK(>_8bX";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var HoK2xH;
            var IoZT_i;
            var fPrXnx;
            var KhDI0Qx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
            for (KhDI0Qx = 0; KhDI0Qx < cKRkdn; KhDI0Qx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[KhDI0Qx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = sgFh6d;
              } else {
                b07TQe(fPrXnx += sgFh6d * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              oOSpQ0F.push((HoK2xH | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          }
          function HoK2xH(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = oOSpQ0F(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          for (let dHhm7IJ of Array.from(l06wN2S.querySelectorAll(cKRkdn.selector))) {
            function IoZT_i(vDlnfHc) {
              var yctckmj = "9reG/jOKPDqy6<f#dx_+VIu]!;p`R~Fm.\"oiZaY$*2tXLMWSgc{vU3|>w8):4hH&}Q=%Cnz1B7,k?@[T(5AJN0Es^bl";
              var l06wN2S;
              var cKRkdn;
              var oOSpQ0F;
              var HoK2xH;
              var IoZT_i;
              var fPrXnx;
              var KhDI0Qx;
              b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
              for (KhDI0Qx = 0; KhDI0Qx < cKRkdn; KhDI0Qx++) {
                var sgFh6d = yctckmj.indexOf(l06wN2S[KhDI0Qx]);
                if (sgFh6d === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = sgFh6d;
                } else {
                  b07TQe(fPrXnx += sgFh6d * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(oOSpQ0F.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                  } while (IoZT_i > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                oOSpQ0F.push((HoK2xH | fPrXnx << IoZT_i) & 255);
              }
              return a5I4LAb(oOSpQ0F);
            }
            function fPrXnx(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = IoZT_i(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            if (!cKRkdn.seen.has(dHhm7IJ) && !cKRkdn.pending.has(dHhm7IJ) && !cKRkdn.retries.has(dHhm7IJ)) {
              LppejA(dHhm7IJ, cKRkdn);
            }
          }
        }
      },
      ["ZYldFc"]: function () {
        var [vDlnfHc] = Q16EmFG;
        if (!vDlnfHc.checked) {
          vDlnfHc.click();
        }
      },
      ["475qBX"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "iK.7^@_H{sWqQFmpT9?,~2>=tr(YD8$<PulxLEzRg[nc;%|UZ&jkNa\":v6B5`C]we#y0dIA)+*}1X4G3S!OMJfo/bVh";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        var [l06wN2S] = Q16EmFG;
        let cKRkdn = l06wN2S.parentElement;
        if (cKRkdn) {
          cKRkdn.value = l06wN2S.value;
          tl8V5lj(cKRkdn, "change");
        }
      },
      ["kA2MMz"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "+ACenHpTOSiRPBQktYKfUcmd4ZqNwW^_xX#g`%l.\"7V(h<}@JI9{1zD~;E?/>rMF=v,)os&$u]ba8yGL*052j36![:|";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = l06wN2S.getAttribute("type");
        if (l06wN2S.tagName === "INPUT" && (oOSpQ0F === "radio" || oOSpQ0F === "checkbox")) {
          function KhDI0Qx(vDlnfHc) {
            var yctckmj = "<AOVJMUgBdDL[CNh1_Zs~P,4/%nxf(*$&K}|wWG+X:?Hb70tj@5^k;pz3E2!cqmQ=lI`RiSF]eTYv6.>)8a\"{u#9roy";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function HoK2xH(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = KhDI0Qx(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          b07TQe(Q16EmFG = [l06wN2S], nUVzU8R("ZYldFc", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq);
          return;
        }
        if (l06wN2S.tagName === "INPUT" || l06wN2S.tagName === "TEXTAREA") {
          VGhMpp(l06wN2S, cKRkdn);
          return;
        }
        if (l06wN2S.tagName === "OPTION") {
          function dHhm7IJ(vDlnfHc) {
            var yctckmj = "EfK6VdjsAcT%<uv8l?i1W`~RPz*pXq{>\"+DS,$UZowY}nr2()x:9eJ@By#=ga;Q[hObN!^MF./43|Ck7G&]50ImH_tL";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function IoZT_i(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = dHhm7IJ(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          b07TQe(Q16EmFG = [l06wN2S], nUVzU8R("475qBX"));
          return;
        }
      },
      ["wSHGgF"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "rAPUnj)+Bc#k=?u&_WL,sOE|(.v@4K^Hlhb9:Ge>p!FwoIa62<R3g;MQ]TiVCx1$7~5SDY{y*[tJN\"qmZz0X/f%`}d8";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        if (!cKRkdn.correctAnswer?.length) {
          return !1;
        }
        let oOSpQ0F = l06wN2S.querySelectorAll("input.lrn_cloze_response, .lrn_response input[type='text']");
        let KhDI0Qx = !1;
        oOSpQ0F.forEach((vDlnfHc, l06wN2S) => {
          function HoK2xH(vDlnfHc) {
            var HoK2xH = "PABLdqS:Y2VR=Fuvr{]XHW6`xK&mzNy/;ZM?*Cl(kD>h#naUp,~%[Q0+}wjE49Ge$<\"fc5s^1I@_7oOT!b3J8gt.|)i";
            var dHhm7IJ;
            var yctckmj;
            var cKRkdn;
            var KhDI0Qx;
            var IoZT_i;
            var fPrXnx;
            var sgFh6d;
            b07TQe(dHhm7IJ = "" + (vDlnfHc || ""), yctckmj = dHhm7IJ.length, cKRkdn = [], KhDI0Qx = 0, IoZT_i = 0, fPrXnx = -1);
            for (sgFh6d = 0; sgFh6d < yctckmj; sgFh6d++) {
              var ldXU2Ow = HoK2xH.indexOf(dHhm7IJ[sgFh6d]);
              if (ldXU2Ow === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = ldXU2Ow;
              } else {
                b07TQe(fPrXnx += ldXU2Ow * 91, KhDI0Qx |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(cKRkdn.push(KhDI0Qx & 255), KhDI0Qx >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              cKRkdn.push((KhDI0Qx | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(cKRkdn);
          }
          function dHhm7IJ(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = HoK2xH(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          if (l06wN2S < cKRkdn.correctAnswer.length) {
            WBKOmd(vDlnfHc, YNX3NJ(cKRkdn.correctAnswer[l06wN2S]));
            KhDI0Qx = !0;
          }
        });
        return KhDI0Qx;
      },
      ["1L1DLI"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "dE0896bzmr&}J;sWy5/xkAeU)3p{Ig]ZoNnF@w41=Hv$<%(PYTB+q#C*`uR^tl:M,\"f!DOi~V|?ch>2a7_S[.KXjLGQ";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var fPrXnx;
            var sgFh6d;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, fPrXnx = -1);
            for (sgFh6d = 0; sgFh6d < cKRkdn; sgFh6d++) {
              var ldXU2Ow = yctckmj.indexOf(l06wN2S[sgFh6d]);
              if (ldXU2Ow === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = ldXU2Ow;
              } else {
                b07TQe(fPrXnx += ldXU2Ow * 91, HoK2xH |= fPrXnx << dHhm7IJ, dHhm7IJ += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              KhDI0Qx.push((HoK2xH | fPrXnx << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        if (!cKRkdn.correctAnswer?.length) {
          return !1;
        }
        let oOSpQ0F = cKRkdn.correctAnswer.map(vDlnfHc => {
          return parseInt(YNX3NJ(vDlnfHc), 10);
        });
        let KhDI0Qx = l06wN2S.getAttribute("data-reference");
        try {
          function HoK2xH(vDlnfHc) {
            var yctckmj = "CYBLoqOhZiIFXQDWgkMnaTf4U9NsPVc}=G$zbx&?%Emul)Jd;+ep!{<\"3RHjt_Ar,K[.~:#8>^1*5|7vy@0]`6/(2wS";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var fPrXnx;
            var sgFh6d;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, fPrXnx = -1);
            for (sgFh6d = 0; sgFh6d < cKRkdn; sgFh6d++) {
              var ldXU2Ow = yctckmj.indexOf(l06wN2S[sgFh6d]);
              if (ldXU2Ow === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = ldXU2Ow;
              } else {
                b07TQe(fPrXnx += ldXU2Ow * 91, HoK2xH |= fPrXnx << dHhm7IJ, dHhm7IJ += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              KhDI0Qx.push((HoK2xH | fPrXnx << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function dHhm7IJ(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = HoK2xH(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          let IoZT_i = l06wN2S.ownerDocument.defaultView?.LearnosityItems;
          let fPrXnx = KhDI0Qx && typeof IoZT_i?.getQuestions == "function" ? IoZT_i.getQuestions()?.[KhDI0Qx] : null;
          if (fPrXnx && typeof fPrXnx.setResponse == "function") {
            function sgFh6d(vDlnfHc) {
              var yctckmj = "$>`v}~:uw<Gl@WL;d1#fAiJUbaZ/]p*?tjK7IP9nm(Ye^03&SN6EXH8qFT+2V,{DrhBQRgx_%Cz|o.MOk![5s4y)=c\"";
              var l06wN2S;
              var cKRkdn;
              var KhDI0Qx;
              var HoK2xH;
              var dHhm7IJ;
              var fPrXnx;
              var sgFh6d;
              b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, fPrXnx = -1);
              for (sgFh6d = 0; sgFh6d < cKRkdn; sgFh6d++) {
                var ldXU2Ow = yctckmj.indexOf(l06wN2S[sgFh6d]);
                if (ldXU2Ow === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = ldXU2Ow;
                } else {
                  b07TQe(fPrXnx += ldXU2Ow * 91, HoK2xH |= fPrXnx << dHhm7IJ, dHhm7IJ += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                  } while (dHhm7IJ > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                KhDI0Qx.push((HoK2xH | fPrXnx << dHhm7IJ) & 255);
              }
              return a5I4LAb(KhDI0Qx);
            }
            function ldXU2Ow(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = sgFh6d(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            fPrXnx.setResponse(oOSpQ0F.map(String));
            return !0;
          }
        } catch {}
        let i9tUoZ = Array.from(l06wN2S.querySelectorAll(".lrn_sortable")).map(vDlnfHc => {
          function yctckmj(yctckmj) {
            var l06wN2S = "VdtlmSFMaBiXhLZfOKsnxqWJIgpQPRojkAUrNGDEecT3Yy#H>\"bC5u;v%*28]~!4z[?+=w0^@,<}()|1{67.&9_$`/:";
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var fPrXnx;
            var sgFh6d;
            var ldXU2Ow;
            b07TQe(cKRkdn = "" + (yctckmj || ""), KhDI0Qx = cKRkdn.length, HoK2xH = [], dHhm7IJ = 0, fPrXnx = 0, sgFh6d = -1);
            for (ldXU2Ow = 0; ldXU2Ow < KhDI0Qx; ldXU2Ow++) {
              var i9tUoZ = l06wN2S.indexOf(cKRkdn[ldXU2Ow]);
              if (i9tUoZ === -1) {
                continue;
              }
              if (sgFh6d < 0) {
                sgFh6d = i9tUoZ;
              } else {
                b07TQe(sgFh6d += i9tUoZ * 91, dHhm7IJ |= sgFh6d << fPrXnx, fPrXnx += (sgFh6d & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(dHhm7IJ & 255), dHhm7IJ >>= 8, fPrXnx -= 8);
                } while (fPrXnx > 7);
                sgFh6d = -1;
              }
            }
            if (sgFh6d > -1) {
              HoK2xH.push((dHhm7IJ | sgFh6d << fPrXnx) & 255);
            }
            return a5I4LAb(HoK2xH);
          }
          function l06wN2S(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          return vDlnfHc.getAttribute("data-key");
        });
        for (let IoZT_i = 0; IoZT_i < oOSpQ0F.length; IoZT_i++) {
          function sbTeKU(vDlnfHc) {
            var yctckmj = "evZKMsaDRCUiThO0gH;u&cJVf[`zG(oSBj.?)6mn39lY>]\"p/x_d%~!5PQ,ENI:b{=t*k8F^y#<Aw1WLqX42r$@|7}+";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var fPrXnx;
            var sgFh6d;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, fPrXnx = -1);
            for (sgFh6d = 0; sgFh6d < cKRkdn; sgFh6d++) {
              var ldXU2Ow = yctckmj.indexOf(l06wN2S[sgFh6d]);
              if (ldXU2Ow === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = ldXU2Ow;
              } else {
                b07TQe(fPrXnx += ldXU2Ow * 91, HoK2xH |= fPrXnx << dHhm7IJ, dHhm7IJ += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              KhDI0Qx.push((HoK2xH | fPrXnx << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function XMhsLe(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = sbTeKU(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          let fPrXnx = i9tUoZ[oOSpQ0F[IoZT_i]];
          let NpE97bV = Array.from(l06wN2S.querySelectorAll(".lrn_sortable"));
          let Uyguw1 = NpE97bV.findIndex(vDlnfHc => {
            return vDlnfHc.getAttribute("data-key") === fPrXnx;
          });
          if (Uyguw1 !== IoZT_i && Uyguw1 !== -1) {
            NpE97bV[Uyguw1].click();
            NpE97bV[IoZT_i].click();
          }
        }
        return !0;
      },
      ["V7u5Hl"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "dDbOStCrFVagAhf}(=@/y*<?l8`x45#76z9\"+$qiEHjsk!JZ;LW_w3%Qo&Y2vBu,mK]~G:UpMPR1T^N>)Ic0Xn|[.e{";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        var [l06wN2S] = Q16EmFG;
        return l06wN2S.defaultView?.API ?? null;
      },
      ["dVZDNh"]: function () {
        var [vDlnfHc, yctckmj] = Q16EmFG;
        let l06wN2S = yctckmj?.E2020?.learningObjectKey ?? "";
        let cKRkdn = yctckmj?.E2020?.version ?? "";
        let oOSpQ0F = (yctckmj?.FrameChain?.currentFrame ?? 1) - 1;
        return hHD73zD(vDlnfHc).flatMap(vDlnfHc => {
          function yctckmj(vDlnfHc) {
            var yctckmj = "u^ve!@\"Cr:l[I2TyBaPE1&Y{HA76>(5qoJOjU|)V+%.*#cFm0szD$dN,M]~`=QRx4p?3iLK;WSGbw9_kg/X<tfZ}n8h";
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(cKRkdn = "" + (vDlnfHc || ""), oOSpQ0F = cKRkdn.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < oOSpQ0F; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(cKRkdn[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function cKRkdn(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          return Array.from(vDlnfHc.querySelectorAll("[qid]"));
        }).map(vDlnfHc => {
          function yctckmj(vDlnfHc) {
            var yctckmj = "1YHUEirMjZIOA2&Jo*^Pt(bn~>ekRX@`W?TFg$5s)VqD:=47]w|{<pu3%\"}+cNa.!vl[m90/,ByxGS_zK8#6;CQhLdf";
            var KhDI0Qx;
            var HoK2xH;
            var cKRkdn;
            var oOSpQ0F;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(KhDI0Qx = "" + (vDlnfHc || ""), HoK2xH = KhDI0Qx.length, cKRkdn = [], oOSpQ0F = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < HoK2xH; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(KhDI0Qx[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, oOSpQ0F |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(cKRkdn.push(oOSpQ0F & 255), oOSpQ0F >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              cKRkdn.push((oOSpQ0F | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(cKRkdn);
          }
          function KhDI0Qx(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          let HoK2xH = vDlnfHc.getAttribute("qid").trim();
          if (cKRkdn) {
            return "" + l06wN2S + ",00000000-0000-0000-0000-000000000000," + HoK2xH + "," + oOSpQ0F + "," + cKRkdn;
          } else {
            return HoK2xH;
          }
        }).filter(vDlnfHc => {
          return AnYRwn.test(vDlnfHc.split(",")[2] ?? vDlnfHc);
        });
      },
      ["k98ab5"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "8}:/>?[$~w=^%6u;]z#Km*&pk4BbW\"In!+PRY91hZ|Cyo7S3E,DUs{2N.H@A_)ixVtQFdvO0(Tgfaerc5`lJGjL<XMq";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        let l06wN2S = typeof globalThis.unsafeWindow < "u" ? globalThis.unsafeWindow : window;
        XE5i6i(l06wN2S);
      },
      ["2DXb84"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "h9HWAJ$paet)sB|~RPCU7^d.=+,Y?%\"nSw#6`1l0fL5rzb8cZyV4!TMj{OiI]qxD*mvXE[gK}QNk2@(:&<_3u>/GoF;";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        for (let l06wN2S of Array.from(tV4VRe.keys())) {
          CdQnd1j(l06wN2S);
        }
      },
      ["T0rCOG"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "tuaDbXSjqPgcUOYr)GvwoN5]iK8>0eChd[H~Bz;?IkmF{73pVn^sTfM\"J_R,%1|9Zx!A*6EWL4@+<Q.l2(`&=/y:}$#";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        if (!cKRkdn || !!vh7Uk0()) {
          mxtpIbz.modules[l06wN2S] = cKRkdn;
          tkD5ZbK();
          if (cKRkdn) {
            ENkTPE(l06wN2S);
          } else {
            CdQnd1j(l06wN2S);
          }
        }
      },
      ["YQDUi8"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "X#MNUu@DKi.B<OVZe&[j{Y1Q!Txv?Etmco8`|2n%H7FA~lg}4b,(p=C>9rayRh\"_;$LwIPW0SJdkGsq+6z)5]3^*:/f";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = Pz5RdVt("div", {
          ["className"]: "pv-toggle" + (l06wN2S ? " pv-on" : ""),
          ["role"]: "switch",
          ["tabIndex"]: 0
        });
        oOSpQ0F.setAttribute("aria-checked", String(l06wN2S));
        oOSpQ0F.onkeydown = vDlnfHc => {
          function yctckmj(vDlnfHc) {
            var yctckmj = "5LHEmRgoirFtlaXIdhBuAv$P].94U|`cV#fYZO18,We^MDnqb~*k&!NyJs@S0;{%K/\"7xzGTp+Q3Cj6)=:>w_2?<[}(";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function l06wN2S(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          if (vDlnfHc.key === "Enter" || vDlnfHc.key === " ") {
            vDlnfHc.preventDefault();
            vDlnfHc.stopPropagation();
            oOSpQ0F.click();
          }
        };
        oOSpQ0F.onclick = vDlnfHc => {
          function yctckmj(vDlnfHc) {
            var yctckmj = "0Cqopf9(^i<&7HZ5jv;Y]4ePDU}!:wagW=n2,3O.t+#IFG*$)N6[J?k`SyBcVxlz{sR%LE~bX>_udKr1Q8@|\"hmATM/";
            var l06wN2S;
            var KhDI0Qx;
            var cKRkdn;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), KhDI0Qx = l06wN2S.length, cKRkdn = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < KhDI0Qx; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(cKRkdn.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              cKRkdn.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(cKRkdn);
          }
          function l06wN2S(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          vDlnfHc.stopPropagation();
          let KhDI0Qx = !oOSpQ0F.classList.contains("pv-on");
          b07TQe(oOSpQ0F.classList.toggle("pv-on", KhDI0Qx), oOSpQ0F.setAttribute("aria-checked", String(KhDI0Qx)), cKRkdn(KhDI0Qx));
        };
        return oOSpQ0F;
      },
      ["dqX57v"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "4ANiBMeI603_|E^hU>~zDQ7V+y/;2%R}&lP\"5GF[n:H*Trcq.X?({]xCOL`wj@d<$K=Sv,ZYJo)W9gaup1#t8kfsb!m";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = Pz5RdVt("input", {
          ["type"]: "number",
          ["className"]: "pv-num",
          ["value"]: String(l06wN2S),
          ["min"]: "0",
          ["step"]: "0.5"
        });
        oOSpQ0F.oninput = () => {
          function vDlnfHc(vDlnfHc) {
            var yctckmj = "E<1Kdq?zLF,!$ZAT69>|~w\"yv(;^.f=5_kxuUMo[etR/*gaNpn)&D3c4{b#2YH:8VO+}s@0Bj7%iCIXm]J`PGhSWrQl";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function yctckmj(yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          }
          return cKRkdn(Math.max(0, parseFloat(oOSpQ0F.value) || 0));
        };
        return oOSpQ0F;
      },
      ["VcGav0"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "(kGqPZDIR=5N3CjiH>gYh)u8pK{LQaFof.ls`b9^em&\"}?dv2;~#M|/!7BXSr,Ax4O@1w:U<]6JV*y_tc+z0ETn[%W$";
            var l06wN2S;
            var cKRkdn;
            var HoK2xH;
            var dHhm7IJ;
            var KhDI0Qx;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, HoK2xH = [], dHhm7IJ = 0, KhDI0Qx = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, dHhm7IJ |= IoZT_i << KhDI0Qx, KhDI0Qx += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(dHhm7IJ & 255), dHhm7IJ >>= 8, KhDI0Qx -= 8);
                } while (KhDI0Qx > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              HoK2xH.push((dHhm7IJ | IoZT_i << KhDI0Qx) & 255);
            }
            return a5I4LAb(HoK2xH);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = () => {
          function vDlnfHc(vDlnfHc) {
            var yctckmj = "Xz6~<_&VDkH[gvGs2o)LZM}I4u@aE*.7fr/#b1\"pWtm+q3!yFiNC(BOYw;?d`c5>TP9l:n$SeRxJ]8jAUQK|%=^0,{h";
            var l06wN2S;
            var cKRkdn;
            var HoK2xH;
            var dHhm7IJ;
            var KhDI0Qx;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, HoK2xH = [], dHhm7IJ = 0, KhDI0Qx = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, dHhm7IJ |= IoZT_i << KhDI0Qx, KhDI0Qx += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(dHhm7IJ & 255), dHhm7IJ >>= 8, KhDI0Qx -= 8);
                } while (KhDI0Qx > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              HoK2xH.push((dHhm7IJ | IoZT_i << KhDI0Qx) & 255);
            }
            return a5I4LAb(HoK2xH);
          }
          function yctckmj(yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          }
          return cKRkdn([Math.max(0, parseFloat(HoK2xH.value) || 0), Math.max(0, parseFloat(dHhm7IJ.value) || 0)]);
        };
        Q16EmFG = [l06wN2S[0], oOSpQ0F];
        let HoK2xH = nUVzU8R("dqX57v");
        Q16EmFG = [l06wN2S[1], oOSpQ0F];
        let dHhm7IJ = nUVzU8R("dqX57v");
        HoK2xH.setAttribute("aria-label", "Minimum delay");
        dHhm7IJ.setAttribute("aria-label", "Maximum delay");
        return Pz5RdVt("div", {
          ["className"]: "pv-range"
        }, HoK2xH, Pz5RdVt("span", {
          ["className"]: "pv-sep",
          ["textContent"]: "–"
        }), dHhm7IJ);
      },
      ["K2DOZM"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "xZSfQM0[?d/\"IH])<^k*5s@W:+lRyJ>GUPj6zToY,{N1cvw;X_7h.DuALE|aV$#=ge~4&B8O!}%nKb`impC2(qt39Fr";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = Pz5RdVt("div", {
          ["className"]: "pv-sub-row"
        });
        oOSpQ0F.append(Pz5RdVt("span", {
          ["className"]: "pv-sub-label",
          ["textContent"]: cKRkdn.label
        }));
        let KhDI0Qx = mxtpIbz.subOpts[l06wN2S][cKRkdn.key];
        let HoK2xH = vDlnfHc => {
          function yctckmj(yctckmj) {
            var KhDI0Qx = "Iz/5C#Jh4%{<[xwQHctrVd~j3RYi?(1]!*E,ZveOB|27XDl96KAFTfmp`S=LW^N&0;+Mas.n@$)k}_uy8:\">gPqGbUo";
            var l06wN2S;
            var cKRkdn;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            var sgFh6d;
            b07TQe(l06wN2S = "" + (yctckmj || ""), cKRkdn = l06wN2S.length, HoK2xH = [], dHhm7IJ = 0, IoZT_i = 0, fPrXnx = -1);
            for (sgFh6d = 0; sgFh6d < cKRkdn; sgFh6d++) {
              var ldXU2Ow = KhDI0Qx.indexOf(l06wN2S[sgFh6d]);
              if (ldXU2Ow === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = ldXU2Ow;
              } else {
                b07TQe(fPrXnx += ldXU2Ow * 91, dHhm7IJ |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(dHhm7IJ & 255), dHhm7IJ >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              HoK2xH.push((dHhm7IJ | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(HoK2xH);
          }
          function KhDI0Qx(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          b07TQe(mxtpIbz.subOpts[l06wN2S][cKRkdn.key] = vDlnfHc, tkD5ZbK());
        };
        if (cKRkdn.kind === "grade") {
          oOSpQ0F.append(WixqGoF(VoJYve, KhDI0Qx ?? "90-100", HoK2xH));
        } else {
          function dHhm7IJ(vDlnfHc) {
            var yctckmj = "lw8}^(xQ@P*ITA>V`#?rdU/c+yiZ&Hu<tBj{60e=zNL:J7n9.52_\"o$v!Xab]GCWhKDS41%E;)q3,gMkfY~sFOmpR|[";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
              var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function IoZT_i(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = dHhm7IJ(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          if (cKRkdn.kind === "select" && cKRkdn.options) {
            function fPrXnx(vDlnfHc) {
              var yctckmj = "gjF?kM~1W#eN$T*@&SX_EZ}DI<l`^URcJ\"uK,fHvw4/{O+%)qt7V;8LGxi!moCPy]pdhB[a3Q5bz2Arns|>=:.6(09Y";
              var l06wN2S;
              var cKRkdn;
              var KhDI0Qx;
              var HoK2xH;
              var dHhm7IJ;
              var IoZT_i;
              var fPrXnx;
              b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
              for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
                var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
                if (sgFh6d === -1) {
                  continue;
                }
                if (IoZT_i < 0) {
                  IoZT_i = sgFh6d;
                } else {
                  b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                  } while (dHhm7IJ > 7);
                  IoZT_i = -1;
                }
              }
              if (IoZT_i > -1) {
                KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
              }
              return a5I4LAb(KhDI0Qx);
            }
            function sgFh6d(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = fPrXnx(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            oOSpQ0F.append(WixqGoF(cKRkdn.options, KhDI0Qx ?? cKRkdn.options[0]?.value ?? "", HoK2xH));
          } else {
            function ldXU2Ow(vDlnfHc) {
              var yctckmj = "VK>~yx*sq#!wP.o@3Ml(Gv1;)Ac9]+&2EI=aBDFuO:Q`hH5piS%YgjJ7XRLC^Ur$Z_k6m}|NTd\",4[W{f/et<bzn?08";
              var l06wN2S;
              var cKRkdn;
              var KhDI0Qx;
              var HoK2xH;
              var dHhm7IJ;
              var IoZT_i;
              var fPrXnx;
              b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
              for (fPrXnx = 0; fPrXnx < cKRkdn; fPrXnx++) {
                var sgFh6d = yctckmj.indexOf(l06wN2S[fPrXnx]);
                if (sgFh6d === -1) {
                  continue;
                }
                if (IoZT_i < 0) {
                  IoZT_i = sgFh6d;
                } else {
                  b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                  } while (dHhm7IJ > 7);
                  IoZT_i = -1;
                }
              }
              if (IoZT_i > -1) {
                KhDI0Qx.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
              }
              return a5I4LAb(KhDI0Qx);
            }
            function i9tUoZ(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = ldXU2Ow(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            Q16EmFG = [KhDI0Qx !== !1, HoK2xH];
            let sbTeKU = nUVzU8R("YQDUi8");
            b07TQe(sbTeKU.setAttribute("aria-label", cKRkdn.label), oOSpQ0F.append(sbTeKU));
          }
        }
        return oOSpQ0F;
      },
      ["6AXWdf"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "ABpCw;fOt^y+na4RN>i.`qM?b(3xr!9Dk\"gJjc@s~m[%Yz&W6L}Eole:GF/PK#=U]<S7h$_v12Q5uI,0V{*d8)ZHXT|";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var IoZT_i;
            var fPrXnx;
            var ldXU2Ow;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
            for (ldXU2Ow = 0; ldXU2Ow < cKRkdn; ldXU2Ow++) {
              var i9tUoZ = yctckmj.indexOf(l06wN2S[ldXU2Ow]);
              if (i9tUoZ === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = i9tUoZ;
              } else {
                b07TQe(fPrXnx += i9tUoZ * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              KhDI0Qx.push((HoK2xH | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          };
        }
        var [l06wN2S, cKRkdn] = Q16EmFG;
        let oOSpQ0F = l06wN2S.querySelector(".pv-content");
        let KhDI0Qx = Array.from(l06wN2S.querySelectorAll(".pv-title, .pv-ctrls, .pv-back, .pv-overlay-brand"));
        let HoK2xH = vDlnfHc => {
          function l06wN2S(vDlnfHc) {
            var l06wN2S = "^POmF0\"/@qtxi5%l1X}&{>vnYNM.zCuS,f=d7[HEs4G~2B8*K`DWL!;j)pcTw<Ie+kRVhao$yJ#3Agb?9r_(6U:Z]Q|";
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var IoZT_i;
            var yctckmj;
            var fPrXnx;
            var ldXU2Ow;
            b07TQe(cKRkdn = "" + (vDlnfHc || ""), KhDI0Qx = cKRkdn.length, HoK2xH = [], IoZT_i = 0, yctckmj = 0, fPrXnx = -1);
            for (ldXU2Ow = 0; ldXU2Ow < KhDI0Qx; ldXU2Ow++) {
              var i9tUoZ = l06wN2S.indexOf(cKRkdn[ldXU2Ow]);
              if (i9tUoZ === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = i9tUoZ;
              } else {
                b07TQe(fPrXnx += i9tUoZ * 91, IoZT_i |= fPrXnx << yctckmj, yctckmj += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(IoZT_i & 255), IoZT_i >>= 8, yctckmj -= 8);
                } while (yctckmj > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              HoK2xH.push((IoZT_i | fPrXnx << yctckmj) & 255);
            }
            return a5I4LAb(HoK2xH);
          }
          function cKRkdn(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = l06wN2S(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          if (vDlnfHc.classList.contains("pv-title") || vDlnfHc.classList.contains("pv-overlay-brand")) {
            function KhDI0Qx(vDlnfHc) {
              var l06wN2S = "GEiu.7(%[>w+)h56;RsJqt{T=UDy,kV/Xf~?9v!&x\"`Z3LS2z_^Co$BFQ}0<@]P#meng8|IMWO4*A1pljcKHradNYb:";
              var cKRkdn;
              var KhDI0Qx;
              var HoK2xH;
              var IoZT_i;
              var yctckmj;
              var fPrXnx;
              var ldXU2Ow;
              b07TQe(cKRkdn = "" + (vDlnfHc || ""), KhDI0Qx = cKRkdn.length, HoK2xH = [], IoZT_i = 0, yctckmj = 0, fPrXnx = -1);
              for (ldXU2Ow = 0; ldXU2Ow < KhDI0Qx; ldXU2Ow++) {
                var i9tUoZ = l06wN2S.indexOf(cKRkdn[ldXU2Ow]);
                if (i9tUoZ === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = i9tUoZ;
                } else {
                  b07TQe(fPrXnx += i9tUoZ * 91, IoZT_i |= fPrXnx << yctckmj, yctckmj += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(HoK2xH.push(IoZT_i & 255), IoZT_i >>= 8, yctckmj -= 8);
                  } while (yctckmj > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                HoK2xH.push((IoZT_i | fPrXnx << yctckmj) & 255);
              }
              return a5I4LAb(HoK2xH);
            }
            function HoK2xH(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = KhDI0Qx(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            let IoZT_i = document.createRange();
            IoZT_i.selectNodeContents(vDlnfHc);
            return IoZT_i.getBoundingClientRect();
          }
          return vDlnfHc.getBoundingClientRect();
        };
        let dHhm7IJ = () => {
          function vDlnfHc(vDlnfHc) {
            var yctckmj = "m@8}AL!Ou;a,JG=^0ydqiWnDeY>/h?pU|x*$E3r#w.{R(Q+P9]B61`&7Iv2X[K4<bz)5\"T:j%~V_SfcCHokFNlZgMts";
            var l06wN2S;
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var IoZT_i;
            var fPrXnx;
            var ldXU2Ow;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, KhDI0Qx = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
            for (ldXU2Ow = 0; ldXU2Ow < cKRkdn; ldXU2Ow++) {
              var i9tUoZ = yctckmj.indexOf(l06wN2S[ldXU2Ow]);
              if (i9tUoZ === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = i9tUoZ;
              } else {
                b07TQe(fPrXnx += i9tUoZ * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                } while (IoZT_i > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              KhDI0Qx.push((HoK2xH | fPrXnx << IoZT_i) & 255);
            }
            return a5I4LAb(KhDI0Qx);
          }
          function yctckmj(yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          }
          let l06wN2S = HoK2xH(KhDI0Qx.find(vDlnfHc => {
            function l06wN2S(vDlnfHc) {
              var l06wN2S = "F^+}wIPk*j<9iK(yYRJ=#[%AeB|b7X0QtV]8{Lga?3dqScmhr516Hzo;vWUnNlx_,@C~`G$MT:/ZsfDE!>O\".)4p2&u";
              var cKRkdn;
              var yctckmj;
              var KhDI0Qx;
              var HoK2xH;
              var IoZT_i;
              var fPrXnx;
              var ldXU2Ow;
              b07TQe(cKRkdn = "" + (vDlnfHc || ""), yctckmj = cKRkdn.length, KhDI0Qx = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
              for (ldXU2Ow = 0; ldXU2Ow < yctckmj; ldXU2Ow++) {
                var i9tUoZ = l06wN2S.indexOf(cKRkdn[ldXU2Ow]);
                if (i9tUoZ === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = i9tUoZ;
                } else {
                  b07TQe(fPrXnx += i9tUoZ * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(KhDI0Qx.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                  } while (IoZT_i > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                KhDI0Qx.push((HoK2xH | fPrXnx << IoZT_i) & 255);
              }
              return a5I4LAb(KhDI0Qx);
            }
            function cKRkdn(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = l06wN2S(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            return vDlnfHc.classList.contains("pv-title");
          }));
          return KhDI0Qx.map(vDlnfHc => {
            function yctckmj(vDlnfHc) {
              var yctckmj = "UAoRrSOXtiETYhNjgkIBGCpdPnD/(Q92WyFvbe;0$mM7q>HxKJaL&1:VZw,`c]l|5su3z4*%<)#@!=6}.{+?~\"8_[f^";
              var cKRkdn;
              var KhDI0Qx;
              var l06wN2S;
              var HoK2xH;
              var IoZT_i;
              var fPrXnx;
              var ldXU2Ow;
              b07TQe(cKRkdn = "" + (vDlnfHc || ""), KhDI0Qx = cKRkdn.length, l06wN2S = [], HoK2xH = 0, IoZT_i = 0, fPrXnx = -1);
              for (ldXU2Ow = 0; ldXU2Ow < KhDI0Qx; ldXU2Ow++) {
                var i9tUoZ = yctckmj.indexOf(cKRkdn[ldXU2Ow]);
                if (i9tUoZ === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = i9tUoZ;
                } else {
                  b07TQe(fPrXnx += i9tUoZ * 91, HoK2xH |= fPrXnx << IoZT_i, IoZT_i += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(l06wN2S.push(HoK2xH & 255), HoK2xH >>= 8, IoZT_i -= 8);
                  } while (IoZT_i > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                l06wN2S.push((HoK2xH | fPrXnx << IoZT_i) & 255);
              }
              return a5I4LAb(l06wN2S);
            }
            function cKRkdn(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = yctckmj(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            let KhDI0Qx = HoK2xH(vDlnfHc);
            if (vDlnfHc.classList.contains("pv-overlay-brand") && !KhDI0Qx.width) {
              return l06wN2S;
            } else {
              return KhDI0Qx;
            }
          });
        };
        let IoZT_i = l06wN2S.getBoundingClientRect().height;
        let fPrXnx = dHhm7IJ();
        QVwWa51?.();
        if (!oOSpQ0F || typeof l06wN2S.animate != "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          l06wN2S.classList.toggle("pv-min", cKRkdn);
          return;
        }
        l06wN2S.classList.remove("pv-min");
        let sgFh6d = l06wN2S.offsetHeight;
        l06wN2S.classList.add("pv-min");
        let ldXU2Ow = l06wN2S.offsetHeight;
        l06wN2S.classList.toggle("pv-min", cKRkdn);
        let i9tUoZ = dHhm7IJ();
        b07TQe(l06wN2S.style.height = "" + (cKRkdn ? ldXU2Ow : sgFh6d) + "px", l06wN2S.style.overflow = "hidden", l06wN2S.style.willChange = "height", oOSpQ0F.style.display = "flex");
        let sbTeKU = KhDI0Qx.map(HoK2xH);
        let XMhsLe = {
          ["duration"]: oUaf8p,
          ["easing"]: A3Mpjw9
        };
        let NpE97bV = l06wN2S.animate([{
          ["height"]: "" + IoZT_i + "px"
        }, {
          ["height"]: "" + (cKRkdn ? ldXU2Ow : sgFh6d) + "px"
        }], XMhsLe);
        let Uyguw1 = [NpE97bV];
        KhDI0Qx.forEach((vDlnfHc, l06wN2S) => {
          function cKRkdn(vDlnfHc) {
            var l06wN2S = ",qETAStalh1nI|PcH#Z[gx0GkVsJuX*bU(;>.Y}e%Lw!zB8`&N6Q9m)2]=^_:?Ko@ypC\"WDv3rOFMj4<5R~/{+f$di7";
            var cKRkdn;
            var KhDI0Qx;
            var HoK2xH;
            var IoZT_i;
            var ldXU2Ow;
            var NpE97bV;
            var yctckmj;
            b07TQe(cKRkdn = "" + (vDlnfHc || ""), KhDI0Qx = cKRkdn.length, HoK2xH = [], IoZT_i = 0, ldXU2Ow = 0, NpE97bV = -1);
            for (yctckmj = 0; yctckmj < KhDI0Qx; yctckmj++) {
              var fPrXnx = l06wN2S.indexOf(cKRkdn[yctckmj]);
              if (fPrXnx === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = fPrXnx;
              } else {
                b07TQe(NpE97bV += fPrXnx * 91, IoZT_i |= NpE97bV << ldXU2Ow, ldXU2Ow += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(HoK2xH.push(IoZT_i & 255), IoZT_i >>= 8, ldXU2Ow -= 8);
                } while (ldXU2Ow > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              HoK2xH.push((IoZT_i | NpE97bV << ldXU2Ow) & 255);
            }
            return a5I4LAb(HoK2xH);
          }
          function KhDI0Qx(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = cKRkdn(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          let HoK2xH = fPrXnx[l06wN2S].left - sbTeKU[l06wN2S].left;
          let IoZT_i = fPrXnx[l06wN2S].top - sbTeKU[l06wN2S].top;
          let ldXU2Ow = i9tUoZ[l06wN2S].left - sbTeKU[l06wN2S].left;
          let NpE97bV = i9tUoZ[l06wN2S].top - sbTeKU[l06wN2S].top;
          Uyguw1.push(vDlnfHc.animate([{
            ["transform"]: "translate(" + HoK2xH + "px, " + IoZT_i + "px)"
          }, {
            ["transform"]: "translate(" + ldXU2Ow + "px, " + NpE97bV + "px)"
          }], XMhsLe));
        });
        let MV3WKRa = () => {
          function vDlnfHc(vDlnfHc) {
            var cKRkdn = "+u7:!|61;()40[xD.a3ivy^\"$=WP5zEbX{q%jlRnTI_*m/LY~Vdkp`89o2FB>ewJ]r@tgHGA?cNZU<M,sQK#SfO}hC&";
            var KhDI0Qx;
            var HoK2xH;
            var IoZT_i;
            var yctckmj;
            var l06wN2S;
            var fPrXnx;
            var ldXU2Ow;
            b07TQe(KhDI0Qx = "" + (vDlnfHc || ""), HoK2xH = KhDI0Qx.length, IoZT_i = [], yctckmj = 0, l06wN2S = 0, fPrXnx = -1);
            for (ldXU2Ow = 0; ldXU2Ow < HoK2xH; ldXU2Ow++) {
              var i9tUoZ = cKRkdn.indexOf(KhDI0Qx[ldXU2Ow]);
              if (i9tUoZ === -1) {
                continue;
              }
              if (fPrXnx < 0) {
                fPrXnx = i9tUoZ;
              } else {
                b07TQe(fPrXnx += i9tUoZ * 91, yctckmj |= fPrXnx << l06wN2S, l06wN2S += (fPrXnx & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(IoZT_i.push(yctckmj & 255), yctckmj >>= 8, l06wN2S -= 8);
                } while (l06wN2S > 7);
                fPrXnx = -1;
              }
            }
            if (fPrXnx > -1) {
              IoZT_i.push((yctckmj | fPrXnx << l06wN2S) & 255);
            }
            return a5I4LAb(IoZT_i);
          }
          function cKRkdn(cKRkdn) {
            if (typeof cxuqDK[cKRkdn] === "undefined") {
              return cxuqDK[cKRkdn] = vDlnfHc(wQolDY[cKRkdn]);
            }
            return cxuqDK[cKRkdn];
          }
          for (let KhDI0Qx of Uyguw1) {
            function HoK2xH(vDlnfHc) {
              var cKRkdn = "DgOmviYh):a^/{lV]o0JkySz_cnIQ}!>tXjux~BT\"ML;W9,|1%=37(UsZ$FR`#6AbP[qEG42&*rde?C+@pKw5<H8f.N";
              var KhDI0Qx;
              var HoK2xH;
              var IoZT_i;
              var yctckmj;
              var l06wN2S;
              var fPrXnx;
              var ldXU2Ow;
              b07TQe(KhDI0Qx = "" + (vDlnfHc || ""), HoK2xH = KhDI0Qx.length, IoZT_i = [], yctckmj = 0, l06wN2S = 0, fPrXnx = -1);
              for (ldXU2Ow = 0; ldXU2Ow < HoK2xH; ldXU2Ow++) {
                var i9tUoZ = cKRkdn.indexOf(KhDI0Qx[ldXU2Ow]);
                if (i9tUoZ === -1) {
                  continue;
                }
                if (fPrXnx < 0) {
                  fPrXnx = i9tUoZ;
                } else {
                  b07TQe(fPrXnx += i9tUoZ * 91, yctckmj |= fPrXnx << l06wN2S, l06wN2S += (fPrXnx & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(IoZT_i.push(yctckmj & 255), yctckmj >>= 8, l06wN2S -= 8);
                  } while (l06wN2S > 7);
                  fPrXnx = -1;
                }
              }
              if (fPrXnx > -1) {
                IoZT_i.push((yctckmj | fPrXnx << l06wN2S) & 255);
              }
              return a5I4LAb(IoZT_i);
            }
            function IoZT_i(vDlnfHc) {
              if (typeof cxuqDK[vDlnfHc] === "undefined") {
                return cxuqDK[vDlnfHc] = HoK2xH(wQolDY[vDlnfHc]);
              }
              return cxuqDK[vDlnfHc];
            }
            b07TQe(KhDI0Qx.onfinish = null, KhDI0Qx.oncancel = null, KhDI0Qx.cancel());
          }
          b07TQe(l06wN2S.style.overflow = "", l06wN2S.style.height = "", l06wN2S.style.willChange = "", oOSpQ0F.style.display = "", QVwWa51 = null);
        };
        b07TQe(QVwWa51 = MV3WKRa, NpE97bV.onfinish = MV3WKRa, NpE97bV.oncancel = MV3WKRa);
      },
      ["jEYKaH"]: function (oOSpQ0F, fPrXnx, sgFh6d, ldXU2Ow, Q16EmFG) {
        if (!Q16EmFG) {
          Q16EmFG = function (oOSpQ0F, fPrXnx, Q16EmFG, i9tUoZ = {}, sbTeKU, NpE97bV, Uyguw1, Z6bwiaJ) {
            if (!NpE97bV) {
              NpE97bV = function (oOSpQ0F) {
                if (typeof cxuqDK[oOSpQ0F] === "undefined") {
                  return cxuqDK[oOSpQ0F] = sbTeKU(wQolDY[oOSpQ0F]);
                }
                return cxuqDK[oOSpQ0F];
              };
            }
            if (!sbTeKU) {
              sbTeKU = function (oOSpQ0F) {
                var fPrXnx = "PEC4.K|:6#1s8VF!I^xoitr?H>lzj=R}BUD&d{L@/wy_v\"+aNmT<O0XJnM*WfhS2%QqA(ke9G`pY,Z)bc~u35][7$;g";
                var Q16EmFG;
                var i9tUoZ;
                var sbTeKU;
                var NpE97bV;
                var Uyguw1;
                var Z6bwiaJ;
                var VwxGquh;
                b07TQe(Q16EmFG = "" + (oOSpQ0F || ""), i9tUoZ = Q16EmFG.length, sbTeKU = [], NpE97bV = 0, Uyguw1 = 0, Z6bwiaJ = -1);
                for (VwxGquh = 0; VwxGquh < i9tUoZ; VwxGquh++) {
                  var sgFh6d = fPrXnx.indexOf(Q16EmFG[VwxGquh]);
                  if (sgFh6d === -1) {
                    continue;
                  }
                  if (Z6bwiaJ < 0) {
                    Z6bwiaJ = sgFh6d;
                  } else {
                    b07TQe(Z6bwiaJ += sgFh6d * 91, NpE97bV |= Z6bwiaJ << Uyguw1, Uyguw1 += (Z6bwiaJ & 8191) > 88 ? 13 : 14);
                    do {
                      b07TQe(sbTeKU.push(NpE97bV & 255), NpE97bV >>= 8, Uyguw1 -= 8);
                    } while (Uyguw1 > 7);
                    Z6bwiaJ = -1;
                  }
                }
                if (Z6bwiaJ > -1) {
                  sbTeKU.push((NpE97bV | Z6bwiaJ << Uyguw1) & 255);
                }
                return a5I4LAb(sbTeKU);
              };
            }
            b07TQe(Uyguw1 = undefined, Z6bwiaJ = {
              ["YjqzIz"]: function () {
                b07TQe(!kFAxDy() && qZk6aKD === "limit" && (qZk6aKD = !1, u8aCdFu(), RybUTsd()), WHivJOf.querySelector(".pv-slider")?.dispatchEvent(new CustomEvent("pv-quota")));
              }
            });
            if (fPrXnx === "2x4g2etq44") {
              ldXU2Ow = [];
            }
            if (fPrXnx === "DR6vFNOxRF") {
              function VwxGquh() {
                function fPrXnx(...fPrXnx) {
                  ldXU2Ow = fPrXnx;
                  return Z6bwiaJ[oOSpQ0F].apply(this);
                }
                var Q16EmFG;
                Q16EmFG = i9tUoZ[oOSpQ0F];
                if (Q16EmFG) {
                  n2eRlb(fPrXnx, Q16EmFG);
                }
                return fPrXnx;
              }
              Uyguw1 = sgFh6d[oOSpQ0F] ||= VwxGquh();
            } else {
              Uyguw1 = Z6bwiaJ[oOSpQ0F]();
            }
            if (Q16EmFG === "f4huP3uRs4") {
              return {
                ["nSIOio1gGP"]: Uyguw1
              };
            } else {
              return Uyguw1;
            }
          };
        }
        if (!fPrXnx) {
          fPrXnx = function (fPrXnx) {
            if (typeof cxuqDK[fPrXnx] === "undefined") {
              return cxuqDK[fPrXnx] = oOSpQ0F(wQolDY[fPrXnx]);
            }
            return cxuqDK[fPrXnx];
          };
        }
        if (!oOSpQ0F) {
          oOSpQ0F = function (oOSpQ0F) {
            var fPrXnx = ".CNOI@KjU0,zHVliZ{mhP4YA<n9R`pbes^FQ%)q*MvX+uoB\"!5[86k=7f_?3axdE#>(~:DG$Jg;&]y}c|wTWr21/LtS";
            var sgFh6d;
            var ldXU2Ow;
            var Q16EmFG;
            var i9tUoZ;
            var sbTeKU;
            var NpE97bV;
            var Uyguw1;
            b07TQe(sgFh6d = "" + (oOSpQ0F || ""), ldXU2Ow = sgFh6d.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
            for (Uyguw1 = 0; Uyguw1 < ldXU2Ow; Uyguw1++) {
              var WHivJOf = fPrXnx.indexOf(sgFh6d[Uyguw1]);
              if (WHivJOf === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = WHivJOf;
              } else {
                b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                } while (sbTeKU > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
            }
            return a5I4LAb(Q16EmFG);
          };
        }
        b07TQe(sgFh6d = Object.create(null), ldXU2Ow = undefined);
        let i9tUoZ = Pz5RdVt("div", {
          ["className"]: "pv-panel"
        });
        b07TQe(i9tUoZ.classList.toggle("pv-square", !!mxtpIbz.square), i9tUoZ.setAttribute("data-theme", mxtpIbz.theme));
        try {} catch {}
        let sbTeKU = Pz5RdVt("button", {
          ["className"]: "pv-back",
          ["type"]: "button"
        }, Pz5RdVt("img", {
          ["src"]: Kq6MDI,
          ["alt"]: ""
        }));
        b07TQe(sbTeKU.setAttribute("aria-label", "Back to home"), sbTeKU.style.visibility = "hidden");
        let XMhsLe = Pz5RdVt("div", {
          ["className"]: "pv-title",
          ["textContent"]: "Ascenly"
        });
        let NpE97bV = Pz5RdVt("button", {
          ["className"]: "pv-btn-icon",
          ["type"]: "button",
          ["title"]: "Minimize"
        });
        let Uyguw1 = Pz5RdVt("button", {
          ["className"]: "pv-btn-icon",
          ["type"]: "button",
          ["title"]: "Settings",
          ["ariaLabel"]: "Settings",
          ["innerHTML"]: mZh05HF
        });
        b07TQe(NpE97bV.append(Pz5RdVt("img", {
          ["src"]: mW7GYp0,
          ["alt"]: ""
        })), Uyguw1.onclick = () => {
          function oOSpQ0F(oOSpQ0F) {
            var sgFh6d = "]3,}eHA*Lm1NPRYu9sz~|rj<+)4#pfvM726q0DZ`@$X(d>EJ{?i_/Kbkw&ghO.Fl[^BUnCV:Q!oc%ySGt=Wa8I;xT5\"";
            var fPrXnx;
            var ldXU2Ow;
            var Q16EmFG;
            var i9tUoZ;
            var sbTeKU;
            var NpE97bV;
            var Uyguw1;
            b07TQe(fPrXnx = "" + (oOSpQ0F || ""), ldXU2Ow = fPrXnx.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
            for (Uyguw1 = 0; Uyguw1 < ldXU2Ow; Uyguw1++) {
              var WHivJOf = sgFh6d.indexOf(fPrXnx[Uyguw1]);
              if (WHivJOf === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = WHivJOf;
              } else {
                b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                } while (sbTeKU > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
            }
            return a5I4LAb(Q16EmFG);
          }
          function sgFh6d(sgFh6d) {
            if (typeof cxuqDK[sgFh6d] === "undefined") {
              return cxuqDK[sgFh6d] = oOSpQ0F(wQolDY[sgFh6d]);
            }
            return cxuqDK[sgFh6d];
          }
          WHivJOf.querySelector(".pv-slider")?.dispatchEvent(new CustomEvent("pv-settings"));
        }, NpE97bV.onclick = oOSpQ0F => {
          function fPrXnx(oOSpQ0F) {
            var fPrXnx = "zmIDVnkrbi0?Oq*+N5h~Xtu7S}$oA,)cEg\"3xR/{|_vjsF8!U[;e&(21YWf`%pC<HyB=K]l9T6@.:G4LZwJa>P#MQd^";
            var sgFh6d;
            var ldXU2Ow;
            var Q16EmFG;
            var i9tUoZ;
            var sbTeKU;
            var NpE97bV;
            var Uyguw1;
            b07TQe(sgFh6d = "" + (oOSpQ0F || ""), ldXU2Ow = sgFh6d.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
            for (Uyguw1 = 0; Uyguw1 < ldXU2Ow; Uyguw1++) {
              var WHivJOf = fPrXnx.indexOf(sgFh6d[Uyguw1]);
              if (WHivJOf === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = WHivJOf;
              } else {
                b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                } while (sbTeKU > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
            }
            return a5I4LAb(Q16EmFG);
          }
          function sgFh6d(oOSpQ0F) {
            if (typeof cxuqDK[oOSpQ0F] === "undefined") {
              return cxuqDK[oOSpQ0F] = fPrXnx(wQolDY[oOSpQ0F]);
            }
            return cxuqDK[oOSpQ0F];
          }
          b07TQe(oOSpQ0F.stopPropagation(), dTRMYQ(i9tUoZ, NpE97bV, !mxtpIbz.minimized));
        });
        let MV3WKRa = Pz5RdVt("div", {
          ["className"]: "pv-header"
        }, sbTeKU, Pz5RdVt("div", {
          ["className"]: "pv-title-wrap"
        }, XMhsLe), Pz5RdVt("div", {
          ["className"]: "pv-ctrls"
        }, Uyguw1, NpE97bV));
        let WHivJOf = Pz5RdVt("div", {
          ["className"]: "pv-content"
        });
        let Z6bwiaJ = !0;
        let cWVaZN = !1;
        let VwxGquh = !1;
        let qZk6aKD = !1;
        let u8aCdFu = () => {
          function oOSpQ0F(oOSpQ0F) {
            var sgFh6d = "+QZ:qBDm~RuCH^@6rF)k_]Yv*hSl8e!p&tXo5?j#<I1(\"0NV3w%`bTELPfx>[AG{,O$MW}z2JscKny|=d/.U49ga7i;";
            var ldXU2Ow;
            var fPrXnx;
            var Q16EmFG;
            var i9tUoZ;
            var sbTeKU;
            var NpE97bV;
            var Uyguw1;
            b07TQe(ldXU2Ow = "" + (oOSpQ0F || ""), fPrXnx = ldXU2Ow.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
            for (Uyguw1 = 0; Uyguw1 < fPrXnx; Uyguw1++) {
              var WHivJOf = sgFh6d.indexOf(ldXU2Ow[Uyguw1]);
              if (WHivJOf === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = WHivJOf;
              } else {
                b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                } while (sbTeKU > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
            }
            return a5I4LAb(Q16EmFG);
          }
          function sgFh6d(sgFh6d) {
            if (typeof cxuqDK[sgFh6d] === "undefined") {
              return cxuqDK[sgFh6d] = oOSpQ0F(wQolDY[sgFh6d]);
            }
            return cxuqDK[sgFh6d];
          }
          b07TQe(kFAxDy() ? (nUVzU8R("2DXb84", "xskrcFuhcx", "H87mYBS5hN").YIAtu3f8cq, qZk6aKD = "limit") : qZk6aKD === "limit" && (qZk6aKD = !1), WHivJOf.innerHTML = "");
          let ldXU2Ow = !Z6bwiaJ && !VwxGquh && !cWVaZN && !mxtpIbz.key && !mxtpIbz.session;
          b07TQe(NpE97bV.querySelector("img").src = mxtpIbz.minimized ? t3QQhTw : ldXU2Ow ? N_t3c3D : mW7GYp0, sbTeKU.style.visibility = "hidden", XMhsLe.textContent = "Ascenly", Uyguw1.hidden = Z6bwiaJ || VwxGquh || cWVaZN || !mxtpIbz.key && !mxtpIbz.session || !!qZk6aKD, i9tUoZ.classList.remove("pv-in-detail"), i9tUoZ.classList.toggle("pv-has-overlay", !!qZk6aKD), sbTeKU.inert = !!qZk6aKD, Z6bwiaJ ? WHivJOf.append(ei38vlD()) : VwxGquh ? WHivJOf.append(jcgLaW2()) : cWVaZN ? WHivJOf.append(sO_Ngh(RcQm9H7)) : !mxtpIbz.key && !mxtpIbz.session ? WHivJOf.append(joVJav(() => {
            b07TQe(RybUTsd(), u8aCdFu());
          })) : (c5WZXm && WHivJOf.append(Pz5RdVt("div", {
            ["className"]: "pv-key-err pv-key-err-on",
            ["role"]: "alert",
            ["textContent"]: c5WZXm
          })), WHivJOf.append(w2iWwz4(sbTeKU, XMhsLe, i9tUoZ, () => {
            function oOSpQ0F(oOSpQ0F) {
              var ldXU2Ow = "oA~B3R24SF1.N(0Q?]@rd`J+hkCtGm/5M8,#bqZYDs>EPf:=7&XLO$%^pz9y}_!{xclnj|KwI<HUg\"T[VWa;v)*uie6";
              var sgFh6d;
              var fPrXnx;
              var Q16EmFG;
              var i9tUoZ;
              var sbTeKU;
              var NpE97bV;
              var Uyguw1;
              b07TQe(sgFh6d = "" + (oOSpQ0F || ""), fPrXnx = sgFh6d.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
              for (Uyguw1 = 0; Uyguw1 < fPrXnx; Uyguw1++) {
                var WHivJOf = ldXU2Ow.indexOf(sgFh6d[Uyguw1]);
                if (WHivJOf === -1) {
                  continue;
                }
                if (NpE97bV < 0) {
                  NpE97bV = WHivJOf;
                } else {
                  b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                  } while (sbTeKU > 7);
                  NpE97bV = -1;
                }
              }
              if (NpE97bV > -1) {
                Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
              }
              return a5I4LAb(Q16EmFG);
            }
            function ldXU2Ow(ldXU2Ow) {
              if (typeof cxuqDK[ldXU2Ow] === "undefined") {
                return cxuqDK[ldXU2Ow] = oOSpQ0F(wQolDY[ldXU2Ow]);
              }
              return cxuqDK[ldXU2Ow];
            }
            b07TQe(QZAKkm(), mxtpIbz.key = "", mxtpIbz.session = "", mxtpIbz.signInVerifier = "", mxtpIbz.signInCode = "", mxtpIbz.view = "", tkD5ZbK(), window.__ascenly_expiringIn = void 0, window.__ascenly_quota = void 0, u8aCdFu(), nUVzU8R("2DXb84", "xskrcFuhcx"));
          }, (oOSpQ0F = !1) => {
            function ldXU2Ow(ldXU2Ow) {
              var fPrXnx = "g_NYkuh9}oypX73erH!{mG0JM8zC:OvTWP%n`Q,F\"/@[+~*?2RU6Bw^|bLEA=;K&)lf]d1(<D4it$sq.IS#cjV5Z>ax";
              var sgFh6d;
              var Q16EmFG;
              var i9tUoZ;
              var sbTeKU;
              var NpE97bV;
              var Uyguw1;
              var WHivJOf;
              b07TQe(sgFh6d = "" + (ldXU2Ow || ""), Q16EmFG = sgFh6d.length, i9tUoZ = [], sbTeKU = 0, NpE97bV = 0, Uyguw1 = -1);
              for (WHivJOf = 0; WHivJOf < Q16EmFG; WHivJOf++) {
                var Z6bwiaJ = fPrXnx.indexOf(sgFh6d[WHivJOf]);
                if (Z6bwiaJ === -1) {
                  continue;
                }
                if (Uyguw1 < 0) {
                  Uyguw1 = Z6bwiaJ;
                } else {
                  b07TQe(Uyguw1 += Z6bwiaJ * 91, sbTeKU |= Uyguw1 << NpE97bV, NpE97bV += (Uyguw1 & 8191) > 88 ? 13 : 14);
                  do {
                    b07TQe(i9tUoZ.push(sbTeKU & 255), sbTeKU >>= 8, NpE97bV -= 8);
                  } while (NpE97bV > 7);
                  Uyguw1 = -1;
                }
              }
              if (Uyguw1 > -1) {
                i9tUoZ.push((sbTeKU | Uyguw1 << NpE97bV) & 255);
              }
              return a5I4LAb(i9tUoZ);
            }
            function fPrXnx(oOSpQ0F) {
              if (typeof cxuqDK[oOSpQ0F] === "undefined") {
                return cxuqDK[oOSpQ0F] = ldXU2Ow(wQolDY[oOSpQ0F]);
              }
              return cxuqDK[oOSpQ0F];
            }
            if (!qZk6aKD) {
              qZk6aKD = oOSpQ0F ? "limit" : "redeem";
              u8aCdFu();
            }
          })), qZk6aKD && (WHivJOf.querySelector(".pv-slider").inert = !0, WHivJOf.append(joVJav(() => {
            b07TQe(RybUTsd(), qZk6aKD = !1, u8aCdFu());
          }, () => {
            if (!kFAxDy()) {
              qZk6aKD = !1;
              u8aCdFu();
            }
          }, qZk6aKD)))));
        };
        b07TQe(u8aCdFu(), glUVlo(() => {
          function oOSpQ0F(oOSpQ0F) {
            var fPrXnx = "5;0#{9z)YEK4.q]TZ3}a+<dA,e?r*`VHcy!sOjpI8D=Mi^kU2f&@xb:[|~tGX1$%lmFwLQ\"BvP>R7/nWg_N6(ChoJuS";
            var sgFh6d;
            var ldXU2Ow;
            var Q16EmFG;
            var i9tUoZ;
            var sbTeKU;
            var NpE97bV;
            var Uyguw1;
            b07TQe(sgFh6d = "" + (oOSpQ0F || ""), ldXU2Ow = sgFh6d.length, Q16EmFG = [], i9tUoZ = 0, sbTeKU = 0, NpE97bV = -1);
            for (Uyguw1 = 0; Uyguw1 < ldXU2Ow; Uyguw1++) {
              var WHivJOf = fPrXnx.indexOf(sgFh6d[Uyguw1]);
              if (WHivJOf === -1) {
                continue;
              }
              if (NpE97bV < 0) {
                NpE97bV = WHivJOf;
              } else {
                b07TQe(NpE97bV += WHivJOf * 91, i9tUoZ |= NpE97bV << sbTeKU, sbTeKU += (NpE97bV & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, sbTeKU -= 8);
                } while (sbTeKU > 7);
                NpE97bV = -1;
              }
            }
            if (NpE97bV > -1) {
              Q16EmFG.push((i9tUoZ | NpE97bV << sbTeKU) & 255);
            }
            return a5I4LAb(Q16EmFG);
          }
          function fPrXnx(fPrXnx) {
            if (typeof cxuqDK[fPrXnx] === "undefined") {
              return cxuqDK[fPrXnx] = oOSpQ0F(wQolDY[fPrXnx]);
            }
            return cxuqDK[fPrXnx];
          }
          b07TQe(nUVzU8R("2DXb84", "xskrcFuhcx"), u8aCdFu());
        }));
        Q16EmFG("YjqzIz", "2x4g2etq44");
        if (typeof window < "u") {
          BmkBnEs = window.setInterval(Q16EmFG("YjqzIz", "DR6vFNOxRF"), 2000);
        }
        QHK6nSo().then(oOSpQ0F => {
          b07TQe(Z6bwiaJ = !1, oOSpQ0F && oOSpQ0F === "maintenance" ? (VwxGquh = !0, nUVzU8R("2DXb84", "xskrcFuhcx"), u8aCdFu()) : (oOSpQ0F && oOSpQ0F !== Tsh3fDG && (cWVaZN = !0, new nUVzU8R("2DXb84", "xskrcFuhcx", "H87mYBS5hN").YIAtu3f8cq), u8aCdFu()));
        });
        i9tUoZ.append(MV3WKRa, WHivJOf);
        i9tUoZ.style.cssText = "left:" + mxtpIbz.pos.x + "px;top:" + mxtpIbz.pos.y + "px;position:fixed";
        j9jGBY(i9tUoZ, MV3WKRa);
        if (mxtpIbz.minimized) {
          dTRMYQ(i9tUoZ, NpE97bV, !0, !1);
        }
        return i9tUoZ;
      },
      ["azQhaB"]: function () {
        JdDoXRc?.querySelector(".pv-slider")?.dispatchEvent(new CustomEvent("pv-quota"));
      },
      ["TFcigJ"]: function (vDlnfHc, yctckmj) {
        if (!yctckmj) {
          yctckmj = function (yctckmj) {
            if (typeof cxuqDK[yctckmj] === "undefined") {
              return cxuqDK[yctckmj] = vDlnfHc(wQolDY[yctckmj]);
            }
            return cxuqDK[yctckmj];
          };
        }
        if (!vDlnfHc) {
          vDlnfHc = function (vDlnfHc) {
            var yctckmj = "Axwz*0`BbIm:r},K<_|)%g#hOpXW1a{V+y>?9dGFC=.D(LlJNs6Tvi~u/fkq@Het8UPSEjR;3oQ^\"Y!42cM[75]Z&n$";
            var l06wN2S;
            var cKRkdn;
            var oOSpQ0F;
            var KhDI0Qx;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
            for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
              var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
              if (fPrXnx === -1) {
                continue;
              }
              if (dHhm7IJ < 0) {
                dHhm7IJ = fPrXnx;
              } else {
                b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
                } while (HoK2xH > 7);
                dHhm7IJ = -1;
              }
            }
            if (dHhm7IJ > -1) {
              oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
            }
            return a5I4LAb(oOSpQ0F);
          };
        }
        document.addEventListener("keydown", vDlnfHc => {
          function l06wN2S(vDlnfHc) {
            var l06wN2S = "UdmXKbALsHiD9t=vFp[G(?x8jIwSr^a32/kn*B#EQ%gYOR7>JVhZP@}qTCM<\"6]!oNl_ecW0;),1:u.4`{$|z+5~yf&";
            var cKRkdn;
            var oOSpQ0F;
            var yctckmj;
            var HoK2xH;
            var dHhm7IJ;
            var IoZT_i;
            var fPrXnx;
            b07TQe(cKRkdn = "" + (vDlnfHc || ""), oOSpQ0F = cKRkdn.length, yctckmj = [], HoK2xH = 0, dHhm7IJ = 0, IoZT_i = -1);
            for (fPrXnx = 0; fPrXnx < oOSpQ0F; fPrXnx++) {
              var sgFh6d = l06wN2S.indexOf(cKRkdn[fPrXnx]);
              if (sgFh6d === -1) {
                continue;
              }
              if (IoZT_i < 0) {
                IoZT_i = sgFh6d;
              } else {
                b07TQe(IoZT_i += sgFh6d * 91, HoK2xH |= IoZT_i << dHhm7IJ, dHhm7IJ += (IoZT_i & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(yctckmj.push(HoK2xH & 255), HoK2xH >>= 8, dHhm7IJ -= 8);
                } while (dHhm7IJ > 7);
                IoZT_i = -1;
              }
            }
            if (IoZT_i > -1) {
              yctckmj.push((HoK2xH | IoZT_i << dHhm7IJ) & 255);
            }
            return a5I4LAb(yctckmj);
          }
          function cKRkdn(vDlnfHc) {
            if (typeof cxuqDK[vDlnfHc] === "undefined") {
              return cxuqDK[vDlnfHc] = l06wN2S(wQolDY[vDlnfHc]);
            }
            return cxuqDK[vDlnfHc];
          }
          let oOSpQ0F = vDlnfHc.target?.tagName;
          if (oOSpQ0F === "INPUT" || oOSpQ0F === "TEXTAREA") {
            return;
          }
          let KhDI0Qx = (RVWUXz.find(vDlnfHc => {
            return vDlnfHc.value === mxtpIbz.keybind;
          }) ?? RVWUXz[0]).kb;
          if (vDlnfHc.key === KhDI0Qx.key && vDlnfHc.altKey === KhDI0Qx.alt && vDlnfHc.ctrlKey === KhDI0Qx.ctrl && vDlnfHc.shiftKey === KhDI0Qx.shift) {
            vDlnfHc.preventDefault();
            sCg177();
          }
        });
      },
      ["kQxedz"]: function (oOSpQ0F, fPrXnx, sgFh6d, ldXU2Ow, Q16EmFG) {
        if (!Q16EmFG) {
          Q16EmFG = function (oOSpQ0F, fPrXnx, Q16EmFG, KhDI0Qx = {}, sbTeKU, XMhsLe, NpE97bV, Uyguw1) {
            if (!XMhsLe) {
              XMhsLe = function (oOSpQ0F) {
                if (typeof cxuqDK[oOSpQ0F] === "undefined") {
                  return cxuqDK[oOSpQ0F] = sbTeKU(wQolDY[oOSpQ0F]);
                }
                return cxuqDK[oOSpQ0F];
              };
            }
            if (!sbTeKU) {
              sbTeKU = function (oOSpQ0F) {
                var fPrXnx = "+4>vzSVn9(Q)p6}TKc|y*Ur&.=2!b$tA:H5Ox,@j7YIqmPN\"JLGl?1]~wWue^o;3/FBi`%_C8R[XsZDgdMf0k<Ea#h{";
                var Q16EmFG;
                var KhDI0Qx;
                var sbTeKU;
                var XMhsLe;
                var NpE97bV;
                var Uyguw1;
                var MV3WKRa;
                b07TQe(Q16EmFG = "" + (oOSpQ0F || ""), KhDI0Qx = Q16EmFG.length, sbTeKU = [], XMhsLe = 0, NpE97bV = 0, Uyguw1 = -1);
                for (MV3WKRa = 0; MV3WKRa < KhDI0Qx; MV3WKRa++) {
                  var sgFh6d = fPrXnx.indexOf(Q16EmFG[MV3WKRa]);
                  if (sgFh6d === -1) {
                    continue;
                  }
                  if (Uyguw1 < 0) {
                    Uyguw1 = sgFh6d;
                  } else {
                    b07TQe(Uyguw1 += sgFh6d * 91, XMhsLe |= Uyguw1 << NpE97bV, NpE97bV += (Uyguw1 & 8191) > 88 ? 13 : 14);
                    do {
                      b07TQe(sbTeKU.push(XMhsLe & 255), XMhsLe >>= 8, NpE97bV -= 8);
                    } while (NpE97bV > 7);
                    Uyguw1 = -1;
                  }
                }
                if (Uyguw1 > -1) {
                  sbTeKU.push((XMhsLe | Uyguw1 << NpE97bV) & 255);
                }
                return a5I4LAb(sbTeKU);
              };
            }
            b07TQe(NpE97bV = undefined, Uyguw1 = {
              ["8tmoWl"]: function (oOSpQ0F, fPrXnx) {
                if (!fPrXnx) {
                  fPrXnx = function (fPrXnx) {
                    if (typeof cxuqDK[fPrXnx] === "undefined") {
                      return cxuqDK[fPrXnx] = oOSpQ0F(wQolDY[fPrXnx]);
                    }
                    return cxuqDK[fPrXnx];
                  };
                }
                if (!oOSpQ0F) {
                  oOSpQ0F = function (oOSpQ0F) {
                    var fPrXnx = "z3w`)}kJWGYdh;vAs%R0P8~4[g&El|t97bo,@(/S:BLK5xOq#$ZIQV.y_*c>]niU2eTr1^fFCpa6u+!D<H?{m=\"jNXM";
                    var KhDI0Qx;
                    var sbTeKU;
                    var XMhsLe;
                    var NpE97bV;
                    var Uyguw1;
                    var MV3WKRa;
                    var sgFh6d;
                    b07TQe(KhDI0Qx = "" + (oOSpQ0F || ""), sbTeKU = KhDI0Qx.length, XMhsLe = [], NpE97bV = 0, Uyguw1 = 0, MV3WKRa = -1);
                    for (sgFh6d = 0; sgFh6d < sbTeKU; sgFh6d++) {
                      var ldXU2Ow = fPrXnx.indexOf(KhDI0Qx[sgFh6d]);
                      if (ldXU2Ow === -1) {
                        continue;
                      }
                      if (MV3WKRa < 0) {
                        MV3WKRa = ldXU2Ow;
                      } else {
                        b07TQe(MV3WKRa += ldXU2Ow * 91, NpE97bV |= MV3WKRa << Uyguw1, Uyguw1 += (MV3WKRa & 8191) > 88 ? 13 : 14);
                        do {
                          b07TQe(XMhsLe.push(NpE97bV & 255), NpE97bV >>= 8, Uyguw1 -= 8);
                        } while (Uyguw1 > 7);
                        MV3WKRa = -1;
                      }
                    }
                    if (MV3WKRa > -1) {
                      XMhsLe.push((NpE97bV | MV3WKRa << Uyguw1) & 255);
                    }
                    return a5I4LAb(XMhsLe);
                  };
                }
                let Q16EmFG = document.querySelector("h1");
                if (!!Q16EmFG && !Q16EmFG.dataset.ascenly) {
                  if (new RegExp("log in", "i").test(Q16EmFG.textContent ?? "")) {
                    Q16EmFG.dataset.ascenly = "1";
                    Q16EmFG.textContent = "";
                    Q16EmFG.append(document.createTextNode("Sign in to use "), Object.assign(document.createElement("span"), {
                      ["textContent"]: "Ascenly",
                      ["style"]: "color:#155bff;font-weight:700;letter-spacing:0.04em"
                    }));
                    i9tUoZ.disconnect();
                  }
                }
              }
            });
            if (fPrXnx === "QZkz3zYWBA") {
              ldXU2Ow = [];
            }
            if (fPrXnx === "aOiv4c1Dg8") {
              function MV3WKRa() {
                function fPrXnx(...fPrXnx) {
                  ldXU2Ow = fPrXnx;
                  return Uyguw1[oOSpQ0F].apply(this);
                }
                var Q16EmFG;
                Q16EmFG = KhDI0Qx[oOSpQ0F];
                if (Q16EmFG) {
                  n2eRlb(fPrXnx, Q16EmFG);
                }
                return fPrXnx;
              }
              NpE97bV = sgFh6d[oOSpQ0F] ||= MV3WKRa();
            } else {
              NpE97bV = Uyguw1[oOSpQ0F]();
            }
            if (Q16EmFG === "sg8YAfTRwy") {
              return {
                ["5CFq4JsE0B"]: NpE97bV
              };
            } else {
              return NpE97bV;
            }
          };
        }
        if (!fPrXnx) {
          fPrXnx = function (fPrXnx) {
            if (typeof cxuqDK[fPrXnx] === "undefined") {
              return cxuqDK[fPrXnx] = oOSpQ0F(wQolDY[fPrXnx]);
            }
            return cxuqDK[fPrXnx];
          };
        }
        if (!oOSpQ0F) {
          oOSpQ0F = function (oOSpQ0F) {
            var fPrXnx = "zcSHjnKNgA%\"p[:f]la=Y8B`J>,#dIyroU$F~7}kTb?M|VE.*v6hW@(Qqs30+LRiC_<5/t!DPxX&GO94)^Z2;ue{w1m";
            var sgFh6d;
            var ldXU2Ow;
            var Q16EmFG;
            var i9tUoZ;
            var vDlnfHc;
            var yctckmj;
            var l06wN2S;
            b07TQe(sgFh6d = "" + (oOSpQ0F || ""), ldXU2Ow = sgFh6d.length, Q16EmFG = [], i9tUoZ = 0, vDlnfHc = 0, yctckmj = -1);
            for (l06wN2S = 0; l06wN2S < ldXU2Ow; l06wN2S++) {
              var cKRkdn = fPrXnx.indexOf(sgFh6d[l06wN2S]);
              if (cKRkdn === -1) {
                continue;
              }
              if (yctckmj < 0) {
                yctckmj = cKRkdn;
              } else {
                b07TQe(yctckmj += cKRkdn * 91, i9tUoZ |= yctckmj << vDlnfHc, vDlnfHc += (yctckmj & 8191) > 88 ? 13 : 14);
                do {
                  b07TQe(Q16EmFG.push(i9tUoZ & 255), i9tUoZ >>= 8, vDlnfHc -= 8);
                } while (vDlnfHc > 7);
                yctckmj = -1;
              }
            }
            if (yctckmj > -1) {
              Q16EmFG.push((i9tUoZ | yctckmj << vDlnfHc) & 255);
            }
            return a5I4LAb(Q16EmFG);
          };
        }
        b07TQe(sgFh6d = Object.create(null), ldXU2Ow = undefined);
        let i9tUoZ = new MutationObserver(Q16EmFG("8tmoWl", "aOiv4c1Dg8"));
        b07TQe(new Q16EmFG("8tmoWl", "QZkz3zYWBA", "sg8YAfTRwy")["5CFq4JsE0B"], i9tUoZ.observe(document.documentElement, {
          ["childList"]: !0,
          ["subtree"]: !0
        }));
      }
    });
    if (yctckmj === "xskrcFuhcx") {
      Q16EmFG = [];
    }
    if (yctckmj === "FVzrwbZhVw") {
      function IoZT_i() {
        function yctckmj(...yctckmj) {
          Q16EmFG = yctckmj;
          return dHhm7IJ[vDlnfHc].apply(this);
        }
        var l06wN2S;
        l06wN2S = cKRkdn[vDlnfHc];
        if (l06wN2S) {
          n2eRlb(yctckmj, l06wN2S);
        }
        return yctckmj;
      }
      HoK2xH = ldXU2Ow[vDlnfHc] ||= IoZT_i();
    } else {
      HoK2xH = dHhm7IJ[vDlnfHc]();
    }
    if (l06wN2S === "H87mYBS5hN") {
      function fPrXnx(vDlnfHc) {
        var yctckmj = "DunClopgPqHBbVAYMv*[,3NL%d_2mahSw+$O;G\"R{Zi4}Ikr]WKj?Jx(7.csE819F0y|zt=T#UfX^/`5@6!>)Q:<e&~";
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        var dHhm7IJ;
        var IoZT_i;
        b07TQe(l06wN2S = "" + (vDlnfHc || ""), cKRkdn = l06wN2S.length, oOSpQ0F = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
        for (IoZT_i = 0; IoZT_i < cKRkdn; IoZT_i++) {
          var fPrXnx = yctckmj.indexOf(l06wN2S[IoZT_i]);
          if (fPrXnx === -1) {
            continue;
          }
          if (dHhm7IJ < 0) {
            dHhm7IJ = fPrXnx;
          } else {
            b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(oOSpQ0F.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
            } while (HoK2xH > 7);
            dHhm7IJ = -1;
          }
        }
        if (dHhm7IJ > -1) {
          oOSpQ0F.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
        }
        return a5I4LAb(oOSpQ0F);
      }
      function sgFh6d(vDlnfHc) {
        if (typeof cxuqDK[vDlnfHc] === "undefined") {
          return cxuqDK[vDlnfHc] = fPrXnx(wQolDY[vDlnfHc]);
        }
        return cxuqDK[vDlnfHc];
      }
      return {
        ["YIAtu3f8cq"]: HoK2xH
      };
    } else {
      return HoK2xH;
    }
  }
  b07TQe(vDlnfHc = "data:image/png;base64,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", yctckmj = "data:image/png;base64,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", l06wN2S = "data:image/png;base64,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", cKRkdn = "data:image/png;base64,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", oOSpQ0F = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Hover / Back &%23194;&%23183; Lucide / 93d5f434\">%0A<path id=\"Vector\" d=\"M8 12.6667L3.33333 8L8 3.33333\" stroke-width=\"1.16667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%23596170\"/>%0A<path id=\"Vector_2\" d=\"M12.6667 8H3.33333\" stroke-width=\"1.16667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%23596170\"/>%0A</g>%0A</svg>%0A", KhDI0Qx = "data:image/webp;base64,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", HoK2xH = "data:image/webp;base64,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", dHhm7IJ = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Arrow up / Lucide / send\">%0A<path id=\"Vector\" d=\"M4.16667 10L10 4.16667L15.8333 10\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"white\"/>%0A<path id=\"Vector_2\" d=\"M10 15.8333V4.16667\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"white\"/>%0A</g>%0A</svg>%0A", IoZT_i = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"40\" height=\"24\" viewBox=\"0 0 40 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Open Ask Ace / centered chevron\">%0A<path id=\"Vector\" d=\"M18 9L21 12L18 15\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%2371819B\"/>%0A</g>%0A</svg>%0A", fPrXnx = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Discord / logo\">%0A<path id=\"Vector\" d=\"M11.8533 2.54917C10.9449 2.13138 9.98604 1.83334 9.00083 1.6625L8.65083 2.38C7.60081 2.22335 6.53336 2.22335 5.48333 2.38L5.1275 1.6625C4.14214 1.83269 3.18321 2.13076 2.275 2.54917C0.4725 5.2325 -0.0174998 7.85167 0.2275 10.4358C1.2855 11.2192 2.46905 11.8169 3.7275 12.2033L4.445 11.0367C4.05511 10.8879 3.67849 10.7064 3.31917 10.4942L3.59333 10.2783C4.66377 10.7625 5.82514 11.013 7 11.013C8.17486 11.013 9.33623 10.7625 10.4067 10.2783L10.6808 10.4942C10.3192 10.7042 9.94 10.885 9.54917 11.0367L10.2667 12.2033C11.5255 11.8179 12.7093 11.2202 13.7667 10.4358C14.0583 7.4375 13.2708 4.84167 11.8533 2.54917ZM4.67833 8.84917C3.99583 8.84917 3.43583 8.21917 3.43583 7.44333C3.43583 6.6675 3.98417 6.03167 4.67833 6.03167C5.3725 6.03167 5.9325 6.6675 5.92083 7.44333C5.92083 8.21917 5.3725 8.84917 4.67833 8.84917ZM9.32167 8.84917C8.63917 8.84917 8.07917 8.21917 8.07917 7.44333C8.07917 6.6675 8.6275 6.03167 9.32167 6.03167C10.0158 6.03167 10.5758 6.6675 10.5642 7.44333C10.5642 8.21917 10.0158 8.84917 9.32167 8.84917Z\" fill=\"%23155BFF\"/>%0A</g>%0A</svg>%0A", sgFh6d = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"External link\">%0A<path id=\"Vector\" d=\"M3.5 8.5L8.5 3.5M8.5 8.5V3.5H3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%23155BFF\"/>%0A</g>%0A</svg>%0A", i9tUoZ = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Hover / Expand / Default\">%0A<path id=\"Vector\" d=\"M12 6V18M6 12H18\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke=\"%237B86A0\"/>%0A</g>%0A</svg>%0A", sbTeKU = "data:image/webp;base64,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", XMhsLe = "data:image/webp;base64,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", NpE97bV = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Filled / key\">%0A<path id=\"Vector\" d=\"M15.5 2C14.4086 1.99982 13.3347 2.27447 12.3773 2.79863C11.42 3.32278 10.61 4.07957 10.0222 4.99918C9.43437 5.91879 9.08756 6.97162 9.01378 8.06056C8.93999 9.1495 9.1416 10.2395 9.6 11.23L2 18.83V22H6V19H9V16H11.17L12.77 14.4C13.6523 14.8079 14.615 15.0127 15.5869 14.9994C16.5589 14.986 17.5155 14.7548 18.3863 14.3228C19.2572 13.8908 20.02 13.269 20.6187 12.5031C21.2173 11.7373 21.6366 10.8469 21.8456 9.89758C22.0546 8.94823 22.048 7.9641 21.8263 7.01764C21.6047 6.07118 21.1735 5.18649 20.5646 4.42871C19.9558 3.67094 19.1847 3.05938 18.3082 2.63905C17.4317 2.21873 16.4721 2.00035 15.5 2ZM18 7.5C18 7.89782 17.842 8.27936 17.5607 8.56066C17.2794 8.84196 16.8978 9 16.5 9C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158 8.27936 15 7.89782 15 7.5C15 7.10218 15.158 6.72064 15.4393 6.43934C15.7206 6.15804 16.1022 6 16.5 6C16.8978 6 17.2794 6.15804 17.5607 6.43934C17.842 6.72064 18 7.10218 18 7.5Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"%23155BFF\"/>%0A</g>%0A</svg>%0A", Uyguw1 = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Hover / Minimize / Default / ca1e26d3\">%0A<path id=\"Vector\" d=\"M6 12H18\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke=\"%237B86A0\"/>%0A</g>%0A</svg>%0A", MV3WKRa = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Plan / blue access card\">%0A<path id=\"Vector\" d=\"M13.5 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V12C2.25 13.2426 3.25736 14.25 4.5 14.25H13.5C14.7426 14.25 15.75 13.2426 15.75 12V6C15.75 4.75736 14.7426 3.75 13.5 3.75Z\" fill=\"%23155BFF\"/>%0A<path id=\"Vector_2\" d=\"M2.25 7.5H15.75\" stroke-width=\"1.5\" stroke=\"white\"/>%0A<path id=\"Vector_3\" d=\"M5.25 11.25H8.25\" stroke-width=\"1.35\" stroke-linecap=\"round\" stroke=\"white\"/>%0A</g>%0A</svg>%0A", WHivJOf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAANKADAAQAAAABAAAANAAAAABdv+0DAAAPpklEQVRoBe1ae4xc1Xn/nXPvncfOzO6s9zFee72Pmhi/7dgYgWlToxBFYJpEpIamlMR1qkhVUxI1av9BoihAqCq1DUqitn80pQokpqVNSZqqQCqVR0lSTIhNTbEDeL27OLter/c5uzM7957T33dmZj1eZtaLLSpV4njv3Dv3vL7f9z7fGHi/vc+B9zlwJRxQVzJ5RXMPTmShMjfBIs1rDMqMwwTn4WECf6vGVrTGuxj03gL6jF0PZf8RWu0gGLjLRPJU0L6e2bPT/lVym77/P25U4bugedmhetneK+000QNQBFOKDEJeEa8ysIQporMlo+/tL0SP3/VPtvNKt6rOf+8AHRrLkPhfRcmU97qgCxaKPdYYLESmpdm7rRQWnszueyVbJepK7v5lTz4wlESmowslS56HeSCdRwElJM3nKZWPEkiMZOeochVE3OkCKLdtwtNIRaF56V9OXTc5fPYmvnzisumpTLw8QHctHITn/yFC20siDUxsnuo0C1Oao8Fvga8VtMctqGJVEKJq1WfZnENQLOKpR36GN1+esejqvhPXWx9m4Rgei78mQy6n1W6xsvmfDu+A0odhONVEwAKn8YZiCfD4pTlVVilZWS4CUbwv4pF3lJnlyyZMY+4sHZ/WsLZJI94KFddTdnLyEDqTz0KP5/FIf4EzVtxk+ZW3+8jBt8Ifw/i7xcBjAfBb1wMbcwZnxwt44hWFgakmAhMUXFZQyCMtVRRTmoCrNkEOqh2bUoUZawcHqbkd1MNMCbHYOarrNCU5Dh9D0Pg3zHiP4x/UfHV+vXvN8vW6l7w7aPvosV4lh9O0HfPVgwpf2G8qjkVhz33aHDnJJQm0DKiKQtYpP8uG8uQ2ru5O9bSTo1ADx2FjaynldoV0WiGIAT4HifbKLjb6ER3JIXwn/jq/1W0VYur2vfNlGG4kuyVAmnb6pN+8gUOsNlGkqUTa3HxVHsn8KDA1DkxM8D4DzMwB+SJVk3rJEGStoKCKUWzWUSl3PszN4guH1uH2X88ily1Y5PMGpSKvsHKJPXrXIwj+FZ+yG99JXPnNu3MKGtscb0lbfwfQ1kxzqAghIrH3HEjg1l0Gw6MljJwv4hfnI4xOGF4RRqZCjM8qTM1pzBYVChF5SQ224jwiZboTU7jlxg0Yj6Ww54YQT/1wDj98jsxIU4Wpc64xnimt+q1vH8NB+2E8oibLHRc+3x0gYz/odCW02ErN0NrqKFICycEKfI1rN2ewZxNFSKQRQ01IoAtkcoHMnp2PMJ0PMTkTYZwAz00Q+Pg8JqZKuG5HJzpafOTnDVpSGvtvTmNw+DxOvkWTaU6RjwROz2hHhw3izbsQeJ/lvn92AUr5aeWAPmcDzIVby6QDO3plAcFRMQRau6Xli6TkleI/3/Np8xYx7tIUt2jNiEQJVi4BzLsAliRiejZEgbxJ02yKZJjM/+THM/jaX06QEVwgmSjvFVI9itOUatQvFCxtK7ehElZTJD2kxBn9tl4BUgEjq5K4xcZH+ebeCDheHrnr08BjgUYi8JCM+0jFA6QTAe8xpBI+32s00aE0x8kA36KvO4aP3ULpFKl6IdO9ktgh93du05xe3K/mYeUSCsMPUOYtJNw0N1msz5FK2jipFUuvWbLmcen7mmGc7YBqTzmwYeRjoaSQomYJcE+8W97iV/amcfLNEo4cpWNJUXzCROf79emanRYfBZCsXbPVYt+SB73DcSaK0LsK6GoV9akDRjZzq61gycoOMsVJrlTC/5wu4aWfh2hrVUhmPASU4ic/lsHQyCxGxwlK6JWM3ejhJQS6ryuXkKJDEBop9U10CLHA0CGIu3bNeQYHZalUKgMuvl3MQ/kWMMCKKq5vK+L5IyXc82iI+UIR2YxBdlWcGRE3pwTL/EceQeIXF69Z/rYyQAcsI1+4RVIW8dPbnf3USIBqp8oB5mJK6+3Y4B2zH9qVh/ZsDHffpnHdduCPD2dx9CQwNsbOyVNl+/FTkqtPME6dr7eUOIUayuoN4bvMXI6RsJ8pv4RAbO9xasoOoZ9NpCLbyFVtTs+rX5beLwxzPRwrK/m0J3EOSTqJvVdrPPrFEL/zcSYMzfQUIR2DOCRNGcjJ9+WXZ5euKt9XJiET28CVspSOSdIDbVwrtiM01BBW8+g2ciBlyNKOOmRUxlRBNSU8Jggaa7wID90RIR2fx1dfZ+KboMcTjip9Bridyv/OJhK6dIvsTgY1JalLd5vFWjoF5xDqzeQwQhDaBEz5Ls+1Eqt9lr6aJhPkZBGjlxNppZti2PeBedoY3bYSL0c3CDtUM+Wix5UBgt7lZpEnG7tckNSS8iwSXrMkgyuzk0XRXRBPVVLLgKlZxuFn4oF4oNXEeZ4cS+z1qVCORd5A7dja50sD2seEC2qrO/OIQ+jhdC7KP2H/BYIrq/qeVWFEm3Ab125VeRZgVXB1uuWVTHXTuYhs8NbbTH9CSkbJuYR/JhqUcfWaAGq0dXn82vnV1K9+d5jjyB19Mly24UQ+ep5hbDSikHy2+t9fVeYz37Q4ztOMp2yFYTJnZa28cnmszGKmY0+epkPwqG7iOwzzIs8fbrTapSUUC+gQlBQwTIzp1MZubkMnzRxNlSiJP/+BNkeHNRFZ/Rc/UObWPwHO0P8cOaftifOClDMb4CHxEr9cby0QIVa+C5NmC6YsoYDeSByRwhwWvLoxSOZRnS7RQnzQnSqZR61uA3raOZ5xZ2RS4XN/Y/H9HwObNyhsphyfeJEU0Ji391kcfWkcC20KV+/PSp5cJsXKud3FYLcGX9LkypmToHIgKnehSgBJRj48wlO4T08k1mmiSZ5meeCq3wTQUuYsGal2uREMARtyQEsTeUTCfvKmNt//Lw7lwfK1IYvXBinsJjJwbhrfe2Icv7xJ40s3d+DMDOwL7GcSYFsS2jZTc9IMK6kYUxvfKnpoME+14gC4MCFYZXhYdGZmrR4cnTfjk/RwSU4Sl22iUTz7DE+O9dvyEhKHYJghCPsIaItzCEZJyrN/h8VdNwLfeo6dCQ0VLcCOjELPFvCJA1n8we0pdGYDvHgGeJkKIgRLk6VEDX1m0zEeVumZHa0p0psMlG1NKHttFwsoAfnMcT+n/SwU+JDhAMmyFd5uFINk/eUB9RTWIAr6XYbA9bf3CDkSU0kUqXroQIjjZxR+enQC9twIWlvT+PKXcrj9QwHdrU+V0dhJqZJwTDMuztL15nmf473AECCncnk3yZxTwoAkAjwLYjULR5vbJPOlHQ7QIUAcAhcp+5hBvmjYlgek/I2kvJkB1WhybMs6AuLGog6Msazlanz9zgV84r/n0Ly+DQ/fncJNO2M8slBiZW4iQ1r2ruP+HC9N5gnRRYIpUJPmCcgB5X2awESSPS2iEMousP/EKXoYnw7BZQjCUD3Aj4ZteUAGO51lModr5yZ9rCMYFkUqtNFXUAJ9Hr77QDta0sBVXR4e/5HGjvUK2xiA3XmMg6V8V9uYskFUTGxJScmATRyAkFtllnyZmAnxxhCLsgGLF86oiDCKBmR8o0Z+LNOU2u16SVC1KOIOjHwZo0GfYWHHY5Fj72ZPd7QEOPQ1D1/8O+CZQYU3p7SzFUfkRVuUg6VwpSotkZiAFxWUUrjQToDq7bMstJxlUHUSIkTDXus3THtkm8aADljWpu1Wd2QgY7Z2c10GUTeJn994WtndfwQ88D2F517zzY33KXz7WWDtGg8drB0cfn6aFSwj3g0xXr5cnCd1RXEKVYlUsYrU5ZImd+JRJwfyyM8SYYwqpzjDguVmM+IGNfhorHIp5xDWOYfAydt6yisElMxX/hn2nu+QqkDh/ictHnqSdsHsGM0saZfyeOxbo9i3Jc6A3oQXBlmaoyPIMihLrSAds3TXdIy8YtQ9n0UUUUH+OSAiLXmWduzkFMUoHKBuuresok55DWOQzGkMyASbuBJ/EqEBkbubxSHw5zfh3qZciV5MoeiVNwrldKZI9egITp3N4467sjh0awvG5hSefkvsTraS1Ig84FC5RGJxpmbiNMSW0gTbQXvawsAtUgyNMkdfJyBRNwnNQgTjOY530Kgat8aAYK9xekE8UhS5ikUR4R5LCvi1az3cMxTi3u9yYe6HmbPMd8ZwdV8cD/5uDnu3JmhjPjoTCh9dz2hPMxBPJu66SPWterhZ8mCscm6r2A3adyn00AeMTYd4fYAeLhCvQYSuIBkOCarGcJaTENRGN5EAepny5JjNCRhZTXK439+vcfJchEf/npEzP4lbb+rAvb+dRm/Od2BiNB6xlevXludUnYAY/QLn50us9hKQABV3PcNLkoG2JBMitlPDefv2KFOeGDcXMJJERHZwOTDS11hCGkxaOIKXGHaCqYrkI+LlyCWmKxoPHmAl9EwCG7rX4vO3JdyBLM7BHnVGjF6mi+dyjd/5RzUT+7FoEU3i96pzkLHSKuurnx6ftCVWWcspT7mPE05VnhreGgNC6TBZ81kqvH/sdGQePLyAT39YsfrpsQqq4QVar+tQ9vC9rbaceNFN05aESBcyqhRWt+Z3l6nJ+yV9Mkeau7sPi2ePnOMLiswT5HxpCc5iwA1c5qO6Vv0hdxZ+j277YUQ05/kFkw2m0dVc4jFcYV0nVH/Ot71dgerJxWxulc/gyyNz0mOJS7J8yVOEcv46QYQSXAW4w8IPoVGafK8SIe949FanhvL2mt94ARMF1hBWrScoZr1RFKJorsHzuWNuYoOPZSTEGY8lvoEbTswi8L/OOlh6kr9wTI6xGHiC3OL6/L2Gm7GEFfAHoyT1n/FnNQuEPZ0B+rrihhe6V8expiOmcq0x25z20cREVs5OAqKSFRqpc0ujFuv8fGTu/soxTPB4gmYu6tPfS3nVYIqgRtzAZT6qzFlmCLt2H2G1P/YReu1fopPpY3DrJhjKCC2MEdQLCkN4LdmleI6Qlu7+PwJFQpuJE0Q2o5BrC7C2PYZeAhWwPV1JdOfiyLGQKPHo1RNT+NNvvoEXX5nj/9XIwgaUUHMvmZbUKBb+E09nPkR5OituRPDKAC2dveU4o8fZVUg1MZfGOkqrn4kxwZp+6tU6GhOdvF1Ff5WEohLIuU5qenIJYCddgtU88FA9M0zsLKU9zZ9VnJ9KMXGU5LZ4HirRqm0rQ+JC9CkCol0v3y4P0LJr0na2vdCCeKmThZVuUtbngModliVKtYbA2umZm62m61zMvghAUgYRqSWwIoOqR3VTLM55iS/jJ3vu55eybnJUo/YeAGq0VeX99qdSTGfa4JkuVkF7KK5+aislrAhcdxNwhzLFDKthM9DxI5Tuw/jZvmcusepi9/89oMWt6zzs/usAZl0WC/zZpmim8MYtY3VGvf/q/zUH/hdUM9fuv7FDEgAAAABJRU5ErkJggg==", Z6bwiaJ = "data:image/png;base64,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", cWVaZN = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"16.6667\" height=\"16.6667\" viewBox=\"0 0 16.6667 16.6667\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Group\">%0A<path id=\"Vector\" d=\"M6.9375 1.93083C7.2925 0.4675 9.37417 0.4675 9.72917 1.93083C9.78243 2.15067 9.88685 2.35482 10.0339 2.52667C10.181 2.69852 10.3666 2.83321 10.5755 2.91979C10.7845 3.00636 11.011 3.04238 11.2365 3.02489C11.462 3.00741 11.6802 2.93692 11.8733 2.81917C13.1592 2.03583 14.6317 3.5075 13.8483 4.79417C13.7307 4.98721 13.6604 5.20528 13.6429 5.43064C13.6255 5.65601 13.6615 5.88231 13.7479 6.09115C13.8344 6.29999 13.9689 6.48548 14.1406 6.63254C14.3123 6.77961 14.5162 6.88409 14.7358 6.9375C16.1992 7.2925 16.1992 9.37417 14.7358 9.72917C14.516 9.78243 14.3119 9.88685 14.14 10.0339C13.9681 10.181 13.8335 10.3666 13.7469 10.5755C13.6603 10.7845 13.6243 11.011 13.6418 11.2365C13.6593 11.462 13.7297 11.6802 13.8475 11.8733C14.6308 13.1592 13.1592 14.6317 11.8725 13.8483C11.6795 13.7307 11.4614 13.6604 11.236 13.6429C11.0107 13.6255 10.7844 13.6615 10.5755 13.7479C10.3667 13.8344 10.1812 13.9689 10.0341 14.1406C9.88706 14.3123 9.78258 14.5162 9.72917 14.7358C9.37417 16.1992 7.2925 16.1992 6.9375 14.7358C6.88423 14.516 6.77982 14.3119 6.63274 14.14C6.48567 13.9681 6.30009 13.8335 6.09112 13.7469C5.88215 13.6603 5.6557 13.6243 5.43018 13.6418C5.20466 13.6593 4.98646 13.7297 4.79333 13.8475C3.5075 14.6308 2.035 13.1592 2.81833 11.8725C2.93592 11.6795 3.00629 11.4614 3.02374 11.236C3.04118 11.0107 3.0052 10.7844 2.91873 10.5755C2.83225 10.3667 2.69772 10.1812 2.52606 10.0341C2.3544 9.88706 2.15047 9.78258 1.93083 9.72917C0.4675 9.37417 0.4675 7.2925 1.93083 6.9375C2.15067 6.88423 2.35482 6.77982 2.52667 6.63274C2.69852 6.48567 2.83321 6.30009 2.91979 6.09112C3.00636 5.88215 3.04238 5.6557 3.02489 5.43018C3.00741 5.20466 2.93692 4.98646 2.81917 4.79333C2.03583 3.5075 3.5075 2.035 4.79417 2.81833C5.6275 3.325 6.7075 2.87667 6.9375 1.93083Z\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%237B86A0\"/>%0A<path id=\"Vector_2\" d=\"M5.83333 8.33333C5.83333 8.99637 6.09673 9.63226 6.56557 10.1011C7.03441 10.5699 7.67029 10.8333 8.33333 10.8333C8.99637 10.8333 9.63226 10.5699 10.1011 10.1011C10.5699 9.63226 10.8333 8.99637 10.8333 8.33333C10.8333 7.67029 10.5699 7.03441 10.1011 6.56557C9.63226 6.09673 8.99637 5.83333 8.33333 5.83333C7.67029 5.83333 7.03441 6.09673 6.56557 6.56557C6.09673 7.03441 5.83333 7.67029 5.83333 8.33333Z\" stroke-width=\"1.66667\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"%237B86A0\"/>%0A</g>%0A</svg>%0A", VwxGquh = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"13.6569\" height=\"16\" viewBox=\"0 0 13.6569 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<path id=\"Spinner / editable arc\" d=\"M13.6569 13.6569C12.538 14.7757 11.1126 15.5376 9.56072 15.8463C8.00887 16.155 6.40034 15.9965 4.93853 15.391C3.47672 14.7855 2.22729 13.7602 1.34824 12.4446C0.469192 11.129 9.7449e-08 9.58225 0 8C-9.74489e-08 6.41775 0.469192 4.87104 1.34824 3.55544C2.22729 2.23985 3.47672 1.21447 4.93853 0.608968C6.40034 0.00346646 8.00887 -0.15496 9.56072 0.153721C11.1126 0.462403 12.538 1.22433 13.6569 2.34315L12.2426 3.75736C11.4035 2.91825 10.3344 2.3468 9.17054 2.11529C8.00665 1.88378 6.80026 2.0026 5.7039 2.45673C4.60754 2.91085 3.67047 3.67989 3.01118 4.66658C2.35189 5.65328 2 6.81332 2 8C2 9.18669 2.35189 10.3467 3.01118 11.3334C3.67047 12.3201 4.60754 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426L13.6569 13.6569Z\" fill=\"%23155BFF\"/>%0A</svg>%0A", qZk6aKD = "data:image/png;base64,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", u8aCdFu = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Website / globe\">%0A<path id=\"Vector\" d=\"M12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C4.10051 12.25 1.75 9.8995 1.75 7C1.75 4.10051 4.10051 1.75 7 1.75C9.8995 1.75 12.25 4.10051 12.25 7Z\" stroke-width=\"1.05\" stroke=\"%23155BFF\"/>%0A<path id=\"Vector_2\" d=\"M9.33333 7C9.33333 9.8995 8.28866 12.25 7 12.25C5.71134 12.25 4.66667 9.8995 4.66667 7C4.66667 4.10051 5.71134 1.75 7 1.75C8.28866 1.75 9.33333 4.10051 9.33333 7Z\" stroke-width=\"1.05\" stroke=\"%23155BFF\"/>%0A<path id=\"Vector_3\" d=\"M1.75 7H12.25\" stroke-width=\"1.05\" stroke=\"%23155BFF\"/>%0A</g>%0A</svg>%0A", NOWx2r = "data:image/png;base64,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", vV9IQnH = vDlnfHc, bLxPxuA = yctckmj, jKnOri = l06wN2S, HldUnBJ = cKRkdn, Kq6MDI = oOSpQ0F, YyLqY7 = KhDI0Qx, t3NVDC = HoK2xH, iE_IrT = dHhm7IJ, CEllbSn = IoZT_i, Mh_4FfG = fPrXnx, x2_aaGQ = sgFh6d, t3QQhTw = i9tUoZ, eWiK23J = sbTeKU, E_acyNp = XMhsLe, QYd_9Dr = NpE97bV, mW7GYp0 = Uyguw1, WVEmrT = MV3WKRa, cy2gjp = WHivJOf, BbNEmN = Z6bwiaJ, ARJTd9Z = cWVaZN, YPQyBa = VwxGquh, cSWkCRE = cWVaZN, TmC7pJ = qZk6aKD, UEmki2Q = u8aCdFu, GZ24GI6 = NOWx2r, yt3q1m = {
    ["blue"]: {
      ["hue"]: 215,
      ["sat"]: "70%"
    },
    ["green"]: {
      ["hue"]: 158,
      ["sat"]: "70%"
    },
    ["pink"]: {
      ["hue"]: 335,
      ["sat"]: "85%"
    },
    ["purple"]: {
      ["hue"]: 270,
      ["sat"]: "65%"
    },
    ["orange"]: {
      ["hue"]: 25,
      ["sat"]: "90%"
    },
    ["rgb"]: {
      ["hue"]: 0,
      ["sat"]: "75%"
    }
  });
  function gxiwcC5(ldXU2Ow, Q16EmFG = !1, vDlnfHc, yctckmj) {
    if (!yctckmj) {
      yctckmj = function (ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = vDlnfHc(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      };
    }
    if (!vDlnfHc) {
      vDlnfHc = function (ldXU2Ow) {
        var Q16EmFG = "h^VPUx,N9WlA%=(ZK)t}J.{Gva+Y4#8`y*r&:~25D|$;]\"uIOm6dcTf<enjbF?wq_iz!/@70>[1QCsR3XgHkoLpEMSB";
        var vDlnfHc;
        var yctckmj;
        var cKRkdn;
        var oOSpQ0F;
        var HoK2xH;
        var dHhm7IJ;
        var fPrXnx;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, cKRkdn = [], oOSpQ0F = 0, HoK2xH = 0, dHhm7IJ = -1);
        for (fPrXnx = 0; fPrXnx < yctckmj; fPrXnx++) {
          var sgFh6d = Q16EmFG.indexOf(vDlnfHc[fPrXnx]);
          if (sgFh6d === -1) {
            continue;
          }
          if (dHhm7IJ < 0) {
            dHhm7IJ = sgFh6d;
          } else {
            b07TQe(dHhm7IJ += sgFh6d * 91, oOSpQ0F |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(cKRkdn.push(oOSpQ0F & 255), oOSpQ0F >>= 8, HoK2xH -= 8);
            } while (HoK2xH > 7);
            dHhm7IJ = -1;
          }
        }
        if (dHhm7IJ > -1) {
          cKRkdn.push((oOSpQ0F | dHhm7IJ << HoK2xH) & 255);
        }
        return a5I4LAb(cKRkdn);
      };
    }
    if (typeof document > "u") {
      return;
    }
    let l06wN2S = ldXU2Ow.toLowerCase() === "ping" ? "pink" : ldXU2Ow.toLowerCase();
    let cKRkdn = Object.prototype.hasOwnProperty.call(yt3q1m, l06wN2S) ? l06wN2S : "blue";
    let {
      ["hue"]: oOSpQ0F,
      ["sat"]: KhDI0Qx
    } = yt3q1m[cKRkdn];
    let HoK2xH = cKRkdn === "pink" ? 45 : 40;
    let dHhm7IJ = cKRkdn === "rgb" ? "var(--pv-rgb-hue)" : String(oOSpQ0F);
    let IoZT_i = "hsl(" + dHhm7IJ + ", " + KhDI0Qx + ", " + HoK2xH + "%)";
    let fPrXnx = "hsl(" + dHhm7IJ + ", " + KhDI0Qx + ", " + (HoK2xH - 7) + "%)";
    document.querySelectorAll(".pv-panel").forEach(ldXU2Ow => {
      function vDlnfHc(ldXU2Ow) {
        var vDlnfHc = "OoGV}gfC%Ku<vXblRc*$wMB=ZDPnp!FjEmr07t[39ILTi/?~4e^(,{>aNdH#@y.5;Q\"2|S_shx+YkA]WqJz6U:&)81`";
        var oOSpQ0F;
        var Q16EmFG;
        var yctckmj;
        var cKRkdn;
        var HoK2xH;
        var dHhm7IJ;
        var fPrXnx;
        b07TQe(oOSpQ0F = "" + (ldXU2Ow || ""), Q16EmFG = oOSpQ0F.length, yctckmj = [], cKRkdn = 0, HoK2xH = 0, dHhm7IJ = -1);
        for (fPrXnx = 0; fPrXnx < Q16EmFG; fPrXnx++) {
          var sgFh6d = vDlnfHc.indexOf(oOSpQ0F[fPrXnx]);
          if (sgFh6d === -1) {
            continue;
          }
          if (dHhm7IJ < 0) {
            dHhm7IJ = sgFh6d;
          } else {
            b07TQe(dHhm7IJ += sgFh6d * 91, cKRkdn |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(yctckmj.push(cKRkdn & 255), cKRkdn >>= 8, HoK2xH -= 8);
            } while (HoK2xH > 7);
            dHhm7IJ = -1;
          }
        }
        if (dHhm7IJ > -1) {
          yctckmj.push((cKRkdn | dHhm7IJ << HoK2xH) & 255);
        }
        return a5I4LAb(yctckmj);
      }
      function oOSpQ0F(ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = vDlnfHc(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      }
      b07TQe(ldXU2Ow.dataset.theme = cKRkdn, ldXU2Ow.dataset.mode = Q16EmFG ? "dark" : "light", ldXU2Ow.style.setProperty("--hue", dHhm7IJ), ldXU2Ow.style.setProperty("--sat", KhDI0Qx), ldXU2Ow.style.setProperty("--art-hue", "calc(" + dHhm7IJ + " * 1deg - 222deg)"), ldXU2Ow.style.setProperty("--c-primary", IoZT_i), ldXU2Ow.style.setProperty("--c-primary-2", fPrXnx), ldXU2Ow.style.setProperty("--c-primary-f", "hsla(" + dHhm7IJ + ", " + KhDI0Qx + ", " + HoK2xH + "%, 0.08)"), ldXU2Ow.style.setProperty("--c-grad", "linear-gradient(135deg, " + IoZT_i + ", " + fPrXnx + ")"));
    });
  }
  b07TQe(QdemOlT = [{
    ["value"]: "ms",
    ["label"]: "ms"
  }, {
    ["value"]: "s",
    ["label"]: "sec"
  }, {
    ["value"]: "min",
    ["label"]: "min"
  }], VoJYve = [{
    ["value"]: "90-100",
    ["label"]: "A (90–100%)"
  }, {
    ["value"]: "80-100",
    ["label"]: "B (80–100%)"
  }, {
    ["value"]: "70-100",
    ["label"]: "C (70–100%)"
  }],  BGtSzH = [{
    ["id"]: "edgenuityCore",
    ["label"]: "Automations"
  }, {
    ["id"]: "delaysAccuracy",
    ["label"]: "Timing"
  }, {
    ["id"]: "modelSettings",
    ["label"]: "Model"
  }, {
    ["id"]: "misc",
    ["label"]: "Settings"
  }, {
    ["id"]: "aiAssistant",
    ["label"]: "AI"
  }],
 RVWUXz = [{
    ["value"]: "h",
    ["label"]: "H",
    ["kb"]: {
      ["key"]: "h",
      ["alt"]: !1,
      ["ctrl"]: !1,
      ["shift"]: !1
    }
  }, {
    ["value"]: "alt-q",
    ["label"]: "Alt+Q",
    ["kb"]: {
      ["key"]: "q",
      ["alt"]: !0,
      ["ctrl"]: !1,
      ["shift"]: !1
    }
  }, {
    ["value"]: "backtick",
    ["label"]: "` (backtick)",
    ["kb"]: {
      ["key"]: "`",
      ["alt"]: !1,
      ["ctrl"]: !1,
      ["shift"]: !1
    }
  }], CYkeucU = {
    ["minimized"]: !1,
    ["theme"]: "blue",
    ["darkMode"]: !1,
    ["square"]: !1,
    ["keybind"]: "h",
    ["pos"]: {
      ["x"]: 40,
      ["y"]: 40
    },
    ["view"]: "",
    ["key"]: "",
        ["provider"]: "gemini",
    ["model"]: "gemini-2.5-flash",
    ["customModel"]: "",
    ["apiKeys"]: {
      ["gemini"]: "",
      ["groq"]: "",
      ["cerebras"]: "",
      ["ollama"]: "ollama"
    },
    ["session"]: "",
    ["signInVerifier"]: "",
    ["signInCode"]: "",
    ["modules"]: {
      ["autoAdvanceCore"]: !1,
      ["autoQuiz"]: !1,
      ["autoAssignment"]: !1,
      ["autoWriting"]: !1,
      ["autoLanguage"]: !1,
      ["skipVideos"]: !1,
      ["autoAnswerEX"]: !1,
      ["autoAdvanceEX"]: !1,
      ["autoWritingEX"]: !1,
      ["corruptProject"]: !1,
      ["multiTabs"]: !1,
      ["tabIndicator"]: !1,
      ["hidePersonalInfo"]: !1
    },
    ["subOpts"]: {
      ["autoQuiz"]: {
        ["autoSubmit"]: !0,
        ["grade"]: "90-100"
      },
      ["autoAssignment"]: {
        ["mode"]: "auto"
      },
      ["autoAnswerEX"]: {
        ["autoSubmit"]: !0
      },
      ["autoWriting"]: {
        ["autoSubmit"]: !0
      },
      ["autoWritingEX"]: {
        ["autoSubmit"]: !0
      },
      ["autoAdvanceCore"]: {
        ["startQuizzes"]: !0
      },
      ["autoAdvanceEX"]: {
        ["startQuizzes"]: !0
      }
    },
    ["delays"]: {
      ["next"]: {
        ["min"]: 1,
        ["max"]: 3,
        ["unit"]: "s"
      },
      ["submit"]: {
        ["min"]: 1,
        ["max"]: 3,
        ["unit"]: "s"
      }
    }
  }, tqsjV9r = GM_getValue("panel_state", {}), F7F6RBB = {
    ...CYkeucU.subOpts
  });
  for (let vqn41uc of Object.keys(F7F6RBB)) {
    F7F6RBB[vqn41uc] = {
      ...F7F6RBB[vqn41uc],
      ...(tqsjV9r.subOpts?.[vqn41uc] ?? {})
    };
  }
  mxtpIbz = {
    ...CYkeucU,
    ...tqsjV9r,
    ["pos"]: {
      ...CYkeucU.pos,
      ...(tqsjV9r.pos ?? {})
    },
    ["apiKeys"]: {
      ...CYkeucU.apiKeys,
      ...(tqsjV9r.apiKeys ?? {}),
      ["gemini"]: tqsjV9r.apiKeys?.gemini || tqsjV9r.key || ""
    },
    ["modules"]: {
      ...CYkeucU.modules,
      ...(tqsjV9r.modules ?? {})
    },
    ["delays"]: {
      ...CYkeucU.delays,
      ...(tqsjV9r.delays ?? {})
    },
    ["features"]: {
      ...CYkeucU.features,
      ...(tqsjV9r.features ?? {})
    }
  }, tkD5ZbK = () => {
    return GM_setValue("panel_state", mxtpIbz);
  };
  function kFAxDy(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG) {
      Q16EmFG = function (Q16EmFG) {
        if (typeof cxuqDK[Q16EmFG] === "undefined") {
          return cxuqDK[Q16EmFG] = ldXU2Ow(wQolDY[Q16EmFG]);
        }
        return cxuqDK[Q16EmFG];
      };
    }
    if (!ldXU2Ow) {
      ldXU2Ow = function (ldXU2Ow) {
        var Q16EmFG = "u!64#>)[b@ejhO%8.sPCf;F_:MpXAiY]7mD$^~TNlSc,HV1d?GJvw=}z2Iant0Ro&q{L35B\"/rEyKgQU*`kZW+x9<(|";
        var vDlnfHc;
        var yctckmj;
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
        for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
          var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
          if (dHhm7IJ === -1) {
            continue;
          }
          if (KhDI0Qx < 0) {
            KhDI0Qx = dHhm7IJ;
          } else {
            b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
            } while (oOSpQ0F > 7);
            KhDI0Qx = -1;
          }
        }
        if (KhDI0Qx > -1) {
          l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
        }
        return a5I4LAb(l06wN2S);
      };
    }
    return !mxtpIbz.key && window.__ascenly_quota?.remaining === 0;
  }
  b07TQe(toEw_S = ldXU2Ow => {
    return new Promise(Q16EmFG => {
      return setTimeout(Q16EmFG, ldXU2Ow);
    });
  }, L3V2K0U = {
    ["ms"]: 1,
    ["s"]: 1000,
    ["min"]: 60000
  });
  async function l8Lz9Sp(ldXU2Ow, Q16EmFG, vDlnfHc) {
    if (!vDlnfHc) {
      vDlnfHc = function (ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = Q16EmFG(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      };
    }
    if (!Q16EmFG) {
      Q16EmFG = function (ldXU2Ow) {
        var Q16EmFG = "~BPWpJLHeAFmkEY|MI<z)w138lS;u${}R#g>.+ZN4%/qCv0i]d5D`GsfXa7_V6Kh?t2,:*c@(xrUy=\"^nj!TQ9&o[bO";
        var vDlnfHc;
        var yctckmj;
        var cKRkdn;
        var KhDI0Qx;
        var HoK2xH;
        var dHhm7IJ;
        var IoZT_i;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, cKRkdn = [], KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = -1);
        for (IoZT_i = 0; IoZT_i < yctckmj; IoZT_i++) {
          var fPrXnx = Q16EmFG.indexOf(vDlnfHc[IoZT_i]);
          if (fPrXnx === -1) {
            continue;
          }
          if (dHhm7IJ < 0) {
            dHhm7IJ = fPrXnx;
          } else {
            b07TQe(dHhm7IJ += fPrXnx * 91, KhDI0Qx |= dHhm7IJ << HoK2xH, HoK2xH += (dHhm7IJ & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(cKRkdn.push(KhDI0Qx & 255), KhDI0Qx >>= 8, HoK2xH -= 8);
            } while (HoK2xH > 7);
            dHhm7IJ = -1;
          }
        }
        if (dHhm7IJ > -1) {
          cKRkdn.push((KhDI0Qx | dHhm7IJ << HoK2xH) & 255);
        }
        return a5I4LAb(cKRkdn);
      };
    }
    let yctckmj = mxtpIbz.delays[ldXU2Ow];
    if (!yctckmj) {
      return;
    }
    let l06wN2S = Math.min(yctckmj.min, yctckmj.max);
    let cKRkdn = Math.max(yctckmj.min, yctckmj.max);
    let oOSpQ0F = (l06wN2S === cKRkdn ? l06wN2S : Math.random() * (cKRkdn - l06wN2S) + l06wN2S) * L3V2K0U[yctckmj.unit];
    if (oOSpQ0F > 0) {
      await toEw_S(oOSpQ0F);
    }
  }
  function juGOly(ldXU2Ow, Q16EmFG = 100, vDlnfHc = 5000) {
    return new Promise((yctckmj, l06wN2S) => {
      let cKRkdn = Date.now();
      function oOSpQ0F() {
        try {
          let KhDI0Qx = ldXU2Ow();
          if (KhDI0Qx) {
            yctckmj(KhDI0Qx);
            return;
          }
          if (Date.now() - cKRkdn > vDlnfHc) {
            yctckmj(!1);
            return;
          }
          setTimeout(oOSpQ0F, Q16EmFG);
        } catch (KhDI0Qx) {
          l06wN2S(KhDI0Qx);
        }
      }
      oOSpQ0F();
    });
  }
  b07TQe(Ene7WFT = ldXU2Ow => {
    function Q16EmFG(ldXU2Ow) {
      var Q16EmFG = "cbSEZVXlDThtPMUCiofNrRgBGHKjAqIsdWaLJ;5YO>n#wk?Qyxm!4e$p37|2,[<{)u1(6:_./&v%+`9\"=^}@*z~F]80";
      var vDlnfHc;
      var yctckmj;
      var l06wN2S;
      var cKRkdn;
      var oOSpQ0F;
      var KhDI0Qx;
      var HoK2xH;
      b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
      for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
        var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
        if (dHhm7IJ === -1) {
          continue;
        }
        if (KhDI0Qx < 0) {
          KhDI0Qx = dHhm7IJ;
        } else {
          b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
          do {
            b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
          } while (oOSpQ0F > 7);
          KhDI0Qx = -1;
        }
      }
      if (KhDI0Qx > -1) {
        l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
      }
      return a5I4LAb(l06wN2S);
    }
    function vDlnfHc(ldXU2Ow) {
      if (typeof cxuqDK[ldXU2Ow] === "undefined") {
        return cxuqDK[ldXU2Ow] = Q16EmFG(wQolDY[ldXU2Ow]);
      }
      return cxuqDK[ldXU2Ow];
    }
    if ("Ik0AA5e" in OyEKmUI) {
      yctckmj();
    }
    function yctckmj() {
      function Q16EmFG(Q16EmFG) {
        return Q16EmFG[1] * 67108864 + (Q16EmFG[0] < 0 ? 33554432 | Q16EmFG[0] : Q16EmFG[0]);
      }
      function vDlnfHc(Q16EmFG) {
        switch (((Q16EmFG & 33554432) !== 0) * 1 + (Q16EmFG < 0) * 2) {
          case 0:
            return [Q16EmFG % 33554432, Math.trunc(Q16EmFG / 67108864)];
          case 1:
            return [Q16EmFG % 33554432 - 33554432, Math.trunc(Q16EmFG / 67108864) + 1];
          case 2:
            return [((Q16EmFG + 33554432) % 33554432 + 33554432) % 33554432, Math.round(Q16EmFG / 67108864)];
          case 3:
            return [Q16EmFG % 33554432, Math.trunc(Q16EmFG / 67108864)];
        }
      }
      let yctckmj = Q16EmFG([2, 4]);
      let l06wN2S = Q16EmFG([1, 2]);
      let cKRkdn = yctckmj + l06wN2S;
      let oOSpQ0F = cKRkdn - l06wN2S;
      let KhDI0Qx = oOSpQ0F * 2;
      let HoK2xH = KhDI0Qx / 2;
      b07TQe(console.log(vDlnfHc(cKRkdn)), console.log(vDlnfHc(oOSpQ0F)), console.log(vDlnfHc(KhDI0Qx)), console.log(vDlnfHc(HoK2xH)));
    }
    try {
      return ldXU2Ow();
    } catch {
      return null;
    }
  }, m2nk1T = [".wnr-contentCell-IframeInteractive", ".wnr-contentComponent-type-IframeInteractive", "iframe[src*=\"ifUtilsBridge\"]", "iframe[src*=\"interactiveframes\"]"].join(","), FAOAWxS = () => {
    return !!document.querySelector(m2nk1T);
  }, iKyU_no = () => {
    let ldXU2Ow = Array.from(document.querySelectorAll(m2nk1T)).map(ldXU2Ow => {
      function Q16EmFG(ldXU2Ow) {
        var Q16EmFG = "iFd8NUDn^/1*v>`79=ka<,)qBHs\"XMETO]5YjbyW$AV{|pu.;%eg+&lJ![rtKxR}fz_3#L06(~@Cm4Qh2IGwPcZSo:?";
        var vDlnfHc;
        var yctckmj;
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
        for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
          var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
          if (dHhm7IJ === -1) {
            continue;
          }
          if (KhDI0Qx < 0) {
            KhDI0Qx = dHhm7IJ;
          } else {
            b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
            } while (oOSpQ0F > 7);
            KhDI0Qx = -1;
          }
        }
        if (KhDI0Qx > -1) {
          l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
        }
        return a5I4LAb(l06wN2S);
      }
      function vDlnfHc(ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = Q16EmFG(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      }
      return ldXU2Ow.getAttribute("data-componentid") ?? ldXU2Ow.src.match(new RegExp("componentId=([^&]+)", ""))?.[1];
    }).filter(ldXU2Ow => {
      return !!ldXU2Ow;
    });
    ldXU2Ow.forEach(ldXU2Ow => {
      function Q16EmFG(ldXU2Ow) {
        var Q16EmFG = "Az#=3^<w;1x%52yBp~]MlTJ)uoQ!`/?f7{K(.GN9bCq_86}k\"|n+YgLEaRrehv[:s&*>DFZdH$jVSIcO04XPUm,tWi@";
        var vDlnfHc;
        var yctckmj;
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
        for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
          var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
          if (dHhm7IJ === -1) {
            continue;
          }
          if (KhDI0Qx < 0) {
            KhDI0Qx = dHhm7IJ;
          } else {
            b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
            } while (oOSpQ0F > 7);
            KhDI0Qx = -1;
          }
        }
        if (KhDI0Qx > -1) {
          l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
        }
        return a5I4LAb(l06wN2S);
      }
      function vDlnfHc(ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = Q16EmFG(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      }
      return window.postMessage({
        ["componentId"]: ldXU2Ow,
        ["name"]: "completed"
      }, "*");
    });
    return ldXU2Ow.length > 0;
  }, NQi2tfb = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19 13H5v-2h14v2z\"/></svg>", lgF_C2m = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 8l-6 6h12l-6-6z\"/></svg>", mZh05HF = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.14 12.94a7.07 7.07 0 000-1.88l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96a7.04 7.04 0 00-1.63-.94l-.36-2.54a.48.48 0 00-.48-.41h-3.84a.48.48 0 00-.48.41l-.36 2.54a7.04 7.04 0 00-1.63.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.61l2.03 1.58a7.07 7.07 0 000 1.88l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32a.49.49 0 00.59.22l2.39-.96c.5.38 1.05.69 1.63.94l.36 2.54a.48.48 0 00.48.41h3.84a.48.48 0 00.48-.41l.36-2.54c.58-.25 1.13-.56 1.63-.94l2.39.96a.49.49 0 00.59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z\"/></svg>", ibeCDQ = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>", hxh87Em = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/></svg>", L7Smbsx = "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z\"/></svg>", Tsh3fDG = "3.0.9", RcQm9H7 = "https://api.ascenly.ai/panel.user.js", PxpnFL = null, hoT5a_S = null, c5WZXm = "", glUVlo = ldXU2Ow => {
    PxpnFL = ldXU2Ow;
  }, gVUXIr = ldXU2Ow => {
    hoT5a_S = ldXU2Ow;
  }, y1MYJYd = () => {
    let ldXU2Ow = document.cookie.match(new RegExp("TokenData=([^;]+)", ""));
    try {
      if (ldXU2Ow) {
        return JSON.parse(decodeURIComponent(ldXU2Ow[1])).UserId;
      } else {
        return "";
      }
    } catch {
      return "";
    }
  }, pY2ppq = ldXU2Ow => {
    return Uint8Array.from(atob(ldXU2Ow), ldXU2Ow => {
      return ldXU2Ow.charCodeAt(0);
    });
  }, bk2P7DI = ldXU2Ow => {
    let Q16EmFG = "";
    for (let vDlnfHc = 0; vDlnfHc < ldXU2Ow.length; vDlnfHc += 32768) {
      Q16EmFG += String.fromCharCode(...ldXU2Ow.subarray(vDlnfHc, vDlnfHc + 32768));
    }
    return btoa(Q16EmFG);
  }, qitKle = async ldXU2Ow => {
    function Q16EmFG(ldXU2Ow) {
      var Q16EmFG = "Ax:;4PiglLUoXhe)BWMOp%qz9NSZ3jwFY*=`&r(2}]dT6v1\"5>/aC@7sb,y^V.Eu0f?[Jt|IcR8{+Gn~_<!K$kQ#DHm";
      var vDlnfHc;
      var yctckmj;
      var l06wN2S;
      var cKRkdn;
      var oOSpQ0F;
      var KhDI0Qx;
      var HoK2xH;
      b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
      for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
        var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
        if (dHhm7IJ === -1) {
          continue;
        }
        if (KhDI0Qx < 0) {
          KhDI0Qx = dHhm7IJ;
        } else {
          b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
          do {
            b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
          } while (oOSpQ0F > 7);
          KhDI0Qx = -1;
        }
      }
      if (KhDI0Qx > -1) {
        l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
      }
      return a5I4LAb(l06wN2S);
    }
    function vDlnfHc(ldXU2Ow) {
      if (typeof cxuqDK[ldXU2Ow] === "undefined") {
        return cxuqDK[ldXU2Ow] = Q16EmFG(wQolDY[ldXU2Ow]);
      }
      return cxuqDK[ldXU2Ow];
    }
    let yctckmj = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("asc://0e137694574934bb049a38fa8508d06f" + ldXU2Ow));
    return crypto.subtle.importKey("raw", yctckmj, {
      ["name"]: "AES-GCM"
    }, !1, ["encrypt", "decrypt"]);
  }, jngaNZS = async (ldXU2Ow, Q16EmFG) => {
    let vDlnfHc = crypto.getRandomValues(new Uint8Array(12));
    let yctckmj = await crypto.subtle.encrypt({
      ["name"]: "AES-GCM",
      ["iv"]: vDlnfHc
    }, await qitKle(Q16EmFG), new TextEncoder().encode(JSON.stringify(ldXU2Ow)));
    return {
      ["iv"]: bk2P7DI(vDlnfHc),
      ["ct"]: bk2P7DI(new Uint8Array(yctckmj))
    };
  },  zZDosQY = async (ldXU2Ow, Q16EmFG) => {
    let vDlnfHc = await crypto.subtle.decrypt({
      ["name"]: "AES-GCM",
      ["iv"]: pY2ppq(ldXU2Ow.iv)
    }, await qitKle(Q16EmFG), pY2ppq(ldXU2Ow.ct));
    return JSON.parse(new TextDecoder().decode(vDlnfHc));
  },
  AI_PROVIDERS = {
    gemini: {
      label: "Google Gemini",
      placeholder: "AIza... or AQ....",
      models: [
        { value: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
        { value: "gemini-3.5-flash-lite", label: "Gemini 3.5 Flash-Lite" },
        { value: "gemini-2.5-pro", label: "Gemini 2.5 Pro" }
      ]
    },
    groq: {
      label: "Groq Cloud",
      placeholder: "gsk_...",
      endpoint: "https://api.groq.com/openai/v1/chat/completions",
      models: [
        { value: "llama-3.3-70b-versatile", label: "Llama 3.3 70B" },
        { value: "qwen-qwq-32b", label: "Qwen QwQ 32B" },
        { value: "llama-3.1-8b-instant", label: "Llama 3.1 8B" }
      ]
    },
    cerebras: {
      label: "Cerebras Cloud",
      placeholder: "csk-...",
      endpoint: "https://api.cerebras.ai/v1/chat/completions",
      models: [
        { value: "llama-3.3-70b", label: "Llama 3.3 70B" },
        { value: "qwen-3-32b", label: "Qwen 3 32B" }
      ]
    },
    ollama: {
      label: "Local Ollama",
      placeholder: "No key needed (localhost:11434)",
      endpoint: "http://localhost:11434/v1/chat/completions",
      models: [
        { value: "qwen2.5:14b", label: "Qwen 2.5 14B" },
        { value: "gemma3:12b", label: "Gemma 3 12B" },
        { value: "qwen2.5:7b", label: "Qwen 2.5 7B" }
      ]
    }
  },
  OA5hTl = async (ldXU2Ow, Q16EmFG, vDlnfHc, yctckmj = 30000) => {
    if (Q16EmFG === "/auth") {
      c5WZXm = "";
      return { ok: true, status: 200, json: async () => ({ valid: true }) };
    }
    const provider = mxtpIbz.provider || "gemini";
    const activeKey = (mxtpIbz.apiKeys?.[provider] || mxtpIbz.key || "").trim();
    const activeModel = (mxtpIbz.customModel || "").trim() || mxtpIbz.model || AI_PROVIDERS[provider]?.models?.[0]?.value;
    if (provider !== "ollama" && !activeKey) {
      return { ok: false, status: 401, json: async () => ({ error: "Missing API Key" }) };
    }
    await new Promise(r => setTimeout(r, provider === "ollama" ? 50 : 600));
    const isJson = Q16EmFG === "/gemini" || Q16EmFG === "/json";
    const promptText = typeof vDlnfHc === "string"
      ? vDlnfHc
      : vDlnfHc?.prompt || vDlnfHc?.question || JSON.stringify(vDlnfHc);
    if (provider === "gemini") {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(activeModel)}:generateContent?key=${encodeURIComponent(activeKey)}`,
          timeout: yctckmj,
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            ...(isJson ? { generationConfig: { responseMimeType: "application/json", temperature: 0.1 } } : {})
          }),
          onload: res => {
            let parsed = {};
            try {
              const raw = JSON.parse(res.responseText);
              const text = raw?.candidates?.[0]?.content?.parts?.[0]?.text || "";
              parsed = isJson ? JSON.parse(text || "{}") : { text };
            } catch {}
            resolve({ ok: res.status >= 200 && res.status < 300, status: res.status, json: async () => parsed });
          },
          onerror: () => reject(new Error("Network error")),
          ontimeout: () => reject(new Error("Request timeout"))
        });
      });
    }
    const endpoint = AI_PROVIDERS[provider]?.endpoint || AI_PROVIDERS.groq.endpoint;
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "POST",
        url: endpoint,
        timeout: yctckmj,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${activeKey || "ollama"}`
        },
        data: JSON.stringify({
          model: activeModel,
          temperature: 0.1,
          ...(isJson && provider !== "ollama" && provider !== "groq" ? { response_format: { type: "json_object" } } : {}),
          messages: [
            ...(isJson ? [{ role: "system", content: "Return strictly valid JSON matching the requested schema. No markdown fences." }] : []),
            { role: "user", content: promptText }
          ]
        }),
        onload: res => {
          let parsed = {};
          try {
            const raw = JSON.parse(res.responseText);
            let text = raw?.choices?.[0]?.message?.content || "";
            text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
            parsed = isJson ? JSON.parse(text || "{}") : { text };
          } catch {}
          resolve({ ok: res.status >= 200 && res.status < 300, status: res.status, json: async () => parsed });
        },
        onerror: () => reject(new Error("Network error")),
        ontimeout: () => reject(new Error("Request timeout"))
      });
    });
  },
  QHK6nSo = async () => null
);
function extractMathText(el) {
  if (!el) return "";
  const clone = el.cloneNode(true);
  clone.querySelectorAll("img[data-mathml]").forEach(img => {
    const mml = (img.getAttribute("data-mathml") || "")
      .replace(/«/g, "<").replace(/»/g, ">").replace(/¨/g, '"')
      .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    img.replaceWith(document.createTextNode(mml ? ` [${mml}] ` : " "));
  });
  return (clone.innerText || clone.textContent || "").replace(/\s+/g, " ").trim();
}

function findAllDocs(root = document) {
  const docs = [root];
  for (const fr of Array.from(root.querySelectorAll("iframe"))) {
    try {
      if (fr.contentDocument) docs.push(...findAllDocs(fr.contentDocument));
    } catch {}
  }
  return docs;
}

async function QPmrg0(ldXU2Ow) {
  const docs = findAllDocs(document);
  const results = [];
  for (const qId of ldXU2Ow) {
    let box = null;
    for (const d of docs) {
      box = d.querySelector("#q_" + CSS.escape(qId)) || d.querySelector(`[id*="${CSS.escape(qId)}"]`);
      if (box) break;
    }
    if (!box) continue;
    const inputs = Array.from(box.querySelectorAll("input, textarea, select")).filter(el => el.id && el.type !== "hidden");
    if (!inputs.length) continue;
    const options = inputs.map((el, idx) => {
      const labelEl = box.querySelector(`label[for="${CSS.escape(el.id)}"]`) || el.closest("label, li, tr, div");
      const selectOpts = el.tagName === "SELECT"
        ? Array.from(el.options).filter(o => o.value).map(o => ({ value: o.value, text: extractMathText(o) }))
        : undefined;
      return {
        index: idx,
        inputId: el.id,
        type: el.type || el.tagName.toLowerCase(),
        label: extractMathText(labelEl),
        ...(selectOpts ? { choices: selectOpts } : {})
      };
    });
    const prompt = [
      "Solve this quiz question and return ONLY valid JSON matching this schema:",
      '{"answers":[{"inputId":"exact inputId from options","answerText":"exact text or option value if text/select input, otherwise empty string"}]}',
      "Question text:\n" + extractMathText(box),
      "Available inputs:\n" + JSON.stringify(options)
    ].join("\n\n");
    const res = await OA5hTl("POST", "/gemini", { prompt });
    if (res?.ok) {
      const data = await res.json();
      if (Array.isArray(data?.answers) && data.answers.length) {
        results.push({ questionId: qId, correctAnswers: data.answers });
      }
    }
  }
  return results;
}
  b07TQe(nMMCZJO = ldXU2Ow => {
    return OA5hTl("POST", "/aichat", {
      ["question"]: ldXU2Ow.slice(0, 5000)
    }, 300000).then(ldXU2Ow => {
      if (ldXU2Ow.ok) {
        return ldXU2Ow.json().then(ldXU2Ow => {
          return ldXU2Ow.text;
        });
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
  }, RtFIM3 = (ldXU2Ow, Q16EmFG, vDlnfHc) => {
    return OA5hTl("POST", ldXU2Ow, Q16EmFG, vDlnfHc);
  });
  async function HakLwrD() {
    let ldXU2Ow = mxtpIbz.key;
    let Q16EmFG = mxtpIbz.session;
    let vDlnfHc = await RtFIM3("/auth", {});
    if (ldXU2Ow && Q16EmFG && !mxtpIbz.key && mxtpIbz.session === Q16EmFG && (vDlnfHc.status === 401 || vDlnfHc.status === 403)) {
      return RtFIM3("/auth", {});
    } else {
      return vDlnfHc;
    }
  }
  async function bVKezMb() {
    b07TQe(c5WZXm = "", mxtpIbz.signInVerifier = Array.from(crypto.getRandomValues(new Uint8Array(32)), ldXU2Ow => {
      return ldXU2Ow.toString(16).padStart(2, "0");
    }).join(""), mxtpIbz.signInCode = "", tkD5ZbK());
    let ldXU2Ow = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(mxtpIbz.signInVerifier));
    let Q16EmFG = Array.from(new Uint8Array(ldXU2Ow), ldXU2Ow => {
      return ldXU2Ow.toString(16).padStart(2, "0");
    }).join("");
    let vDlnfHc = new URL("https://web.ascenly.ai/discord");
    b07TQe(vDlnfHc.searchParams.set("challenge", Q16EmFG), location.assign(vDlnfHc.href));
  }
  async function GOmHu1N() {
    let ldXU2Ow = new URLSearchParams(location.hash.slice(1));
    let Q16EmFG = ldXU2Ow.get("ascenly-login");
    if (Q16EmFG) {
      mxtpIbz.signInCode = Q16EmFG;
      tkD5ZbK();
      ldXU2Ow.delete("ascenly-login");
      history.replaceState(null, "", location.pathname + location.search + (ldXU2Ow.size ? "#" + ldXU2Ow : ""));
    }
    if (mxtpIbz.signInCode) {
      if ("l0T_a8x" in OyEKmUI) {
        vDlnfHc();
      }
      function vDlnfHc() {
        function Q16EmFG(Q16EmFG) {
          return Q16EmFG[1] * 67108864 + (Q16EmFG[0] < 0 ? 33554432 | Q16EmFG[0] : Q16EmFG[0]);
        }
        function vDlnfHc(Q16EmFG) {
          switch (((Q16EmFG & 33554432) !== 0) * 1 + (Q16EmFG < 0) * 2) {
            case 0:
              return [Q16EmFG % 33554432, Math.trunc(Q16EmFG / 67108864)];
            case 1:
              return [Q16EmFG % 33554432 - 33554432, Math.trunc(Q16EmFG / 67108864) + 1];
            case 2:
              return [((Q16EmFG + 33554432) % 33554432 + 33554432) % 33554432, Math.round(Q16EmFG / 67108864)];
            case 3:
              return [Q16EmFG % 33554432, Math.trunc(Q16EmFG / 67108864)];
          }
        }
        let yctckmj = Q16EmFG([2, 4]);
        let l06wN2S = Q16EmFG([1, 2]);
        let cKRkdn = yctckmj + l06wN2S;
        let oOSpQ0F = cKRkdn - l06wN2S;
        let KhDI0Qx = oOSpQ0F * 2;
        let HoK2xH = KhDI0Qx / 2;
        b07TQe(console.log(vDlnfHc(cKRkdn)), console.log(vDlnfHc(oOSpQ0F)), console.log(vDlnfHc(KhDI0Qx)), console.log(vDlnfHc(HoK2xH)));
      }
      try {
        if ("z0qlLg" in OyEKmUI) {
          yctckmj();
        }
        function yctckmj() {
          function ldXU2Ow(ldXU2Ow, vDlnfHc, yctckmj) {
            var l06wN2S = {};
            if (yctckmj.length !== ldXU2Ow.length + vDlnfHc.length) {
              return false;
            }
            return Q16EmFG(ldXU2Ow, vDlnfHc, yctckmj, 0, 0, 0, l06wN2S);
          }
          var Q16EmFG;
          b07TQe(Q16EmFG = function (ldXU2Ow, vDlnfHc, yctckmj, l06wN2S, cKRkdn, oOSpQ0F, KhDI0Qx) {
            var HoK2xH = false;
            if (oOSpQ0F >= yctckmj.length) {
              return true;
            }
            if (KhDI0Qx["" + l06wN2S + cKRkdn + oOSpQ0F] !== undefined) {
              return KhDI0Qx["" + l06wN2S + cKRkdn + oOSpQ0F];
            }
            if (yctckmj[oOSpQ0F] === ldXU2Ow[l06wN2S] && yctckmj[oOSpQ0F] === vDlnfHc[cKRkdn]) {
              HoK2xH = Q16EmFG(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S + 1, cKRkdn, oOSpQ0F + 1, KhDI0Qx) || Q16EmFG(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S, cKRkdn + 1, oOSpQ0F + 1, KhDI0Qx);
            } else if (yctckmj[oOSpQ0F] === ldXU2Ow[l06wN2S]) {
              HoK2xH = Q16EmFG(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S + 1, cKRkdn, oOSpQ0F + 1, KhDI0Qx);
            } else if (yctckmj[oOSpQ0F] === vDlnfHc[cKRkdn]) {
              HoK2xH = Q16EmFG(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S, cKRkdn + 1, oOSpQ0F + 1, KhDI0Qx);
            }
            KhDI0Qx["" + l06wN2S + cKRkdn + oOSpQ0F] = HoK2xH;
            return HoK2xH;
          }, console.log(ldXU2Ow));
        }
        if (!mxtpIbz.signInVerifier) {
          throw new Error("Start sign-in from this panel first");
        }
        let l06wN2S = await OA5hTl("POST", "/session/exchange", {
          ["code"]: mxtpIbz.signInCode,
          ["verifier"]: mxtpIbz.signInVerifier
        });
        let cKRkdn = await l06wN2S.json();
        if (!l06wN2S.ok || typeof cKRkdn.session != "string" || !new RegExp("^[A-Za-z0-9_-]{43}$", "").test(cKRkdn.session)) {
          throw new Error(cKRkdn.error || "Sign-in failed. Please try again.");
        }
        b07TQe(mxtpIbz.session = cKRkdn.session, c5WZXm = "", mxtpIbz.signInVerifier = "", mxtpIbz.signInCode = "", tkD5ZbK());
      } catch (l06wN2S) {
        function oOSpQ0F(ldXU2Ow) {
          var Q16EmFG = "$WA}87U#iL+:oGx</]Bbp\"Ng=[HwD^|3E6J2_k~s5>XSvjfzYI,l4%1Q`n?ROZTer.mchM&*;(dF)9CaKt0PVy!u{q@";
          var vDlnfHc;
          var yctckmj;
          var cKRkdn;
          var oOSpQ0F;
          var KhDI0Qx;
          var HoK2xH;
          var dHhm7IJ;
          b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, cKRkdn = [], oOSpQ0F = 0, KhDI0Qx = 0, HoK2xH = -1);
          for (dHhm7IJ = 0; dHhm7IJ < yctckmj; dHhm7IJ++) {
            var IoZT_i = Q16EmFG.indexOf(vDlnfHc[dHhm7IJ]);
            if (IoZT_i === -1) {
              continue;
            }
            if (HoK2xH < 0) {
              HoK2xH = IoZT_i;
            } else {
              b07TQe(HoK2xH += IoZT_i * 91, oOSpQ0F |= HoK2xH << KhDI0Qx, KhDI0Qx += (HoK2xH & 8191) > 88 ? 13 : 14);
              do {
                b07TQe(cKRkdn.push(oOSpQ0F & 255), oOSpQ0F >>= 8, KhDI0Qx -= 8);
              } while (KhDI0Qx > 7);
              HoK2xH = -1;
            }
          }
          if (HoK2xH > -1) {
            cKRkdn.push((oOSpQ0F | HoK2xH << KhDI0Qx) & 255);
          }
          return a5I4LAb(cKRkdn);
        }
        function KhDI0Qx(ldXU2Ow) {
          if (typeof cxuqDK[ldXU2Ow] === "undefined") {
            return cxuqDK[ldXU2Ow] = oOSpQ0F(wQolDY[ldXU2Ow]);
          }
          return cxuqDK[ldXU2Ow];
        }
        c5WZXm = l06wN2S instanceof Error ? l06wN2S.message : "Sign-in failed. Please try again.";
      }
    }
  }
  async function x6vcXX(ldXU2Ow) {
    if (!ldXU2Ow) {
      ldXU2Ow = function () {};
    }
    if ("mEOLoeE" in OyEKmUI) {
      ldXU2Ow();
    }
    let Q16EmFG = await OA5hTl("GET", "/quota");
    if (Q16EmFG.ok) {
      window.__ascenly_quota = await Q16EmFG.json();
      hoT5a_S?.();
    }
  }
  function QZAKkm() {
    return OA5hTl("POST", "/session/logout").catch(() => {
      return null;
    });
  }
  b07TQe(bIYo7wX = new Set(), eATa8m = new Set(), wF2dfzS = new WeakMap(), yibUmdj = new Set(), RWfoMQ9 = "stageFrame", i7EDXk = 5000);
  function Qw4MeE(ldXU2Ow, vDlnfHc) {
    if (!bIYo7wX.has(vDlnfHc) || !eATa8m.has(ldXU2Ow.ownerDocument) || !ldXU2Ow.isConnected) {
      return;
    }
    let yctckmj = setTimeout(() => {
      function l06wN2S(l06wN2S) {
        var cKRkdn = "O2pMlCPEgJ#n3kZ%$bX?RWweIHq&[^|5Ycfx`Sr{}\"d</TU)BDo8!0h9N7muLKQaszFiAj~V,;vtG(6>=:*]+4@y.1_";
        var ldXU2Ow;
        var vDlnfHc;
        var Q16EmFG;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        var dHhm7IJ;
        b07TQe(ldXU2Ow = "" + (l06wN2S || ""), vDlnfHc = ldXU2Ow.length, Q16EmFG = [], oOSpQ0F = 0, KhDI0Qx = 0, HoK2xH = -1);
        for (dHhm7IJ = 0; dHhm7IJ < vDlnfHc; dHhm7IJ++) {
          var IoZT_i = cKRkdn.indexOf(ldXU2Ow[dHhm7IJ]);
          if (IoZT_i === -1) {
            continue;
          }
          if (HoK2xH < 0) {
            HoK2xH = IoZT_i;
          } else {
            b07TQe(HoK2xH += IoZT_i * 91, oOSpQ0F |= HoK2xH << KhDI0Qx, KhDI0Qx += (HoK2xH & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(Q16EmFG.push(oOSpQ0F & 255), oOSpQ0F >>= 8, KhDI0Qx -= 8);
            } while (KhDI0Qx > 7);
            HoK2xH = -1;
          }
        }
        if (HoK2xH > -1) {
          Q16EmFG.push((oOSpQ0F | HoK2xH << KhDI0Qx) & 255);
        }
        return a5I4LAb(Q16EmFG);
      }
      function cKRkdn(cKRkdn) {
        if (typeof cxuqDK[cKRkdn] === "undefined") {
          return cxuqDK[cKRkdn] = l06wN2S(wQolDY[cKRkdn]);
        }
        return cxuqDK[cKRkdn];
      }
      b07TQe(vDlnfHc.retries.delete(ldXU2Ow), (Q16EmFG = [ldXU2Ow.ownerDocument, vDlnfHc], nUVzU8R("cOFd9J", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq));
    }, i7EDXk);
    vDlnfHc.retries.set(ldXU2Ow, yctckmj);
  }
  async function LppejA(ldXU2Ow, Q16EmFG) {
    Q16EmFG.pending.add(ldXU2Ow);
    try {
      if ((await Q16EmFG.handler(ldXU2Ow)) === !1) {
        Qw4MeE(ldXU2Ow, Q16EmFG);
      } else {
        Q16EmFG.seen.add(ldXU2Ow);
      }
    } catch {
      Qw4MeE(ldXU2Ow, Q16EmFG);
    } finally {
      function vDlnfHc(ldXU2Ow) {
        var Q16EmFG = "1GHhjx^R}aDdm)JA5X/=o2B6\"q7+>_Tc3uNw!ESs@:z;#CnrPe9LZkgyMKv[(I<80{t,4]*W?i`QY|O~lFU%.b$fpV&";
        var vDlnfHc;
        var yctckmj;
        var l06wN2S;
        var cKRkdn;
        var oOSpQ0F;
        var KhDI0Qx;
        var HoK2xH;
        b07TQe(vDlnfHc = "" + (ldXU2Ow || ""), yctckmj = vDlnfHc.length, l06wN2S = [], cKRkdn = 0, oOSpQ0F = 0, KhDI0Qx = -1);
        for (HoK2xH = 0; HoK2xH < yctckmj; HoK2xH++) {
          var dHhm7IJ = Q16EmFG.indexOf(vDlnfHc[HoK2xH]);
          if (dHhm7IJ === -1) {
            continue;
          }
          if (KhDI0Qx < 0) {
            KhDI0Qx = dHhm7IJ;
          } else {
            b07TQe(KhDI0Qx += dHhm7IJ * 91, cKRkdn |= KhDI0Qx << oOSpQ0F, oOSpQ0F += (KhDI0Qx & 8191) > 88 ? 13 : 14);
            do {
              b07TQe(l06wN2S.push(cKRkdn & 255), cKRkdn >>= 8, oOSpQ0F -= 8);
            } while (oOSpQ0F > 7);
            KhDI0Qx = -1;
          }
        }
        if (KhDI0Qx > -1) {
          l06wN2S.push((cKRkdn | KhDI0Qx << oOSpQ0F) & 255);
        }
        return a5I4LAb(l06wN2S);
      }
      function yctckmj(ldXU2Ow) {
        if (typeof cxuqDK[ldXU2Ow] === "undefined") {
          return cxuqDK[ldXU2Ow] = vDlnfHc(wQolDY[ldXU2Ow]);
        }
        return cxuqDK[ldXU2Ow];
      }
      Q16EmFG.pending.delete(ldXU2Ow);
    }
  }
  function RnrFO8(ldXU2Ow) {
    for (let vDlnfHc of bIYo7wX) {
      Q16EmFG = [ldXU2Ow, vDlnfHc];
      new nUVzU8R("cOFd9J", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
    }
  }
  function aJJZ2CB(ldXU2Ow) {
    if (eATa8m.has(ldXU2Ow)) {
      return;
    }
    eATa8m.add(ldXU2Ow);
    let Q16EmFG = () => {
      if (!eATa8m.has(ldXU2Ow) || !ldXU2Ow.body) {
        return;
      }
      let Q16EmFG = new MutationObserver(() => {
        return RnrFO8(ldXU2Ow);
      });
      b07TQe(Q16EmFG.observe(ldXU2Ow.body, {
        ["childList"]: !0,
        ["subtree"]: !0
      }), wF2dfzS.set(ldXU2Ow, Q16EmFG), RnrFO8(ldXU2Ow));
    };
    if (ldXU2Ow.body) {
      Q16EmFG();
    } else {
      ldXU2Ow.addEventListener("DOMContentLoaded", Q16EmFG, {
        ["once"]: !0
      });
    }
  }
  function EtK8Gr(ldXU2Ow) {
    if (eATa8m.has(ldXU2Ow)) {
      b07TQe(wF2dfzS.get(ldXU2Ow)?.disconnect(), wF2dfzS.delete(ldXU2Ow), eATa8m.delete(ldXU2Ow));
      for (let Q16EmFG of bIYo7wX) {
        for (let [vDlnfHc, yctckmj] of Q16EmFG.retries) {
          if (vDlnfHc.ownerDocument === ldXU2Ow) {
            clearTimeout(yctckmj);
            Q16EmFG.retries.delete(vDlnfHc);
          }
        }
      }
    }
  }
  b07TQe(Q3AzFB = null, xJ7VAqj = null, auzIVgW = null);
  function oqOluGA() {
    let ldXU2Ow = document.getElementById(RWfoMQ9);
    if (ldXU2Ow === Q3AzFB || (Q3AzFB && auzIVgW && Q3AzFB.removeEventListener("load", auzIVgW), xJ7VAqj && EtK8Gr(xJ7VAqj), Q3AzFB = ldXU2Ow, xJ7VAqj = null, auzIVgW = null, !ldXU2Ow)) {
      return;
    }
    let Q16EmFG = () => {
      Ene7WFT(() => {
        let Q16EmFG = ldXU2Ow.contentDocument;
        if (Q16EmFG) {
          if (Q16EmFG !== xJ7VAqj) {
            if (xJ7VAqj) {
              EtK8Gr(xJ7VAqj);
            }
            xJ7VAqj = Q16EmFG;
            aJJZ2CB(Q16EmFG);
          }
          for (let vDlnfHc of yibUmdj) {
            Ene7WFT(() => {
              return vDlnfHc(Q16EmFG);
            });
          }
        }
      });
    };
    b07TQe(auzIVgW = Q16EmFG, ldXU2Ow.addEventListener("load", Q16EmFG), Q16EmFG());
  }
  GWQRi9a = !1;
  function ZDs7vO() {
    if (GWQRi9a) {
      return;
    }
    b07TQe(GWQRi9a = !0, aJJZ2CB(document));
    let ldXU2Ow = () => {
      return oqOluGA();
    };
    let Q16EmFG = new MutationObserver(ldXU2Ow);
    let vDlnfHc = () => {
      b07TQe(Q16EmFG.observe(document.body, {
        ["childList"]: !0,
        ["subtree"]: !0
      }), ldXU2Ow());
    };
    if (document.body) {
      vDlnfHc();
    } else {
      document.addEventListener("DOMContentLoaded", vDlnfHc, {
        ["once"]: !0
      });
    }
  }
  function hStc_Hb(ldXU2Ow, vDlnfHc, yctckmj) {
    if (yctckmj.aborted) {
      return;
    }
    ZDs7vO();
    let l06wN2S = {
      ["selector"]: ldXU2Ow,
      ["handler"]: vDlnfHc,
      ["seen"]: new WeakSet(),
      ["pending"]: new WeakSet(),
      ["retries"]: new Map()
    };
    b07TQe(bIYo7wX.add(l06wN2S), yctckmj.addEventListener("abort", () => {
      bIYo7wX.delete(l06wN2S);
      for (let ldXU2Ow of l06wN2S.retries.values()) {
        clearTimeout(ldXU2Ow);
      }
      l06wN2S.retries.clear();
    }, {
      ["once"]: !0
    }));
    for (let cKRkdn of eATa8m) {
      Q16EmFG = [cKRkdn, l06wN2S];
      nUVzU8R("cOFd9J");
    }
  }
  function QNQ3Wm(ldXU2Ow, Q16EmFG) {
    if (Q16EmFG.aborted) {
      return;
    }
    b07TQe(ZDs7vO(), yibUmdj.add(ldXU2Ow), Q16EmFG.addEventListener("abort", () => {
      yibUmdj.delete(ldXU2Ow);
    }, {
      ["once"]: !0
    }));
    let vDlnfHc = xJ7VAqj;
    if (vDlnfHc) {
      Ene7WFT(() => {
        return ldXU2Ow(vDlnfHc);
      });
    }
  }
  tl8V5lj = (ldXU2Ow, ...Q16EmFG) => {
    return Q16EmFG.forEach(Q16EmFG => {
      return ldXU2Ow.dispatchEvent(new Event(Q16EmFG, {
        ["bubbles"]: !0
      }));
    });
  };
  function VGhMpp(ldXU2Ow, Q16EmFG) {
    b07TQe(ldXU2Ow.focus(), ldXU2Ow.value = Q16EmFG ?? "", tl8V5lj(ldXU2Ow, "keydown", "keypress", "input", "keyup", "change"), ldXU2Ow.blur());
  }
  b07TQe(iOEuYC = new Set(), vB1E3s = null);
  function frlayIM(ldXU2Ow) {
    if (ldXU2Ow !== vB1E3s) {
      vB1E3s = ldXU2Ow;
      for (let Q16EmFG of iOEuYC) {
        Ene7WFT(() => {
          return Q16EmFG(ldXU2Ow);
        });
      }
    }
  }
  function ZRzq5ts(ldXU2Ow) {
    iOEuYC.add(ldXU2Ow);
    ldXU2Ow(vB1E3s);
    return () => {
      iOEuYC.delete(ldXU2Ow);
    };
  }
  YNX3NJ = ldXU2Ow => {
    if (ldXU2Ow == null) {
      return "";
    }
    if (typeof ldXU2Ow == "string") {
      return ldXU2Ow;
    }
    if (typeof ldXU2Ow == "number" || typeof ldXU2Ow == "boolean") {
      return String(ldXU2Ow);
    }
    if (Array.isArray(ldXU2Ow)) {
      return ldXU2Ow.map(YNX3NJ).filter(Boolean).join(" ");
    }
    if (typeof ldXU2Ow == "object") {
      let Q16EmFG = ldXU2Ow;
      if (Q16EmFG.value != null) {
        return YNX3NJ(Q16EmFG.value);
      } else if (Q16EmFG.text != null) {
        return YNX3NJ(Q16EmFG.text);
      } else if (Q16EmFG.response != null) {
        return YNX3NJ(Q16EmFG.response);
      } else {
        return JSON.stringify(ldXU2Ow);
      }
    }
    return String(ldXU2Ow);
  };
  function WBKOmd(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = Object.getPrototypeOf(ldXU2Ow);
    b07TQe(Object.getOwnPropertyDescriptor(vDlnfHc, "value")?.set?.call(ldXU2Ow, Q16EmFG), ldXU2Ow.dispatchEvent(new Event("input", {
      ["bubbles"]: !0
    })), ldXU2Ow.dispatchEvent(new Event("change", {
      ["bubbles"]: !0
    })));
  }
  function uwR0B9(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let vDlnfHc = ldXU2Ow.querySelectorAll(".lrn-mcq-option");
    let yctckmj = !1;
    for (let l06wN2S of Q16EmFG.correctAnswer) {
      let cKRkdn = Array.from(vDlnfHc).find(ldXU2Ow => {
        return ldXU2Ow.querySelector("input")?.value === l06wN2S;
      });
      let oOSpQ0F = cKRkdn?.querySelector("label.lrn-label") ?? cKRkdn?.querySelector("input");
      if (oOSpQ0F) {
        oOSpQ0F.click();
        yctckmj = !0;
      }
    }
    return yctckmj;
  }
  function _PNXfj(ldXU2Ow, Q16EmFG) {
    if ("Att3jtj" in OyEKmUI) {
      vDlnfHc();
    }
    function vDlnfHc() {}
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let yctckmj = !1;
    ldXU2Ow.querySelectorAll("select").forEach((ldXU2Ow, vDlnfHc) => {
      if (vDlnfHc < Q16EmFG.correctAnswer.length) {
        ldXU2Ow.value = YNX3NJ(Q16EmFG.correctAnswer[vDlnfHc]);
        ldXU2Ow.dispatchEvent(new Event("change", {
          ["bubbles"]: !0
        }));
        yctckmj = !0;
      }
    });
    return yctckmj;
  }
  function oQkTUs(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = Q16EmFG.correctAnswerText?.[0] ?? Q16EmFG.correctAnswer?.[0];
    if (vDlnfHc == null) {
      return !1;
    }
    let yctckmj = YNX3NJ(vDlnfHc);
    let l06wN2S = ldXU2Ow.querySelector("input[type='text'], textarea");
    if (!l06wN2S || !yctckmj) {
      return !1;
    } else {
      WBKOmd(l06wN2S, yctckmj);
      return !0;
    }
  }
  function vmoy4u(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let vDlnfHc = ldXU2Ow.querySelectorAll(".lrn_token");
    let yctckmj = !1;
    for (let l06wN2S of Q16EmFG.correctAnswer) {
      let cKRkdn = parseInt(YNX3NJ(l06wN2S), 10);
      let oOSpQ0F = isNaN(cKRkdn) ? null : vDlnfHc[cKRkdn];
      if (oOSpQ0F && oOSpQ0F.getAttribute("aria-pressed") !== "true") {
        oOSpQ0F.click();
        yctckmj = !0;
      }
    }
    return yctckmj;
  }
  function j_TzpQW(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let vDlnfHc = ldXU2Ow => {
      return (new DOMParser().parseFromString(ldXU2Ow, "text/html").body.textContent ?? "").trim();
    };
    let yctckmj = (Q16EmFG.stimulusList ?? []).map(ldXU2Ow => {
      return vDlnfHc(YNX3NJ(ldXU2Ow));
    });
    let l06wN2S = Array.from(ldXU2Ow.querySelectorAll("tr.lrn_stem")).map(ldXU2Ow => {
      let vDlnfHc = ldXU2Ow.querySelector(".lrn-stem-text")?.textContent?.trim() ?? "";
      let l06wN2S = yctckmj.indexOf(vDlnfHc);
      if (l06wN2S >= 0) {
        return YNX3NJ(Q16EmFG.correctAnswer[l06wN2S]);
      } else {
        return null;
      }
    });
    let cKRkdn = ldXU2Ow.getAttribute("data-reference");
    try {
      let oOSpQ0F = ldXU2Ow.ownerDocument.defaultView?.LearnosityItems;
      let KhDI0Qx = cKRkdn && typeof oOSpQ0F?.getQuestions == "function" ? oOSpQ0F.getQuestions()?.[cKRkdn] : null;
      if (KhDI0Qx && typeof KhDI0Qx.setResponse == "function" && l06wN2S.every(ldXU2Ow => {
        return ldXU2Ow !== null;
      })) {
        KhDI0Qx.setResponse({
          ["value"]: l06wN2S
        });
        return !0;
      }
    } catch {}
    let HoK2xH = !1;
    l06wN2S.forEach((Q16EmFG, vDlnfHc) => {
      if (Q16EmFG === null) {
        return;
      }
      let yctckmj = ldXU2Ow.querySelector("input.stem_" + vDlnfHc + "[value=\"" + CSS.escape(Q16EmFG) + "\"]");
      if (yctckmj && !yctckmj.checked) {
        yctckmj.click();
        HoK2xH = !0;
      }
    });
    return HoK2xH;
  }
  deyC25 = {
    [0]: 48,
    [1]: 49,
    [2]: 50,
    [3]: 51,
    [4]: 52,
    [5]: 53,
    [6]: 54,
    [7]: 55,
    [8]: 56,
    [9]: 57,
    ["."]: 190,
    ["-"]: 189,
    "+": 187,
    "=": 187,
    ["/"]: 191,
    "(": 57,
    [")"]: 48,
    [","]: 188,
    [" "]: 32
  };
  function cxI2e4U(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = deyC25[Q16EmFG] ?? Q16EmFG.toUpperCase().charCodeAt(0);
    let yctckmj = [new KeyboardEvent("keydown", {
      ["key"]: Q16EmFG,
      ["code"]: "Digit" + Q16EmFG,
      ["bubbles"]: !0,
      ["cancelable"]: !0
    }), new KeyboardEvent("keypress", {
      ["key"]: Q16EmFG,
      ["code"]: "Digit" + Q16EmFG,
      ["bubbles"]: !0,
      ["cancelable"]: !0
    })];
    for (let l06wN2S of yctckmj) {
      Object.defineProperty(l06wN2S, "keyCode", {
        ["get"]: () => {
          return vDlnfHc;
        }
      });
      Object.defineProperty(l06wN2S, "which", {
        ["get"]: () => {
          return vDlnfHc;
        }
      });
      ldXU2Ow.dispatchEvent(l06wN2S);
    }
  }
  function ty5sRJ(ldXU2Ow) {
    Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set?.call(ldXU2Ow, "");
  }
  function xupMZY2(ldXU2Ow, Q16EmFG) {
    try {
      return ldXU2Ow?.MathField(Q16EmFG);
    } catch {}
    return Q16EmFG._mq ?? Q16EmFG.__mq ?? Q16EmFG._mathquill ?? null;
  }
  async function K_jx1fo(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = (Q16EmFG.correctAnswer?.length ? Q16EmFG.correctAnswer : Q16EmFG.correctAnswerText)?.map(YNX3NJ);
    if (!vDlnfHc?.length) {
      return !1;
    }
    let yctckmj = ldXU2Ow.closest(".learnosity-item[data-reference]")?.getAttribute("data-reference");
    try {
      let l06wN2S = ldXU2Ow.ownerDocument.defaultView?.LearnosityItems;
      let cKRkdn = yctckmj && typeof l06wN2S?.getQuestions == "function" ? l06wN2S.getQuestions()?.[yctckmj] : null;
      if (cKRkdn && typeof cKRkdn.setResponse == "function") {
        if ("hvPadSG" in OyEKmUI) {
          oOSpQ0F();
        }
        function oOSpQ0F() {}
        cKRkdn.setResponse({
          ["value"]: vDlnfHc
        });
        return !0;
      }
    } catch {}
    let KhDI0Qx = ldXU2Ow.ownerDocument.defaultView?.MathQuill;
    let HoK2xH = KhDI0Qx && typeof KhDI0Qx.getInterface == "function" ? KhDI0Qx.getInterface(2) : KhDI0Qx;
    let dHhm7IJ = Array.from(ldXU2Ow.querySelectorAll(".mq-editable-field, .lrn_math_editable"));
    let IoZT_i = !1;
    for (let l06wN2S = 0; l06wN2S < dHhm7IJ.length && l06wN2S < vDlnfHc.length; l06wN2S++) {
      let cKRkdn = vDlnfHc[l06wN2S];
      if (!cKRkdn) {
        continue;
      }
      let fPrXnx = dHhm7IJ[l06wN2S];
      let sgFh6d = fPrXnx.querySelector(".mq-textarea textarea, textarea");
      if (!sgFh6d) {
        if ("TiA7UD" in OyEKmUI) {
          i9tUoZ();
        }
        function i9tUoZ() {
          const Q16EmFG = require("big-integer");
          class yctckmj {
            static randomPrime(yctckmj) {
              const ldXU2Ow = Q16EmFG.one.shiftLeft(yctckmj - 1);
              const vDlnfHc = Q16EmFG.one.shiftLeft(yctckmj).prev();
              while (true) {
                let cKRkdn = Q16EmFG.randBetween(ldXU2Ow, vDlnfHc);
                if (cKRkdn.isProbablePrime(256)) {
                  return cKRkdn;
                }
              }
            }
            static generate(yctckmj) {
              const vDlnfHc = Q16EmFG(65537);
              let cKRkdn;
              let oOSpQ0F;
              let KhDI0Qx;
              do {
                b07TQe(cKRkdn = this.randomPrime(yctckmj / 2), oOSpQ0F = this.randomPrime(yctckmj / 2), KhDI0Qx = Q16EmFG.lcm(cKRkdn.prev(), oOSpQ0F.prev()));
              } while (Q16EmFG.gcd(vDlnfHc, KhDI0Qx).notEquals(1) || cKRkdn.minus(oOSpQ0F).abs().shiftRight(yctckmj / 2 - 100).isZero());
              return {
                e: vDlnfHc,
                n: cKRkdn.multiply(oOSpQ0F),
                d: vDlnfHc.modInv(KhDI0Qx)
              };
            }
            static encrypt(yctckmj, l06wN2S, cKRkdn) {
              return Q16EmFG(yctckmj).modPow(cKRkdn, l06wN2S);
            }
            static decrypt(yctckmj, ldXU2Ow, l06wN2S) {
              return Q16EmFG(yctckmj).modPow(ldXU2Ow, l06wN2S);
            }
            static encode(yctckmj) {
              const ldXU2Ow = yctckmj.split("").map(yctckmj => yctckmj.charCodeAt()).join("");
              return Q16EmFG(ldXU2Ow);
            }
            static decode(Q16EmFG) {
              const yctckmj = Q16EmFG.toString();
              let ldXU2Ow = "";
              for (let vDlnfHc = 0; vDlnfHc < yctckmj.length; vDlnfHc += 2) {
                let l06wN2S = Number(yctckmj.substr(vDlnfHc, 2));
                if (l06wN2S <= 30) {
                  ldXU2Ow += String.fromCharCode(Number(yctckmj.substr(vDlnfHc, 3)));
                  vDlnfHc++;
                } else {
                  ldXU2Ow += String.fromCharCode(l06wN2S);
                }
              }
              return ldXU2Ow;
            }
          }
          module.exports = yctckmj;
        }
        continue;
      }
      b07TQe(sgFh6d.focus(), await toEw_S(100));
      let sbTeKU = xupMZY2(HoK2xH, fPrXnx);
      let XMhsLe = !1;
      if (sbTeKU) {
        try {
          b07TQe(sbTeKU.select?.(), await toEw_S(50), sbTeKU.keystroke?.("Backspace"), await toEw_S(50));
        } catch {}
        try {
          b07TQe(sbTeKU.latex(cKRkdn), XMhsLe = !0);
        } catch {}
      }
      if (!XMhsLe) {
        try {
          sgFh6d.setSelectionRange(0, sgFh6d.value.length);
        } catch {}
        ty5sRJ(sgFh6d);
        for (let NpE97bV of cKRkdn) {
          cxI2e4U(sgFh6d, NpE97bV);
          await toEw_S(120);
        }
      }
      b07TQe(IoZT_i = !0, await toEw_S(400));
    }
    dHhm7IJ.forEach(ldXU2Ow => {
      return ldXU2Ow.querySelector("textarea")?.blur();
    });
    return IoZT_i;
  }
  function CLP4Zhn(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let vDlnfHc = ldXU2Ow => {
      return (new DOMParser().parseFromString(ldXU2Ow, "text/html").body.textContent ?? "").trim();
    };
    let yctckmj = Q16EmFG.correctAnswer.map(ldXU2Ow => {
      return vDlnfHc(YNX3NJ(ldXU2Ow));
    });
    let l06wN2S = (Q16EmFG.stimulusList ?? []).map(ldXU2Ow => {
      return vDlnfHc(YNX3NJ(ldXU2Ow));
    });
    let cKRkdn = Array.from(ldXU2Ow.querySelectorAll(".lrn_draggable"));
    let oOSpQ0F = new Map();
    for (let KhDI0Qx of cKRkdn) {
      let HoK2xH = KhDI0Qx.querySelector(".lrn_item")?.textContent?.trim();
      if (HoK2xH) {
        oOSpQ0F.set(HoK2xH, KhDI0Qx);
      }
    }
    let dHhm7IJ = Array.from(ldXU2Ow.querySelectorAll(".lrn_assoc_row"));
    let IoZT_i = [];
    for (let KhDI0Qx of dHhm7IJ) {
      let HoK2xH = KhDI0Qx.querySelector(".lrn_assoc_question")?.textContent?.trim() ?? "";
      let fPrXnx = l06wN2S.indexOf(HoK2xH);
      IoZT_i.push(fPrXnx >= 0 ? yctckmj[fPrXnx] : "");
    }
    let sgFh6d = ldXU2Ow.getAttribute("data-reference");
    let i9tUoZ = ldXU2Ow.ownerDocument.defaultView?.LearnosityItems;
    let sbTeKU = sgFh6d && typeof i9tUoZ?.getQuestions == "function" ? i9tUoZ.getQuestions()?.[sgFh6d] : null;
    if (sbTeKU && typeof sbTeKU.setResponse == "function") {
      let KhDI0Qx = IoZT_i.map(ldXU2Ow => {
        return oOSpQ0F.get(ldXU2Ow)?.getAttribute("data-key") ?? "";
      });
      if (KhDI0Qx.every(Boolean)) {
        sbTeKU.setResponse({
          ["value"]: KhDI0Qx
        });
        return !0;
      }
    }
    let XMhsLe = ldXU2Ow.querySelectorAll(".lrn_dropzone");
    let NpE97bV = !1;
    IoZT_i.forEach((ldXU2Ow, Q16EmFG) => {
      let vDlnfHc = oOSpQ0F.get(ldXU2Ow);
      let yctckmj = XMhsLe[Q16EmFG];
      if (!!vDlnfHc && !!yctckmj) {
        vDlnfHc.click();
        yctckmj.click();
        NpE97bV = !0;
      }
    });
    return NpE97bV;
  }
  function aGMRjmw(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG.correctAnswer?.length) {
      return !1;
    }
    let vDlnfHc = Q16EmFG.correctAnswer;
    let yctckmj = Array.from(ldXU2Ow.querySelectorAll(".lrn_draggable"));
    let l06wN2S = new Map();
    let cKRkdn = new Map();
    for (let oOSpQ0F of yctckmj) {
      let KhDI0Qx = Number(oOSpQ0F.getAttribute("data-index"));
      let HoK2xH = oOSpQ0F.getAttribute("data-key");
      if (!Number.isNaN(KhDI0Qx) && HoK2xH) {
        l06wN2S.set(KhDI0Qx, HoK2xH);
        cKRkdn.set(KhDI0Qx, oOSpQ0F);
      }
    }
    let dHhm7IJ = ldXU2Ow.getAttribute("data-reference");
    try {
      let oOSpQ0F = ldXU2Ow.ownerDocument.defaultView?.LearnosityItems;
      let KhDI0Qx = dHhm7IJ && typeof oOSpQ0F?.getQuestions == "function" ? oOSpQ0F.getQuestions()?.[dHhm7IJ] : null;
      if (KhDI0Qx && typeof KhDI0Qx.setResponse == "function") {
        let HoK2xH = vDlnfHc.map(ldXU2Ow => {
          if (Array.isArray(ldXU2Ow)) {
            return ldXU2Ow.map(ldXU2Ow => {
              return l06wN2S.get(Number(ldXU2Ow)) ?? "";
            }).filter(Boolean);
          } else {
            return [];
          }
        });
        KhDI0Qx.setResponse({
          ["value"]: HoK2xH
        });
        return !0;
      }
    } catch {}
    let IoZT_i = Array.from(ldXU2Ow.querySelectorAll(".lrn_dropzone"));
    let fPrXnx = !1;
    vDlnfHc.forEach((ldXU2Ow, Q16EmFG) => {
      if (!Array.isArray(ldXU2Ow)) {
        return;
      }
      let vDlnfHc = IoZT_i[Q16EmFG];
      if (vDlnfHc) {
        for (let yctckmj of ldXU2Ow) {
          let l06wN2S = cKRkdn.get(Number(yctckmj));
          if (l06wN2S) {
            l06wN2S.click();
            vDlnfHc.click();
            fPrXnx = !0;
          }
        }
      }
    });
    return fPrXnx;
  }
  fjdMIu = {
    ["mcq"]: uwR0B9,
    ["clozetext"]: nUVzU8R("wSHGgF", "FVzrwbZhVw", "H87mYBS5hN").YIAtu3f8cq,
    ["clozeassociation"]: _PNXfj,
    ["clozedropdown"]: _PNXfj,
    ["shorttext"]: oQkTUs,
    ["longtext"]: oQkTUs,
    ["plaintext"]: oQkTUs,
    ["tokenhighlight"]: vmoy4u,
    ["choicematrix"]: j_TzpQW,
    ["clozeformula"]: K_jx1fo,
    ["association"]: CLP4Zhn,
    ["orderlist"]: nUVzU8R("1L1DLI", "FVzrwbZhVw", "H87mYBS5hN").YIAtu3f8cq,
    ["classification"]: aGMRjmw
  };
  function Oe2SZC(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = fjdMIu[Q16EmFG.type];
    if (vDlnfHc) {
      return vDlnfHc(ldXU2Ow, Q16EmFG);
    } else {
      return !1;
    }
  }
  function YcnjNm(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = CSS.escape(Q16EmFG);
    let yctckmj = ldXU2Ow.querySelector(".learnosity-item[data-reference=\"" + vDlnfHc + "\"], .lrn_question[data-reference=\"" + vDlnfHc + "\"]");
    if (yctckmj) {
      return yctckmj;
    }
    for (let l06wN2S of ldXU2Ow.querySelectorAll("iframe")) {
      try {
        let cKRkdn = l06wN2S.contentDocument;
        let oOSpQ0F = cKRkdn && YcnjNm(cKRkdn, Q16EmFG);
        if (oOSpQ0F) {
          return oOSpQ0F;
        }
      } catch {}
    }
    return null;
  }
  async function lP1fwL9(ldXU2Ow, Q16EmFG, vDlnfHc) {
    if (vDlnfHc.aborted) {
      return !1;
    }
    try {
      if ("qiAbEl" in OyEKmUI) {
        yctckmj();
      }
      function yctckmj() {
        function ldXU2Ow(ldXU2Ow) {
          var Q16EmFG = ldXU2Ow.length;
          var vDlnfHc;
          var yctckmj;
          var l06wN2S;
          var oOSpQ0F;
          b07TQe(vDlnfHc = [], yctckmj = 0);
          for (l06wN2S = 0; l06wN2S < Q16EmFG; l06wN2S++) {
            vDlnfHc.push(l06wN2S !== 0 && ldXU2Ow[l06wN2S] > ldXU2Ow[l06wN2S - 1] ? vDlnfHc[l06wN2S - 1] + 1 : 1);
          }
          for (oOSpQ0F = Q16EmFG - 1; oOSpQ0F >= 0; oOSpQ0F--) {
            if (oOSpQ0F !== Q16EmFG - 1 && ldXU2Ow[oOSpQ0F] > ldXU2Ow[oOSpQ0F + 1]) {
              vDlnfHc[oOSpQ0F] = Math.max(vDlnfHc[oOSpQ0F], vDlnfHc[oOSpQ0F + 1] + 1);
            }
            yctckmj += vDlnfHc[oOSpQ0F];
          }
          return yctckmj;
        }
        console.log(ldXU2Ow);
      }
      let l06wN2S = await RtFIM3("/nova", {
        ["questionId"]: Q16EmFG
      });
      if (!l06wN2S.ok || vDlnfHc.aborted) {
        return !1;
      }
      let cKRkdn = (await l06wN2S.json())?.results;
      if (!Array.isArray(cKRkdn) || !cKRkdn.length || cKRkdn.some(ldXU2Ow => {
        return !ldXU2Ow || typeof ldXU2Ow.reference != "string" || typeof ldXU2Ow.type != "string";
      })) {
        return !1;
      }
      let oOSpQ0F = await juGOly(() => {
        if (vDlnfHc.aborted) {
          return [];
        }
        if (ldXU2Ow.getElementById("q_" + Q16EmFG)?.style.display === "none") {
          return null;
        }
        let yctckmj = cKRkdn.map(yctckmj => {
          return YcnjNm(ldXU2Ow, yctckmj.reference);
        });
        if (yctckmj.every(yctckmj => {
          return yctckmj?.querySelector("input, select, textarea, .lrn_token, .lrn_draggable, .lrn_sortable, .mq-editable-field");
        })) {
          return yctckmj;
        } else {
          return null;
        }
      }, 100, 10000);
      if (!oOSpQ0F || vDlnfHc.aborted) {
        return !1;
      }
      for (let KhDI0Qx = 0; KhDI0Qx < cKRkdn.length; KhDI0Qx++) {
        if (vDlnfHc.aborted || !(await Oe2SZC(oOSpQ0F[KhDI0Qx], cKRkdn[KhDI0Qx]))) {
          return !1;
        }
      }
      return !vDlnfHc.aborted;
    } catch {
      return !1;
    }
  }
  b07TQe(aNQjrC1 = "autoQuiz", Amuw19 = {
    ["id"]: aNQjrC1,
    ["title"]: "Auto Quiz",
    ["category"]: "edgenuityCore",
    ["options"]: [{
      ["key"]: "autoSubmit",
      ["label"]: "Auto Submit"
    }, {
      ["key"]: "grade",
      ["label"]: "Grade Range",
      ["kind"]: "grade"
    }],
    ["init"](ldXU2Ow) {
      hStc_Hb(".question-buttons", async vDlnfHc => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let yctckmj = vDlnfHc.ownerDocument;
        let l06wN2S = Array.from(vDlnfHc.querySelectorAll("li")).filter(vDlnfHc => {
          if ("JZpdVe" in OyEKmUI) {
            yctckmj();
          }
          function yctckmj() {}
          return vDlnfHc.id.includes("-");
        }).map(vDlnfHc => {
          if ("SzqDDRP" in OyEKmUI) {
            yctckmj();
          }
          function yctckmj() {
            function vDlnfHc(vDlnfHc) {
              const yctckmj = {};
              for (let l06wN2S of vDlnfHc.replace(/[^w]/g, "").toLowerCase()) {
                yctckmj[l06wN2S] = yctckmj[l06wN2S] + 1 || 1;
              }
              return yctckmj;
            }
            function yctckmj(vDlnfHc, yctckmj) {
              const l06wN2S = buildCharMap(vDlnfHc);
              const cKRkdn = buildCharMap(yctckmj);
              for (let oOSpQ0F in l06wN2S) {
                if (l06wN2S[oOSpQ0F] !== cKRkdn[oOSpQ0F]) {
                  return false;
                }
              }
              if (Object.keys(l06wN2S).length !== Object.keys(cKRkdn).length) {
                return false;
              }
              return true;
            }
            function l06wN2S(vDlnfHc) {
              const yctckmj = cKRkdn(vDlnfHc);
              return yctckmj !== Infinity;
            }
            function cKRkdn(vDlnfHc) {
              if (!vDlnfHc) {
                return -1;
              }
              const yctckmj = cKRkdn(vDlnfHc.left);
              const l06wN2S = cKRkdn(vDlnfHc.right);
              const oOSpQ0F = Math.abs(yctckmj - l06wN2S);
              if (yctckmj === Infinity || l06wN2S === Infinity || oOSpQ0F > 1) {
                return Infinity;
              }
              const KhDI0Qx = Math.max(yctckmj, l06wN2S) + 1;
              return KhDI0Qx;
            }
            window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: vDlnfHc,
              isAnagrams: yctckmj,
              isBalanced: l06wN2S,
              getHeightBalanced: cKRkdn
            };
          }
          return vDlnfHc.id;
        });
        if (!l06wN2S.length) {
          return !1;
        }
        let cKRkdn = Math.max(0, l06wN2S.findIndex(vDlnfHc => {
          let l06wN2S = yctckmj.getElementById("q_" + vDlnfHc);
          return l06wN2S && l06wN2S.style.display !== "none";
        }));
        let oOSpQ0F = await QPmrg0(l06wN2S);
        if (ldXU2Ow.aborted) {
          return;
        }
        let KhDI0Qx = mxtpIbz.subOpts[aNQjrC1]?.grade || "90-100";
        let [HoK2xH, dHhm7IJ] = KhDI0Qx.split("-").map(Number);
        let IoZT_i = (HoK2xH + Math.random() * (dHhm7IJ - HoK2xH)) / 100;
        let fPrXnx = Math.round(l06wN2S.length * IoZT_i);
        let sgFh6d = new Set(Array.from({
          ["length"]: l06wN2S.length
        }, (vDlnfHc, yctckmj) => {
          return yctckmj;
        }).sort(() => {
          return Math.random() - 0.5;
        }).slice(0, fPrXnx));
        for (let i9tUoZ = cKRkdn; i9tUoZ < l06wN2S.length; i9tUoZ++) {
          if (ldXU2Ow.aborted) {
            return;
          }
          frlayIM("Quiz " + (i9tUoZ + 1) + "/" + l06wN2S.length);
          let sbTeKU = l06wN2S[i9tUoZ];
          let XMhsLe = oOSpQ0F.find(vDlnfHc => {
            return vDlnfHc.questionId === sbTeKU;
          });
          let NpE97bV = XMhsLe?.correctAnswers?.[0]?.inputId;
          if (NpE97bV && !(await juGOly(() => {
            let vDlnfHc = yctckmj.getElementById("q_" + sbTeKU);
            if (!vDlnfHc || vDlnfHc.style.display === "none") {
              return null;
            } else {
              return yctckmj.getElementById(NpE97bV);
            }
          }, 25, 10000))) {
            return !1;
          }
          if (ldXU2Ow.aborted) {
            return;
          }
          if (XMhsLe?.correctAnswers?.length) {
            if (sgFh6d.has(i9tUoZ)) {
              for (let Uyguw1 of XMhsLe.correctAnswers) {
                let MV3WKRa = yctckmj.getElementById(Uyguw1.inputId);
                if (MV3WKRa) {
                  Q16EmFG = [MV3WKRa, Uyguw1.answerText ?? ""];
                  new nUVzU8R("kA2MMz", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
                }
              }
            } else {
              let Uyguw1 = yctckmj.getElementById("q_" + sbTeKU);
              let MV3WKRa = Array.from(Uyguw1?.querySelectorAll("input, option") || []);
              let WHivJOf = new Set(XMhsLe.correctAnswers.map(vDlnfHc => {
                return vDlnfHc.inputId;
              }));
              let Z6bwiaJ = MV3WKRa.find(vDlnfHc => {
                if (WHivJOf.has(vDlnfHc.id)) {
                  return !1;
                }
                if (vDlnfHc.tagName === "INPUT") {
                  let yctckmj = vDlnfHc.getAttribute("type");
                  return yctckmj === "radio" || yctckmj === "checkbox" || yctckmj === "text";
                }
                if (vDlnfHc.tagName === "OPTION") {
                  return vDlnfHc.value !== "" && vDlnfHc.text.toLowerCase().indexOf("select") === -1;
                } else {
                  return !1;
                }
              });
              if (Z6bwiaJ) {
                let cWVaZN = Z6bwiaJ.tagName === "INPUT" && Z6bwiaJ.getAttribute("type") === "text";
                b07TQe(Q16EmFG = [Z6bwiaJ, cWVaZN ? "?" : ""], new nUVzU8R("kA2MMz", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq);
              } else {
                for (let cWVaZN of XMhsLe.correctAnswers) {
                  let VwxGquh = yctckmj.getElementById(cWVaZN.inputId);
                  if (VwxGquh) {
                    Q16EmFG = [VwxGquh, cWVaZN.answerText ?? ""];
                    nUVzU8R("kA2MMz");
                  }
                }
              }
            }
          } else {
            frlayIM("Quiz " + (i9tUoZ + 1) + "/" + l06wN2S.length + ": Nova");
            let qZk6aKD = await lP1fwL9(yctckmj, sbTeKU, ldXU2Ow);
            if (ldXU2Ow.aborted) {
              return;
            }
            let Uyguw1 = yctckmj.getElementById("q_" + sbTeKU);
            let MV3WKRa = yctckmj.getElementById("" + sbTeKU + "_0");
            let WHivJOf = MV3WKRa?.tagName === "TEXTAREA" ? MV3WKRa : null;
            if (!qZk6aKD && WHivJOf) {
              let Z6bwiaJ = Uyguw1?.querySelector(".Practice_Question_Body span")?.textContent?.trim();
              if (Z6bwiaJ) {
                let cWVaZN = await nMMCZJO(Z6bwiaJ);
                if (ldXU2Ow.aborted) {
                  return;
                }
                if (cWVaZN) {
                  Q16EmFG = [WHivJOf, cWVaZN];
                  new nUVzU8R("kA2MMz", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
                  qZk6aKD = !0;
                }
              }
            }
            if (!qZk6aKD) {
              frlayIM("Quiz " + (i9tUoZ + 1) + "/" + l06wN2S.length + ": answer unavailable");
              return !1;
            }
          }
          if (i9tUoZ === l06wN2S.length - 1) {
            break;
          }
          await l8Lz9Sp("next");
          if (ldXU2Ow.aborted) {
            return;
          }
          let u8aCdFu = yctckmj.getElementById("nextQuestion");
          if (!u8aCdFu) {
            return !1;
          }
          u8aCdFu.click();
        }
        if (mxtpIbz.subOpts[aNQjrC1]?.autoSubmit !== !1) {
          let i9tUoZ = yctckmj.getElementById("submit");
          if (i9tUoZ) {
            if ("JlOAvM" in OyEKmUI) {
              NOWx2r();
            }
            function NOWx2r() {
              function vDlnfHc(vDlnfHc) {
                var yctckmj = 0;
                var l06wN2S;
                var cKRkdn;
                var KhDI0Qx;
                var HoK2xH;
                var dHhm7IJ;
                var IoZT_i;
                b07TQe(l06wN2S = {}, cKRkdn = 0, KhDI0Qx = 0, HoK2xH = 0, dHhm7IJ = vDlnfHc.length);
                for (IoZT_i = 0; IoZT_i < dHhm7IJ; IoZT_i++) {
                  var fPrXnx;
                  b07TQe(l06wN2S = {}, cKRkdn = 0, KhDI0Qx = 1);
                  for (fPrXnx = IoZT_i + 1; fPrXnx < dHhm7IJ; fPrXnx++) {
                    if (vDlnfHc[IoZT_i].x === vDlnfHc[fPrXnx].x && vDlnfHc[IoZT_i].y === vDlnfHc[fPrXnx].y) {
                      KhDI0Qx++;
                      continue;
                    }
                    if (vDlnfHc[IoZT_i].y === vDlnfHc[fPrXnx].y) {
                      HoK2xH = Number.MAX_SAFE_INTEGER;
                    } else {
                      HoK2xH = (vDlnfHc[IoZT_i].x - vDlnfHc[fPrXnx].x) / (vDlnfHc[IoZT_i].y - vDlnfHc[fPrXnx].y);
                    }
                    if (!l06wN2S[HoK2xH]) {
                      l06wN2S[HoK2xH] = 0;
                    }
                    b07TQe(l06wN2S[HoK2xH]++, cKRkdn = Math.max(cKRkdn, l06wN2S[HoK2xH]));
                  }
                  b07TQe(cKRkdn += KhDI0Qx, yctckmj = Math.max(yctckmj, cKRkdn));
                }
                return yctckmj;
              }
              console.log(vDlnfHc);
            }
            i9tUoZ.click();
            let sbTeKU = await juGOly(() => {
              let vDlnfHc = yctckmj.getElementById("submitConfirmMessage");
              if (vDlnfHc && vDlnfHc.style.display !== "none") {
                return vDlnfHc.querySelector(".buttons .submit");
              } else {
                return null;
              }
            }, 25, 5000);
            if (!sbTeKU) {
              return !1;
            }
            if (ldXU2Ow.aborted) {
              return;
            }
            let XMhsLe = mxtpIbz.delays.submit;
            let NpE97bV = Math.min(XMhsLe.min, XMhsLe.max);
            let u8aCdFu = Math.max(XMhsLe.min, XMhsLe.max);
            let qZk6aKD = {
              ["ms"]: 1,
              ["s"]: 1000,
              ["min"]: 60000
            };
            let MV3WKRa = (NpE97bV === u8aCdFu ? NpE97bV : Math.random() * (u8aCdFu - NpE97bV) + NpE97bV) * qZk6aKD[XMhsLe.unit];
            let WHivJOf = yctckmj.querySelector("#submitConfirmMessage .notify");
            let Z6bwiaJ = WHivJOf ? Array.from(WHivJOf.childNodes).find(vDlnfHc => {
              return vDlnfHc.nodeType === 3 && vDlnfHc.textContent?.trim();
            }) : void 0;
            let cWVaZN = Math.round(MV3WKRa / 1000);
            let VwxGquh = vDlnfHc => {
              if (Z6bwiaJ) {
                Z6bwiaJ.textContent = " " + vDlnfHc + " ";
              }
            };
            let vV9IQnH = setInterval(() => {
              b07TQe(cWVaZN--, VwxGquh(cWVaZN > 0 ? "Submitting in " + cWVaZN + "…" : "Submitting…"), frlayIM(cWVaZN > 0 ? "Submit " + cWVaZN : "Submitting"));
            }, 1000);
            VwxGquh("Submitting in " + cWVaZN + "…");
            frlayIM("Submit " + cWVaZN);
            await toEw_S(MV3WKRa);
            clearInterval(vV9IQnH);
            if (ldXU2Ow.aborted) {
              return;
            }
            sbTeKU.click();
          }
        }
        frlayIM("Complete");
      }, ldXU2Ow);
    }
  }, P0sEBU = "autoLanguage", sz1N2k = "<data answer=\"audio/n\" server=\"//media.powerspeak.edgenuity.com\" url=\"//media.powerspeak.edgenuity.com/audio/audio.mp3\"/>", gpmTKw = {
    ["id"]: P0sEBU,
    ["title"]: "Skip Language",
    ["category"]: "edgenuityCore",
    ["init"](ldXU2Ow) {
      hStc_Hb("form#ps-form, form[action*=\"Powerspeak\"]", async Q16EmFG => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let vDlnfHc = Q16EmFG.ownerDocument;
        if (Q16EmFG.textContent?.includes("Submitted")) {
          return;
        }
        if ((Q16EmFG.getAttribute("action") ?? "").includes("Powerspeak/SubmitAudioAttempt")) {
          let yctckmj = Q16EmFG.querySelector("#Key")?.value;
          if (!yctckmj || (await fetch("" + location.origin + "/ContentViewers/Powerspeak/StoreResponse?token=" + yctckmj, {
            ["method"]: "POST",
            ["headers"]: {
              ["Content-Type"]: "text/plain"
            },
            ["body"]: sz1N2k,
            ["signal"]: ldXU2Ow
          }).catch(() => {
            return null;
          }), ldXU2Ow.aborted)) {
            return;
          }
          vDlnfHc.getElementById("SubmitButton")?.click();
          return;
        }
        Q16EmFG.submit();
      }, ldXU2Ow);
    }
  }, xoHwfA = "autoAdvanceCore", GcP1UO = ldXU2Ow => {
    return !ldXU2Ow.classList.contains("disabled");
  }, CkACXuZ = {
    ["id"]: xoHwfA,
    ["title"]: "Auto Advance",
    ["category"]: "edgenuityCore",
    ["options"]: [{
      ["key"]: "startQuizzes",
      ["label"]: "Start Quizzes"
    }],
    ["init"](ldXU2Ow) {
      let Q16EmFG = async Q16EmFG => {
        if (!ldXU2Ow.aborted) {
          if (mxtpIbz.subOpts[xoHwfA]?.startQuizzes !== !1) {
            await toEw_S(2000);
            if (!ldXU2Ow.aborted) {
              Q16EmFG.click();
            }
          }
        }
      };
      b07TQe(hStc_Hb("button.overlay-attempt-clickable", ldXU2Ow => {
        return Q16EmFG(ldXU2Ow);
      }, ldXU2Ow), hStc_Hb("#card-header", async ldXU2Ow => {
        let vDlnfHc = ldXU2Ow.closest(".MuiCard-root");
        if (!vDlnfHc) {
          return;
        }
        let yctckmj = await juGOly(() => {
          return Array.from(vDlnfHc.querySelectorAll("button")).find(ldXU2Ow => {
            return ldXU2Ow.textContent?.trim() === "Begin";
          }) ?? null;
        }, 50, 3000);
        if (yctckmj) {
          Q16EmFG(yctckmj);
        }
      }, ldXU2Ow), hStc_Hb("a.footnav.goRight, button[name=\"Next\"]", Q16EmFG => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let vDlnfHc = async () => {
          if (!ldXU2Ow.aborted && !!GcP1UO(Q16EmFG) && Q16EmFG.offsetParent !== null) {
            await l8Lz9Sp("next");
            if (!ldXU2Ow.aborted && !!GcP1UO(Q16EmFG) && Q16EmFG.offsetParent !== null) {
              Q16EmFG.click();
            }
          }
        };
        vDlnfHc();
        let yctckmj = new MutationObserver(() => {
          return vDlnfHc();
        });
        b07TQe(yctckmj.observe(Q16EmFG, {
          ["attributes"]: !0,
          ["attributeFilter"]: ["class", "disabled", "style", "aria-disabled"]
        }), ldXU2Ow.addEventListener("abort", () => {
          return yctckmj.disconnect();
        }, {
          ["once"]: !0
        }));
      }, ldXU2Ow));

      let lastSubFrame = -1;
      let subTimer = setInterval(async () => {
        if (ldXU2Ow.aborted) {
          clearInterval(subTimer);
          return;
        }
        let stageWin = document.getElementById("stageFrame")?.contentWindow;
        let stageDoc = stageWin?.document;
        let fc = stageWin?.API?.FrameChain;
        let rightBtn = stageDoc?.querySelector("li.FrameRight");
        let isReady = (fc && Array.isArray(fc.framesStatus) && fc.framesStatus[(fc.currentFrame ?? 1) - 1] === "complete" && (fc.currentFrame ?? 1) < fc.framesStatus.length)
          || (rightBtn && rightBtn.style.opacity === "1");
        let frameKey = fc?.currentFrame ?? (stageDoc?.body?.innerText?.slice(0, 60) || "");
        if (isReady && lastSubFrame !== frameKey) {
          lastSubFrame = frameKey;
          await l8Lz9Sp("next");
          if (ldXU2Ow.aborted) return;
          let freshBtn = stageDoc?.querySelector("li.FrameRight");
          if (freshBtn && freshBtn.style.opacity === "1") {
            freshBtn.click();
          } else if (fc && fc.framesStatus[(fc.currentFrame ?? 1) - 1] === "complete") {
            fc.nextFrame();
          }
        } else if (!isReady) {
          lastSubFrame = -1;
        }
      }, 1000);
      ldXU2Ow.addEventListener("abort", () => clearInterval(subTimer), { once: true });
    }
}, zD7fqU = "autoWriting");
  function HqU58X6(ldXU2Ow, Q16EmFG, vDlnfHc, yctckmj) {
    let l06wN2S = ldXU2Ow.getElementById(Q16EmFG);
    if (vDlnfHc?.setData) {
      let cKRkdn = vDlnfHc.editable?.()?.$;
      b07TQe(cKRkdn?.focus(), vDlnfHc.focus());
      let oOSpQ0F = cKRkdn?.ownerDocument;
      b07TQe(oOSpQ0F?.execCommand("insertText", !1, " "), oOSpQ0F?.execCommand("delete"));
      let KhDI0Qx = yctckmj.split(new RegExp("\\n+", "")).map(ldXU2Ow => {
        return "<p>" + ldXU2Ow + "</p>";
      }).join("");
      vDlnfHc.setData(KhDI0Qx, () => {
        return vDlnfHc.updateElement?.();
      });
    } else if (l06wN2S) {
      l06wN2S.focus();
      l06wN2S.value = yctckmj;
      l06wN2S.blur();
    }
  }
  b07TQe(g8j5uEd = {
    ["id"]: zD7fqU,
    ["title"]: "Auto Writing",
    ["category"]: "edgenuityCore",
    ["options"]: [{
      ["key"]: "autoSubmit",
      ["label"]: "Auto Submit"
    }],
    ["init"](ldXU2Ow) {
      let Q16EmFG = new WeakSet();
      b07TQe(hStc_Hb("#journal-prompt", async Q16EmFG => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let vDlnfHc = Q16EmFG.textContent?.trim();
        if (!vDlnfHc) {
          return !1;
        }
        let yctckmj = Q16EmFG.ownerDocument;
        if (!yctckmj.getElementById("Answer")) {
          return !1;
        }
        let l06wN2S = await nMMCZJO(vDlnfHc);
        if (ldXU2Ow.aborted) {
          return;
        }
        if (!l06wN2S) {
          return !1;
        }
        let cKRkdn = yctckmj.defaultView?.CKEDITOR?.instances?.Answer;
        HqU58X6(yctckmj, "Answer", cKRkdn, l06wN2S);
        if (mxtpIbz.subOpts[zD7fqU]?.autoSubmit !== !1) {
          await l8Lz9Sp("submit");
          if (ldXU2Ow.aborted) {
            return;
          }
          yctckmj.getElementById("SubmitButton")?.click();
        }
      }, ldXU2Ow), hStc_Hb("#contentViewer", async vDlnfHc => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let yctckmj = vDlnfHc.ownerDocument;
        let l06wN2S = yctckmj.defaultView?.CKEDITOR;
        let cKRkdn = [];
        let oOSpQ0F = 0;
        while (true) {
          let KhDI0Qx = "Questions_" + oOSpQ0F + "__AnswerText";
          if (!yctckmj.getElementById(KhDI0Qx)) {
            break;
          }
          let HoK2xH = Array.from(vDlnfHc.querySelectorAll("p"))[oOSpQ0F]?.textContent?.trim() ?? "";
          b07TQe(HoK2xH && cKRkdn.push({
            ["question"]: HoK2xH,
            ["id"]: KhDI0Qx
          }), oOSpQ0F++);
        }
        if (!cKRkdn.length) {
          return !1;
        }
        for (let {
          ["question"]: KhDI0Qx,
          ["id"]: dHhm7IJ
        } of cKRkdn) {
          if (ldXU2Ow.aborted) {
            return;
          }
          let HoK2xH = yctckmj.getElementById(dHhm7IJ);
          if (!HoK2xH) {
            return !1;
          }
          if (Q16EmFG.has(HoK2xH)) {
            continue;
          }
          let IoZT_i = await nMMCZJO(KhDI0Qx);
          if (ldXU2Ow.aborted) {
            return;
          }
          if (!IoZT_i) {
            return !1;
          }
          b07TQe(HqU58X6(yctckmj, dHhm7IJ, l06wN2S?.instances?.[dHhm7IJ], IoZT_i), Q16EmFG.add(HoK2xH));
        }
        if (mxtpIbz.subOpts[zD7fqU]?.autoSubmit !== !1) {
          await l8Lz9Sp("submit");
          if (ldXU2Ow.aborted) {
            return;
          }
          (yctckmj.getElementById("SaveButton") ?? yctckmj.querySelector("input[type=submit], button[type=submit]"))?.click();
        }
      }, ldXU2Ow));
    }
  }, i45R9jC = "autoAssignment", AnYRwn = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", "i"));
  function hHD73zD(ldXU2Ow) {
    let Q16EmFG = [ldXU2Ow];
    let vDlnfHc = Ene7WFT(() => {
      return ldXU2Ow.getElementById("iFramePreview")?.contentDocument;
    });
    if (vDlnfHc) {
      Q16EmFG.push(vDlnfHc);
    }
    return Q16EmFG;
  }
  function ZjN3epo(ldXU2Ow) {
    let vDlnfHc = hHD73zD(ldXU2Ow);
    let yctckmj = (vDlnfHc.flatMap(ldXU2Ow => {
      return Array.from(ldXU2Ow.querySelectorAll(".explanation, .reading.pane-blue"));
    })[0]?.innerText?.trim() ?? "").replace(new RegExp("^sample response:\\s*", "i"), "").trim();
    if (!yctckmj) {
      return !1;
    }
    let l06wN2S = 0;
    for (let cKRkdn of vDlnfHc) {
      for (let oOSpQ0F of Array.from(cKRkdn.querySelectorAll("textarea"))) {
        Q16EmFG = [oOSpQ0F, yctckmj];
        nUVzU8R("kA2MMz");
        l06wN2S++;
      }
    }
    return l06wN2S > 0;
  }
  async function Vslt2e(ldXU2Ow, vDlnfHc, yctckmj) {
    let l06wN2S = await QPmrg0(vDlnfHc);
    if (yctckmj.aborted) {
      return !1;
    }
    let cKRkdn = ZjN3epo(ldXU2Ow);
    let oOSpQ0F = hHD73zD(ldXU2Ow);
    let KhDI0Qx = ldXU2Ow => {
      return oOSpQ0F.map(vDlnfHc => {
        return vDlnfHc.getElementById(ldXU2Ow);
      }).find(Boolean) ?? null;
    };
    let HoK2xH = 0;
    for (let dHhm7IJ of l06wN2S) {
      for (let IoZT_i of dHhm7IJ.correctAnswers ?? []) {
        let fPrXnx = KhDI0Qx(IoZT_i.inputId);
        if (fPrXnx) {
          Q16EmFG = [fPrXnx, IoZT_i.answerText ?? ""];
          nUVzU8R("kA2MMz");
          HoK2xH++;
        }
      }
    }
    let sgFh6d = oOSpQ0F.flatMap(ldXU2Ow => {
      return Array.from(ldXU2Ow.querySelectorAll("[fdone]"));
    });
    for (let dHhm7IJ = 0; dHhm7IJ < sgFh6d.length; dHhm7IJ++) {
      if (yctckmj.aborted || (dHhm7IJ > 0 && (await toEw_S(1000)), yctckmj.aborted)) {
        return HoK2xH > 0;
      }
      sgFh6d[dHhm7IJ].click();
    }
    sgFh6d.length;
    return HoK2xH > 0 || cKRkdn;
  }
  function HSd5pt(ldXU2Ow) {
    return hHD73zD(ldXU2Ow).flatMap(ldXU2Ow => {
      return Array.from(ldXU2Ow.querySelectorAll("video"));
    });
  }
  function ldFYHD(ldXU2Ow) {
    for (let Q16EmFG of ldXU2Ow) {
      if (!!Q16EmFG.paused && !Q16EmFG.ended) {
        Q16EmFG.muted = !0;
        Q16EmFG.play().then(() => {}).catch(ldXU2Ow => {});
      }
    }
  }
  function XK84spN(ldXU2Ow, Q16EmFG) {
    return Ene7WFT(() => {
      let vDlnfHc = hHD73zD(ldXU2Ow);
      let yctckmj = vDlnfHc[vDlnfHc.length - 1];
      let l06wN2S = yctckmj.querySelector("iframe[src*=\"interactiveFrame\"]");
      let cKRkdn = Ene7WFT(() => {
        return l06wN2S?.contentWindow?._ifUtils;
      });
      if (cKRkdn?.completeTask) {
        if ("D4zw3y" in OyEKmUI) {
          oOSpQ0F();
        }
        function oOSpQ0F() {}
        cKRkdn.completeTask();
        return !0;
      }
      let KhDI0Qx = yctckmj.querySelector("[taskid]")?.getAttribute("taskid");
      if (KhDI0Qx) {
        if (typeof Q16EmFG?.Frame?.completeTask == "function") {
          Q16EmFG.Frame.completeTask(KhDI0Qx);
        }
        let HoK2xH = vDlnfHc.flatMap(vDlnfHc => {
          return Array.from(vDlnfHc.querySelectorAll("[fdone]"));
        });
        for (let dHhm7IJ of HoK2xH) {
          dHhm7IJ.click();
        }
        HoK2xH.length;
        return !0;
      }
      return !1;
    }) ?? !1;
  }
  async function _Jygov2(ldXU2Ow, vDlnfHc, yctckmj) {
    Q16EmFG = [ldXU2Ow, vDlnfHc];
    let l06wN2S = new nUVzU8R("dVZDNh", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
    if (!l06wN2S.length && (await juGOly(() => {
      return yctckmj.aborted || (Q16EmFG = [ldXU2Ow, vDlnfHc], l06wN2S = new nUVzU8R("dVZDNh", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq).length > 0;
    }, 200, 4000), yctckmj.aborted)) {
      return null;
    } else if (l06wN2S.length) {
      return Vslt2e(ldXU2Ow, l06wN2S, yctckmj);
    } else if (yctckmj.aborted) {
      return null;
    } else if (XK84spN(ldXU2Ow, vDlnfHc)) {
      return "interactive";
    } else {
      return null;
    }
  }
  async function UjNqtU(ldXU2Ow, vDlnfHc) {
    let yctckmj = await juGOly(() => {
      Q16EmFG = [ldXU2Ow];
      let vDlnfHc = new nUVzU8R("V7u5Hl", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
      if (vDlnfHc?.FrameChain && vDlnfHc?.E2020?.version) {
        return vDlnfHc;
      } else {
        return null;
      }
    }, 300, 15000);
    if (!yctckmj || vDlnfHc.aborted) {
      return;
    }
    let l06wN2S = yctckmj.FrameChain;
    let cKRkdn = l06wN2S.framesStatus?.length ?? 0;
    let oOSpQ0F = ldXU2Ow => {
      return frlayIM("" + ldXU2Ow + " " + (l06wN2S.currentFrame ?? "?") + "/" + cKRkdn);
    };
    while (!vDlnfHc.aborted) {
      if (l06wN2S.framesStatus?.every(ldXU2Ow => {
        return ldXU2Ow === "complete";
      })) {
        b07TQe(!l06wN2S.submitted && typeof l06wN2S.complete == "function" && l06wN2S.complete(), frlayIM("Complete"));
        return;
      }
      oOSpQ0F("Frame");
      if (l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] === "complete") {
        await l8Lz9Sp("next");
        if (vDlnfHc.aborted) {
          return;
        }
        b07TQe(l06wN2S.nextFrame(), await toEw_S(1000));
        continue;
      }
      b07TQe(yctckmj?.Audio?.complete?.(), oOSpQ0F("Answering"));
      let KhDI0Qx = await _Jygov2(ldXU2Ow, yctckmj, vDlnfHc);
      if (vDlnfHc.aborted) {
        return;
      }
      b07TQe(yctckmj?.Frame?.check?.(), oOSpQ0F("Checking"));
      let HoK2xH = HSd5pt(ldXU2Ow);
      if (HoK2xH.length) {
        ldFYHD(HoK2xH);
        let dHhm7IJ = await juGOly(() => {
          return vDlnfHc.aborted || (isFinite(HoK2xH[0].duration) && HoK2xH[0].duration > 0 ? HoK2xH[0].duration : null);
        }, 200, 15000);
        if (vDlnfHc.aborted) {
          return;
        }
        if (typeof dHhm7IJ == "number") {
          let IoZT_i = Date.now() + (dHhm7IJ + 5) * 1000;
          await juGOly(() => {
            if (vDlnfHc.aborted || l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] === "complete" || Date.now() >= IoZT_i) {
              return !0;
            }
            let yctckmj = HSd5pt(ldXU2Ow)[0];
            let cKRkdn = yctckmj ? Math.max(0, yctckmj.duration - (yctckmj.currentTime ?? 0)) : 0;
            let oOSpQ0F = Math.floor(cKRkdn / 60);
            let KhDI0Qx = String(Math.floor(cKRkdn % 60)).padStart(2, "0");
            frlayIM("Video " + oOSpQ0F + ":" + KhDI0Qx);
            return !1;
          }, 1000, (dHhm7IJ + 5) * 1000);
          if (vDlnfHc.aborted) {
            return;
          }
          if (l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] === "complete") {
            continue;
          }
        }
      }
      oOSpQ0F("Waiting");
      await juGOly(() => {
        return vDlnfHc.aborted || l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] === "complete";
      }, 200, KhDI0Qx === !0 ? 20000 : KhDI0Qx === "interactive" ? 3000 : 10000);
      if (vDlnfHc.aborted) {
        return;
      }
      if (l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] !== "complete") {
        oOSpQ0F("Rescue");
        Ene7WFT(() => {
          return yctckmj?.Frame?.complete?.();
        });
        await l8Lz9Sp("next");
        if (vDlnfHc.aborted) {
          return;
        }
        if (l06wN2S.framesStatus?.[l06wN2S.currentFrame - 1] !== "complete") {
          l06wN2S.nextFrame();
          await toEw_S(1500);
        }
      }
    }
  }
  async function C7A8Lw(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = await juGOly(() => {
      return Q16EmFG.aborted || ldXU2Ow.getElementById("contentViewer");
    }, 200, 10000);
    if (Q16EmFG.aborted || !vDlnfHc || ldXU2Ow.getElementById("Questions_0__AnswerText")) {
      return;
    }
    let yctckmj = ldXU2Ow.getElementById("SubmitQuestionsButton") ?? ldXU2Ow.querySelector("input[type=submit]");
    if (yctckmj) {
      yctckmj.click();
    }
  }
  b07TQe(Yb34ms = {
    ["id"]: i45R9jC,
    ["title"]: "Auto Assignment",
    ["category"]: "edgenuityCore",
    ["options"]: [],
    ["init"](ldXU2Ow) {
      let Q16EmFG = null;
      b07TQe(ldXU2Ow.addEventListener("abort", () => {
        Q16EmFG?.abort();
      }, {
        ["once"]: !0
      }), QNQ3Wm(ldXU2Ow => {
        b07TQe(Q16EmFG?.abort(), Q16EmFG = new AbortController());
        let vDlnfHc = Q16EmFG.signal;
        let yctckmj = ldXU2Ow.location?.href ?? "";
        if (yctckmj.includes("FrameChain")) {
          UjNqtU(ldXU2Ow, vDlnfHc).catch(ldXU2Ow => {});
        } else if (yctckmj.includes("OnlineContent")) {
          C7A8Lw(ldXU2Ow, vDlnfHc).catch(ldXU2Ow => {});
        }
      }, ldXU2Ow));
    }
  }, Mu6Gm6 = "autoVocab", FLmfeTH = {
    ["id"]: Mu6Gm6,
    ["title"]: "Auto Vocab",
    ["category"]: "edgenuityCore",
    ["init"](ldXU2Ow) {
      hStc_Hb(".word-textbox", async Q16EmFG => {
        if ("QP6BiXd" in OyEKmUI) {
          vDlnfHc();
        }
        function vDlnfHc() {
          function Q16EmFG(Q16EmFG) {
            var l06wN2S = [];
            if (Q16EmFG === 1 || Q16EmFG >= 4) {
              vDlnfHc(l06wN2S, [], Q16EmFG, 0);
            }
            return l06wN2S;
          }
          var vDlnfHc;
          var l06wN2S;
          var cKRkdn;
          b07TQe(vDlnfHc = function (Q16EmFG, KhDI0Qx, HoK2xH, dHhm7IJ) {
            var ldXU2Ow;
            for (ldXU2Ow = dHhm7IJ; ldXU2Ow < HoK2xH; ldXU2Ow++) {
              var IoZT_i;
              if (KhDI0Qx.length !== ldXU2Ow) {
                return;
              }
              for (IoZT_i = 0; IoZT_i < HoK2xH; IoZT_i++) {
                if (cKRkdn(KhDI0Qx, [ldXU2Ow, IoZT_i])) {
                  b07TQe(KhDI0Qx.push([ldXU2Ow, IoZT_i]), vDlnfHc(Q16EmFG, KhDI0Qx, HoK2xH, ldXU2Ow + 1));
                  if (KhDI0Qx.length === HoK2xH) {
                    Q16EmFG.push(l06wN2S(KhDI0Qx));
                  }
                  KhDI0Qx.pop();
                }
              }
            }
          }, l06wN2S = function (Q16EmFG) {
            var vDlnfHc = [];
            var l06wN2S;
            var cKRkdn;
            l06wN2S = Q16EmFG.length;
            for (cKRkdn = 0; cKRkdn < l06wN2S; cKRkdn++) {
              var KhDI0Qx;
              vDlnfHc[cKRkdn] = "";
              for (KhDI0Qx = 0; KhDI0Qx < l06wN2S; KhDI0Qx++) {
                vDlnfHc[cKRkdn] += Q16EmFG[cKRkdn][1] === KhDI0Qx ? "Q" : ".";
              }
            }
            return vDlnfHc;
          }, cKRkdn = function (Q16EmFG, vDlnfHc) {
            var l06wN2S = Q16EmFG.length;
            var cKRkdn;
            for (cKRkdn = 0; cKRkdn < l06wN2S; cKRkdn++) {
              if (Q16EmFG[cKRkdn][0] === vDlnfHc[0] || Q16EmFG[cKRkdn][1] === vDlnfHc[1]) {
                return false;
              }
              if (Math.abs((Q16EmFG[cKRkdn][0] - vDlnfHc[0]) / (Q16EmFG[cKRkdn][1] - vDlnfHc[1])) === 1) {
                return false;
              }
            }
            return true;
          }, console.log(Q16EmFG));
        }
        let yctckmj = Q16EmFG.ownerDocument;
        let l06wN2S = yctckmj.defaultView;
        let cKRkdn = () => {
          if ("pyCVEet" in OyEKmUI) {
            vDlnfHc();
          }
          function vDlnfHc() {
            var vDlnfHc = function () {
              var vDlnfHc = 0;
              var IoZT_i;
              var Q16EmFG;
              IoZT_i = "";
              function l06wN2S(vDlnfHc) {
                return Uyguw1(XMhsLe(Z6bwiaJ(vDlnfHc)));
              }
              function sgFh6d(vDlnfHc, IoZT_i) {
                return Uyguw1(NpE97bV(Z6bwiaJ(vDlnfHc), Z6bwiaJ(IoZT_i)));
              }
              function i9tUoZ(vDlnfHc, IoZT_i) {
                return MV3WKRa(NpE97bV(Z6bwiaJ(vDlnfHc), Z6bwiaJ(IoZT_i)));
              }
              function sbTeKU(vDlnfHc, IoZT_i, Q16EmFG) {
                return WHivJOf(NpE97bV(Z6bwiaJ(vDlnfHc), Z6bwiaJ(IoZT_i)), Q16EmFG);
              }
              function XMhsLe(vDlnfHc) {
                return VwxGquh(YyLqY7(cWVaZN(vDlnfHc), vDlnfHc.length * 8));
              }
              function NpE97bV(vDlnfHc, IoZT_i) {
                var Q16EmFG = cWVaZN(vDlnfHc);
                var l06wN2S;
                var sgFh6d;
                if (Q16EmFG.length > 16) {
                  Q16EmFG = YyLqY7(Q16EmFG, vDlnfHc.length * 8);
                }
                var i9tUoZ = Array(16);
                var sbTeKU = Array(16);
                for (l06wN2S = 0; l06wN2S < 16; l06wN2S++) {
                  b07TQe(i9tUoZ[l06wN2S] = Q16EmFG[l06wN2S] ^ 909522486, sbTeKU[l06wN2S] = Q16EmFG[l06wN2S] ^ 1549556828);
                }
                sgFh6d = YyLqY7(i9tUoZ.concat(cWVaZN(IoZT_i)), 512 + IoZT_i.length * 8);
                return VwxGquh(YyLqY7(sbTeKU.concat(sgFh6d), _iud1X("oE1nfrB", 512, 256)));
              }
              function Uyguw1(IoZT_i) {
                var Q16EmFG;
                var l06wN2S;
                var sgFh6d;
                var i9tUoZ;
                try {} catch (ldXU2Ow) {
                  vDlnfHc = 0;
                }
                b07TQe(Q16EmFG = vDlnfHc ? "0123456789ABCDEF" : "0123456789abcdef", l06wN2S = "", sgFh6d = undefined);
                for (i9tUoZ = 0; i9tUoZ < IoZT_i.length; i9tUoZ++) {
                  b07TQe(sgFh6d = IoZT_i.charCodeAt(i9tUoZ), l06wN2S += Q16EmFG.charAt(sgFh6d >>> 4 & 15) + Q16EmFG.charAt(sgFh6d & 15));
                }
                return l06wN2S;
              }
              function MV3WKRa(vDlnfHc) {
                var Q16EmFG;
                var l06wN2S;
                var sgFh6d;
                var i9tUoZ;
                try {} catch (ldXU2Ow) {
                  IoZT_i = "";
                }
                b07TQe(Q16EmFG = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l06wN2S = "", sgFh6d = vDlnfHc.length);
                for (i9tUoZ = 0; i9tUoZ < sgFh6d; i9tUoZ += 3) {
                  var sbTeKU = vDlnfHc.charCodeAt(i9tUoZ) << 16 | (i9tUoZ + 1 < sgFh6d ? vDlnfHc.charCodeAt(i9tUoZ + 1) << 8 : 0) | (i9tUoZ + 2 < sgFh6d ? vDlnfHc.charCodeAt(i9tUoZ + 2) : 0);
                  var XMhsLe;
                  for (XMhsLe = 0; XMhsLe < 4; XMhsLe++) {
                    if (i9tUoZ * 8 + XMhsLe * 6 > vDlnfHc.length * 8) {
                      l06wN2S += IoZT_i;
                    } else {
                      l06wN2S += Q16EmFG.charAt(sbTeKU >>> 6 * (3 - XMhsLe) & 63);
                    }
                  }
                }
                return l06wN2S;
              }
              function WHivJOf(vDlnfHc, IoZT_i) {
                var Q16EmFG = IoZT_i.length;
                var l06wN2S;
                var sgFh6d;
                var i9tUoZ;
                var sbTeKU;
                l06wN2S = Array();
                var XMhsLe;
                var NpE97bV;
                var Uyguw1;
                var MV3WKRa;
                sgFh6d = Array(Math.ceil(vDlnfHc.length / 2));
                for (XMhsLe = 0; XMhsLe < sgFh6d.length; XMhsLe++) {
                  sgFh6d[XMhsLe] = vDlnfHc.charCodeAt(XMhsLe * 2) << 8 | vDlnfHc.charCodeAt(XMhsLe * 2 + 1);
                }
                while (sgFh6d.length > 0) {
                  b07TQe(MV3WKRa = Array(), Uyguw1 = 0);
                  for (XMhsLe = 0; XMhsLe < sgFh6d.length; XMhsLe++) {
                    b07TQe(Uyguw1 = (Uyguw1 << 16) + sgFh6d[XMhsLe], NpE97bV = Math.floor(Uyguw1 / Q16EmFG), Uyguw1 -= NpE97bV * Q16EmFG);
                    if (MV3WKRa.length > 0 || NpE97bV > 0) {
                      MV3WKRa[MV3WKRa.length] = NpE97bV;
                    }
                  }
                  b07TQe(l06wN2S[l06wN2S.length] = Uyguw1, sgFh6d = MV3WKRa);
                }
                i9tUoZ = "";
                for (XMhsLe = l06wN2S.length - 1; XMhsLe >= 0; XMhsLe--) {
                  i9tUoZ += IoZT_i.charAt(l06wN2S[XMhsLe]);
                }
                sbTeKU = Math.ceil(vDlnfHc.length * 8 / (Math.log(IoZT_i.length) / Math.log(2)));
                for (XMhsLe = i9tUoZ.length; XMhsLe < sbTeKU; XMhsLe++) {
                  i9tUoZ = IoZT_i[0] + i9tUoZ;
                }
                return i9tUoZ;
              }
              function Z6bwiaJ(vDlnfHc) {
                var IoZT_i = "";
                var Q16EmFG;
                Q16EmFG = -1;
                var l06wN2S;
                var sgFh6d;
                while (++Q16EmFG < vDlnfHc.length) {
                  b07TQe(l06wN2S = vDlnfHc.charCodeAt(Q16EmFG), sgFh6d = Q16EmFG + 1 < vDlnfHc.length ? vDlnfHc.charCodeAt(Q16EmFG + 1) : 0);
                  if (l06wN2S >= 55296 && l06wN2S <= 56319 && sgFh6d >= 56320 && sgFh6d <= 57343) {
                    b07TQe(l06wN2S = 65536 + ((l06wN2S & 1023) << 10) + (sgFh6d & 1023), Q16EmFG++);
                  }
                  if (l06wN2S <= 127) {
                    IoZT_i += String.fromCharCode(l06wN2S);
                  } else if (l06wN2S <= 2047) {
                    IoZT_i += String.fromCharCode(192 | l06wN2S >>> 6 & 31, 128 | l06wN2S & 63);
                  } else if (l06wN2S <= 65535) {
                    IoZT_i += String.fromCharCode(224 | l06wN2S >>> 12 & 15, 128 | l06wN2S >>> 6 & 63, 128 | l06wN2S & 63);
                  } else if (l06wN2S <= 2097151) {
                    IoZT_i += String.fromCharCode(240 | l06wN2S >>> 18 & 7, 128 | l06wN2S >>> 12 & 63, 128 | l06wN2S >>> 6 & 63, 128 | l06wN2S & 63);
                  }
                }
                return IoZT_i;
              }
              function cWVaZN(vDlnfHc) {
                var IoZT_i = Array(vDlnfHc.length >> 2);
                var Q16EmFG;
                var Q16EmFG;
                for (Q16EmFG = 0; Q16EmFG < IoZT_i.length; Q16EmFG++) {
                  IoZT_i[Q16EmFG] = 0;
                }
                for (Q16EmFG = 0; Q16EmFG < vDlnfHc.length * 8; Q16EmFG += 8) {
                  IoZT_i[Q16EmFG >> 5] |= (vDlnfHc.charCodeAt(Q16EmFG / 8) & 255) << 24 - Q16EmFG % 32;
                }
                return IoZT_i;
              }
              function VwxGquh(vDlnfHc) {
                var IoZT_i = "";
                var Q16EmFG;
                for (Q16EmFG = 0; Q16EmFG < vDlnfHc.length * 32; Q16EmFG += 8) {
                  IoZT_i += String.fromCharCode(vDlnfHc[Q16EmFG >> 5] >>> 24 - Q16EmFG % 32 & 255);
                }
                return IoZT_i;
              }
              function qZk6aKD(vDlnfHc, IoZT_i) {
                return vDlnfHc >>> IoZT_i | vDlnfHc << 32 - IoZT_i;
              }
              function u8aCdFu(vDlnfHc, IoZT_i) {
                return vDlnfHc >>> IoZT_i;
              }
              function NOWx2r(vDlnfHc, IoZT_i, Q16EmFG) {
                return vDlnfHc & IoZT_i ^ ~vDlnfHc & Q16EmFG;
              }
              function vV9IQnH(vDlnfHc, IoZT_i, Q16EmFG) {
                return vDlnfHc & IoZT_i ^ vDlnfHc & Q16EmFG ^ IoZT_i & Q16EmFG;
              }
              function bLxPxuA(vDlnfHc) {
                return qZk6aKD(vDlnfHc, 2) ^ qZk6aKD(vDlnfHc, 13) ^ qZk6aKD(vDlnfHc, 22);
              }
              function jKnOri(vDlnfHc) {
                return qZk6aKD(vDlnfHc, 6) ^ qZk6aKD(vDlnfHc, 11) ^ qZk6aKD(vDlnfHc, 25);
              }
              function HldUnBJ(vDlnfHc) {
                return qZk6aKD(vDlnfHc, 7) ^ qZk6aKD(vDlnfHc, 18) ^ u8aCdFu(vDlnfHc, 3);
              }
              function Kq6MDI(vDlnfHc) {
                return qZk6aKD(vDlnfHc, 17) ^ qZk6aKD(vDlnfHc, 19) ^ u8aCdFu(vDlnfHc, 10);
              }
              Q16EmFG = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998);
              function YyLqY7(vDlnfHc, IoZT_i) {
                var l06wN2S = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                var sgFh6d;
                sgFh6d = new Array(64);
                var i9tUoZ;
                var sbTeKU;
                var XMhsLe;
                var NpE97bV;
                var Uyguw1;
                var MV3WKRa;
                var WHivJOf;
                var Z6bwiaJ;
                var cWVaZN;
                var VwxGquh;
                var qZk6aKD;
                var u8aCdFu;
                b07TQe(vDlnfHc[IoZT_i >> 5] |= 128 << 24 - IoZT_i % 32, vDlnfHc[(IoZT_i + 64 >> 9 << 4) + 15] = IoZT_i);
                for (cWVaZN = 0; cWVaZN < vDlnfHc.length; cWVaZN += 16) {
                  b07TQe(i9tUoZ = l06wN2S[0], sbTeKU = l06wN2S[1], XMhsLe = l06wN2S[2], NpE97bV = l06wN2S[3], Uyguw1 = l06wN2S[4], MV3WKRa = l06wN2S[5], WHivJOf = l06wN2S[6], Z6bwiaJ = l06wN2S[7]);
                  for (VwxGquh = 0; VwxGquh < 64; VwxGquh++) {
                    b07TQe(VwxGquh < 16 ? sgFh6d[VwxGquh] = vDlnfHc[VwxGquh + cWVaZN] : sgFh6d[VwxGquh] = t3NVDC(t3NVDC(t3NVDC(Kq6MDI(sgFh6d[VwxGquh - 2]), sgFh6d[VwxGquh - 7]), HldUnBJ(sgFh6d[VwxGquh - 15])), sgFh6d[VwxGquh - 16]), qZk6aKD = t3NVDC(t3NVDC(t3NVDC(t3NVDC(Z6bwiaJ, jKnOri(Uyguw1)), NOWx2r(Uyguw1, MV3WKRa, WHivJOf)), Q16EmFG[VwxGquh]), sgFh6d[VwxGquh]), u8aCdFu = t3NVDC(bLxPxuA(i9tUoZ), vV9IQnH(i9tUoZ, sbTeKU, XMhsLe)), Z6bwiaJ = WHivJOf, WHivJOf = MV3WKRa, MV3WKRa = Uyguw1, Uyguw1 = t3NVDC(NpE97bV, qZk6aKD), NpE97bV = XMhsLe, XMhsLe = sbTeKU, sbTeKU = i9tUoZ, i9tUoZ = t3NVDC(qZk6aKD, u8aCdFu));
                  }
                  b07TQe(l06wN2S[0] = t3NVDC(i9tUoZ, l06wN2S[0]), l06wN2S[1] = t3NVDC(sbTeKU, l06wN2S[1]), l06wN2S[2] = t3NVDC(XMhsLe, l06wN2S[2]), l06wN2S[3] = t3NVDC(NpE97bV, l06wN2S[3]), l06wN2S[4] = t3NVDC(Uyguw1, l06wN2S[4]), l06wN2S[5] = t3NVDC(MV3WKRa, l06wN2S[5]), l06wN2S[6] = t3NVDC(WHivJOf, l06wN2S[6]), l06wN2S[7] = t3NVDC(Z6bwiaJ, l06wN2S[7]));
                }
                return l06wN2S;
              }
              function t3NVDC(vDlnfHc, IoZT_i) {
                var Q16EmFG = (vDlnfHc & 65535) + (IoZT_i & 65535);
                var l06wN2S;
                l06wN2S = (vDlnfHc >> 16) + (IoZT_i >> 16) + (Q16EmFG >> 16);
                return l06wN2S << 16 | Q16EmFG & 65535;
              }
              return {
                hex: l06wN2S,
                b64: i9tUoZ,
                any: sbTeKU,
                hex_hmac: sgFh6d,
                b64_hmac: i9tUoZ,
                any_hmac: sbTeKU
              };
            }();
            console.log(vDlnfHc);
          }
          let cKRkdn = yctckmj.querySelector(".word-background");
          if (cKRkdn?.value?.trim()) {
            return cKRkdn.value.trim();
          }
          let HoK2xH = yctckmj.querySelector(".word-text");
          if (HoK2xH?.textContent?.trim()) {
            return HoK2xH.textContent.trim();
          }
          let IoZT_i = l06wN2S.ko?.dataFor(Q16EmFG);
          if (IoZT_i?.word) {
            let fPrXnx = typeof IoZT_i.word == "function" ? IoZT_i.word() : IoZT_i.word;
            if (fPrXnx) {
              return fPrXnx;
            }
          }
          return null;
        };
        while (!ldXU2Ow.aborted && yctckmj.contains(Q16EmFG)) {
          let oOSpQ0F = cKRkdn();
          if (oOSpQ0F) {
            VGhMpp(Q16EmFG, oOSpQ0F);
          }
          for (let KhDI0Qx of Array.from(yctckmj.querySelectorAll("a.playbutton:not(.vocab-off)"))) {
            if (ldXU2Ow.aborted) {
              return;
            }
            KhDI0Qx.click();
          }
          if (!(await juGOly(() => {
            return ldXU2Ow.aborted || !yctckmj.contains(Q16EmFG) || !yctckmj.querySelector("#words button.blue.selected");
          }, 100, 60000)) || ldXU2Ow.aborted || !yctckmj.contains(Q16EmFG)) {
            if ("NraSzO4" in OyEKmUI) {
              HoK2xH();
            }
            function HoK2xH() {
              function Q16EmFG(Q16EmFG) {
                var vDlnfHc = Q16EmFG.length;
                var yctckmj;
                var l06wN2S;
                var cKRkdn;
                var KhDI0Qx;
                var HoK2xH;
                var dHhm7IJ;
                var ldXU2Ow;
                var IoZT_i;
                var fPrXnx;
                var sgFh6d;
                if (vDlnfHc < 2) {
                  return 0;
                }
                b07TQe(yctckmj = Math.max(...Q16EmFG), l06wN2S = Math.min(...Q16EmFG));
                if (yctckmj === l06wN2S) {
                  return 0;
                }
                b07TQe(cKRkdn = Array(vDlnfHc - 1).fill(Number.MAX_SAFE_INTEGER), KhDI0Qx = Array(vDlnfHc - 1).fill(Number.MIN_SAFE_INTEGER), HoK2xH = Math.ceil((yctckmj - l06wN2S) / (vDlnfHc - 1)), dHhm7IJ = 0);
                for (ldXU2Ow = 0; ldXU2Ow < vDlnfHc; ldXU2Ow++) {
                  if (Q16EmFG[ldXU2Ow] === l06wN2S || Q16EmFG[ldXU2Ow] === yctckmj) {
                    continue;
                  }
                  b07TQe(dHhm7IJ = Math.floor((Q16EmFG[ldXU2Ow] - l06wN2S) / HoK2xH), cKRkdn[dHhm7IJ] = Math.min(cKRkdn[dHhm7IJ], Q16EmFG[ldXU2Ow]), KhDI0Qx[dHhm7IJ] = Math.max(KhDI0Qx[dHhm7IJ], Q16EmFG[ldXU2Ow]));
                }
                b07TQe(IoZT_i = Number.MIN_SAFE_INTEGER, fPrXnx = l06wN2S);
                for (sgFh6d = 0; sgFh6d < vDlnfHc - 1; sgFh6d++) {
                  if (cKRkdn[sgFh6d] === Number.MAX_SAFE_INTEGER && KhDI0Qx[sgFh6d] === Number.MIN_SAFE_INTEGER) {
                    continue;
                  }
                  b07TQe(IoZT_i = Math.max(IoZT_i, cKRkdn[sgFh6d] - fPrXnx), fPrXnx = KhDI0Qx[sgFh6d]);
                }
                IoZT_i = Math.max(IoZT_i, yctckmj - fPrXnx);
                return IoZT_i;
              }
              console.log(Q16EmFG);
            }
            return;
          }
          let dHhm7IJ = yctckmj.querySelector("#words button.blue");
          if (!dHhm7IJ) {
            let KhDI0Qx = yctckmj.querySelector(".bottom-tray a.uibtn-blue.uibtn-med");
            if (KhDI0Qx) {
              KhDI0Qx.click();
            }
            return;
          }
          dHhm7IJ.click();
          if (!(await juGOly(() => {
            let Q16EmFG = cKRkdn();
            if (Q16EmFG && Q16EmFG !== oOSpQ0F) {
              return Q16EmFG;
            } else {
              return null;
            }
          }, 100, 10000))) {
            break;
          }
        }
      }, ldXU2Ow);
    }
  }, VOtkl4 = "corruptProject", cnU_51A = ["project", "myproject", "my_project", "upload", "MyProject", "Project"]);
  function aQLSGwh() {
    return "" + cnU_51A[Math.floor(Math.random() * cnU_51A.length)] + ".pdf";
  }
  function hNaOKk() {
    let ldXU2Ow = "%PDF-1.4\n%âãÏÓ\n";
    let Q16EmFG = new Uint8Array(80000);
    for (let vDlnfHc = 0; vDlnfHc < Q16EmFG.length; vDlnfHc += 65536) {
      crypto.getRandomValues(Q16EmFG.subarray(vDlnfHc, vDlnfHc + 65536));
    }
    let yctckmj = "\nxref\n0 1\n0000000000 65535 f\ntrailer\n<<>>\nstartxref\n0\n%%EOF\n";
    return new Blob([ldXU2Ow, Q16EmFG, yctckmj], {
      ["type"]: "application/pdf"
    });
  }
  function HMXxfN(ldXU2Ow) {
    let Q16EmFG = ldXU2Ow.documentElement.innerHTML.match(new RegExp("\\/ContentViewers\\/ContentUpload\\/UploadFileAndData\\/\\?resultKey=([0-9a-f-]+)&enrollmentKey=([0-9a-f-]+)", "i"));
    if (!Q16EmFG) {
      return null;
    }
    let [, vDlnfHc, yctckmj] = Q16EmFG;
    return {
      ["upload"]: "/ContentViewers/ContentUpload/UploadFileAndData/?resultKey=" + vDlnfHc + "&enrollmentKey=" + yctckmj,
      ["submit"]: "/ContentViewers/ContentUpload/SubmitAndExit/?resultKey=" + vDlnfHc + "&enrollmentKey=" + yctckmj
    };
  }
  async function A1oXtQ6(ldXU2Ow, Q16EmFG) {
    if (!(await juGOly(() => {
      return ldXU2Ow.getElementById("fileUpload");
    }, 200, 10000)) || Q16EmFG.aborted) {
      return;
    }
    let vDlnfHc = HMXxfN(ldXU2Ow);
    if (!vDlnfHc) {
      return;
    }
    let yctckmj = new FormData();
    let l06wN2S = aQLSGwh();
    yctckmj.append("fileUpload", hNaOKk(), l06wN2S);
    let cKRkdn = await fetch(vDlnfHc.upload, {
      ["method"]: "POST",
      ["body"]: yctckmj,
      ["credentials"]: "include",
      ["signal"]: Q16EmFG
    });
    if (!Q16EmFG.aborted) {
      if (cKRkdn.ok) {
        ldXU2Ow.defaultView.location.href = vDlnfHc.submit;
      }
    }
  }
  b07TQe(pI9jMV = {
    ["id"]: VOtkl4,
    ["title"]: "Corrupt Project",
    ["category"]: "edgenuityCore",
    ["init"](ldXU2Ow) {
      let Q16EmFG = new WeakSet();
      QNQ3Wm(vDlnfHc => {
        if (vDlnfHc.location?.href?.includes("ContentUpload")) {
          if (!Q16EmFG.has(vDlnfHc)) {
            Q16EmFG.add(vDlnfHc);
            A1oXtQ6(vDlnfHc, ldXU2Ow).catch(vDlnfHc => {
              ldXU2Ow.aborted;
            });
          }
        }
      }, ldXU2Ow);
    }
  }, u2LkB3 = "multiTabs", zwkjR6 = new Set(["RecentPageID", "WrongPageID"]));
  function XE5i6i(ldXU2Ow, Q16EmFG) {
    if (!Q16EmFG) {
      Q16EmFG = function () {
        const ldXU2Ow = require("path");
        const {
          version: Q16EmFG
        } = require("../../package");
        const {
          version: vDlnfHc
        } = require("@redacted/enterprise-plugin/package");
        const {
          version: yctckmj
        } = require("@redacted/components/package");
        const {
          sdkVersion: l06wN2S
        } = require("@redacted/enterprise-plugin");
        const cKRkdn = require("../utils/isStandaloneExecutable");
        const oOSpQ0F = require("./resolve-local-redacted-path");
        const KhDI0Qx = ldXU2Ow.resolve(__dirname, "../redacted.js");
      };
    }
    if ("MwGXxE" in OyEKmUI) {
      Q16EmFG();
    }
    let vDlnfHc = ldXU2Ow;
    if (vDlnfHc.__multiTabs) {
      return;
    }
    vDlnfHc.__multiTabs = !0;
    let yctckmj = vDlnfHc.localStorage;
    let l06wN2S = vDlnfHc.sessionStorage;
    let cKRkdn = vDlnfHc.Storage.prototype;
    let oOSpQ0F = cKRkdn.setItem;
    let KhDI0Qx = cKRkdn.getItem;
    let HoK2xH = cKRkdn.removeItem;
    b07TQe(cKRkdn.setItem = function (ldXU2Ow, Q16EmFG) {
      if (this === yctckmj && zwkjR6.has(ldXU2Ow)) {
        return oOSpQ0F.call(l06wN2S, ldXU2Ow, Q16EmFG);
      } else {
        return oOSpQ0F.call(this, ldXU2Ow, Q16EmFG);
      }
    }, cKRkdn.getItem = function (ldXU2Ow) {
      if (this === yctckmj && zwkjR6.has(ldXU2Ow)) {
        return KhDI0Qx.call(l06wN2S, ldXU2Ow);
      } else {
        return KhDI0Qx.call(this, ldXU2Ow);
      }
    }, cKRkdn.removeItem = function (ldXU2Ow) {
      if (this === yctckmj && zwkjR6.has(ldXU2Ow)) {
        return HoK2xH.call(l06wN2S, ldXU2Ow);
      } else {
        return HoK2xH.call(this, ldXU2Ow);
      }
    });
    let dHhm7IJ = vDlnfHc.JSON;
    let IoZT_i = dHhm7IJ.parse;
    dHhm7IJ.parse = function (ldXU2Ow, Q16EmFG) {
      let vDlnfHc = IoZT_i.call(this, ldXU2Ow, Q16EmFG);
      if (vDlnfHc && typeof vDlnfHc == "object" && "SessionActive" in vDlnfHc && vDlnfHc.SessionActive === !1) {
        vDlnfHc.SessionActive = !0;
      }
      return vDlnfHc;
    };
  }
  b07TQe(UI6Myi = {
    ["id"]: u2LkB3,
    ["title"]: "Multi Tabs",
    ["category"]: "misc",
    ["init"](ldXU2Ow) {
      XE5i6i(window);
    }
  }, _r7zwkD = "tabIndicator", hPJ2at = {
    ["id"]: _r7zwkD,
    ["title"]: "Tab Indicator",
    ["category"]: "misc",
    ["init"](ldXU2Ow) {
      let Q16EmFG = document.title;
      let vDlnfHc = ZRzq5ts(ldXU2Ow => {
        document.title = ldXU2Ow ?? Q16EmFG;
      });
      ldXU2Ow.addEventListener("abort", () => {
        b07TQe(vDlnfHc(), document.title = Q16EmFG);
      }, {
        ["once"]: !0
      });
    }
  }, UVUiujC = ["#profile-nav-dropdown", ".course-name", "h1.user-title", "#maincontent.profile-container .field-content", "a.nav.dave[data-bind*=\"FullName\"]", "span.course[data-bind*=\"CourseName\"]"], pwfd53f = {
    ["id"]: "hidePersonalInfo",
    ["title"]: "Hide personal info",
    ["category"]: "misc",
    ["init"](ldXU2Ow) {
      if (ldXU2Ow.aborted) {
        return;
      }
      let Q16EmFG = new Map();
      let vDlnfHc = [];
      let yctckmj = new Set();
      let l06wN2S = new Set();
      let cKRkdn = ldXU2Ow => {
        return (ldXU2Ow ?? "").replace(new RegExp("\\s+", "g"), " ").trim();
      };
      let oOSpQ0F = ".course-name, [data-bind*=\"CourseName\"]";
      let KhDI0Qx = () => {
        for (let ldXU2Ow of Q16EmFG.keys()) {
          ldXU2Ow.querySelectorAll(oOSpQ0F).forEach(ldXU2Ow => {
            let Q16EmFG = cKRkdn(ldXU2Ow.textContent);
            if (Q16EmFG) {
              l06wN2S.add(Q16EmFG);
            }
          });
        }
        for (let ldXU2Ow of Q16EmFG.keys()) {
          ldXU2Ow.querySelectorAll("div").forEach(ldXU2Ow => {
            if (ldXU2Ow.children.length || ldXU2Ow.closest(".pv-panel")) {
              return;
            }
            if (l06wN2S.has(cKRkdn(ldXU2Ow.textContent))) {
              ldXU2Ow.setAttribute("data-ascenly-private-course", "");
              yctckmj.add(ldXU2Ow);
            } else if (yctckmj.delete(ldXU2Ow)) {
              ldXU2Ow.removeAttribute("data-ascenly-private-course");
            }
          });
        }
      };
      let HoK2xH = ldXU2Ow => {
        if (Q16EmFG.has(ldXU2Ow)) {
          return;
        }
        let yctckmj = ldXU2Ow.createElement("style");
        b07TQe(yctckmj.textContent = "" + [...UVUiujC, "[data-ascenly-private-course]"].flatMap(ldXU2Ow => {
          return [ldXU2Ow, "" + ldXU2Ow + " *"];
        }).join(",") + " {\n        color: transparent !important;\n        -webkit-text-fill-color: transparent !important;\n        text-shadow: 0 0 7px rgba(128, 128, 128, 0.95) !important;\n      }", Q16EmFG.set(ldXU2Ow, yctckmj));
        let l06wN2S = () => {
          let l06wN2S = ldXU2Ow.head ?? ldXU2Ow.documentElement;
          b07TQe(l06wN2S && !yctckmj.isConnected && l06wN2S.append(yctckmj), KhDI0Qx());
        };
        let cKRkdn = new MutationObserver(l06wN2S);
        b07TQe(cKRkdn.observe(ldXU2Ow, {
          ["childList"]: !0,
          ["subtree"]: !0,
          ["characterData"]: !0
        }), vDlnfHc.push(cKRkdn), l06wN2S());
      };
      b07TQe(HoK2xH(document), hStc_Hb(UVUiujC.join(","), ldXU2Ow => {
        return HoK2xH(ldXU2Ow.ownerDocument);
      }, ldXU2Ow), ldXU2Ow.addEventListener("abort", () => {
        b07TQe(vDlnfHc.forEach(ldXU2Ow => {
          return ldXU2Ow.disconnect();
        }), yctckmj.forEach(ldXU2Ow => {
          return ldXU2Ow.removeAttribute("data-ascenly-private-course");
        }), Q16EmFG.forEach(ldXU2Ow => {
          return ldXU2Ow.remove();
        }), Q16EmFG.clear());
      }, {
        ["once"]: !0
      }));
    }
  }, NLqyq7q = "skipVideos");
  function l1IK0N(ldXU2Ow) {
    if (!isFinite(ldXU2Ow.duration) || ldXU2Ow.duration <= 0) {
      return !1;
    } else {
      ldXU2Ow.pause();
      ldXU2Ow.muted = !0;
      ldXU2Ow.currentTime = ldXU2Ow.duration;
      ldXU2Ow.dispatchEvent(new Event("timeupdate"));
      ldXU2Ow.dispatchEvent(new Event("ended"));
      return !0;
    }
  }
  b07TQe(gd1IgC = {
    ["id"]: NLqyq7q,
    ["title"]: "Skip Videos",
    ["category"]: "edgeEX",
    ["init"](ldXU2Ow) {
      if (location.hostname.includes("student.ex")) {
        hStc_Hb("video", async Q16EmFG => {
          if (ldXU2Ow.aborted) {
            return;
          }
          let vDlnfHc = Q16EmFG;
          if (!l1IK0N(vDlnfHc)) {
            vDlnfHc.addEventListener("loadedmetadata", () => {
              if (!ldXU2Ow.aborted) {
                l1IK0N(vDlnfHc);
              }
            }, {
              ["once"]: !0,
              ["signal"]: ldXU2Ow
            });
          }
        }, ldXU2Ow);
      }
    }
  }, CpXhrO = "autoAnswerEX", pMTL2ov = () => {
    return location.hostname.includes("student.ex") && location.href.includes("attempt");
  }, AnmvBw = () => {
    return document.querySelectorAll(".learnosity-item[data-reference]");
  });
async function C62jzxW(ldXU2Ow) {
  return (await Promise.all(ldXU2Ow.map(async (itemId) => {
    const el = document.querySelector(`.learnosity-item[data-reference="${CSS.escape(itemId)}"]`);
    if (!el) return null;

    const passageSelectors = ".wnr-ccquestion-item-passage-section, .wnr-ccpassage-passage-container, .wnr-contentComponent-type-quote-builtin";
    const scopeEl = el.closest("[class*='question-item'], [class*='item-container'], section, article") || document;
    let passageEls = Array.from(scopeEl.querySelectorAll(passageSelectors));
    if (!passageEls.length && scopeEl !== document) {
      passageEls = Array.from(document.querySelectorAll(passageSelectors));
    }
    const topLevelPassages = passageEls.filter(node => !passageEls.some(other => other !== node && other.contains(node)));
    const passageText = Array.from(new Set(
      topLevelPassages.map(node => node.innerText?.replace(/\s+/g, " ").trim()).filter(Boolean)
    )).join("\n\n");
    const questionText = el.innerText.replace(/\s+/g, " ").trim();

    const mcqOptions = Array.from(el.querySelectorAll(".lrn-mcq-option")).map((opt, idx) => ({
      index: idx,
      value: opt.querySelector("input")?.value || String(idx),
      label: opt.innerText.trim()
    }));
    const clozeSelects = Array.from(el.querySelectorAll("select.lrn-cloze-select, select.lrn_cloze_response")).map((sel, idx) => ({
      blankIndex: Number(sel.getAttribute("data-inputid") ?? idx),
      choices: Array.from(sel.options).map(o => o.value).filter(Boolean)
    }));
    const clozeInputs = Array.from(el.querySelectorAll("input.lrn_cloze_response, .lrn_textinput input, input.lrn-cloze-input"))
      .filter(inp => !["hidden", "radio", "checkbox"].includes(inp.type))
      .map((inp, idx) => ({
        blankIndex: Number(inp.getAttribute("data-inputid") ?? idx),
        context: inp.closest("li, p, tr, div")?.innerText?.trim() || "Blank " + (idx + 1)
      }));
    const draggables = Array.from(el.querySelectorAll(".lrn_draggable")).map((d, idx) => ({
      dataIndex: Number(d.getAttribute("data-index") ?? idx),
      text: (d.querySelector(".lrn_item")?.innerText || d.innerText).trim()
    }));
    const assocRows = Array.from(el.querySelectorAll(".lrn_assoc_question")).map(q => q.innerText.trim());
    const sortItems = Array.from(el.querySelectorAll(".lrn_sortable")).map((s, idx) => ({
      index: String(idx),
      text: s.innerText.trim()
    }));
    const dropzones = Array.from(el.querySelectorAll(".lrn_dropzone")).map((z, idx) => ({
      columnIndex: idx,
      label: z.closest("th, td, .lrn_classification_col")?.innerText?.trim() || `Zone ${idx}`
    }));
    const matrixCols = Array.from(el.querySelectorAll("table.lrn_choicematrix_type_table thead th[data-colno]")).map(th => ({
      colIndex: th.getAttribute("data-colno"),
      label: th.innerText.trim()
    }));
    const matrixRows = Array.from(el.querySelectorAll("tr.lrn_stem .lrn-stem-text")).map(s => s.textContent.trim());

    const prompt = [
      "Solve this interactive question using the provided reading passage and return ONLY valid JSON matching this schema:",
      '{"type":"mcq|clozetext|clozedropdown|shorttext|tokenhighlight|orderlist|association|classification|choicematrix","correctAnswer":[],"stimulusList":[]}',
      "Format rules by type:",
      '- mcq: correctAnswer = ["exact option value string"]',
      '- clozedropdown: correctAnswer = ["exact choice string for blankIndex 0", "exact choice string for blankIndex 1", ...]',
      '- clozetext / shorttext: correctAnswer = ["exact text answer for blankIndex 0", ...]',
      '- tokenhighlight: correctAnswer = ["0-based token index string"]',
      '- orderlist: correctAnswer = ["0-based original index strings in the right top-to-bottom order"]',
      '- association: stimulusList = exact Assoc Rows array; correctAnswer = ["exact Draggable text matching each stimulusList row"]',
      '- classification: correctAnswer = [[dataIndex numbers for Zone 0], [dataIndex numbers for Zone 1], ...]',
      '- choicematrix: stimulusList = exact Matrix Rows array; correctAnswer = ["colIndex string matching each stimulusList row"]',
      passageText ? "Reading Passage:\n" + passageText : "",
      "Question text:\n" + questionText,
      mcqOptions.length ? "MCQ Options:\n" + JSON.stringify(mcqOptions) : "",
      clozeSelects.length ? "Dropdown Blanks (use exact choices):\n" + JSON.stringify(clozeSelects) : "",
      clozeInputs.length ? `Text Blanks (MUST return exactly ${clozeInputs.length} answers in order of blankIndex):\n` + JSON.stringify(clozeInputs) : "",
      draggables.length ? "Draggable Tiles:\n" + JSON.stringify(draggables) : "",
      assocRows.length ? "Assoc Rows:\n" + JSON.stringify(assocRows) : "",
      sortItems.length ? "Sortable Items:\n" + JSON.stringify(sortItems) : "",
      dropzones.length ? "Dropzones:\n" + JSON.stringify(dropzones) : "",
      matrixCols.length ? "Matrix Columns:\n" + JSON.stringify(matrixCols) : "",
      matrixRows.length ? "Matrix Rows:\n" + JSON.stringify(matrixRows) : ""
    ].filter(Boolean).join("\n\n");

    const res = await OA5hTl("POST", "/gemini", { prompt });
    if (res?.ok) {
      const data = await res.json();
      if (Array.isArray(data?.correctAnswer) && data.correctAnswer.length) {
        const type = clozeInputs.length > 1 ? "clozetext" : (data.type || (matrixRows.length ? "choicematrix" : clozeSelects.length ? "clozedropdown" : clozeInputs.length ? "clozetext" : "mcq"));
        return {
          reference: itemId,
          type,
          correctAnswer: type === "classification" ? data.correctAnswer : data.correctAnswer.map(String),
          stimulusList: Array.isArray(data.stimulusList) && data.stimulusList.length
            ? data.stimulusList.map(String)
            : (type === "choicematrix" ? matrixRows : [])
        };
      }
    }
    return null;
  }))).filter(result => result !== null);
}
  function Mh83ENt() {
    if (Ene7WFT(() => {
      let ldXU2Ow = window?.API?.Frame;
      if (typeof ldXU2Ow?.completeTask != "function") {
        return !1;
      } else {
        ldXU2Ow.completeTask();
        return !0;
      }
    }) ?? !1) {
      "window.API";
    } else if (iKyU_no()) {
      "bridge";
    } else {
      null;
    }
  }
  async function c9KhqH_(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = FAOAWxS() || !AnmvBw().length && (await juGOly(() => {
      if (Q16EmFG.aborted) {
        return !0;
      } else {
        return FAOAWxS() || null;
      }
    }, 300, 6000)) === !0;
    if (Q16EmFG.aborted || (vDlnfHc && Mh83ENt(), !(await juGOly(() => {
      let ldXU2Ow = Array.from(AnmvBw());
      return ldXU2Ow.length > 0 && ldXU2Ow.every(ldXU2Ow => {
        return ldXU2Ow.querySelector("input, select, textarea, .lrn_token, .lrn_draggable, .lrn_sortable, .mq-editable-field");
      });
    }, 300, 15000))) || Q16EmFG.aborted) {
      return;
    }
    let yctckmj = Array.from(AnmvBw()).filter(Q16EmFG => {
      return !ldXU2Ow.has(Q16EmFG.getAttribute("data-reference"));
    });
    if (yctckmj.length) {
      let l06wN2S = yctckmj.map(ldXU2Ow => {
        return ldXU2Ow.getAttribute("data-reference");
      });
      let cKRkdn = await C62jzxW(l06wN2S);
      if (Q16EmFG.aborted) {
        return;
      }
      let oOSpQ0F = new Map(cKRkdn.map(ldXU2Ow => {
        return [ldXU2Ow.reference, ldXU2Ow];
      }));
      for (let KhDI0Qx of yctckmj) {
        if (Q16EmFG.aborted) {
          return;
        }
        let HoK2xH = KhDI0Qx.getAttribute("data-reference");
        let dHhm7IJ = oOSpQ0F.get(HoK2xH);
        if (!dHhm7IJ) {
          continue;
        }
        b07TQe(await Oe2SZC(KhDI0Qx, dHhm7IJ), ldXU2Ow.add(HoK2xH), await toEw_S(1000));
      }
    }
    if (Q16EmFG.aborted || !Array.from(AnmvBw()).every(Q16EmFG => {
      return ldXU2Ow.has(Q16EmFG.getAttribute("data-reference"));
    }) || (await l8Lz9Sp("next"), Q16EmFG.aborted)) {
      return;
    }
    let IoZT_i = document.querySelector("#player-button");
    if (IoZT_i && !IoZT_i.disabled) {
      IoZT_i.click();
    }
  }
  b07TQe(GkKJsk = {
    ["id"]: CpXhrO,
    ["title"]: "Auto Answer",
    ["category"]: "edgeEX",
    ["options"]: [],
    ["init"](ldXU2Ow) {
      if (!pMTL2ov()) {
        return;
      }
      let Q16EmFG = new Set();
      let vDlnfHc = null;
      let yctckmj = () => {
        if (!ldXU2Ow.aborted && !vDlnfHc) {
          vDlnfHc = c9KhqH_(Q16EmFG, ldXU2Ow).catch(ldXU2Ow => {}).finally(() => {
            vDlnfHc = null;
            if (ldXU2Ow.aborted) {
              return;
            }
            if (Array.from(AnmvBw()).some(ldXU2Ow => {
              return !Q16EmFG.has(ldXU2Ow.getAttribute("data-reference"));
            })) {
              setTimeout(() => {
                if (!ldXU2Ow.aborted) {
                  yctckmj();
                }
              }, 5000);
            }
          });
        }
      };
      let l06wN2S = () => {
        b07TQe(Q16EmFG = new Set(), yctckmj());
      };
      window.addEventListener("popstate", l06wN2S, {
        ["signal"]: ldXU2Ow
      });
      let cKRkdn = history.pushState.bind(history);
      b07TQe(history.pushState = (...ldXU2Ow) => {
        b07TQe(cKRkdn(...ldXU2Ow), l06wN2S());
      }, ldXU2Ow.addEventListener("abort", () => {
        history.pushState = cKRkdn;
      }, {
        ["once"]: !0
      }), hStc_Hb(".learnosity-item[data-reference]", yctckmj, ldXU2Ow), yctckmj());
    }
  }, ekRJR4 = "autoAdvanceEX", Ke258Jt = ["Next", "Finish", "Continue", "Start", "Try Again", "Begin"], PFGMLg = {
    ["id"]: ekRJR4,
    ["title"]: "Auto Advance",
    ["category"]: "edgeEX",
    ["options"]: [{
      ["key"]: "startQuizzes",
      ["label"]: "Start Quizzes"
    }],
    ["init"](ldXU2Ow) {
      let Q16EmFG = async (Q16EmFG, vDlnfHc) => {
        if (ldXU2Ow.aborted) {
          return;
        }
        let yctckmj = Q16EmFG.textContent?.trim() ?? "";
        if (Q16EmFG.id !== "player-button" || !!Ke258Jt.includes(yctckmj)) {
          await l8Lz9Sp("next");
          if (!ldXU2Ow.aborted) {
            if (!Q16EmFG.disabled) {
              Q16EmFG.click();
            }
          }
        }
      };
      b07TQe(hStc_Hb("#player-button", vDlnfHc => {
        let yctckmj = vDlnfHc;
        Q16EmFG(yctckmj, "next");
        let l06wN2S = new MutationObserver(() => {
          return Q16EmFG(yctckmj, "next");
        });
        b07TQe(l06wN2S.observe(yctckmj, {
          ["childList"]: !0,
          ["subtree"]: !0,
          ["characterData"]: !0,
          ["attributes"]: !0,
          ["attributeFilter"]: ["disabled"]
        }), ldXU2Ow.addEventListener("abort", () => {
          return l06wN2S.disconnect();
        }, {
          ["once"]: !0
        }));
      }, ldXU2Ow), hStc_Hb("#activity-conclusion-next-activity-button", ldXU2Ow => {
        Q16EmFG(ldXU2Ow, "next activity");
      }, ldXU2Ow));
    }
  }, G2R11XI = "autoWritingEX");
  async function byYpKvV(ldXU2Ow, Q16EmFG) {
    let vDlnfHc = ldXU2Ow.querySelector("[data-testid=\"question-instruction-element\"]")?.textContent?.trim();
    if (!vDlnfHc) {
      return !1;
    }
    let yctckmj = await nMMCZJO(vDlnfHc);
    if (!yctckmj || Q16EmFG.aborted) {
      return !1;
    }
    let l06wN2S = yctckmj.split(new RegExp("\\n+", "")).map(ldXU2Ow => {
      return "<p>" + ldXU2Ow + "</p>";
    }).join("");
    let cKRkdn = ldXU2Ow.ownerDocument.defaultView?.NGCKEDITOR?.instances;
    if (cKRkdn) {
      for (let oOSpQ0F of Object.keys(cKRkdn)) {
        let KhDI0Qx = cKRkdn[oOSpQ0F];
        if (KhDI0Qx?.element?.$ && ldXU2Ow.contains(KhDI0Qx.element.$) && typeof KhDI0Qx.setData == "function") {
          KhDI0Qx.setData(l06wN2S);
          return !0;
        }
      }
    }
    let HoK2xH = ldXU2Ow.querySelector(".cke_wysiwyg_div[contenteditable=\"true\"]");
    if (HoK2xH) {
      HoK2xH.focus();
      HoK2xH.innerHTML = l06wN2S;
      HoK2xH.dispatchEvent(new Event("input", {
        ["bubbles"]: !0
      }));
      return !0;
    } else {
      return !1;
    }
  }
  async function uc_pV_(ldXU2Ow) {
    if (mxtpIbz.subOpts[G2R11XI]?.autoSubmit === !1 || (await toEw_S(1000), ldXU2Ow.aborted)) {
      return;
    }
    let Q16EmFG = document.querySelector("#player-button");
    if (Q16EmFG && !Q16EmFG.disabled) {
      Q16EmFG.click();
    }
  }
  b07TQe(XihXUMd = {
    ["id"]: G2R11XI,
    ["title"]: "Auto Writing",
    ["category"]: "edgeEX",
    ["options"]: [{
      ["key"]: "autoSubmit",
      ["label"]: "Auto Submit"
    }],
    ["init"](ldXU2Ow) {
      if (location.hostname.includes("student.ex")) {
        hStc_Hb(".nextgen-item[data-reference]", async Q16EmFG => {
          if (ldXU2Ow.aborted) {
            return;
          }
          let vDlnfHc = Q16EmFG;
          let yctckmj = await juGOly(() => {
            return vDlnfHc.querySelector(".cke_wysiwyg_div[contenteditable=\"true\"]");
          }, 200, 10000);
          if (!ldXU2Ow.aborted) {
            if (!yctckmj || !(await byYpKvV(vDlnfHc, ldXU2Ow))) {
              return !1;
            }
            await uc_pV_(ldXU2Ow);
          }
        }, ldXU2Ow);
      }
    }
  }, u_86Uk = [Amuw19, gpmTKw, CkACXuZ, g8j5uEd, Yb34ms, FLmfeTH, pI9jMV, UI6Myi, hPJ2at, pwfd53f, gd1IgC, GkKJsk, PFGMLg, XihXUMd], CQzjQHp = ldXU2Ow => {
    return u_86Uk.find(Q16EmFG => {
      return Q16EmFG.id === ldXU2Ow;
    });
  }, tV4VRe = new Map());
function vh7Uk0() {
  return !!mxtpIbz.key;
}
  function ENkTPE(ldXU2Ow) {
    if (!vh7Uk0()) {
      return;
    }
    let Q16EmFG = CQzjQHp(ldXU2Ow);
    if (!Q16EmFG || tV4VRe.has(ldXU2Ow)) {
      return;
    }
    let vDlnfHc = new AbortController();
    b07TQe(tV4VRe.set(ldXU2Ow, vDlnfHc), Q16EmFG.init(vDlnfHc.signal));
  }
  function CdQnd1j(ldXU2Ow) {
    let Q16EmFG = tV4VRe.get(ldXU2Ow);
    if (Q16EmFG) {
      tV4VRe.delete(ldXU2Ow);
      Q16EmFG.abort();
    }
  }
  function RybUTsd() {
    if (!vh7Uk0()) {
      nUVzU8R("2DXb84", "xskrcFuhcx");
      return;
    }
    for (let ldXU2Ow of u_86Uk) {
      if (mxtpIbz.modules[ldXU2Ow.id]) {
        ENkTPE(ldXU2Ow.id);
      }
    }
  }
  function Pz5RdVt(ldXU2Ow, Q16EmFG, ...vDlnfHc) {
    let yctckmj = Object.assign(document.createElement(ldXU2Ow), Q16EmFG || {});
    yctckmj.append(...vDlnfHc);
    return yctckmj;
  }
  b07TQe(yVFkIGo = (ldXU2Ow, Q16EmFG) => {
    if (ldXU2Ow.key === "Enter" || ldXU2Ow.key === " ") {
      ldXU2Ow.preventDefault();
      Q16EmFG();
    }
  }, SsJQSyj = (ldXU2Ow, Q16EmFG) => {
    if (!document.getElementById(ldXU2Ow)) {
      document.head.append(Pz5RdVt("style", {
        ["id"]: ldXU2Ow,
        ["textContent"]: Q16EmFG
      }));
    }
  }, DsnoBw = ldXU2Ow => {
    b07TQe(ldXU2Ow.style.left = "" + Math.max(0, Math.min(ldXU2Ow.offsetLeft, innerWidth - ldXU2Ow.offsetWidth)) + "px", ldXU2Ow.style.top = "" + Math.max(0, Math.min(ldXU2Ow.offsetTop, innerHeight - ldXU2Ow.offsetHeight)) + "px");
  });
  function j9jGBY(ldXU2Ow, Q16EmFG) {
    b07TQe(Q16EmFG.style.cursor = "grab", Q16EmFG.addEventListener("mousedown", vDlnfHc => {
      if (vDlnfHc.button !== 0 || vDlnfHc.target.closest("button, input, select, a")) {
        return;
      }
      vDlnfHc.preventDefault();
      let yctckmj = ldXU2Ow.getBoundingClientRect();
      let l06wN2S = vDlnfHc.clientX - yctckmj.left;
      let cKRkdn = vDlnfHc.clientY - yctckmj.top;
      let oOSpQ0F = Math.max(0, innerWidth - yctckmj.width);
      let KhDI0Qx = Math.max(0, innerHeight - yctckmj.height);
      let HoK2xH = yctckmj.left;
      let dHhm7IJ = yctckmj.top;
      let IoZT_i = null;
      Q16EmFG.style.cursor = "grabbing";
      let fPrXnx = Pz5RdVt("div", {
        ["style"]: "position:fixed;inset:0;z-index:2147483646;cursor:grabbing"
      });
      document.body.append(fPrXnx);
      let sgFh6d = () => {
        b07TQe(IoZT_i = null, ldXU2Ow.style.left = "" + HoK2xH + "px", ldXU2Ow.style.top = "" + dHhm7IJ + "px");
      };
      let i9tUoZ = vDlnfHc => {
        b07TQe(HoK2xH = Math.max(0, Math.min(vDlnfHc.clientX - l06wN2S, oOSpQ0F)), dHhm7IJ = Math.max(0, Math.min(vDlnfHc.clientY - cKRkdn, KhDI0Qx)), IoZT_i === null && (IoZT_i = requestAnimationFrame(sgFh6d)));
      };
      let sbTeKU = () => {
        b07TQe(IoZT_i !== null && (cancelAnimationFrame(IoZT_i), sgFh6d()), fPrXnx.remove(), Q16EmFG.style.cursor = "grab", document.removeEventListener("mousemove", i9tUoZ), document.removeEventListener("mouseup", sbTeKU), mxtpIbz.pos = {
          ["x"]: HoK2xH,
          ["y"]: dHhm7IJ
        }, tkD5ZbK());
      };
      b07TQe(document.addEventListener("mousemove", i9tUoZ), document.addEventListener("mouseup", sbTeKU));
    }));
  }
  function CeyvaH(ldXU2Ow, Q16EmFG) {
    Q16EmFG.setAttribute("aria-label", ldXU2Ow);
    let vDlnfHc = Pz5RdVt("div", {
      ["className"]: "pv-row"
    }, Pz5RdVt("span", {
      ["className"]: "pv-row-label",
      ["textContent"]: ldXU2Ow
    }), Q16EmFG);
    if (Q16EmFG.classList.contains("pv-toggle")) {
      vDlnfHc.classList.add("pv-row-clickable");
      vDlnfHc.onclick = () => {
        return Q16EmFG.click();
      };
    }
    return vDlnfHc;
  }
  function WixqGoF(ldXU2Ow, Q16EmFG, vDlnfHc) {
    let yctckmj = Pz5RdVt("select", {
      ["className"]: "pv-select"
    });
    for (let l06wN2S of ldXU2Ow) {
      let cKRkdn = Pz5RdVt("option", {
        ["value"]: l06wN2S.value,
        ["textContent"]: l06wN2S.label
      });
      b07TQe(l06wN2S.value === Q16EmFG && (cKRkdn.selected = !0), yctckmj.append(cKRkdn));
    }
    yctckmj.onchange = () => {
      b07TQe(vDlnfHc(yctckmj.value), yctckmj.blur());
    };
    return yctckmj;
  }
  function mJHSnpt(ldXU2Ow, vDlnfHc, yctckmj) {
    b07TQe(vDlnfHc = undefined, yctckmj = undefined);
    let l06wN2S = Pz5RdVt("div", {
      ["className"]: "pv-item"
    });
    let cKRkdn = Pz5RdVt("div", {
      ["className"]: "pv-item-head",
      ["role"]: "button",
      ["tabIndex"]: 0
    });
    Q16EmFG = [!!mxtpIbz.modules[ldXU2Ow.id], vDlnfHc => {
      Q16EmFG = [ldXU2Ow.id, vDlnfHc];
      return nUVzU8R("T0rCOG");
    }];
    let oOSpQ0F = new nUVzU8R("YQDUi8", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq;
    oOSpQ0F.setAttribute("aria-label", ldXU2Ow.title);
    let KhDI0Qx = Pz5RdVt("div", {
      ["className"]: "pv-item-ctrl"
    });
    if (ldXU2Ow.options?.length) {
      let HoK2xH = Pz5RdVt("button", {
        ["className"]: "pv-gear",
        ["title"]: "" + ldXU2Ow.title + " options",
        ["ariaLabel"]: "" + ldXU2Ow.title + " options",
        ["ariaExpanded"]: "false",
        ["innerHTML"]: mZh05HF
      });
      b07TQe(HoK2xH.onclick = ldXU2Ow => {
        b07TQe(ldXU2Ow.stopPropagation(), l06wN2S.classList.toggle("pv-expanded"), HoK2xH.setAttribute("aria-expanded", String(l06wN2S.classList.contains("pv-expanded"))));
        let vDlnfHc = l06wN2S.querySelector(".pv-item-sub");
        if (vDlnfHc) {
          vDlnfHc.inert = !l06wN2S.classList.contains("pv-expanded");
        }
      }, KhDI0Qx.append(HoK2xH));
    }
    KhDI0Qx.append(oOSpQ0F);
    cKRkdn.append(Pz5RdVt("div", {
      ["className"]: "pv-item-title",
      ["textContent"]: ldXU2Ow.title
    }), KhDI0Qx);
    cKRkdn.onclick = () => {
      return oOSpQ0F.click();
    };
    cKRkdn.onkeydown = ldXU2Ow => {
      if (ldXU2Ow.target === cKRkdn) {
        yVFkIGo(ldXU2Ow, () => {
          return cKRkdn.click();
        });
      }
    };
    l06wN2S.append(cKRkdn);
    if (ldXU2Ow.options?.length) {
      let HoK2xH = Pz5RdVt("div", {
        ["className"]: "pv-item-sub-inner"
      });
      b07TQe((vDlnfHc = mxtpIbz.subOpts)[yctckmj = ldXU2Ow.id] ?? (vDlnfHc[yctckmj] = {}), ldXU2Ow.options.forEach(vDlnfHc => {
        return HoK2xH.append((Q16EmFG = [ldXU2Ow.id, vDlnfHc], nUVzU8R("K2DOZM")));
      }), l06wN2S.append(Pz5RdVt("div", {
        ["className"]: "pv-item-sub",
        ["inert"]: !0
      }, HoK2xH)));
    }
    return l06wN2S;
  }
  b07TQe(AtQueI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAMAAADTRh9nAAAA6lBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////XnmiNAAAATXRSTlMA/cnsvEYb71QIo/b+7u3V/Psn4gYSCorSUa3gogIMgkSWi1fdHsieO6wRNaFjAfigbK9SGb7rB8Dq9CPX1rAkRz9JsUDm54W4hLd8e2LMYyYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAC4SURBVBiVXZDXUsNQDAU34MR2eqcTQui99w6hBPb/f4e54SX4vOxoZySNBLC00p/tpYX15bm1xUHKOGcLTiTeGsu9SadTB8Bu7r/0FDjJOCPYOczKXIH9wPn8TMBqfjvgmCN1OoVzvYLLC3WTDfUOKGoRuA/7qajlF25jjR95KodGbsKUeq0UUKrVA6rE2eV6zav6/hM1QtWIvofqAyQtrXa6zee3ZrdT0VYSbm8nn19/r4GPUdKGXx39OpzY29SoAAAAAElFTkSuQmCC", z2zdKH = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"14.9982\" height=\"15\" viewBox=\"0 0 14.9982 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Access key / icon\">%0A<path id=\"Vector\" d=\"M10.125 6.63144e-08C9.30645 -0.000134934 8.50103 0.205853 7.78298 0.598973C7.065 0.992085 6.4575 1.55968 6.01665 2.24938C5.57578 2.93909 5.31567 3.72872 5.26033 4.54542C5.20499 5.36213 5.3562 6.17962 5.7 6.9225L0 12.6225V15H3V12.75H5.25V10.5H6.8775L8.0775 9.3C8.73923 9.60592 9.46125 9.75953 10.1902 9.74955C10.9192 9.7395 11.6366 9.5661 12.2897 9.2421C12.9429 8.9181 13.515 8.45175 13.964 7.87733C14.413 7.30298 14.7275 6.63518 14.8842 5.92319C15.0409 5.21117 15.036 4.47307 14.8697 3.76323C14.7035 3.05339 14.3801 2.38987 13.9235 1.82153C13.4669 1.2532 12.8885 0.794535 12.2312 0.479288C11.5738 0.164048 10.8541 0.000262566 10.125 6.63144e-08ZM12 4.125C12 4.42337 11.8815 4.70952 11.6705 4.9205C11.4595 5.13147 11.1734 5.25 10.875 5.25C10.5766 5.25 10.2905 5.13147 10.0795 4.9205C9.8685 4.70952 9.75 4.42337 9.75 4.125C9.75 3.82663 9.8685 3.54048 10.0795 3.3295C10.2905 3.11853 10.5766 3 10.875 3C11.1734 3 11.4595 3.11853 11.6705 3.3295C11.8815 3.54048 12 3.82663 12 4.125Z\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"%23155BFF\"/>%0A</g>%0A</svg>%0A", aRyotgD = ["Buy a Key!", "Cheapest Prices! Click me", "Better Than Edgypro!"], LU7azh = aRyotgD[Math.floor(Math.random() * aRyotgD.length)]);
  function NkRxRMo() {
    let ldXU2Ow = window.__ascenly_expiringIn;
    let Q16EmFG = window.__ascenly_quota;
    if (mxtpIbz.key) {
      if (ldXU2Ow) {
        return "Key expiring in " + ldXU2Ow;
      } else {
        return "";
      }
    } else if (Q16EmFG) {
      return "" + Q16EmFG.remaining + " / " + Q16EmFG.dailyLimit + " free questions left today";
    } else {
      return "";
    }
  }
  function uIIQBu() {
    let ldXU2Ow = Pz5RdVt("div", {
      ["className"]: "pv-chat"
    });
    let Q16EmFG = Pz5RdVt("div", {
      ["className"]: "pv-msgs"
    });
    Q16EmFG.append(Pz5RdVt("div", {
      ["className"]: "pv-msg pv-msg-greet",
      ["textContent"]: "How can I help you today?"
    }));
    let vDlnfHc = Pz5RdVt("textarea", {
      ["className"]: "pv-chat-input",
      ["placeholder"]: "Ask a question…",
      ["rows"]: 1,
      ["maxLength"]: 2000
    });
    let yctckmj = () => {
      b07TQe(vDlnfHc.style.height = "auto", vDlnfHc.style.height = vDlnfHc.scrollHeight + "px");
    };
    vDlnfHc.oninput = yctckmj;
    let l06wN2S = !1;
    let cKRkdn = Pz5RdVt("button", {
      ["className"]: "pv-chat-send",
      ["type"]: "button",
      ["ariaLabel"]: "Send message",
      ["disabled"]: !0
    }, Pz5RdVt("img", {
      ["src"]: iE_IrT,
      ["alt"]: ""
    }));
    let oOSpQ0F = () => {
      cKRkdn.disabled = l06wN2S || !vDlnfHc.value.trim();
    };
    vDlnfHc.addEventListener("input", oOSpQ0F);
    let KhDI0Qx = async () => {
      let ldXU2Ow = vDlnfHc.value.trim().slice(0, 2000);
      if (!ldXU2Ow || l06wN2S) {
        return;
      }
      b07TQe(l06wN2S = !0, oOSpQ0F(), vDlnfHc.value = "", yctckmj(), Q16EmFG.append(Pz5RdVt("div", {
        ["className"]: "pv-msg pv-msg-user",
        ["textContent"]: ldXU2Ow
      })));
      let cKRkdn = Pz5RdVt("div", {
        ["className"]: "pv-msg pv-msg-bot pv-msg-load",
        ["innerHTML"]: "<span></span><span></span><span></span>"
      });
      b07TQe(Q16EmFG.append(cKRkdn), Q16EmFG.scrollTop = Q16EmFG.scrollHeight);
      let KhDI0Qx = await nMMCZJO(ldXU2Ow);
      cKRkdn.remove();
      let HoK2xH = KhDI0Qx ?? "Sorry, something went wrong. Try again.";
      let dHhm7IJ = Pz5RdVt("div", {
        ["className"]: "pv-msg pv-msg-bot",
        ["textContent"]: HoK2xH
      });
      let IoZT_i = Pz5RdVt("button", {
        ["className"]: "pv-copy",
        ["innerHTML"]: hxh87Em
      });
      b07TQe(IoZT_i.onclick = () => {
        return navigator.clipboard?.writeText(HoK2xH).then(() => {
          b07TQe(IoZT_i.innerHTML = L7Smbsx, setTimeout(() => {
            IoZT_i.innerHTML = hxh87Em;
          }, 1200));
        });
      }, dHhm7IJ.append(IoZT_i), Q16EmFG.append(dHhm7IJ), Q16EmFG.scrollTop = Q16EmFG.scrollHeight, l06wN2S = !1, oOSpQ0F());
    };
    cKRkdn.onclick = () => {
      KhDI0Qx();
    };
    vDlnfHc.onkeydown = ldXU2Ow => {
      if (ldXU2Ow.key === "Enter" && !ldXU2Ow.shiftKey) {
        ldXU2Ow.preventDefault();
        KhDI0Qx();
      }
    };
    ldXU2Ow.append(Q16EmFG, Pz5RdVt("div", {
      ["className"]: "pv-chat-input-row"
    }, vDlnfHc, cKRkdn));
    return ldXU2Ow;
  }
  VBmVXwu = (ldXU2Ow, vDlnfHc) => {
    let yctckmj = mxtpIbz.delays[ldXU2Ow];
    Q16EmFG = [[yctckmj.min, yctckmj.max], ([vDlnfHc, yctckmj]) => {
      b07TQe(mxtpIbz.delays[ldXU2Ow].min = vDlnfHc, mxtpIbz.delays[ldXU2Ow].max = yctckmj, tkD5ZbK());
    }];
    let l06wN2S = nUVzU8R("VcGav0");
    let cKRkdn = WixqGoF(QdemOlT, yctckmj.unit, vDlnfHc => {
      b07TQe(mxtpIbz.delays[ldXU2Ow].unit = vDlnfHc, tkD5ZbK());
    });
    return CeyvaH(vDlnfHc, Pz5RdVt("div", {
      ["className"]: "pv-range-wrap"
    }, l06wN2S, cKRkdn));
  };
  function kIWVMN() {
    let ldXU2Ow = Pz5RdVt("div", {
      ["className"]: "pv-section"
    });
    let Q16EmFG = [VBmVXwu("next", "Next"), VBmVXwu("submit", "Submit")];
    Q16EmFG[0].querySelector(".pv-row-label").prepend(jpcOTdT(cy2gjp, "pv-art pv-delay-icon"));
    Q16EmFG[1].querySelector(".pv-row-label").prepend(jpcOTdT(jKnOri, "pv-art pv-delay-icon"));
    ldXU2Ow.append(Pz5RdVt("div", {
      ["className"]: "pv-delay-group"
    }, ...Q16EmFG));
    return ldXU2Ow;
  }
  function jpcOTdT(ldXU2Ow, Q16EmFG = "pv-art") {
    return Pz5RdVt("img", {
      ["src"]: ldXU2Ow,
      ["alt"]: "",
      ["className"]: Q16EmFG,
      ["draggable"]: !1
    });
  }
  function ln2PPf1(ldXU2Ow, Q16EmFG, vDlnfHc = "pv-text-button") {
    return Pz5RdVt("button", {
      ["type"]: "button",
      ["className"]: vDlnfHc,
      ["textContent"]: ldXU2Ow,
      ["onclick"]: Q16EmFG
    });
  }
  function F67aOG(ldXU2Ow, Q16EmFG) {
    return Pz5RdVt("a", {
      ["className"]: "pv-text-link",
      ["textContent"]: ldXU2Ow,
      ["href"]: Q16EmFG,
      ["target"]: "_blank",
      ["rel"]: "noopener noreferrer"
    });
  }
  function ei38vlD() {
    return Pz5RdVt("div", {
      ["className"]: "pv-view pv-status pv-checking"
    }, jpcOTdT(YyLqY7, "pv-art pv-status-art"), Pz5RdVt("h2", {
      ["textContent"]: "Checking for updates."
    }), Pz5RdVt("p", {
      ["textContent"]: "Making sure your tools are up to date."
    }), Pz5RdVt("div", {
      ["className"]: "pv-checking-label",
      ["role"]: "status"
    }, jpcOTdT(YPQyBa), Pz5RdVt("span", {
      ["textContent"]: "Checking for the latest version…"
    })), Pz5RdVt("p", {
      ["className"]: "pv-checking-footer",
      ["textContent"]: "Your panel will open automatically."
    }));
  }
  function sO_Ngh(ldXU2Ow) {
    return Pz5RdVt("div", {
      ["className"]: "pv-view pv-status"
    }, jpcOTdT(YyLqY7, "pv-art pv-status-art"), Pz5RdVt("h2", {
      ["textContent"]: "A new update is ready."
    }), Pz5RdVt("p", {
      ["textContent"]: "Update your panel to keep using your tools."
    }), ln2PPf1("Update panel", () => {
      return window.open(ldXU2Ow, "_blank");
    }, "pv-key-submit"));
  }
  function jcgLaW2() {
    return Pz5RdVt("div", {
      ["className"]: "pv-view pv-status"
    }, jpcOTdT(t3NVDC, "pv-art pv-status-art"), Pz5RdVt("h2", {
      ["textContent"]: "We’ll be right back."
    }), Pz5RdVt("p", {
      ["textContent"]: "Ascenly is under maintenance. Your key will get the time back. Check Discord for updates."
    }), F67aOG("Visit our Discord ↗", "https://discord.gg/edgenuity"));
  }
  function joVJav(ldXU2Ow, Q16EmFG, vDlnfHc = "redeem", yctckmj, l06wN2S) {
    if (!l06wN2S) {
      l06wN2S = async function () {
        if (dHhm7IJ) {
          return;
        }
        let vDlnfHc = oOSpQ0F.value.trim();
        if (!/^(gsk_|csk-|AIza|AQ\.)[0-9A-Za-z._-]{25,}$/.test(vDlnfHc)) {
          yctckmj(vDlnfHc ? "Check your key and try again." : "Enter your access key.");
          return;
        }
        b07TQe(dHhm7IJ = !0, KhDI0Qx.disabled = !0, KhDI0Qx.textContent = "Checking…", oOSpQ0F.removeAttribute("aria-invalid"), HoK2xH.classList.remove("pv-key-err-on"), mxtpIbz.key = vDlnfHc);
        let l06wN2S = await RtFIM3("/auth", {}).catch(() => {
          return {
            ["ok"]: !1
          };
        });
        dHhm7IJ = !1;
        KhDI0Qx.disabled = !1;
        KhDI0Qx.textContent = Q16EmFG ? "Redeem" : "Continue";
        if (!l06wN2S.ok) {
          b07TQe(mxtpIbz.key = "", tkD5ZbK(), yctckmj(c5WZXm || "Could not activate this key. Please try again."));
          return;
        }
        let cKRkdn = await l06wN2S.json().catch(() => {
          return null;
        });
        b07TQe(window.__ascenly_expiringIn = cKRkdn?.expiringIn, window.__ascenly_quota = void 0, mxtpIbz.view = "", tkD5ZbK(), ldXU2Ow());
      };
    }
    if (!yctckmj) {
      yctckmj = function (ldXU2Ow) {
        b07TQe(HoK2xH.textContent = ldXU2Ow, HoK2xH.classList.add("pv-key-err-on"), oOSpQ0F.setAttribute("aria-invalid", "true"));
      };
    }
    let cKRkdn = Pz5RdVt("div", {
      ["className"]: Q16EmFG ? "pv-redeem" : "pv-view pv-login"
    });
    let oOSpQ0F = Pz5RdVt("input", {
      ["className"]: "pv-key-input",
      ["placeholder"]: "Enter your access key",
      ["ariaLabel"]: "Access key",
      ["spellcheck"]: !1,
      ["autoComplete"]: "off",
      ["maxLength"]: 150
    });
    let KhDI0Qx = ln2PPf1(Q16EmFG ? "Redeem" : "Continue", l06wN2S, "pv-key-submit");
    let HoK2xH = Pz5RdVt("div", {
      ["className"]: "pv-key-err",
      ["role"]: "alert"
    });
    let dHhm7IJ = !1;
    oOSpQ0F.onkeydown = ldXU2Ow => {
      if (ldXU2Ow.key === "Enter") {
        l06wN2S();
      }
    };
    if (Q16EmFG) {
      let IoZT_i = vDlnfHc === "limit";
      cKRkdn.classList.toggle("pv-limit", IoZT_i);
      cKRkdn.append(Pz5RdVt("div", {
        ["className"]: "pv-overlay-brand",
        ["textContent"]: "Ascenly"
      }), jpcOTdT(IoZT_i ? eWiK23J : E_acyNp, "pv-art pv-key-hero"), Pz5RdVt("h2", {
        ["className"]: "pv-redeem-title",
        ["textContent"]: IoZT_i ? "You’re out of\nfree questions." : "Got a key?\nLet’s unlock it."
      }), Pz5RdVt("p", {
        ["className"]: "pv-redeem-description",
        ["textContent"]: IoZT_i ? "Your free questions reset at midnight UTC." : "Enter your key to unlock your access."
      }));
      if (IoZT_i) {
        let fPrXnx = F67aOG("View paid plans", "https://ascenly.ai/pricing/");
        b07TQe(fPrXnx.className = "pv-key-submit pv-plans-link", cKRkdn.append(fPrXnx));
      }
      b07TQe(cKRkdn.append(Pz5RdVt("div", {
        ["className"]: "pv-redeem-form"
      }, oOSpQ0F, KhDI0Qx), HoK2xH), IoZT_i || cKRkdn.append(ln2PPf1("Go back", Q16EmFG, "pv-text-button pv-redeem-back")));
    } else {
      let IoZT_i = Pz5RdVt("div", {
        ["className"]: "pv-login-method"
      });
      let fPrXnx = ldXU2Ow => {
        b07TQe(HoK2xH.classList.remove("pv-key-err-on"), oOSpQ0F.removeAttribute("aria-invalid"), IoZT_i.classList.toggle("pv-login-paid", ldXU2Ow), IoZT_i.replaceChildren());
        let Q16EmFG = Pz5RdVt("div", {
          ["className"]: "pv-login-heading"
        }, Pz5RdVt("h2", {
          ["textContent"]: ldXU2Ow ? "Your key.\nYour Ascenly." : "50 free questions\nOr A Paid Key."
        }));
        if (!ldXU2Ow) {
          Q16EmFG.append(Pz5RdVt("p", {
            ["textContent"]: "Link Discord For Free Questions Daily"
          }));
        }
        IoZT_i.append(Q16EmFG);
        if (ldXU2Ow) {
          let vDlnfHc = Pz5RdVt("div", {
            ["className"]: "pv-login-field"
          }, Pz5RdVt("img", {
            ["src"]: z2zdKH,
            ["alt"]: ""
          }), oOSpQ0F);
          IoZT_i.append(Pz5RdVt("div", {
            ["className"]: "pv-login-form"
          }, vDlnfHc, HoK2xH), KhDI0Qx, ln2PPf1("Use Discord instead", () => {
            return fPrXnx(!1);
          }, "pv-login-secondary"), F67aOG("Need a key? View plans ↗", "https://ascenly.ai/pricing/"));
        } else {
          let vDlnfHc = Pz5RdVt("span", {
            ["textContent"]: "Continue with Discord"
          });
          let yctckmj = ln2PPf1("Continue with Discord", async () => {
            b07TQe(yctckmj.disabled = !0, vDlnfHc.textContent = "Connecting to Discord…");
            try {
              await bVKezMb();
            } catch {
              b07TQe(yctckmj.disabled = !1, vDlnfHc.textContent = "Continue with Discord", HoK2xH.textContent = "Could not start sign-in. Please try again.", HoK2xH.classList.add("pv-key-err-on"));
            }
          }, "pv-key-submit");
          b07TQe(yctckmj.replaceChildren(Pz5RdVt("img", {
            ["src"]: AtQueI,
            ["alt"]: ""
          }), vDlnfHc), IoZT_i.append(yctckmj, ln2PPf1("Use a paid key", () => {
            return fPrXnx(!0);
          }, "pv-login-secondary"), HoK2xH));
        }
      };
      b07TQe(cKRkdn.append(Pz5RdVt("div", {
        ["className"]: "pv-login-main"
      }, IoZT_i), Pz5RdVt("div", {
        ["className"]: "pv-screen-footer"
      }, F67aOG("Visit website ↗", "https://ascenly.ai/"), F67aOG("Get help →", "https://discord.gg/edgenuity"))), fPrXnx(!1));
    }
    if (c5WZXm) {
      HoK2xH.textContent = c5WZXm;
      HoK2xH.classList.add("pv-key-err-on");
    }
    return cKRkdn;
  }
  function w2iWwz4(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S, cKRkdn, oOSpQ0F, KhDI0Qx, HoK2xH, dHhm7IJ, IoZT_i) {
    if (!IoZT_i) {
      IoZT_i = function () {
        MV3WKRa.replaceChildren();
        let ldXU2Ow = WHivJOf.value.trim().toLowerCase();
        let vDlnfHc = vDlnfHc => {
          return vDlnfHc.toLowerCase().includes(ldXU2Ow);
        };
        let yctckmj = [...VwxGquh.map(ldXU2Ow => {
          return u_86Uk.find(vDlnfHc => {
            return vDlnfHc.id === ldXU2Ow;
          });
        }), ...u_86Uk.filter(ldXU2Ow => {
          return ldXU2Ow.category === "edgeEX";
        })];
        let l06wN2S = !1;
        for (let cKRkdn of yctckmj) {
          let oOSpQ0F = qZk6aKD[cKRkdn.id] ?? cKRkdn.title;
          if (vDlnfHc("" + oOSpQ0F + " " + cKRkdn.title + " " + (cKRkdn.category === "edgeEX" ? "EdgeEX" : "Edgenuity"))) {
            if (cKRkdn.category === "edgeEX" && !l06wN2S) {
              MV3WKRa.append(Pz5RdVt("div", {
                ["className"]: "pv-section-heading pv-platform-heading",
                ["textContent"]: "EdgeEX"
              }));
              l06wN2S = !0;
            }
            let dHhm7IJ = mJHSnpt(cKRkdn);
            dHhm7IJ.dataset.module = cKRkdn.id;
            let IoZT_i = dHhm7IJ.querySelector(".pv-item-title");
            b07TQe(IoZT_i.textContent = oOSpQ0F, dHhm7IJ.querySelector(".pv-item-head").prepend(jpcOTdT(u8aCdFu[cKRkdn.id] ?? GZ24GI6, "pv-art pv-tool-icon")), MV3WKRa.append(dHhm7IJ));
          }
        }
        if (ldXU2Ow && vDlnfHc("Timing delays next submit")) {
          MV3WKRa.append(KhDI0Qx("Timing", "delaysAccuracy", cy2gjp));
        }
        if (ldXU2Ow && vDlnfHc("Settings theme keybind shortcut square privacy tabs")) {
          MV3WKRa.append(KhDI0Qx("Settings", "misc", ARJTd9Z));
        }
        if (mxtpIbz.key && vDlnfHc("Ask Ascenly AI assistant chat")) {
          let cKRkdn = ln2PPf1("", () => {
            return HoK2xH("aiAssistant");
          }, "pv-tool-link");
          b07TQe(cKRkdn.append(jpcOTdT(HldUnBJ, "pv-art pv-tool-icon"), Pz5RdVt("span", {
            ["className"]: "pv-tool-copy"
          }, Pz5RdVt("strong", {
            ["textContent"]: "Ask Ascenly"
          }), Pz5RdVt("span", {
            ["textContent"]: "Explanations and follow-ups"
          })), jpcOTdT(CEllbSn, "pv-chevron")), MV3WKRa.append(cKRkdn));
        }
        b07TQe(MV3WKRa.childElementCount || MV3WKRa.append(Pz5RdVt("p", {
          ["className"]: "pv-empty",
          ["textContent"]: "No tools found."
        })), requestAnimationFrame(() => {
          if (MV3WKRa.isConnected && MV3WKRa.clientHeight > 0) {
            MV3WKRa.dispatchEvent(new Event("scroll"));
          }
        }));
      };
    }
    if (!dHhm7IJ) {
      dHhm7IJ = function () {
        let ldXU2Ow = i9tUoZ.querySelector(".pv-usage");
        if (ldXU2Ow) {
          let vDlnfHc = window.__ascenly_quota;
          let yctckmj = NkRxRMo();
          if (ldXU2Ow.dataset.label !== yctckmj) {
            ldXU2Ow.dataset.label = yctckmj;
            ldXU2Ow.replaceChildren();
            if (mxtpIbz.key) {
              ldXU2Ow.append(Pz5RdVt("strong", {
                ["textContent"]: window.__ascenly_expiringIn ? "Expires in " + window.__ascenly_expiringIn : "Paid access"
              }), Pz5RdVt("p", {
                ["textContent"]: "No daily question limit"
              }));
            } else {
              ldXU2Ow.append(Pz5RdVt("strong", {
                ["className"]: "pv-usage-count",
                ["textContent"]: vDlnfHc ? String(vDlnfHc.remaining) : "—"
              }), Pz5RdVt("span", {
                ["textContent"]: vDlnfHc ? " / " + vDlnfHc.dailyLimit + " questions left" : " Checking your allowance…"
              }));
            }
          }
        }
        if (window.__ascenly_quota?.remaining !== 0) {
          cWVaZN = !1;
        } else if (fPrXnx.isConnected && !mxtpIbz.key && !cWVaZN) {
          cWVaZN = !0;
          cKRkdn(!0);
        }
      };
    }
    if (!HoK2xH) {
      HoK2xH = function (oOSpQ0F, IoZT_i = !0) {
        if (BGtSzH.some(IoZT_i => {
          return IoZT_i.id === oOSpQ0F;
        }) && (oOSpQ0F !== "aiAssistant" || !!mxtpIbz.key)) {
          Z6bwiaJ = document.activeElement;
          mxtpIbz.view = oOSpQ0F;
          tkD5ZbK();
          ldXU2Ow.style.visibility = "visible";
          vDlnfHc.textContent = oOSpQ0F === "aiAssistant" ? "Ask Ascenly" : BGtSzH.find(IoZT_i => {
            return IoZT_i.id === oOSpQ0F;
          }).label;
          yctckmj.classList.add("pv-in-detail");
          sbTeKU.replaceChildren();
          XMhsLe.replaceChildren();
          i9tUoZ.classList.toggle("pv-chat-view", oOSpQ0F === "aiAssistant");
          NpE97bV.hidden = oOSpQ0F !== "misc";
          if (oOSpQ0F === "aiAssistant") {
            sbTeKU.append(uIIQBu());
          } else if (oOSpQ0F === "delaysAccuracy") {
            b07TQe(sbTeKU.append(Pz5RdVt("p", {
              ["className"]: "pv-description",
              ["textContent"]: "Set the timing between actions."
            }), kIWVMN()), XMhsLe.append(ln2PPf1("Reset timings", () => {
              b07TQe(mxtpIbz.delays.next = {
                ["min"]: 1,
                ["max"]: 3,
                ["unit"]: "s"
              }, mxtpIbz.delays.submit = {
                ["min"]: 1,
                ["max"]: 3,
                ["unit"]: "s"
              }, tkD5ZbK(), HoK2xH(oOSpQ0F));
            })));
          } else if (oOSpQ0F === "modelSettings") {
            const curProv = mxtpIbz.provider || "gemini";
            const provCfg = AI_PROVIDERS[curProv] || AI_PROVIDERS.gemini;
            const providerOptions = Object.keys(AI_PROVIDERS).map(k => ({
              value: k,
              label: AI_PROVIDERS[k].label
            }));
            const defaultModel = provCfg.models?.[0]?.value || "";

            const modelInput = Pz5RdVt("input", {
              className: "pv-key-input",
              type: "text",
              placeholder: defaultModel || "Enter model ID…",
              value: mxtpIbz.customModel || mxtpIbz.model || defaultModel,
              spellcheck: false,
              autoComplete: "off"
            });
            modelInput.oninput = () => {
              const val = modelInput.value.trim();
              mxtpIbz.model = val;
              mxtpIbz.customModel = val;
              tkD5ZbK();
            };

            const keyInput = Pz5RdVt("input", {
              className: "pv-key-input",
              type: "password",
              placeholder: provCfg.placeholder,
              value: mxtpIbz.apiKeys?.[curProv] || (curProv === "gemini" ? mxtpIbz.key : "") || "",
              spellcheck: false,
              autoComplete: "off"
            });
            keyInput.oninput = () => {
              const val = keyInput.value.trim();
              if (!mxtpIbz.apiKeys) mxtpIbz.apiKeys = {};
              mxtpIbz.apiKeys[curProv] = val;
              if (val) mxtpIbz.key = val;
              tkD5ZbK();
            };

            sbTeKU.append(
              Pz5RdVt("p", {
                className: "pv-description",
                textContent: "Choose your AI provider, type any model ID, and enter your API key."
              }),
              CeyvaH("Provider", WixqGoF(providerOptions, curProv, newProv => {
                mxtpIbz.provider = newProv;
                const nextDefault = AI_PROVIDERS[newProv]?.models?.[0]?.value || "";
                mxtpIbz.model = nextDefault;
                mxtpIbz.customModel = nextDefault;
                const saved = mxtpIbz.apiKeys?.[newProv] || "";
                if (saved) mxtpIbz.key = saved;
                tkD5ZbK();
                HoK2xH("modelSettings", !1);
              })),
              Pz5RdVt("div", {
                className: "pv-section-heading",
                style: "margin-top:12px"
              }, Pz5RdVt("strong", {
                textContent: "Model ID"
              })),
              modelInput,
              Pz5RdVt("div", {
                className: "pv-section-heading",
                style: "margin-top:14px"
              }, Pz5RdVt("strong", {
                textContent: "API Key"
              })),
              keyInput
            );
          } else {
            let MV3WKRa = Pz5RdVt("section", {
              ["className"]: "pv-plan"
            });
            let WHivJOf = Pz5RdVt("div", {
              ["className"]: "pv-plan-usage"
            }, Pz5RdVt("div", {
              ["className"]: "pv-usage",
              ["ariaLive"]: "polite"
            }));
            MV3WKRa.append(Pz5RdVt("div", {
              ["className"]: "pv-section-heading"
            }, jpcOTdT(WVEmrT), Pz5RdVt("strong", {
              ["textContent"]: "Plan & usage"
            }), Pz5RdVt("span", {
              ["className"]: "pv-plan-badge",
              ["textContent"]: mxtpIbz.key ? "Paid" : "Free"
            })), WHivJOf);
            if (!mxtpIbz.key) {
              let cWVaZN = ln2PPf1("Redeem a key", () => {
                return cKRkdn();
              }, "pv-menu-link pv-redeem-link");
              b07TQe(cWVaZN.prepend(Pz5RdVt("span", {
                ["className"]: "pv-key-icon"
              }, jpcOTdT(QYd_9Dr))), WHivJOf.append(cWVaZN));
            }
            let VwxGquh = KhDI0Qx("Timing", "delaysAccuracy", cy2gjp);
            let modelBtn = KhDI0Qx("Model", "modelSettings", HldUnBJ);
            b07TQe(VwxGquh.classList.add("pv-timing-button"), VwxGquh.append(jpcOTdT(CEllbSn, "pv-timing-chevron")), modelBtn.classList.add("pv-timing-button"), modelBtn.append(jpcOTdT(CEllbSn, "pv-timing-chevron")), sbTeKU.append(MV3WKRa, Pz5RdVt("div", {
              ["className"]: "pv-timing-section"
            }, VwxGquh, modelBtn), Pz5RdVt("div", {
              ["className"]: "pv-section-heading"
            }, jpcOTdT(HldUnBJ, "pv-art pv-assistant-icon"), Pz5RdVt("strong", {
              ["textContent"]: "Panel preferences"
            })), CeyvaH("Accent color", WixqGoF(Object.keys(yt3q1m).map(oOSpQ0F => {
              return {
                ["value"]: oOSpQ0F,
                ["label"]: oOSpQ0F === "rgb" ? "RGB" : oOSpQ0F[0].toUpperCase() + oOSpQ0F.slice(1)
              };
            }), mxtpIbz.theme, oOSpQ0F => {
              b07TQe(mxtpIbz.theme = oOSpQ0F, tkD5ZbK(), gxiwcC5(mxtpIbz.theme, mxtpIbz.darkMode));
            })), CeyvaH("Panel shortcut", WixqGoF(RVWUXz, mxtpIbz.keybind, oOSpQ0F => {
              b07TQe(mxtpIbz.keybind = oOSpQ0F, tkD5ZbK());
            })), CeyvaH("Square corners", (Q16EmFG = [mxtpIbz.square, oOSpQ0F => {
              b07TQe(mxtpIbz.square = oOSpQ0F, tkD5ZbK(), yctckmj.classList.toggle("pv-square", oOSpQ0F));
            }], nUVzU8R("YQDUi8", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq))), u_86Uk.filter(oOSpQ0F => {
              return oOSpQ0F.category === "misc";
            }).forEach(oOSpQ0F => {
              return sbTeKU.append(mJHSnpt(oOSpQ0F));
            }), XMhsLe.append(ln2PPf1("Log out", l06wN2S), NpE97bV));
          }
          b07TQe(sbTeKU.scrollTop = 0, sgFh6d.inert = !0, i9tUoZ.inert = !1, fPrXnx.classList.add("pv-sliding"), dHhm7IJ(), requestAnimationFrame(Uyguw1), IoZT_i && ldXU2Ow.focus({
            ["preventScroll"]: !0
          }));
        }
      };
    }
    if (!KhDI0Qx) {
      KhDI0Qx = function (ldXU2Ow, vDlnfHc, yctckmj = CEllbSn) {
        let l06wN2S = ln2PPf1(ldXU2Ow, () => {
          return HoK2xH(vDlnfHc);
        }, "pv-menu-link");
        l06wN2S.prepend(jpcOTdT(yctckmj, yctckmj === cy2gjp ? "pv-art pv-menu-raster" : "pv-art"));
        return l06wN2S;
      };
    }
    if (!oOSpQ0F) {
      oOSpQ0F = function () {
        b07TQe(mxtpIbz.view = "", tkD5ZbK(), ldXU2Ow.style.visibility = "hidden", vDlnfHc.textContent = "Ascenly", yctckmj.classList.remove("pv-in-detail"), fPrXnx.classList.remove("pv-sliding"), sgFh6d.inert = !1, i9tUoZ.inert = !0, IoZT_i(), (Z6bwiaJ?.isConnected ? Z6bwiaJ : WHivJOf).focus({
          ["preventScroll"]: !0
        }));
      };
    }
    let fPrXnx = Pz5RdVt("div", {
      ["className"]: "pv-slider"
    });
    let sgFh6d = Pz5RdVt("div", {
      ["className"]: "pv-view pv-home"
    });
    let i9tUoZ = Pz5RdVt("div", {
      ["className"]: "pv-view pv-detail",
      ["inert"]: !0
    });
    let sbTeKU = Pz5RdVt("div", {
      ["className"]: "pv-items"
    });
    let XMhsLe = Pz5RdVt("div", {
      ["className"]: "pv-screen-footer"
    });
    let NpE97bV = ln2PPf1("Scroll down  ›", () => {
      sbTeKU.scrollBy({
        ["top"]: 195,
        ["behavior"]: "smooth"
      });
    }, "pv-scroll-cue");
    NpE97bV.hidden = !0;
    let Uyguw1 = () => {
      if (!NpE97bV.hidden && sbTeKU.clientHeight !== 0) {
        NpE97bV.textContent = sbTeKU.scrollTop + sbTeKU.clientHeight >= sbTeKU.scrollHeight - 2 ? "All settings shown" : "Scroll down  ›";
      }
    };
    sbTeKU.addEventListener("scroll", Uyguw1);
    let MV3WKRa = Pz5RdVt("div", {
      ["className"]: "pv-tools"
    });
    let WHivJOf = Pz5RdVt("input", {
      ["className"]: "pv-search-input",
      ["type"]: "search",
      ["placeholder"]: "Find a tool or setting…",
      ["ariaLabel"]: "Find a tool or setting"
    });
    let Z6bwiaJ = null;
    let cWVaZN = !1;
    let VwxGquh = ["autoQuiz", "autoAdvanceCore", "autoWriting", "autoAssignment", "autoVocab", "autoLanguage", "corruptProject"];
    let qZk6aKD = {
      ["autoQuiz"]: "Auto Quiz",
      ["autoAdvanceCore"]: "Auto advance",
      ["autoWriting"]: "Auto writing",
      ["autoVocab"]: "Auto vocabulary"
    };
    let u8aCdFu = {
      ["autoQuiz"]: bLxPxuA,
      ["autoAnswerEX"]: bLxPxuA,
      ["autoAdvanceCore"]: vV9IQnH,
      ["autoAdvanceEX"]: vV9IQnH,
      ["autoVocab"]: TmC7pJ,
      ["skipVideos"]: vV9IQnH
    };
    b07TQe(ldXU2Ow.onclick = oOSpQ0F, WHivJOf.oninput = IoZT_i);
    let NOWx2r = ln2PPf1("⌘ K", () => {
      return WHivJOf.focus();
    }, "pv-search-shortcut");
    let jKnOri = !mxtpIbz.key && !!mxtpIbz.session;
    let Kq6MDI = Pz5RdVt("span", {
      ["textContent"]: jKnOri ? LU7azh : "Join our community"
    });
    let t3NVDC = Pz5RdVt("a", {
      ["className"]: "pv-community",
      ["hidden"]: !!mxtpIbz.key,
      ["href"]: jKnOri ? "https://ascenly.ai/pricing" : "https://discord.gg/edgenuity",
      ["target"]: "_blank",
      ["rel"]: "noopener noreferrer"
    }, Kq6MDI, Pz5RdVt("span", {
      ["className"]: "pv-character-crop"
    }, jpcOTdT(YyLqY7)));
    let iE_IrT = ln2PPf1("Scroll down  ›", () => {
      return MV3WKRa.scrollBy({
        ["top"]: 195,
        ["behavior"]: "smooth"
      });
    }, "pv-scroll-cue");
    MV3WKRa.onscroll = () => {
      iE_IrT.textContent = MV3WKRa.scrollTop + MV3WKRa.clientHeight >= MV3WKRa.scrollHeight - 2 ? "All tools shown" : "Scroll down  ›";
    };
    sgFh6d.append(Pz5RdVt("div", {
      ["className"]: "pv-search"
    }, jpcOTdT(BbNEmN), WHivJOf, NOWx2r), t3NVDC, MV3WKRa, iE_IrT);
    i9tUoZ.append(sbTeKU, XMhsLe);
    fPrXnx.append(sgFh6d, i9tUoZ);
    fPrXnx.addEventListener("pv-settings", () => {
      return HoK2xH("misc");
    });
    fPrXnx.addEventListener("pv-quota", dHhm7IJ);
    fPrXnx.onkeydown = ldXU2Ow => {
      if ((ldXU2Ow.metaKey || ldXU2Ow.ctrlKey) && ldXU2Ow.key.toLowerCase() === "k") {
        ldXU2Ow.preventDefault();
        oOSpQ0F();
        WHivJOf.focus();
      }
    };
    IoZT_i();
    if (mxtpIbz.view === "edgenuityCore") {
      mxtpIbz.view = "";
      tkD5ZbK();
    } else if (mxtpIbz.view && !yctckmj.classList.contains("pv-has-overlay")) {
      HoK2xH(mxtpIbz.view, !1);
    }
    return fPrXnx;
  }
  b07TQe(N_t3c3D = "data:image/svg+xml,<svg preserveAspectRatio=\"none\" overflow=\"visible\" style=\"display: block;\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">%0A<g id=\"Hover / Minimize / Default / ca1e26d3\">%0A<path id=\"Vector\" d=\"M6 12H18\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke=\"%237B86A0\"/>%0A</g>%0A</svg>%0A", XPqnA2 = "@property --pv-rgb-hue {\n    syntax: \"<number>\";\n    inherits: true;\n    initial-value: 0;\n}\n\n.pv-panel {\n    all: initial;\n    color-scheme: light;\n    --c-primary: hsl(158, 70%, 40%);\n    --c-primary-f: hsla(158, 70%, 40%, 0.08);\n    --c-bg: #fff;\n    --c-card: #f6f8fc;\n    --c-text: #111d40;\n    --c-text-dim: #7b86a0;\n    --c-border: #e3e9f2;\n    --c-rule: #e9eef6;\n    --c-tool-border: #eff2f7;\n    --c-search: #fafbfd;\n    --c-search-border: #e5eaf2;\n    --c-tabs: #f3f6fb;\n    --c-toggle-off: #d5dbe5;\n    --c-error: #e1243e;\n    --art-hue: -64deg;\n    position: fixed;\n    z-index: 2147483647;\n    display: flex;\n    flex-direction: column;\n    width: 360px;\n    height: 540px;\n    max-width: calc(100vw - 16px);\n    max-height: calc(100dvh - 16px);\n    padding: 24px 24px 16px;\n    border: 1px solid var(--c-border);\n    border-radius: 12px;\n    background: var(--c-bg);\n    color: var(--c-text);\n    box-shadow: 0 8px 24px rgba(38, 51, 77, 0.09);\n    font: 400 14px/20px \"Ascenly Outfit\", sans-serif;\n    box-sizing: border-box;\n    overflow: hidden;\n    user-select: none;\n    animation: pv-enter 210ms ease-out;\n}\n\n.pv-panel[data-theme=\"rgb\"] {\n    --pv-rgb-hue: 0;\n    animation: pv-enter 210ms ease-out, pv-rgb 12s linear infinite;\n}\n\n@keyframes pv-rgb {\n    to {\n        --pv-rgb-hue: 360;\n    }\n}\n\n.pv-panel[data-mode=\"dark\"] {\n    color-scheme: dark;\n    --c-bg: #101722;\n    --c-card: #1d2838;\n    --c-text: #edf2fb;\n    --c-text-dim: #a5b1c8;\n    --c-border: #334158;\n    --c-rule: #273448;\n    --c-tool-border: #273448;\n    --c-search: #172130;\n    --c-search-border: #334158;\n    --c-tabs: #1d2838;\n    --c-toggle-off: #46536b;\n    --c-error: #ff8593;\n}\n\n.pv-panel *,\n.pv-panel *::before,\n.pv-panel *::after {\n    box-sizing: border-box;\n}\n\n.pv-panel :is(p, h2, strong, span, label, section, div) {\n    margin: 0;\n}\n\n.pv-panel :is(button, input, textarea, select, a) {\n    font: inherit;\n    color: inherit;\n    margin: 0;\n    letter-spacing: normal;\n    text-transform: none;\n    box-shadow: none;\n}\n\n.pv-panel button {\n    appearance: none;\n    background: transparent;\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n}\n\n.pv-panel a {\n    text-decoration: none;\n}\n\n.pv-panel button:disabled {\n    cursor: wait;\n    opacity: 0.6;\n}\n\n.pv-panel [hidden] {\n    display: none !important;\n}\n\n.pv-panel :focus-visible {\n    outline: 2px solid var(--c-primary);\n    outline-offset: 3px;\n}\n\n.pv-panel.pv-square,\n.pv-panel.pv-square * {\n    border-radius: 0 !important;\n}\n\n.pv-header {\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    align-items: center;\n    column-gap: 10px;\n    flex: 0 0 52px;\n    margin: -24px -24px 0 !important;\n    padding: 24px 24px 0;\n    min-width: 0;\n    cursor: grab;\n    touch-action: none;\n}\n\n.pv-title-wrap {\n    grid-column: 2;\n    grid-row: 1;\n    min-width: 0;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n\n.pv-back {\n    grid-column: 1;\n    grid-row: 1;\n    justify-self: start;\n}\n\n.pv-ctrls {\n    grid-column: 3;\n    grid-row: 1;\n    justify-self: end;\n}\n\n.pv-title,\n.pv-overlay-brand {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 24px;\n    letter-spacing: -0.8px;\n}\n\n.pv-ctrls {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.pv-btn-icon,\n.pv-back,\n.pv-gear {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    border-radius: 4px;\n    transition: background 140ms ease-out, opacity 140ms ease-out;\n}\n\n.pv-btn-icon {\n    width: 24px;\n    height: 24px;\n}\n\n.pv-back {\n    width: 28px;\n    height: 28px;\n}\n\n.pv-back img {\n    width: 20px;\n    height: 20px;\n}\n\n.pv-back[style*=\"hidden\"] {\n    visibility: hidden;\n}\n\n.pv-in-detail .pv-btn-icon[title=\"Settings\"] {\n    display: none;\n}\n\n.pv-panel :is(.pv-btn-icon, .pv-back, .pv-gear):hover {\n    background: var(--c-primary-f);\n}\n\n.pv-panel img {\n    display: block;\n    max-width: none;\n    flex-shrink: 0;\n    pointer-events: none;\n}\n\n.pv-art,\n.pv-btn-icon img,\n.pv-back img,\n.pv-gear img {\n    filter: hue-rotate(var(--art-hue));\n}\n\n.pv-btn-icon svg {\n    width: 24px;\n    height: 24px;\n}\n\n.pv-btn-icon[title=\"Settings\"] svg {\n    width: 16px;\n    height: 16px;\n}\n\n.pv-content {\n    overflow: hidden;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n}\n\n.pv-min {\n    height: auto;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n\n.pv-min .pv-header {\n    flex-basis: 28px;\n    margin-top: 0 !important;\n    padding-top: 0;\n}\n\n.pv-min .pv-content {\n    overflow: hidden;\n    display: none;\n}\n\n.pv-slider {\n    display: flex;\n    flex: 1;\n    width: 200%;\n    min-height: 0;\n    transition: transform 180ms ease-out;\n}\n\n.pv-sliding {\n    transform: translateX(-50%);\n}\n\n.pv-view {\n    display: flex;\n    flex-direction: column;\n    flex: 0 0 50%;\n    min-width: 0;\n    min-height: 0;\n}\n\n.pv-home {\n    padding-top: 12px;\n}\n\n.pv-search {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    gap: 7px;\n    height: 36px;\n    padding: 0 8px;\n    border: 1px solid var(--c-search-border);\n    border-radius: 5px;\n    background: var(--c-search);\n}\n\n.pv-search > img {\n    width: 17px;\n    height: 17px;\n    object-fit: contain;\n}\n\n.pv-panel .pv-search-input {\n    min-width: 0;\n    width: 100%;\n    height: 32px;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    font-size: 12px;\n    line-height: 18px;\n    outline: none;\n}\n\n.pv-search:focus-within {\n    border-color: var(--c-primary);\n}\n\n.pv-search-input::placeholder {\n    color: var(--c-text-dim);\n    opacity: 1;\n}\n\n.pv-panel .pv-search-shortcut {\n    font-size: 10px;\n    line-height: 14px;\n    font-weight: 500;\n    color: var(--c-text-dim);\n    white-space: nowrap;\n}\n\n.pv-community {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 48px;\n    flex-shrink: 0;\n    margin: 16px 0 12px !important;\n    padding: 0 12px;\n    border: 1px solid color-mix(in srgb, var(--c-primary) 15%, var(--c-bg));\n    border-radius: 7px;\n    background: linear-gradient(90deg, color-mix(in srgb, var(--c-primary) 5%, var(--c-bg)), color-mix(in srgb, var(--c-primary) 10%, var(--c-bg)));\n    font-size: 13px !important;\n    line-height: 18px !important;\n    font-weight: 600 !important;\n}\n\n.pv-character-crop {\n    position: absolute;\n    width: 104px;\n    height: 76px;\n    top: -29px;\n    right: 0;\n    overflow: hidden;\n    border-radius: 7px;\n}\n\n.pv-character-crop img {\n    position: absolute;\n    top: 3px;\n    left: -10px;\n    width: 118px;\n    height: 118px;\n    object-fit: contain;\n}\n\n.pv-tools {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    overscroll-behavior: contain;\n    scrollbar-width: none;\n    mask-image: linear-gradient(#000 calc(100% - 20px), transparent);\n}\n\n.pv-tools::-webkit-scrollbar {\n    display: none;\n}\n\n.pv-item-head,\n.pv-tool-link {\n    display: flex;\n    align-items: center;\n    gap: 9px;\n    width: 100%;\n    min-height: 64.8px;\n    text-align: left;\n    cursor: pointer;\n}\n\n.pv-item,\n.pv-tool-link {\n    border-bottom: 1px solid var(--c-tool-border) !important;\n}\n\n.pv-item-title,\n.pv-tool-copy {\n    flex: 1;\n    min-width: 0;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 20px;\n}\n\n.pv-tool-copy {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.pv-tool-copy strong {\n    font-weight: 600;\n}\n\n.pv-tool-description,\n.pv-tool-copy > span {\n    display: block;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 16px;\n    color: var(--c-text-dim);\n}\n\n.pv-tool-description {\n    margin-top: 2px !important;\n}\n\n.pv-tool-icon {\n    width: 28px;\n    height: 28px;\n    object-fit: contain;\n}\n\n.pv-item-ctrl {\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    gap: 9px;\n}\n\n.pv-gear {\n    width: 18px;\n    height: 18px;\n}\n\n.pv-gear svg {\n    width: 16px;\n    height: 16px;\n}\n\n.pv-expanded .pv-gear {\n    background: var(--c-primary-f);\n}\n\n.pv-toggle {\n    position: relative;\n    flex: 0 0 40px;\n    width: 40px;\n    height: 22.5px;\n    border-radius: 999px;\n    background: var(--c-toggle-off);\n    cursor: pointer;\n    transition: background 180ms ease-out;\n}\n\n.pv-toggle::before {\n    content: \"\";\n    position: absolute;\n    width: 17.5px;\n    height: 17.5px;\n    top: 2.5px;\n    left: 2.5px;\n    background: white;\n    border-radius: 50%;\n    transition: transform 180ms ease-out;\n}\n\n.pv-panel.pv-square .pv-toggle {\n    border-radius: 6px !important;\n}\n\n.pv-panel.pv-square .pv-toggle::before {\n    border-radius: 5px !important;\n}\n\n.pv-toggle.pv-on {\n    background: var(--c-primary);\n}\n\n.pv-panel[data-theme=\"blue\"] .pv-toggle.pv-on {\n    background: #155bff;\n}\n\n.pv-toggle.pv-on::before {\n    transform: translateX(17.5px);\n}\n\n.pv-item-sub {\n    display: grid;\n    grid-template-rows: 0fr;\n    transition: grid-template-rows 180ms ease-out;\n}\n\n.pv-expanded .pv-item-sub {\n    grid-template-rows: 1fr;\n}\n\n.pv-item-sub-inner {\n    min-height: 0;\n    overflow: hidden;\n}\n\n.pv-sub-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    min-height: 40px;\n    padding: 6px 0 6px 12px;\n}\n\n.pv-sub-label {\n    font-size: 12px;\n    line-height: 18px;\n}\n\n.pv-expanded .pv-item-sub-inner {\n    padding-bottom: 12px;\n}\n\n.pv-panel .pv-scroll-cue {\n    flex: 0 0 24px;\n    text-align: center;\n    color: var(--c-text-dim);\n    font-size: 10px;\n    line-height: 14px;\n}\n\n.pv-panel .pv-screen-footer .pv-scroll-cue {\n    flex: 0 0 auto;\n    min-height: 24px;\n    white-space: nowrap;\n}\n\n.pv-detail {\n    padding-top: 16px;\n    gap: 16px;\n}\n\n.pv-items {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    scrollbar-width: none;\n    padding-bottom: 16px;\n}\n\n.pv-items::-webkit-scrollbar {\n    display: none;\n}\n\n.pv-section-heading {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    min-height: 20px;\n    margin-bottom: 12px !important;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.pv-section-heading strong {\n    font-weight: 600;\n}\n\n.pv-assistant-icon {\n    width: 20px;\n    height: 20px;\n    object-fit: contain;\n}\n\n.pv-platform-heading {\n    margin: 18px 0 0 !important;\n    color: var(--c-text-dim);\n    font-size: 12px;\n}\n\n.pv-plan {\n    padding-bottom: 16px;\n    margin-bottom: 16px !important;\n    border-bottom: 1px solid var(--c-rule);\n}\n\n.pv-plan .pv-section-heading {\n    margin-bottom: 8px !important;\n}\n\n.pv-plan-usage {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.pv-plan-usage .pv-usage {\n    flex: 1;\n    min-width: 0;\n}\n\n.pv-panel .pv-plan-usage .pv-redeem-link {\n    flex-shrink: 0;\n    width: auto;\n    margin-top: 0 !important;\n    font-size: 11px;\n    white-space: nowrap;\n}\n\n.pv-timing-section {\n    padding-bottom: 16px;\n    margin-bottom: 16px !important;\n    border-bottom: 1px solid var(--c-border);\n}\n\n.pv-panel .pv-menu-link.pv-timing-button {\n    width: 100%;\n    min-height: 44px;\n    padding: 8px 0;\n    background: transparent;\n    color: var(--c-text);\n    font-size: 14px;\n    font-weight: 500;\n}\n\n.pv-panel .pv-timing-button:hover {\n    color: var(--c-primary);\n}\n\n.pv-panel .pv-timing-chevron {\n    width: 32px;\n    height: 24px;\n    margin-left: auto;\n    object-fit: contain;\n}\n\n.pv-plan-badge {\n    margin-left: auto !important;\n    padding: 1px 8px;\n    border-radius: 5px;\n    background: var(--c-card);\n    color: var(--c-text-dim);\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 20px;\n}\n\n.pv-usage {\n    min-height: 28px;\n    color: var(--c-text-dim);\n    font-size: 12px;\n    line-height: 16px;\n}\n\n.pv-usage strong {\n    color: var(--c-text);\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 500;\n}\n\n.pv-usage .pv-usage-count {\n    display: inline-block;\n    font-size: 24px;\n    animation: pv-count 220ms ease-out;\n}\n\n.pv-usage > p {\n    margin-top: 2px;\n    font-size: 11px;\n}\n\n.pv-panel .pv-menu-link {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    width: 100%;\n    min-height: 36px;\n    text-align: left;\n    color: var(--c-primary);\n    font-size: 13px;\n    font-weight: 500;\n}\n\n.pv-menu-raster {\n    width: 24px;\n    height: 24px;\n    object-fit: contain;\n}\n\n.pv-panel .pv-redeem-link {\n    margin-top: 8px;\n    min-height: 30px;\n}\n\n.pv-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    min-height: 36px;\n    margin-bottom: 12px !important;\n}\n\n.pv-row-label {\n    font-size: 14px;\n    line-height: 20px;\n}\n\n.pv-row-clickable {\n    cursor: pointer;\n}\n\n.pv-panel :is(.pv-select, .pv-num, .pv-key-input, .pv-chat-input) {\n    appearance: auto;\n    min-width: 0;\n    border: 1px solid var(--c-border);\n    border-radius: 8px;\n    padding: 8px 12px;\n    background: var(--c-bg);\n    color: var(--c-text);\n    font-size: 13px;\n    line-height: 18px;\n    outline: none;\n    transition: border-color 140ms ease-out;\n    user-select: text;\n}\n\n.pv-panel :is(.pv-select, .pv-num, .pv-key-input, .pv-chat-input):focus {\n    border-color: var(--c-primary);\n}\n\n.pv-select {\n    max-width: 150px;\n    height: 36px;\n}\n\n.pv-range-wrap,\n.pv-range {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.pv-panel .pv-num {\n    width: 43px;\n    height: 32px;\n    padding: 5px 3px;\n    text-align: center;\n    appearance: textfield;\n}\n\n.pv-num::-webkit-inner-spin-button,\n.pv-num::-webkit-outer-spin-button {\n    appearance: none;\n    margin: 0;\n}\n\n.pv-range-wrap .pv-select {\n    max-width: 64px;\n    height: 32px;\n    padding: 5px;\n    font-size: 11px;\n}\n\n.pv-description {\n    font-size: 13px;\n    line-height: 20px;\n    color: var(--c-text-dim);\n    margin: 8px 0 16px !important;\n}\n\n.pv-delay-group {\n    border: 1px solid var(--c-border);\n    border-radius: 10px;\n    overflow: hidden;\n}\n\n.pv-delay-group .pv-row {\n    min-height: 72px;\n    margin: 0 !important;\n    padding: 12px;\n    border-bottom: 1px solid var(--c-tool-border);\n}\n\n.pv-delay-group .pv-row:last-child {\n    border: 0;\n}\n\n.pv-delay-group .pv-row-label {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.pv-screen-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex: 0 0 28px;\n    border-top: 1px solid var(--c-rule);\n    font-size: 10px;\n    line-height: 14px;\n    color: var(--c-text-dim);\n}\n\n.pv-panel :is(.pv-text-button, .pv-text-link) {\n    color: var(--c-primary);\n    font-size: 11px;\n    font-weight: 500;\n    line-height: 16px;\n}\n\n.pv-panel :is(.pv-text-button, .pv-text-link):hover {\n    text-decoration: underline;\n}\n\n.pv-links {\n    display: flex;\n    gap: 10px;\n    margin-top: 16px !important;\n}\n\n.pv-links a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    flex: 1;\n    padding: 7px;\n    border-radius: 7px;\n    background: var(--c-primary-f);\n    text-align: center;\n}\n\n.pv-panel:has(.pv-login) {\n    padding: 20px 24px;\n    --c-primary: #155bff !important;\n    --c-primary-f: #f0f6ff !important;\n    --c-text-dim: #7b86a0;\n}\n\n.pv-panel[data-mode=\"dark\"]:has(.pv-login) {\n    --c-primary: #155bff !important;\n    --c-primary-f: #172c50 !important;\n    --c-text-dim: #a0afc4;\n}\n\n.pv-panel:has(.pv-login) .pv-header {\n    grid-template-columns: 1fr auto;\n    flex: 0 0 28px;\n    margin: 0 0 4px !important;\n    padding: 0;\n}\n\n.pv-panel:has(.pv-login) .pv-back {\n    display: none;\n}\n\n.pv-panel:has(.pv-login) .pv-ctrls {\n    grid-column: 2;\n}\n\n.pv-panel:has(.pv-login) .pv-ctrls img {\n    filter: none;\n}\n\n.pv-panel:has(.pv-login) .pv-title-wrap {\n    grid-column: 1;\n    text-align: left;\n}\n\n.pv-panel:has(.pv-login) .pv-title {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 26px;\n    letter-spacing: -0.8px;\n}\n\n.pv-panel.pv-min:has(.pv-login) .pv-header {\n    grid-template-columns: 1fr auto 1fr;\n    margin-bottom: 0 !important;\n}\n\n.pv-panel.pv-min:has(.pv-login) .pv-title-wrap {\n    grid-column: 2;\n    text-align: center;\n}\n\n.pv-panel.pv-min:has(.pv-login) .pv-ctrls {\n    grid-column: 3;\n}\n\n.pv-login {\n    flex: 1;\n    gap: 4px;\n    overflow-y: auto;\n}\n\n.pv-login-main {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n}\n\n.pv-login-method {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n}\n\n.pv-login-heading {\n    padding: 20px 0 12px;\n}\n\n.pv-login-heading h2 {\n    font-size: 28px;\n    line-height: 32px;\n    font-weight: 600;\n    letter-spacing: -0.8px;\n    white-space: pre-line;\n}\n\n.pv-login-heading p {\n    margin-top: 8px;\n    min-height: 36px;\n    font-size: 12px;\n    line-height: 18px;\n    color: var(--c-text-dim);\n    white-space: pre-line;\n}\n\n.pv-login-heading .pv-login-eyebrow {\n    margin: 0 0 8px;\n    color: var(--c-primary);\n    font-size: 10px;\n    line-height: 14px;\n    font-weight: 600;\n    letter-spacing: 1.1px;\n}\n\n.pv-login-paid {\n    gap: 12px;\n}\n\n.pv-login-paid h2 {\n    font-size: 28px;\n    line-height: 32px;\n    letter-spacing: -0.8px;\n}\n\n.pv-login-paid .pv-login-heading {\n    margin-bottom: 0 !important;\n}\n\n.pv-login-allowance {\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    min-height: 66px;\n    padding: 0 16px;\n    margin-bottom: 8px !important;\n    background: var(--c-primary-f);\n    border-radius: 10px;\n}\n\n.pv-login-allowance strong {\n    font-size: 34px;\n    line-height: 46px;\n    font-weight: 600;\n    color: var(--c-primary);\n}\n\n.pv-login-allowance p {\n    font-size: 13px;\n    line-height: 18px;\n    font-weight: 500;\n}\n\n.pv-login-allowance small {\n    display: block;\n    margin-top: 3px;\n    font-size: 11px;\n    line-height: 15px;\n    color: var(--c-text-dim);\n}\n\n.pv-panel .pv-login-secondary {\n    width: 100%;\n    min-height: 40px;\n    border: 1px solid #d6e0f2;\n    border-radius: 8px;\n    background: var(--c-bg);\n    color: var(--c-text);\n    font-size: 13px;\n    font-weight: 600;\n}\n\n.pv-login-secondary:hover {\n    background: var(--c-primary-f);\n}\n\n.pv-login .pv-consent {\n    max-width: 270px;\n    margin: 8px auto 0;\n    font-size: 11px;\n    line-height: 15px;\n    text-align: center;\n    color: var(--c-text-dim);\n}\n\n.pv-login-hint {\n    margin-top: -6px !important;\n    font-size: 11px;\n    line-height: 15px;\n    color: var(--c-text-dim);\n}\n\n.pv-login-field {\n    position: relative;\n}\n\n.pv-login-form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.pv-login-method > a {\n    color: var(--c-primary);\n    font-size: 11px;\n    line-height: 16px;\n}\n\n.pv-login-field img {\n    position: absolute;\n    left: 13px;\n    top: 15px;\n    width: 15px;\n    height: 15px;\n}\n\n.pv-panel .pv-login-field input {\n    height: 46px;\n    padding-left: 38px;\n    border-radius: 8px;\n    font-size: 13px;\n}\n\n.pv-panel .pv-login-field input[aria-invalid=\"true\"] {\n    border-color: #e1243e;\n}\n\n.pv-login .pv-screen-footer {\n    flex: 0 0 18px;\n    padding: 0;\n    border-top: 0;\n}\n\n.pv-login .pv-screen-footer a {\n    color: var(--c-text-dim);\n    font-size: 11px;\n    line-height: 15px;\n}\n\n.pv-login .pv-key-err-on {\n    padding: 0;\n    background: transparent;\n    color: #c5304b;\n}\n\n.pv-key-label {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    font-size: 12px;\n    line-height: 18px;\n}\n\n.pv-panel .pv-key-input {\n    width: 100%;\n    height: 40px;\n    font-size: 12px;\n}\n\n.pv-key-input::placeholder {\n    color: var(--c-text-dim);\n    opacity: 1;\n}\n\n.pv-panel .pv-key-input[aria-invalid=\"true\"] {\n    border-color: #ff364f;\n}\n\n.pv-panel .pv-key-submit {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    height: 40px;\n    padding: 0 12px;\n    border-radius: 8px;\n    color: white;\n    background: #155bff;\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 18px;\n    cursor: pointer;\n}\n\n.pv-key-submit:hover {\n    filter: brightness(0.96);\n}\n\n.pv-panel .pv-login .pv-key-submit {\n    height: 46px;\n    gap: 9px;\n    border-radius: 8px;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.pv-login .pv-key-submit img {\n    width: 19.517px;\n    height: 15.067px;\n    object-fit: contain;\n}\n\n.pv-key-err {\n    display: none;\n    color: var(--c-error);\n    font-size: 11px;\n    line-height: 16px;\n}\n\n.pv-key-err-on {\n    display: block;\n}\n\n.pv-content > .pv-key-err-on {\n    flex-shrink: 0;\n    padding: 8px 0 0;\n}\n\n.pv-redeem {\n    position: absolute;\n    inset: 0;\n    z-index: 2;\n    overflow-y: auto;\n    background: color-mix(in srgb, var(--c-bg) 94%, transparent);\n    backdrop-filter: blur(2px);\n    border-radius: inherit;\n}\n\n.pv-has-overlay .pv-ctrls {\n    position: relative;\n    z-index: 3;\n}\n\n.pv-overlay-brand {\n    position: absolute;\n    top: 27px;\n    left: 25px;\n    right: 25px;\n    text-align: center;\n    z-index: 1;\n}\n\n.pv-key-hero {\n    position: absolute;\n    top: 52px;\n    left: calc(50% - 115px);\n    width: 230px;\n    height: 200px;\n    object-fit: contain;\n}\n\n.pv-limit .pv-key-hero {\n    top: 52px;\n    left: calc(50% - 138px);\n    width: 276px;\n}\n\n.pv-redeem-title {\n    position: absolute;\n    top: 268px;\n    left: 25px;\n    right: 25px;\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 30px;\n    letter-spacing: -0.5px;\n    white-space: pre-line;\n}\n\n.pv-redeem-description {\n    position: absolute;\n    top: 340px;\n    left: 25px;\n    right: 25px;\n    font-size: 12px;\n    line-height: 18px;\n    color: var(--c-text-dim);\n}\n\n.pv-redeem-form {\n    position: absolute;\n    top: 392px;\n    left: 25px;\n    right: 25px;\n    display: flex;\n    gap: 8px;\n}\n\n.pv-redeem-form .pv-key-input {\n    flex: 1;\n    width: 0;\n    font-size: 11px;\n}\n\n.pv-redeem-form .pv-key-submit {\n    width: 92px;\n}\n\n.pv-redeem > .pv-key-err {\n    position: absolute;\n    top: 446px;\n    left: 25px;\n    right: 25px;\n}\n\n.pv-panel .pv-redeem-back {\n    position: absolute;\n    top: 470px;\n    left: 25px;\n    height: 44px;\n}\n\n.pv-plans-link {\n    position: absolute;\n    top: 392px;\n    left: 25px;\n    right: 25px;\n}\n\n.pv-limit .pv-plans-link {\n    top: 372px;\n}\n\n.pv-limit .pv-redeem-form {\n    top: 424px;\n}\n\n.pv-limit > .pv-key-err {\n    top: 479px;\n}\n\n.pv-limit .pv-redeem-back {\n    top: 490px;\n}\n\n.pv-status {\n    flex: 1;\n    justify-content: flex-start;\n    gap: 16px;\n    overflow-y: auto;\n}\n\n.pv-status-art {\n    align-self: center;\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n}\n\n.pv-status h2 {\n    font-size: 28px;\n    line-height: 30px;\n    font-weight: 700;\n    letter-spacing: -0.5px;\n}\n\n.pv-status p {\n    color: var(--c-text-dim);\n    font-size: 12px;\n    line-height: 18px;\n}\n\n.pv-empty {\n    padding: 24px 0;\n    text-align: center;\n    color: var(--c-text-dim);\n    font-size: 13px;\n}\n\n.pv-chat-view .pv-items,\n.pv-chat {\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n    flex: 1;\n    overflow: hidden;\n}\n\n.pv-chat-view .pv-screen-footer {\n    display: none;\n}\n\n.pv-panel[data-theme=\"blue\"] .pv-chat {\n    --c-primary: #155bff;\n}\n\n.pv-msgs {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n    padding: 4px 2px 12px;\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    scrollbar-width: none;\n    user-select: text;\n}\n\n.pv-msgs::-webkit-scrollbar {\n    display: none;\n}\n\n.pv-msg {\n    position: relative;\n    flex-shrink: 0;\n    width: fit-content;\n    max-width: 86%;\n    border-radius: 16px 16px 16px 5px;\n    padding: 10px 12px;\n    background: var(--c-card);\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n    font-size: 13px;\n    line-height: 19px;\n}\n\n.pv-msg-user {\n    align-self: flex-end;\n    border-radius: 16px 16px 5px 16px;\n    background: var(--c-primary);\n    color: white;\n}\n\n.pv-msg-greet {\n    color: var(--c-text-dim);\n}\n\n.pv-copy {\n    display: block;\n    width: 16px;\n    height: 16px;\n    margin-top: 8px !important;\n    color: var(--c-text-dim) !important;\n}\n\n.pv-copy svg {\n    width: 16px;\n    height: 16px;\n}\n\n.pv-msg-load {\n    display: flex;\n    gap: 4px;\n}\n\n.pv-msg-load span {\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: var(--c-primary);\n    animation: pv-pulse 800ms ease-in-out infinite alternate;\n}\n\n.pv-panel .pv-chat-input {\n    flex: 1;\n    width: 0;\n    min-height: 40px;\n    max-height: 100px;\n    resize: none;\n    border-radius: 18px;\n}\n\n.pv-chat-input-row {\n    display: flex;\n    align-items: flex-end;\n    gap: 8px;\n    padding-top: 10px;\n    border-top: 1px solid var(--c-rule);\n}\n\n.pv-panel .pv-chat-send {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: var(--c-primary);\n}\n\n.pv-chat-send img {\n    width: 20px;\n    height: 20px;\n}\n\n.pv-panel .pv-chat-send:disabled {\n    cursor: default;\n    opacity: 1;\n}\n\n@keyframes pv-enter {\n    from { opacity: 0; transform: translateY(24px) scale(0.98); }\n    to { opacity: 1; transform: none; }\n}\n\n@keyframes pv-count {\n    from { opacity: 0; transform: translateY(10px); }\n    to { opacity: 1; transform: none; }\n}\n\n@keyframes pv-pulse {\n    from { opacity: 0.3; }\n    to { opacity: 1; }\n}\n\n@media (max-width: 350px) {\n    .pv-panel {\n        padding-left: 16px;\n        padding-right: 16px;\n    }\n    .pv-header {\n        margin-left: -16px !important;\n        margin-right: -16px !important;\n        padding-left: 16px;\n        padding-right: 16px;\n    }\n    .pv-item-head,\n    .pv-tool-link {\n        gap: 6px;\n    }\n    .pv-item-title,\n    .pv-tool-copy {\n        font-size: 13px;\n    }\n    .pv-item-ctrl {\n        gap: 6px;\n    }\n}\n\n@media (max-height: 450px) {\n    .pv-home {\n        overflow-y: auto;\n    }\n    .pv-tools {\n        flex-shrink: 0;\n        min-height: 194px;\n    }\n    .pv-login {\n        flex-basis: auto;\n    }\n}\n\n@media (prefers-reduced-motion: reduce) {\n    .pv-panel,\n    .pv-panel *,\n    .pv-panel *::before {\n        animation: none !important;\n        transition: none !important;\n        scroll-behavior: auto !important;\n    }\n}\n\n.pv-delay-icon {\n    width: 26px;\n    height: 26px;\n    object-fit: contain;\n}\n\n.pv-key-icon {\n    display: flex;\n    align-items: center;\n    width: 18px;\n    height: 18px;\n}\n\n.pv-key-icon img {\n    transform: scale(0.75);\n    transform-origin: left center;\n}\n\n.pv-checking-label {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding: 14px 8px;\n    background: var(--c-primary-f);\n    border-radius: 8px;\n    font-size: 12px;\n    color: var(--c-primary);\n}\n\n.pv-checking-label img {\n    animation: pv-spin 1s linear infinite;\n}\n\n.pv-status .pv-checking-footer {\n    margin-top: auto;\n    text-align: center;\n    font-size: 11px;\n}\n\n@keyframes pv-spin {\n    to { transform: rotate(360deg); }\n}\n", WxV1WW8 = "data:font/woff2;base64,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", JdDoXRc = null, pO3xEuC = null, BmkBnEs = null, oUaf8p = 220, A3Mpjw9 = "cubic-bezier(0.16, 1, 0.3, 1)", QVwWa51 = null);
  function dTRMYQ(ldXU2Ow, vDlnfHc, yctckmj, l06wN2S = !0) {
    let cKRkdn = mxtpIbz.minimized !== yctckmj;
    b07TQe(mxtpIbz.minimized = yctckmj, l06wN2S && cKRkdn ? (Q16EmFG = [ldXU2Ow, yctckmj], new nUVzU8R("6AXWdf", "0keMHmMUNW", "H87mYBS5hN").YIAtu3f8cq) : ldXU2Ow.classList.toggle("pv-min", yctckmj), vDlnfHc.replaceChildren(Pz5RdVt("img", {
      ["src"]: yctckmj ? t3QQhTw : mW7GYp0,
      ["alt"]: ""
    })), vDlnfHc.title = yctckmj ? "Expand" : "Minimize", tkD5ZbK());
  }
  function XGHqTb() {
    if (!JdDoXRc) {
      SsJQSyj("pv-styles", "@font-face { font-family: \"Ascenly Outfit\"; src: url(\"" + WxV1WW8 + "\") format(\"woff2\"); font-weight: 100 900; font-display: swap; }\n" + XPqnA2);
      JdDoXRc = new nUVzU8R("jEYKaH", "xskrcFuhcx", "H87mYBS5hN").YIAtu3f8cq;
      document.body.append(JdDoXRc);
      gxiwcC5(mxtpIbz.theme, mxtpIbz.darkMode);
      DsnoBw(JdDoXRc);
      pO3xEuC = () => {
        return JdDoXRc && DsnoBw(JdDoXRc);
      };
      window.addEventListener("resize", pO3xEuC);
    }
  }
  function uA60ZU9() {
    if (JdDoXRc) {
      if (pO3xEuC) {
        window.removeEventListener("resize", pO3xEuC);
        pO3xEuC = null;
      }
      if (BmkBnEs) {
        clearInterval(BmkBnEs);
        BmkBnEs = null;
      }
      JdDoXRc.remove();
      JdDoXRc = null;
    }
  }
  function sCg177() {
    if (JdDoXRc) {
      uA60ZU9();
    } else {
      XGHqTb();
    }
  }
  b07TQe(gVUXIr(() => {
    b07TQe(kFAxDy() && (nUVzU8R("2DXb84", "xskrcFuhcx", "H87mYBS5hN").YIAtu3f8cq, XGHqTb()), nUVzU8R("azQhaB", "xskrcFuhcx"));
  }), nUVzU8R("k98ab5", "xskrcFuhcx"), vspHDEw = window.self === window.top, XITjaR = vspHDEw && location.hostname === "student.edgenuity.com" ? GOmHu1N() : Promise.resolve(), whkOJP6 = ldXU2Ow => {
    if (document.readyState !== "loading") {
      return ldXU2Ow();
    }
    document.addEventListener("DOMContentLoaded", ldXU2Ow, {
      ["once"]: !0
    });
  }, whkOJP6(async () => {
    if (vspHDEw) {
      if (location.hostname === "auth.edgenuity.com") {
        new nUVzU8R("kQxedz", "xskrcFuhcx", "H87mYBS5hN").YIAtu3f8cq;
        return;
      }
      nUVzU8R("TFcigJ", "xskrcFuhcx");
      await XITjaR;
      if (mxtpIbz.key || mxtpIbz.session) {
        let ldXU2Ow = await HakLwrD().catch(() => {
          return null;
        });
        if (ldXU2Ow?.ok) {
          let Q16EmFG = await ldXU2Ow.json().catch(() => {
            return null;
          });
          b07TQe(window.__ascenly_expiringIn = Q16EmFG?.expiringIn, mxtpIbz.key || (await x6vcXX().catch(() => {
            return null;
          })), RybUTsd());
        }
      }
      XGHqTb();
    }
  }));
    if (location.hostname.includes("media.edgenuity.com")) {
    let lastSolvedFstack = "";
    setInterval(async () => {
      const latest = GM_getValue("panel_state", mxtpIbz);
      if (!latest?.modules?.autoAssignment && !latest?.modules?.autoAdvanceCore && !latest?.modules?.autoAnswerEX) return;
      Object.assign(mxtpIbz, latest);

      const doneBtn = document.querySelector("[fdone]:not(.done-complete)");
      const container = doneBtn?.closest("[fstack], form, .left-column, body");
      const selects = Array.from(container?.querySelectorAll("select") || []);
      const radios = Array.from(container?.querySelectorAll("input[type='radio'], input[type='checkbox']") || []);
      const texts = Array.from(container?.querySelectorAll("input[type='text']") || []);

      if (!doneBtn || (!selects.length && !radios.length && !texts.length)) return;

      const sig = (container.innerText || "").trim() + "|" + selects.map(s => s.id).join(",") + "|" + radios.map(r => r.id).join(",");
      if (sig === lastSolvedFstack) return;
      lastSolvedFstack = sig;

      const blanks = selects.map((sel, idx) => ({
        inputId: sel.id || `sel_${idx}`,
        type: "select",
        options: Array.from(sel.options)
          .filter(o => o.value)
          .map(o => ({ value: o.value, text: o.textContent.replace(/\s+/g, " ").trim() }))
      }));

      const choices = radios.map((inp, idx) => ({
        inputId: inp.id || `rad_${idx}`,
        type: inp.type,
        value: inp.value,
        label: (inp.closest("label, tr, li, div")?.innerText || "").replace(/\s+/g, " ").trim()
      }));

      const textInputs = texts.map((inp, idx) => ({
        inputId: inp.id || `txt_${idx}`,
        type: "text",
        context: (inp.closest("p, li, tr, div")?.innerText || "").replace(/\s+/g, " ").trim()
      }));

      const prompt = [
        "Solve this interactive question and return ONLY valid JSON matching this schema:",
        '{"answers":[{"inputId":"exact inputId","value":"exact option value or text answer"}]}',
        "Question text:\n" + container.innerText.replace(/\s+/g, " ").trim(),
        blanks.length ? "Dropdowns:\n" + JSON.stringify(blanks) : "",
        choices.length ? "Radio/Checkbox options:\n" + JSON.stringify(choices) : "",
        textInputs.length ? "Text inputs:\n" + JSON.stringify(textInputs) : ""
      ].filter(Boolean).join("\n\n");

      const res = await OA5hTl("POST", "/gemini", { prompt });
      if (!res?.ok) { lastSolvedFstack = ""; return; }
      const data = await res.json();
      const answers = Array.isArray(data?.answers) ? data.answers : [];

      for (const ans of answers) {
        const el = document.getElementById(ans.inputId);
        if (!el) continue;
        if (el.tagName === "SELECT") {
          el.value = String(ans.value);
          el.dispatchEvent(new Event("change", { bubbles: true }));
        } else if (el.type === "radio" || el.type === "checkbox") {
          el.click();
          el.dispatchEvent(new Event("change", { bubbles: true }));
        } else {
          el.value = String(ans.value ?? "");
          el.dispatchEvent(new Event("input", { bubbles: true }));
          el.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }

      await new Promise(r => setTimeout(r, 400));
      doneBtn.click();
    }, 1500);
  }
})();