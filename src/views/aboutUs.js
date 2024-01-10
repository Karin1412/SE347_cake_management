import React from 'react';
import banner from '../assets/aboutUs-1.png'
import imgCenter from '../assets/aboutUs-2.png'
import imgQuest from '../assets/aboutUs-3.png'
import aboutUS4 from '../assets/aboutUs-4.png'
import aboutUS5 from '../assets/aboutUs-5.png'
import aboutUS6 from '../assets/aboutUs-6.png'
import aboutUsCenter from '../assets/aboutUs-center.png'
import NavBar from '../components/admin/navbar';

const aboutUs = () => {
  return (
    <div className=''>
      <NavBar />
      <section className='bg-gradient-to-b from-white to-orange-300 p-10'>
        <div className="w-32 h-28 ml-24">
          <div className="w-24 h-px absolute border-2 border-red-300"></div>
          <div className="absolute mt-3">
            <div className="text-yellow-900 text-2xl font-normal font-['Inter']">Know <br /></div>
            <div className="text-yellow-900 text-2xl font-bold font-['Inter']">our history<br /></div></div>
        </div>
        <div className="text-center">
          <img className="w-auto block mx-auto" src={banner} alt='banner' />
        </div>
        <div className="mt-24 mb-12 text-center">
          <div className="w-80 h-10 block mx-auto">
            <div className="text-white text-3xl font-bold font-['Inter']">Our Success</div>
            <div className="text-white text-3xl font-normal font-['Inter']"> Numbers<br /></div>
          </div>
        </div>
        <div>
          <div className="flex justify-center text-center mt-9">
            <div class="flex justify-center bg-orange-400 h-auto w-fit rounded-2xl">
              <div className="flex justify-center py-7 px-32">
                <div class="flex flex-col justify-center mr-24">
                  <div id="content" className="flex justify-center mb-3">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Frame">
                        <path id="Vector" d="M33.25 3.16675V34.8334H30.0833V22.1667H25.3333V11.0834C25.3333 6.71117 28.8778 3.16675 33.25 3.16675ZM14.25 22.0084V34.8334H11.0833V22.0084C7.46979 21.2749 4.75 18.0802 4.75 14.2501V4.75008H7.91667V15.8334H11.0833V4.75008H14.25V15.8334H17.4167V4.75008H20.5833V14.2501C20.5833 18.0802 17.8635 21.2749 14.25 22.0084Z" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <div className="text-white text-5xl font-extrabold font-['Inter'] mb-7">6,500,00</div>
                  <div className="text-white text-xl font-normal font-['Inter']">Total meals served</div>
                </div>
                <div className="origin-top-bot border border-stone-400"></div>
                <div class="flex flex-col justify-center mx-24">
                  <div id="content" className="flex justify-center mb-3">
                    <svg width="123" height="53" viewBox="0 0 123 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group 1515">
                        <path id="Vector" d="M61.5001 29.5626L50.6844 36.1346L53.1 22.9375L44 13.8022L56.3085 12.218L61.5001 0L66.6915 12.218L79 13.8022L69.9001 22.9375L72.3157 36.1346L61.5001 29.5626Z" fill="white" />
                        <path id="Vector_2" d="M33.0001 37.4273L26.2016 41.6095L27.72 33.2113L22 27.398L29.7368 26.3898L33.0001 18.6147L36.2632 26.3898L44 27.398L38.2801 33.2113L39.7984 41.6095L33.0001 37.4273Z" fill="white" />
                        <path id="Vector_3" d="M89.9999 37.4273L96.7984 41.6095L95.28 33.2113L101 27.398L93.2632 26.3898L89.9999 18.6147L86.7368 26.3898L79 27.398L84.7199 33.2113L83.2016 41.6095L89.9999 37.4273Z" fill="white" />
                        <path id="Vector_4" d="M11.0001 48.3773L4.20164 52.5595L5.72001 44.1613L0 38.3479L7.7368 37.3398L11.0001 29.5647L14.2632 37.3398L22 38.3479L16.2801 44.1613L17.7984 52.5595L11.0001 48.3773Z" fill="white" />
                        <path id="Vector_5" d="M112 48.3773L118.798 52.5595L117.28 44.1613L123 38.3479L115.263 37.3398L112 29.5647L108.737 37.3398L101 38.3479L106.72 44.1613L105.202 52.5595L112 48.3773Z" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <div className="text-white text-5xl font-extrabold font-['Inter']">+1,000</div>
                  <div className="text-center text-white text-xl font-normal font-['Inter']">Average start review.<br />4,5 stars</div>              </div>
                <div className="origin-top-bot border border-stone-400"></div>
                <div class="flex flex-col justify-center ml-24">
                  <div id="content" className="flex justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                      <path d="M3.16663 34.8333C3.16663 27.8376 8.83768 22.1666 15.8333 22.1666C22.8289 22.1666 28.5 27.8376 28.5 34.8333H25.3333C25.3333 29.5866 21.08 25.3333 15.8333 25.3333C10.5866 25.3333 6.33329 29.5866 6.33329 34.8333H3.16663ZM15.8333 20.5833C10.5845 20.5833 6.33329 16.332 6.33329 11.0833C6.33329 5.8345 10.5845 1.58325 15.8333 1.58325C21.082 1.58325 25.3333 5.8345 25.3333 11.0833C25.3333 16.332 21.082 20.5833 15.8333 20.5833ZM15.8333 17.4166C19.3325 17.4166 22.1666 14.5824 22.1666 11.0833C22.1666 7.58409 19.3325 4.74992 15.8333 4.74992C12.3341 4.74992 9.49996 7.58409 9.49996 11.0833C9.49996 14.5824 12.3341 17.4166 15.8333 17.4166ZM28.9492 23.2794C33.3519 25.2637 36.4166 29.6906 36.4166 34.8333H33.25C33.25 30.9763 30.9514 27.6562 27.6494 26.1678L28.9492 23.2794ZM27.8606 5.40417C31.0244 6.70855 33.25 9.8223 33.25 13.4583C33.25 18.0027 29.7733 21.7315 25.3333 22.1311V18.9439C28.0197 18.5601 30.0833 16.2513 30.0833 13.4583C30.0833 11.2722 28.8192 9.3828 26.9815 8.48081L27.8606 5.40417Z" fill="white" />
                    </svg>
                  </div>
                  <div className="text-white text-5xl font-extrabold font-['Inter']">+20,000</div>
                  <div className="text-center text-white text-xl font-normal font-['Inter']">Number of clients<br />served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="mt-10 bg-center p-10">
        <div className="h-1 flex justify-start">
          <div><img className="-translate-x-48 -translate-y-80 rotate-12" src={aboutUS4} alt='banner' /></div>
        </div>
        <div className="h-1 flex justify-end">
          <div><img className="-translate-y-96 translate-x-10" src={aboutUS5} alt='banner' /></div>
        </div>
        <div className="h-1 flex justify-end">
          <div><img className="-translate-y-64 translate-x-10" src={aboutUS6} alt='banner' /></div>
        </div>
        <div className="w-32 h-28 ml-24">
          <div className="w-24 h-px absolute border-2 border-red-300"></div>
          <div className="absolute mt-3">
            <div className="text-yellow-900 text-2xl font-normal font-['Inter']">Our<br /></div>
            <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Vision<br /></div></div>
        </div>

        <div className="flex justify-center">
          <img className="" src={aboutUsCenter} alt='cake' />
        </div>

        {/* <div className="flex flex-row">
          <div className="flex justify-start">
            <div className="flex justify-center w-fit h-fit bg-orange-100 rounded-lg transform translate-x-20">
              <div className="flex flex-col w-80 m-2 justify-center">
                <div className="flex items-center">
                  <div className="content-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" fill="none">
                      <g>
                        <rect width="53.9966" height="52.3041" rx="10" transform="matrix(-1 0 0 1 53.9966 0)" fill="#FFBF96" />
                      </g>
                      <path d="M27.8172 37.9C34.5016 37.9 39.9202 32.3484 39.9202 25.5C39.9202 18.6517 34.5016 13.1 27.8172 13.1C21.1329 13.1 15.7142 18.6517 15.7142 25.5C15.7142 32.3484 21.1329 37.9 27.8172 37.9ZM27.8172 41C19.4618 41 12.6885 34.0603 12.6885 25.5C12.6885 16.9396 19.4618 10 27.8172 10C36.1725 10 42.946 16.9396 42.946 25.5C42.946 34.0603 36.1725 41 27.8172 41ZM27.8172 31.7C31.1593 31.7 33.8687 28.9241 33.8687 25.5C33.8687 22.0758 31.1593 19.3 27.8172 19.3C24.4751 19.3 21.7657 22.0758 21.7657 25.5C21.7657 28.9241 24.4751 31.7 27.8172 31.7ZM27.8172 34.8C22.804 34.8 18.74 30.6362 18.74 25.5C18.74 20.3637 22.804 16.2 27.8172 16.2C32.8304 16.2 36.8945 20.3637 36.8945 25.5C36.8945 30.6362 32.8304 34.8 27.8172 34.8ZM27.8172 28.6C26.1461 28.6 24.7915 27.2121 24.7915 25.5C24.7915 23.7879 26.1461 22.4 27.8172 22.4C29.4883 22.4 30.843 23.7879 30.843 25.5C30.843 27.2121 29.4883 28.6 27.8172 28.6Z" fill="#69432B" />
                    </svg>
                  </div>
                  <div className="flex flex-row justify-center text-center text-yellow-900 text-2xl font-semibold font-['Inter']">Reach the goals<br /></div>
                </div>
                <div>
                  <div className="mt-4 text-justify text-neutral-600 text-base font-normal font-['Inter']">Throughout your journey, our service provides unwavering support, offering personalized guidance to help you efficiently reach your goals. By prioritizing your well-being and fostering self-confidence, we are dedicated to ensuring your success.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center -translate-x-24 -translate-y">
            <div className="z-30 translate-x-72">
              <img class="w-[380px]" src={imgCenter} alt='cake' />
            </div>

            <div className="z-20 -translate-x-8 translate-y-16 bg-orange-300 w-48 h-48 rounded-xl">
            </div>

            <div className="z-10 -translate-x-36 bg-orange-100 w-60 h-60 rounded-xl">
            </div>
          </div>

          <div className="flex justify-end translate-y-24">
            <div className="flex justify-center w-fit h-fit bg-orange-100 rounded-lg">
              <div className="flex flex-col w-80 m-2 justify-center">
                <div className="flex items-center">
                  <div className="content-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                      <g>
                        <rect width="51.7546" height="52.3041" rx="10" transform="matrix(-1 0 0 1 51.7546 0)" fill="#FFBF96" />
                      </g>
                      <path d="M26.6619 39C19.6868 39 14.0323 32.9558 14.0323 25.5C14.0323 18.0442 19.6868 12 26.6619 12C33.6369 12 39.2914 18.0442 39.2914 25.5C39.2914 32.9558 33.6369 39 26.6619 39ZM26.6619 36.3C32.242 36.3 36.7655 31.4647 36.7655 25.5C36.7655 19.5353 32.242 14.7 26.6619 14.7C21.0818 14.7 16.5583 19.5353 16.5583 25.5C16.5583 31.4647 21.0818 36.3 26.6619 36.3ZM27.9249 25.5H32.9767V28.2H25.3989V18.75H27.9249V25.5Z" fill="#69432B" />
                    </svg>
                  </div>
                  <div className="flex flex-row justify-center text-center text-yellow-900 text-2xl font-semibold font-['Inter']">Save time<br /></div>
                </div>
                <div>
                  <div className="mt-4 text-justify text-neutral-600 text-base font-normal font-['Inter']">We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center w-fit bg-orange-100 rounded-lg">
            <div className="flex flex-col w-80 m-2 justify-center">
              <div className="flex items-center">
                <div className="content-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="53" viewBox="0 0 57 53" fill="none">
                    <g>
                      <rect width="56.3891" height="52.3041" rx="10" transform="matrix(-1 0 0 1 56.3892 0)" fill="#FFBF96" />
                    </g>
                    <rect width="2.45574" height="15.3538" transform="matrix(0.873374 0.48705 -0.435095 0.900385 43.9475 25.9434)" fill="#69432B" />
                    <rect width="2.45574" height="11.9418" transform="matrix(0.873374 0.48705 -0.435095 0.900385 46.0652 29.0742)" fill="#69432B" />
                    <rect width="2.45574" height="8.52988" transform="matrix(0.873374 0.48705 -0.435095 0.900385 48.183 32.2051)" fill="#69432B" />
                    <rect width="2.45574" height="15.3538" transform="matrix(-0.873374 -0.48705 -0.435095 0.900385 19.6409 12.3867)" fill="#69432B" />
                    <rect width="2.45574" height="11.9418" transform="matrix(-0.873374 -0.48705 -0.435095 0.900385 16.0382 12.3281)" fill="#69432B" />
                    <rect width="2.45574" height="8.52988" transform="matrix(-0.873374 -0.48705 -0.435095 0.900385 12.4363 12.2695)" fill="#69432B" />
                    <line y1="-1.5" x2="28.6503" y2="-1.5" transform="matrix(0.873374 0.48705 -0.435095 0.900385 14.8425 20.4375)" stroke="#FFDEC9" stroke-width="3" />
                  </svg>
                </div>
                <div className="flex flex-row justify-center text-center text-yellow-900 text-2xl font-semibold font-['Inter']">Best performances<br /></div>
              </div>
              <div>
                <div className="mt-4 text-justify text-neutral-600 text-base font-normal font-['Inter']">At the core of our mission is the optimization of your time, physical vitality, and mental energy, enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.</div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <section class="mt-10 p-10">
        <div className="w-32 h-28 ml-24">
          <div className="w-24 h-px absolute border-2 border-red-300"></div>
          <div className="absolute mt-3">
            <div className="text-yellow-900 text-2xl font-normal font-['Inter']">Our<br /></div>
            <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Departement<br /></div></div>
        </div>

        <div className="flex flex-row px-10">
          <div className="flex w-fit px-24">
            <img src={imgQuest} alt='quest-cake' className='w-full' />
          </div>

          <div className="flex flex-row">
            <div className="translate-y-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
                <circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 26.2584 10.7871)" fill="#69432B" />
                <path d="M25.6763 0.621719C26.7094 0.230669 27.8638 0.751097 28.2549 1.78413C28.6459 2.81716 28.1255 3.97161 27.0925 4.36266L25.6763 0.621719ZM17.82 19.7547C16.3455 17.204 15.9959 13.3348 17.08 9.73694C18.1947 6.03742 20.8767 2.43861 25.6763 0.621719L27.0925 4.36266C23.5905 5.6883 21.7096 8.23695 20.9099 10.8909C20.0797 13.6465 20.4645 16.3368 21.283 17.7527L17.82 19.7547Z" fill="#69432B" />
                <circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 10.2584 10.7871)" fill="#69432B" />
                <path d="M9.67634 0.621719C10.7094 0.230669 11.8638 0.751097 12.2549 1.78413C12.6459 2.81716 12.1255 3.97161 11.0925 4.36266L9.67634 0.621719ZM1.82004 19.7547C0.345475 17.204 -0.00406869 13.3348 1.07998 9.73694C2.19465 6.03742 4.87668 2.43861 9.67634 0.621719L11.0925 4.36266C7.59052 5.6883 5.70955 8.23695 4.90991 10.8909C4.07965 13.6465 4.46447 16.3368 5.28301 17.7527L1.82004 19.7547Z" fill="#69432B" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-neutral-700 text-2xl font-normal font-['Inter'] leading-9 w-[640px] ml-1">At our company, our Customer Service Department is wholly committed to delivering unparalleled service to our valued customers. From the very first point of contact, customers are warmly welcomed with a friendly smile and a supportive demeanor. Our team undergoes rigorous training to adeptly handle customer requests and inquiries with efficiency and efficacy, ensuring a remarkable experience that upholds the elevated standards we hold dear.</div>
              <div className="flex justify-center -translate-x-16 -translate-y-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
                  <circle cx="7.12622" cy="15.7871" r="5" fill="#69432B" />
                  <path d="M2.7083 0.621719C1.67527 0.230669 0.520826 0.751097 0.129776 1.78413C-0.261275 2.81716 0.259154 3.97161 1.29219 4.36266L2.7083 0.621719ZM10.5646 19.7547C12.0392 17.204 12.3887 13.3348 11.3047 9.73694C10.19 6.03742 7.50797 2.43861 2.7083 0.621719L1.29219 4.36266C4.79413 5.6883 6.67509 8.23695 7.47473 10.8909C8.30499 13.6465 7.92017 16.3368 7.10163 17.7527L10.5646 19.7547Z" fill="#69432B" />
                  <circle cx="23.1262" cy="15.7871" r="5" fill="#69432B" />
                  <path d="M18.7083 0.621719C17.6753 0.230669 16.5208 0.751097 16.1298 1.78413C15.7387 2.81716 16.2592 3.97161 17.2922 4.36266L18.7083 0.621719ZM26.5646 19.7547C28.0392 17.204 28.3887 13.3348 27.3047 9.73694C26.19 6.03742 23.508 2.43861 18.7083 0.621719L17.2922 4.36266C20.7941 5.6883 22.6751 8.23695 23.4747 10.8909C24.305 13.6465 23.9202 16.3368 23.1016 17.7527L26.5646 19.7547Z" fill="#69432B" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section class="mt-10 p-10">
        <div className="w-32 h-28 ml-24">
          <div className="w-24 h-px absolute border-2 border-red-300"></div>
          <div className="absolute mt-3">
            <div className="text-yellow-900 text-2xl font-normal font-['Inter']">Our<br /></div>
            <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Our Differentials<br /></div></div>
        </div>
        <div className="flex flex-row px-10 ml-24 justify-start">
          <div className="flex flex-col h-[650px] bg-orange-100 rounded-2xl">
            <div className="my-4 mx-9 w-80">
              <div className="w-9 h-9 bg-orange-300 flex justify-center items-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L12.6154 14.5L9.53846 11.375L4 17" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 13V7H14" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mt-2">
                <div className="w-96"><div className="text-stone-800 text-2xl font-bold font-['Inter']">Innovative</div>
                  <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Cake Design</div>
                </div>
              </div>
              <div className="w-80 h-px absolute border-2 border-orange-300 mt-4">
                <div className="w-80 mt-4 text-justify text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">Unique Shapes and Decorations: Elevate your bakery's visual identity by masterfully crafting cakes with imaginative shapes and artistic decorations. From intricate fondant sculptures to avant-garde geometric designs, the emphasis is on pushing creative boundaries to create edible works of art that leave a lasting impression.<br />Exclusive or Seasonal Products: Unleash the allure of exclusivity by offering limited-edition or seasonal baked goods. Whether it's a tantalizing flavor inspired by the latest culinary trends or a visually stunning cake designed for a specific celebration, these exclusive offerings not only generate buzz but also instill a sense of anticipation among your clientele.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[650px] bg-orange-100 rounded-2xl mx-10">
            <div className="my-4 mx-9 w-80">
              <div className="w-9 h-9 bg-orange-300 flex justify-center items-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mt-2">
                <div className="w-96"><div className="text-stone-800 text-2xl font-bold font-['Inter']">Special</div>
                  <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Customer Experience</div>
                </div>
              </div>
              <div className="w-80 h-px absolute border-2 border-orange-300 mt-4">
                <div className="w-80 mt-4 text-justify text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">Attentive Service and Effective Communication: Beyond the delectable treats, cultivate an atmosphere of warmth and hospitality. Ensure that every customer interaction is marked by attentive service, from personalized recommendations to swift issue resolution. Clear and effective communication enhances the overall experience, making patrons feel valued and heard.<br />Customer Understanding: Forge a deeper connection with your customer base by actively seeking to understand their preferences. Regularly collect feedback, adapt to evolving tastes, and tailor your offerings to align with their desires. This customer-centric approach not only fosters loyalty but also positions your bakery as a trusted ally in their culinary journey.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[650px] bg-orange-100 rounded-2xl">
            <div className="my-4 mx-9 w-80">
              <div className="w-9 h-9 bg-orange-300 flex justify-center items-center rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z" stroke="#69432B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="mt-2">
                <div className="w-96"><div className="text-stone-800 text-2xl font-bold font-['Inter']">Special</div>
                  <div className="text-yellow-900 text-2xl font-bold font-['Inter']">Customer Experience</div>
                </div>
              </div>
              <div className="w-80 h-px absolute border-2 border-orange-300 mt-4">
                <div className="w-80 mt-4 text-justify text-zinc-500 text-lg font-normal font-['Inter'] leading-tight">Use of High-Quality Ingredients: Elevate the essence of indulgence by incorporating only the finest, premium-quality ingredients. Communicate the source and quality of your raw materials, emphasizing the superior taste and nutritional value of your products. This commitment to excellence reinforces your bakery's dedication to delivering an unparalleled gastronomic experience.<br />Specialized or Traditional Production Processes: Unveil the artisanal craftsmanship behind your baked goods by highlighting specialized or traditional production methods. Whether it's time-honored techniques passed down through generations or innovative processes that set you apart, sharing the story behind your creations fosters transparency, trust, and a deeper appreciation for the artistry embedded in every confection.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutUs;
