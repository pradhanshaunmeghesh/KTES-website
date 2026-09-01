export interface MAVStaffRecord {
  sr: number;
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
  qualificationEn: string;
  appointmentDateEn: string;
  subjectEn: string;
  subjectMr: string;
}

// Category 1: Aided Teaching Staff (शिक्षक माहिती अनुदानित - 50 records)
export const MAV_AIDED_TEACHING_STAFF: MAVStaffRecord[] = [
  {
    sr: 1,
    nameEn: "Smt. Jadhav Rekha Chandrashekhar",
    nameMr: "श्रीम. जाधव रेखा चंद्रशेखर",
    designationEn: "Principal / मुख्याध्यापिका",
    designationMr: "मुख्याध्यापिका",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "03/08/1993",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 2,
    nameEn: "Mr. Nisrad Sopan Tatyaba",
    nameMr: "श्री. निसरड सोपान तात्याबा",
    designationEn: "Vice Principal / उपमुख्याध्यापक",
    designationMr: "उपमुख्याध्यापक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "01/12/1994",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 3,
    nameEn: "Mr. Muthe Haushiram Kamaji",
    nameMr: "श्री. मुठे हौशीराम कामाजी",
    designationEn: "Supervisor / पर्यवेक्षक",
    designationMr: "पर्यवेक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "01/12/1994",
    subjectEn: "Hindi, Geography",
    subjectMr: "हिंदी, भूगोल"
  },
  {
    sr: 4,
    nameEn: "Smt. Thakur Sunita Atul",
    nameMr: "सौ. ठाकूर सुनिता अतूल",
    designationEn: "Supervisor / पर्यवेक्षिका",
    designationMr: "पर्यवेक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "23/01/1996",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 5,
    nameEn: "Mr. Ghume Ravindra Dattatray",
    nameMr: "श्री. घुमे रवींद्र दत्तात्रय",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "24/01/1996",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 6,
    nameEn: "Mr. Ovhal Chandrakant Ananda",
    nameMr: "श्री. ओव्हाळ चंद्रकांत आनंदा",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. M.Ed",
    appointmentDateEn: "08/02/1996",
    subjectEn: "English, Marathi",
    subjectMr: "इंग्रजी, मराठी"
  },
  {
    sr: 7,
    nameEn: "Smt. Chavan Usha Pomu",
    nameMr: "सौ. चव्हाण उषा पोमू",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "02/08/1996",
    subjectEn: "Sanskrit, Hindi",
    subjectMr: "संस्कृत, हिंदी"
  },
  {
    sr: 8,
    nameEn: "Mr. Ghare Ganpat Kantilal",
    nameMr: "श्री. घारे गणपत कांतीलाल",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "05/08/1996",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 9,
    nameEn: "Mr. Shinde Sanjay Maruti",
    nameMr: "श्री. शिंदे संजय मारुती",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "18/11/1998",
    subjectEn: "English, Marathi",
    subjectMr: "इंग्रजी, मराठी"
  },
  {
    sr: 10,
    nameEn: "Mr. Shah Latif Sharif",
    nameMr: "श्री. शाह लतीफ शरीफ",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "18/11/1998",
    subjectEn: "English, Marathi",
    subjectMr: "इंग्रजी, मराठी"
  },
  {
    sr: 11,
    nameEn: "Smt. Shelar Kanchan Arvind",
    nameMr: "सौ. शेलार कांचन अरविंद",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "19/11/1998",
    subjectEn: "Science, Mathematics",
    subjectMr: "विज्ञान, गणित"
  },
  {
    sr: 12,
    nameEn: "Mr. Kale Subhash Baburao",
    nameMr: "श्री. काळे सुभाष बाबूराव",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "21/11/1998",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 13,
    nameEn: "Mr. Jaid Subhash Bhaguji",
    nameMr: "श्री. जैद सुभाष भागुजी",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "16/09/1999",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 14,
    nameEn: "Smt. Kalbhor Madhuri Mahendra",
    nameMr: "सौ. काळभोर माधुरी महेंद्र",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "22/07/2003",
    subjectEn: "English, Music Visharad",
    subjectMr: "इंग्रजी, संगीत विशारद"
  },
  {
    sr: 15,
    nameEn: "Mr. Sandbhor Ashok Sopan",
    nameMr: "श्री. सांडभोर अशोक सोपान",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.P.Ed",
    appointmentDateEn: "27/12/2001",
    subjectEn: "Physical Education",
    subjectMr: "शारीरिक शिक्षण"
  },
  {
    sr: 16,
    nameEn: "Mr. Thite Gulab Ramesh",
    nameMr: "श्री. थिटे गुलाब रमेश",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "H.S.C. D.Ed",
    appointmentDateEn: "25/07/2002",
    subjectEn: "Marathi, Hindi, History",
    subjectMr: "मराठी, हिंदी, इतिहास"
  },
  {
    sr: 17,
    nameEn: "Mr. Gawade Shailendra Bhagchand",
    nameMr: "श्री. गावडे शैलेंद्र भागचंद",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. D.Ed., B.Ed",
    appointmentDateEn: "26/07/2002",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 18,
    nameEn: "Smt. Godse Archana Mandar",
    nameMr: "सौ. गोडसे अर्चना मंदार",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "21/12/2001",
    subjectEn: "Marathi, Hindi, Sanskrit",
    subjectMr: "मराठी, हिंदी, संस्कृत"
  },
  {
    sr: 19,
    nameEn: "Mr. Inamdar Abdulrehman Jamal",
    nameMr: "श्री. इनामदार अब्दुलरहेमान जमाल",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "01/08/2002",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 20,
    nameEn: "Smt. Ghorpade Varsha Kishor",
    nameMr: "सौ. घोरपडे वर्षा किशोर",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "01/08/2002",
    subjectEn: "English, History",
    subjectMr: "इंग्रजी, इतिहास"
  },
  {
    sr: 21,
    nameEn: "Smt. Bhangare Ranjana Ganesh",
    nameMr: "सौ. भांगरे रंजना गणेश",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "H.S.C. D.Ed, M.A. B.Ed",
    appointmentDateEn: "01/07/1994",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 22,
    nameEn: "Mr. Gholap Tulsiram Shankar",
    nameMr: "श्री. घोलप तुळशीराम शंकर",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "27/12/2001",
    subjectEn: "Hindi",
    subjectMr: "हिंदी"
  },
  {
    sr: 23,
    nameEn: "Smt. Nikam Smita Ganesh",
    nameMr: "सौ. निकम स्मिता गणेश",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. D.Ed",
    appointmentDateEn: "15/09/2006",
    subjectEn: "Marathi, Environmental Studies",
    subjectMr: "मराठी, परिसर अभ्यास"
  },
  {
    sr: 24,
    nameEn: "Smt. Sale Reshma Machhindranath",
    nameMr: "सौ. साळे रेश्मा मच्छिंद्रनाथ",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "H.S.C. D.Ed, B.A. B.Ed",
    appointmentDateEn: "01/02/2001",
    subjectEn: "Science",
    subjectMr: "विज्ञान"
  },
  {
    sr: 25,
    nameEn: "Mr. Andhale Ramkrishna Bajarang",
    nameMr: "श्री. आंधळे रामकृष्ण बजरंग",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "27/08/2007",
    subjectEn: "Sanskrit",
    subjectMr: "संस्कृत"
  },
  {
    sr: 26,
    nameEn: "Smt. Naikare Sheela Satish",
    nameMr: "सौ. नाईकरे शीला सतीश",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "16/04/2008",
    subjectEn: "English, History",
    subjectMr: "इंग्रजी, इतिहास"
  },
  {
    sr: 27,
    nameEn: "Smt. Katle Sandhya Suresh",
    nameMr: "सौ. कातळे संध्या सुरेश",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "12/11/2008",
    subjectEn: "Science, Mathematics",
    subjectMr: "विज्ञान, गणित"
  },
  {
    sr: 28,
    nameEn: "Smt. Kalhatkar Sushma Vinod",
    nameMr: "सौ. कल्हाटकर सुषमा विनोद",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "12/11/2008",
    subjectEn: "English, Geography",
    subjectMr: "इंग्रजी, भूगोल"
  },
  {
    sr: 29,
    nameEn: "Mr. Ghanwat Ravindra Nivrutti",
    nameMr: "श्री. घनवट रवींद्र निवृत्ती",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "28/06/2010",
    subjectEn: "Science, Mathematics",
    subjectMr: "विज्ञान, गणित"
  },
  {
    sr: 30,
    nameEn: "Smt. Kapse Suvarna Santosh",
    nameMr: "सौ. कापसे सुवर्णा संतोष",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "02/08/2010",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 31,
    nameEn: "Mr. Gopale Kisan Shankar",
    nameMr: "श्री. गोपाळे किसन शंकर",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "A.T.D., Gd.Art",
    appointmentDateEn: "27/12/2001",
    subjectEn: "Drawing",
    subjectMr: "चित्रकला"
  },
  {
    sr: 32,
    nameEn: "Smt. Sane Neha Ninad",
    nameMr: "सौ. साने नेहा निनाद",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "01/03/2012",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 33,
    nameEn: "Smt. Jadhav Shilpa Ashok",
    nameMr: "सौ. जाधव शिल्पा अशोक",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "12/03/2012",
    subjectEn: "Science",
    subjectMr: "विज्ञान"
  },
  {
    sr: 34,
    nameEn: "Smt. Gutte Varsha Vishnu",
    nameMr: "सौ. गुट्टे वर्षा विष्णू",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. D.Ed, B.P.Ed",
    appointmentDateEn: "12/03/2012",
    subjectEn: "Hindi, Physical Education",
    subjectMr: "हिंदी, शारीरिक शिक्षण"
  },
  {
    sr: 35,
    nameEn: "Smt. Bhosale Varsha Manoj",
    nameMr: "सौ. भोसले वर्षा मनोज",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.Sc. B.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 36,
    nameEn: "Mr. Warkad Nitin Shivaji",
    nameMr: "श्री. वरकड नितीन शिवाजी",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.P.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "History, Physical Education",
    subjectMr: "इतिहास, शारीरिक शिक्षण"
  },
  {
    sr: 37,
    nameEn: "Smt. Sandbhor Aruna Bhanudas",
    nameMr: "सौ. सांडभोर अरुणा भानुदास",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "English, History",
    subjectMr: "इंग्रजी, इतिहास"
  },
  {
    sr: 38,
    nameEn: "Smt. Vayal Kavita Avinash",
    nameMr: "सौ. वायाळ कविता अविनाश",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "English, History",
    subjectMr: "इंग्रजी, इतिहास"
  },
  {
    sr: 39,
    nameEn: "Mr. Aivale Digambar Pandurang",
    nameMr: "श्री. ऐवळे दिगंबर पांडुरंग",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "Science, Mathematics",
    subjectMr: "विज्ञान, गणित"
  },
  {
    sr: 40,
    nameEn: "Smt. Kute Priya Prashant",
    nameMr: "सौ. कुटे प्रिया प्रशांत",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.Sc. B.Ed, M.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "Mathematics, Science",
    subjectMr: "गणित, विज्ञान"
  },
  {
    sr: 41,
    nameEn: "Smt. Lokhande Nayana Vilas",
    nameMr: "सौ. लोखंडे नयना विलास",
    designationEn: "Teacher / शिक्षक",
    designationMr: "शिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "01/09/2005",
    subjectEn: "Marathi, Mathematics",
    subjectMr: "मराठी, गणित"
  },
  {
    sr: 42,
    nameEn: "Smt. Bangar Namrata Pradip",
    nameMr: "सौ. बांगर नम्रता प्रदीप",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "14/09/2016",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 43,
    nameEn: "Mr. Shinde Shivraya Chandrakant",
    nameMr: "श्री. शिंदे शिवराया चंद्रकांत",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "19/10/2018",
    subjectEn: "English, Geography",
    subjectMr: "इंग्रजी, भूगोल"
  },
  {
    sr: 44,
    nameEn: "Smt. Gorade Pratipada Arun",
    nameMr: "सौ. गोरडे प्रतिपदा अरुण",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "17/06/2014",
    subjectEn: "English, Geography",
    subjectMr: "इंग्रजी, भूगोल"
  },
  {
    sr: 45,
    nameEn: "Mr. Shinde Jayant Rohidas",
    nameMr: "श्री. शिंदे जयंत रोहिदास",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "H.S.C. D.Ed",
    appointmentDateEn: "15/09/2006",
    subjectEn: "Science",
    subjectMr: "विज्ञान"
  },
  {
    sr: 46,
    nameEn: "Smt. Shinde Savita Sanjay",
    nameMr: "सौ. शिंदे सविता संजय",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "M.A. B.Ed (Phy)",
    appointmentDateEn: "13/02/2015",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 47,
    nameEn: "Mr. Sul Rajesh Sahebrao",
    nameMr: "श्री. सूळ राजेश साहेबराव",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "12/06/1995",
    subjectEn: "History, Geography",
    subjectMr: "इतिहास, भूगोल"
  },
  {
    sr: 48,
    nameEn: "Smt. Patil Swati Arjun",
    nameMr: "सौ. पाटील स्वाती अर्जुन",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "04/08/2025",
    subjectEn: "English",
    subjectMr: "इंग्रजी"
  },
  {
    sr: 49,
    nameEn: "Miss. Shinde Sonali Anil",
    nameMr: "श्रीम. शिंदे सोनाली अनिल",
    designationEn: "Assistant Teacher / उपशिक्षिका",
    designationMr: "उपशिक्षिका",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "04/08/2025",
    subjectEn: "English",
    subjectMr: "इंग्रजी"
  },
  {
    sr: 50,
    nameEn: "Mr. Wade Sachin Ashokrao",
    nameMr: "श्री. वाडे सचिन अशोकराव",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.S.W. D.Ed",
    appointmentDateEn: "07/08/2025",
    subjectEn: "History, Geography",
    subjectMr: "इतिहास, भूगोल"
  }
];

