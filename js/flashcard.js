const flashcards = [
  {
    en: { title: "Big O Notation (O)", short: "Upper bound — worst-case time", back: "Big O shows the maximum runtime. Example: Looping array of n elements → O(n)." },
    mrw: { title: "Big O Notation (O)", short: "ऊपरी सीमा — सबसे बुरा टाइम", back: "Big O मतलब algorithm के सबसे मुश्किल case में maximum time। Example: Array में n elements loop करना → O(n)" },
    colorFront: "bg-blue-100", colorTitle: "text-blue-700", colorShort: "text-blue-800", colorBack: "bg-blue-600"
  },
  {
    en: { title: "Big Omega (Ω)", short: "Lower bound — best-case time", back: "Big Ω shows minimum runtime. Example: Linear search, element first → Ω(1)." },
    mrw: { title: "Big Omega (Ω)", short: "नीचली सीमा — सबसे जल्दी", back: "Big Ω algorithm के best-case time को दिखाता है। Example: Linear search में element first में → Ω(1)" },
    colorFront: "bg-green-100", colorTitle: "text-green-700", colorShort: "text-green-800", colorBack: "bg-green-600"
  },
  {
    en: { title: "Big Theta (Θ)", short: "Tight bound — best & worst", back: "Θ shows average & worst-case growth. Example: Merge Sort always Θ(n log n)." },
    mrw: { title: "Big Theta (Θ)", short: "ठीक सीमा — best & worst", back: "Θ मतलब algorithm का average & worst-case growth rate। Example: Merge Sort हमेशा Θ(n log n)" },
    colorFront: "bg-purple-100", colorTitle: "text-purple-700", colorShort: "text-purple-800", colorBack: "bg-purple-600"
  },
  {
    en: { title: "O(n²) Example", short: "Worst-case quadratic time", back: "Bubble Sort or Insertion Sort in worst-case → O(n²)" },
    mrw: { title: "O(n²) Example", short: "Worst-case quadratic time", back: "Bubble Sort या Insertion Sort worst-case → O(n²) loops" },
    colorFront: "bg-yellow-100", colorTitle: "text-yellow-700", colorShort: "text-yellow-800", colorBack: "bg-yellow-600"
  },
  {
    en: { title: "Ω(n) Example", short: "Best-case linear", back: "Linear Search in best-case → Ω(1), generally Ω(n)" },
    mrw: { title: "Ω(n) Example", short: "Best-case linear", back: "Linear Search में element last में → Ω(n) runtime" },
    colorFront: "bg-red-100", colorTitle: "text-red-700", colorShort: "text-red-800", colorBack: "bg-red-600"
  }
  // Add more flashcards as needed
];