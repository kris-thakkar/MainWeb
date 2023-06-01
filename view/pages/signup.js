import Link from "next/link";
import React from "react";
import Util from "../util/utility";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.area = [
      { area: "Abasana", pincode: 382120 },
      { area: "Adroda", pincode: 382220 },
      { area: "Adval", pincode: 382460 },
      { area: "Akru", pincode: 382250 },
      { area: "Alampur", pincode: 363610 },
      { area: "Alau", pincode: 382255 },
      { area: "Ambaliara", pincode: 387810 },
      { area: "Ambareli", pincode: 387810 },
      { area: "Ambawadi", pincode: 380006 },
      { area: "Ambawadi Vistar", pincode: 380015 },
      { area: "Ambli", pincode: 382463 },
      { area: "Amraiwadi", pincode: 380026 },
      { area: "Anandnagar", pincode: 380007 },
      { area: "Andej", pincode: 382115 },
      { area: "Aniali", pincode: 363610 },
      { area: "Aniali Bhimji", pincode: 382250 },
      { area: "Arnej", pincode: 382230 },
      { area: "Asalgam", pincode: 382150 },
      { area: "Asarwa Chakla", pincode: 380016 },
      { area: "Asarwa Ext south", pincode: 380024 },
      { area: "Ashoknagar", pincode: 382140 },
      { area: "Ashram Road", pincode: 380009 },
      { area: "Aslali", pincode: 382427 },
      { area: "Azad Society", pincode: 380015 },
      { area: "Badanpur", pincode: 382465 },
      { area: "Badarkha", pincode: 382276 },
      { area: "Bagad", pincode: 382255 },
      { area: "Bagodara", pincode: 382230 },
      { area: "Bajarda", pincode: 382460 },
      { area: "Bakrana", pincode: 382170 },
      { area: "Bakrol", pincode: 382430 },
      { area: "Baldana", pincode: 382240 },
      { area: "Balsasan", pincode: 382145 },
      { area: "Bamroli", pincode: 382145 },
      { area: "Bamsara", pincode: 382240 },
      { area: "Bapunagar", pincode: 380024 },
      { area: "Bareja", pincode: 382425 },
      { area: "Barwala Ghelasha", pincode: 382450 },
      { area: "Bavaliary", pincode: 382455 },
      { area: "Bavla", pincode: 382220 },
      { area: "Bavla Market yard", pincode: 382220 },
      { area: "Behrampura", pincode: 380022 },
      { area: "Bela", pincode: 382450 },
      { area: "Bhadaj", pincode: 380060 },
      { area: "Bhadana", pincode: 382140 },
      { area: "Bhadiad", pincode: 382463 },
      { area: "Bhairavnath Road", pincode: 380028 },
      { area: "Bhangadh", pincode: 382455 },
      { area: "Bhankoda", pincode: 382140 },
      { area: "Bhat", pincode: 382210 },
      { area: "Bhavda", pincode: 382433 },
      { area: "Bhayla", pincode: 382220 },
      { area: "Bhojwa", pincode: 382150 },
      { area: "Bholad", pincode: 382230 },
      { area: "Bhoyani", pincode: 382145 },
      { area: "Bhurkhi", pincode: 382230 },
      { area: "Bhuvaldi", pincode: 382430 },
      { area: "Bilasia", pincode: 382330 },
      { area: "Bodakdev", pincode: 380054 },
      { area: "Bodia", pincode: 363610 },
      { area: "Bol", pincode: 382170 },
      { area: "Bopal", pincode: 380058 },
      { area: "Bordibazar Viramgam", pincode: 382150 },
      { area: "Calico Mills", pincode: 380022 },
      { area: "Cantonment", pincode: 380004 },
      { area: "Chaloda", pincode: 382260 },
      { area: "Chandarva", pincode: 382255 },
      { area: "Chandial", pincode: 382433 },
      { area: "Chandisar", pincode: 382260 },
      { area: "Chandlodia", pincode: 382481 },
      { area: "Chandranagar", pincode: 382150 },
      { area: "Changodar", pincode: 382213 },
      { area: "Charanki", pincode: 382450 },
      { area: "Charel", pincode: 382110 },
      { area: "Charol", pincode: 382120 },
      { area: "Chaulaj", pincode: 382433 },
      { area: "Chekhla", pincode: 382115 },
      { area: "Chhabasar", pincode: 382220 },
      { area: "Chhaniar", pincode: 382140 },
      { area: "Chharodi", pincode: 382170 },
      { area: "Chhasiana", pincode: 382460 },
      { area: "Chiada", pincode: 382220 },
      { area: "Chokdi", pincode: 382250 },
      { area: "Chuval Dangarva", pincode: 382145 },
      { area: "Civil Hospital", pincode: 380016 },
      { area: "Ctm Char rasta", pincode: 380026 },
      { area: "D Cabin", pincode: 380019 },
      { area: "Dabhsar", pincode: 382120 },
      { area: "Dadhana", pincode: 382120 },
      { area: "Daduka", pincode: 382110 },
      { area: "Dadusar", pincode: 387810 },
      { area: "Dalod", pincode: 382130 },
      { area: "Daran", pincode: 382220 },
      { area: "Dariapur", pincode: 380001 },
      { area: "Daslana", pincode: 382150 },
      { area: "Daxini Society", pincode: 380008 },
      { area: "Dehgamda", pincode: 382220 },
      { area: "Dekawada", pincode: 382120 },
      { area: "Delhi Gate", pincode: 380004 },
      { area: "Deo Dholera", pincode: 382240 },
      { area: "Detroj", pincode: 382120 },
      { area: "Devaliya", pincode: 363610 },
      { area: "Devpura", pincode: 382140 },
      { area: "Devtimoti", pincode: 382213 },
      { area: "Dhakdi", pincode: 382150 },
      { area: "Dhamatvan", pincode: 382435 },
      { area: "Dhanala", pincode: 382465 },
      { area: "Dhandhuka", pincode: 382460 },
      { area: "Dhanwada", pincode: 382220 },
      { area: "Dharpipla", pincode: 363610 },
      { area: "Dhedasana", pincode: 382130 },
      { area: "Dhingada", pincode: 382230 },
      { area: "Dholera", pincode: 382455 },
      { area: "Dholi", pincode: 382240 },
      { area: "Dholka", pincode: 387810 },
      { area: "Digvijaynagar", pincode: 382470 },
      { area: "District Court", pincode: 380001 },
      { area: "Dodar", pincode: 382170 },
      { area: "Dudheshwar Tavdipura", pincode: 380004 },
      { area: "Dumana", pincode: 382150 },
      { area: "Durgi", pincode: 382230 },
      { area: "Ellisbridge", pincode: 380006 },
      { area: "Endla", pincode: 382130 },
      { area: "Fangadi", pincode: 382110 },
      { area: "Fatepur", pincode: 382465 },
      { area: "Fatewadi", pincode: 382210 },
      { area: "Fedra", pincode: 382465 },
      { area: "Galsana", pincode: 363610 },
      { area: "Gamanpura", pincode: 382120 },
      { area: "Gamdi", pincode: 382435 },
      { area: "Gamph", pincode: 382465 },
      { area: "Gandhi Ashram", pincode: 380027 },
      { area: "Gandhi Road", pincode: 380001 },
      { area: "Gangad", pincode: 382240 },
      { area: "Ganol", pincode: 382265 },
      { area: "Garodia", pincode: 382115 },
      { area: "Gatrad", pincode: 382449 },
      { area: "Geratpur", pincode: 382435 },
      { area: "Ghatisana", pincode: 382140 },
      { area: "Ghatlodia", pincode: 380061 },
      { area: "Gheekanta Road", pincode: 380001 },
      { area: "Ghoda", pincode: 382150 },
      { area: "Ghodasar", pincode: 380050 },
      { area: "Ghuma", pincode: 380058 },
      { area: "Girdharnagar", pincode: 380004 },
      { area: "Girmatha", pincode: 382425 },
      { area: "Gita Mandir road", pincode: 380022 },
      { area: "Godhavata", pincode: 382255 },
      { area: "Godhavi", pincode: 382115 },
      { area: "Gogla", pincode: 382463 },
      { area: "Gomtipur", pincode: 380021 },
      { area: "Goraiya", pincode: 382150 },
      { area: "Goraj", pincode: 382110 },
      { area: "Gorasu", pincode: 382463 },
      { area: "Gota", pincode: 382481 },
      { area: "Gujarat High court", pincode: 380060 },
      { area: "Gujarat University", pincode: 380009 },
      { area: "Gunda", pincode: 382255 },
      { area: "Gundi Sarvodaya ashram", pincode: 382230 },
      { area: "Gunjala", pincode: 382120 },
      { area: "Gunjar", pincode: 382460 },
      { area: "Gyaspur", pincode: 382405 },
      { area: "Hansalpur", pincode: 382150 },
      { area: "Harniav", pincode: 382435 },
      { area: "Hathijan", pincode: 382445 },
      { area: "Hebatpur", pincode: 382455 },
      { area: "Hirapur", pincode: 382435 },
      { area: "Hirapura", pincode: 382150 },
      { area: "I E bapunagar", pincode: 380024 },
      { area: "IIM", pincode: 380015 },
      { area: "Ingoli", pincode: 382265 },
      { area: "Isanpur", pincode: 382443 },
      { area: "Jagatpur", pincode: 382470 },
      { area: "Jakhada", pincode: 382230 },
      { area: "Jakwada", pincode: 382150 },
      { area: "Jalalpur Vajifa", pincode: 387810 },
      { area: "Jalampur", pincode: 382150 },
      { area: "Jalila", pincode: 382255 },
      { area: "Jalisana", pincode: 382120 },
      { area: "Jaliya", pincode: 382460 },
      { area: "Jamalpur", pincode: 380001 },
      { area: "Jamp", pincode: 382110 },
      { area: "Jantanagar", pincode: 382449 },
      { area: "Jawahar Chowk", pincode: 380008 },
      { area: "Jawaraj", pincode: 382230 },
      { area: "Jeska", pincode: 382250 },
      { area: "Jetalpur", pincode: 382426 },
      { area: "Jholapur", pincode: 382170 },
      { area: "Jivraj Park", pincode: 380051 },
      { area: "Jodhpur Char rasta", pincode: 380015 },
      { area: "Joshipura", pincode: 382150 },
      { area: "Juhapura", pincode: 380055 },
      { area: "Junapadhar", pincode: 382150 },
      { area: "Juval", pincode: 382220 },
      { area: "Juval Rupavati", pincode: 382220 },
      { area: "Kabir Chowk", pincode: 380005 },
      { area: "Kadipur", pincode: 382463 },
      { area: "Kadvasan", pincode: 382130 },
      { area: "Kalana", pincode: 382170 },
      { area: "Kali", pincode: 382470 },
      { area: "Kalupur Chakla", pincode: 380001 },
      { area: "Kalyangadh", pincode: 382240 },
      { area: "Kamiala", pincode: 382465 },
      { area: "Kamijala", pincode: 382150 },
      { area: "Kanbha", pincode: 382430 },
      { area: "Kaneti", pincode: 382110 },
      { area: "Kaniyel", pincode: 382433 },
      { area: "Kankravadi", pincode: 382150 },
      { area: "Kanz", pincode: 382140 },
      { area: "Karakthal", pincode: 382150 },
      { area: "Kasindra", pincode: 382210 },
      { area: "Kathwada", pincode: 382430 },
      { area: "Kathwada Maize product", pincode: 382430 },
      { area: "Katosan Road", pincode: 382145 },
      { area: "Kauka", pincode: 382265 },
      { area: "Kavitha", pincode: 382260 },
      { area: "Kelia vasna", pincode: 387810 },
      { area: "Kerala", pincode: 382220 },
      { area: "Keria", pincode: 363610 },
      { area: "Kesardi", pincode: 382240 },
      { area: "Khadia", pincode: 380001 },
      { area: "Khadol", pincode: 382460 },
      { area: "Khambhada", pincode: 382450 },
      { area: "Khamidana", pincode: 382450 },
      { area: "Khandachora Dhandhuka", pincode: 382460 },
      { area: "Khanpur", pincode: 380001 },
      { area: "Kharad", pincode: 382460 },
      { area: "Kharakuva Dholka", pincode: 387810 },
      { area: "Khas", pincode: 382255 },
      { area: "Khasta", pincode: 382460 },
      { area: "Khoda", pincode: 382170 },
      { area: "Khodiyar", pincode: 382421 },
      { area: "Khodiyarnagar", pincode: 382350 },
      { area: "Khokarnesh", pincode: 363610 },
      { area: "Khokhara Mehmadabad", pincode: 380008 },
      { area: "Khorajnanoda", pincode: 382170 },
      { area: "Khudad", pincode: 382150 },
      { area: "Khun", pincode: 382455 },
      { area: "Kocharia", pincode: 382220 },
      { area: "Kointia", pincode: 382140 },
      { area: "Kokta", pincode: 382150 },
      { area: "Kolat", pincode: 382210 },
      { area: "Koth", pincode: 382240 },
      { area: "Kothadia", pincode: 382460 },
      { area: "Krishnanagar", pincode: 382345 },
      { area: "Kubadthal", pincode: 382430 },
      { area: "Kubernagar", pincode: 382340 },
      { area: "Kubernagar B a", pincode: 382340 },
      { area: "Kuha", pincode: 382433 },
      { area: "Kujad", pincode: 382430 },
      { area: "Kukvav", pincode: 382120 },
      { area: "Kumarkhan", pincode: 382150 },
      { area: "Kundal", pincode: 382110 },
      { area: "Kundli", pincode: 363610 },
      { area: "Kunpur", pincode: 382130 },
      { area: "Kunvar", pincode: 382110 },
      { area: "L G hospital", pincode: 380008 },
      { area: "Lal Darwaja", pincode: 380001 },
      { area: "Lambha", pincode: 382405 },
      { area: "Lapkaman", pincode: 380060 },
      { area: "Limbadia", pincode: 382330 },
      { area: "Loliya", pincode: 382465 },
      { area: "Lothal Bhurkhi rs", pincode: 382230 },
      { area: "M D marg", pincode: 380022 },
      { area: "Madhupura Market", pincode: 380004 },
      { area: "Madrisana", pincode: 382145 },
      { area: "Mahijada", pincode: 382425 },
      { area: "Makarba", pincode: 380051 },
      { area: "Makhiav", pincode: 382110 },
      { area: "Mandal", pincode: 382130 },
      { area: "Manek Chowk", pincode: 380001 },
      { area: "Maninagar", pincode: 380008 },
      { area: "Manipur", pincode: 382150 },
      { area: "Mankol", pincode: 382110 },
      { area: "Marusana", pincode: 382120 },
      { area: "Matoda", pincode: 382213 },
      { area: "Medra", pincode: 382330 },
      { area: "Meghaningar", pincode: 380016 },
      { area: "Melaj", pincode: 382150 },
      { area: "Memnagar", pincode: 380052 },
      { area: "Mingalpur", pincode: 382455 },
      { area: "Miroli", pincode: 382425 },
      { area: "Mithapur", pincode: 382230 },
      { area: "Modasar", pincode: 382220 },
      { area: "Moraiya", pincode: 382213 },
      { area: "Mota Tradia", pincode: 382460 },
      { area: "Motera", pincode: 380005 },
      { area: "Moti kishol", pincode: 382110 },
      { area: "Moti Boru", pincode: 382230 },
      { area: "Moti Rantai", pincode: 382145 },
      { area: "Moti Vavdi", pincode: 382255 },
      { area: "Muktipur", pincode: 382425 },
      { area: "Municipal Corporation", pincode: 380001 },
      { area: "N C market", pincode: 380002 },
      { area: "N C mills", pincode: 382345 },
      { area: "Nadishala", pincode: 382120 },
      { area: "Nana Chiloda", pincode: 382330 },
      { area: "Nana Ubhada", pincode: 382130 },
      { area: "Nandej", pincode: 382435 },
      { area: "Nani Boru", pincode: 382230 },
      { area: "Nani Devti", pincode: 382220 },
      { area: "Nani Vavdi", pincode: 363610 },
      { area: "Nanodara", pincode: 382220 },
      { area: "Naranpura Vistar", pincode: 380013 },
      { area: "Narayannagar", pincode: 380007 },
      { area: "Naroda", pincode: 382330 },
      { area: "Naroda I e", pincode: 382330 },
      { area: "Naroda Road", pincode: 382345 },
      { area: "Naroda S a", pincode: 382330 },
      { area: "Narol", pincode: 382405 },
      { area: "Nava Vadaj", pincode: 380013 },
      { area: "Navagam", pincode: 382130 },
      { area: "Navapura", pincode: 382210 },
      { area: "Navda", pincode: 382450 },
      { area: "Navjivan", pincode: 380014 },
      { area: "Navrangpura", pincode: 380009 },
      { area: "Nayakpur", pincode: 382130 },
      { area: "Nedharad", pincode: 382115 },
      { area: "Nesda", pincode: 387810 },
      { area: "Nikol", pincode: 382350 },
      { area: "Nirnaynagar", pincode: 382481 },
      { area: "Noblenagar", pincode: 382340 },
      { area: "O N g c", pincode: 380005 },
      { area: "Ode", pincode: 382427 },
      { area: "Odhav", pincode: 382120 },
      { area: "Odhav Industrial estate", pincode: 382415 },
      { area: "Ogan", pincode: 382150 },
      { area: "Ognaj", pincode: 380060 },
      { area: "Otaria", pincode: 382463 },
      { area: "Otaria Sarvodaya ashram", pincode: 382463 },
      { area: "Padana", pincode: 382460 },
      { area: "Paldi", pincode: 380007 },
      { area: "Paldi Kankaj", pincode: 382425 },
      { area: "Panar", pincode: 382140 },
      { area: "Panchham", pincode: 382465 },
      { area: "Panchhi", pincode: 382455 },
      { area: "Parabadi", pincode: 382250 },
      { area: "Pardhol", pincode: 382330 },
      { area: "Pasunj", pincode: 382430 },
      { area: "Pimpan", pincode: 382110 },
      { area: "Pipli", pincode: 382465 },
      { area: "Pirana", pincode: 382425 },
      { area: "Pisawada", pincode: 382265 },
      { area: "Polarpur", pincode: 382250 },
      { area: "Prahladnagar", pincode: 380015 },
      { area: "Post Bureau extn counter", pincode: 380004 },
      { area: "Public Office", pincode: 380016 },
      { area: "Rahemalpur", pincode: 382150 },
      { area: "Raikhad", pincode: 380001 },
      { area: "Railway Colony", pincode: 380019 },
      { area: "Railwaypura", pincode: 380002 },
      { area: "Raipur", pincode: 380001 },
      { area: "Rajoda", pincode: 382220 },
      { area: "Rajpur Gomtipur", pincode: 380021 },
      { area: "Rajpura", pincode: 363610 },
      { area: "Rakhial", pincode: 380023 },
      { area: "Rakhial Udyog vistar", pincode: 380023 },
      { area: "Rakhiana", pincode: 382130 },
      { area: "Ramol", pincode: 382449 },
      { area: "Rampur", pincode: 387810 },
      { area: "Rampura", pincode: 382140 },
      { area: "Ranesar", pincode: 382220 },
      { area: "Rangpur", pincode: 382150 },
      { area: "Ranip", pincode: 382480 },
      { area: "Ranoda", pincode: 387810 },
      { area: "Ranodra", pincode: 382433 },
      { area: "Ranpur", pincode: 363610 },
      { area: "Rasam", pincode: 382220 },
      { area: "Rayka", pincode: 382460 },
      { area: "Refda", pincode: 382255 },
      { area: "Rethal", pincode: 382110 },
      { area: "Revdibazar", pincode: 380002 },
      { area: "Ribadi", pincode: 382130 },
      { area: "Rohika", pincode: 382230 },
      { area: "Rojid", pincode: 382450 },
      { area: "Rojka", pincode: 382460 },
      { area: "Rudatal", pincode: 382120 },
      { area: "Rupal", pincode: 382220 },
      { area: "Rupgadh", pincode: 382240 },
      { area: "S A c", pincode: 380015 },
      { area: "S A mills", pincode: 380008 },
      { area: "Sabarmati", pincode: 380005 },
      { area: "Sachana", pincode: 382150 },
      { area: "Sadatpura", pincode: 382120 },
      { area: "Sahij", pincode: 387810 },
      { area: "Saijpur", pincode: 382405 },
      { area: "Saijpur Bogha", pincode: 382345 },
      { area: "Saiwada", pincode: 387810 },
      { area: "Salajada", pincode: 382220 },
      { area: "Salangpur - hanuman", pincode: 382451 },
      { area: "Salasar", pincode: 363610 },
      { area: "Sanand", pincode: 382110 },
      { area: "Sanathal", pincode: 382210 },
      { area: "Sandhida", pincode: 382455 },
      { area: "Sangasar", pincode: 382463 },
      { area: "Sangpura", pincode: 382120 },
      { area: "Sankod", pincode: 382220 },
      { area: "Sarandi", pincode: 387810 },
      { area: "Saraspur", pincode: 380018 },
      { area: "Sardarnagar", pincode: 382475 },
      { area: "Sargwala", pincode: 382230 },
      { area: "Sari", pincode: 382220 },
      { area: "Sarkhej", pincode: 382210 },
      { area: "Saroda", pincode: 382260 },
      { area: "Sarsavadi", pincode: 382150 },
      { area: "Sathal", pincode: 387810 },
      { area: "Shah Alam roza", pincode: 380028 },
      { area: "Shahibag", pincode: 380004 },
      { area: "Shahpur", pincode: 382150 },
      { area: "Shahwadi", pincode: 382405 },
      { area: "Shardanagar", pincode: 380007 },
      { area: "Shastrinagar", pincode: 380013 },
      { area: "Shela", pincode: 380058 },
      { area: "Sher", pincode: 382130 },
      { area: "Sherpura", pincode: 387810 },
      { area: "Shilaj", pincode: 380058 },
      { area: "Shivpura", pincode: 382140 },
      { area: "Shiyal", pincode: 382230 },
      { area: "Siawada", pincode: 382170 },
      { area: "Sihor", pincode: 382140 },
      { area: "Simej", pincode: 382265 },
      { area: "Sinaj", pincode: 382120 },
      { area: "Sindharej", pincode: 387810 },
      { area: "Sitapur", pincode: 382130 },
      { area: "Sobhasan", pincode: 382145 },
      { area: "Sodhi", pincode: 382463 },
      { area: "Sola", pincode: 380060 },
      { area: "Solgam", pincode: 382130 },
      { area: "Stadium Marg", pincode: 380013 },
      { area: "Sub Foreign", pincode: 380004 },
      { area: "Sukhrampura", pincode: 380023 },
      { area: "Sunderiana", pincode: 382255 },
      { area: "Sunvala", pincode: 382145 },
      { area: "Tagadi", pincode: 382250 },
      { area: "Telav", pincode: 382210 },
      { area: "Telavi", pincode: 382145 },
      { area: "Thaltej", pincode: 380059 },
      { area: "Thuleta", pincode: 382150 },
      { area: "Timba", pincode: 382425 },
      { area: "Tragad", pincode: 382470 },
      { area: "Transad", pincode: 387810 },
      { area: "Trent", pincode: 382150 },
      { area: "Ughroj", pincode: 382120 },
      { area: "Ukardi", pincode: 382140 },
      { area: "Ukhlod", pincode: 382150 },
      { area: "Umrela", pincode: 363610 },
      { area: "Unchadi", pincode: 382250 },
      { area: "Undrel", pincode: 382433 },
      { area: "Upardal", pincode: 382110 },
      { area: "Utelia", pincode: 382230 },
      { area: "Vadaj", pincode: 380013 },
      { area: "Vadgas", pincode: 382150 },
      { area: "Vadhela", pincode: 382450 },
      { area: "Vadod", pincode: 382433 },
      { area: "Vagad", pincode: 363610 },
      { area: "Valdhera", pincode: 387810 },
      { area: "Valhia", pincode: 382450 },
      { area: "Valinda", pincode: 382463 },
      { area: "Vanch", pincode: 382449 },
      { area: "Vani", pincode: 382150 },
      { area: "Vanpardi", pincode: 382130 },
      { area: "Vansva", pincode: 382150 },
      { area: "Vanthal", pincode: 382150 },
      { area: "Varmor", pincode: 382130 },
      { area: "Varna", pincode: 382265 },
      { area: "Vasai", pincode: 382425 },
      { area: "Vasisthnagar", pincode: 380008 },
      { area: "Vasna", pincode: 382460 },
      { area: "Vasna chacharvadi", pincode: 382213 },
      { area: "Vastral", pincode: 382418 },
      { area: "Vataman", pincode: 382265 },
      { area: "Vatva", pincode: 382440 },
      { area: "Vautha", pincode: 387810 },
      { area: "Vehlal", pincode: 382330 },
      { area: "Vejalka", pincode: 382230 },
      { area: "Vejalpur", pincode: 380051 },
      { area: "Vekaria", pincode: 382110 },
      { area: "Vinchhan", pincode: 382120 },
      { area: "Vinchhiya", pincode: 382110 },
      { area: "Vinzol", pincode: 382445 },
      { area: "Vinzuvada", pincode: 382130 },
      { area: "Viramgam", pincode: 382150 },
      { area: "Virdi", pincode: 382265 },
      { area: "Virochannagar", pincode: 382170 },
      { area: "Vishalpur", pincode: 382210 },
      { area: "Vithlpura", pincode: 382120 },
      { area: "Zanu", pincode: 382430 },
      { area: "Zanzarka", pincode: 382460 },
      { area: "Zanzarva", pincode: 382120 },
      { area: "Zezra", pincode: 382150 },
      { area: "Zinzar", pincode: 382250 },
    ];

    this.categories = [
      { name: "AC Repair", value: "AC Repair" },
      { name: "Carpenter", value: "Carpenter" },
      { name: "Electrician", value: "Electrician" },
      { name: "Plumber", value: "Plumber" },
      { name: "Painter", value: "Painter" },
      { name: "Salon at Home", value: "Salon at Home" },
      { name: "Maid", value: "Maid" },
      { name: "Pest Control", value: "Pest Control" },
      { name: "Appliance Repair", value: "Appliance Repair" },
      { name: "Cleaning and Disinfection", value: "Cleaning and Disinfection" },
      { name: "Home Deep Cleaning", value: "Home Deep Cleaning" },
      { name: "Sofa Cleaning", value: "Sofa Cleaning" },
      { name: "Bathroom Cleaning", value: "Bathroom Cleaning" },
      { name: "Kitchen Cleaning", value: "Kitchen Cleaning" },
      { name: "Car Cleaning", value: "Car Cleaning" },
    ];

    this.state = {
      name: "",
      mobile: "",
      email: "",
      pincode: "",
      checkbox: false,
      imageFile: "",
      invalidName: "",
      invalidMobile: "",
      invalidEmail: "",
      invalidShop: "",
      invalidArea: "",
      invalidPincode: "",
      invalidWorkingHours: "",
      invalidVisitingCharge: "",
      renderAdditionalForm: false,
    };
    this.nameRef = React.createRef();
    this.mobileRef = React.createRef();
    this.emailRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.shopRef = React.createRef();
    this.areaRef = React.createRef();
    this.pincodeRef = React.createRef();
    this.workingHoursRef = React.createRef();
    this.visitingChargeRef = React.createRef();
    this.occupationRef = React.createRef();
    this.profilePictureRef = React.createRef();
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    if (name == "area" && value !== "") {
      this.area.map((item) => {
        return value.toLowerCase() == item.area.toLowerCase()
          ? this.setState({ pincode: item.pincode })
          : "";
      });
    }

    if (name == "checkbox" && value == true) {
      this.setState({
        renderAdditionalForm: true,
      });
    } else if (name == "checkbox" && value == false) {
      this.setState({
        renderAdditionalForm: false,
      });
    }

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value;
    const mobile = this.mobileRef.current.value;
    const email = this.emailRef.current.value;
    const checkbox = this.checkboxRef.current.checked;
    const shop = checkbox == true ? this.shopRef.current.value : "";
    const area = checkbox == true ? this.areaRef.current.value : "";
    const workingHours =
      checkbox == true ? this.workingHoursRef.current.value : 0;
    const visitingCharge =
      checkbox == true ? this.visitingChargeRef.current.value : 0;

    const image = this.profilePictureRef.current.files[0].name;

    let body = {
      name: name,
      mobile: mobile,
      email: email,
      checkbox: checkbox,
      shop: shop,
      area: area,
      pincode: this.state.pincode,
      workingHours: workingHours,
      visitingCharge: visitingCharge,
      image: image,
    };

    // Name =====================
    if (name !== "") {
      this.setState({ invalidName: false });
    } else {
      this.setState({ invalidName: true });
    }

    // Email =====================
    if (email !== "") {
      let validateEmail = Util.validateEmail(email);
      if (validateEmail == false) {
        this.setState({
          invalidEmail: "Enter valid Email Id",
        });
      } else {
        this.setState({
          invalidEmail: "",
        });
      }
    }

    // Mobile =====================
    let validateMobile = Util.validateMobile(mobile);
    if (validateMobile == false) {
      this.setState({
        invalidMobile: "Enter Valid Mobile Number",
      });
    } else {
      this.setState({
        invalidMobile: "",
      });
    }

    // Checkbox ====================
    if (checkbox == true) {
      this.setState({
        checkbox: true,
      });
    } else {
      this.setState({
        checkbox: false,
      });
    }

    if (checkbox == true) {
      // Shop ====================
      if (shop !== "") {
        this.setState({
          invalidShop: "",
        });
      } else {
        this.setState({
          invalidShop: "Enter Valid Shop Name",
        });
      }

      // Area ====================
      if (area !== "") {
        this.setState({
          invalidArea: "",
        });
      } else {
        this.setState({
          invalidArea: "Enter Valid Area",
        });
      }

      // Working Hours ====================
      if (workingHours !== "") {
        this.setState({
          invalidWorkingHours: "",
        });
      } else {
        this.setState({
          invalidWorkingHours: "Enter Valid Working Hours",
        });
      }

      // Visiting Charge ====================
      if (visitingCharge !== "") {
        this.setState({
          invalidVisitingCharge: "",
        });
      } else {
        this.setState({
          invalidVisitingCharge: "Enter Valid Visiting Charge",
        });
      }
    }

    //Make API-Call
    // await Util.api_call("", {});
  };

  render() {
    return (
      <>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                <span style={{ color: "red" }}>*</span>Name:
              </label>
              <input
                ref={this.nameRef}
                type="text"
                name="name"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label>
                <span style={{ color: "red" }}>*</span>Mobile:
              </label>
              <input
                ref={this.mobileRef}
                type="text"
                name="mobile"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                ref={this.emailRef}
                type="text"
                name="email"
                onChange={this.handleInputChange}
              />
            </div>

            {this.state.renderAdditionalForm == true ? (
              <>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Shop Name:
                  </label>
                  <input
                    ref={this.shopRef}
                    type="text"
                    name="shopname"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Area:
                  </label>
                  <select
                    ref={this.areaRef}
                    type="text"
                    name="area"
                    onChange={this.handleInputChange}
                    required
                  >
                    {Util.optionsMaker(this.area, "area", "pincode").map(
                      (item) => {
                        return <option value={item.value}>{item.value}</option>;
                      }
                    )}
                  </select>
                </div>
                <div>
                  <label>Pincode:</label>
                  <input
                    ref={this.pincodeRef}
                    type="text"
                    name="pincode"
                    value={this.state.pincode}
                    disabled
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Occupation:
                  </label>
                  <select
                    name="occupation"
                    ref={this.occupationRef}
                    onChange={this.handleInputChange}
                    required
                  >
                    {Util.optionsMaker(this.categories, "name", "value").map(
                      (item) => {
                        return <option value={item.value}>{item.value}</option>;
                      }
                    )}
                  </select>
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Working Hours:
                  </label>
                  <input
                    ref={this.workingHoursRef}
                    type="text"
                    name="working hours"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>
                    <span style={{ color: "red" }}>*</span>Visiting Charge:
                  </label>
                  <input
                    ref={this.visitingChargeRef}
                    type="text"
                    name="visiting charge"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label>Profie Picture:</label>
                  <input
                    ref={this.profilePictureRef}
                    type="file"
                    accept="image/*"
                    name="profile picture"
                    onChange={this.handleInputChange}
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div>
              <label>
                <input
                  ref={this.checkboxRef}
                  type="checkbox"
                  name="checkbox"
                  onChange={this.handleInputChange}
                />
                Are you a Woker ?
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <Link href="/login">
              <a>
                <div>Already have an account ? Login</div>
              </a>
            </Link>
          </form>
        </div>
      </>
    );
  }
}
