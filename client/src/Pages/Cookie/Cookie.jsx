import { useState } from 'react';
import img1 from '/public/Cookie/img1.jpg';
import './Cookie.scss';
import { GrLinkNext } from "react-icons/gr";
import down from '/public/Cookie/down.svg'
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import Button from '../../components/Button/Button';


const Cookie = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleVisibility = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='overflow'>
            <section>
                <div>
                    <div className='Navbar-img'>
                        <img src={img1} alt="Culinan" />
                        <div className='img-content'>
                            <h2>CHARGING SPECTRE</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='background-cookie'>
                        <div className='animated-text text-font'>
                            <h2>Modifications and Details</h2>
                            <div>
                                <div className="report-buttons cookie-report-buttons">
                                    <Button label= 'Accept selected' style={{backgroundColor: 'transparent', color: 'White', borderColor: 'white'}}/>
                                    <Button label= 'Reject' style={{backgroundColor: 'transparent', color: 'White', borderColor: 'white'}}/>
                                    <Button label= 'Accept all' style={{backgroundColor: 'white', color: 'black', borderColor: 'white'}}/>
                                </div>
                            </div>
                            <p>In the following paragraph, you'll learn more about the purposes for which cookies are used.</p>
                            <div className='Cookie-text'>
                                <section>
                                    <div>
                                        <div>
                                            <h2>Analytics and Marketing Cookies </h2> 
                                            <ToggleButton/>
                                        </div>
                                        <p>Based on your consent, we store and read information on your end device,
                                            in order to subsequently process the collected personal data.</p>
                                        <p>This takes place in particular to:</p>
                                        <ul>
                                            <li>Present you with relevant advertisements, content or online banners</li>
                                            <li>Create online advertisements with information that may be of interest to you</li>
                                            <li>Prevent you from repeatedly being exposed to the same advertisements</li>
                                            <li>Provide you with a personalised user experience</li>
                                        </ul>
                                        <p>Moreover, based on your consent, your data may be transferred to
                                            countries outside of the extended EU* for a limited time, for example the US.
                                            As a rule, this transfer will be additionally secured by
                                            the conclusion of EU standard contractual clauses, if necessary, with supplementary
                                            contractual, organisational or technical measures.</p>
                                    </div>
                                </section>
                                <section>
                                    <h2 onClick={toggleVisibility}>
                                        <img src={down} /> Open cookies and options in detail
                                    </h2>
                                    {isOpen && (
                                        <div>
                                            <p>Analytics and marketing cookies enable us to better
                                                understand your individual user behaviour on our websites,
                                                and make it possible to personalise the websites for you.</p>
                                            <p>For this purpose, we collect information about your activities on our websites and merge
                                                it into an interest profile with reference to a cookie ID.
                                                Said profile enables us to provide you with relevant content and product information.
                                                Furthermore, the cookies use the collected information to
                                                limit the amount of product information and to avoid an excessive presence.</p>
                                            <p>Analytics and marketing cookies, including those from selected third-party providers, so-called third-party cookies,
                                                are placed on our websites based on your consent. These cookies are usually under the exclusive control
                                                of the third-party providers. When you agree to their use, you consent to their use not only with respect to us, but
                                                also with the respect to the respective third-party provider. Further information on those cookies, as well as the
                                                respective third-party provider that
                                                controls these cookies, is available on the Cookie Policy page, including all
                                                integrated data processing by third party providers (e.g. tags, scripts, pixel).</p>
                                            <p>If you have separately consented to the processing of your personal data for
                                                marketing purposes, including the creation of a customer profile, for example
                                                in a declaration of consent after logging in, data from the interest profile
                                                may also be used for this purpose. Said data sharing requires that we can link
                                                the cookie ID to your customer profile,
                                                for instance when you visit our website and login with your account.</p>
                                        </div>
                                    )}
                                </section>
                                <section>
                                    <div>
                                        <h2>Essential Cookies</h2>
                                        <h2>Always on</h2>
                                    </div>
                                    <div>
                                        <p>We store and read essential cookies on your end device,
                                            in order to subsequently process the collected personal data.</p>
                                        <p>This takes place in particular to:</p>
                                        <ul>
                                            <li>Enable you to navigate between pages without losing your
                                                previous actions from the same browser session</li>
                                            <li>Provide you with multimedia content that meets your technical
                                                requirements</li>
                                            <li>Remember your past actions, such as the choice for your previous
                                                cookie consent</li>
                                            <li>Ensure our website is created error-free and to continue improving it</li>
                                            <li>Ensure an optimal load distribution when loading our websites</li>
                                            <li>Store your data for authentication purposes</li>
                                        </ul>
                                    </div>
                                </section>
                                <section>
                                    <h2 onClick={toggleVisibility}>
                                        <img src={down} /> Open cookies and options in detail
                                    </h2>
                                    {isOpen && (
                                        <div>
                                            <p>Analytics and marketing cookies enable us to better
                                                understand your individual user behaviour on our websites,
                                                and make it possible to personalise the websites for you.</p>
                                            <p>For this purpose, we collect information about your activities on our websites and merge
                                                it into an interest profile with reference to a cookie ID.
                                                Said profile enables us to provide you with relevant content and product information.
                                                Furthermore, the cookies use the collected information to
                                                limit the amount of product information and to avoid an excessive presence.</p>
                                            <p>Analytics and marketing cookies, including those from selected third-party providers, so-called third-party cookies,
                                                are placed on our websites based on your consent. These cookies are usually under the exclusive control
                                                of the third-party providers. When you agree to their use, you consent to their use not only with respect to us, but
                                                also with the respect to the respective third-party provider. Further information on those cookies, as well as the
                                                respective third-party provider that
                                                controls these cookies, is available on the Cookie Policy page, including all
                                                integrated data processing by third party providers (e.g. tags, scripts, pixel).</p>
                                            <p>If you have separately consented to the processing of your personal data for
                                                marketing purposes, including the creation of a customer profile, for example
                                                in a declaration of consent after logging in, data from the interest profile
                                                may also be used for this purpose. Said data sharing requires that we can link
                                                the cookie ID to your customer profile,
                                                for instance when you visit our website and login with your account.</p>
                                        </div>
                                    )}
                                </section>
                                <section>
                                    <div>
                                        <p>Responsible as defined by data protection law: Rolls-Royce Motor Cars Ltd.</p>
                                        <h2>Cookies and Modifications</h2>
                                        <p>In the following paragraphs, we'll explain our purposes for using cookies and similar
                                            technologies on our websites, we also offer you the opportunity to modify your consent
                                            to our use or to revoke your consent at any time.</p>
                                        <h2>What are Cookies?</h2>
                                        <p>Cookies and web storage technologies, such as Local Storage and Session Storage,
                                            referred to as "cookies", facilitate your interaction with our websites. As soon
                                            as you visit our websites, cookies are downloaded by the internet browser to your
                                            end device, for example as a small text file. Third-party technologies, like scripts,
                                            pixels and tags, which we integrate into our websites for advertising purposes, also
                                            place cookies on your end device. In the following paragraphs, we'll explain to you what
                                            we use these technologies for, and how to adjust the settings to your needs.
                                        </p>
                                        <h2>Purposes of Cookies</h2>
                                        <p>Cookies take care of many different tasks that contribute to a seamless and
                                            interactive online experience. For this to work, you need to always use the
                                            same end device and the same browser. Some specific cookies are essential
                                            for the running and maintenance of our websites, because they enable us to:</p>
                                        <ul>
                                            <li>Provide you with the services of your preference at all times</li>
                                            <li>Present you with specific and relevant information</li>
                                            <li>Offer you a seamless and comfortable online experience</li>
                                        </ul>
                                        <h2>Recognition and Response</h2>
                                        <p>Cookies show us how you use and interact with our websites,
                                            for instance, when you save your settings and user ID. This
                                            helps us to:</p>
                                        <ul>
                                            <li>Provide you with a more personal experience by bringing you to
                                                the most important pages in a more efficient way</li>
                                            <li>Remind us of some of your personal preferences</li>
                                            <li>Guide you to useful content or pages</li>
                                        </ul>
                                        <h2>Continuous Improvements</h2>
                                        <p>Cookies help us understand how visitors use our websites, and they enable
                                            us to make any necessary improvements. For example, cookies make it possible
                                            to analyse what type of content is popular, and create similar topics that could
                                            be equally relevant to our visitors. This, in turn, helps us to:</p>
                                        <h2>Advertising and Retargeting</h2>
                                        <p>Our websites may use cookies for retargeting purposes. This means that cookies
                                            store information from your browsing history to track your interests and activity
                                            on our websites. This helps us, or our advertising partners, to present you with:</p>
                                        <ul>
                                            <li>Relevant advertising for our products on other websites,
                                                which is based on your visits to our website</li>
                                            <li>A combination of relevant and specific information,
                                                so that the displayed advertising matches your interests</li>
                                        </ul>
                                        <h2>Cookie Categories</h2>
                                        <p>Both data processing and associated cookies may be deployed on our websites.
                                            Depending on function and purpose, we have divided data processing into different
                                            categories. The intended purpose of each respective category is described on this
                                            page, and your consent to said categories can also be modified here. Each category
                                            lists all related data processing, if any, as well as the cookies that are normally
                                            used for said data processing.</p>
                                        <p>Please find further information on the various cookie categories at the start of this
                                            page, under "Modifications and Details".</p>
                                    </div>
                                    <div>
                                        <h2>What do you need to know about cookies?</h2>
                                        <p>Cookies support a better and faster online experience. A cookie is a
                                            small text file that stores internet settings. Almost every website
                                            uses cookies. When you visit a website for the first time, the cookies
                                            are downloaded by your internet browser. The next time you visit this
                                            website using the same end device, the website recognises you and displays
                                            content that is tailored to your personal needs and interests. The cookies
                                            mentioned below are synonymous with HTML5 Session Web Storage and HTML5 Local
                                            Web Storage.</p>
                                        <h2>First-Party Cookies</h2>
                                        <p>First party cookies are cookies that we, or contracted service providers,
                                            place on the website and with which you interact if you continue to use our website.</p>
                                        <h2>Third-Party Cookies</h2>
                                        <p>Our websites may also contain content from other providers (third-party providers), who possibly use their own cookies. Third-party providers
                                            may place cookies during your visit to our websites that request information like, for example, whether you loaded one of our websites. Please
                                            go to the website of the third-party provider to learn more about their use of cookies. In the detailed list under "Modifications and Details",
                                            you'll find information on the respective third-party providers and a reference to their data privacy statement. You can reject cookies from
                                            third-party providers at any time, by using the corresponding function on our websites. When you reject all third-party cookies, we'll only be
                                            able to provide you with the functionality on our websites that can be used without such cookies. In this case, the sections of our websites where
                                            third-party content is integrated, which requires the placing of third-party cookies, won't be available to you. A notification will inform you of this.
                                            If you still want to access the unavailable content on the website, you'll need to agree to the use of analytics and marketing cookies. Please use the
                                            corresponding function on our websites to give or revoke your consent. Please refer to the list of cookies for more information
                                            on integrated third-party data processing (e.g. tags, scripts, pixels).</p>
                                        <h2>Rejecting Cookies</h2>
                                        <p>When you reject cookies that require your consent, we'll duly accept your decision
                                            and refrain from placing the respective cookies. If you revoke your consent for
                                            cookies, we'll stop placing cookies that require consent starting from your visit
                                            to the next page. We'll delete any first-party cookies, insofar as this is
                                            technically possible. You may, of course, refuse the use of analytics and
                                            marketing cookies. However, this will prevent us from understanding what you
                                            like or dislike about our websites, and from making any necessary improvements.
                                            Please note that we cannot delete third-party cookies. If you would like to delete
                                            all third-party cookies, please go to your browser settings. We would also like to
                                            make you aware that revoking your consent to cookies won't result in less advertising. Rather,
                                            it means that the displayed advertising isn't tailored to your personal needs.</p>
                                        <h2>Cookie Management in your browser</h2>
                                        <p>You can manage cookie settings via the aforementioned features on our website,
                                            and also through changing your browser settings (enable, disable, and delete).
                                            Most browsers allow you to manage cookies by either accepting or rejecting all
                                            cookies. Go to the help section of your browser to learn more about how to manage
                                            and delete cookies. When you change your cookie settings, certain cookies will be
                                            blocked. In this case, you may not fully benefit from some features on our website.
                                            We may also be unable
                                            to provide you with certain content that you have previously seen or used.</p>
                                        <h2>Where is the information collected by cookies processed?</h2>
                                        <p>The information collected via cookies is primarily processed within the extended
                                            European Union (extended EU)*. In some cases, it may happen that cookie information
                                            is processed by our contracted service providers or by third-party cookie providers
                                            in countries outside the extended EU*, which don't provide a level of data
                                            protection equivalent to the EU. In some countries, for example the US, the
                                            notable risk exists that local authorities may obtain access to cookie information
                                            processed there for monitoring purposes. No effective legal remedies are in place
                                            to prevent this. We have implemented additional and adequate security measures,
                                            like for instance contracts on the basis of EU standard contractual clauses, in
                                            addition to the implementation of complementary technical measures, to ensure
                                            that the information collected by cookies is protected appropriately. Insofar
                                            as you've given your consent to the category "Analytics and Marketing Cookies",
                                            you also agree to the transfer and further processing of the information
                                            collected by cookies in countries outside of the extended EU*.</p>
                                        <p>* Extended EU: Countries of the European Union (EU) + Switzerland (CH),
                                            Iceland (IS), Liechtenstein (LI), Norway (NO), United Kingdom (UK)</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cookie;
