export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

// Random Unsplash image URLs for album covers
const randomCovers = [
  "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=300&auto=format",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=300&auto=format"
];

// For You section songs
export const songs: Song[] = [
  {
    id: "1",
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "4:16",
    cover: randomCovers[0]
  },
  {
    id: "2",
    title: "Demons",
    artist: "Imagine Dragons",
    album: "Night Visions",
    duration: "5:24",
    cover: randomCovers[1]
  },
  {
    id: "3",
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "6:23",
    cover: randomCovers[2]
  },
  {
    id: "4",
    title: "Ghost Stories",
    artist: "Coldplay",
    album: "Ghost Stories",
    duration: "3:10",
    cover: randomCovers[3]
  },
  {
    id: "5",
    title: "Sparks",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "4:23",
    cover: randomCovers[4]
  },
  {
    id: "6",
    title: "Viva La Vida",
    artist: "Coldplay",
    album: "Viva la Vida",
    duration: "5:32",
    cover: randomCovers[5]
  },
  {
    id: "7",
    title: "Hymn for the weekend",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "2:23",
    cover: randomCovers[6]
  },
  {
    id: "8",
    title: "Pain",
    artist: "Ryan Jones",
    album: "Pain",
    duration: "3:12",
    cover: randomCovers[7]
  }
];

// Top Tracks section songs
export const topTracks: Song[] = [
  {
    id: "t1",
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "4:16",
    cover: randomCovers[0]
  },
  {
    id: "t2",
    title: "Demons",
    artist: "Imagine Dragons",
    album: "Night Visions",
    duration: "5:24",
    cover: randomCovers[1]
  },
  {
    id: "t3",
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "6:23",
    cover: randomCovers[2]
  },
  {
    id: "t4",
    title: "Ghost Stories",
    artist: "Coldplay",
    album: "Ghost Stories",
    duration: "3:10",
    cover: randomCovers[3]
  },
  {
    id: "t5",
    title: "Sparks",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "4:23",
    cover: randomCovers[4]
  },
  {
    id: "t6",
    title: "Viva La Vida",
    artist: "Coldplay",
    album: "Viva la Vida",
    duration: "5:32",
    cover: randomCovers[5]
  },
  {
    id: "t7",
    title: "Hymn for the weekend",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "2:23",
    cover: randomCovers[6]
  },
  {
    id: "t8",
    title: "Pain",
    artist: "Ryan Jones",
    album: "Pain",
    duration: "3:12",
    cover: randomCovers[7]
  }
];

// Favorites section songs
export const favorites: Song[] = [
  {
    id: "f1",
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "4:16",
    cover: randomCovers[0]
  },
  {
    id: "f2",
    title: "Demons",
    artist: "Imagine Dragons",
    album: "Night Visions",
    duration: "5:24",
    cover: randomCovers[1]
  },
  {
    id: "f3",
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "6:23",
    cover: randomCovers[2]
  },
  {
    id: "f4",
    title: "Ghost Stories",
    artist: "Coldplay",
    album: "Ghost Stories",
    duration: "3:10",
    cover: randomCovers[3]
  },
  {
    id: "f5",
    title: "Sparks",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "4:23",
    cover: randomCovers[4]
  },
  {
    id: "f6",
    title: "Viva La Vida",
    artist: "Coldplay",
    album: "Viva la Vida",
    duration: "5:32",
    cover: randomCovers[5]
  },
  {
    id: "f7",
    title: "Hymn for the weekend",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "2:23",
    cover: randomCovers[6]
  },
  {
    id: "f8",
    title: "Pain",
    artist: "Ryan Jones",
    album: "Pain",
    duration: "3:12",
    cover: randomCovers[7]
  }
];

// Recently Played section songs
export const recentlyPlayed: Song[] = [
  {
    id: "r1",
    title: "Starboy",
    artist: "The Weeknd",
    album: "Starboy",
    duration: "4:16",
    cover: randomCovers[0]
  },
  {
    id: "r2",
    title: "Demons",
    artist: "Imagine Dragons",
    album: "Night Visions",
    duration: "5:24",
    cover: randomCovers[1]
  },
  {
    id: "r3",
    title: "Mouth of the river",
    artist: "Imagine Dragons",
    album: "Evolve",
    duration: "6:23",
    cover: randomCovers[2]
  },
  {
    id: "r4",
    title: "Ghost Stories",
    artist: "Coldplay",
    album: "Ghost Stories",
    duration: "3:10",
    cover: randomCovers[3]
  },
  {
    id: "r5",
    title: "Sparks",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "4:23",
    cover: randomCovers[4]
  },
  {
    id: "r6",
    title: "Viva La Vida",
    artist: "Coldplay",
    album: "Viva la Vida",
    duration: "5:32",
    cover: randomCovers[5]
  },
  {
    id: "r7",
    title: "Hymn for the weekend",
    artist: "Coldplay",
    album: "A Head Full of Dreams",
    duration: "2:23",
    cover: randomCovers[6]
  },
  {
    id: "r8",
    title: "Pain",
    artist: "Ryan Jones",
    album: "Pain",
    duration: "3:12",
    cover: randomCovers[7]
  }
];
