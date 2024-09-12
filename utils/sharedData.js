/* export const shareData = {
  workArea: [
    "NYC",
    "Buffalo",
    "Nassau/Suffolk",
    "Rochester",
    "Syracuse",
    "Other",
  ],
  roles: [
    "Organizer",
    "Facilitator/Presenter/MC",
    "Volunteer",
    "Support team member",
    "Community ambassador",
    "Intern / apprentice",
    "Other",
  ],
  nysActivity: [
    "Campus Approach",
    "Conscientious Clinician™",
    "Health Disparities Workshop/Town Hall",
    "Faith Without Walls",
    "Leadership Training Institute",
    "Legislative Leadership Zoom",
    "Health Equity Group Sessions",
    "Other",
  ],
  nysPrograms: ["Leadership Training Institute", "HIV High Impact"],
  languages: [
    "English",
    "Spanish",
    "French",
    "African languages",
    "Haitian-Creole",
  ],
  eventChecklist: [
    "Participants completed a sign in registration at the start of the session (online).",
    "The event started on time.",
    "The event finished on time.",
    "For meetings/workshops/training/town halls/webinars: Participants were greeted by someone from the program.",
    "Resources were available to participants.",
    "If photos were taken, participants signed a photo usage form.",
    "Hand sanitizer was available.",
    "For meetings/workshops/training/town halls/webinars: Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines.",
     "For meetings/workshops/training/town halls/webinars: Participants completed a post-workshop evaluation form",
  ],
  gender: [
    "Female",
    "Male",
    "Transgender female",
    "Transgender male",
    "Gender non-conforming",
    "Non-binary",
    "Other gender identity",
  ],
  age: [
    "Under 15",
    "16-19",
    "20-24",
    "25-29",
    "30-34",
    "35-39",
    "40-44",
    "45-49",
    "50-54",
    "55-59",
    "60-64",
    "65-69",
    "70+",
  ],
  race: [
    "Black or African American",
    "Hispanic, Latino/a or Spanish",
    "Asian",
    "American Indian or Alaska Native",
    "Middle Eastern or North African",
    "Native Hawaiian or Other Pacific Islander",
    "White",
    "Some other race or origin",
    "Decline to answer",
  ],
  ethnicity: [
    "Not of Hispanic, Latino/a or Spanish origin",
    "Mexican, Mexican American or Chicano",
    "Puerto Rican",
    "Cuban",
    "Dominican",
    "Ecuadorian",
    "Other Hispanic, Latino/a, or Spanish origin",
    "Decline to answer",
  ],
  sexualOrientation: [
    "Gay or lesbian",
    "Straight or heterosexual",
    "Bisexual",
    "Queer",
    "Questioning or not sure",
    "Unknown",
    "Decline to answer",
  ],
  resourcesDistributed: [
    "Masks",
    "COVID literature",
    "Vaccine related literature",
    "HIV literature",
    "HepC literature",
    "PrEP literature",
    "Safer sex kits",
    "Health disparities literature",
    "Bags/boxes of food",
    "Posters",
    "Other event leaflets",
    "Prepared meals",
    "Hand sanitizers",
    "COVID vaccine site referral information/details",
    "Male condoms",
    "Female condoms",
    "Lubricant",
    "Referral lists",
    "Dental dam",
    "Promotional materials"
  ],
}; */

export const workArea = [
  { id: 1, value: "NYC" },
  { id: 2, value: "Buffalo" },
  { id: 3, value: "Nassau/Suffolk" },
  { id: 4, value: "Rochester" },
  { id: 5, value: "Syracuse" },
  { id: 6, value: "Other" },
];

export const roles = [
  { id: 1, value: "Organizer" },
  { id: 2, value: "Facilitator/Presenter/MC" },
  { id: 3, value: "Volunteer" },
  { id: 4, value: "Support team member" },
  { id: 5, value: "Community ambassador" },
  { id: 6, value: "Intern / apprentice" },
  { id: 7, value: "Other " },
];

export const nysActivity = [
  { id: 1, value: "Campus Approach", nyscmp: 1 },
  { id: 2, value: "Conscientious Clinician™", nyscmp: 1 },
  { id: 3, value: "Health Disparities Workshop/Town Hall", nyscmp: 1 },
  { id: 4, value: "Faith Without Walls", nyscmp: 1 },
  { id: 5, value: "Leadership Training Institute", nyscmp: 1 },
  { id: 6, value: "Legislative Leadership Zoom", nyscmp: 0 },
  { id: 7, value: "Health Equity Group Sessions", nyscmp: 0 },
  { id: 8, value: "Strategic Planning", nyscmp: 1 },
  { id: 9, value: "Other", nyscmp: 1 },
];

export const nysPrograms = [
  { id: 1, value: "Leadership Training Institute" },
  { id: 2, value: "HIV High Impact" },
];

export const languages = [
  { id: 1, value: "English" },
  { id: 2, value: "Spanish" },
  { id: 3, value: "French" },
  { id: 4, value: "African languages" },
  { id: 5, value: "Haitian-Creole" },
];

