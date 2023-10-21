import React from 'react'
import styled from 'styled-components'
import section from "../Assets/section01.png"
import mobile from "../Assets/mobile.png"
import money from "../Assets/money.png"
import middle from "../Assets/middle.png"
import models from "../Assets/models.jpg"
import ring from "../Assets/ring.png"
import abc from "../Assets/abc.jpg"


function Homepage() {
  return (
    <DIV>
    
    <div style= {{ backgroundImage:`url(${section})`, backgroundSize:"cover" } }  className='signup-container'>
        <div className='sec-heading'>
            <h1>
                A Creator's Paradise
            </h1>
            <p>Where Creativity Meets Success</p>
        </div>
        {/* <div>  */}
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
                <div className="input-fields">
                  <div className='name-div'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                  </div>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                </div>
                <select className='timeClass' name="" id="">

                <option>(GMT+05:30) india standard Time - Calcutta </option>
                <option>(GMT+05:30) india standard Time - Calcutta </option>
                </select>

                <button className='signup-btn'>Signup as a user</button>
                <p className='terms'>By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
                <div className='or-line'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="206" height="2" viewBox="0 0 206 2" fill="none">
  <path d="M1 1.10547H205.296" stroke="#2D2D2D" strokeWidth="1.12292" strokeLinecap='round' />
</svg>
                  or

                  <svg xmlns="http://www.w3.org/2000/svg" width="206" height="2" viewBox="0 0 206 2" fill="none">
  <path d="M1 1.10547H205.296" stroke="#2D2D2D" strokeWidth="1.12292"  strokeLinecap='round' />
</svg>
                </div>
                <button className='creator-btn'>Signup as a user</button>
               <span className='account-tag'>Already have account? </span>
               <span className='login-link'> Login</span>
            </div>
        </div>
    {/* </div> */}
    {/* <img src={section} alt="" /> */}
    <div className='second-section'>
      <h1 className='sec02-heading'>Elevate Your Craft</h1>
      <div className='first-row'>
        <div className='craft-option'>
          <h3>Unlock Your ABC Earning Potential</h3>
          <p>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</p>

        <div style={{width:"fit-content",marginLeft:"10%", }}>
          <img  style={{width:"60%",marginBottom:"-7%"}} src={mobile} alt="" />
          <img style={{marginLeft:"-50px", height:"100px"}} src={money} alt="" />
        </div>

        </div>
        <div className='craft-option'>
          <h3>Boost Your Sales with Built-in E-commerce</h3>
          <p>Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</p>

        <div className='option-divs'>
         <div >
          <img height={"60px"} src="https://s3-alpha-sig.figma.com/img/7fee/d622/59108073a7d5a4b4b1fbdc85903206e3?Expires=1698624000&Signature=qH4K4qCP70pzAMcsE2LHxXEuC1MRbpFlFWtHYB5aELF7bWklcxvA0J-LTxYR3G9liNg3oPX~9Sfe4QsNRXNMYFfXSyrnBHax3u2TarUAn1Ip6M026SL8wox~GWgML2h3WEO~v8a8aX~RBYQ9zenXXC9rUK92t9XbRVS1PO0JpLzxZa3kvJvwKB4APMuKZEkYqDefiNs-7rN5aqYWrMZ5Ww9S7MNRH5YJGo2dmof0qrRHW16~a-g1hSgBtO6oiU4IpJO2pU-HmzD7AWMyyay7tg-f-QgieRs9cTzosSWSFzSPa8BVzZX1Hw6fsnQuH1d6~34H3Jq4xPrSnm~j3rFl6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
         </div>
         <div>
          <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/d048/80aa/1a56a5d5bb0213a58b8af8f1258a5a4d?Expires=1698624000&Signature=Fi6UMZ3HZzmVud80i5X0UzyHc0QYqI7YlJ3C3G-Zm9Z~InjGF8T6s1xBayaonKRjqRlWyQp4RlhxB~2zXKj9vNlFdGK3rQ~MMBVNjkAVDkGeSz1bkXDyLAgWyT8L4krq7-jumsOT5nd6FtZDphfCnNwH2zf~hbO9cCReRCKtT-8jxTvRSM2oE4POEoW~1fc7W-MctixJ7R-4nyhijSbrXBpGwC5EFLLbnwZPpuNua-MovsNdIqgNQp5HKwtpOoHaxSkV1mkHMf~MSgFYlZ91r7WjTkJwYBVj36NZ5V06mWzZzsx3ebHm6yc9vgGyfrh02t5YFJ0Udz~OB3--~V3~gA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <p>Green modern bikini</p>
         <div style={{display:"flex", justifyContent:"space-between"}}>
         <h4>$100</h4>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M3.96619 13.4332L4.91435 9.33424L1.73438 6.57729L5.93544 6.21261L7.56919 2.34705L9.20294 6.21261L13.404 6.57729L10.224 9.33424L11.1722 13.4332L7.56919 11.2597L3.96619 13.4332Z" fill="#FFA216"/>
</svg>
4.3
</div>
         </div>
         </div>
         <div>
          <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/822c/f068/1ebdb2076b036ca4aa297585bf84c976?Expires=1698624000&Signature=Ve84-CHOdMPlgLpDkL7nHNanfhUb-TihzgatzbwqCFpt~KWSgc67jQO-jZHhplPZeE7PBDNZTBJDTBeM6XHg0PtqT9VaDz6G6oBVHqim1JY56BwwElzpODU1i9sLIlKzUNkXt7txrii0PixcZLmwj2ULzlZguJeowDGTEYodvoIDw01xSjG~4SbcRii9ZTAec0pRxlaiyqG8Ru5l6I-k9bARicbOGXUJK0uHRwqLiwc8idNd9ImFC8Gnn0xkSVcLzrRN6--uzEih8ZCLBlyRS5yKEpVhAHnfLSQhrg~NDSzXnFmd0z7f0Aok54da8cKrpIVqB0D7ilfqOLRJWJON9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <p>Blue bikini</p>
         <div style={{display:"flex", justifyContent:"space-between"}}>
         <h4>$100</h4>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M3.96619 13.4332L4.91435 9.33424L1.73438 6.57729L5.93544 6.21261L7.56919 2.34705L9.20294 6.21261L13.404 6.57729L10.224 9.33424L11.1722 13.4332L7.56919 11.2597L3.96619 13.4332Z" fill="#FFA216"/>
</svg>
4.3
</div>
         </div>
         </div>
         <div>
          <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/fd62/2b09/5194bc65b4db7ef1051e4c768cce53f6?Expires=1698624000&Signature=DV9YYMGmmhI1YA-XdM3A8K7Sg0y8g1dfEFh1Lkt-JU~FevxSRetpierRMVlLlclCALCX81KMP9gBOAEzrhyZWmSlwO5qGZgJv4Ie1V~PExm0PdYcZ1C9SQIHN9-vZk6kpIw5Cly-l7jDFibvr~WiiMCIWBtfkKyxQcTWjmsLDPUqEUqOpWhc9MOCZdfxldvn0Dm25eguXHlO-kUZYVWgXFQeSCpcWvEr04x0ub1GfuhsIBv-qgcT~PDUzwvdwXaoTEqoXUZyAXLYA-Q-lFTs7~t6VPqPF1Tqg8EaFwYvPR3XXS0XFkVJ0MuZIOuZL9cA7ZapP2fLiVkOl8PscdIesw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <p>Bikini pairs</p>
         <div style={{display:"flex", justifyContent:"space-between"}}>
         <h4>$100</h4>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M3.96619 13.4332L4.91435 9.33424L1.73438 6.57729L5.93544 6.21261L7.56919 2.34705L9.20294 6.21261L13.404 6.57729L10.224 9.33424L11.1722 13.4332L7.56919 11.2597L3.96619 13.4332Z" fill="#FFA216"/>
</svg>
4.3
</div>
         </div>
         </div>
         
        </div>

        </div>
      </div>
      <div className='second-row'>
      <div className='craft-option'>
        <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/6983/4ff5/07c90e05fc472295e14d8c091bca17ea?Expires=1698624000&Signature=ERTQq2cfVwVn8GDedKRiUDAwFrfmo-XWLT05-m~FeRoYCRc7-2sQ7rSrmbVVF-2zt5aEewTuS7C2iChMXeTuT0u2S9QuaGQfUM95dlJXyL52~yoOZmwxIJnDK8xdB8UQuc5PAh6-H7H7Rhx5D1XtDruDyCA8md6rtBvC~nUJEnrHQrpjBpwBWxXQjtLaYofwG~MYcVbJYHnhUVWcNCnRqJ4WUrD8-SYFZdJYUjvXxO4yge9FXENciNpcQlkgb-yzAnGVIfdGzLraCXuDYYU7OIxVDeD-UlGWSFyl4W4eiQuRAc4hHYJVdJKBe3HjgAJLC6qpiHYJZtMhSknZCpCMeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <h3>Save Time with Automation and Efficiency</h3>
          <p style={{fontSize:"small"}} >Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.</p>

        

        </div>
      <div className='craft-option'>
        <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/556c/6225/b4a33a4eaf587c8a7684a9ad2780eb4d?Expires=1698624000&Signature=pqZ52duVqJq1zSOuyY-eKh~l9BsbFNTvlms9AAmphKiIlbCDLAW6vlo3qzRkkETLNd4o716n4VXkbXw7KoTGajRLgksmlahVCdOyIj8Ccjr03puBLtaR7pO4YwAkZduYH5AwWNL9RC29alPrZUoc6ky3HteFyNyusRXHRvkTBAVmx7NyidX504q9OffXsZEYMnkQntZBhc6C~zPdjm~UigNiDWhWGS4Jty89xPorU1TxFXpcJyZz5Y9Ww9RHmGg3wd6mPEeyQhT9ha6Uv-8WCsUIvV6JRq6OqIGJc8Z7Jfv~Jw9CGKMHhx0Zkb6ZR4Xi~EGUY3C~NP~IKAyr88co0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <h3>Join a Supportive Community</h3>
          <p style={{fontSize:"small"}} >Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.</p>

        

        </div>
        <div className='craft-option'>
        <img height={"100px"} src="https://s3-alpha-sig.figma.com/img/71bf/30af/78cfb4b415731466c9ce8a1c38ad5d50?Expires=1698624000&Signature=fZU4xyeI2o1YxNg0iMZInpOoDqRvZc9z4R2BV1NVqM9aDSstieOJ~YDjFVMRsikkyQALn-SGaZZBCgr58qfqPhpTcndbaiGmMETCc-lc34MoYTlJ3pPv294lzNGNxjuUIWEG7aVVuNIMSlZOrVWMoHFyfopdBPMl2RHEL7tdubVE68O7NP0Ro4JtIf5EySn1G58gJ7bDZua6lN6ExahEkSYqnLjFpKZARYwfa98T6AhtjbD-AK5zIH~5NyucOQ~I6qqoOHtli6~Cwwdr3oAeNRPKTe20017qUZ6peaQ1rRmale~RUWnxu-LP5wQ-uQlZfZ3GmyQd9V0zyUQT5pDtPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <h3>Unlock Exclusive Opportunities and Prizes</h3>
          <p style={{fontSize:"small"}} >Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.</p>

        

        </div>
      </div>
    </div>
       <div  style={{backgroundImage:`url(${middle})`, backgroundSize:"100% 100%", }} className='third-section'>
     
          <p style={{fontSize:"small"}} >Don't miss out on ABC’s Incredible features and Opportunities.</p>
          <h1>Join us today and unlock your 
</h1>
<h1>full potential as a creator</h1>
        <button className='join-btn'>Join Now</button>
       </div>
       
       <img style={{backgroundColor:"black"}} src={models} width={"100%"} alt="" />
       <div  style={{backgroundImage:`url(${ring})`, backgroundSize:"100% 100%", }} className='third-section'>
     
     <h1>Ready to Cash in Your Connections?
      </h1>
      <h1>
Join Our Affiliate Program</h1>
     <p className='creator-ref' >Join now and get <span>7.5%</span>  commission on all creator referrals for the entire year.</p>
   <button className='join-btn'>Earn Now</button>
  </div>
  <div className='last-section'>
    {/* <img src={abc} alt="" /> */}
    <div className='community' style={{backgroundImage:`url(${abc})`, backgroundSize:"100% 100%"}}>
      <h1>Join the ABC Community</h1>
      <p>
      Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform. Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.
      </p>
      <button className='learn-btn'>Learn More</button>
    </div>
    <div className="content">
         
           
             <b className="logo">lOGO</b>
             <div className="frame-parent">
               <div className="company-parent">
                 <b>Company</b>
                 <div className="about-us-parent">
                   <div className="about-us">About Us</div>
                   <div className="about-us">Support</div>
                   <div className="about-us">Blog</div>
                   <div className="about-us">Login</div>
                   <div className="about-us">Signup</div>
                   <div className="about-us">Contact Us</div>
                 </div>
               </div>
               <div className="company-parent">
                 <b>Programs</b>
                 <div className="about-us-parent">
                   <div className="about-us">Affiliate Program</div>
                   <div className="about-us">Ambassador Program</div>
                   <div className="about-us">Partnership Program</div>
                 </div>
               </div>
               <div className="policy-parent">
                 <b>Policy</b>
                 <div className="legal-parent">
                   <div className="about-us">Legal</div>
                   <div className="about-us">DMCA</div>
                   <div className="about-us">USC 2257</div>
                   <div className="about-us">Privacy Policy</div>
                   <div className="about-us">Terms and Conditions</div>
                 </div>
               </div>
             </div>
             <div className="follow-us-parent">
               <b>Follow Us</b>
               <div className="link-svg-parent">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M8.33333 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5ZM30 8.33333H25.8333C24.2862 8.33333 22.8025 8.94792 21.7085 10.0419C20.6146 11.1358 20 12.6196 20 14.1667V18.3333H16.6667V23.3333H20V35H25V23.3333H30V18.3333H25V15C25 14.558 25.1756 14.134 25.4882 13.8215C25.8007 13.5089 26.2246 13.3333 26.6667 13.3333H30V8.33333Z" fill="#ACACAC"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M37.4292 10.0013C36.1458 10.5846 34.7625 10.968 33.3292 11.1513C34.7958 10.268 35.9292 8.86797 36.4625 7.18464C35.0792 8.01797 33.5458 8.6013 31.9292 8.93464C30.6125 7.5013 28.7625 6.66797 26.6625 6.66797C22.7458 6.66797 19.5458 9.86797 19.5458 13.818C19.5458 14.3846 19.6125 14.9346 19.7292 15.4513C13.7958 15.1513 8.5125 12.3013 4.99583 7.98464C4.37917 9.03464 4.02917 10.268 4.02917 11.568C4.02917 14.0513 5.27917 16.2513 7.2125 17.5013C6.02917 17.5013 4.92917 17.168 3.9625 16.668V16.718C3.9625 20.1846 6.42917 23.0846 9.69583 23.7346C8.64705 24.0216 7.54599 24.0616 6.47917 23.8513C6.93184 25.2721 7.8184 26.5153 9.01419 27.4062C10.21 28.2971 11.6549 28.7908 13.1458 28.818C10.6186 30.8187 7.48583 31.9002 4.2625 31.8846C3.69583 31.8846 3.12917 31.8513 2.5625 31.7846C5.72917 33.818 9.49583 35.0013 13.5292 35.0013C26.6625 35.0013 33.8792 24.1013 33.8792 14.6513C33.8792 14.3346 33.8792 14.0346 33.8625 13.718C35.2625 12.718 36.4625 11.4513 37.4292 10.0013Z" fill="#ACACAC"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M13.0026 3.33203H27.0026C32.3359 3.33203 36.6693 7.66536 36.6693 12.9987V26.9987C36.6693 29.5625 35.6508 32.0212 33.838 33.8341C32.0251 35.6469 29.5664 36.6654 27.0026 36.6654H13.0026C7.66927 36.6654 3.33594 32.332 3.33594 26.9987V12.9987C3.33594 10.4349 4.35439 7.97618 6.16724 6.16333C7.98009 4.35048 10.4388 3.33203 13.0026 3.33203ZM12.6693 6.66536C11.078 6.66536 9.55185 7.29751 8.42663 8.42272C7.30141 9.54794 6.66927 11.0741 6.66927 12.6654V27.332C6.66927 30.6487 9.3526 33.332 12.6693 33.332H27.3359C28.9272 33.332 30.4534 32.6999 31.5786 31.5747C32.7038 30.4495 33.3359 28.9233 33.3359 27.332V12.6654C33.3359 9.3487 30.6526 6.66536 27.3359 6.66536H12.6693ZM28.7526 9.16536C29.3051 9.16536 29.835 9.38486 30.2257 9.77556C30.6164 10.1663 30.8359 10.6962 30.8359 11.2487C30.8359 11.8012 30.6164 12.3311 30.2257 12.7218C29.835 13.1125 29.3051 13.332 28.7526 13.332C28.2001 13.332 27.6702 13.1125 27.2795 12.7218C26.8888 12.3311 26.6693 11.8012 26.6693 11.2487C26.6693 10.6962 26.8888 10.1663 27.2795 9.77556C27.6702 9.38486 28.2001 9.16536 28.7526 9.16536ZM20.0026 11.6654C22.2127 11.6654 24.3324 12.5433 25.8952 14.1061C27.458 15.6689 28.3359 17.7886 28.3359 19.9987C28.3359 22.2088 27.458 24.3285 25.8952 25.8913C24.3324 27.4541 22.2127 28.332 20.0026 28.332C17.7925 28.332 15.6729 27.4541 14.11 25.8913C12.5472 24.3285 11.6693 22.2088 11.6693 19.9987C11.6693 17.7886 12.5472 15.6689 14.11 14.1061C15.6729 12.5433 17.7925 11.6654 20.0026 11.6654ZM20.0026 14.9987C18.6765 14.9987 17.4048 15.5255 16.4671 16.4632C15.5294 17.4008 15.0026 18.6726 15.0026 19.9987C15.0026 21.3248 15.5294 22.5965 16.4671 23.5342C17.4048 24.4719 18.6765 24.9987 20.0026 24.9987C21.3287 24.9987 22.6005 24.4719 23.5381 23.5342C24.4758 22.5965 25.0026 21.3248 25.0026 19.9987C25.0026 18.6726 24.4758 17.4008 23.5381 16.4632C22.6005 15.5255 21.3287 14.9987 20.0026 14.9987Z" fill="#ACACAC"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M35.9211 11.5992C35.6023 9.83984 34.0836 8.55859 32.3211 8.15859C29.6836 7.59922 24.8023 7.19922 19.5211 7.19922C14.243 7.19922 9.28359 7.59922 6.64297 8.15859C4.88359 8.55859 3.36172 9.75859 3.04297 11.5992C2.72109 13.5992 2.40234 16.3992 2.40234 19.9992C2.40234 23.5992 2.72109 26.3992 3.12109 28.3992C3.44297 30.1586 4.96172 31.4398 6.72109 31.8398C9.52109 32.3992 14.3211 32.7992 19.6023 32.7992C24.8836 32.7992 29.6836 32.3992 32.4836 31.8398C34.243 31.4398 35.7617 30.2398 36.0836 28.3992C36.4023 26.3992 36.8023 23.518 36.8836 19.9992C36.7211 16.3992 36.3211 13.5992 35.9211 11.5992ZM15.2023 25.5992V14.3992L24.9617 19.9992L15.2023 25.5992Z" fill="#ACACAC"/>
</svg>
               </div>
             </div>
           </div>
           
  
  </div>
  
    </DIV>
  )
 }

