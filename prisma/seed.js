import axios from 'axios';
import cheerio from 'cheerio';
import 'dotenv/config';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getCharacterInfo = async (characterName) => {
  const { data } = await axios.get(
    `https://strangerthings.fandom.com/wiki/${characterName}`
  );
  const $ = cheerio.load(data);
  let character_name = $('h2[data-source="name"].pi-item').text();
  const portrayed_by = $(
    'div[data-source="portrayer"] > div.pi-data-value.pi-font > a'
  ).text();
  const image = $('.image.image-thumbnail > img').attr('src');
  if (!character_name) {
    const parts = characterName.split('/');
    const last = parts[parts.length - 1];
    const rmspace = last.replace('_', ' ');
    character_name = rmspace.replace('%27', "'");
  }
  const characterInfo = {
    character_name,
    portrayed_by,
    image,
  };
  return characterInfo;
};

const loadCharacters = async () => {
  try {
    const characterInfoPromises = characterNames.map((characterName) =>
      getCharacterInfo(characterName)
    );
    const characters = await Promise.all(characterInfoPromises);
    console.log(
      '🚀 ~ file: seed.js ~ line 138 ~ loadCharacters ~ characters',
      characters
    );
    // save them to the db
    console.log("Let's seed it");
    await prisma.st_character.createMany({ data: characters });
  } catch (error) {
    console.error(error);
  }
};

const characterNames = [
  'Agent_Repairman',
  'Stacey_Albright',
  'Alexei',
  'Andy',
  'Angela',
  'Dmitri_Antonov',
  'April',
  'Argyle',
  'Axel',
  'Murray_Bauman',
  'Fred_Benson',
  'Billy%27s_Mother',
  'Cornelius_Bingham',
  'Eden_Bingham',
  'Mr._Bingham',
  'Suzie_Bingham',
  'Martin_Brenner',
  'Robin_Buckley',
  'Jonathan_Byers',
  'Joyce_Byers',
  'Lonnie_Byers',
  'Will_Byers',
  'Phil_Callahan',
  'Ray_Carroll',
  'Jason_Carver',
  'Chance',
  'Chester',
  'Scott_Clarke',
  'Russell_Coleman',
  'Alice_Creel',
  'Victor_Creel',
  'Virginia_Creel',
  'Chrissy_Cunningham',
  'Laura_Cunningham',
  'Phillip_Cunningham',
  'Cynthia',
  'D%27Artagnan',
  'Glenn_Daniels',
  'James_Dante',
  'The_Demogorgon',
  'Diane',
  'Dottie',
  'Doris_Driscoll',
  'Earl',
  'Elevator_Scientist',
  'Eleven',
  'ElTest',
  'Eliot',
  'Dr._Ellis',
  'Evil_Russian',
  'Five',
  'Florence',
  'Gloria_Flowers',
  'Four',
  'Francine',
  'Connie_Frazier',
  'Freak_1',
  'Funshine',
  'Gareth',
  'Gary',
  'Grigori',
  'Tommy_Hagan',
  'Benny_Hammond',
  'Billy_Hargrove',
  'Neil_Hargrove',
  'Susan_Hargrove',
  'Agent_Harmon',
  'Steve_Harrington',
  'Anthony_Hatch',
  'Hawkins_Head_of_Security',
  'Claudia_Henderson',
  'Dustin_Henderson',
  'Mr._Holland',
  'Barbara_Holland',
  'Marsha_Holland',
  'Heather_Holloway',
  'Janet_Holloway',
  'Tom_Holloway',
  'Jim_Hopper',
  'Sara_Hopper',
  'Hospital_Monster',
  'Yuri_Ismaylov',
  'Ivan',
  'Becky_Ives',
  'Terry_Ives',
  'Jake',
  'Jamie',
  'Jeff',
  'Saint_John',
  'Alice_Johnson',
  'Keith',
  'Ms._Kelley',
  'Kelly',
  'Ken',
  'Joey_Kim',
  'Larry_Kline',
  'Lead_Agent',
  'Lead_Scientist',
  'Bruce_Lowe',
  'M.P._Guards',
  'Marcy',
  'Marissa',
  'Max_Mayfield',
  'Eugene_McCorkle',
  'Patrick_McKinney',
  'Donald_Melvald',
  'Mews',
  'Mick',
  'The_Mind_Flayer',
  'Miss_Dorothy',
  'Eddie_Munson',
  'Wayne_Munson',
  'Nerdy_Tech',
  'Bob_Newby',
  'Nicole',
  'David_O%27Bannon',
  'Oleg',
  'Cathy_Owens',
  'Sam_Owens',
  'Ozerov',
  'Carol_Perkins',
  'Calvin_Powell',
  'Kali_Prasad',
  'Andrew_Rich',
  'Ricky',
  'Roy',
  'Russian_Agent',
  'Russian_Demogorgon',
  'Scoops_Troop',
  'Shepard',
  'Sue_Sinclair',
  'Charles_Sinclair',
  'Erica_Sinclair',
  'Lucas_Sinclair',
  'Six',
  'Stepanov',
  'Ellen_Stinson',
  'Jack_Sullivan',
  'Tammy_Thompson',
  'Tanya',
  'Ten',
  'The_Party',
  'The_Spider_Monster',
  'Three',
  'Tina',
  'Two',
  'Vecna',
  'Vickie',
  'Agent_Wallace',
  'Mrs._Walsh',
  'Troy_Walsh',
  'Warden_Melnikov',
  'Holly_Wheeler',
  'Karen_Wheeler',
  'Mike_Wheeler',
  'Ted_Wheeler',
  'Brenda_Wood',
  'Merrill_Wright',
  'Yurtle',
  'Dr._Zharkov',
];

loadCharacters();
