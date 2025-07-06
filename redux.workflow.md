## Redux workflow Explanation

Redux একটি state management library, যেখানে পুরো অ্যাপের গ্লোবাল state একটি জায়গায় রাখা হয়, যেটাকে আমরা বলি Store।

Redux workflow মোটামুটি নিচের ধাপগুলোতে কাজ করে:

---

#### ✅ ১. Store তৈরি হয়

সব গ্লোবাল state রাখার জন্য একটা central store থাকে। এটাকে বলা হয় "single source of truth"।

---

#### ✅ ২. Component থেকে ইভেন্ট ট্রিগার হয়

যেমন ইউজার কোনো বাটনে ক্লিক করল।

---

#### ✅ ৩. সেই ইভেন্টের রেসপন্সে একটা **Action Dispatch** হয়

Action হলো একটা জাভাস্ক্রিপ্ট অবজেক্ট — যেখানে বলা হয় আমরা কী করতে চাই। যেমন:

> “আমি চাই counter এক বাড়ুক”

---

#### ✅ ৪. Reducer সেই Action ধরবে

Reducer একটা pure function, যেটা বর্তমান state আর action দেখে নতুন state তৈরি করে।

---

#### ✅ ৫. Store নতুন state রাখে

Reducer নতুন state ফেরত দিলে, Store সেই নতুন state সংরক্ষণ করে।

---

#### ✅ ৬. Component গুলো নতুন state পায়

যেই component গুলো সেই অংশের state subscribe করে রাখছে, তারা rerender হয় updated ডেটা নিয়ে।

---

#### ✅ ৭. Middleware (যদি থাকে)

Middleware ব্যবহার হয় যদি কোনো asynchronous কাজ থাকে — যেমন API call।

---

### 🎯 বাস্তব উদাহরণ দিয়ে বুঝাই:

ধরুন, আমি একটা Counter App বানাচ্ছি।

* ইউজার `+` বাটনে ক্লিক করল
* আমি `dispatch` করলাম `{ type: "INCREMENT" }`
* Reducer দেখল action-এর type কী, এবং `count + 1` করে নতুন state ফেরত দিল
* Store সেই নতুন count রাখল
* Component rerender হয়ে ইউজারকে নতুন count দেখাল

---

**শেষ কথা:**
Redux-এর মূল আইডিয়া হলো একদম ক্লিয়ার এবং predictable state flow — যেটা একমুখী, এবং যেখানে state কে manage করে একটা নির্দিষ্ট নিয়মে।

