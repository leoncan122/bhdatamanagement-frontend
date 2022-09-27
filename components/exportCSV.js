import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
const orderDataset = (data) => {
  return [
    data.name,
    data.lastname,
    data.workarea,
    data.workareaother,
    data.mainrole,
    data.nysactivity,
    data.nysprograms,
    data.eventdate,
    data.eventstarttime,
    data.eventfinishtime,
    data.eventtypename,
    data.eventlocationtypename,
    data.otherorganizations,
    data.zipcode,
    data.locationaddress,
    data.locationname,
    data.totalattendees,
    data.masks,
    data.covidliterature,
    data.vaccinerelatedliterature,
    data.hivliterature,
    data.hepcliterature,
    data.prepliterature,
    data.safersexkits,
    data.healthdisparitiesliterature,
    data.handsanitizers,
    data.malecondoms,
    data.femalecondoms,
    data.referrallists,
    data.dentaldam,
    data.promotionalmaterial,
    data.hivtesting,
    data.stitesting,
    data.hepctesting,
    data.bloodpressuretesting,
    data.cholesteroltesting,
    data.covidtesting,
    data.othertesting,
    data.hivtestingagency,
    data.hivtestedtotal,
    data.hivreactiveresults,
    data.prepreferrals,
    data.hivlinkedtocare,
    data.hivservicesreferredto,
    data.hivfemale,
    data.hivmale,
    data.hivtransgenderfemale,
    data.hivtransgendermale,
    data.hivgendernonconforming,
    data.hivnonbinary,
    data.hivothergenderidentity,
    data.hivgendernotsurequestioning,
    data.hivgenderdeclinedtoanswer,
    data.altagehivunder13,
    data.altagehiv13_18,
    data.altagehiv19_24,
    data.hiv25_29,
    data.hiv30_34,
    data.hiv35_39,
    data.hiv40_44,
    data.hiv45_49,
    data.hiv50_54,
    data.hiv55_59,
    data.hiv60_64,
    data.hiv65_69,
    data.hiv70,
    data.hivblackorafricanamerican,
    data.hivhispanic,
    data.hivasian,
    data.hivamericanindianoralaskanative,
    data.hivmiddleeasternornorthafrican,
    data.hivnativehawaiianorotherpacificislander,
    data.hivwhite,
    data.hivsomeotherrace,
    data.hivracedeclinedtoanswer,
    data.hivmorethanonerace,
    data.hivnothispanic,
    data.hivmexicanmexicanamericanorchicano,
    data.hivpuertorican,
    data.hivcuban,
    data.hivdominican,
    data.hivecuadorian,
    data.hivotherhispanic,
    data.hivethnicitydeclinedtoanswer,
    data.hivgayorlesbian,
    data.hivstraightorheterosexual,
    data.hivbisexual,
    data.hivqueer,
    data.hivquestioningornotsure,
    data.hivsexualorientationunknown,
    data.hivsexualorientationdeclinedtoanswer,
    data.stitestingagency,
    data.stitestedtotal,
    data.stireactiveresults,
    data.stilinkedtocare,
    data.stiservicesreferredto,
    data.stifemale,
    data.stimale,
    data.stitransgenderfemale,
    data.stitransgendermale,
    data.stigendernonconforming,
    data.stinonbinary,
    data.stiothergenderidentity,
    data.stigendernotsurequestioning,
    data.stigenderdeclinedtoanswer,
    data.altagestiunder13,
    data.altagesti,
    data.altagesti,
    data.sti25_29,
    data.sti30_34,
    data.sti35_39,
    data.sti40_44,
    data.sti45_49,
    data.sti50_54,
    data.sti55_59,
    data.sti60_64,
    data.sti65_69,
    data.sti70,
    data.stiblackorafricanamerican,
    data.stihispanic,
    data.stiasian,
    data.stiamericanindianoralaskanative,
    data.stimiddleeasternornorthafrican,
    data.stinativehawaiianorotherpacificislander,
    data.stiwhite,
    data.stisomeotherrace,
    data.stiracedeclinedtoanswer,
    data.stimorethanonerace,
    data.stinothispanic,
    data.stimexicanmexicanamericanorchicano,
    data.stipuertorican,
    data.sticuban,
    data.stidominican,
    data.stiecuadorian,
    data.stiotherhispanic,
    data.stiethnicitydeclinedtoanswer,
    data.stigayorlesbian,
    data.stistraightorheterosexual,
    data.stibisexual,
    data.stiqueer,
    data.stiquestioningornotsure,
    data.stisexualorientationunknown,
    data.stisexualorientationdeclinedtoanswer,
    data.hepctestingagency,
    data.hepctestedtotal,
    data.hepclinkedtocare,
    data.hepcservicesreferredto,
    data.hepcfemale,
    data.hepcmale,
    data.hepctransgenderfemale,
    data.hepctransgendermale,
    data.hepcgendernonconforming,
    data.hepcnonbinary,
    data.hepcothergenderidentity,
    data.hepcgendernotsurequestioning,
    data.hepcgenderdeclinedtoanswer,
    data.altagehepcunder13,
    data.altagehepc13_18,
    data.altagehepc19_24,
    data.hepc25_29,
    data.hepc30_34,
    data.hepc35_39,
    data.hepc40_44,
    data.hepc45_49,
    data.hepc50_54,
    data.hepc55_59,
    data.hepc60_64,
    data.hepc65_69,
    data.hepc70,
    data.hepcblackorafricanamerican,
    data.hepchispanic,
    data.hepcasian,
    data.hepcamericanindianoralaskanative,
    data.hepcmiddleeasternornorthafrican,
    data.hepcnativehawaiianorotherpacificislander,
    data.hepcwhite,
    data.hepcsomeotherrace,
    data.hepcracedeclinedtoanswer,
    data.hepcmorethanonerace,
    data.hepcnothispanic,
    data.hepcmexicanmexicanamericanorchicano,
    data.hepcpuertorican,
    data.hepccuban,
    data.hepcdominican,
    data.hepcecuadorian,
    data.hepcotherhispanic,
    data.hepcethnicitydeclinedtoanswer,
    data.hepcgayorlesbian,
    data.hepcstraightorheterosexual,
    data.hepcbisexual,
    data.hepcqueer,
    data.hepcquestioningornotsure,
    data.hepcsexualorientationunknown,
    data.hepcsexualorientationdeclinedtoanswer,
    data.covidtestingagency,
    data.covidtestedtotal,
    data.healthareaoffocusname,
    data.staffpresent,
    data.internpresent,
    data.adultvolunteers,
    data.youthvolunteers,
    data.languages,
    data.participantregistrationform,
    data.eventstartedontime,
    data.eventfinishedontime,
    data.participantgreeted,
    data.resourcesavailable,
    data.photorelease,
    data.handsanitizeravailable,
    data.remindersafespace,
    data.reminderpostevaluationsurvey,
    data.textorcall,
    data.sendemail,
    data.eventhighlights,
    data.eventchallenges,
    data.nysprimaryriskgroup,
    data.staffpresentnames,
    data.additionalzipcodes,
    data.sessionpresenter,
    data.nameguestspeakers
  ];
};

