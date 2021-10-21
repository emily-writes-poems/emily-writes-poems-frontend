import React from 'react';

const About = () => {
    return (
        <div className='container about'>
            <p className='font-2 color-accent-2' align='center'>Poems about myself, the world as I see it, and the worlds that I've created and imagined.</p>

            <details>
                <summary>about me.</summary>
                <div>
                    <p>Hi! I'm Emily. You're probably here because I personally know you and I sent you the link, or you found this link on my personal website. Either way, you might already know a little bit about me. I like to code and I like to write. I've always enjoyed expressing myself creatively through my work.</p>
                    <p>In college I studied computer science and minored in creative writing. People always ask "why creative writing" and the main answer is: I love stories! It stems from my love of reading. With creative writing, I get to create my <i>own</i> characters and worlds? Sounds fun to me!</p>
                </div>
            </details>
            <details>
                <summary>my "writing style".</summary>
                <div>
                    <p>Whatever comes out of my mind goes onto the page, and then I edit and refine wording and structure. I <i>love</i> using <a className='link-style' href="https://literarydevices.net/enjambment/">enjambment</a>; it's interesting, it's ambiguous, I love it. Most of my poems are in free verse, not following any specific meter or rhyming pattern. People have described my poems as "calming", "full of imagery", "slice of life", "having really unique details and descriptions" . . . thank you for all of those, it's lovely to hear! From my own reading, I've discovered some aspects of my "writing style":</p>
                    <ul>
                        <li key='ws1'><i>salt. the taste of salt. salt in the air.</i> I write about it a surprising amount.</li>
                        <li key='ws2'><i>vibrant, rich colors.</i> No pastel colors here. Red shows up often.</li>
                        <li key='ws3'><i>connection.</i> Big theme in my writing.</li>
                        <li key='ws4'><i>light & darkness.</i> For every poem that's set in sunshine, there's one that takes place in fog or night or shade.</li>
                        <li key='ws5'><i>the moon.</i> This ties in with the light & darkness thing. The image of the moon always inspires my writing.</li>
                        <li key='ws6'><i>comma splices.</i> It's like I don't know how to use commas. The rules of the English language are meant to be broken. I kinda like comma splices, don't you?</li>
                    </ul>
                </div>
            </details>
            <hr/>
        </div>
    );
}

export default About;
