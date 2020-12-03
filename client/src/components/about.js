import React from 'react';

function About(){
    return (
        <div className='container'>
            <p className='font-1 color-accent-2' align='center'>Poems about myself, the world as I see it, and the people and worlds that I've created and imagined.</p>

            <details>
                <summary>about me.</summary>
                <div>
                    <p>Hi! I'm Emily. You're probably here because I personally know you and I sent you the link, or you found this link on my personal website. Either way, you might already know a little bit about me. I like to code and I like to write. I've always enjoyed expressing myself creatively through my work.</p>
                    <p>In college I studied computer science and minored in creative writing. People always ask "why creative writing" and the main answer is: I love stories! It stems from my love of reading. With creative writing, I get to create my <i>own</i> characters and worlds? Sounds fun to me!</p>
                </div>
            </details>

            <details>
                <summary>writing poems.</summary>
                <div>
                    <p>I really started creative writing with short stories. I liked creating characters and exploring their worlds. In sophomore year of college, I took an intro to creative writing class and one of our assignments was to write a poem. We were completely free to write about whatever we wanted, in any form we wanted. So I wrote the poem <a className='link-style' href='/poem/silver'>"Silver"</a>. The process of planning, writing, and revising the poem was so rewarding, and I gained an appreciation for poetry. Since then I've taken an intermediate poetry course and an advanced poetry workshop. I cherished moments in my creative writing classes when we'd discuss each other's writing and I'd get to hear feedback on my work directly from my fellow students.</p>
                    <p>For me, poetry is a way to express my ideas and thoughts with virtually no limits. I don't typically write in any specific poetic form (like sonnet or those others you probably learned about in high school), and I don't usually write with meter or rhyme in mind. So like, the definition of free verse.</p>
                    <p>My poems usually start with an idea, a specific image, something that grabs my mind and shouts <i>you need to write something about me!</i> Sometimes the title for a poem comes first. I'm inspired a lot by music, TV, movies, books that I've read. I'm also inspired by what happens in my own life and in the lives of people around me.</p>
                    <p>Occasionally, I'll incorporate ideas from my short stories. Some examples are my poems <a className='link-style'  href='/poem/moon'>"moon"</a> and <a className='link-style' href='/poem/withthecandlewick'>"With the Candle Wick"</a>, which are inspired by the same short story. I also love little callbacks and tie-ins across my poems.</p>
                </div>
            </details>

            <details>
                <summary>my "writing style".</summary>
                <div>
                    <p>Whatever comes out of my mind goes onto the page, and then I edit and refine wording and structure. I <i>love</i> using <a className='link-style' href="https://literarydevices.net/enjambment/">enjambment</a>; it's interesting, it's ambiguous, I love it. Most of my poems are in free verse, not following any specific meter or rhyming pattern. People have described my poems as "calming", "full of imagery", "slice of life", "having really unique details and descriptions" . . . thank you for all of those, it's lovely to hear! From my own reading, I've discovered some aspects of my "writing style":</p>
                    <ul>
                        <li><i>salt. the taste of salt. salt in the air.</i> I write about it a surprising amount.</li>
                        <li><i>vibrant, rich colors.</i> No pastel colors here. Red shows up often.</li>
                        <li><i>connection.</i> Big theme in my writing.</li>
                        <li><i>light & darkness.</i> For every poem that's set in sunshine, there's one that takes place in fog or night or shade.</li>
                        <li><i>the moon.</i> This ties in with the light & darkness thing. The image of the moon always inspires my writing.</li>
                        <li><i>comma splices.</i> Those occur outside of my poems too.</li>
                    </ul>
                </div>
            </details>

            <details>
                <summary>what you can explore here.</summary>
                <div>
                    <p>On the page you're currently on you will find the list of links to all of my poems. Each poem page has the poem itself, then an explanation of the poem's title and what the poem is about or what I was thinking about when writing it. I'm a sucker for behind-the-scenes with all creative processes, and I hope some might find these fun! Each poem page also has statistics like word and line counts. Lastly, you'll find links to other poems that may be similar.</p>
                    <p>I'm always super happy to receive any comments on my work. One of the most fun parts of sharing my writing is to see what people think the inspiration was, or what came to mind when they were reading a poem. I'll have a system soon to make it easy to send comments directly from the poem page.</p>
                </div>
            </details>

            <hr/>
        </div>
    )
}

export default About;