export default Homepage
const DIV = styled.div`

*{

  /* outline: 1px solid limegreen !important; */
  /* box-sizing: border-box; */
}
.sec-heading{
  width: 50%;
  /* text-align: center; */
  color: #CAC4D2;
  font-size: xx-large;
  padding: 200px 100px;
}
.signup-container{
  height: 90vh;
  /* background-image: url(); */
  /* background-color: #cccccc; */
    display: flex;
    /* width:fit-content; */
    
    margin: auto;
    justify-content: space-around;
  }
  .google-login{
  display: flex;
  width: 90%;
  color: white;
  padding: 10px ;
  /* width:fit-content; */
  justify-content: center;
  /* align-items: center; */
  margin: auto;
  border-radius: 15.721px;
  background: #4285F4;
  
}
.signup-div{
  width:25%;
    margin: 40px;
    /* width: 30v; */
    padding: 20px;
    height: fit-content;
    border-radius: 31.442px;
border: 1.123px solid var(--aa, #7526F2);
background: rgba(30, 28, 34, 0.60);
backdrop-filter: blur(5px);
}

.name-div{
  display: flex;
  /* grid-template-columns: repeat(2,1fr); */
  gap:10px;
}
.signup-div input{
  margin:  10px 0px;
  /* height: 20px; */
padding: 8px;
width: 94%;
  border-radius: 11.3px;
  background: none;
border: 1.13px solid #3D3549;
}
.input-fields{
  display:grid;
  width:100%;
}
.timeClass{
  color: #8971A0;
text-align: justify;
background: none;
font-family: Roboto;
font-size: 15px;
border: none;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.signup-btn{
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0 ;
  /* font-size: large; */
  color: #CAC4D2;
background: linear-gradient(91deg, #7426F2 0.18%, rgba(152, 88, 255, 0.97) 99.67%);
}
.creator-btn{
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0 ;
  /* font-size: large; */
  color: #CAC4D2;
  /* border-radius: 15.721px; */
background: var(--aa, linear-gradient(91deg, #7526F2 0%, #C826F2 100%));
}
.terms{
  color: #8971A0;
  font-size: small;
}
.or-line{
  display: flex;
  margin-top: 10px;
  width: 100%;
  color: #484848;
  line-height: 2px;
  gap: 5px;
}
.login-link{
  font-size: small;
  color: #7421F4;;
}
.account-tag{
  font-size: small;
  color: #8971A0;
}
.sec02-heading{
  text-align: center;
  color: rgba(217, 217, 217, 1);
  padding: 10px;
  font-size: xx-large;
}
.second-section{
  background-color: #121212;
}
.first-row{
  padding: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2,1fr);
}
.second-row{
  padding: 50px;
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3,1fr);
}
.craft-option{
  border-radius: 28px;
background: #191919;
padding: 40px 40px 10px 40px;
background-image: radial-gradient(rgba(37, 27, 46, 0), rgba(37, 27, 46, 1));
color: #CAC4D2;
text-align: center;
/* font-size: small; */
/* display: flex; */
/* justify-content: end; */
}
.option-divs{
  margin: 10px;
  display: flex;
  gap: 10px;
  font-size: x-small;
}
.option-divs > div{
  border-radius: 14.004px;
background: #1C1423;
padding: 20px;
}
.option-divs img{
display: flex;
border-radius: 5px;
margin: auto;
}
.third-section{
  /* background: url(middle) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat; */
  background-color: #121212;
  height: 400px;
  color: #CAC4D2;
  margin-top: -5px;
  /* align-items: center; */
  /* vertical-align: text-bottom; */
  vertical-align: middle;
  padding-top:100px ;
  width: 100%;
  font-size: larger;
  text-align: center;
}
.mobile-img{
  /* style={{width:"60%",marginBottom:"-50px"}} */
}

.join-btn{
  border-radius: 16px;
background: linear-gradient(93deg, #B126F2 3.38%, #7700D4 99.69%);
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.12);
display: flex;
width: 278px;
border: none;
padding: 16px 24px;
/* font-size: e; */
color: white;
justify-content: center;
align-items: center;
gap: 10px;
margin: 40px auto;
}
.learn-btn{
  border-radius: 16px;
background: linear-gradient(93deg, #B126F2 3.38%, #7700D4 99.69%);
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.12);
display: flex;
width: 250px;
border: none;
padding: 15px 20px;
/* font-size: e; */
color: white;
justify-content: center;
align-items: center;
gap: 10px;
margin: 20px auto;
}
.creator-ref{
  font-size: small;
  color: grey;
  color: linear-gradient(91deg, #7526F2 0%, #C826F2 100%);
}
.creator-ref > span{
  font-size: x-large;
  /* margin-bottom: -10px; */
  background: linear-gradient(91deg, #7526F2 0%, #C826F2 100%);
background-clip: text;
font-weight: 600;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  /* color: linear-gradient(91deg, #7526F2 0%, #C826F2 100%); */
}
.last-section{
  background-color: #121212;
  /* height: 100px; */
  padding: 50px;
}
.community{
  border-radius: 10px;
  padding: 50px 20px;
  /* height: 100px;s */
  text-align: center;
  color: #CAC4D2;
  width: 100%;
}
.community > p{
  width: 70%;
  margin: 20px auto ;
  font-size: small;
}
.content{
  display: flex;
  justify-content: space-around;
  color: #C6C6C6;
  padding: 20px;
}
.frame-parent{
  display: flex;
  justify-content: space-around;
  gap: 30px;
}
.logo{
  font-size: x-large;
}
@media (max-width: 480px) {

  .signup-container{
  height: 100vh;
    display: flex;
    flex-direction: column;
    
  }

  .sec-heading {
    width: 80%;
    margin: auto;
    color: #CAC4D2;
    font-size: medium;
    padding:  10px;
  }
.signup-div {
    width: 70%;
    margin: auto;
    padding: 20px;
    height: fit-content;
    font-size: small;
    border: 1.123px solid  #7526F2;
    background: rgba(30, 28, 34, 0.60);
    backdrop-filter: blur(5px);
}
.timeClass {
    
    font-size: 10px;
    
}

.first-row{
  padding: 30px;
  display: grid;
  gap: 20px;
  /* width: 100%; */
  grid-template-columns: repeat(1,1fr);
}
.second-row{
  padding: 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1,1fr);
}

.craft-option{
  border-radius: 28px;
background: #191919;
padding: 40px 40px 10px 40px;
background-image: radial-gradient( rgba(37, 27, 46, 0), rgba(37, 27, 46, 1));
color: #CAC4D2;
text-align: center;
/* font-size: small; */
/* display: flex; */
/* justify-content: end; */
}
.option-divs{
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 10px;
  font-size: x-small;
}
.third-section {
   
    font-size: x-small;
    
    
}
.last-section{
  background-color: #121212;
  /* height: 100px; */
  padding: 50px;
}

.content{
  
  flex-direction: column;
  color: #C6C6C6;
  padding: 10px;
  font-size: smaller;
  text-align: center;
}
.frame-parent{

  gap: 10px;
  flex-direction: column;
}
.logo{
  visibility: hidden;
  height: 0px;
}
.third-section {
    background-color: #121212;
    height: 250px;
    color: #CAC4D2;
    margin-top: -5px;
    vertical-align: middle;
    padding-top: 50px;
    width: 100%;
    font-size: x-small;
    text-align: center;
}

.community{
  border-radius: 10px;
  padding: 30px 10px;
  text-align: center;
  color: #CAC4D2;
  width: 100%;
}

}




`