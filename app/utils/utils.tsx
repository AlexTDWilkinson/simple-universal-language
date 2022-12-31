import { Howl, Howler } from "howler";

const vowels = ["a", "e", "i", "o", "u"];

const consonants = ["t", "f", "s", "k", "j", "b", "r", "m"];

const brackets = ["(", ")", ">", "<"];

const speakInSul = ({
  sentence,
  rate = 1,
  volume = 1,
}: {
  sentence: string;
  rate?: number;
  volume?: number;
}) => {
  if (!sentence) {
    return;
  }

  let remainingSentence = "";

  Howler.volume(volume);

  const sound = new Howl({
    src: ["/sounds/sul_sounds.mp3"],
    rate: rate,
    volume: volume,
    sprite: {
      a: [0 * 1000, 0.374 * 1000],
      at: [0.53 * 1000, 0.328 * 1000],
      af: [1 * 1000, 0.411 * 1000],
      as: [1.605 * 1000, 0.411 * 1000],
      ak: [2.206 * 1000, 0.32 * 1000],
      aj: [2.569 * 1000, 0.349 * 1000],
      ab: [3.069 * 1000, 0.33 * 1000],
      ar: [3.485 * 1000, 0.293 * 1000],
      am: [3.935 * 1000, 0.279 * 1000],
      e: [4.562 * 1000, 0.239 * 1000],
      et: [4.927 * 1000, 0.18 * 1000],
      ef: [5.203 * 1000, 0.196 * 1000],
      es: [5.506 * 1000, 0.289 * 1000],
      ek: [5.83 * 1000, 0.317 * 1000],
      ej: [6.187 * 1000, 0.296 * 1000],
      eb: [6.604 * 1000, 0.227 * 1000],
      er: [6.885 * 1000, 0.262 * 1000],
      em: [7.217 * 1000, 0.333 * 1000],
      i: [8.139 * 1000, 0.217 * 1000],
      it: [8.508 * 1000, 0.256 * 1000],
      if: [8.844 * 1000, 0.328 * 1000],
      is: [9.226 * 1000, 0.331 * 1000],
      ik: [9.687 * 1000, 0.25 * 1000],
      ij: [10.041 * 1000, 0.303 * 1000],
      ib: [10.413 * 1000, 0.247 * 1000],
      im: [10.844 * 1000, 0.223 * 1000],
      ir: [11.185 * 1000, 0.278 * 1000],
      o: [11.589 * 1000, 0.257 * 1000],
      ot: [11.987 * 1000, 0.277 * 1000],
      of: [12.424 * 1000, 0.294 * 1000],
      os: [12.881 * 1000, 0.332 * 1000],
      ok: [13.382 * 1000, 0.228 * 1000],
      oj: [13.738 * 1000, 0.253 * 1000],
      ob: [14.147 * 1000, 0.317 * 1000],
      or: [14.58 * 1000, 0.263 * 1000],
      om: [14.971 * 1000, 0.275 * 1000],
      u: [15.605 * 1000, 0.217 * 1000],
      ut: [15.965 * 1000, 0.271 * 1000],
      uf: [16.261 * 1000, 0.31 * 1000],
      us: [16.662 * 1000, 0.285 * 1000],
      uk: [17.082 * 1000, 0.267 * 1000],
      uj: [17.46 * 1000, 0.347 * 1000],
      ub: [17.92 * 1000, 0.312 * 1000],
      ur: [18.326 * 1000, 0.247 * 1000],
      um: [18.691 * 1000, 0.324 * 1000],
      t: [19.499 * 1000, 0.056 * 1000],
      ta: [19.622 * 1000, 0.262 * 1000],
      te: [19.912 * 1000, 0.24 * 1000],
      ti: [20.175 * 1000, 0.207 * 1000],
      to: [20.423 * 1000, 0.251 * 1000],
      tu: [20.708 * 1000, 0.232 * 1000],
      tr: [20.993 * 1000, 0.226 * 1000],
      tm: [21.255 * 1000, 0.232 * 1000],
      tb: [21.512 * 1000, 0.201 * 1000],
      f: [22.737 * 1000, 0.218 * 1000],
      fa: [23.031 * 1000, 0.326 * 1000],
      fe: [23.41 * 1000, 0.26 * 1000],
      fi: [23.706 * 1000, 0.273 * 1000],
      fo: [24.047 * 1000, 0.326 * 1000],
      fu: [24.402 * 1000, 0.34 * 1000],
      fr: [24.777 * 1000, 0.313 * 1000],
      fm: [25.122 * 1000, 0.355 * 1000],
      fb: [25.512 * 1000, 0.323 * 1000],
      s: [27.02 * 1000, 0.199 * 1000],
      sa: [27.316 * 1000, 0.271 * 1000],
      se: [27.659 * 1000, 0.274 * 1000],
      si: [28 * 1000, 0.284 * 1000],
      so: [28.324 * 1000, 0.301 * 1000],
      su: [28.69 * 1000, 0.314 * 1000],
      sr: [29.061 * 1000, 0.274 * 1000],
      sm: [29.382 * 1000, 0.296 * 1000],
      sb: [29.736 * 1000, 0.284 * 1000],
      k: [31.037 * 1000, 0.107 * 1000],
      ka: [31.201 * 1000, 0.274 * 1000],
      ke: [31.55 * 1000, 0.258 * 1000],
      ki: [31.897 * 1000, 0.211 * 1000],
      ko: [32.147 * 1000, 0.24 * 1000],
      ku: [32.418 * 1000, 0.268 * 1000],
      kr: [32.726 * 1000, 0.214 * 1000],
      km: [32.965 * 1000, 0.224 * 1000],
      kb: [33.216 * 1000, 0.279 * 1000],
      j: [34.305 * 1000, 0.21 * 1000],
      ja: [34.654 * 1000, 0.294 * 1000],
      je: [35.155 * 1000, 0.333 * 1000],
      ji: [35.596 * 1000, 0.368 * 1000],
      jo: [36.209 * 1000, 0.314 * 1000],
      ju: [36.679 * 1000, 0.307 * 1000],
      jr: [37.161 * 1000, 0.298 * 1000],
      jm: [37.589 * 1000, 0.322 * 1000],
      jb: [38.015 * 1000, 0.277 * 1000],
      b: [38.777 * 1000, 0.246 * 1000],
      ba: [39.041 * 1000, 0.318 * 1000],
      be: [39.379 * 1000, 0.264 * 1000],
      bi: [39.672 * 1000, 0.278 * 1000],
      bo: [39.97 * 1000, 0.244 * 1000],
      bu: [40.234 * 1000, 0.253 * 1000],
      br: [40.537 * 1000, 0.22 * 1000],
      bm: [40.801 * 1000, 0.258 * 1000],
      r: [42.159 * 1000, 0.297 * 1000],
      ra: [42.566 * 1000, 0.34 * 1000],
      re: [43.046 * 1000, 0.304 * 1000],
      ri: [43.404 * 1000, 0.312 * 1000],
      ro: [43.859 * 1000, 0.323 * 1000],
      ru: [44.305 * 1000, 0.379 * 1000],
      rm: [44.789 * 1000, 0.32 * 1000],
      rb: [45.203 * 1000, 0.203 * 1000],
      m: [46.164 * 1000, 0.253 * 1000],
      ma: [46.544 * 1000, 0.309 * 1000],
      me: [46.921 * 1000, 0.363 * 1000],
      mi: [47.392 * 1000, 0.302 * 1000],
      mo: [47.824 * 1000, 0.34 * 1000],
      mu: [48.248 * 1000, 0.363 * 1000],
      mr: [48.758 * 1000, 0.295 * 1000],
      mb: [49.225 * 1000, 0.3 * 1000],
      click: [49.776 * 1000, 0.301 * 1000],
      space: [25.835 * 1000, 0.3 * 1000],
      period: [25.835 * 1000, 0.9 * 1000],
    },
    onend: () =>
      speakInSul({
        sentence: remainingSentence,
        rate,
        volume,
      }),
  });

  let syllable = sentence?.[1] ? sentence?.[0] + sentence?.[1] : sentence?.[0];

  if (
    ![...consonants, ...vowels, ...brackets, " ", "."].includes(
      syllable?.[0]
    ) &&
    ![...consonants, ...vowels, ...brackets, " ", "."].includes(syllable?.[1])
  ) {
    throw new Error("Invalid character");
  }

  if (syllable?.[0] === ".") {
    sound.play("period");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable?.[0] === " ") {
    sound.play("space");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable?.[1] === " ") {
    sound.play(syllable?.[0]);
    remainingSentence = sentence?.slice(1) || "";
  } else if (brackets.includes(syllable?.[0])) {
    sound.play("click");
    remainingSentence = sentence?.slice(1) || "";
  } else if (brackets.includes(syllable?.[1])) {
    sound.play(syllable?.[0]);
    remainingSentence = sentence?.slice(1) || "";
  } else if (
    (vowels.includes(syllable?.[0]) && consonants.includes(syllable?.[1])) ||
    (consonants.includes(syllable?.[0]) && vowels.includes(syllable?.[1]))
  ) {
    sound.play(syllable?.[0] + syllable?.[1]);
    remainingSentence = sentence?.slice(2) || "";
  } else {
    sound.play(syllable?.[0]);
    remainingSentence = sentence?.slice(1) || "";
  }

  // console.log("Syllable", `"${syllable}"`);
  // console.log("remainingSentence", remainingSentence);
};

const getChainLetter = ({ word }: { word: string }) => {
  if (word?.indexOf("r") > -1) {
    return "r";
  }
  if (word?.indexOf("m") > -1) {
    return "m";
  }
  if (word?.indexOf("b") > -1) {
    return "b";
  }
};

export { speakInSul, getChainLetter };
