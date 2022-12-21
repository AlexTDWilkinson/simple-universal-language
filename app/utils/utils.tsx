import { Howl, Howler } from "howler";

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
      // a	335	378
      // am	922	413
      // ay	1524	377
      // ak	2078	352
      // at	2589	273
      // as	3017	376
      // ab	3555	347
      // ar	4065	281
      // e	6381	296
      // em	6867	416
      // ey	7509	328
      // ek	8059	323
      // et	8626	314
      // es	9164	403
      // eb	9795	334
      // er	10362	285
      // i	12933	411
      // im	13647	449
      // iy	14419	403
      // ik	15113	320
      // it	15722	310
      // is	16293	470
      // ib	16974	387
      // ir	17616	352
      // o	20317	415
      // om	20982	432
      // oy	21600	385
      // ok	22196	308
      // ot	22720	292
      // os	23209	321
      // ob	23721	329
      // or	24262	255
      // u	26749	335
      // um	27381	418
      // uy	28024	333
      // uk	28620	294
      // ut	29164	256
      // us	29604	311
      // ub	30113	308
      // ur	30706	250
      // y	33476	255
      // ya	34087	370
      // ye	34709	365
      // yi	35356	409
      // yo	36003	343
      // yu	36772	254
      // k	39524	103
      // ka	39860	326
      // ke	40440	366
      // ki	41040	393
      // ko	41650	313
      // ku	42190	273
      // t	43683	32
      // ta	43923	336
      // te	44544	302
      // ti	45122	327
      // to	45722	342
      // tu	46297	346
      // s	48010	211
      // sa	48423	431
      // se	49157	379
      // si	49814	425
      // so	50522	412
      // su	51213	345
      // b	52667	209
      // ba	53139	348
      // be	53703	267
      // bi	54172	333
      // bo	54698	276
      // bu	55186	269
      // r	56809	304
      // ra	57348	327
      // re	57905	324
      // ri	58472	390
      // ro	59079	304
      // ru	59630	301
      // m	60356	402
      // ma	61046	398
      // me	61679	384
      // mi	62282	433
      // mo	62943	353
      // mu	63518	347

      a: [335, 378],
      am: [922, 413],
      ay: [1524, 377],
      ak: [2078, 352],
      at: [2589, 273],
      as: [3017, 376],
      ab: [3555, 347],
      ar: [4065, 281],
      e: [6381, 296],
      em: [6867, 416],
      ey: [7509, 328],
      ek: [8059, 323],
      et: [8626, 314],
      es: [9164, 403],
      eb: [9795, 334],
      er: [10362, 285],
      i: [12933, 411],
      im: [13647, 449],
      iy: [14419, 403],
      ik: [15113, 320],
      it: [15722, 310],
      is: [16293, 470],
      ib: [16974, 387],
      ir: [17616, 352],
      o: [20317, 415],
      om: [20982, 432],
      oy: [21600, 385],
      ok: [22196, 308],
      ot: [22720, 292],
      os: [23209, 321],
      ob: [23721, 329],
      or: [24262, 255],
      u: [26749, 335],
      um: [27381, 418],
      uy: [28024, 333],
      uk: [28620, 294],
      ut: [29164, 256],
      us: [29604, 311],
      ub: [30113, 308],
      ur: [30706, 250],
      y: [33476, 255],
      ya: [34087, 370],
      ye: [34709, 365],
      yi: [35356, 409],
      yo: [36003, 343],
      yu: [36772, 254],
      k: [39524, 103],
      ka: [39860, 326],
      ke: [40440, 366],
      ki: [41040, 393],
      ko: [41650, 313],
      ku: [42190, 273],
      t: [43683, 32],
      ta: [43923, 336],
      te: [44544, 302],
      ti: [45122, 327],
      to: [45722, 342],
      tu: [46297, 346],
      s: [48010, 211],
      sa: [48423, 431],
      se: [49157, 379],
      si: [49814, 425],
      so: [50522, 412],
      su: [51213, 345],
      b: [52667, 209],
      ba: [53139, 348],
      be: [53703, 267],
      bi: [54172, 333],
      bo: [54698, 276],
      bu: [55186, 269],
      r: [56809, 304],
      ra: [57348, 327],
      re: [57905, 324],
      ri: [58472, 390],
      ro: [59079, 304],
      ru: [59630, 301],
      m: [60356, 402],
      ma: [61046, 398],
      me: [61679, 384],
      mi: [62282, 433],
      mo: [62943, 353],
      mu: [63518, 347],
      space: [24625, 300],
    },
    onend: () =>
      speakInSul({
        sentence: remainingSentence,
        rate,
        volume,
      }),
  });

  let syllable = sentence?.[1] ? sentence[0] + sentence[1] : sentence[0];

  remainingSentence = sentence?.slice(syllable?.length) || "";

  if (syllable[0] === " ") {
    sound.play("space");
    remainingSentence = sentence?.slice(1) || "";
  } else if (
    syllable[0] === "-" &&
    syllable !== "-a" &&
    syllable !== "-e" &&
    syllable !== "-i" &&
    syllable !== "-o" &&
    syllable !== "-u"
  ) {
    sound.play("r");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "a ") {
    sound.play("a");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "a") {
    sound.play("a");
  } else if (syllable === "am") {
    sound.play("am");
  } else if (syllable === "ay") {
    sound.play("ay");
  } else if (syllable === "ak") {
    sound.play("ak");
  } else if (syllable === "at") {
    sound.play("at");
  } else if (syllable === "as") {
    sound.play("as");
  } else if (syllable === "ab") {
    sound.play("ab");
  } else if (syllable === "a-") {
    sound.play("ar");
  } else if (syllable === "e ") {
    sound.play("e");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "e") {
    sound.play("e");
  } else if (syllable === "em") {
    sound.play("em");
  } else if (syllable === "ey") {
    sound.play("ey");
  } else if (syllable === "ek") {
    sound.play("ek");
  } else if (syllable === "et") {
    sound.play("et");
  } else if (syllable === "es") {
    sound.play("es");
  } else if (syllable === "eb") {
    sound.play("eb");
  } else if (syllable === "e-") {
    sound.play("er");
  } else if (syllable === "i ") {
    sound.play("i");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "i") {
    sound.play("i");
  } else if (syllable === "im") {
    sound.play("im");
  } else if (syllable === "iy") {
    sound.play("iy");
  } else if (syllable === "ik") {
    sound.play("ik");
  } else if (syllable === "it") {
    sound.play("it");
  } else if (syllable === "is") {
    sound.play("is");
  } else if (syllable === "ib") {
    sound.play("ib");
  } else if (syllable === "i-") {
    sound.play("ir");
  } else if (syllable === "o ") {
    sound.play("o");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "o") {
    sound.play("o");
  } else if (syllable === "om") {
    sound.play("om");
  } else if (syllable === "oy") {
    sound.play("oy");
  } else if (syllable === "ok") {
    sound.play("ok");
  } else if (syllable === "ot") {
    sound.play("ot");
  } else if (syllable === "os") {
    sound.play("os");
  } else if (syllable === "ob") {
    sound.play("ob");
  } else if (syllable === "o-") {
    sound.play("or");
  } else if (syllable === "u ") {
    sound.play("u");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "u") {
    sound.play("u");
  } else if (syllable === "um") {
    sound.play("um");
  } else if (syllable === "uy") {
    sound.play("uy");
  } else if (syllable === "uk") {
    sound.play("uk");
  } else if (syllable === "ut") {
    sound.play("ut");
  } else if (syllable === "us") {
    sound.play("us");
  } else if (syllable === "ub") {
    sound.play("ub");
  } else if (syllable === "u-") {
    sound.play("ur");
  } else if (syllable === "y ") {
    sound.play("y");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "y") {
    sound.play("y");
  } else if (syllable === "ya") {
    sound.play("ya");
  } else if (syllable === "ye") {
    sound.play("ye");
  } else if (syllable === "yi") {
    sound.play("yi");
  } else if (syllable === "yo") {
    sound.play("yo");
  } else if (syllable === "yu") {
    sound.play("yu");
  } else if (syllable === "k ") {
    sound.play("k");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "k") {
    sound.play("k");
  } else if (syllable === "ka") {
    sound.play("ka");
  } else if (syllable === "ke") {
    sound.play("ke");
  } else if (syllable === "ki") {
    sound.play("ki");
  } else if (syllable === "ko") {
    sound.play("ko");
  } else if (syllable === "ku") {
    sound.play("ku");
  } else if (syllable === "t ") {
    sound.play("t");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "t") {
    sound.play("t");
  } else if (syllable === "ta") {
    sound.play("ta");
  } else if (syllable === "te") {
    sound.play("te");
  } else if (syllable === "ti") {
    sound.play("ti");
  } else if (syllable === "to") {
    sound.play("to");
  } else if (syllable === "tu") {
    sound.play("tu");
  } else if (syllable === "s ") {
    sound.play("s");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "s") {
    sound.play("s");
  } else if (syllable === "sa") {
    sound.play("sa");
  } else if (syllable === "se") {
    sound.play("se");
  } else if (syllable === "si") {
    sound.play("si");
  } else if (syllable === "so") {
    sound.play("so");
  } else if (syllable === "su") {
    sound.play("su");
  } else if (syllable === "m ") {
    sound.play("m");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "m") {
    sound.play("m");
  } else if (syllable === "ma") {
    sound.play("ma");
  } else if (syllable === "me") {
    sound.play("me");
  } else if (syllable === "mi") {
    sound.play("mi");
  } else if (syllable === "mo") {
    sound.play("mo");
  } else if (syllable === "mu") {
    sound.play("mu");
  } else if (syllable === "b ") {
    sound.play("b");
    remainingSentence = sentence?.slice(1) || "";
  } else if (syllable === "b") {
    sound.play("b");
  } else if (syllable === "ba") {
    sound.play("ba");
  } else if (syllable === "be") {
    sound.play("be");
  } else if (syllable === "bi") {
    sound.play("bi");
  } else if (syllable === "bo") {
    sound.play("bo");
  } else if (syllable === "bu") {
    sound.play("bu");
  } else if (syllable === "-a") {
    sound.play("ra");
  } else if (syllable === "-e") {
    sound.play("re");
  } else if (syllable === "-i") {
    sound.play("ri");
  } else if (syllable === "-o") {
    sound.play("ro");
  } else if (syllable === "-u") {
    sound.play("ru");
  }

  console.log("Syllable", syllable);
  console.log("remainingSentence", remainingSentence);
};

export { speakInSul };

// all phonetics

/*

a
am
ay
ak
at
as
ab
ar

e
em
ey
ek
et
es
eb
er

i
im
iy
ik
it
is
ib
ir

o
om
oy
ok
ot
os
ob
or

u
um
uy
uk
ut
us
ub
ur

m
ma
me
mi
mo
mu

y
ya
ye
yi
yo
yu

k
ka
ke
ki
ko
ku

t
ta
te
ti
to
tu

s
sa
se
si
so
su

b // never pronounced by self anyway?
ba
be
bi
bo
bu

r // never pronounced by self anyway?
ra
re
ri
ro
ru

*/
