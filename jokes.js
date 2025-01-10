const darkHumorJokes = [
    "Why dont graveyards ever get overcrowded? Because people are dying to get in.",
    "Why dont cannibals eat clowns? Because they taste funny.",
    "Why did the scarecrow win an award? Because he was outstanding in his field. Also, the competition was dead stiff.",
    "Why did the orphan get scolded for doing his homework? He was supposed to do it at home.",
    "Why dont orphans play hide and seek? Because good luck finding a home base.",
    "Whats the hardest part about eating a vegetable? Getting them out of the wheelchair.",
    "I have a joke about unemployment, but none of them work.",
    "Why did the man miss the funeral? He wasnt a mourning person.",
    "What do you call a cheap circumcision? A rip-off.",
    "Why dont grave robbers ever win arguments? Theyre always digging up old stuff.",
    "Whats red and bad for your teeth? A brick.",
    "Why did the blind man fall into a well? Because he couldnt see that well.",
    "Why did the orphan rob the bank? He needed some home improvement funds.",
    "Why dont cemeteries have Wi-Fi? Because people prefer to disconnect.",
    "Why dont ghosts ever lie? Because you can see right through them.",
    "Whats the difference between a joke and three dead bodies? Its not funny when you dont laugh.",
    "Why dont murderers ever play poker? They cant handle being dealt a bad hand.",
    "Why dont zombies ever argue? They dont have the brains for it.",
    "Why do some people go to haunted houses? To feel more alive.",
    "Why was the skeleton so calm? Because nothing gets under its skin."
];

function joker_king() {
    const randomIndex = Math.floor(Math.random() * darkHumorJokes.length)
    const joke = darkHumorJokes[randomIndex];
    document.getElementById(`joke`).textContent = joke;
}

