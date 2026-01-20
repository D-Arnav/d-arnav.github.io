import './Blog.css';
import { BlogTitle, BlogImage, Math } from './Blog';

function IITBlog() {
    return (
        <div className='blog-page'>
            <BlogTitle
                title={"Ø Source Models Leak What They Shouldn't ↛: Unlearning Zero-Shot Transfer in Domain Adaptation Through Adversarial Optimization"}
                author="Arnav Devalapally"
                date="Jan 2, 2026"
                highlight={"Ø Source Models Leak What They Shouldn't ↛: "}
            />
            <hr />

            <p>
                This post summarizes my recent research on machine unlearning in source-free domain adaptation,
                submitted to CVPR 2026. I explain why this problem matters, what we discovered, and how we solve it.
            </p>

            <BlogImage
                src="/blog/iit-blog/method.png"
                alt="Method Image"
                caption="Overview of the Proposed Method: SCADA-UL (Unlearning Source-exclusive ClAsses in Domain Adaptation)"
                scale={90}
            />

            <h3>Motivation</h3>
            <p>
                In practice, machine learning models are rarely trained once and deployed forever.
                They are adapted to new environments, through a process called <strong>Domain Adaptation (DA)</strong>.
                For example:
            </p>
            <ul>
                <li>from one geography to another,</li>
                <li>from one hospital to another,</li>
                <li>from one organization or policy regime to the next.</li>
            </ul>
            <p>
                These kinds of problems are especially common in <strong>Source Free Domain Adaptation (SFDA)</strong>,
                where only a pretrained source model and unlabeled target data are available, and no access to source data.
            </p>
            <p>
                However, during this work I observed a troubling phenomenon:
            </p>
            <blockquote>
                Source-free domain adaptation methods retain strong zero-shot performance on classes that never appear
                in the target domain.
            </blockquote>
            <p>
                This means the model is silently carrying over <em>source-exclusive</em> knowledge, even when it should be
                removed for privacy, legal, or safety reasons. Some examples include:
            </p>
            <ul>
                <li>
                    A land-use model adapted to a new region still recognizing sensitive areas such as
                    <em> airports</em> or <em>military zones</em>
                </li>
                <li>
                    A medical model adapted to a new hospital retaining knowledge of prohibited diagnoses
                </li>
            </ul>
            <p>
                Although supressing the model outputs on these classes is possible (simply setting the softmax outputs to zero),
                it is insufficient as the model still retains internal representations of these classes, which can be leaked through
                through <em>model inversion attacks</em> or <em>membership inference attacks</em>.
            </p>
            <p>
                This project asks a direct question:
            </p>
            <blockquote>
                Can we adapt a model to a new domain while unlearning source-exclusive classes, without access to source data?
            </blockquote>

            <h2>Problem Setting: SCADA-UL</h2>
            <BlogImage
                src="/blog/iit-blog/setting.png"
                alt="SCADA-UL Setting"
                caption="Conventional Unlearning vs. SCADA-UL Setting"
                scale={50}
            />
            <p>
                I introduce a new setting called: <strong>SCADA-UL: Unlearning Source-exclusive ClAsses in Domain Adaptation</strong>
            </p>
            <p>
                The constraints are intentionally strict so as to reflect real-world scenarios:
            </p>
            <ul>
                <li>No access to source training data</li>
                <li>No access to target examples of the classes to be forgotten</li>
            </ul>
            <p>
                This is much stricter than classical machine unlearning which assumes data access, or partial domain
                adaptation which suppresses transfer but does not guarantee forgetting.
            </p>
            <p>
                The end goal is to produce a model that behaves <strong>as if it were never trained on the forgotten classes at all</strong>, while still adapting effectively to the target domain.
            </p>

            <h2>Methodology</h2>
            <p>
                The method consists of three components:
            </p>

            <h4>1. Adversarial Forget Sample Generation</h4>
            <p>
                Without access to source data, I generate <em>adversarial samples</em> that maximally activate a source-exclusive
                (forget) class in the model. This is done through gradient-based optimization starting from random noise.
            </p>
            <BlogImage
                src="/blog/iit-blog/adversarial.png"
                alt="Adversarial Samples"
                caption="Adversarial samples of class 'backpack' don't visually resemble backpacks"
                scale={70}
            />
            <p>
                These samples act as a proxy for the missing forget data, and we observe that they generalize well, not only
                capturing the forget class in logit space (as optimization would suggest), but also resembling it in feature
                space. Interestingly, these samples do not visually resemble real data to us humans but as indistinguishable
                for the model.
            </p>

            <h4>2. Rescaled Labeling (Minimal Conflict)</h4>
            <p>
                This brings us to our key contribution, the use of <strong>rescaled labeling</strong> for these adversarial samples.
            </p>
            <p>
                Typically, random or uniform labels are assigned to these adversarial samples,
                so as to encourage the model to perform poorly on them. However this naive strategy conflicts with
                the domain adaptation objective, causing training instability and poor performance. We therefore
                propose a simple modification:
            </p>
            <ul>
                <li>zero out the forget class,</li>
                <li>rescale the remaining class probabilities to sum to 1.</li>
            </ul>
            <p>
                Formally, this is described by the equation below:
            </p>
            <Math display>
                {`
                
                y_\\text{rescaled} = 
                \\begin{cases} 
                0 & \\text{if } i = c_\\text{forget} \\\\
                \\frac{y_i}{\\sum_{j \\in c_\\text{retain}} y_j} & \\text{if } i \\in c_\\text{retain}
                \\end{cases}
                
                `}
            </Math>
            <p>We find that this simple solution:</p>
            <ul>
                <li>avoids catastrophic forgetting,</li>
                <li>minimizes conflict with domain adaptation,</li>
                <li>aligns gradients toward retained classes.</li>
            </ul>

            <h4>3. Joint Optimization</h4>
            <p>
                During each training iteration:
            </p>
            <ul>
                <li>a <strong>source-free domain adaptation loss</strong> aligns the model to the target domain,</li>
                <li>a <strong>machine unlearning loss</strong> suppresses forget classes using adversarial samples,</li>
                <li>adversarial samples are re-optimized against the updated model.</li>
            </ul>
            <p>
                This forms a stable min-max optimization loop.
            </p>

            <h2>Results</h2>
            <p>
                Across OfficeHome, Office31, DomainNet-126, and real-world medical datasets, the method consistently achieves <strong>retraining-level unlearning</strong>.
            </p>

            <h4>Representative Results (Multi-Class SCADA-UL)</h4>
            <table>
                <thead>
                    <tr>
                        <th>Dataset</th>
                        <th>Method</th>
                        <th>Target Retain Acc ↑</th>
                        <th>Target Forget Acc ↓</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>OfficeHome</td>
                        <td>Original SFDA</td>
                        <td>75.8</td>
                        <td>58.1</td>
                    </tr>
                    <tr>
                        <td>OfficeHome</td>
                        <td>Retrain (Oracle)</td>
                        <td>76.3</td>
                        <td><strong>0.0</strong></td>
                    </tr>
                    <tr>
                        <td>OfficeHome</td>
                        <td><strong>Ours</strong></td>
                        <td>75.1</td>
                        <td><strong>0.0</strong></td>
                    </tr>
                    <tr>
                        <td>DomainNet-126</td>
                        <td>Original SFDA</td>
                        <td>67.7</td>
                        <td>38.7</td>
                    </tr>
                    <tr>
                        <td>DomainNet-126</td>
                        <td>Retrain (Oracle)</td>
                        <td>66.3</td>
                        <td><strong>0.0</strong></td>
                    </tr>
                    <tr>
                        <td>DomainNet-126</td>
                        <td><strong>Ours</strong></td>
                        <td>65.6</td>
                        <td><strong>0.0</strong></td>
                    </tr>
                </tbody>
            </table>

            <p>
                I additionally evaluated <strong>membership inference attacks (MIA)</strong> to test whether forgotten classes leave residual traces.
            </p>

            <h4>Membership Inference Attack Accuracy</h4>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>Avg. MIA Accuracy ↓</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Original SFDA</td>
                        <td>64.5</td>
                    </tr>
                    <tr>
                        <td>Retrain (Oracle)</td>
                        <td>53.1</td>
                    </tr>
                    <tr>
                        <td><strong>Ours</strong></td>
                        <td><strong>42.2</strong></td>
                    </tr>
                </tbody>
            </table>
            <p>
                SCADA-UL consistently achieves <strong>lower MIA accuracy</strong>, indicating stronger privacy
                guarantees, even compared to methods that appear to forget based on accuracy alone.
            </p>

            <h4>Conclusion</h4>
            <p>
                This work shows that domain adaptation, when done naively, can quietly carry over information that should
                never transfer in the first place. By introducing <strong>SCADA-UL</strong>, we demonstrate that it's possible to forget
                source-exclusive classes just as effectively as retraining from scratch, without access to source data, while
                still adapting well to the target domain, and significantly improving privacy guarantees.
            </p>

            <h4>Acknowledgments</h4>
            <p>
                This work was conducted at <strong>IIT Hyderabad</strong>, and I thank the institute for the research environment
                and computational resources. I am grateful to recieve excellent guidance from Prof. <strong>Vineeth N Balasubramanian</strong>,
                and would also like to thank my co-authors <strong>Poornima Sanjay Jain</strong> and <strong>Kartik Srinivas </strong>
                for their valuable contributions.
            </p>
        </div>
    );
}

export default IITBlog;