// Category 2: Aided Non-Teaching Staff (शिक्षकेतर माहिती अनुदानित - 4 records)
export const MAV_AIDED_NON_TEACHING_STAFF: MAVStaffRecord[] = [
  {
    sr: 1,
    nameEn: "Mr. Bharmal Arvind Chintaman",
    nameMr: "श्री. भारमळ अरविंद चिंतामण",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "B.A.",
    appointmentDateEn: "16/06/2011",
    subjectEn: "Head Clerk / मुख्यलिपीक",
    subjectMr: "मुख्यलिपीक"
  },
  {
    sr: 2,
    nameEn: "Mr. Pawar Ganesh Sudhakar",
    nameMr: "श्री. पवार गणेश सुधाकर",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "B.Com",
    appointmentDateEn: "01/02/2001",
    subjectEn: "Clerk / लिपीक",
    subjectMr: "लिपीक"
  },
  {
    sr: 3,
    nameEn: "Mr. Gujar Ashok Dattatraya",
    nameMr: "श्री. गुजर अशोक दत्तात्रय",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "M.A. M.Lib",
    appointmentDateEn: "-",
    subjectEn: "Librarian / ग्रंथपाल",
    subjectMr: "ग्रंथपाल"
  },
  {
    sr: 4,
    nameEn: "Mr. Shinde Suresh Musala",
    nameMr: "श्री. शिंदे सुरेश मुसळा",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "9th",
    appointmentDateEn: "06/10/1998",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  }
];

