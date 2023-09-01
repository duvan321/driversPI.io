const initialState = {
  Driver: [
    {
      id: 1,
      firstName: "Lewis",
      lastName: "Hamilton",
      description:
        "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history.",
      image:
        "https://www.las2orillas.co/wp-content/uploads/2023/01/McLaren.jpeg",
      nationality: "British",
      birthDate: "1985-01-07",
      teamIds: "McLaren, Mercedes",
      created: false,
    },
    {
      id: 2,
      firstName: "Nick",
      lastName: "Heidfeld",
      description:
        "Nick Lars Heidfeld (born 10 May 1977) is a German professional racing driver. Despite scoring regular podium finishes in 2005 with Williams, and in 2007 and 2008 with BMW Sauber, Heidfeld never won a race after debuting in Formula One in 2000. Heidfeld currently holds two Formula One records; most podium finishes without a Grand Prix win, and the most second-place finishes without a wi. In 2011, Heidfeld raced in Formula One for the Renault team as a replacement for the injured Robert Kubica, his former BMW Sauber teammate,before being replaced by Bruno Senna. He last drove for the Rebellion Racing team in the FIA World Endurance Championship and for Mahindra Racing Formula E Team in Formula E.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg/330px-Nick_Heidfeld_Goodwood_Festival_of_Speed_2019_%2848242681251%29.jpg",
      nationality: "German",
      birthDate: "1977-05-10",
      teamIds: "Prost, Sauber, Jordan,Williams,BMW Sauber,Renault",
      created: false,
    },
    {
      id: 3,
      firstName: "Nico",
      lastName: "Rosberg",
      description:
        "Nico Erik Rosberg (born 27 June 1985) is a German-Finnish former professional racing driver. He competed in Formula One from 2006 to 2016, winning the World Drivers' Championship in 2016 with Mercedes-AMG Petronas Motorsport. The only child of Finnish 1982 Formula One World Champion Keke Rosberg and his German wife Sina Rosberg, he was raised primarily in the Principality of Monaco.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nico_Rosberg_2016.jpg/330px-Nico_Rosberg_2016.jpg",
      nationality: "German",
      birthDate: "1985-06-27",
      teamIds: "Williams, Mercedes",
      created: false,
    },
    {
      id: 4,
      firstName: "Fernando",
      lastName: "Alonso",
      description:
        "Fernando Alonso Díaz is a Spanish racing driver currently competing for Aston Martin in Formula One. He won the series' World Drivers' Championship in 2005 and 2006 with Renault, and has also driven for McLaren, Ferrari, and Minardi. With Toyota, Alonso won the 24 Hours of Le Mans twice, in 2018 and 2019, and the FIA World Endurance Championship in 2018–19. He also won the 24 Hours of Daytona with Wayne Taylor Racing in 2019.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/360px-Alonso_2016.jpg",
      nationality: "Spanish",
      birthDate: "1981-07-29",
      teamIds: "Minardi, Renault, McLaren, Ferrari, Alpine",
      created: false,
    },
    {
      id: 5,
      firstName: "Heikki",
      lastName: "Kovalainen",
      description:
        "Heikki Johannes Kovalainen; is a Finnish racing driver competing in the Japan Rally Championship for Rally Team AICELLO. He raced in Formula One between 2007 and 2013 for the Renault, McLaren, Team Lotus, Caterham and Lotus F1 teams, scoring a single victory at the 2008 Hungarian Grand Prix. After leaving Formula One, he raced in the Japanese Super GT series between 2015 and 2021, where he won the championship in 2016.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Effect_20190609_091716.jpg",
      nationality: "Finnish",
      birthDate: "1981-10-19",
      teamIds: "Renault, McLaren, Lotus, Caterham, Lotus",
      created: false,
    },
    {
      id: 6,
      firstName: "Kazuki",
      lastName: "Nakajima",
      description:
        "Kazuki Nakajima is a retired Japanese professional racing driver who drove in Formula One for the Williams-Toyota team from 2007 to 2009. In 2012 and 2014, he won the Super Formula Championship driving for TOM'S. Racing for Toyota Gazoo Racing, he won the 2018, 2019 and 2020 24 Hours of Le Mans, as well as the 2018–19 World Endurance Championship along with team-mates Fernando Alonso and Sébastien Buemi. He is the second FIA world champion from Japan after Toshi Arai.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Kazuki_Nakajima_2012_WEC_Fuji.jpg/330px-Kazuki_Nakajima_2012_WEC_Fuji.jpg",
      nationality: "Japanese",
      birthDate: "1985-01-11",
      teamIds: "Williams",
      created: false,
    },
    {
      id: 7,
      firstName: "Sébastien",
      lastName: "Bourdais",
      description:
        "Sébastien Olivier Bourdais is a French professional racing driver. He is one of the most successful drivers in the history of American open-wheel car racing, having won 37 races. He won four successive championships under Champ Car World Series sanction from 2004 to 2007. He drove in Formula One for the Toro Rosso team during 2008, and the start of the 2009 season, returned to America in the united IndyCar Series in 2011, and has raced sports cars throughout his career, winning his home race, the 24 Hours of Le Mans in the GTE-Pro class in 2016. He last competed in the NTT IndyCar Series in 2021, driving the No. 14 car for A. J. Foyt Racing.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg/1024px-Sebastien_Bourdais_in_2021_%2851221641988%29_%28cropped%29.jpg",
      nationality: "French",
      birthDate: "1979-02-28",
      teamIds: "Toro Rosso",
      created: false,
    },
    {
      id: 8,
      firstName: "Kimi",
      lastName: "Räikkönen",
      description:
        "Kimi-Matias Räikkönen, nicknamed The Iceman, is a Finnish racing driver who competed in Formula One between 2001 and 2021 for Sauber, McLaren, Ferrari, Lotus, and Alfa Romeo. Räikkönen won the 2007 Formula One World Championship while driving for Ferrari; he also managed to finish second overall twice and third three times. Räikkönen is the most successful Finnish Formula One driver by several metrics,[a] and has the fifth-most podium finishes, third-most fastest laps, and second-most race starts in Formula One history. He is known for his reserved personality and reluctance to participate in public relations.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg",
      nationality: "Finnish",
      birthDate: "1979-10-17",
      teamIds: "Sauber, McLaren, Ferrari, Lotus, Alfa Romeo",
      created: false,
    },
    {
      id: 9,
      firstName: "Robert",
      lastName: "Kubica",
      description:
        "Robert Józef Kubica is a Polish racing and rally driver. He was the first and, as of 2023, the only Polish racing driver to compete in Formula One. Between 2006 and 2009 he drove for the BMW Sauber F1 team, promoted from test driver to race driver during 2006. In June 2008, Kubica took his maiden and only Formula One victory at the Canadian Grand Prix. That season he led the championship at one stage, before finishing fourth overall, his best career position. Kubica drove for Renault in 2010 and was set to remain with the team in 2011. Several years later Kubica confirmed he had signed a pre-contract for the 2012 season with Ferrari, a move that was eventually cancelled by his devastating rally crash in early 2011.Kubica returned to racing in September 2012, winning a minor rally in Italy.Kubica was named one of The Men of the Year 2012 by Top Gear magazine for his return to auto racing. In 2013, he drove for Citroën in the European and World Rally-2 Championships.He went on to win the inaugural WRC-2 title, and moved to the WRC championship full-time in 2014, driving a Ford Fiesta RS WRC prepared by M-Sport.On 16 January 2018, it was announced that Kubica would become the reserve driver of Williams for the 2018 season.On 22 November 2018, Kubica was announced as a Williams race driver for the 2019 Formula One season.He left the Williams team at the end of 2019, moving across to the Deutsche Tourenwagen Masters,while maintaining a Formula One presence as reserve and test driver for Alfa Romeo. He has made several appearances during practice sessions in his role as test driver, and he replaced Kimi Räikkönen at the Dutch and Italian Grands Prix in 2021",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg/800px-2019_Formula_One_tests_Barcelona%2C_Kubica_%2832309897777%29.jpg",
      nationality: "Polish",
      birthDate: "1984-12-07",
      teamIds: "BMW Sauber, Renault, Williams, Alfa Romeo Racing",
      created: false,
    },
    {
      id: 10,
      firstName: "Timo",
      lastName: "Glock",
      description:
        "Timo Glock is a German professional racing driver, and BMW Motorsport works driver. He raced in Formula One for the Jordan, Toyota, Virgin Racing and Marussia F1 teams. He finished 10th in the Drivers' Championship in both 2008 and 2009, scoring three podium finishes. After leaving Formula One in 2013, Glock became a works driver for BMW in the Deutsche Tourenwagen Masters, driving for BMW Team MTEK, and achieved his first DTM podium at the Red Bull Ring, and a first win at the season finale at the Hockenheimring.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Timo_Glock_Canada_2011-Cropped.jpg/800px-Timo_Glock_Canada_2011-Cropped.jpg",
      nationality: "German",
      birthDate: "1982-03-18",
      teamIds: "Jordan, Toyota, Virgin, Marussia",
      created: false,
    },
    {
      id: 11,
      firstName: "Takuma",
      lastName: "Sato",
      description:
        "Takuma Sato, nicknamed: Taku, is a Japanese professional racing driver. He competes part-time in the IndyCar Series, driving the No. 11 Honda for Chip Ganassi Racing. Sato is a two time winner of the Indianapolis 500, having won the event in 2017 and 2020. He was the first Asian driver to win the Indianapolis 500, and the twentieth driver to win the race more than once. Before winning the Indianapolis 500, Sato became the first Japanese-born driver to win an IndyCar Series race when he won the 2013 Grand Prix of Long Beach. Sato raced full-time in the IndyCar Series from 2010 until 2022 for KV Racing Technology, Rahal Letterman Lanigan Racing, A. J. Foyt Enterprises, Andretti Autosport, and Dale Coyne Racing, all with Honda engines. He competed in Formula One from 2002 to 2008 for the Honda-powered Jordan, BAR and Super Aguri teams, scoring 44 points overall, and a single podium which was at the 2004 United States Grand Prix. His 8th-place finish in the 2004 Formula One World Drivers' Championship is the best-ever result for a Japanese driver in the series. Sato has become known among fans and media for his motto no attack, no chance with regards to his racing style.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Takuma_Sato_%282021%29.jpg/800px-Takuma_Sato_%282021%29.jpg",
      nationality: "Japanese",
      birthDate: "1977-01-28",
      teamIds: "Jordan, BAR, Super Aguri",
      created: false,
    },
    {
      id: 12,
      firstName: "Nelson",
      lastName: "Piquet Jr.",
      description:
        "Nelson Angelo Tamsma Piquet Souto Maior, also known as Nelson Piquet Junior or Nelsinho Piquet, is a Brazilian stock car racing driver and former Formula One and Formula E driver where he was champion in the 2014–15 season. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 33 Toyota Corolla E210 for Motul TMG Racing.He also races a Rebellion R-One LMP1 in the FIA World Endurance Championship. The son of three-time Formula One world champion Nelson Piquet, he was signed as test driver for Renault Formula One team for the 2007 season, and was promoted to the race team for 2008, before being dropped midway through the 2009 season.[3] After losing his drive, it emerged that he had, under instruction from senior members of the team, crashed deliberately at the 2008 Singapore Grand Prix to help his teammate, Fernando Alonso, win the race. The resulting scandal became one of the most significant in motor sport history, and ultimately saw a permanent end to Piquet Junior's career in Formula 1. Piquet also finished runner-up in the 2006 GP2 Series, fourth in the 2014 Global RallyCross Championship, and seventh in the 2012 NASCAR Truck Series.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piquet_Jr._2015.jpg",
      nationality: "Brazilian",
      birthDate: "1985-07-25",
      teamIds: "Renault",
      created: false,
    },
    {
      id: 13,
      firstName: "Felipe",
      lastName: "Massa",
      description:
        "Felipe Massa is a Brazilian racing driver. He competed in 15 seasons of Formula One between 2002 and 2017, where he scored 11 Grand Prix victories, 41 podiums and finished as championship runner-up in 2008 by one point. He currently competes full-time in the Brazilian Stock Car Pro Series, driving the No. 19 Chevrolet Cruze for Lubrax Podium.Massa started his career in go-karting from the age of eight continuing in national and regional championships for seven years. He moved into Formula Chevrolet and claimed the championship. He moved in Italian Formula Renault in 2000 and won the title along with the European championship. He went into Euro Formula 3000 taking the championship in 2001.He started his Formula One career with Sauber before joining Scuderia Ferrari as a test driver for 2003. He returned to Sauber for 2004 and 2005 before rejoining Ferrari where he won two races in 2006 including his home Grand Prix becoming the first Brazilian since Ayrton Senna to win the Brazilian Grand Prix. He won three races in 2007, finishing 4th in the Drivers' Championship. He finished second in the 2008 Drivers' World Championship after a long title battle with Lewis Hamilton, winning six races to Hamilton's five. At the 2009 Hungarian Grand Prix, he was injured by a suspension spring off the Brawn GP car of Rubens Barrichello. He was forced to miss the rest of the season but returned in 2010 during which he briefly led the championship. He suffered a dip in form in 2011 scoring no podiums but consistently scoring points. He contributed to Ferrari's Constructors' Championships in 2007 and 2008 and was under contract to race for the team until the end of the 2013 season.On 10 September 2013, he confirmed he would be leaving Ferrari at the end of the 2013 season. He replaced Pastor Maldonado alongside Valtteri Bottas at Williams from 2014.Massa announced that he would retire from Formula One at the end of the 2016 season.However, the abrupt retirement of 2016 Formula One Champion Nico Rosberg from Mercedes precipitated the late move of Valtteri Bottas from Williams to Mercedes, leaving a late vacancy at Williams. Massa subsequently postponed his retirement, returning to Williams to partner rookie Lance Stroll for the 2017 season.[4] On 4 November 2017, Massa confirmed that he would be retiring from Formula One at the end of the 2017 season.Since retirement from Formula One, Massa has pursued a career in the FIA's all electric series Formula E. He retired from Formula E at the end of the 2019-20 Championship. He then joined the 2021 season of the Stock Car Brasil series.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg/800px-Felipe_Massa_Le_Mans_Classic_2018_%28cropped%29.jpg",
      nationality: "Brazilian",
      birthDate: "1981-04-25",
      teamIds: "Sauber, Ferrari, Williams",
      created: false,
    },
    {
      id: 14,
      firstName: "David",
      lastName: "Coulthard",
      description:
        "David Marshall Coulthard MBE is a British former racing driver from Scotland, later turned presenter, commentator and journalist. Nicknamed 'DC', he competed in 15 seasons of Formula One between 1994 and 2008, taking 13 Grand Prix victories and 62 podium finishes. He was runner-up in the 2001 championship, driving for McLaren. Coulthard began karting at the age of eleven and achieved early success before progressing to car racing in the British Formula Ford Championship and the Formula 3000 series. He first drove in Formula One with Williams in the 1994 season succeeding the late Ayrton Senna. The following year he won his first Grand Prix in Portugal, and then for the 1996 season he moved to McLaren. After winning two races in the 1997 season, he finished 3rd in the World Drivers' Championship in the 1998 season. He won five races during 1999 and 2000 before finishing 2nd in the Drivers' Championship to Michael Schumacher in 2001. Two more victories followed between 2002 and 2003 before he left McLaren at the end of 2004. He moved to Red Bull in 2005 and secured their first podium a year later. Coulthard retired from Formula One racing at the end of 2008. After retiring from Formula One, Coulthard continued working with Red Bull as a consultant and joined the BBC as a commentator and pundit for their coverage of Formula One. He returned to active motorsports in 2010 joining Mücke Motorsport in DTM, the Deutsche Tourenwagen Masters (German Touring Car Masters) and retired at the end of 2012. Coulthard has also participated in the Race of Champions, finishing runner-up in the Drivers' Cup in 2008, and winning the competition in 2014 and 2018. Since 2016 he has worked as a commentator and analyst for Channel 4 after they took over the BBC's terrestrial television rights. In 2019, he was elected president of the British Racing Drivers' Club",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg/330px-David_Coulthard_Champions_for_Charity_2022_%28cropped%29.jpg",
      nationality: "British",
      birthDate: "1971-03-27",
      teamIds: "Williams, McLaren, Red Bull",
      created: false,
    },
    {
      id: 15,
      firstName: "Jarno",
      lastName: "Trulli",
      description:
        "Jarno Trulli is an Italian racing driver. He regularly competed in Formula One from 1997 to 2011, driving for Minardi, Prost, Jordan, Renault, Toyota, Lotus Racing and Team Lotus. His best result in the World Drivers' Championship (WDC) was sixth place in 2004; this was also the year in which he scored the only win of his Formula One career at the 2004 Monaco Grand Prix. Throughout his Formula One career, Trulli was renowned for his skill in qualifying, regularly achieving far better grid positions than rivals with superior cars to his own. He was also known for his defensive driving style which allowed him to successfully hold off quicker drivers, sometimes for an entire race. The combination of being able to achieve high grid positions in comparatively slow cars and his ability to hold off faster drivers would often result in a line of vehicles forming behind him during a race, which was commonly referred to as the 'Trulli Train' by commentators, fans and journalists. Trulli was slated to compete in the 2012 Formula One season, but retired before the season began. In 2014–15 he competed in the inaugural season of the FIA Formula E Championship, driving for Trulli GP, a team he founded. He is the father of racing driver Enzo Trulli",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jarno-Trulli-2014-cropped.jpg/1024px-Jarno-Trulli-2014-cropped.jpg",
      nationality: "Italian",
      birthDate: "1974-07-13",
      teamIds: "Minardi, Prost, Jordan, Renault, Toyota, Lotus",
      created: false,
    },
    {
      id: 16,
      firstName: "Adrian",
      lastName: "Sutil",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adrian_Sutil.jpg/800px-Adrian_Sutil.jpg",
      nationality: "German",
      birthDate: "1983-01-11",
      teamIds: "Spyker, Force India, Sauber",
      created: false,
    },
    {
      id: 17,
      firstName: "Mark",
      lastName: "Webber",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Mark_Webber_2017_Malaysian_GP_podium.jpg/800px-Mark_Webber_2017_Malaysian_GP_podium.jpg",
      nationality: "Australian",
      birthDate: "1976-08-27",
      teamIds: "Porsche, Mercedes AMG",
      created: false,
    },
    {
      id: 18,
      firstName: "Jenson",
      lastName: "Button",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Jenson_Button_Bahrain_2012_%28crop%29.jpg/330px-Jenson_Button_Bahrain_2012_%28crop%29.jpg",
      nationality: "British",
      birthDate: "1980-01-19",
      teamIds: "Porsche",
      created: false,
    },
    {
      id: 19,
      firstName: "Anthony",
      lastName: "Davidson",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg/800px-Anthony_Davidson_Goodwood_Festival_of_Speed_2019_%2848242774922%29.jpg",
      nationality: "British",
      birthDate: "1979-04-18",
      teamIds: "Minardi, BAR, Super Aguri",
      created: false,
    },
    {
      id: 20,
      firstName: "Sebastian",
      lastName: "Vettel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/330px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg",
      nationality: "German",
      birthDate: "1987-07-03",
      teamIds: "BMW Sauber, Toro Rosso, Red Bull, Ferrari, Aston Martin",
      created: false,
    },
  ],
};

const redurce = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default redurce;
