const songs = [];

const getSongs = async () => {
    const data = await fetch(`https://musicbrainz.org/ws/2/recording/?query=artist:%22Jerry+Heil%22&fmt=json&limit=100`);
    const res = await data.json();

    console.log(res);
}

getSongs()






