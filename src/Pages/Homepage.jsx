import React from 'react'
import styled from 'styled-components'
function Homepage() {
  return (
    <DIV>
    
    <div className='signup-container'>
        <div>
            <h1>
                A Creator's Paradise
            </h1>
            <p>Where Creativity Meets Success</p>
        </div>
        <div>
            <div className='signup-div'>
                <div className='google-login'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <path d="M20.8926 9.60698H20.1389V9.56814H11.717V13.3112H17.0055C16.2339 15.4901 14.1608 17.0543 11.717 17.0543C8.61636 17.0543 6.10243 14.5403 6.10243 11.4397C6.10243 8.33902 8.61636 5.82509 11.717 5.82509C13.1483 5.82509 14.4504 6.36502 15.4418 7.24698L18.0886 4.60017C16.4174 3.04259 14.1818 2.08203 11.717 2.08203C6.54926 2.08203 2.35938 6.27191 2.35938 11.4397C2.35938 16.6074 6.54926 20.7973 11.717 20.7973C16.8848 20.7973 21.0747 16.6074 21.0747 11.4397C21.0747 10.8122 21.0101 10.1998 20.8926 9.60698Z" fill="#FFC107"/>
  <path d="M3.4375 7.08416L6.51195 9.33888C7.34385 7.27926 9.35855 5.82509 11.7162 5.82509C13.1475 5.82509 14.4496 6.36502 15.441 7.24698L18.0878 4.60017C16.4165 3.04259 14.181 2.08203 11.7162 2.08203C8.12193 2.08203 5.0049 4.11124 3.4375 7.08416Z" fill="#FF3D00"/>
  <path d="M11.7213 20.7968C14.1383 20.7968 16.3346 19.8718 17.9951 18.3675L15.0989 15.9168C14.1594 16.6284 12.9916 17.0537 11.7213 17.0537C9.28734 17.0537 7.22071 15.5018 6.44215 13.3359L3.39062 15.687C4.93931 18.7175 8.08442 20.7968 11.7213 20.7968Z" fill="#4CAF50"/>
  <path d="M20.8983 9.60915H20.1445V9.57031H11.7227V13.3134H17.0111C16.6406 14.36 15.9673 15.2626 15.0989 15.9199L15.1003 15.919L17.9965 18.3698C17.7916 18.556 21.0803 16.1207 21.0803 11.4418C21.0803 10.8144 21.0157 10.202 20.8983 9.60915Z" fill="#1976D2"/>
</svg>
                    <p>Continue With Google</p>
                </div>
            </div>
        </div>
    </div>

    </DIV>
  )
}
const DIV = styled.div`
/* background-color: #7526F2; */
/* background-image: url("../Assets/section01.png"); */
background-image: url("../Assets/section01.png");

.signup-container{
  background-image: url("../Assets/section01.png");
    display: flex;
    justify-content: space-around;
}
.google-login{
    display: flex;
    justify-content: space-between;
}
.signup-div{
    margin: 20px;
    padding: 20px;
    border-radius: 31.442px;
border: 1.123px solid var(--aa, #7526F2);
background: rgba(30, 28, 34, 0.60);
backdrop-filter: blur(5px);
}
`

export default Homepage

// import styled from "styled-components";
// // import "../Style/Homepage.css";

