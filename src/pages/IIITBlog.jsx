import './Blog.css';
import { BlogTitle, BlogImage, Math } from './Blog';

function IIITBlog() {
    return (
        <div className="blog-page">
            <BlogTitle
                title="Scripture Text-Line Segmentation"
                author="Arnav Devalapally"
                date="June 2, 2023"
                highlight="Scripture"
            />
            <hr />
            <p>
                The problem statement is “Scripture text-line segmentation”, the goal is to find <em>horizontal lines</em> that <em>separate the text</em>. Finding these lines is an integral step in Optical Character Recognition.
            </p>
            <BlogImage
                src="/blog/iiit-blog/1-intro.png"
                alt="Text-Line Segmentation Example"
                caption="Text-line segmentation on a degraded manuscript."
                scale={40}
            />
            <p>
                Although it seems simple, the large amount of variation between images, noise, textures, and shadows make this a difficult task.
            </p>
            <h3> Week 1 - Testing out Algorithms </h3>
            <p>
                In the first week, I wanted to try using algorithms to find these lines, the first algorithm I tried was a modification to “Seam Carving”
            </p>
            <h5> 1. Seam Carving </h5>
            <p>
                Seam carving is a content-aware liquid resizing algorithm developed in 2007. It works by removing “Seams” which are paths that contribute to low amount of information.
            </p>
            <BlogImage
                src="/blog/iiit-blog/2-seamcarving.png"
                alt="Seam Carving Example"
                caption="Example of seam carving removing low energy seams."
                scale={40}
            />
            <p>
                After modifying the code to color the seems black rather than remove them, I was left with this.
            </p>
            <BlogImage
                src="/blog/iiit-blog/3-resultseamcarving.png"
                alt="Seam Carving Result"
                caption="Applying modified seam carving on a scripture image."
                scale={70}
            />
            <p>
                Although it works decently well, it crosses over to other lines in some regions, creates multiple lines, and sometimes doesn't work for a few images.
            </p>

            <h5> 2. Projection Profile Analysis </h5>
            <p>
                Projection profile is a histogram based method that sums up all the intensities over an axis.
            </p>
            <p>
                Since edges are usually straight, and have a low intensity (as they don't overlap with shadows in the text), I figured that the <em>minimas</em> of this histogram would correspond to <em>edges</em>
            </p>
            <BlogImage
                src="/blog/iiit-blog/8-projectionprofile.png"
                alt="Projection Profile Example"
                caption="Projection profile analysis for text-line segmentation."
                scale={90}
            />
            <p>
                This method performed well on 20 images with a <em>96% line accuracy</em>. However it was then that I found out I was working with the <em>wrong dataset</em>!
            </p>
            <p>
                I was working with <em>Greek Scriptures</em> that are of completely different quality than <em>South Asian and Indian Scriptures</em>
            </p>

            <h5>Greek Scriptures vs. South Asian Scriptures</h5>
            <p>
                Here are some major differences in context to the problem
            </p>
            <BlogImage
                src="/blog/iiit-blog/9-greekasianscripts.png"
                alt="Greek vs South Asian Scriptures"
                caption="Left: Greek Scripture, Right: South Asian Scripture."
                scale={90}
            />
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Greek Scriptures</th>
                        <th>South Asian Scriptures</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Spacing</td>
                        <td>Large, consistent vertical spacing</td>
                        <td>Small vertical spacing</td>
                    </tr>
                    <tr>
                        <td>Surface</td>
                        <td>Smooth stone surface</td>
                        <td>Usually Rough surface with different kinds of rocks</td>
                    </tr>
                    <tr>
                        <td>Letters</td>
                        <td>Fixed-sized blocky letters</td>
                        <td>Curvy Letters with <em>Diacritics, Ligatures</em></td>
                    </tr>
                </tbody>
            </table>
            <BlogImage
                src="/blog/iiit-blog/10-diacriticligature.png"
                alt="Diacritics and Ligatures"
                caption="Left: Diacritics, Right: Ligatures"
                scale={70}
            />
            <p>
                I tried some other variations of this method to work with South Asian Scriptures like:
            </p>
            <h5> Projection Profile with Fourier Series </h5>
            <BlogImage
                src="/blog/iiit-blog/11-fourieranalysis.png"
                alt="Projection Profile with Fourier Series"
                scale={80}
            />
            <h5> Projection Profile with Energy Image </h5>
            <BlogImage
                src="/blog/iiit-blog/4-energy.png"
                alt="Projection Profile with Energy Image"
                scale={80}
            />
            <h5> Projection Profile with Skew Correction </h5>
            <BlogImage
                src="/blog/iiit-blog/12-skewcorrection.png"
                alt="Projection Profile with Skew Correction"
                scale={80}
            />
            <p>
                In the end, none of them worked well enough, there was just too much variation in the data to go for an algorithmic approach
            </p>

            <h3> Week 2, 3 - Collecting Data </h3>
            <p>
                As the algorithmic approach didn't work, naturally I wanted to try using deep learning. However there is no public labeled data set for South Asian / Indian Scriptures.
            </p>
            <p>
                I had to create one by <em>web scraping</em> various pages, using <em>google lens</em> to reverse image search, and finding small unlabeled datasets.
            </p>
            <p>
                This process was very long and spanned about 2 weeks.
            </p>
            <p>
                In the end, I collected <em>165 images</em> out of which <em>25 are “Easy”</em>, <em>65 “Medium”</em> and <em>75 “Hard”</em>.
            </p>
            <p>
                I created a JSON file to store the link, translation, difficulty and the segmented and binarized ground truth of the images.
            </p>
            <h5> The JSON File </h5>
            <BlogImage
                src="/blog/iiit-blog/5-json.png"
                alt="JSON File"
                scale={95}
            />

            <h4> Week 4 - Annotation </h4>
            <p>
                A supervised machine learning model <em>not only requires the data</em>, but also the <em>labeled ground truth</em>. These labels must be done by a human through the use of tools.
            </p>
            <p>
                The first task for the ML model would be to binarize the images - convert it into <em>black and white</em> pixels corresponding to the carvings and background.
            </p>
            <p>
                This would reduce the number of features that the model would have to deal with and hence help the model generalize better.
            </p>

            <BlogImage
                src="/blog/iiit-blog/13-binarization.png"
                alt="Binarization Process"
                caption="Left: Original Image, Right: Ideal Binarized Image"
                scale={80}
            />

            <p>
                Each image is manually binarized by marking the polygons corresponding to each carving and filling the polygon with white pixels.
            </p>

            <BlogImage
                src="/blog/iiit-blog/6-annotation.png"
                alt="Annotation"
                caption="Manual annotation of binarized images using polygon tool."
                scale={80}
            />

            <p>
                This process takes around 30mins - 1hr per image due to the sheer number of carvings per image.
            </p>

            <h3> Future Plans </h3>

            <p>
                As the annotation takes a large amount of time, I plan to only annotate <em>8-10 images</em> and try “Fine-tuning” a pretrained Deep Learning model. This method is called transfer learning
            </p>

            <BlogImage
                src="/blog/iiit-blog/7-transferlearning.png"
                alt="Transfer Learning"
                caption="Transfer learning"
                scale={80}
            />

            <p>
                The model I am planning to Fine-Tune is called DocEnTr which is a <em>Vision Transformer-Based Document Binarizor</em>. It was originally trained on documents and doesn't perform well on scriptures, but with some fine tuning, it should perform well on scriptures too.
            </p>

            <h5> DocEnTr without Finetuning </h5>

            <BlogImage
                src="/blog/iiit-blog/14-docentr.png"
                alt="DocEnTr without Finetuning"
                scale={80}
            />

            <p>
                For the entire task, I plan to follow a 3 stage process:
                <ol>
                    <li>Object Detection</li>
                    <li>Image Binarization</li>
                    <li>Text Line Segmentation</li>
                </ol>
            </p>

            <BlogImage
                src="/blog/iiit-blog/15-final.png"
                alt="3 Stage Task"
                caption="3 Stage Process for Text-Line Segmentation"
                scale={80}
            />

            <h3> Thank you! </h3>

            <br />

            <h5>Acknowledgements</h5>
            <p>
                This work was done under the guidance of <em>Ravi Kiran Sarvadevabhatla</em> at the <em>CVIT Lab, IIIT Hyderabad</em>.
            </p>

        </div >
    );
}

export default IIITBlog;