export const eventChecklist = [
  {
    id: 1,
    event:
      "Participants completed a sign in registration at the start of the session (online).",
    dataField: "participantRegistrationForm",
  },
  {
    id: 2,
    event: "The event started on time.",
    dataField: "eventStartedOnTime",
  },
  {
    id: 3,
    event: "The event finished on time.",
    dataField: "eventFinishedOnTime",
  },
  {
    id: 4,
    event:
      "For meetings/workshops/training/town halls/webinars: Participants were greeted by someone from the program.",
    dataField: "participantGreeted",
  },
  {
    id: 5,
    event: "Resources were available to participants.",
    dataField: "resourcesAvailable",
  },
  {
    id: 6,
    event: "If photos were taken, participants signed a photo usage form.",
    dataField: "photoRelease",
  },
  {
    id: 7,
    event: "Hand sanitizer was available.",
    dataField: "handSanitizerAvailable",
  },
  {
    id: 8,
    event:
      "For meetings/workshops/training/town halls/webinars: Participants were reminded that the workshop area is a safe space and to treat each other respectfully and within the workshop guidelines.",
    dataField: "reminderSafeSpace",
  },
  // {
  //   id: 9,
  //   event:
  //     "For meetings/workshops/training/town halls/webinars: Participants completed a post-workshop evaluation form",
  //   dataField: "reminderPostEvaluationSurvey",
  // },
];

export const gender = [
  { id: 1, value: "Female" },
  { id: 2, value: "Male" },
  { id: 3, value: "Transgender female" },
  { id: 4, value: "Transgender male" },
  { id: 5, value: "Gender non-conforming" },
  { id: 6, value: "Non-binary" },
  { id: 7, value: "Other gender identity" },
];

export const age = [
  { id: 1, value: "Under 13" },
  { id: 2, value: "13-18" },
  { id: 3, value: "19-24" },
  { id: 4, value: "25-29" },
  { id: 5, value: "30-34" },
  { id: 6, value: "35-39" },
  { id: 7, value: "40-44" },
  { id: 8, value: "45-49" },
  { id: 9, value: "50-54" },
  { id: 10, value: "55-59" },
  { id: 11, value: "60-64" },
  { id: 12, value: "65-69" },
  { id: 13, value: "70+" },
  /*  { id: 14, value: "Decline to answer" }, */
];

export const race = [
  { id: 1, value: "Black or African American" },
  { id: 2, value: "Hispanic, Latino/a or Spanish" },
  { id: 3, value: "Asian" },
  { id: 4, value: "American Indian or Alaska Native" },
  { id: 5, value: "Middle Eastern or North African" },
  { id: 6, value: "Native Hawaiian or Other Pacific Islander" },
  { id: 7, value: "White" },
  { id: 8, value: "Some other race or origin" },
  { id: 9, value: "Decline to answer" },
];

export const ethnicity = [
  { id: 1, value: "Not of Hispanic, Latino/a or Spanish origin" },
  { id: 2, value: "Yes, I identify as Mexican, Mexican American or Chicano" },
  { id: 3, value: "Yes, I identify as Puerto Rican" },
  { id: 4, value: "Yes, I identify as Cuban" },
  { id: 5, value: "Yes, I identify as Dominican" },
  { id: 6, value: "Yes, I identify as Ecuadorian" },
  { id: 7, value: "Yes, I identify with another Hispanic, Latino/a, or Spanish origin" },
  { id: 8, value: "Decline to answer" },
];

export const sexualOrientation = [
  { id: 2, value: "Straight or heterosexual" },
  { id: 1, value: "Gay or lesbian" },
  { id: 3, value: "Bisexual" },
  { id: 4, value: "Queer" },
  { id: 5, value: "Questioning or not sure" },
  { id: 6, value: "Unknown" },
  { id: 8, value : "Other"},
  { id: 7, value: "Decline to answer" },
];

