const Blog=require('./models/blog');

const blogs=[
    {
        date:'2022-11-03',
        img:'https://cdn.vox-cdn.com/thumbor/_yh9TTxqnA5Rl0UMUQ_fOPBPHWM=/0x0:1120x468/920x613/filters:focal(428x190:606x368):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70600816/Screen_Shot_2020_10_14_at_3.23.07_PM.0.png',
        title:"5G’s false start is over and the iPhone SE proves it",
        desc:'When I rejoined The Verge in 2018, my first big assignment looked like an absolute peach — fly to the gorgeous Hawaiian island of Maui, sip cool drinks on the sand (The Verge paid for my trip; we don’t accept junkets), and become one of the first journalists to experience blazing 5G speeds at a Qualcomm event. Instead, I found myself exposing a lie. The first real-world 5G test turned out to be a dud, the speeds misleading at best, covering up the fact Verizon and AT&T’s millimeter-wave (mmWave) 5G wasn’t ready.'
    },
    {
        date:'2022-03-09',
        img:'https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1238371359.jpeg?w=430&h=230&crop=1',
        title:'TikTok launches a music distribution platform, SoundOn',
        desc:'TikTok has already achieved massive influence in today’s music industry, sending songs that find popularity on the app to the top of the Billboard charts. Now the company is launching its own music marketing and distribution platform, SoundOn, to help more artists get their music heard. The new platform allows artists to upload their music directly to TikTok and to parent company ByteDance’s own music streaming service Resso, in addition to global streaming platforms including Apple Music, Spotify, Pandora, Deezer and Tencent’s Joox.'
    },
   
    {
        date:'2022-03-02',
        img:'https://cdn.vox-cdn.com/thumbor/vzhTWx1ueBxZvH_ZpjSDBHzzBlk=/0x0:1080x720/920x613/filters:focal(454x274:626x446):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70570768/61d884086c3dcf21a4f5f774_Scooters_p_1080.0.png',
        title:'Ford sells electric scooter unit Spin to Berlin’s Tier',
        desc:'Ford is selling its electric scooter operation Spin to one of Europe’s top shared mobility companies. Tier Mobility will take over all of Spin’s operations, marking the first time the Berlin-based scooter company will have a foothold in North America. The companies declined to disclose the sale price, though the CEO of Tier said it was an all-stock deal.'
    },
    {
        date:'2022-03-10',
        img:'https://techcrunch.com/wp-content/uploads/2022/03/51924933910_9627ae096e_o.jpg?w=430&h=230&crop=1',
        title:' SpaceX launches 48 more Starlink satellites on an ‘American broomstick’',
        desc:"​It’s up, up and away for another SpaceX Starlink mission. At 5:45 this morning PST, a Falcon 9 rocket lifted off from Space Launch Complex 40 at Cape Canaveral in Florida, adding 48 new satellites to SpaceX’s 2,000-strong constellation of internet-providing devices orbiting the Earth.This launch was the fourth for the booster, which landed on the drone ship “A Shortfall of Gravitas” in the Atlantic Ocean a few minutes into the mission."
    },
    {
        date:'2022-10-03',
        img:'https://cdn.vox-cdn.com/thumbor/8ozqZ1gSi2yC2LrULG8S0JdRHlI=/0x0:1900x1360/1820x1024/filters:focal(798x528:1102x832):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70600107/alopez_220304_4996_0007.0.jpg',
        title:'2024 VOLKSWAGEN ID BUZZ ELECTRIC MICROBUS REVEALED: LESS FLOWER, MORE POWER',
        desc:'The ID Buzz and its commercial equivalent, the ID Buzz Cargo, will arrive in Europe later this year, with a longer wheelbase version for US markets scheduled to make its debut in 2023 and go on sale here in 2024. The van has been slightly updated from the concept form that first captured many people’s imagination back in 2017. The grille is a little bit different, with larger air vents than you might typically expect from an electric vehicle. And the overall shape is boxier, with sharper angles and a taller road stance.'
    },
    
    {   date:'2022-11-03',
        img:'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/6644a073cca2e4b2fca2435713120a63.jpg',
        title:'Google Needs to Unlock Its Ad Privacy Black Box',
        desc:'Googles FloC was killed because it was a bad idea for privacy on the web. But we didn’t know exactly how bad until two MIT researchers tested it—over months, using technical approaches. That it was this difficult to add some transparency is unacceptable for a fundamental change to the web that would impact the majority of browser users. For the future of the internet to be more decentralized, accessible, and private, proposals like FLoC need to come with tools that researchers—and the public—can use to provide meaningful feedback.'
    }  
]

const seedDb=async()=>{
    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log('db seeded');
}

module.exports=seedDb;