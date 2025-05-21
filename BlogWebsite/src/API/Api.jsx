import React from 'react'
import Card from '../Components/Card'

const Api = () =>
{
    const textApis = [
        {
            id: 1,
            heading: "Lorem Ipsum Generator",
            description: "Classic filler text used since the 1500s. Ideal for testing layouts and typography.",
            url: "https://loripsum.net/api",
            image: "https://picsum.photos/id/1011/400/200",
            author: "Alice Ipsum",
            likes: 24,
            date: "April 10, 2025",
            category: "Typography",
            readTime: "2 min"
        },
        {
            id: 2,
            heading: "Hipster Ipsum API",
            description: "Generates stylish, ironic content full of buzzwords. Great for trendy web designs.",
            url: "https://hipsum.co/api?type=hipster-centric&paras=2",
            image: "https://picsum.photos/id/1025/400/200",
            author: "Bob Trend",
            likes: 18,
            date: "April 11, 2025",
            category: "Design",
            readTime: "3 min"
        },
        {
            id: 3,
            heading: "Bacon Ipsum Generator",
            description: "A carnivore's Lorem Ipsum with meat references. Useful for BBQ or meat blogs.",
            url: "https://baconipsum.com/api/?type=meat-and-filler&paras=2",
            image: "https://picsum.photos/id/1080/400/200",
            author: "Chef Bacon",
            likes: 32,
            date: "April 12, 2025",
            category: "Food",
            readTime: "2 min"
        },
        {
            id: 4,
            heading: "Cupcake Ipsum Generator",
            description: "Sweet-themed filler text for dessert shop mockups or bakery themes.",
            url: "https://api.example.com/cupcake-ipsum",
            image: "https://picsum.photos/id/1060/400/200",
            author: "Daisy Frosting",
            likes: 40,
            date: "April 13, 2025",
            category: "Bakery",
            readTime: "2 min"
        },
        {
            id: 5,
            heading: "Corporate Ipsum Generator",
            description: "Corporate buzzword gibberish like synergy, alignment, and bandwidth.",
            url: "https://corporatebs-generator.sameerkumar.website/",
            image: "https://picsum.photos/id/1003/400/200",
            author: "Mr. Jargon",
            likes: 12,
            date: "April 14, 2025",
            category: "Business",
            readTime: "4 min"
        },
        {
            id: 6,
            heading: "Startup Ipsum Generator",
            description: "Tech startup-sounding filler with words like pivot, MVP, or traction.",
            url: "https://api.example.com/startup-ipsum",
            image: "https://picsum.photos/id/1043/400/200",
            author: "Lana Launch",
            likes: 27,
            date: "April 15, 2025",
            category: "Tech",
            readTime: "3 min"
        },
        {
            id: 7,
            heading: "Office Ipsum API",
            description: "Realistic office phrases like 'team alignment' and 'task prioritization'.",
            url: "https://www.officeipsum.com/api.php?amount=2",
            image: "https://picsum.photos/id/1031/400/200",
            author: "Clark Cubicle",
            likes: 21,
            date: "April 16, 2025",
            category: "Workplace",
            readTime: "3 min"
        },
        {
            id: 8,
            heading: "Pirate Ipsum Generator",
            description: "Dummy text filled with swashbuckling lingo. Great for pirate themes.",
            url: "https://api.example.com/pirate-ipsum",
            image: "https://picsum.photos/id/1012/400/200",
            author: "Captain Ipsum",
            likes: 35,
            date: "April 17, 2025",
            category: "Fun",
            readTime: "2 min"
        },
        {
            id: 9,
            heading: "Cat Ipsum Generator",
            description: "Purrfect for cat lovers! Filler with phrases like 'meow meow', 'nap in sun'.",
            url: "https://catipsum.com/api.php?amount=2",
            image: "https://placekitten.com/400/200",
            author: "Whiskers",
            likes: 50,
            date: "April 18, 2025",
            category: "Pets",
            readTime: "2 min"
        },
        {
            id: 10,
            heading: "Zombie Ipsum Generator",
            description: "Dark and gory phrases that mimic a zombie apocalypse.",
            url: "https://zombieipsum.herokuapp.com/api/?type=meat-and-filler",
            image: "https://picsum.photos/id/1020/400/200",
            author: "Zed Dead",
            likes: 29,
            date: "April 19, 2025",
            category: "Horror",
            readTime: "3 min"
        },
        {
            id: 11,
            heading: "Bible Ipsum Generator",
            description: "Spiritual-sounding dummy text styled like scriptures.",
            url: "https://api.example.com/bible-ipsum",
            image: "https://picsum.photos/id/1015/400/200",
            author: "Pastor Ipsum",
            likes: 17,
            date: "April 20, 2025",
            category: "Faith",
            readTime: "4 min"
        },
        {
            id: 12,
            heading: "Movie Quotes Ipsum",
            description: "Legendary lines from famous films. Adds pop culture flavor.",
            url: "https://api.example.com/movie-ipsum",
            image: "https://picsum.photos/id/1033/400/200",
            author: "Reel Writer",
            likes: 45,
            date: "April 21, 2025",
            category: "Entertainment",
            readTime: "3 min"
        },
        {
            id: 13,
            heading: "Shakespeare Ipsum Generator",
            description: "Old-English style prose inspired by the Bard.",
            url: "https://api.example.com/shakespeare-ipsum",
            image: "https://picsum.photos/id/1024/400/200",
            author: "Sir Ipsum",
            likes: 39,
            date: "April 22, 2025",
            category: "Literature",
            readTime: "4 min"
        },
        {
            id: 14,
            heading: "Comic Book Ipsum",
            description: "Generates superhero-style words and battle phrases.",
            url: "https://api.example.com/comic-ipsum",
            image: "https://picsum.photos/id/1068/400/200",
            author: "Stan Dummy",
            likes: 42,
            date: "April 23, 2025",
            category: "Comics",
            readTime: "3 min"
        },
        {
            id: 15,
            heading: "Anime Ipsum Generator",
            description: "Japanese-style quotes inspired by anime and manga.",
            url: "https://api.example.com/anime-ipsum",
            image: "https://picsum.photos/id/1001/400/200",
            author: "Otaku Ipsum",
            likes: 38,
            date: "April 24, 2025",
            category: "Anime",
            readTime: "3 min"
        },
        {
            id: 16,
            heading: "Sci-Fi Ipsum Generator",
            description: "Futuristic phrases with AI, space, robots, and time travel.",
            url: "https://api.example.com/scifi-ipsum",
            image: "https://picsum.photos/id/1071/400/200",
            author: "Dr. Future",
            likes: 33,
            date: "April 25, 2025",
            category: "Sci-Fi",
            readTime: "3 min"
        },
        {
            id: 17,
            heading: "Fantasy Ipsum Generator",
            description: "Elvish lore and dragons abound in this mystical filler.",
            url: "https://api.example.com/fantasy-ipsum",
            image: "https://picsum.photos/id/1027/400/200",
            author: "Mystic Ipsum",
            likes: 30,
            date: "April 26, 2025",
            category: "Fantasy",
            readTime: "4 min"
        },
        {
            id: 18,
            heading: "Greek Philosopher Ipsum",
            description: "Inspired by Socrates, Plato, and Aristotle. Deep-sounding nonsense.",
            url: "https://api.example.com/philosophy-ipsum",
            image: "https://picsum.photos/id/1038/400/200",
            author: "Philos Ipsum",
            likes: 22,
            date: "April 27, 2025",
            category: "Philosophy",
            readTime: "3 min"
        },
        {
            id: 19,
            heading: "Coding Ipsum Generator",
            description: "Lorem Ipsum for developers, with references to functions and bugs.",
            url: "https://api.example.com/code-ipsum",
            image: "https://picsum.photos/id/1057/400/200",
            author: "Codey Ipsum",
            likes: 55,
            date: "April 28, 2025",
            category: "Development",
            readTime: "2 min"
        },
        {
            id: 20,
            heading: "AI Ipsum Generator",
            description: "Tech-flavored dummy text with neural nets, data sets, and AGI.",
            url: "https://api.example.com/ai-ipsum",
            image: "https://picsum.photos/id/1084/400/200",
            author: "Neural Ipsum",
            likes: 48,
            date: "April 29, 2025",
            category: "AI",
            readTime: "3 min"
        }
    ];

    return (
        <div>
            {textApis.map(apis => (
                <Card key={apis.id} {...apis} />
            ))}
        </div>
    )
}

export default Api