export const resourcesDistributed = [
  {
    id: 1,
    source: "/post_Event_report/safer_sex_kit_icon.svg",
    name: "Safer sex kits",
    dataFieldName: "saferSexKits",
  },
  {
    id: 2,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "HIV literature",
    dataFieldName: "hivLiterature",
  },

  {
    id: 3,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "HepC literature",
    dataFieldName: "hepCLiterature",
  },
  {
    id: 4,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "PrEP literature",
    dataFieldName: "prepLiterature",
  },
  {
    id: 5,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "Health disparities literature",
    dataFieldName: "healthDisparitiesLiterature",
  },
  {
    id: 6,
    source: "/post_Event_report/mask_icon.svg",
    name: "Masks",
    dataFieldName: "masks",
  },
  {
    id: 7,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "COVID literature",
    dataFieldName: "covidLiterature",
  },
  {
    id: 8,
    source: "/post_Event_report/COVID_literature_icon.svg",
    name: "Vaccine related literature",
    dataFieldName: "vaccineRelatedLiterature",
  },

  // { id:9,
  //   source: "/post_Event_report/bags_boxes_of_food_icon.svg",
  //   name:"Bags/boxes of food",
  //   dataFieldName:"bagsBoxesFood"
  // },
  // { id:10,
  //   source: "/post_Event_report/poster_icon.svg",
  //   name:"Posters",
  //   dataFieldName:"posters"
  // },
  // { id:11,
  //   source: "/post_Event_report/ther_event_leaflets_icon.svg",
  //   name:"Other event leaflets",
  //   dataFieldName:"otherEventLeaflets"
  // },
  // { id:12,
  //   source: "/post_Event_report/prepared_meal_icon.svg",
  //   name:"Prepared meals",
  //   dataFieldName:"preparedMeals"
  // },
  {
    id: 9,
    source: "/post_Event_report/hand_sanitizers_icon.svg",
    name: "Hand sanitizers",
    dataFieldName: "handSanitizers",
  },
  {
    id: 10,
    name: "Male condoms",
    dataFieldName: "maleCondoms",
  },
  {
    id: 11,
    name: "Female condoms",
    dataFieldName: "femaleCondoms",
  },
  {
    id: 12,
    name: "Lubricant",
    dataFieldName: "lubricant",
  },
  {
    id: 13,
    name: "Referral lists",
    dataFieldName: "referralLists",
  },
  {
    id: 14,
    name: "Dental dams",
    dataFieldName: "dentalDam",
  },
  {
    id: 15,
    name: "Promotional materials",
    dataFieldName: "promotionalMaterial",
  },
  // { id:14,
  //   source: "/post_Event_report/COVID_site_referral_icon.svg",
  //   name:"COVID vaccine site referral information/details",
  //   dataFieldName:"covidVaccineSiteReferralDetails"
  // },
];

export const inPersonEventTypeName = [
  { id: 2, value: "Outreach/Community Event", nyscmp: true },
  { id: 5, value: "Town Hall", nyscmp: true },
  { id: 1, value: "Vaccine and/or COVID-19 Testing Event", nyscmp: true },
  { id: 4, value: "Workshop/Training", nyscmp: true },
  {
    id: 3,
    value: "Day of Action (including community awareness days)",
    nyscmp: false,
  },
  { id: 6, value: "Door Knocking", nyscmp: false },
  { id: 7, value: "Capacity Building Training", nyscmp: false },
  { id: 8, value: "Community Advisory Board Meeting", nyscmp: false },
];
export const inPersonEventLocationType = [
  { id: 0, value: "College/School/Trades school/community-based learning center", nyscmp: true, oefoutreach:true, oefcbt:true },
  { id: 1, value: "Community based organization site", nyscmp: true, oefoutreach:true, oefcbt:true },
  { id: 2, value: "COVID vaccine location", nyscmp: true, oefoutreach:false, oefcbt:true },
  { id: 3, value: "COVID-19 Testing location", nyscmp: true, oefoutreach:false, oefcbt:true },
  { id: 4, value: "Faith based location/Place of worship", nyscmp: true, oefoutreach:true, oefcbt:true  },
  { id: 5, value: "Food Bank/Pantry/Food Kitchen", nyscmp: true, oefoutreach:true, oefcbt:true },
  { id: 6, value: "Hospital/Clinic", nyscmp: true, oefoutreach:true, oefcbt:true  },
  { id: 7, value: "Local neighborhood small business", nyscmp: true, oefoutreach:false, oefcbt:true },
  { id: 8, value: "Park/Playground", nyscmp: true, oefoutreach:false, oefcbt:true },
  { id: 9, value: "Public housing location", nyscmp: true, oefoutreach:true, oefcbt:true  },
  { id: 10, value: "Public transportation hub or station", nyscmp: true, oefoutreach:false, oefcbt:true },
 { id: 12, value: "In the neighborhood/on the street", nyscmp: false, oefoutreach:true, oefcbt:true  },
 { id: 13, value: "Homeless Shelter", nyscmp: false, oefoutreach:true, oefcbt:true  },
 { id: 11, value: "Other", nyscmp: true, oefoutreach:true, oefcbt:true  },
];

export const onlineEventTypeName = [
  { id: 1, value: "Meeting", nyscmp: true },
  { id: 2, value: "Town Hall", nyscmp: true },
  { id: 3, value: "Webinar", nyscmp: true },
  { id: 4, value: "Workshop/Training", nyscmp: true },
  { id: 5, value: "Capacity Building Training", nyscmp: false },
  { id: 6, value: "Community Advisory Board", nyscmp: false },
];


