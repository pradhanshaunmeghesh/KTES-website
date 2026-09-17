/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PrimaryStaffMember {
  sr: number;
  subSr: number;
  nameEn: string;
  nameMr: string;
  designationEn: string;
  designationMr: string;
  qualifications: string;
  joinedDate: string;
  category: 'aided-teaching' | 'unaided-teaching' | 'unaided-non-teaching';
  badgeEn: string;
  badgeMr: string;
}

export const PRIMARY_AIDED_TEACHING_STAFF: PrimaryStaffMember[] = [
  {
    sr: 1,
    subSr: 1,
    nameEn: 'Mrs. Kashid Vandana Shankar',
    nameMr: 'सौ. काशिद वंदना शंकर',
    designationEn: 'Headmistress',
    designationMr: 'मुख्याध्यापिका',
    qualifications: 'H.S.C., D.Ed, B.A., D.S.M',
    joinedDate: '11-07-2005',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 2,
    subSr: 2,
    nameEn: 'Smt. Thite Mangal Jaywant',
    nameMr: 'श्रीम. थिटे मंगल जयवंत',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, M.A., D.S.M',
    joinedDate: '06-07-2000',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 3,
    subSr: 3,
    nameEn: 'Mrs. Sandbhor Swati Rajaram',
    nameMr: 'सौ. सांडभोर स्वाती राजाराम',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '06-09-2002',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 4,
    subSr: 4,
    nameEn: 'Smt. Kakade Aruna Sudam',
    nameMr: 'श्रीम. काकडे अरूणा सुदाम',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A., D.S.M',
    joinedDate: '11-07-2005',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 5,
    subSr: 5,
    nameEn: 'Smt. Satkar Snehlata Nivrutti',
    nameMr: 'श्रीम. सातकर स्नेहलता निवृत्ती',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'B.A., B.P.Ed, M.A., D.S.M.',
    joinedDate: '01-02-1996',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 6,
    subSr: 6,
    nameEn: 'Smt. Lokhande Archana Bharat',
    nameMr: 'श्रीम. लोखंडे अर्चना भरत',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '15-12-2010',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 7,
    subSr: 7,
    nameEn: 'Smt. Rokade Harshada Gautam',
    nameMr: 'श्रीम. रोकडे हर्षदा गौतम',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A., B.Ed, D.S.M',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 8,
    subSr: 8,
    nameEn: 'Mr. Gaikwad Sachin Ankush',
    nameMr: 'श्री. गायकवाड सचिन अंकुश',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षक',
    qualifications: 'H.S.C., D.Ed, B.A., B.Ed',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 9,
    subSr: 9,
    nameEn: 'Smt. Tagad Swapnali Arjun',
    nameMr: 'श्रीम. तागड स्वप्नाली अर्जुन',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 10,
    subSr: 10,
    nameEn: 'Ms. Mandalikk Madhuri Narayan',
    nameMr: 'कु. मंडलिक माधुरी नारायण',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, M.A.',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 11,
    subSr: 11,
    nameEn: 'Smt. Garud Vishakha Arjun',
    nameMr: 'श्रीम. गरूड विशाखा अर्जुन',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 12,
    subSr: 12,
    nameEn: 'Smt. Gaikwad Devayani Gopichand',
    nameMr: 'श्रीम. गायकवाड देवयानी गोपीचंद',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, M.A., B.Ed',
    joinedDate: '01-07-2013',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 13,
    subSr: 13,
    nameEn: 'Mr. Shaikh Rahim Nizam',
    nameMr: 'श्री. शेख रहिम निजाम',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षक',
    qualifications: 'H.S.C., D.Ed, B.A., B.Ed',
    joinedDate: '01-08-2025',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 14,
    subSr: 14,
    nameEn: 'Mrs. Borhade Pushpa Sharad',
    nameMr: 'सौ. बोऱ्हाडे पुष्पा शरद',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, M.A., B.Ed, D.S.M',
    joinedDate: '01-08-2025',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 15,
    subSr: 15,
    nameEn: 'Mr. Shinde Shrikant Kundlik',
    nameMr: 'श्री शिंदे श्रीकांत कुंडलिक',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षक',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '01-08-2025',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  },
  {
    sr: 16,
    subSr: 16,
    nameEn: 'Mrs. Gorde Dhanashree Govind',
    nameMr: 'श्रीमती गोरडे धनश्री गोविंद',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '01-08-2025',
    category: 'aided-teaching',
    badgeEn: 'Aided Staff',
    badgeMr: 'अनुदानित'
  }
];

export const PRIMARY_UNAIDED_TEACHING_STAFF: PrimaryStaffMember[] = [
  {
    sr: 17,
    subSr: 1,
    nameEn: 'Mrs. Gujar Manisha Deepak',
    nameMr: 'सौ. गुजर मनिषा दीपक',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'D.Ed, B.A.',
    joinedDate: '13-06-2001',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 18,
    subSr: 2,
    nameEn: 'Mrs. Takalkar Sunanda Balasaheb',
    nameMr: 'सौ. टाकळकर सुनंदा बाळासाहेब',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'D.Ed, B.A.',
    joinedDate: '01-07-1994',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 19,
    subSr: 3,
    nameEn: 'Mrs. Kale Lalita Pravin',
    nameMr: 'सौ. काळे ललिता प्रविण',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A.',
    joinedDate: '01-07-2017',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 20,
    subSr: 4,
    nameEn: 'Mrs. Sutar Rupali Keshav',
    nameMr: 'सौ सुतार रूपाली केशव',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.Com',
    joinedDate: '01-07-2017',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 21,
    subSr: 5,
    nameEn: 'Mrs. Gadhave Yogita Laxman',
    nameMr: 'श्रीमती गाढवे योगिता लक्ष्मण',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.T.Ed',
    joinedDate: '11-01-2018',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 22,
    subSr: 6,
    nameEn: 'Mrs. Chavan Ratnamala Yogesh',
    nameMr: 'सौ. चव्हाण रत्नमाला योगेश',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C, A.T.D., B.F.A.',
    joinedDate: '01-07-2017',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 23,
    subSr: 7,
    nameEn: 'Mrs. Kajabe Shraddha Satyavijay',
    nameMr: 'सौ. कजबे श्रध्दा सत्यविजय',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'D.T.Ed, B.A., B.Ed',
    joinedDate: '15-06-2022',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 24,
    subSr: 8,
    nameEn: 'Mrs. Korade Jaya Sandeep',
    nameMr: 'सौ कोरडे जया संदीप',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'B.A., B.Ed',
    joinedDate: '01-07-2022',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 25,
    subSr: 9,
    nameEn: 'Mrs. Gore Pratibha Santosh',
    nameMr: 'सौ. गोरे प्रतिभा संतोष',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed',
    joinedDate: '01-07-2022',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 26,
    subSr: 10,
    nameEn: 'Smt. Pawar Vaishali Vilas',
    nameMr: 'श्रीम. पवार वैशाली विलास',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.T.Ed, B.A.',
    joinedDate: '20-06-2019',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 27,
    subSr: 11,
    nameEn: 'Mrs. Satkar Pranali Pratap',
    nameMr: 'श्रीमती सातकर प्रणाली प्रताप',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed',
    joinedDate: '01-07-2017',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 28,
    subSr: 12,
    nameEn: 'Mrs. Waluj Nilam Ganesh',
    nameMr: 'वाळूज निलम गणेश',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed, B.A., B.Lib, M.Lib',
    joinedDate: '01-07-2023',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 29,
    subSr: 13,
    nameEn: 'Mrs. Khadgir Vanita Bhanudas',
    nameMr: 'खाडगीर वनिता भानुदास',
    designationEn: 'Asst. Teacher',
    designationMr: 'उपशिक्षिका',
    qualifications: 'H.S.C., D.Ed',
    joinedDate: '01-07-2024',
    category: 'unaided-teaching',
    badgeEn: 'Unaided Staff',
    badgeMr: 'विनाअनुदानित'
  },
  {
    sr: 30,
    subSr: 14,
    nameEn: 'Mrs. Purandare Shubhangi Avadhut',
    nameMr: 'सौ पुरंदरे शुभांगी अवधूत',
    designationEn: 'Asst. Teacher (Balwadi)',
    designationMr: 'उपशिक्षिका (बालवाडी)',
    qualifications: 'H.S.C., Balwadi Course',
    joinedDate: '20-06-2017',
    category: 'unaided-teaching',
    badgeEn: 'Balwadi Teacher',
    badgeMr: 'बालवाडी शिक्षिका'
  },
  {
    sr: 31,
    subSr: 15,
    nameEn: 'Mrs. Shamim Nazeer Momin',
    nameMr: 'शमीम नजीर मोमीन',
    designationEn: 'Asst. Teacher (Balwadi)',
    designationMr: 'उपशिक्षिका (बालवाडी)',
    qualifications: 'H.S.C., Balwadi Course',
    joinedDate: '01-07-2023',
    category: 'unaided-teaching',
    badgeEn: 'Balwadi Teacher',
    badgeMr: 'बालवाडी शिक्षिका'
  },
  {
    sr: 32,
    subSr: 16,
    nameEn: 'Mrs. Kumbhar Snehal Sandesh',
    nameMr: 'कुंभार स्नेहल संदेश',
    designationEn: 'Asst. Teacher (Balwadi)',
    designationMr: 'उपशिक्षिका (बालवाडी)',
    qualifications: 'H.S.C., Balwadi Course',
    joinedDate: '01-07-2026',
    category: 'unaided-teaching',
    badgeEn: 'Balwadi Teacher',
    badgeMr: 'बालवाडी शिक्षिका'
  }
];

export const PRIMARY_UNAIDED_NON_TEACHING_STAFF: PrimaryStaffMember[] = [
  {
    sr: 33,
    subSr: 1,
    nameEn: 'Mrs. Thigale Jyoti Surendra',
    nameMr: 'सौ. थिगळे ज्योती सुरेंद्र',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: 'M.Com',
    joinedDate: '09-08-2005',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 34,
    subSr: 2,
    nameEn: 'Mr. Madhe Bhau Kondiba',
    nameMr: 'श्री. मधे भाऊ कोंडीबा',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: 'S.S.C.',
    joinedDate: '02-07-2014',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 35,
    subSr: 3,
    nameEn: 'Mrs. Kumbhar Sarika Santosh',
    nameMr: 'सौ. कुंभार सारिका संतोष',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: '7th Pass / सातवी',
    joinedDate: '01-07-2015',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 36,
    subSr: 4,
    nameEn: 'Mrs. Sandbhor Sadhana Sanjay',
    nameMr: 'श्रीमती सांडभोर साधना संजय',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: 'S.S.C.',
    joinedDate: '20-12-2016',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 37,
    subSr: 5,
    nameEn: 'Mrs. Salve Harshada Sunil',
    nameMr: 'सौ. साळवे हर्षदा सुनिल',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: '9th Pass / ९ वी',
    joinedDate: '01-08-2018',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 38,
    subSr: 6,
    nameEn: 'Mrs. Naik Pratibha Santoshrao',
    nameMr: 'सौ. नाईक प्रतिभा संतोषराव',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: '7th Pass / सातवी',
    joinedDate: '13-12-2025',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 39,
    subSr: 7,
    nameEn: 'Mrs. Habde Dipali Somnath',
    nameMr: 'हाबडे दिपाली सोमनाथ',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: 'S.S.C.',
    joinedDate: '13-12-2025',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  },
  {
    sr: 40,
    subSr: 8,
    nameEn: 'Mrs. Pawar Puja Suresh',
    nameMr: 'सौ. पवार पुजा सुरेश',
    designationEn: 'Non-Teaching Staff',
    designationMr: 'शिक्षकेतर कर्मचारी',
    qualifications: 'S.S.C.',
    joinedDate: '08-01-2026',
    category: 'unaided-non-teaching',
    badgeEn: 'Non-Teaching',
    badgeMr: 'शिक्षकेतर'
  }
];

export const ALL_PRIMARY_STAFF: PrimaryStaffMember[] = [
  ...PRIMARY_AIDED_TEACHING_STAFF,
  ...PRIMARY_UNAIDED_TEACHING_STAFF,
  ...PRIMARY_UNAIDED_NON_TEACHING_STAFF
];
