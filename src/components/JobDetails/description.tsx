import React from "react";
import parse from "html-react-parser";
const html = `<div class="description">
                        
          <h2 class="mt5 t-20 t-bold mb4">
            About the job
          </h2>

<!---->
<!---->        <span>
                <strong>About Kraken<br>
<br>
</strong>As one of the largest and most trusted <strong>digital asset platforms</strong> globally, we are empowering people to experience the life-changing potential of crypto. Trusted by over 8 million consumer and pro traders, institutions, and authorities worldwide - our unique combination of products, services, and global expertise is helping tip the scales towards mass crypto adoption. But we’re only just getting started. We want to be pioneers in crypto and add value to the everyday lives of billions. Now is not the time to sit on the sidelines. Join us to bring crypto to the world.<br>
<br>
To ensure Kraken is the right fit for you, please ensure you read <strong>Kraken Culture Explained</strong> to find out more about us!<br>
<br>
<strong>About The Role<br>
<br>
</strong>We are seeking an experienced Global Creative Director to join the Kraken mission. You will be responsible for managing, and growing, a team of copywriters, art directors, producers along with partnering with our global design team to come up with marketing campaign ideas that reflect the Kraken brand and soul, using creative thinking to drive inspiration, awareness and engagement with both our existing clients and future growth audiences. You will be part of the Global Brand &amp; Creative organisation , reporting directly into the Global VP, Brand &amp; Creative and will collaborate closely with Design, Growth, Product Marketing, Content and Social teams at Kraken as well as external creative and media partners.<br>
<br>
You are a creative thinker, who sees a big picture, understands complex business problems and solves it with non-standard, creative ideas. Kraken is on a mission to accelerate the adoption of cryptocurrency so that you and the rest of the world can achieve financial freedom and inclusion, - we achieve this by creatively solving complex business problems.<br>
<br>
<strong>Responsibilities<br>
<br>
</strong><ul><li>Create; you’ll often be hands-on (ability to be in the weeds or at 30,000 feet when needed) with creative ideation, brand design and copy, as well as leading the existing team, and take full ownership of creative work from concept through execution</li><li>Direct; you’ll deliver clear art direction to your peers, reports, agencies, and freelance image makers to fulfill your vision.</li><li>Lead a long term creative strategy in order to solve a variety of complex business challenges within a fast paced crypto environment.</li><li>Determine a creative vision of product features &amp; Kraken’s brand. </li><li>Develop internal marketing campaigns that translate marketing objectives across business units into clear and motivating creative strategies.</li><li>Build, lead &amp; inspire a team of creative professionals. Set clear objectives, KPI’s and overall success measures.</li><li>Own high-level creative decisions, and oversee the creation &amp; development of creative assets.</li><li>Evaluating trends, assessing new data, and keeping up-to-date with the latest marketing techniques.</li><li>Collaborate cross functionally with creative design and other key stakeholders within the organisation.</li><li>Directing brainstorming meetings and creative sessions.<br>
<br>
</li></ul><strong>Requirements<br>
<br>
</strong><ul><li>10+ years experience in creative strategy roles within fast paced competitive environments.</li><li>Hand-on experience in creative process, marketing, design and brand development.</li><li>Experience in building strategic roadmaps for large, remote teams within a complex, high growth environment.</li><li>Have fine-tuned analytical skills</li><li>Be able to see the big picture, and have a thinker's mindset. </li><li>Understanding of crypto industry.</li><li>Previous experience scaling teams from the ground up.</li><li>You have led sophisticated, matrixed teams that are distributed globally.</li><li>Advanced in Marketing Analytic tools.<br>
<br>
</li></ul>#EU #US #Canada<br>
<br>
We’re powered by people from around the world with their own unique and diverse experiences. We value all Krakenites and their talents, contributions, and perspectives, regardless of their background. We encourage you to apply for roles where you don't fully meet the listed requirements, especially if you're passionate or knowledgable about crypto!<br>
<br>
As an equal opportunity employer we don’t tolerate discrimination or harassment of any kind. Whether that’s based on race, ethnicity, age, gender identity, citizenship, religion, sexual orientation, disability, pregnancy, veteran status or any other protected characteristic as outlined by federal, state or local laws.<br>
<br>
<strong>Stay in the know<br>
<br>
</strong><strong> Kraken Culture Explained <br>
<br>
</strong><strong> Follow us on Twitter <br>
<br>
</strong><strong> Catch up on our blog <br>
<br>
</strong><strong> Follow us on LinkedIn</strong>
<!---->        </span>
      
                        <br>
                                                    <a style="padding: 20px" href="https://web3jobs.so/r/16329" target="_blank" rel="noopener nofollow" class="btn btn-primary lg fixed__bottom"><span>Apply now</span></a>
                            <div class="hide-on-xs">
                                <a href="https://web3jobs.so/r/16329" target="_blank" rel="noopener nofollow" class="full btn btn-primary lg" style="max-width: 300px;"><span>Apply now</span></a>
                                <p class="italic text__color--gray-700">Please let Kraken Digital Asset Exchange know that you found this job on <strong>Web3Jobs.so</strong>. Your support will help us grow!</p>
                            </div>
                                            </div>`;
export default function Description() {
  return <>{parse(html)}</>;
}