// Category 3: Unaided Teaching Staff (शिक्षक माहिती विनाअनुदानित - 27 records)
export const MAV_UNAIDED_TEACHING_STAFF: MAVStaffRecord[] = [
  {
    sr: 1,
    nameEn: "Sau. Sawant Urmila Dattatraya",
    nameMr: "सौ. सावंत उर्मिला दत्तात्रय",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A, B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 2,
    nameEn: "Sau. Dhavale Shital Kiran",
    nameMr: "सौ. ढवळे शितल किरण",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A, D.Ed, B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 3,
    nameEn: "Sau. Devkar Priyanka Babasaheb",
    nameMr: "सौ. देवकर प्रियांका बाबासाहेब",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "Hindi",
    subjectMr: "हिंदी"
  },
  {
    sr: 4,
    nameEn: "Sau. Patole Asmita Narendra",
    nameMr: "सौ. पाटोळे अस्मिता नरेंद्र",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 5,
    nameEn: "Ku. Mhasudge Nirmala Ramchand",
    nameMr: "कु. म्हसुडगे निर्मला रामचंद्र",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "English, Geography",
    subjectMr: "इंग्रजी, भूगोल"
  },
  {
    sr: 6,
    nameEn: "Smt. Burse Kanchan Lanku",
    nameMr: "श्रीम. बुरसे कांचन लंकू",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Com, B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Hindi",
    subjectMr: "हिंदी"
  },
  {
    sr: 7,
    nameEn: "Smt. Bhalerao Chhaya Sandeep",
    nameMr: "श्रीमती भालेराव छाया संदीप",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, Science, History",
    subjectMr: "मराठी, विज्ञान, इतिहास"
  },
  {
    sr: 8,
    nameEn: "Mr. Chavan Deepak Dnyaneshwar",
    nameMr: "श्री. चव्हाण दिपक ज्ञानेश्वर",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.P.Ed",
    appointmentDateEn: "-",
    subjectEn: "Physical Education, Geography",
    subjectMr: "शारीरिक शिक्षण, भूगोल"
  },
  {
    sr: 9,
    nameEn: "Sau. Sunita Nathu Kohinkar",
    nameMr: "सौ. सुनिता नाथू कोहिनकर",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "English, Geography",
    subjectMr: "इंग्रजी, भूगोल"
  },
  {
    sr: 10,
    nameEn: "Smt. Gaikwad Priyanka Hanumant",
    nameMr: "श्रीम. गायकवाड प्रियांका हनुमंत",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Science",
    subjectMr: "विज्ञान"
  },
  {
    sr: 11,
    nameEn: "Sau. Kobal Sima Milind",
    nameMr: "सौ. कोबल सिमा मिलिंद",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 12,
    nameEn: "Sau. Kahane Radha Jagdish",
    nameMr: "सौ. कहाणे राधा जगदीश",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "D.Ed, B.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "English",
    subjectMr: "इंग्रजी"
  },
  {
    sr: 13,
    nameEn: "Sau. Barne Pratibha Dattatraya",
    nameMr: "सौ. बारणे प्रतिभा दत्तात्रय",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Science",
    subjectMr: "विज्ञान"
  },
  {
    sr: 14,
    nameEn: "Sau. Darekar Sonali Swapnil",
    nameMr: "सौ. दरेकर सोनाली स्वप्नील",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "English, History",
    subjectMr: "इंग्रजी, इतिहास"
  },
  {
    sr: 15,
    nameEn: "Smt. Argade Manisha Bhimsen",
    nameMr: "श्रीमती अरगडे मनिषा भीमसेन",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. M.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 16,
    nameEn: "Sau. Gharat Pushpa Anant",
    nameMr: "सौ. घरत पुष्पा अनंत",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, Sociology",
    subjectMr: "मराठी, समाजशास्त्र"
  },
  {
    sr: 17,
    nameEn: "Sau. Gawade Manik Arun",
    nameMr: "सौ. गावडे माणिक अरुण",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi",
    subjectMr: "मराठी"
  },
  {
    sr: 18,
    nameEn: "Sau. Wakchaure Asmita Tushar",
    nameMr: "सौ. वाकचौरे अस्मिता तुषार",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. D.Ed.",
    appointmentDateEn: "-",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 19,
    nameEn: "Sau. Kale Vaishali Sandeep",
    nameMr: "सौ. काळे वैशाली संदीप",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "Hindi",
    subjectMr: "हिंदी"
  },
  {
    sr: 20,
    nameEn: "Sau. Rakshe Jyoti Avinash",
    nameMr: "सौ. राक्षे ज्योती अविनाश",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Hindi",
    subjectMr: "हिंदी"
  },
  {
    sr: 21,
    nameEn: "Sau. Thigale Trupti Ganesh",
    nameMr: "सौ. थिगळे तृप्ती गणेश",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "A.T.D. G.D. Art",
    appointmentDateEn: "-",
    subjectEn: "Drawing / Art",
    subjectMr: "चित्रकला"
  },
  {
    sr: 22,
    nameEn: "Ku. Watekar Pragati Satish",
    nameMr: "कु. वाटेकर प्रगती सतिश",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.Sc. B.Ed",
    appointmentDateEn: "-",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 23,
    nameEn: "Sau. Shinde Triveni Deepak",
    nameMr: "सौ. शिंदे त्रिवेणी दिपक",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, History",
    subjectMr: "मराठी, इतिहास"
  },
  {
    sr: 24,
    nameEn: "Sau. Pacharne Bhagirathi Pandurang",
    nameMr: "सौ. पाचारणे भागीरथी पांडुरंग",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "Marathi, Geography",
    subjectMr: "मराठी, भूगोल"
  },
  {
    sr: 25,
    nameEn: "Sau. Navale Mangal Shivaji",
    nameMr: "सौ. नवले मंगल शिवाजी",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "B.A. D.Ed",
    appointmentDateEn: "-",
    subjectEn: "Mathematics",
    subjectMr: "गणित"
  },
  {
    sr: 26,
    nameEn: "Mr. Sandbhor Sachin Ashok",
    nameMr: "श्री. सांडभोर सचिन अशोक",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A., MCM",
    appointmentDateEn: "-",
    subjectEn: "Information Technology / IT",
    subjectMr: "माहिती तंत्रज्ञान / IT"
  },
  {
    sr: 27,
    nameEn: "Sau. Dumane Pallavi Santosh",
    nameMr: "सौ. दूमणे पल्लवी संतोष",
    designationEn: "Assistant Teacher / उपशिक्षक",
    designationMr: "उपशिक्षक",
    qualificationEn: "M.A., DCA",
    appointmentDateEn: "-",
    subjectEn: "Information Technology / IT",
    subjectMr: "माहिती तंत्रज्ञान / IT"
  }
];