const ExportCSV = ({ csvData, fileName }) => {
  console.log("csv data",csvData)
  const [orderedData, setOrdereData] = useState([]);
  const headers = [
    "UserFirstName",
    "UserLastName",
    "workArea",
    "workAreaOther",
    "mainRoleName",
    "nysActivity",
    "nysPrograms",
    "eventDate",
    "eventStartTime",
    "eventFinishTime",
    "eventTypeName",
    "eventLocationTypeName",
    "otherOrganizations",
    "zipCode",
    "locationAddress",
    "locationName",
    "totalAttendees",
    "masks",
    "covidLiterature",
    "vaccineRelatedLiterature",
    "hivLiterature",
    "hepCLiterature",
    "prepLiterature",
    "saferSexKits",
    "healthDisparitiesLiterature",
    "handSanitizers",
    "maleCondoms",
    "femaleCondoms",
    "referralLists",
    "dentalDam",
    "promotionalMaterial",
    "hivTesting",
    "stiTesting",
    "hepCTesting",
    "bloodPressureTesting",
    "cholesterolTesting",
    "covidTesting",
    "otherTesting",
    "hivTestingAgency",
    "hivTestedTotal",
    "hivReactiveResults",
    "prepReferrals",
    "hivLinkedToCare",
    "hivServicesReferredTo",
    "hivFemale",
    "hivMale",
    "hivTransgenderFemale",
    "hivTransgenderMale",
    "hivGenderNonConforming",
    "hivNonBinary",
    "hivOtherGenderIdentity",
    "hivGenderNotSureQuestioning",
    "hivGenderDeclinedToAnswer",
    "altAgeHivUnder13",
    "altAgeHiv13_18",
    "altAgeHiv19_24",
    "hiv25-29",
    "hiv30-34",
    "hiv35-39",
    "hiv40-44",
    "hiv45-49",
    "hiv50-54",
    "hiv55-59",
    "hiv60-64",
    "hiv65-69",
    "hiv70+",
    "hivBlackOrAfricanAmerican",
    "hivHispanic",
    "hivAsian",
    "hivAmericanIndianOrAlaskaNative",
    "hivMiddleEasternOrNorthAfrican",
    "hivNativeHawaiianOrOtherPacificIslander",
    "hivWhite",
    "hivSomeOtherRace",
    "hivRaceDeclinedToAnswer",
    "hivMoreThanOneRace",
    "hivNotHispanic",
    "hivMexicanMexicanAmericanOrChicano",
    "hivPuertoRican",
    "hivCuban",
    "hivDominican",
    "hivEcuadorian",
    "hivOtherHispanic",
    "hivEthnicityDeclinedToAnswer",
    "hivGayOrLesbian",
    "hivStraightOrHeterosexual",
    "hivBisexual",
    "hivQueer",
    "hivQuestioningOrNotSure",
    "hivSexualOrientationUnknown",
    "hivSexualOrientationDeclinedToAnswer",
    "stiTestingAgency",
    "stiTestedTotal",
    "stiReactiveResults",
    "stiLinkedToCare",
    "stiServicesReferredTo",
    "stiFemale",
    "stiMale",
    "stiTransgenderFemale",
    "stiTransgenderMale",
    "stiGenderNonConforming",
    "stiNonBinary",
    "stiOtherGenderIdentity",
    "stiGenderNotSureQuestioning",
    "stiGenderDeclinedToAnswer",
    "altAgeStiUnder13",
    "altAgeSti13_18",
    "altAgeSti19_24",
    "sti25-29",
    "sti30-34",
    "sti35-39",
    "sti40-44",
    "sti45-49",
    "sti50-54",
    "sti55-59",
    "sti60-64",
    "sti65-69",
    "sti70+",
    "stiBlackOrAfricanAmerican",
    "stiHispanic",
    "stiAsian",
    "stiAmericanIndianOrAlaskaNative",
    "stiMiddleEasternOrNorthAfrican",
    "stiNativeHawaiianOrOtherPacificIslander",
    "stiWhite",
    "stiSomeOtherRace",
    "stiRaceDeclinedToAnswer",
    "stiMoreThanOneRace",
    "stiNotHispanic",
    "stiMexicanMexicanAmericanOrChicano",
    "stiPuertoRican",
    "stiCuban",
    "stiDominican",
    "stiEcuadorian",
    "stiOtherHispanic",
    "stiEthnicityDeclinedToAnswer",
    "stiGayOrLesbian",
    "stiStraightOrHeterosexual",
    "stiBisexual",
    "stiQueer",
    "stiQuestioningOrNotSure",
    "stiSexualOrientationUnknown",
    "stiSexualOrientationDeclinedToAnswer",
    "hepCTestingAgency",
    "hepCTestedTotal",
    "hepCLinkedToCare",
    "hepCServicesReferredTo",
    "hepCFemale",
    "hepCMale",
    "hepCTransgenderFemale",
    "hepCTransgenderMale",
    "hepCGenderNonConforming",
    "hepCNonBinary",
    "hepCOtherGenderIdentity",
    "hepCGenderNotSureQuestioning",
    "hepCGenderDeclinedToAnswer",
    "altAgeHepCUnder13",
    "altAgeHepC13_18",
    "altAgeHepC19_24",
    "hepC25-29",
    "hepC30-34",
    "hepC35-39",
    "hepC40-44",
    "hepC45-49",
    "hepC50-54",
    "hepC55-59",
    "hepC60-64",
    "hepC65-69",
    "hepC70+",
    "hepCBlackOrAfricanAmerican",
    "hepCHispanic",
    "hepCAsian",
    "hepCAmericanIndianOrAlaskaNative",
    "hepCMiddleEasternOrNorthAfrican",
    "hepCNativeHawaiianOrOtherPacificIslander",
    "hepCWhite",
    "hepCSomeOtherRace",
    "hepCRaceDeclinedToAnswer",
    "hepCMoreThanOneRace",
    "hepCNotHispanic",
    "hepCMexicanMexicanAmericanOrChicano",
    "hepCPuertoRican",
    "hepCCuban",
    "hepCDominican",
    "hepCEcuadorian",
    "hepCOtherHispanic",
    "hepCEthnicityDeclinedToAnswer",
    "hepCGayOrLesbian",
    "hepCStraightOrHeterosexual",
    "hepCBisexual",
    "hepCQueer",
    "hepCQuestioningOrNotSure",
    "hepCSexualOrietnationUnknown",
    "hepCSexualOrientationDeclinedToAnswer",
    "covidTestingAgency",
    "covidTestedTotal",
    "healthAreaOfFocusName",
    "staffPresent",
    "internPresent",
    "adultVolunteers",
    "youthVolunteers",
    "languages",
    "participantRegistrationForm",
    "eventStartedOnTime.",
    "eventFinishedOnTime",
    "participantGreeted",
    "resourcesAvailable.",
    "photoRelease",
    "handSanitizerAvailable",
    "reminderSafeSpace",
    "reminderPostEvaluationSurvey",
    "textOrCall",
    "sendEmail",
    "eventHighlights",
    "eventChallenges",
    "nysPrimaryRiskGroup",
    "staffPresentNames",
    "additionalZipCodes",
    "sessionPresenter",
    "nameGuestSpeakers"
      ];
  useEffect(() => {
    const data = csvData.map((dataset) => orderDataset(dataset));
    // console.log("selected", csvData);
    setOrdereData(data);
  }, [csvData]);

  return (
    <CSVLink  nk headers={headers} data={orderedData} filename={fileName} separator=",">
      <button className="text-2xl text-white bg-black rounded shadow-xl p-5 w-full md:w-52 h-full">
        DOWNLOAD CSV DATASET
      </button>
    </CSVLink>
  );
};

export default ExportCSV;