export const NYSZipCodesAndBoroughs = [
{zipcode:10001, borought:	'Manhattan'},
{zipcode:10001, borought:	'Manhattan'},
{zipcode:10002, borought:	'Manhattan'},
{zipcode:10002, borought:	'Manhattan'},
{zipcode:10003, borought:	'Manhattan'},
{zipcode:10003, borought:	'Manhattan'},
{zipcode:10004, borought:	'Manhattan'},
{zipcode:10004, borought:	'Manhattan'},
{zipcode:10005, borought:	'Manhattan'},
{zipcode:10005, borought:	'Manhattan'},
{zipcode:10006, borought:	'Manhattan'},
{zipcode:10006, borought:	'Manhattan'},
{zipcode:10007, borought:	'Manhattan'},
{zipcode:10007, borought:	'Manhattan'},
{zipcode:10009, borought:	'Manhattan'},
{zipcode:10009, borought:	'Manhattan'},
{zipcode:10010, borought:	'Manhattan'},
{zipcode:10010, borought:	'Manhattan'},
{zipcode:10011, borought:	'Manhattan'},
{zipcode:10011, borought:	'Manhattan'},
{zipcode:10012, borought:	'Manhattan'},
{zipcode:10012, borought:	'Manhattan'},
{zipcode:10013, borought:	'Manhattan'},
{zipcode:10013, borought:	'Manhattan'},
{zipcode:10014, borought:	'Manhattan'},
{zipcode:10014, borought:	'Manhattan'},
{zipcode:10015, borought:	'Manhattan'},
{zipcode:10015, borought:	'Manhattan'},
{zipcode:10016, borought:	'Manhattan'},
{zipcode:10016, borought:	'Manhattan'},
{zipcode:10017, borought:	'Manhattan'},
{zipcode:10017, borought:	'Manhattan'},
{zipcode:10018, borought:	'Manhattan'},
{zipcode:10018, borought:	'Manhattan'},
{zipcode:10019, borought:	'Manhattan'},
{zipcode:10019, borought:	'Manhattan'},
{zipcode:10020, borought:	'Manhattan'},
{zipcode:10020, borought:	'Manhattan'},
{zipcode:10021, borought:	'Manhattan'},
{zipcode:10021, borought:	'Manhattan'},
{zipcode:10022, borought:	'Manhattan'},
{zipcode:10022, borought:	'Manhattan'},
{zipcode:10023, borought:	'Manhattan'},
{zipcode:10023, borought:	'Manhattan'},
{zipcode:10024, borought:	'Manhattan'},
{zipcode:10024, borought:	'Manhattan'},
{zipcode:10025, borought:	'Manhattan'},
{zipcode:10025, borought:	'Manhattan'},
{zipcode:10026, borought:	'Manhattan'},
{zipcode:10026, borought:	'Manhattan'},
{zipcode:10027, borought:	'Manhattan'},
{zipcode:10027, borought:	'Manhattan'},
{zipcode:10028, borought:	'Manhattan'},
{zipcode:10028, borought:	'Manhattan'},
{zipcode:10029, borought:	'Manhattan'},
{zipcode:10029, borought:	'Manhattan'},
{zipcode:10030, borought:	'Manhattan'},
{zipcode:10030, borought:	'Manhattan'},
{zipcode:10031, borought:	'Manhattan'},
{zipcode:10031, borought:	'Manhattan'},
{zipcode:10032, borought:	'Manhattan'},
{zipcode:10032, borought:	'Manhattan'},
{zipcode:10033, borought:	'Manhattan'},
{zipcode:10033, borought:	'Manhattan'},
{zipcode:10034, borought:	'Manhattan'},
{zipcode:10034, borought:	'Manhattan'},
{zipcode:10035, borought:	'Manhattan'},
{zipcode:10035, borought:	'Manhattan'},
{zipcode:10036, borought:	'Manhattan'},
{zipcode:10036, borought:	'Manhattan'},
{zipcode:10037, borought:	'Manhattan'},
{zipcode:10037, borought:	'Manhattan'},
{zipcode:10038, borought:	'Manhattan'},
{zipcode:10038, borought:	'Manhattan'},
{zipcode:10039, borought:	'Manhattan'},
{zipcode:10039, borought:	'Manhattan'},
{zipcode:10040, borought:	'Manhattan'},
{zipcode:10040, borought:	'Manhattan'},
{zipcode:10041, borought:	'Manhattan'},
{zipcode:10041, borought:	'Manhattan'},
{zipcode:10044, borought:	'Manhattan'},
{zipcode:10044, borought:	'Manhattan'},
{zipcode:10045, borought:	'Manhattan'},
{zipcode:10045, borought:	'Manhattan'},
{zipcode:10048, borought:	'Manhattan'},
{zipcode:10048, borought:	'Manhattan'},
{zipcode:10055, borought:	'Manhattan'},
{zipcode:10055, borought:	'Manhattan'},
{zipcode:10060, borought:	'Manhattan'},
{zipcode:10060, borought:	'Manhattan'},
{zipcode:10069, borought:	'Manhattan'},
{zipcode:10069, borought:	'Manhattan'},
{zipcode:10090, borought:	'Manhattan'},
{zipcode:10090, borought:	'Manhattan'},
{zipcode:10095, borought:	'Manhattan'},
{zipcode:10095, borought:	'Manhattan'},
{zipcode:10098, borought:	'Manhattan'},
{zipcode:10098, borought:	'Manhattan'},
{zipcode:10099, borought:	'Manhattan'},
{zipcode:10099, borought:	'Manhattan'},
{zipcode:10103, borought:	'Manhattan'},
{zipcode:10103, borought:	'Manhattan'},
{zipcode:10104, borought:	'Manhattan'},
{zipcode:10104, borought:	'Manhattan'},
{zipcode:10105, borought:	'Manhattan'},
{zipcode:10105, borought:	'Manhattan'},
{zipcode:10106, borought:	'Manhattan'},
{zipcode:10106, borought:	'Manhattan'},
{zipcode:10107, borought:	'Manhattan'},
{zipcode:10107, borought:	'Manhattan'},
{zipcode:10110, borought:	'Manhattan'},
{zipcode:10110, borought:	'Manhattan'},
{zipcode:10111, borought:	'Manhattan'},
{zipcode:10111, borought:	'Manhattan'},
{zipcode:10112, borought:	'Manhattan'},
{zipcode:10112, borought:	'Manhattan'},
{zipcode:10115, borought:	'Manhattan'},
{zipcode:10115, borought:	'Manhattan'},
{zipcode:10118, borought:	'Manhattan'},
{zipcode:10118, borought:	'Manhattan'},
{zipcode:10119, borought:	'Manhattan'},
{zipcode:10119, borought:	'Manhattan'},
{zipcode:10120, borought:	'Manhattan'},
{zipcode:10120, borought:	'Manhattan'},
{zipcode:10121, borought:	'Manhattan'},
{zipcode:10121, borought:	'Manhattan'},
{zipcode:10122, borought:	'Manhattan'},
{zipcode:10122, borought:	'Manhattan'},
{zipcode:10123, borought:	'Manhattan'},
{zipcode:10123, borought:	'Manhattan'},
{zipcode:10128, borought:	'Manhattan'},
{zipcode:10128, borought:	'Manhattan'},
{zipcode:10151, borought:	'Manhattan'},
{zipcode:10151, borought:	'Manhattan'},
{zipcode:10152, borought:	'Manhattan'},
{zipcode:10152, borought:	'Manhattan'},
{zipcode:10153, borought:	'Manhattan'},
{zipcode:10153, borought:	'Manhattan'},
{zipcode:10154, borought:	'Manhattan'},
{zipcode:10154, borought:	'Manhattan'},
{zipcode:10155, borought:	'Manhattan'},
{zipcode:10155, borought:	'Manhattan'},
{zipcode:10158, borought:	'Manhattan'},
{zipcode:10158, borought:	'Manhattan'},
{zipcode:10161, borought:	'Manhattan'},
{zipcode:10161, borought:	'Manhattan'},
{zipcode:10162, borought:	'Manhattan'},
{zipcode:10162, borought:	'Manhattan'},
{zipcode:10165, borought:	'Manhattan'},
{zipcode:10165, borought:	'Manhattan'},
{zipcode:10166, borought:	'Manhattan'},
{zipcode:10166, borought:	'Manhattan'},
{zipcode:10167, borought:	'Manhattan'},
{zipcode:10167, borought:	'Manhattan'},
{zipcode:10168, borought:	'Manhattan'},
{zipcode:10168, borought:	'Manhattan'},
{zipcode:10169, borought:	'Manhattan'},
{zipcode:10169, borought:	'Manhattan'},
{zipcode:10170, borought:	'Manhattan'},
{zipcode:10170, borought:	'Manhattan'},
{zipcode:10171, borought:	'Manhattan'},
{zipcode:10171, borought:	'Manhattan'},
{zipcode:10172, borought:	'Manhattan'},
{zipcode:10172, borought:	'Manhattan'},
{zipcode:10173, borought:	'Manhattan'},
{zipcode:10173, borought:	'Manhattan'},
{zipcode:10174, borought:	'Manhattan'},
{zipcode:10174, borought:	'Manhattan'},
{zipcode:10175, borought:	'Manhattan'},
{zipcode:10175, borought:	'Manhattan'},
{zipcode:10176, borought:	'Manhattan'},
{zipcode:10176, borought:	'Manhattan'},
{zipcode:10177, borought:	'Manhattan'},
{zipcode:10177, borought:	'Manhattan'},
{zipcode:10178, borought:	'Manhattan'},
{zipcode:10178, borought:	'Manhattan'},
{zipcode:10199, borought:	'Manhattan'},
{zipcode:10199, borought:	'Manhattan'},
{zipcode:10270, borought:	'Manhattan'},
{zipcode:10270, borought:	'Manhattan'},
{zipcode:10271, borought:	'Manhattan'},
{zipcode:10271, borought:	'Manhattan'},
{zipcode:10278, borought:	'Manhattan'},
{zipcode:10278, borought:	'Manhattan'},
{zipcode:10279, borought:	'Manhattan'},
{zipcode:10279, borought:	'Manhattan'},
{zipcode:10280, borought:	'Manhattan'},
{zipcode:10280, borought:	'Manhattan'},
{zipcode:10281, borought:	'Manhattan'},
{zipcode:10281, borought:	'Manhattan'},
{zipcode:10282, borought:	'Manhattan'},
{zipcode:10282, borought:	'Manhattan'},
{zipcode:10301, borought: 'Staten Island'},
{zipcode:10301, borought: 'Staten Island'},
{zipcode:10302, borought: 'Staten Island'},
{zipcode:10302, borought: 'Staten Island'},
{zipcode:10303, borought: 'Staten Island'},
{zipcode:10303, borought: 'Staten Island'},
{zipcode:10304, borought: 'Staten Island'},
{zipcode:10304, borought: 'Staten Island'},
{zipcode:10305, borought: 'Staten Island'},
{zipcode:10305, borought: 'Staten Island'},
{zipcode:10306, borought: 'Staten Island'},
{zipcode:10306, borought: 'Staten Island'},
{zipcode:10307, borought: 'Staten Island'},
{zipcode:10307, borought: 'Staten Island'},
{zipcode:10308, borought: 'Staten Island'},
{zipcode:10308, borought: 'Staten Island'},
{zipcode:10309, borought: 'Staten Island'},
{zipcode:10309, borought: 'Staten Island'},
{zipcode:10310, borought: 'Staten Island'},
{zipcode:10310, borought: 'Staten Island'},
{zipcode:10311, borought: 'Staten Island'},
{zipcode:10311, borought: 'Staten Island'},
{zipcode:10312, borought: 'Staten Island'},
{zipcode:10312, borought: 'Staten Island'},
{zipcode:10314, borought: 'Staten Island'},
{zipcode:10314, borought: 'Staten Island'},
{zipcode:10451, borought:	'Bronx'},
{zipcode:10451, borought:	'Bronx'},
{zipcode:10452, borought:	'Bronx'},
{zipcode:10452, borought:	'Bronx'},
{zipcode:10453, borought:	'Bronx'},
{zipcode:10453, borought:	'Bronx'},
{zipcode:10454, borought:	'Bronx'},
{zipcode:10454, borought:	'Bronx'},
{zipcode:10455, borought:	'Bronx'},
{zipcode:10455, borought:	'Bronx'},
{zipcode:10456, borought:	'Bronx'},
{zipcode:10456, borought:	'Bronx'},
{zipcode:10457, borought:	'Bronx'},
{zipcode:10457, borought:	'Bronx'},
{zipcode:10458, borought:	'Bronx'},
{zipcode:10458, borought:	'Bronx'},
{zipcode:10459, borought:	'Bronx'},
{zipcode:10459, borought:	'Bronx'},
{zipcode:10460, borought:	'Bronx'},
{zipcode:10460, borought:	'Bronx'},
{zipcode:10461, borought:	'Bronx'},
{zipcode:10461, borought:	'Bronx'},
{zipcode:10462, borought:	'Bronx'},
{zipcode:10462, borought:	'Bronx'},
{zipcode:10463, borought:	'Bronx'},
{zipcode:10463, borought:	'Bronx'},
{zipcode:10464, borought:	'Bronx'},
{zipcode:10464, borought:	'Bronx'},
{zipcode:10465, borought:	'Bronx'},
{zipcode:10465, borought:	'Bronx'},
{zipcode:10466, borought:	'Bronx'},
{zipcode:10466, borought:	'Bronx'},
{zipcode:10467, borought:	'Bronx'},
{zipcode:10467, borought:	'Bronx'},
{zipcode:10468, borought:	'Bronx'},
{zipcode:10468, borought:	'Bronx'},
{zipcode:10469, borought:	'Bronx'},
{zipcode:10469, borought:	'Bronx'},
{zipcode:10470, borought:	'Bronx'},
{zipcode:10470, borought:	'Bronx'},
{zipcode:10471, borought:	'Bronx'},
{zipcode:10471, borought:	'Bronx'},
{zipcode:10472, borought:	'Bronx'},
{zipcode:10472, borought:	'Bronx'},
{zipcode:10473, borought:	'Bronx'},
{zipcode:10473, borought:	'Bronx'},
{zipcode:10474, borought:	'Bronx'},
{zipcode:10474, borought:	'Bronx'},
{zipcode:10475, borought:	'Bronx'},
{zipcode:10475, borought:	'Bronx'},
{zipcode:11004, borought:	'Queens'},
{zipcode:11004, borought:	'Queens'},
{zipcode:11101, borought:	'Queens'},
{zipcode:11101, borought:	'Queens'},
{zipcode:11102, borought:	'Queens'},
{zipcode:11102, borought:	'Queens'},
{zipcode:11103, borought:	'Queens'},
{zipcode:11103, borought:	'Queens'},
{zipcode:11104, borought:	'Queens'},
{zipcode:11104, borought:	'Queens'},
{zipcode:11105, borought:	'Queens'},
{zipcode:11105, borought:	'Queens'},
{zipcode:11106, borought:	'Queens'},
{zipcode:11106, borought:	'Queens'},
{zipcode:11109, borought:	'Queens'},
{zipcode:11109, borought:	'Queens'},
{zipcode:11201, borought:	'Brooklyn'},
{zipcode:11201, borought:	'Brooklyn'},
{zipcode:11203, borought:	'Brooklyn'},
{zipcode:11203, borought:	'Brooklyn'},
{zipcode:11204, borought:	'Brooklyn'},
{zipcode:11204, borought:	'Brooklyn'},
{zipcode:11205, borought:	'Brooklyn'},
{zipcode:11205, borought:	'Brooklyn'},
{zipcode:11206, borought:	'Brooklyn'},
{zipcode:11206, borought:	'Brooklyn'},
{zipcode:11207, borought:	'Brooklyn'},
{zipcode:11207, borought:	'Brooklyn'},
{zipcode:11208, borought:	'Brooklyn'},
{zipcode:11208, borought:	'Brooklyn'},
{zipcode:11209, borought:	'Brooklyn'},
{zipcode:11209, borought:	'Brooklyn'},
{zipcode:11210, borought:	'Brooklyn'},
{zipcode:11210, borought:	'Brooklyn'},
{zipcode:11211, borought:	'Brooklyn'},
{zipcode:11211, borought:	'Brooklyn'},
{zipcode:11212, borought:	'Brooklyn'},
{zipcode:11212, borought:	'Brooklyn'},
{zipcode:11213, borought:	'Brooklyn'},
{zipcode:11213, borought:	'Brooklyn'},
{zipcode:11214, borought:	'Brooklyn'},
{zipcode:11214, borought:	'Brooklyn'},
{zipcode:11215, borought:	'Brooklyn'},
{zipcode:11215, borought:	'Brooklyn'},
{zipcode:11216, borought:	'Brooklyn'},
{zipcode:11216, borought:	'Brooklyn'},
{zipcode:11217, borought:	'Brooklyn'},
{zipcode:11217, borought:	'Brooklyn'},
{zipcode:11218, borought:	'Brooklyn'},
{zipcode:11218, borought:	'Brooklyn'},
{zipcode:11219, borought:	'Brooklyn'},
{zipcode:11219, borought:	'Brooklyn'},
{zipcode:11220, borought:	'Brooklyn'},
{zipcode:11220, borought:	'Brooklyn'},
{zipcode:11221, borought:	'Brooklyn'},
{zipcode:11221, borought:	'Brooklyn'},
{zipcode:11222, borought:	'Brooklyn'},
{zipcode:11222, borought:	'Brooklyn'},
{zipcode:11223, borought:	'Brooklyn'},
{zipcode:11223, borought:	'Brooklyn'},
{zipcode:11224, borought:	'Brooklyn'},
{zipcode:11224, borought:	'Brooklyn'},
{zipcode:11225, borought:	'Brooklyn'},
{zipcode:11225, borought:	'Brooklyn'},
{zipcode:11226, borought:	'Brooklyn'},
{zipcode:11226, borought:	'Brooklyn'},
{zipcode:11228, borought:	'Brooklyn'},
{zipcode:11228, borought:	'Brooklyn'},
{zipcode:11229, borought:	'Brooklyn'},
{zipcode:11229, borought:	'Brooklyn'},
{zipcode:11230, borought:	'Brooklyn'},
{zipcode:11230, borought:	'Brooklyn'},
{zipcode:11231, borought:	'Brooklyn'},
{zipcode:11231, borought:	'Brooklyn'},
{zipcode:11232, borought:	'Brooklyn'},
{zipcode:11232, borought:	'Brooklyn'},
{zipcode:11233, borought:	'Brooklyn'},
{zipcode:11233, borought:	'Brooklyn'},
{zipcode:11234, borought:	'Brooklyn'},
{zipcode:11234, borought:	'Brooklyn'},
{zipcode:11235, borought:	'Brooklyn'},
{zipcode:11235, borought:	'Brooklyn'},
{zipcode:11236, borought:	'Brooklyn'},
{zipcode:11236, borought:	'Brooklyn'},
{zipcode:11237, borought:	'Brooklyn'},
{zipcode:11237, borought:	'Brooklyn'},
{zipcode:11238, borought:	'Brooklyn'},
{zipcode:11238, borought:	'Brooklyn'},
{zipcode:11239, borought:	'Brooklyn'},
{zipcode:11239, borought:	'Brooklyn'},
{zipcode:11241, borought:	'Brooklyn'},
{zipcode:11241, borought:	'Brooklyn'},
{zipcode:11242, borought:	'Brooklyn'},
{zipcode:11242, borought:	'Brooklyn'},
{zipcode:11243, borought:	'Brooklyn'},
{zipcode:11243, borought:	'Brooklyn'},
{zipcode:11249, borought:	'Brooklyn'},
{zipcode:11249, borought:	'Brooklyn'},
{zipcode:11252, borought:	'Brooklyn'},
{zipcode:11252, borought:	'Brooklyn'},
{zipcode:11256, borought:	'Brooklyn'},
{zipcode:11256, borought:	'Brooklyn'},
{zipcode:11351, borought:	'Queens'},
{zipcode:11351, borought:	'Queens'},
{zipcode:11354, borought:	'Queens'},
{zipcode:11354, borought:	'Queens'},
{zipcode:11355, borought:	'Queens'},
{zipcode:11355, borought:	'Queens'},
{zipcode:11356, borought:	'Queens'},
{zipcode:11356, borought:	'Queens'},
{zipcode:11357, borought:	'Queens'},
{zipcode:11357, borought:	'Queens'},
{zipcode:11358, borought:	'Queens'},
{zipcode:11358, borought:	'Queens'},
{zipcode:11359, borought:	'Queens'},
{zipcode:11359, borought:	'Queens'},
{zipcode:11360, borought:	'Queens'},
{zipcode:11360, borought:	'Queens'},
{zipcode:11361, borought:	'Queens'},
{zipcode:11361, borought:	'Queens'},
{zipcode:11362, borought:	'Queens'},
{zipcode:11362, borought:	'Queens'},
{zipcode:11363, borought:	'Queens'},
{zipcode:11363, borought:	'Queens'},
{zipcode:11364, borought:	'Queens'},
{zipcode:11364, borought:	'Queens'},
{zipcode:11365, borought:	'Queens'},
{zipcode:11365, borought:	'Queens'},
{zipcode:11366, borought:	'Queens'},
{zipcode:11366, borought:	'Queens'},
{zipcode:11367, borought:	'Queens'},
{zipcode:11367, borought:	'Queens'},
{zipcode:11368, borought:	'Queens'},
{zipcode:11368, borought:	'Queens'},
{zipcode:11369, borought:	'Queens'},
{zipcode:11369, borought:	'Queens'},
{zipcode:11370, borought:	'Queens'},
{zipcode:11370, borought:	'Queens'},
{zipcode:11371, borought:	'Queens'},
{zipcode:11371, borought:	'Queens'},
{zipcode:11372, borought:	'Queens'},
{zipcode:11372, borought:	'Queens'},
{zipcode:11373, borought:	'Queens'},
{zipcode:11373, borought:	'Queens'},
{zipcode:11374, borought:	'Queens'},
{zipcode:11374, borought:	'Queens'},
{zipcode:11375, borought:	'Queens'},
{zipcode:11375, borought:	'Queens'},
{zipcode:11377, borought:	'Queens'},
{zipcode:11377, borought:	'Queens'},
{zipcode:11378, borought:	'Queens'},
{zipcode:11378, borought:	'Queens'},
{zipcode:11379, borought:	'Queens'},
{zipcode:11379, borought:	'Queens'},
{zipcode:11385, borought:	'Queens'},
{zipcode:11385, borought:	'Queens'},
{zipcode:11411, borought:	'Queens'},
{zipcode:11411, borought:	'Queens'},
{zipcode:11412, borought:	'Queens'},
{zipcode:11412, borought:	'Queens'},
{zipcode:11413, borought:	'Queens'},
{zipcode:11413, borought:	'Queens'},
{zipcode:11414, borought:	'Queens'},
{zipcode:11414, borought:	'Queens'},
{zipcode:11415, borought:	'Queens'},
{zipcode:11415, borought:	'Queens'},
{zipcode:11416, borought:	'Queens'},
{zipcode:11416, borought:	'Queens'},
{zipcode:11417, borought:	'Queens'},
{zipcode:11417, borought:	'Queens'},
{zipcode:11418, borought:	'Queens'},
{zipcode:11418, borought:	'Queens'},
{zipcode:11419, borought:	'Queens'},
{zipcode:11419, borought:	'Queens'},
{zipcode:11420, borought:	'Queens'},
{zipcode:11420, borought:	'Queens'},
{zipcode:11421, borought:	'Queens'},
{zipcode:11421, borought:	'Queens'},
{zipcode:11422, borought:	'Queens'},
{zipcode:11422, borought:	'Queens'},
{zipcode:11423, borought:	'Queens'},
{zipcode:11423, borought:	'Queens'},
{zipcode:11426, borought:	'Queens'},
{zipcode:11426, borought:	'Queens'},
{zipcode:11427, borought:	'Queens'},
{zipcode:11427, borought:	'Queens'},
{zipcode:11428, borought:	'Queens'},
{zipcode:11428, borought:	'Queens'},
{zipcode:11429, borought:	'Queens'},
{zipcode:11429, borought:	'Queens'},
{zipcode:11430, borought:	'Queens'},
{zipcode:11430, borought:	'Queens'},
{zipcode:11432, borought:	'Queens'},
{zipcode:11432, borought:	'Queens'},
{zipcode:11433, borought:	'Queens'},
{zipcode:11433, borought:	'Queens'},
{zipcode:11434, borought:	'Queens'},
{zipcode:11434, borought:	'Queens'},
{zipcode:11435, borought:	'Queens'},
{zipcode:11435, borought:	'Queens'},
{zipcode:11436, borought:	'Queens'},
{zipcode:11436, borought:	'Queens'},
{zipcode:11691, borought:	'Queens'},
{zipcode:11691, borought:	'Queens'},
{zipcode:11692, borought:	'Queens'},
{zipcode:11692, borought:	'Queens'},
{zipcode:11693, borought:	'Queens'},
{zipcode:11693, borought:	'Queens'},
{zipcode:11694, borought:	'Queens'},
{zipcode:11694, borought:	'Queens'},
{zipcode:11697, borought:	'Queens'},
{zipcode:11697, borought:	'Queens'},
]