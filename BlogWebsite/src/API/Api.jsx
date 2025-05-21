// import React from 'react'

// const Api = () =>
// {
//     const textApis = [
//         {
//             id: 1,
//             heading: "Lorem Ipsum Generator",
//             description: "Classic filler text used since the 1500s. Ideal for testing layouts and typography. Output is Latin-based pseudo-sentences.",
//             url: "https://loripsum.net/api",
//             image: "https://picsum.photos/id/1011/400/200"
//         },
//         {
//             id: 2,
//             heading: "Hipster Ipsum API",
//             description: "Generates stylish, ironic content full of buzzwords. Great for trendy web designs and modern startups. Filled with avocado toast, fixie bikes, and kale.",
//             url: "https://hipsum.co/api?type=hipster-centric&paras=2",
//             image: "https://picsum.photos/id/1025/400/200"
//         },
//         {
//             id: 3,
//             heading: "Bacon Ipsum Generator",
//             description: "A carnivore's Lorem Ipsum with meat references. Useful for BBQ, meat blogs, or just fun. Returns savory phrases like bacon, ham, and kielbasa.",
//             url: "https://baconipsum.com/api/?type=meat-and-filler&paras=2",
//             image: "https://picsum.photos/id/1080/400/200"
//         },
//         {
//             id: 4,
//             heading: "Cupcake Ipsum Generator",
//             description: "Sweet-themed filler text that talks about frosting, sprinkles, and donuts. Fun for dessert shop mockups or bakery themes. Just yummy text everywhere.",
//             url: "https://api.example.com/cupcake-ipsum",
//             image: "https://picsum.photos/id/1060/400/200"
//         },
//         {
//             id: 5,
//             heading: "Corporate Ipsum Generator",
//             description: "Simulates corporate buzzword gibberish like synergy, alignment, and bandwidth. Perfect for mocking up business landing pages. Endless streams of jargon.",
//             url: "https://corporatebs-generator.sameerkumar.website/",
//             image: "https://picsum.photos/id/1003/400/200"
//         },
//         {
//             id: 6,
//             heading: "Startup Ipsum Generator",
//             description: "Tech startup-sounding filler with words like pivot, MVP, or traction. Fits product demos, decks, and tech blogs. Sounds official, but says nothing.",
//             url: "https://api.example.com/startup-ipsum",
//             image: "https://picsum.photos/id/1043/400/200"
//         },
//         {
//             id: 7,
//             heading: "Office Ipsum API",
//             description: "Realistic office phrases to simulate internal documentation. Includes jargon like 'team alignment' and 'task prioritization'. Feels like being in a meeting.",
//             url: "https://www.officeipsum.com/api.php?amount=2",
//             image: "https://picsum.photos/id/1031/400/200"
//         },
//         {
//             id: 8,
//             heading: "Pirate Ipsum Generator",
//             description: "Arrr matey! Get dummy text filled with swashbuckling lingo. Useful for games, pirate sites, or Halloween fun. Talk like a true buccaneer.",
//             url: "https://api.example.com/pirate-ipsum",
//             image: "https://picsum.photos/id/1012/400/200"
//         },
//         {
//             id: 9,
//             heading: "Cat Ipsum Generator",
//             description: "Purrfect for cat lovers! Filler with phrases like 'meow meow', 'nap in sun'. Ideal for pet shops or fun interfaces. Cat-approved nonsense.",
//             url: "https://catipsum.com/api.php?amount=2",
//             image: "https://placekitten.com/400/200"
//         },
//         {
//             id: 10,
//             heading: "Zombie Ipsum Generator",
//             description: "Dark and gory phrases that mimic a zombie apocalypse. Works great for horror themes or Halloween pages. Full of brains, blood, and terror.",
//             url: "https://zombieipsum.herokuapp.com/api/?type=meat-and-filler",
//             image: "https://picsum.photos/id/1020/400/200"
//         },
//         {
//             id: 11,
//             heading: "Bible Ipsum Generator",
//             description: "Spiritual-sounding dummy text styled like scriptures. Mimics holy verse formatting and tone. Great for faith-based design or parody content.",
//             url: "https://api.example.com/bible-ipsum",
//             image: "https://picsum.photos/id/1015/400/200"
//         },
//         {
//             id: 12,
//             heading: "Movie Quotes Ipsum",
//             description: "Outputs legendary lines from famous films. Entertaining for movie blogs or fan apps. Adds pop culture flavor to dull content.",
//             url: "https://api.example.com/movie-ipsum",
//             image: "https://picsum.photos/id/1033/400/200"
//         },
//         {
//             id: 13,
//             heading: "Shakespeare Ipsum Generator",
//             description: "Fancy, old-English style prose inspired by the Bard. Great for theater projects, literature sites, or medieval themes. 'Thou art content filler!'",
//             url: "https://api.example.com/shakespeare-ipsum",
//             image: "https://picsum.photos/id/1024/400/200"
//         },
//         {
//             id: 14,
//             heading: "Comic Book Ipsum",
//             description: "POW! BAM! Generates superhero-style words and battle phrases. Perfect for comic readers, games, or action scenes. Adds dramatic flair.",
//             url: "https://api.example.com/comic-ipsum",
//             image: "https://picsum.photos/id/1068/400/200"
//         },
//         {
//             id: 15,
//             heading: "Anime Ipsum Generator",
//             description: "Kawaii and action-filled Japanese-style quotes. Mimics lines from anime and manga. Otaku-friendly filler for fan projects.",
//             url: "https://api.example.com/anime-ipsum",
//             image: "https://picsum.photos/id/1001/400/200"
//         },
//         {
//             id: 16,
//             heading: "Sci-Fi Ipsum Generator",
//             description: "Futuristic phrases with AI, space, robots, and time travel. Great for tech, games, and sci-fi blog layouts. Resistance is futile!",
//             url: "https://api.example.com/scifi-ipsum",
//             image: "https://picsum.photos/id/1071/400/200"
//         },
//         {
//             id: 17,
//             heading: "Fantasy Ipsum Generator",
//             description: "Elvish lore and dragons abound in this mystical filler. Perfect for RPG, novels, or fantasy web designs. Let the quest begin!",
//             url: "https://api.example.com/fantasy-ipsum",
//             image: "https://picsum.photos/id/1027/400/200"
//         },
//         {
//             id: 18,
//             heading: "Greek Philosopher Ipsum",
//             description: "Thought-provoking filler inspired by Socrates, Plato, and Aristotle. Excellent for educational mockups. Deep-sounding but meaningless.",
//             url: "https://api.example.com/philosophy-ipsum",
//             image: "https://picsum.photos/id/1038/400/200"
//         },
//         {
//             id: 19,
//             heading: "Coding Ipsum Generator",
//             description: "Lorem Ipsum for developers, with references to functions, bugs, and commits. Great for dev tools, blogs, or code tutorials. 100% geek-approved.",
//             url: "https://api.example.com/code-ipsum",
//             image: "https://picsum.photos/id/1057/400/200"
//         },
//         {
//             id: 20,
//             heading: "AI Ipsum Generator",
//             description: "Tech-flavored dummy text with neural nets, data sets, and AGI. Ideal for ML/AI product designs and presentations. Smart content made dumb.",
//             url: "https://api.example.com/ai-ipsum",
//             image: "https://picsum.photos/id/1084/400/200"
//         }

//     ];

//     return (
//         <div className='container'>
           
//         </div>
//     )
// }

// export default Api
