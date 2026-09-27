import type { Genre, Movie, MovieDetails } from '../types';

const poster=(id:string)=>'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=700&q=82';
const backdrop=(id:string)=>'https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=1800&q=86';

const genres:Genre[]=['Action','Adventure','Animation','Comedy','Crime','Documentary','Drama','Fantasy','Horror','Mystery','Romance','Science Fiction','Thriller','War','Western'].map((name,i)=>({id:String(i+1),name}));

const records:Movie[]=[
{id:'n01',title:'Neon Meridian',overview:'A courier in a flooded megacity uncovers a memory market that can rewrite the past.',posterPath:poster('photo-1485846234645-a62644f84728'),backdropPath:backdrop('photo-1485846234645-a62644f84728'),releaseDate:'2026-08-14',rating:8.8,voteCount:4210,popularity:98,genres:[genres[0],genres[11],genres[10]],runtime:126,mediaType:'movie',language:'en',ageRating:'16+'},
{id:'n02',title:'Glass Kingdom',overview:'Two rival architects race to save a city whose impossible buildings are beginning to collapse.',posterPath:poster('photo-1524985069026-dd778a71c7b4'),backdropPath:backdrop('photo-1524985069026-dd778a71c7b4'),releaseDate:'2026-07-22',rating:8.2,voteCount:3190,popularity:91,genres:[genres[6],genres[7],genres[9]],runtime:118,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n03',title:'Afterlight',overview:'A grief-stricken astronomer receives a signal that seems to arrive from tomorrow.',posterPath:poster('photo-1536440136628-849c177e76a1'),backdropPath:backdrop('photo-1536440136628-849c177e76a1'),releaseDate:'2026-06-06',rating:8.6,voteCount:5021,popularity:94,genres:[genres[11],genres[6]],runtime:134,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n04',title:'Midnight District',overview:'An exhausted detective follows a missing-person trail through a city that refuses to sleep.',posterPath:poster('photo-1489599849927-2ee91cede3ba'),backdropPath:backdrop('photo-1489599849927-2ee91cede3ba'),releaseDate:'2025-11-18',rating:8.0,voteCount:2788,popularity:83,genres:[genres[4],genres[9],genres[12]],runtime:112,mediaType:'movie',language:'en',ageRating:'16+'},
{id:'n05',title:'Orbit House',overview:'A strange family inherits a station orbiting a moon no map can locate.',posterPath:poster('photo-1485846234645-a62644f84728'),backdropPath:backdrop('photo-1485846234645-a62644f84728'),releaseDate:'2025-09-10',rating:7.9,voteCount:2198,popularity:77,genres:[genres[11],genres[7],genres[0]],runtime:121,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n06',title:'Static Hearts',overview:'Two musicians discover that their unfinished album predicts moments in their own lives.',posterPath:poster('photo-1524985069026-dd778a71c7b4'),backdropPath:backdrop('photo-1524985069026-dd778a71c7b4'),releaseDate:'2025-02-17',rating:7.7,voteCount:1604,popularity:72,genres:[genres[10],genres[6]],runtime:105,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n07',title:'The Last Harbor',overview:'A salvage crew finds a ship that should have disappeared eighty years ago.',posterPath:poster('photo-1536440136628-849c177e76a1'),backdropPath:backdrop('photo-1536440136628-849c177e76a1'),releaseDate:'2027-01-09',rating:8.1,voteCount:1102,popularity:86,genres:[genres[0],genres[5],genres[9]],runtime:129,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n08',title:'Lunar Bloom',overview:'A botanist grows a flower that only opens under the light of an eclipsed moon.',posterPath:poster('photo-1489599849927-2ee91cede3ba'),backdropPath:backdrop('photo-1489599849927-2ee91cede3ba'),releaseDate:'2027-02-20',rating:7.8,voteCount:821,popularity:68,genres:[genres[7],genres[6],genres[11]],runtime:102,mediaType:'movie',language:'en',ageRating:'PG'},
{id:'n09',title:'Concrete Echoes',overview:'A sound engineer records a voice in an abandoned metro tunnel that knows his name.',posterPath:poster('photo-1485846234645-a62644f84728'),backdropPath:backdrop('photo-1485846234645-a62644f84728'),releaseDate:'2026-03-29',rating:7.6,voteCount:1430,popularity:69,genres:[genres[8],genres[9],genres[12]],runtime:97,mediaType:'movie',language:'en',ageRating:'16+'},
{id:'n10',title:'Small Hours',overview:'A sharp-witted comedy about three strangers trapped overnight in a luxury cinema.',posterPath:poster('photo-1524985069026-dd778a71c7b4'),backdropPath:backdrop('photo-1524985069026-dd778a71c7b4'),releaseDate:'2026-05-04',rating:7.4,voteCount:900,popularity:64,genres:[genres[3],genres[4]],runtime:99,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n11',title:'Blue Hour',overview:'A photographer keeps finding the same mysterious woman in pictures taken years apart.',posterPath:poster('photo-1536440136628-849c177e76a1'),backdropPath:backdrop('photo-1536440136628-849c177e76a1'),releaseDate:'2025-12-01',rating:8.4,voteCount:3622,popularity:89,genres:[genres[6],genres[9],genres[10]],runtime:116,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n12',title:'Wild Signal',overview:'A ranger hears a transmission from beyond the edge of an unexplored national park.',posterPath:poster('photo-1489599849927-2ee91cede3ba'),backdropPath:backdrop('photo-1489599849927-2ee91cede3ba'),releaseDate:'2026-10-16',rating:8.0,voteCount:603,popularity:81,genres:[genres[0],genres[1],genres[11]],runtime:123,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n13',title:'Northbound',overview:'A young mechanic joins a cross-country convoy carrying a secret that could change the world.',posterPath:poster('photo-1485846234645-a62644f84728'),backdropPath:backdrop('photo-1485846234645-a62644f84728'),releaseDate:'2025-08-11',rating:7.5,voteCount:1300,popularity:70,genres:[genres[1],genres[6]],runtime:109,mediaType:'movie',language:'en',ageRating:'13+'},
{id:'n14',title:'Paper Satellites',overview:'An animation about two handmade satellites searching for the owner who launched them.',posterPath:poster('photo-1524985069026-dd778a71c7b4'),backdropPath:backdrop('photo-1524985069026-dd778a71c7b4'),releaseDate:'2025-04-20',rating:8.3,voteCount:2420,popularity:79,genres:[genres[2],genres[11],genres[6]],runtime:95,mediaType:'movie',language:'en',ageRating:'PG'},
{id:'n15',title:'Emberline',overview:'A firefighter returns home for one final shift and discovers the town has been evacuated for a reason.',posterPath:poster('photo-1536440136628-849c177e76a1'),backdropPath:backdrop('photo-1536440136628-849c177e76a1'),releaseDate:'2026-01-22',rating:7.9,voteCount:1778,popularity:74,genres:[genres[0],genres[6],genres[12]],runtime:115,mediaType:'movie',language:'en',ageRating:'16+'}
];
export const mockGenres=genres;
export const mockMovies=records;
export const mockDetails:Record<string,MovieDetails>=Object.fromEntries(records.map((movie,index)=>[movie.id,{
  ...movie,originalTitle:movie.title,
  cast:[
    {id:'p'+index+'1',name:'Avery Cole',character:'Mara',image:movie.posterPath},
    {id:'p'+index+'2',name:'Theo Mercer',character:'Eli',image:movie.backdropPath},
    {id:'p'+index+'3',name:'Nia Voss',character:'Rin',image:movie.posterPath},
    {id:'p'+index+'4',name:'Samir Holt',character:'Jon',image:movie.backdropPath}
  ],
  crew:[{id:'c'+index+'1',name:'Maya Quinn',job:'Director',image:movie.posterPath},{id:'c'+index+'2',name:'Eli Navarro',job:'Writer',image:movie.backdropPath}],
  reviews:[{id:'r'+index+'1',author:'Ari',rating:9,content:'Beautiful pacing, great atmosphere, and a final act that sticks with you.'},{id:'r'+index+'2',author:'Nox',rating:8,content:'Stylish without losing the story. The production design is a standout.'}],
  similar:records.filter(item=>item.id!==movie.id&&item.genres?.some(g=>movie.genres?.some(mg=>mg.id===g.id))).slice(0,6),
  recommendations:records.filter(item=>item.id!==movie.id).slice(index%5,(index%5)+6),
  productionCountries:['United States','United Kingdom'],studios:['Northstar Pictures','Meridian Works'],
  budget:32000000+index*1400000,revenue:68000000+index*2900000,collection:index%3===0?'The Meridian Collection':undefined
}]));
