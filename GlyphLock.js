// GlyphLock.js — JavaScript port of GlyphLock.cpp
// Marc Stearns · github.com/CryptixByte/glyphLock-CPP

const GlyphLock = (function () {

  const DEFAULT_KEYS = [
    "0X01", "0X02", "0X03", "0X04", "0X05", "0X06", "0X07", "0X08", "0X09", "0X10",
    "0X11", "0X12", "0X13", "0X14", "0X15", "0X16", "0X17", "0X18", "0X19", "0X20",
    "0X21", "0X22", "0X23", "0X24", "0X25", "0X26", "0X27", "0X28", "0X29", "0X30",
    "0X31", "0X32", "0X33", "0X34", "0X35", "0X36", "0X37", "0X38", "0X39", "0X40",
    "0X41", "0X42", "0X43", "0X44", "0X45", "0X46", "0X47", "0X48", "0X49", "0X50",
    "0X51", "0X52", "0X53", "0X54", "0X55", "0X56", "0X57", "0X58", "0X59", "0X60",
    "0X61", "0X62", "0X63", "0X64", "0X65", "0X66", "0X67", "0X68", "0X69", "0X70",
    "0X71", "0X72", "0X73", "0X74", "0X75", "0X76", "0X77", "0X78", "0X79", "0X80",
    "0X81", "0X82", "0X83", "0X84", "0X85", "0X86", "0X87", "0X88", "0X89", "0X90",
    "0X91", "0X92", "0X93", "0X94", "0X95"
  ];

  const ALPHA_KEYS = [
    'ALPHA','BETA','GAMMA','DELTA','EPSILON','ZETA','ETA','THETA',
    'IOTA','KAPPA','LAMBDA','MU','NU','XI','OMICRON','PI','RHO',
    'SIGMA','TAU','UPSILON','PHI','CHI','PSI','OMEGA','ALEPH','BETH',
    'GIMEL','DALET','HE','VAV','ZAYIN','CHET','TET','YOD','KAF',
    'LAMED','MEM','NUN','SAMECH','AYIN','PEH','TSADI','QOF','RESH',
    'SHIN','TAV','AIN','FEIN','TSEIN','KEIN','REIN','MEIN','NEIN',
    'SAIN','VAIN','WAIN','XAIN','YAIN','ZAIN','AAIN','BAIN','CAIN',
    'DAIN','EAIN','FAIN','GAIN','HAIN','IAIN','JAIN','KAIN','LAIN',
    'MAIN','NAIN','OAIN','PAIN','QAIN','RAIN','SAIN2','TAIN','UAIN',
    'VAIN2','WAIN2','XAIN2','YAIN2','ZAIN2','AA01','BB01','CC01',
    'DD01','EE01','FF01','GG01','HH01','II01','JJ01','KK01'
  ];

  const HEX_KEYS = (() => {
    const k = [];
    for (let i = 0x20; i <= 0x7E; i++) k.push('\\x' + i.toString(16).toUpperCase());
    return k;
  })();

  const KEY_PROFILES = {
    default: DEFAULT_KEYS,
    alpha:   ALPHA_KEYS,
    hex:     HEX_KEYS
  };


  function glyphScramble(text, keys) {
    let glyphScrambled = "";
    for (const letter of text) {
      const code = letter.charCodeAt(0);
      if (code >= 32 && code <= 126) {
        glyphScrambled += keys[code - 32];
      } else {
        glyphScrambled += letter;
      }
    }
    return glyphScrambled;
  }

  return { glyphScramble, KEY_PROFILES };

})();