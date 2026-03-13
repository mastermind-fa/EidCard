import type { RelationType } from "./types";
import type { Language } from "./i18n";

/**
 * Multiple heartfelt Eid wish templates for each relationship type,
 * in both Bengali and English. {name} is replaced at runtime.
 */
export const MESSAGE_TEMPLATES: Record<Language, Record<RelationType, string[]>> = {
  bn: {
    "senior-vaiya": [
      `প্রিয় {name} ভাইয়া,

ঈদ মোবারক! 🌙

আপনার প্রতি অনেক শ্রদ্ধা ও ভালোবাসা রইলো। আপনি সবসময় আমাদের জন্য অনুপ্রেরণা। এই ঈদে আল্লাহ্ আপনাকে ও আপনার পরিবারকে অফুরন্ত সুখ, সমৃদ্ধি ও বরকত দান করুন।

আপনার দোয়া সবসময় চাই। ঈদের অনেক অনেক শুভেচ্ছা! 💛`,

      `প্রিয় {name} ভাইয়া,

ঈদ মোবারক! 🌙

আপনাকে ছোটবেলা থেকে দেখে এসেছি, আপনার আদর-স্নেহ আমাকে সবসময় সাহস দিয়েছে। এই ঈদে আল্লাহ্ আপনার জীবনে অসীম রহমত ও বরকত দান করুন।

আপনার জন্য অনেক দোয়া রইলো। ঈদ মোবারক! 💛`,

      `শ্রদ্ধেয় {name} ভাইয়া,

ঈদ মোবারক! 🌙

আপনার পরামর্শ, ভালোবাসা ও সাপোর্ট আমাকে সবসময় এগিয়ে যেতে সাহায্য করেছে। এই পবিত্র ঈদুল ফিতরে আল্লাহ্ আপনাকে ও আপনার পরিবারের সবাইকে সুস্থ, সুখী ও সমৃদ্ধ রাখুন।

গভীর শ্রদ্ধা ও ভালোবাসায়। ঈদ মোবারক! 💛`,
    ],

    "senior-apu": [
      `প্রিয় {name} আপু,

ঈদ মোবারক! 🌙

আপনার প্রতি অনেক শ্রদ্ধা ও ভালোবাসা রইলো। আপনি সবসময় আমাদের পাশে থেকেছেন, ভালোবাসা দিয়েছেন। এই ঈদে আল্লাহ্ আপনাকে ও আপনার পরিবারকে অফুরন্ত সুখ ও বরকত দান করুন।

আপনার দোয়া সবসময় চাই। ঈদের শুভেচ্ছা! 💛`,

      `প্রিয় {name} আপু,

ঈদ মোবারক! 🌙

আপনার স্নেহ আর মমতা আমার কাছে পৃথিবীর সেরা উপহার। আপনি সবসময় আমাদের আগলে রেখেছেন। এই ঈদে আল্লাহ্ আপনাকে সুস্থ রাখুন, সুখে রাখুন, আর আপনার মুখে সবসময় হাসি থাকুক।

অনেক অনেক ভালোবাসা। ঈদ মোবারক! 💛`,

      `শ্রদ্ধেয়া {name} আপু,

ঈদ মোবারক! 🌙

আপনাকে দেখে, আপনার কাছ থেকে শিখে আমি অনেক কিছু বুঝতে পেরেছি। আপনার মতো মানুষ জীবনে পাওয়া সত্যিই আল্লাহর রহমত। এই ঈদে আপনার জীবনে অনেক অনেক আনন্দ আসুক।

গভীর শ্রদ্ধা ও ভালোবাসায়। ঈদ মোবারক! 💛`,
    ],

    "junior-vaiya": [
      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমার জন্য অনেক দোয়া ও ভালোবাসা রইলো। আল্লাহ্ তোমাকে সুস্থ রাখুন, সুখী রাখুন, এবং জীবনের সব সুন্দর স্বপ্ন পূরণ করুন। এই ঈদ তোমার জন্য আনন্দে ভরপুর হোক।

ঈদের শুভেচ্ছা ও অনেক ভালোবাসা! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমার হাসি, তোমার উদ্যম — সব কিছু আমাকে অনুপ্রাণিত করে। এই ঈদে আল্লাহ্ তোমার সব কষ্ট দূর করুন, সব স্বপ্ন পূরণ করুন।

ঈদের অনেক অনেক আদর ও শুভেচ্ছা! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

তুমি যেভাবে এগিয়ে যাচ্ছো, সেটা দেখে সত্যিই গর্ব হয়। এই ঈদে আল্লাহ্ তোমার পথচলাকে আরও সহজ করুন, আনন্দে ভরিয়ে দিন।

তোমার জন্য সবসময় দোয়া। ঈদ মোবারক! 💛`,
    ],

    "junior-apu": [
      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমার জন্য অনেক দোয়া রইলো। আল্লাহ্ তোমাকে সুস্থ রাখুন, সুখী রাখুন, তোমার সব স্বপ্ন পূরণ করুন। এই ঈদ তোমার জন্য অনেক সুন্দর হোক।

ঈদের শুভেচ্ছা ও অনেক ভালোবাসা! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমার মতো সুন্দর মনের মানুষ জীবনে পাওয়া সত্যিই ভাগ্যের ব্যাপার। তোমার হাসি সবার মন ভালো করে দেয়। এই ঈদে আল্লাহ্ তোমাকে আরও আরও সুন্দর দিন দিন।

ঈদের অনেক ভালোবাসা! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমাকে পাশে পেয়ে জীবনটা সত্যিই সুন্দর। তুমি যেভাবে সবকিছু সামলে নাও, সেটা সত্যিই admirable। এই ঈদে তোমার জন্য দোয়া — আল্লাহ্ তোমাকে সব সুখ দিন।

তোমার জন্য সবসময় দোয়া। ঈদ মোবারক! 💛`,
    ],

    sir: [
      `শ্রদ্ধেয় {name} স্যার,

ঈদ মোবারক! 🌙

আপনার প্রতি বিনম্র শ্রদ্ধা জানাই। আপনার নির্দেশনা ও সহযোগিতা আমার জন্য অমূল্য। এই ঈদে আল্লাহ্ আপনাকে ও আপনার পরিবারকে উত্তম স্বাস্থ্য, সুখ ও সমৃদ্ধি দান করুন।

ঈদের আন্তরিক শুভেচ্ছা রইলো। 💛`,

      `শ্রদ্ধেয় {name} স্যার,

ঈদ মোবারক! 🌙

আপনার অধীনে কাজ করার সুযোগ পেয়ে নিজেকে সৌভাগ্যবান মনে করি। আপনার জ্ঞান ও দিকনির্দেশনা আমার ক্যারিয়ারের সবচেয়ে মূল্যবান সম্পদ। এই ঈদে আল্লাহ্ আপনাকে সুস্থতা ও প্রশান্তি দান করুন।

বিনম্র শ্রদ্ধা ও ঈদের শুভেচ্ছা। 💛`,

      `শ্রদ্ধেয় {name} স্যার,

ঈদ মোবারক! 🌙

আপনার শিক্ষা ও অনুপ্রেরণা আমার জীবনে গভীর প্রভাব ফেলেছে। এই পবিত্র ঈদে আল্লাহ্ আপনার ও আপনার পরিবারের উপর অশেষ রহমত বর্ষণ করুন।

ঈদের আন্তরিক শুভেচ্ছা ও সালাম। 💛`,
    ],

    madam: [
      `শ্রদ্ধেয়া {name} ম্যাডাম,

ঈদ মোবারক! 🌙

আপনার প্রতি আন্তরিক শ্রদ্ধা ও শুভকামনা জানাই। আপনার স্নেহ ও দিকনির্দেশনা সবসময় আমাকে অনুপ্রাণিত করেছে। এই ঈদে আল্লাহ্ আপনাকে ও আপনার পরিবারকে অপার আনন্দ ও কল্যাণে ভরিয়ে দিন।

ঈদের শুভেচ্ছা ও শ্রদ্ধা। 💛`,

      `শ্রদ্ধেয়া {name} ম্যাডাম,

ঈদ মোবারক! 🌙

আপনি আমার কাছে অনুপ্রেরণার উৎস। আপনার কাছ থেকে শেখা প্রতিটি বিষয় আমাকে আরও ভালো মানুষ হতে সাহায্য করেছে। এই ঈদে আল্লাহ্ আপনাকে সুস্বাস্থ্য ও প্রশান্তি দান করুন।

গভীর শ্রদ্ধা ও ঈদের শুভেচ্ছা। 💛`,

      `শ্রদ্ধেয়া {name} ম্যাডাম,

ঈদ মোবারক! 🌙

আপনার ধৈর্য, মেধা ও সহানুভূতি সবার জন্য অনুকরণীয়। এই পবিত্র ঈদে আল্লাহ্ আপনার জীবনে সমস্ত সুখ ও সমৃদ্ধি বর্ষণ করুন।

ঈদের শুভেচ্ছা ও আন্তরিক সম্মান। 💛`,
    ],

    family: [
      `প্রিয় {name},

ঈদ মোবারক! 🌙

তোমাকে/আপনাকে অনেক অনেক ভালোবাসা! পরিবারের সবাই মিলে এই ঈদটা যেন আনন্দে, ভালোবাসায় আর বরকতে পরিপূর্ণ হয়। আল্লাহ্ আমাদের সবাইকে একসাথে রাখুন, সুখে রাখুন।

ঈদের কোলাকুলি ও অসীম ভালোবাসা! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

পরিবার মানেই ভালোবাসা, আর তুমি/আপনি সেই ভালোবাসার সবচেয়ে উজ্জ্বল অংশ। এই ঈদে আল্লাহ্ আমাদের পরিবারকে আরও সুখী করুন। তোমার/আপনার মুখে সবসময় হাসি থাকুক।

ঈদের অনেক ভালোবাসা ও দোয়া! 💛`,

      `প্রিয় {name},

ঈদ মোবারক! 🌙

ঈদ মানেই পরিবার, আর পরিবার মানেই তুমি/আপনি। দূরে থাকলেও মনে মনে কাছেই আছি। আল্লাহ্ আমাদের সবাইকে সুস্থ রাখুন, একসাথে অনেক ঈদ উদযাপন করার তৌফিক দিন।

হৃদয় ভরা ভালোবাসা ও ঈদের শুভেচ্ছা! 💛`,
    ],

    friends: [
      `ইয়ো {name}! 😄

ঈদ মোবারক, বন্ধু! 🌙

তোর সাথে কাটানো সব মুহূর্তগুলো আমার কাছে অনেক দামি। হাসি-ঠাট্টা, আড্ডা — এসব ছাড়া জীবনটা ফিকে। এই ঈদে আল্লাহ্ তোকে অনেক সুখ দিন, আর আমাদের বন্ধুত্ব চিরকাল থাকুক।

ঈদের পর আড্ডা পাক্কা! ঈদ মোবারক, ব্রো! 💛`,

      `হ্যালো {name}! 😊

ঈদ মোবারক! 🌙

বন্ধু, তুই আমার জীবনের সেরা মানুষদের একজন। তোর সাপোর্ট, তোর হাসি — সব আমার কাছে অনেক মানে রাখে। এই ঈদে তোর জীবনে অনেক খুশি আসুক।

মিস করছি তোকে! ঈদ মোবারক! 💛`,

      `ওরে {name}! 🤗

ঈদ মোবারক, দোস্ত! 🌙

কত মেমোরিজ তোর সাথে! সেই আড্ডা, সেই হাসাহাসি — সব যেন গতকালের মতো। তুই সবসময় আমার পাশে ছিলি। এই ঈদে আল্লাহ্ তোকে সব সুখ দিন!

লাভ ইউ ব্রো! ঈদ মোবারক! 💛`,

      `{name}, বন্ধু! ✌️

ঈদ মোবারক! 🌙

ভালো বন্ধু পাওয়াটা আল্লাহর নেয়ামত — আর তুই সেই নেয়ামত। এই ঈদে তোর সব চিন্তা দূর হোক, সব কাজে সফলতা আসুক, মনটা সবসময় খুশি থাকুক।

চল ঈদের পর প্ল্যান করি! ঈদ মোবারক! 💛`,
    ],
  },

  en: {
    "senior-vaiya": [
      `Dear {name} Bhai,

Eid Mubarak! 🌙

I have so much respect and love for you. You have always been a source of inspiration for us. May Allah grant you and your family boundless happiness, prosperity, and barakah this Eid.

I always seek your prayers. Wishing you a wonderful Eid! 💛`,

      `Dear {name} Bhai,

Eid Mubarak! 🌙

Your kindness and wisdom have always guided me through life. You are a true blessing. May this Eid bring you immense joy and good health.

With deep respect and love. Eid Mubarak! 💛`,

      `Respected {name} Bhai,

Eid Mubarak! 🌙

Your support and advice have always pushed me forward. On this holy Eid ul-Fitr, may Allah shower His blessings on you and your family.

With heartfelt respect. Eid Mubarak! 💛`,
    ],

    "senior-apu": [
      `Dear {name} Apu,

Eid Mubarak! 🌙

I have so much respect and love for you. You have always been there for us with your warmth and care. May Allah grant you and your family boundless happiness and barakah this Eid.

Your prayers mean everything. Eid Mubarak! 💛`,

      `Dear {name} Apu,

Eid Mubarak! 🌙

Your love and affection are the greatest gifts in my life. You have always looked after us. May this Eid bring you health, happiness, and endless smiles.

With so much love. Eid Mubarak! 💛`,

      `Respected {name} Apu,

Eid Mubarak! 🌙

Having you in my life is truly a blessing from Allah. I've learned so much from you. May this Eid fill your life with immense joy.

With deep respect and love. Eid Mubarak! 💛`,
    ],

    "junior-vaiya": [
      `Dear {name},

Eid Mubarak! 🌙

Sending you lots of prayers and love. May Allah keep you healthy and happy, and may all your dreams come true. May this Eid be filled with joy for you.

Eid wishes and lots of love! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

Your smile and energy inspire me. May Allah take away all your worries this Eid and bless you with the most beautiful days ahead.

Lots of love and Eid wishes! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

I'm so proud of how far you've come. May Allah make your journey smoother and fill your Eid with happiness.

Always in my prayers. Eid Mubarak! 💛`,
    ],

    "junior-apu": [
      `Dear {name},

Eid Mubarak! 🌙

Sending you lots of prayers and love. May Allah keep you healthy, happy, and fulfill all your beautiful dreams. May this Eid bring you pure joy.

Eid wishes and lots of love! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

Having someone as wonderful as you in my life is truly a blessing. Your smile lights up everyone's day. May this Eid bring you even more beautiful moments.

So much love for you! Eid Mubarak! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

The way you handle everything with grace is truly admirable. May Allah bless you with every happiness this Eid.

Always in my prayers. Eid Mubarak! 💛`,
    ],

    sir: [
      `Respected {name} Sir,

Eid Mubarak! 🌙

Your guidance and support have been invaluable to me. May Allah grant you and your family the best of health, happiness, and prosperity this Eid.

Warm Eid wishes and regards. 💛`,

      `Respected {name} Sir,

Eid Mubarak! 🌙

I feel truly fortunate to work under your leadership. Your knowledge and mentorship are the greatest assets in my career. May this Eid bring you peace and serenity.

With humble respect and Eid greetings. 💛`,

      `Dear {name} Sir,

Eid Mubarak! 🌙

Your teachings have made a profound impact on my life. On this blessed Eid, may Allah's endless mercy be upon you and your family.

Heartfelt Eid wishes and salaam. 💛`,
    ],

    madam: [
      `Respected {name} Ma'am,

Eid Mubarak! 🌙

Your warmth and guidance have always inspired me. May Allah fill your life and your family's with boundless joy and blessings this Eid.

Eid greetings with deep respect. 💛`,

      `Respected {name} Ma'am,

Eid Mubarak! 🌙

You are not just a mentor — you are a source of inspiration. May this Eid bring you good health, long life, and peace of mind.

With deep respect and Eid wishes. 💛`,

      `Dear {name} Ma'am,

Eid Mubarak! 🌙

Your patience, intellect, and compassion are an example for everyone. May Allah bless your life with every happiness this Eid.

Warm Eid wishes and sincere regards. 💛`,
    ],

    family: [
      `Dear {name},

Eid Mubarak! 🌙

Sending you so much love! May this Eid be filled with joy, love, and blessings for our whole family. May Allah keep us together and happy, always.

Eid hugs and endless love! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

Family means love, and you are the brightest part of that love. May this Eid bring our family even closer. May your face always carry a smile.

So much love and prayers for you! 💛`,

      `Dear {name},

Eid Mubarak! 🌙

Eid means family, and family means you. Even when we're apart, you're always close in my heart. May Allah give us many more Eids to celebrate together.

With a heart full of love! 💛`,
    ],

    friends: [
      `Hey {name}! 😄

Eid Mubarak, buddy! 🌙

Every moment spent with you is precious. The laughs, the hangouts, the memories — life wouldn't be the same without you. May Allah bless you with tons of happiness this Eid!

Hangout after Eid is a must! Eid Mubarak, bro! 💛`,

      `Hello {name}! 😊

Eid Mubarak! 🌙

You're one of the best people in my life. Your support and laughter mean the world to me. May this Eid fill your life with so much joy.

Missing you! Eid Mubarak! 💛`,

      `Yo {name}! 🤗

Eid Mubarak, dost! 🌙

So many memories with you! Those hangouts, those laughing fits — feels like yesterday. You've always had my back. May Allah give you every kind of happiness!

Love you bro! Eid Mubarak! 💛`,

      `{name}, my friend! ✌️

Eid Mubarak! 🌙

A good friend is a special blessing from Allah — and you are that blessing. May all your worries fade, success find you, and your heart always be at peace.

Let's make plans after Eid! Eid Mubarak! 💛`,
    ],
  },
};

export function generateMessage(
  relationType: RelationType,
  recipientName: string,
  lang: Language = "bn"
): string {
  const templates = MESSAGE_TEMPLATES[lang][relationType];
  const idx = Math.floor(Math.random() * templates.length);
  return templates[idx].replace(/{name}/g, recipientName);
}

export function getTemplateCount(relationType: RelationType, lang: Language = "bn"): number {
  return MESSAGE_TEMPLATES[lang][relationType].length;
}

export function getTemplateByIndex(
  relationType: RelationType,
  index: number,
  recipientName: string,
  lang: Language = "bn"
): string {
  const templates = MESSAGE_TEMPLATES[lang][relationType];
  const idx = ((index % templates.length) + templates.length) % templates.length;
  return templates[idx].replace(/{name}/g, recipientName);
}
