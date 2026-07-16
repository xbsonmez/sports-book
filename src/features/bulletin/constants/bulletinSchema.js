export const STATIC_START_COLS = [
  {
    key: "event",
    label: "Event Count",
    cssClass: "border-r border-gray-200 px-2 py-1 text-left flex-1 min-w-64",
  },
];

export const STATIC_MIDDLE_COLS = [
  {
    key: "comments",
    label: "Yorumlar",
    cssClass: "border-r border-gray-200 px-2 py-1 w-24 text-center",
  },
  { key: "mbs", label: "", cssClass: "border-r border-gray-200 px-2 py-1 w-8 text-center" },
];

export const STATIC_END_COLS = [
  { key: "extra", label: "+99", cssClass: "border-gray-200 px-2 py-1 w-12 text-center" },
];

export const BULLETIN_MARKET_GROUPS = [
  {
    ocgId: "1",
    label: "Maç Sonucu",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [
      { ocId: "0", label: "1" },
      { ocId: "1", label: "X" },
      { ocId: "2", label: "2" },
    ],
  },
  {
    ocgId: "5",
    label: "Alt/Üst",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [
      { ocId: "25", label: "Alt" },
      { ocId: "26", label: "Üst" },
    ],
  },
  {
    ocgId: "6",
    label: "Handikap",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [
      { ocId: "91", label: "H1" },
      { ocId: "92", label: "1" },
      { ocId: "93", label: "X" },
      { ocId: "94", label: "2" },
    ],
  },
  {
    ocgId: "7",
    label: "Handikap2",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [{ ocId: "95", label: "H2" }],
  },
  {
    ocgId: "2",
    label: "Çifte Şans",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [
      { ocId: "3", label: "1-X" },
      { ocId: "4", label: "1-2" },
      { ocId: "5", label: "X-2" },
    ],
  },
  {
    ocgId: "8",
    label: "Var/Yok",
    visible: true,
    cssClass: "border-r border-gray-200 px-2 py-1 w-12 text-center",
    outcomes: [
      { ocId: "101", label: "Var" },
      { ocId: "102", label: "Yok" },
    ],
  },
];