// const Homepage = () => {
//   return (
//     <DIV>

    
//     <div className="home">
//       <div className="content">
//         <div className="scroll">
//           <div className="logo-parent">
//             <b className="logo">lOGO</b>
//             <div className="frame-parent">
//               <div className="company-parent">
//                 <div className="company">Company</div>
//                 <div className="about-us-parent">
//                   <div className="about-us">About Us</div>
//                   <div className="about-us">Support</div>
//                   <div className="about-us">Blog</div>
//                   <div className="about-us">Login</div>
//                   <div className="about-us">Signup</div>
//                   <div className="about-us">Contact Us</div>
//                 </div>
//               </div>
//               <div className="company-parent">
//                 <div className="company">Programs</div>
//                 <div className="about-us-parent">
//                   <div className="about-us">Affiliate Program</div>
//                   <div className="about-us">Ambassador Program</div>
//                   <div className="about-us">Partnership Program</div>
//                 </div>
//               </div>
//               <div className="policy-parent">
//                 <div className="company">Policy</div>
//                 <div className="legal-parent">
//                   <div className="about-us">Legal</div>
//                   <div className="about-us">DMCA</div>
//                   <div className="about-us">USC 2257</div>
//                   <div className="about-us">Privacy Policy</div>
//                   <div className="about-us">Terms and Conditions</div>
//                 </div>
//               </div>
//             </div>
//             <div className="follow-us-parent">
//               <div className="company">Follow Us</div>
//               <div className="link-svg-parent">
//                 <img className="link-svg" alt="" src="/link--svg.svg" />
//                 <img className="link-svg" alt="" src="/link--svg1.svg" />
//                 <img className="link-svg" alt="" src="/link--svg2.svg" />
//                 <img className="link-svg" alt="" src="/icons8youtube-2-1.svg" />
//               </div>
//             </div>
//           </div>
//           <div className="banner-full-width">
//             <div className="images">
//               <div className="frame-group">
//                 <div className="frame-wrapper">
//                   <div className="frame-container">
//                     <img
//                       className="frame-child"
//                       alt=""
//                       src="/frame-48101062@2x.png"
//                     />
//                     <div className="abella-zycher-parent">
//                       <div className="about-us">Abella Zycher</div>
//                       <div className="abellazycher">@abellazycher</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="frame-div">
//                   <div className="frame-container">
//                     <img
//                       className="frame-item"
//                       alt=""
//                       src="/frame-481010621@2x.png"
//                     />
//                     <div className="abella-zycher-parent">
//                       <div className="about-us">Abella Zycher</div>
//                       <div className="abellazycher">@abellazycher</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="images-parent">
//                 <div className="images1">
//                   <div className="frame-parent2">
//                     <div className="frame-wrapper1">
//                       <div className="frame-parent3">
//                         <img
//                           className="frame-inner"
//                           alt=""
//                           src="/frame-481010622@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="frame-wrapper2">
//                       <div className="frame-parent3">
//                         <img
//                           className="frame-child"
//                           alt=""
//                           src="/frame-481010623@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="frame-parent5">
//                     <div className="frame-wrapper3">
//                       <div className="frame-container">
//                         <img
//                           className="frame-inner"
//                           alt=""
//                           src="/frame-481010624@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="frame-wrapper4">
//                       <div className="frame-container">
//                         <img
//                           className="frame-child2"
//                           alt=""
//                           src="/frame-481010625@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="images1">
//                   <div className="images-inner">
//                     <div className="frame-parent3">
//                       <img
//                         className="frame-child"
//                         alt=""
//                         src="/frame-481010626@2x.png"
//                       />
//                       <div className="abella-zycher-parent">
//                         <div className="about-us">Abella Zycher</div>
//                         <div className="abellazycher">@abellazycher</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="images-child">
//                     <div className="frame-parent3">
//                       <img
//                         className="frame-child"
//                         alt=""
//                         src="/frame-481010627@2x.png"
//                       />
//                       <div className="abella-zycher-parent">
//                         <div className="about-us">Abella Zycher</div>
//                         <div className="abellazycher">@abellazycher</div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="frame-parent5">
//                     <div className="frame-wrapper5">
//                       <div className="frame-container">
//                         <img
//                           className="frame-child"
//                           alt=""
//                           src="/frame-481010628@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="frame-wrapper6">
//                       <div className="frame-container">
//                         <img
//                           className="frame-child"
//                           alt=""
//                           src="/frame-481010629@2x.png"
//                         />
//                         <div className="abella-zycher-parent">
//                           <div className="about-us">Abella Zycher</div>
//                           <div className="abellazycher">@abellazycher</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="frame-parent13">
//                 <div className="frame-wrapper7">
//                   <div className="frame-parent3">
//                     <img
//                       className="frame-inner"
//                       alt=""
//                       src="/frame-4810106210@2x.png"
//                     />
//                     <div className="abella-zycher-parent">
//                       <div className="about-us">Abella Zycher</div>
//                       <div className="abellazycher">@abellazycher</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="frame-wrapper8">
//                   <div className="frame-parent3">
//                     <img
//                       className="frame-inner"
//                       alt=""
//                       src="/frame-4810106211@2x.png"
//                     />
//                     <div className="abella-zycher-parent">
//                       <div className="about-us">Abella Zycher</div>
//                       <div className="abellazycher">@abellazycher</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="banner-full-width-inner">
//               <div className="group-child" />
//             </div>
//           </div>
//           <div className="affiliateprogram-section">
//             <div className="ellipse-parent">
//               <div className="ellipse-div" />
//               <img className="emojis-icon" alt="" src="/emojis.svg" />
//               <div className="heading">
//                 <p className="ready-to-cash">
//                   Ready to Cash in Your Connections?
//                 </p>
//                 <p className="ready-to-cash">Join Our Affiliate Program</p>
//               </div>
//               <div className="sub-heading-parent">
//                 <div className="sub-heading">
//                   <span>{`Join now and get `}</span>
//                   <span className="span">{` `}</span>
//                 </div>
//                 <div className="wrapper">
//                   <div className="div">7.5%</div>
//                 </div>
//                 <div className="commission-on-all">
//                   commission on all creator referrals for the entire year.
//                 </div>
//               </div>
//               <div className="button-start-your-journey">
//                 <div className="about-us">Earn Now</div>
//               </div>
//             </div>
//             <div className="call-to-action">
//               <img className="content-icon" alt="" src="/content.svg" />
//               <div className="hero-texts">
//                 <div className="button-start-your-journey1">
//                   <div className="about-us">Learn More</div>
//                 </div>
//                 <div className="texts">
//                   <div className="company">Join the ABC Community</div>
//                   <div className="paragraph">
//                     <p className="ready-to-cash">
//                       Become part of a vibrant and supportive community of
//                       like-minded creators by joining ABC's exclusive platform.
//                     </p>
//                     <p className="ready-to-cash">
//                       Collaborate, learn, and connect with fellow creators who
//                       share your passion for adult content creation.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <img className="image-2-icon" alt="" src="/image-2@2x.png" />
//               <img className="image-1-icon" alt="" src="/image-1@2x.png" />
//             </div>
//           </div>
//           <div className="call-to-action1">
//             <img className="bubbles-left" alt="" src="/bubbles--left.svg" />
//             <img className="bubbles-right" alt="" src="/bubbles--right.svg" />
//             <div className="call-to-action-child" />
//             <div className="content1">
//               <div className="heading2">
//                 <p className="dont-miss-out">
//                   Don't miss out on ABC’s Incredible features and Opportunities.
//                 </p>
//                 <p className="join-us-today">{`Join us today and unlock your `}</p>
//                 <p className="join-us-today">full potential as a creator</p>
//               </div>
//               <div className="button-join-now">
//                 <div className="about-us">Join Now</div>
//               </div>
//             </div>
//           </div>
//           <div className="key-features-section">
//             <div className="key-features-section-child" />
//             <b className="hedaing">Elevate Your Craft</b>
//             <div className="features">
//               <div className="feature-card-parent">
//                 <div className="feature-card">
//                   <img
//                     className="feature-card-child"
//                     alt=""
//                     src="/ellipse-1948.svg"
//                   />
//                   <div className="save-time-with-automation-and-parent">
//                     <div className="save-time-with-container">
//                       <p className="ready-to-cash">{`Save Time with `}</p>
//                       <p className="ready-to-cash">Automation and Efficiency</p>
//                     </div>
//                     <div className="supercharge-your-content">
//                       Supercharge your content creation with ABC's automation
//                       tools. Streamline scheduling, multi-platform management,
//                       and more. Save time on repetitive tasks, focus on
//                       exceptional content.
//                     </div>
//                   </div>
//                   <img
//                     className="image-12-icon"
//                     alt=""
//                     src="/image-12@2x.png"
//                   />
//                 </div>
//                 <div className="feature-card">
//                   <img
//                     className="feature-card-child"
//                     alt=""
//                     src="/ellipse-19481.svg"
//                   />
//                   <div className="join-a-supportive-community-parent">
//                     <div className="save-time-with-container">
//                       <p className="ready-to-cash">Join a Supportive</p>
//                       <p className="ready-to-cash">Community</p>
//                     </div>
//                     <div className="join-abcs-vibrant">
//                       Join ABC's vibrant creator community. Connect with
//                       like-minded individuals, collaborate, and share
//                       experiences. Access mental health services and resources
//                       for personal and professional growth.
//                     </div>
//                   </div>
//                   <img
//                     className="image-12-icon"
//                     alt=""
//                     src="/image-13@2x.png"
//                   />
//                 </div>
//                 <div className="feature-card">
//                   <img
//                     className="feature-card-child"
//                     alt=""
//                     src="/ellipse-19482.svg"
//                   />
//                   <div className="unlock-exclusive-opportunities-parent">
//                     <div className="unlock-exclusive-opportunities">
//                       Unlock Exclusive Opportunities and Prizes
//                     </div>
//                     <div className="enjoy-abc-contests">
//                       Enjoy ABC contests and challenges for valuable prizes.
//                       Showcase your exceptional talent and win business grants,
//                       scholarships, and more. Thrive on our platform with
//                       recognition and rewards.
//                     </div>
//                   </div>
//                   <img
//                     className="image-12-icon"
//                     alt=""
//                     src="/image-14@2x.png"
//                   />
//                 </div>
//               </div>
//               <div className="feature-card3">
//                 <div className="feature-card-child1" />
//                 <img className="images-icon" alt="" src="/images.svg" />
//                 <div className="unlock-your-abc-earning-potent-parent">
//                   <div className="unlock-your-abc">
//                     Unlock Your ABC Earning Potential
//                   </div>
//                   <div className="are-you-ready">
//                     Are you ready to take your earning potential to the next
//                     level? With ABC, you have multiple avenues to monetize your
//                     content seamlessly. From subscriptions and tips to
//                     merchandise sales and NFTS, ABC helps you diversify your
//                     revenue streams and maximize your income.
//                   </div>
//                 </div>
//                 <div className="frame-48101613-2-parent">
//                   <img
//                     className="frame-48101613-2"
//                     alt=""
//                     src="/frame-48101613-2@2x.png"
//                   />
//                   <img
//                     className="image-15-icon"
//                     alt=""
//                     src="/image-15@2x.png"
//                   />
//                 </div>
//                 <div className="rectangle-div" />
//               </div>
//               <div className="feature-card4">
//                 <div className="unlock-your-abc-earning-potent-parent">
//                   <div className="boost-your-sales">
//                     Boost Your Sales with Built-in E-commerce
//                   </div>
//                   <div className="take-control-of">
//                     Take control of your brand and boost your sales with ABC's
//                     built-in e-commerce functionality. Showcase and sell your
//                     exclusive products, whether it's merchandise, digital
//                     downloads, or personalized experiences. Integrate your store
//                     effortlessly and turn your creative ideas into profitable
//                     ventures.
//                   </div>
//                 </div>
//                 <div className="feature-card-child1" />
//                 <div className="group-parent">
//                   <div className="rectangle-parent">
//                     <div className="group-item" />
//                     <img
//                       className="image-16-icon"
//                       alt=""
//                       src="/image-16@2x.png"
//                     />
//                   </div>
//                   <div className="rectangle-parent">
//                     <div className="rectangle-group">
//                       <div className="group-item" />
//                       <div className="rectangle-wrapper">
//                         <img
//                           className="rectangle-icon"
//                           alt=""
//                           src="/rectangle-28832@2x.png"
//                         />
//                       </div>
//                       <div className="green-modern-bikini">
//                         Green modern bikini
//                       </div>
//                       <div className="div1">$100</div>
//                       <div className="group-container">
//                         <div className="group-frame">
//                           <div className="group-frame">
//                             <div className="div2">4.3</div>
//                             <img
//                               className="material-symbolsstar-icon"
//                               alt=""
//                               src="/materialsymbolsstar.svg"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="rectangle-parent">
//                     <div className="rectangle-group">
//                       <div className="group-item" />
//                       <img
//                         className="group-child2"
//                         alt=""
//                         src="/rectangle-28766@2x.png"
//                       />
//                       <div className="green-modern-bikini">Bikini pairs</div>
//                       <div className="div1">$100</div>
//                       <div className="group-container">
//                         <div className="group-frame">
//                           <div className="group-frame">
//                             <div className="div2">4.3</div>
//                             <img
//                               className="material-symbolsstar-icon"
//                               alt=""
//                               src="/materialsymbolsstar1.svg"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="rectangle-parent">
//                     <div className="rectangle-group">
//                       <div className="group-item" />
//                       <img
//                         className="group-child2"
//                         alt=""
//                         src="/rectangle-287661@2x.png"
//                       />
//                       <div className="green-modern-bikini">Blue bikini</div>
//                       <div className="div1">$100</div>
//                       <div className="group-container">
//                         <div className="group-frame">
//                           <div className="group-frame">
//                             <div className="div2">4.3</div>
//                             <img
//                               className="material-symbolsstar-icon"
//                               alt=""
//                               src="/materialsymbolsstar2.svg"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="rectangle-parent">
//                     <div className="rectangle-group">
//                       <div className="group-item" />
//                       <img
//                         className="group-child6"
//                         alt=""
//                         src="/rectangle-287662@2x.png"
//                       />
//                       <div className="green-modern-bikini">Beach wear</div>
//                       <div className="div1">$100</div>
//                       <div className="group-container">
//                         <div className="group-frame">
//                           <div className="group-frame">
//                             <div className="div2">4.3</div>
//                             <img
//                               className="material-symbolsstar-icon"
//                               alt=""
//                               src="/materialsymbolsstar3.svg"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="section-1">
//             <div className="motion-background-parent">
//               <img
//                 className="motion-background-icon"
//                 alt=""
//                 src="/motion-background.svg"
//               />
//               <img
//                 className="hero-banner-section"
//                 alt=""
//                 src="/1-hero-banner-section.svg"
//               />
//               <div className="a-creators-paradise-parent">
//                 <div className="a-creators-paradise">A Creator’s Paradise</div>
//                 <div className="were-creativity-meets">
//                   Were Creativity Meets Success
//                 </div>
//               </div>
//               <div className="frame-child9" />
//               <div className="signup-form">
//                 <div className="signup-form-inner">
//                   <div className="frame-parent16">
//                     <img
//                       className="frame-child10"
//                       alt=""
//                       src="/frame-169212.svg"
//                     />
//                     <div className="continue-with-google">
//                       Continue With Google
//                     </div>
//                   </div>
//                 </div>
//                 <div className="button">
//                   <div className="company">Signup as a user</div>
//                 </div>
//                 <img className="signup-form-child" alt="" src="/vector-2.svg" />
//                 <div className="frame-parent17">
//                   <div className="text-fielddark-parent">
//                     <div className="text-fielddark">
//                       <div className="first-name">First Name*</div>
//                     </div>
//                     <div className="text-fielddark">
//                       <div className="first-name">Last Name*</div>
//                     </div>
//                   </div>
//                   <div className="text-fieldeyeblksml">
//                     <div className="first-name">Email*</div>
//                   </div>
//                   <div className="text-fieldeyeblksml">
//                     <div className="first-name">Password*</div>
//                     <img
//                       className="visibility-off-icon"
//                       alt=""
//                       src="/visibility-off.svg"
//                     />
//                   </div>
//                 </div>
//                 <div className="by-signing-up-container">
//                   <span>{`By signing up you agree to our `}</span>
//                   <span className="terms-conditions">{`Terms & Conditions `}</span>
//                   <span>and</span>
//                   <span className="terms-conditions">{` Privacy Policy. `}</span>
//                   <span>and confirm that you are at least 18 years old.</span>
//                 </div>
//                 <div className="already-have-an-container">
//                   <span>{`Already have an account? `}</span>
//                   <span className="login1">Login</span>
//                 </div>
//                 <div className="vector-parent">
//                   <img className="vector-icon" alt="" src="/vector-3.svg" />
//                   <img className="group-child7" alt="" src="/vector-4.svg" />
//                   <div className="or">OR</div>
//                 </div>
//                 <div className="button1">
//                   <div className="company">Signup as a creator</div>
//                 </div>
//                 <div className="gmt0530-india-standard-time-parent">
//                   <div className="about-us">{`(GMT+05:30) india standard Time - Calcutta `}</div>
//                   <img
//                     className="expand-more-icon"
//                     alt=""
//                     src="/expand-more.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="heading3">
//         <div className="frame-parent18">
//           <div className="home-parent">
//             <b className="home1">Home</b>
//             <div className="about-us">About Us</div>
//             <div className="about-us">Our Blog</div>
//             <div className="about-us">Support</div>
//             <div className="about-us">Affiliate</div>
//             <div className="frame-wrapper9">
//               <div className="programs-group">
//                 <div className="about-us">Programs</div>
//                 <img
//                   className="expand-more-icon1"
//                   alt=""
//                   src="/expand-more1.svg"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="login-parent">
//             <div className="login2">
//               <div className="login3">Login</div>
//             </div>
//             <div className="sign-up-button">
//               <div className="sign-up">Sign up</div>
//             </div>
//           </div>
//         </div>
//         <img className="heading-child" alt="" src="/vector-9.svg" />
//         <b className="logo1">lOGO</b>
//       </div>
//     </div>
//     </DIV>
//   );
// };
// const DIV = styled.div`
// .logo {
//     position: absolute;
//     top: 0;
//     left: 0;
//     font-size: 72px;
//     font-family: Raleway;
//   }
//   .company {
//     font-weight: 600;
//   }
//   .about-us,
//   .company {
//     position: relative;
//   }
//   .about-us-parent {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 12px;
//     font-size: 20px;
//     color: #c6c6c6;
//   }
//   .company-parent {
//     gap: 19px;
//   }
//   .company-parent,
//   .frame-parent,
//   .legal-parent,
//   .policy-parent {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//   }
//   .legal-parent {
//     gap: 12px;
//     font-size: 20px;
//     color: #acacac;
//   }
//   .frame-parent,
//   .policy-parent {
//     gap: 20px;
//   }
//   .frame-parent {
//     position: absolute;
//     top: 0;
//     left: 475px;
//     flex-direction: row;
//     gap: 155px;
//   }
//   .link-svg {
//     position: relative;
//     width: 40px;
//     height: 40px;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .follow-us-parent,
//   .link-svg-parent {
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 16px;
//   }
//   .follow-us-parent {
//     position: absolute;
//     top: 0;
//     left: 1551px;
//     flex-direction: column;
//     gap: 20px;
//   }
//   .logo-parent {
//     position: absolute;
//     height: 4.57%;
//     width: 91.57%;
//     top: 94.34%;
//     right: 4.48%;
//     bottom: 1.1%;
//     left: 3.96%;
//     font-size: 28px;
//     color: #fff;
//   }
//   .frame-child {
//     position: relative;
//     border-radius: 33px;
//     width: 56.38px;
//     height: 56.38px;
//     overflow: hidden;
//     flex-shrink: 0;
//     object-fit: cover;
//   }
//   .abellazycher {
//     position: relative;
//     font-size: 16px;
//   }
//   .abella-zycher-parent,
//   .frame-container {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2px;
//   }
//   .frame-container {
//     position: absolute;
//     top: 251px;
//     left: 12px;
//     flex-direction: row;
//     align-items: center;
//     gap: 12px;
//   }
//   .frame-wrapper {
//     border-radius: 12px;
//     width: 652px;
//     height: 315px;
//     background-image: url(/public/frame-169250@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-div,
//   .frame-item,
//   .frame-wrapper {
//     position: relative;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .frame-item {
//     border-radius: 33px;
//     width: 56.38px;
//     height: 52px;
//     object-fit: cover;
//   }
//   .frame-div {
//     border-radius: 12px;
//     width: 417px;
//     height: 315px;
//     background-image: url(/public/frame-169249@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-group {
//     position: absolute;
//     top: 870.14px;
//     left: -33px;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 20px;
//     transform: rotate(5.05deg);
//     transform-origin: 0 0;
//   }
//   .frame-inner {
//     position: relative;
//     border-radius: 33px;
//     width: 52px;
//     height: 52px;
//     overflow: hidden;
//     flex-shrink: 0;
//     object-fit: cover;
//   }
//   .frame-parent3 {
//     position: absolute;
//     top: 198px;
//     left: 12px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//   }
//   .frame-wrapper1,
//   .frame-wrapper2 {
//     position: relative;
//     border-radius: 12px;
//     width: 379px;
//     height: 262px;
//     overflow: hidden;
//     flex-shrink: 0;
//     background-image: url(/public/frame-169251@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-wrapper2 {
//     width: 690px;
//     background-image: url(/public/frame-169248@3x.png);
//   }
//   .frame-parent2 {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 20px;
//   }
//   .frame-wrapper3 {
//     border-radius: 12px;
//     width: 652px;
//     height: 315px;
//     background-image: url(/public/frame-1692501@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-child2,
//   .frame-wrapper3,
//   .frame-wrapper4 {
//     position: relative;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .frame-child2 {
//     border-radius: 33px;
//     width: 56.38px;
//     height: 55.27px;
//     object-fit: cover;
//   }
//   .frame-wrapper4 {
//     border-radius: 12px;
//     width: 417px;
//     height: 315px;
//     background-image: url(/public/frame-1692491@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-parent5 {
//     position: absolute;
//     top: 282px;
//     left: 0;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 20px;
//   }
//   .images1 {
//     position: relative;
//     border-radius: 12px;
//     background-color: #121212;
//     width: 1089px;
//     height: 597px;
//   }
//   .images-inner {
//     position: absolute;
//     top: 0;
//     left: 399px;
//     width: 690px;
//     height: 262px;
//     background-image: url(/public/frame-1692481@3x.png);
//   }
//   .frame-wrapper5,
//   .frame-wrapper6,
//   .images-child,
//   .images-inner {
//     border-radius: 12px;
//     overflow: hidden;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .images-child {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 379px;
//     height: 262px;
//     background-image: url(/public/frame-1692511@3x.png);
//   }
//   .frame-wrapper5,
//   .frame-wrapper6 {
//     position: relative;
//     width: 652px;
//     height: 315px;
//     flex-shrink: 0;
//     background-image: url(/public/frame-1692502@3x.png);
//   }
//   .frame-wrapper6 {
//     width: 417px;
//     background-image: url(/public/frame-1692492@3x.png);
//   }
//   .images-parent {
//     position: absolute;
//     top: 521.35px;
//     left: calc(50% - 1183px);
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 20px;
//     transform: rotate(5.05deg);
//     transform-origin: 0 0;
//   }
//   .frame-wrapper7,
//   .frame-wrapper8 {
//     position: relative;
//     border-radius: 12px;
//     width: 379px;
//     height: 262px;
//     overflow: hidden;
//     flex-shrink: 0;
//     background-image: url(/public/frame-1692512@3x.png);
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: top;
//   }
//   .frame-wrapper8 {
//     border-radius: 12px 0 0 12px;
//     width: 690px;
//     background-image: url(/public/frame-1692482@3x.png);
//   }
//   .frame-parent13 {
//     position: absolute;
//     top: 11.14px;
//     left: 1041px;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 20px;
//     transform: rotate(5.05deg);
//     transform-origin: 0 0;
//   }
//   .images {
//     top: 0;
//     left: 0;
//   }
//   .banner-full-width-inner,
//   .group-child,
//   .images {
//     position: absolute;
//     width: 1920px;
//     height: 663px;
//   }
//   .group-child {
//     top: 0;
//     left: 0;
//     background-color: rgba(33, 27, 38, 0.2);
//   }
//   .banner-full-width-inner {
//     top: 663px;
//     left: -1px;
//   }
//   .banner-full-width {
//     position: absolute;
//     top: 3754px;
//     left: calc(50% - 959.5px);
//     background: linear-gradient(270deg, #121212, #1e1c22);
//     width: 1920px;
//     height: 663px;
//     overflow: hidden;
//     font-size: 14px;
//     color: #fff;
//     font-family: Poppins;
//   }
//   .ellipse-div {
//     position: absolute;
//     top: 737px;
//     left: 527px;
//     border-radius: 50%;
//     background: linear-gradient(
//       91.19deg,
//       rgba(117, 38, 242, 0.1),
//       rgba(200, 38, 242, 0.1)
//     );
//     filter: blur(500px);
//     width: 798px;
//     height: 798px;
//   }
//   .emojis-icon {
//     position: absolute;
//     top: -739px;
//     left: 0;
//     width: 1920px;
//     height: 1920px;
//   }
//   .ready-to-cash {
//     margin: 0;
//   }
//   .heading {
//     position: absolute;
//     top: 463.5px;
//     left: calc(50% - 389px);
//     font-weight: 600;
//   }
//   .span {
//     font-size: 40px;
//   }
//   .sub-heading {
//     position: absolute;
//     top: 55px;
//     left: 0;
//   }
//   .div {
//     position: relative;
//     font-weight: 600;
//     background: linear-gradient(91.19deg, #7526f2, #c826f2);
//     /* -webkit-background-clip: text; */
//     -webkit-text-fill-color: transparent;
//   }
//   .wrapper {
//     position: absolute;
//     top: 0;
//     left: 187px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 8px;
//     font-size: 48px;
//   }
//   .commission-on-all {
//     position: absolute;
//     top: 44px;
//     left: 311px;
//   }
//   .sub-heading-parent {
//     position: absolute;
//     top: 249px;
//     left: calc(50% - 441px);
//     width: 881px;
//     height: 72px;
//     font-size: 24px;
//     color: rgba(137, 117, 156, 0.7);
//   }
//   .button-start-your-journey {
//     position: absolute;
//     top: 217px;
//     left: calc(50% - 139px);
//     border-radius: 16px;
//     background: linear-gradient(92.93deg, #b126f2, #7700d4);
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
//     width: 278px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 16px 24px;
//     box-sizing: border-box;
//     text-align: left;
//     font-size: 20px;
//     color: #fff;
//   }
//   .ellipse-parent {
//     position: absolute;
//     top: 526px;
//     left: 0;
//     width: 1920px;
//     height: 739px;
//   }
//   .content-icon {
//     position: absolute;
//     top: calc(50% - 263px);
//     left: calc(50% - 884px);
//     border-radius: 28px;
//     width: 1768px;
//     height: 538px;
//   }
//   .button-start-your-journey1 {
//     border-radius: 16px;
//     background: linear-gradient(92.93deg, #b126f2, #7700d4);
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
//     width: 278px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 16px 24px;
//     box-sizing: border-box;
//   }
//   .paragraph {
//     position: relative;
//     font-size: 28px;
//     font-weight: 500;
//     color: rgba(255, 255, 255, 0.7);
//     display: inline-block;
//     width: 1412px;
//   }
//   .hero-texts,
//   .texts {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
//   }
//   .texts {
//     gap: 28px;
//     text-align: center;
//     font-size: 48px;
//     color: #cac4d2;
//   }
//   .hero-texts {
//     position: absolute;
//     top: calc(50% + 153px);
//     left: calc(50% - 706.5px);
//     gap: 56px;
//   }
//   .image-1-icon,
//   .image-2-icon {
//     position: absolute;
//     top: 0;
//     left: 1308px;
//     width: 775.54px;
//     height: 735.4px;
//     object-fit: cover;
//     mix-blend-mode: saturation;
//   }
//   .image-1-icon {
//     left: 0;
//     width: 733px;
//     height: 694px;
//   }
//   .call-to-action {
//     position: absolute;
//     bottom: 213px;
//     left: calc(50% - 884px);
//     border-radius: 28px;
//     box-shadow: 0-4px 8px rgba(23, 23, 23, 0.25) inset,
//       0 1px 6px rgba(18, 18, 18, 0.25) inset, 0 4px 8px rgba(23, 23, 23, 0.41);
//     width: 1768px;
//     height: 526px;
//     overflow: hidden;
//     text-align: left;
//     font-size: 20px;
//     color: #fff;
//   }
//   .affiliateprogram-section {
//     position: absolute;
//     top: 5019px;
//     left: 0;
//     background: linear-gradient(180deg, #121212, #1e1c22);
//     width: 1920px;
//     height: 1265px;
//     overflow: hidden;
//     text-align: center;
//     font-size: 48px;
//   }
//   .bubbles-left,
//   .bubbles-right {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 904px;
//     height: 678px;
//     opacity: 0.5;
//   }
//   .bubbles-right {
//     left: 954px;
//   }
//   .call-to-action-child {
//     position: absolute;
//     top: -206px;
//     left: calc(50% - 546px);
//     border-radius: 50%;
//     background: linear-gradient(
//       91.19deg,
//       rgba(117, 38, 242, 0.1),
//       rgba(200, 38, 242, 0.1)
//     );
//     filter: blur(500px);
//     width: 1090px;
//     height: 1090px;
//   }
//   .dont-miss-out {
//     margin: 0;
//     font-size: 24px;
//     color: rgba(137, 117, 156, 0.7);
//   }
//   .join-us-today {
//     margin: 0;
//     font-weight: 600;
//   }
//   .heading2 {
//     position: relative;
//     display: inline-block;
//     width: 872px;
//   }
//   .button-join-now,
//   .content1 {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .button-join-now {
//     border-radius: 16px;
//     background: linear-gradient(92.93deg, #b126f2, #7700d4);
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
//     width: 278px;
//     flex-direction: row;
//     padding: 16px 24px;
//     box-sizing: border-box;
//     text-align: left;
//     font-size: 20px;
//     color: #fff;
//   }
//   .content1 {
//     position: absolute;
//     top: calc(50% - 147px);
//     left: calc(50% - 436px);
//     flex-direction: column;
//     gap: 52px;
//   }
//   .call-to-action1 {
//     position: absolute;
//     top: 2333px;
//     left: calc(50% - 928.5px);
//     width: 1858px;
//     height: 678px;
//     text-align: center;
//   }
//   .key-features-section-child {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 1920px;
//     height: 76px;
//     overflow: hidden;
//   }
//   .hedaing {
//     position: absolute;
//     top: 0;
//     left: 701.5px;
//     line-height: 118%;
//   }
//   .feature-card-child {
//     position: absolute;
//     top: calc(50% - 212px);
//     left: calc(50% - 282.5px);
//     width: 565px;
//     height: 424px;
//   }
//   .save-time-with-container {
//     position: relative;
//     line-height: 118%;
//     font-weight: 500;
//   }
//   .supercharge-your-content {
//     position: relative;
//     font-size: 20px;
//     color: #89759c;
//     display: inline-block;
//     width: 422px;
//   }
//   .save-time-with-automation-and-parent {
//     position: absolute;
//     top: 180px;
//     left: calc(50% - 234.5px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 16px;
//   }
//   .image-12-icon {
//     position: absolute;
//     top: 36px;
//     left: calc(50% - 60.5px);
//     width: 120px;
//     height: 120px;
//     object-fit: cover;
//   }
//   .feature-card {
//     position: relative;
//     border-radius: 28px;
//     background-color: #1e1c22;
//     width: 565px;
//     height: 424px;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .join-abcs-vibrant {
//     position: relative;
//     font-size: 20px;
//     color: #89759c;
//     display: inline-block;
//     width: 464px;
//   }
//   .join-a-supportive-community-parent {
//     position: absolute;
//     top: 180px;
//     left: calc(50% - 232px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 16px;
//   }
//   .unlock-exclusive-opportunities {
//     position: relative;
//     line-height: 118%;
//     font-weight: 500;
//     display: inline-block;
//     width: 535px;
//   }
//   .enjoy-abc-contests {
//     position: relative;
//     font-size: 20px;
//     color: #89759c;
//     display: inline-block;
//     width: 500px;
//   }
//   .unlock-exclusive-opportunities-parent {
//     position: absolute;
//     top: 180px;
//     left: calc(50% - 267.5px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 16px;
//   }
//   .feature-card-parent {
//     position: absolute;
//     top: 613px;
//     left: 0;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 37px;
//   }
//   .feature-card-child1 {
//     position: absolute;
//     top: 281px;
//     left: 179px;
//     border-radius: 50%;
//     background: linear-gradient(
//       91.19deg,
//       rgba(117, 38, 242, 0.3),
//       rgba(200, 38, 242, 0.3)
//     );
//     filter: blur(500px);
//     width: 506px;
//     height: 506px;
//   }
//   .images-icon {
//     position: absolute;
//     top: 270.17px;
//     left: 433.4px;
//     width: 511.82px;
//     height: 436.08px;
//     display: none;
//   }
//   .are-you-ready,
//   .unlock-your-abc {
//     position: relative;
//     display: inline-block;
//     width: 769px;
//   }
//   .unlock-your-abc {
//     line-height: 118%;
//     font-weight: 500;
//   }
//   .are-you-ready {
//     font-size: 20px;
//     line-height: 28px;
//     color: #ba94df;
//   }
//   .unlock-your-abc-earning-potent-parent {
//     position: absolute;
//     top: 48px;
//     left: calc(50% - 385px);
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 40px;
//   }
//   .frame-48101613-2,
//   .image-15-icon {
//     position: absolute;
//     object-fit: cover;
//   }
//   .frame-48101613-2 {
//     bottom: 0;
//     left: calc(50% - 223px);
//     width: 388px;
//     height: 377px;
//   }
//   .image-15-icon {
//     top: 55px;
//     left: 281px;
//     width: 165px;
//     height: 165px;
//   }
//   .frame-48101613-2-parent {
//     position: absolute;
//     bottom: -80px;
//     left: calc(50% - 194px);
//     width: 446px;
//     height: 377px;
//   }
//   .rectangle-div {
//     position: absolute;
//     top: 514px;
//     left: 239px;
//     background: linear-gradient(180deg, rgba(37, 27, 46, 0), #251b2e);
//     width: 388px;
//     height: 59px;
//   }
//   .feature-card3 {
//     position: absolute;
//     top: 0;
//     left: 0;
//     border-radius: 28px;
//     background-color: #191919;
//     width: 866px;
//     height: 573px;
//     overflow: hidden;
//   }
//   .boost-your-sales {
//     position: relative;
//     line-height: 140%;
//     font-weight: 500;
//   }
//   .take-control-of {
//     position: relative;
//     font-size: 20px;
//     line-height: 28px;
//     color: #89759c;
//     display: inline-block;
//     width: 769px;
//   }
//   .group-item {
//     position: absolute;
//     top: 0;
//     left: 0;
//     border-radius: 14px;
//     background-color: #1c1423;
//     width: 182.05px;
//     height: 248.56px;
//   }
//   .image-16-icon {
//     position: absolute;
//     top: 51.26px;
//     left: 10.2px;
//     width: 163px;
//     height: 162px;
//     object-fit: cover;
//   }
//   .rectangle-parent {
//     position: relative;
//     width: 182.05px;
//     height: 248.56px;
//   }
//   .rectangle-icon,
//   .rectangle-wrapper {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 182.05px;
//     height: 182.05px;
//   }
//   .rectangle-icon {
//     border-radius: 14px;
//     object-fit: cover;
//   }
//   .rectangle-wrapper {
//     overflow: hidden;
//   }
//   .green-modern-bikini {
//     position: absolute;
//     top: 194.65px;
//     left: 8.4px;
//     letter-spacing: 0.14px;
//   }
//   .div1,
//   .div2 {
//     position: absolute;
//   }
//   .div1 {
//     top: 217.75px;
//     left: 8.4px;
//     font-size: 15.4px;
//     letter-spacing: 0.7px;
//     font-weight: 600;
//     text-align: left;
//   }
//   .div2 {
//     top: 0.7px;
//     left: 16.8px;
//     font-weight: 500;
//   }
//   .material-symbolsstar-icon {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 14px;
//     height: 14px;
//     overflow: hidden;
//   }
//   .group-container,
//   .group-frame {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 32.8px;
//     height: 14px;
//   }
//   .group-container {
//     top: 219.86px;
//     left: 140.74px;
//     text-align: right;
//     font-size: 11.2px;
//   }
//   .rectangle-group {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 182.05px;
//     height: 248.56px;
//   }
//   .group-child2,
//   .group-child6 {
//     position: absolute;
//     top: 0;
//     left: -2.8px;
//     border-radius: 14px;
//     width: 187.65px;
//     height: 187.65px;
//     object-fit: cover;
//   }
//   .group-child6 {
//     width: 182.05px;
//   }
//   .group-parent {
//     position: absolute;
//     top: 284.74px;
//     left: calc(50% - 384.83px);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     gap: 19.6px;
//     text-align: justify;
//     font-size: 12.6px;
//     color: #fff;
//   }
//   .feature-card4 {
//     position: absolute;
//     top: 0;
//     left: 903px;
//     border-radius: 28px;
//     background-color: #191919;
//     width: 866px;
//     height: 573px;
//     overflow: hidden;
//   }
//   .features {
//     position: absolute;
//     top: 156px;
//     left: 76px;
//     width: 1769px;
//     height: 1037px;
//     text-align: center;
//     font-size: 40px;
//     color: #cac4d2;
//   }
//   .key-features-section {
//     position: absolute;
//     top: 1060px;
//     left: 0;
//     width: 1921px;
//     height: 1193px;
//     color: #d9d9d9;
//   }
//   .motion-background-icon {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 1920px;
//     height: 1087px;
//     overflow: hidden;
//   }
//   .hero-banner-section {
//     position: absolute;
//     top: 0;
//     left: calc(50% - 960px);
//     width: 1920px;
//     height: 980px;
//   }
//   .a-creators-paradise {
//     position: relative;
//     line-height: 118%;
//     font-weight: 600;
//   }
//   .were-creativity-meets {
//     position: relative;
//     font-size: 36px;
//     color: #c2a9d9;
//   }
//   .a-creators-paradise-parent {
//     position: absolute;
//     top: calc(50% - 156.5px);
//     left: 126px;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 21px;
//   }
//   .frame-child9 {
//     position: absolute;
//     top: 723px;
//     left: calc(50% - 960px);
//     background: linear-gradient(
//       180deg,
//       rgba(80, 27, 138, 0),
//       rgba(18, 18, 18, 0.7)
//     );
//     width: 1920px;
//     height: 263px;
//     overflow: hidden;
//   }
//   .frame-child10 {
//     position: relative;
//     border-radius: 4.49px;
//     width: 31.44px;
//     height: 31.44px;
//   }
//   .continue-with-google {
//     position: relative;
//     letter-spacing: 1px;
//     font-weight: 600;
//   }
//   .frame-parent16 {
//     position: absolute;
//     top: calc(50% - 15.78px);
//     left: calc(50% - 127px);
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: flex-start;
//     gap: 26.95px;
//   }
//   .button,
//   .signup-form-inner {
//     position: absolute;
//     left: calc(50% - 226px);
//     border-radius: 15.72px;
//     width: 452px;
//   }
//   .signup-form-inner {
//     top: 44px;
//     background-color: #4285f4;
//     height: 63px;
//     overflow: hidden;
//   }
//   .button {
//     top: 482px;
//     background: linear-gradient(90.63deg, #7426f2, rgba(152, 88, 255, 0.97));
//     height: 62px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 8.983333587646484px;
//     box-sizing: border-box;
//     color: #cac4d2;
//   }
//   .signup-form-child {
//     position: absolute;
//     top: 129.44px;
//     left: calc(50% - 226.56px);
//     width: 450.29px;
//     height: 1.12px;
//   }
//   .first-name {
//     position: absolute;
//     top: calc(50% - 11.3px);
//     left: 18.08px;
//   }
//   .text-fielddark {
//     position: relative;
//     border-radius: 11.3px;
//     border: 1.1px solid #3d3549;
//     box-sizing: border-box;
//     width: 219.22px;
//     height: 63.28px;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .text-fielddark-parent {
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 13.56px;
//   }
//   .visibility-off-icon {
//     position: absolute;
//     top: 18.08px;
//     left: 402.28px;
//     width: 27.12px;
//     height: 27.12px;
//   }
//   .text-fieldeyeblksml {
//     position: relative;
//     border-radius: 11.3px;
//     border: 1.1px solid #3d3549;
//     box-sizing: border-box;
//     width: 452px;
//     height: 63.28px;
//     overflow: hidden;
//     flex-shrink: 0;
//   }
//   .frame-parent17 {
//     position: absolute;
//     top: 152px;
//     left: calc(50% - 226px);
//     height: 246px;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 28px;
//     font-size: 18.08px;
//   }
//   .terms-conditions {
//     font-weight: 500;
//   }
//   .by-signing-up-container {
//     position: absolute;
//     top: calc(50% + 166.5px);
//     left: calc(50% - 227px);
//     font-size: 16px;
//     color: #acacac;
//     text-align: justify;
//     display: inline-block;
//     width: 452px;
//   }
//   .login1 {
//     font-weight: 600;
//     color: #7421f4;
//   }
//   .already-have-an-container {
//     position: absolute;
//     top: calc(50% + 334.5px);
//     left: calc(50% - 226px);
//     font-size: 16px;
//     text-align: justify;
//     color: #8971a0;
//   }
//   .group-child7,
//   .vector-icon {
//     position: absolute;
//     top: 9.54px;
//     left: calc(50% - 225.56px);
//     width: 205.42px;
//     height: 1.12px;
//   }
//   .group-child7 {
//     top: 9.55px;
//     left: calc(50% + 20.14px);
//   }
//   .or {
//     position: absolute;
//     top: calc(50% - 10px);
//     left: calc(50% - 9.48px);
//     display: inline-block;
//     width: 18.99px;
//   }
//   .vector-parent {
//     position: absolute;
//     top: 618px;
//     left: calc(50% - 225px);
//     width: 450px;
//     height: 20px;
//     text-align: justify;
//     font-size: 13.48px;
//     color: #484848;
//     font-family: Poppins;
//   }
//   .button1 {
//     position: absolute;
//     top: 654px;
//     left: calc(50% - 226px);
//     border-radius: 15.72px;
//     background: linear-gradient(91.19deg, #7526f2, #c826f2);
//     width: 452px;
//     height: 62px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     padding: 8.983333587646484px;
//     box-sizing: border-box;
//   }
//   .expand-more-icon {
//     position: relative;
//     width: 36px;
//     height: 36px;
//   }
//   .gmt0530-india-standard-time-parent {
//     position: absolute;
//     top: 422px;
//     left: calc(50% - 226px);
//     width: 451px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
//     text-align: justify;
//     font-size: 18px;
//     color: #8971a0;
//   }
//   .signup-form {
//     position: absolute;
//     top: calc(50% - 463.5px);
//     left: 1254px;
//     border-radius: 31.44px;
//     background-color: rgba(30, 28, 34, 0.6);
//     backdrop-filter: blur(10px);
//     width: 540px;
//     height: 795px;
//     overflow: hidden;
//     font-size: 17.97px;
//     color: #fff;
//   }
//   .motion-background-parent {
//     position: absolute;
//     top: 0;
//     left: 0;
//     background-color: rgba(18, 18, 18, 0.49);
//     backdrop-filter: blur(50px);
//     width: 1920px;
//     height: 1087px;
//     overflow: hidden;
//   }
//   .section-1 {
//     top: 0;
//     width: 1920px;
//     height: 980px;
//     overflow: hidden;
//     font-size: 100px;
//   }
//   .content,
//   .scroll,
//   .section-1 {
//     position: absolute;
//     left: 0;
//   }
//   .scroll {
//     top: 0;
//     background-color: #121212;
//     width: 1921px;
//     height: 5473px;
//   }
//   .content {
//     top: 100px;
//     width: 1920px;
//     height: 980px;
//     overflow-y: auto;
//   }
//   .home1 {
//     position: relative;
//     background: linear-gradient(91.19deg, #7526f2, #c826f2);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
//   .expand-more-icon1 {
//     position: relative;
//     width: 24px;
//     height: 24px;
//   }
//   .programs-group {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     gap: 3px;
//   }
//   .frame-wrapper9 {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     color: #c6c6c6;
//   }
//   .home-parent,
//   .login3 {
//     position: absolute;
//     top: calc(50% - 12px);
//   }
//   .home-parent {
//     left: calc(50% - 641px);
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 66px;
//   }
//   .login3 {
//     left: calc(50% - 25px);
//     font-weight: 500;
//   }
//   .login2 {
//     position: relative;
//     width: 60px;
//     height: 58px;
//   }
//   .sign-up {
//     position: relative;
//     font-weight: 500;
//   }
//   .login-parent,
//   .sign-up-button {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }
//   .sign-up-button {
//     border-radius: 16px;
//     background: linear-gradient(91.19deg, #7526f2, #c826f2);
//     width: 161px;
//     height: 58px;
//     justify-content: center;
//     padding: 12px 40px;
//     box-sizing: border-box;
//   }
//   .login-parent {
//     position: absolute;
//     top: calc(50% - 29px);
//     right: 0;
//     justify-content: flex-start;
//     gap: 32px;
//   }
//   .frame-parent18 {
//     position: absolute;
//     top: calc(50% - 26px);
//     left: 562px;
//     width: 1282px;
//     height: 52px;
//   }
//   .heading-child {
//     position: absolute;
//     bottom: 0;
//     left: 550px;
//     width: 77.5px;
//     height: 4px;
//   }
//   .logo1 {
//     position: absolute;
//     top: 29px;
//     left: 92px;
//     font-size: 36px;
//     font-family: Raleway;
//   }
//   .heading3,
//   .home {
//     background-color: #121212;
//   }
//   .heading3 {
//     position: absolute;
//     top: 0;
//     left: calc(50% - 960px);
//     width: 1920px;
//     height: 100px;
//     font-size: 20px;
//     color: #fff;
//   }
//   .home {
//     /* position: relative; */
//     width: 100%;
//     /* height: 5573px; */
//     text-align: left;
//     font-size: 64px;
//     color: #cac4d2;
//     font-family: Roboto;
//   }
  
// `
// export default Homepage;