// Category 4: Unaided Non-Teaching Staff (शिक्षकेतर माहिती विनाअनुदानित - 11 records)
export const MAV_UNAIDED_NON_TEACHING_STAFF: MAVStaffRecord[] = [
  {
    sr: 1,
    nameEn: "Sau. Shinde Madhuri Jaysing",
    nameMr: "सौ. शिंदे माधुरी जयसिंग",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "M.Com.",
    appointmentDateEn: "-",
    subjectEn: "Clerk / लिपीक",
    subjectMr: "लिपीक"
  },
  {
    sr: 2,
    nameEn: "Mr. Gaikwad Rahul Tanhaji",
    nameMr: "श्री. गायकवाड राहुल तान्हाजी",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "B.Com.",
    appointmentDateEn: "-",
    subjectEn: "Clerk / लिपीक",
    subjectMr: "लिपीक"
  },
  {
    sr: 3,
    nameEn: "Mrs. Bhandarkar Aparna Ankush",
    nameMr: "श्रीमती भंडारकर अपर्णा अंकुश",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "B.Sc (Comp. Sci.)",
    appointmentDateEn: "-",
    subjectEn: "Science Lab Assistant / विज्ञान लॅब सहाय्यक",
    subjectMr: "विज्ञान लॅब सहाय्यक"
  },
  {
    sr: 4,
    nameEn: "Sau. Nehare Archana Santosh",
    nameMr: "सौ. नेहरे अर्चना संतोष",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "M.Lib.I.Sc",
    appointmentDateEn: "-",
    subjectEn: "Librarian / ग्रंथपाल",
    subjectMr: "ग्रंथपाल"
  },
  {
    sr: 5,
    nameEn: "Mr. Walunj Vitthal Dagdu",
    nameMr: "श्री. वाळूंज विठ्ठल दगडू",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "S.S.C",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 6,
    nameEn: "Mr. Bhosale Sharad Krishnaji",
    nameMr: "श्री. भोसले शरद कृष्णाजी",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "S.S.C",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 7,
    nameEn: "Mr. Salunke Shailesh Vijay",
    nameMr: "श्री. साळुंके शैलेश विजय",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "S.S.C",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 8,
    nameEn: "Mr. Bairagi Tulsidas Bajarang",
    nameMr: "श्री. बैरागी तुळसीदास बजरंग",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "S.S.C",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 9,
    nameEn: "Mr. Maluk Ganesh Sambhaji",
    nameMr: "श्री. मुळूक गणेश संभाजी",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "8th",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 10,
    nameEn: "Mr. Satkar Chandrakant Sudam",
    nameMr: "श्री. सातकर चंद्रकांत सुदाम",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "B.A.",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  },
  {
    sr: 11,
    nameEn: "Mr. Lokhande Sainath",
    nameMr: "श्री. लोखंडे साईनाथ",
    designationEn: "Non-Teaching Staff / शिक्षकेतर कर्मचारी",
    designationMr: "शिक्षकेतर कर्मचारी",
    qualificationEn: "H.S.C",
    appointmentDateEn: "-",
    subjectEn: "Peon / Attendant / सेवक",
    subjectMr: "सेवक"
  }
];
