import React from 'react';

const FAQ = () => {
    return (
            <section className="FAQ-section dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">এই কোর্স কাদের জন্য?</summary>
                            <div className="px-4 pb-4">
                                <p>যারা ওয়েব ডেভেলপার হতে চায়। যারা একদম শূন্য থেকে শুরু করে শেষ পর্যন্ত ওয়েব ডেভেলপমেন্ট শিখে তারপর ওয়েব ডেভেলপার হিসেবে কোন সফটওয়্যার কোম্পানিতে চাকরি করতে চায়, তাদের জন্য। যারা প্রোগ্রামিং বা ওয়েব ডেভেলপমেন্ট সম্পর্কে তেমন কিছুই জানে না, তাদের জন্য। এমনকি যারা চার বছর CSE পড়েও কিভাবে কি করবে দিশা করতে পারতেছে না, গুছিয়ে তেমন কিছু শিখেনি, তারাও এই কোর্স থেকে কমপ্লিট ওয়েব ডেভেলপমেন্ট শিখে চাকরিতে এপ্লাই করতে পারবে। 😀</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">এই কোর্স শুরু করার আগে আমার কী কী পূর্ব অভিজ্ঞতা থাকা দরকার?</summary>
                            <div className="px-4 pb-4">
                                <p>আমরা যেহেতু একদম শূন্য থেকে শেখাচ্ছি। তাই তোমাকে আগে থেকে তেমন কিছু জানা লাগবে না। তবে তোমার হাতে যদি সময় থাকে তাহলে এই তিনটা কাজ করে ফেলতে পারো। ১. ভিডিও দেখে দেখে জিনিসগুলো মাথায় ঢুকানোর জন্য একটুখানি ব্রেনের খালি জায়গা রাখতে হবে। ২. কোর্স এ জয়েন করলেই অটো ওয়েব ডেভেলপার হয়ে যাবে না। হার্ডওয়ার্ক করার, লেগে থাকার মেন্টালিটি থাকতে হবে। ৩. কোথাও আটকে গেলে হেল্প চাওয়ার মেন্টালিটি এবং লেগে থাকার ইচ্ছা রাখতে হবে।</p>
                            </div>
                        </details>
                        
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">কোর্সের মধ্যে কী কী আছে ?</summary>
                            <div className="px-4 pb-4">
                                <p>সেটা কোর্স কারিকুলাম দেখলেই বুঝতে পারবে। তবে ছোট করে বললে, বলা যায়: বর্তমান সময়ে একজন সিরিয়াস ওয়েব ডেভেলপার হওয়ার জন্য যা যা লাগে, তার সবই আছে এই কোর্সে। একদম ছোট করে বললে ধরো HTML, CSS থেকে শুরু করে bootstrap, JavaScript, Git, ES6, REST API, server, JSON তো আছেই। তার সাথে সাথে আছে বর্তমান সময়ে সবচেয়ে বেশি চাকরি যে ফ্রেমওয়ার্ক সেই React, advanced React দিয়ে কমপ্লিট ওয়েবসাইট বানানোর সিস্টেম আছে। বাড়তি হিসেবে আছে node, database (mongodb), debug, problem solving, interview questions সহ আরো অনেক জিনিস। আর পুরা কোর্সে তোমাকে ১১টা ওয়েবসাইট করে দেখানো হবে। আরো ১১টা ওয়েবসাইট থাকবে তোমার হোমওয়ার্ক হিসেবে। এই পুরা জিনিস কোন রকমে শেষ করতে পারলে, একজন উন্নতমানের জুনিয়র ওয়েব ডেভেলপার না হয়ে উপায় থাকবে না।</p>
                            </div>
                        </details>
                        
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">এই কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?</summary>
                            <div className="px-4 pb-4">
                                <p>তুমি যদি প্রতিদিন ১ থেকে দেড় ঘন্টা ধরে ভিডিও দেখো, তার সাথে সাথে এক্সট্রা ৪ থেকে ৬ ঘন্টা প্রাকটিস করো, তাহলে তোমার ৫ মাসের মতো সময় লাগবে। তবে মাঝে মধ্যে হোমওয়ার্ক আর টেক এওয়ে প্রজেক্ট এর জন্য বাড়তি সময় বরাদ্ধ রাখতে হবে। হার্ডওয়ার্ক করার মেন্টালিটি নিয়ে আসতে হবে। ফাঁকিবাজি বা শর্টকাট করার কোন উপায় নাই।</p>
                            </div>
                        </details>
                        
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">কোর্সটি করতে শিক্ষাগত ব্যাকগ্রাউন্ড কেমন থাকা লাগবে?</summary>
                            <div className="px-4 pb-4">
                                <p>আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক, পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে। তবে অবশ্যই সময় দিতে হবে ৬-৮ ঘন্টা। মিনিমাম ৪-৫ ঘন্টা।</p>
                            </div>
                        </details>
                        
                    </div>
                </div>
            </section>
    );
};

export default FAQ;