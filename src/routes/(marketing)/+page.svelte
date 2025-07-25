<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Daily Habits",
      description:
        "Simple, science-backed habits that build momentum and create lasting change in your wellness journey.",
      link: "/blog",
      svgContent: `<path d="M20 12C20 16.714 20 19.0711 18.5355 20.5355C17.0711 22 14.714 22 10 22H6C4.11438 22 2.17157 22 1.05719 21.4142C0.421573 21.0811 0 20.421 0 19.7324V17.2676C0 16.579 0.421573 15.9189 1.05719 15.5858C2.17157 15 4.11438 15 6 15H10C14.714 15 17.0711 15 18.5355 16.4645C20 17.9289 20 20.286 20 25Z" stroke="#2C2C54" stroke-width="1.5"/>
<circle cx="16" cy="8" r="6" stroke="#FF6B6B" stroke-width="1.5"/>
<path d="M13 8L15 10L19 6" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "Fitness Fundamentals",
      link: "/blog",
      description:
        "No-nonsense workout guides and movement principles that fit into your busy life.",
      svgContent: `<path d="M7.5 12L10.5 15L16.5 9" stroke="#2C2C54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FF6B6B" stroke-width="1.5"/>
<path d="M8 12L12 8L16 12L12 16L8 12Z" fill="#FF6B6B" opacity="0.2"/>`,
    },
    {
      name: "Easy Nutrition",
      link: "/blog", 
      description:
        "Simple meal planning and nutrition tips that don't require a PhD in biochemistry.",
      svgContent: `<path d="M2 7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H6C3.79086 21 2 19.2091 2 17V7Z" stroke="#2C2C54" stroke-width="1.5"/>
<path d="M6 8H18" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 12H14" stroke="#C6C9D8" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 16H11" stroke="#C6C9D8" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Mindset & Motivation",
      link: "/blog",
      description:
        "Mental frameworks and motivation strategies that keep you going when things get tough.",
      svgContent: `<circle cx="12" cy="12" r="3" stroke="#FF6B6B" stroke-width="1.5"/>
<path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6836 5.28137 17.3479 5.45883C16.8545 5.71961 16.2644 5.73003 15.7811 5.451C15.2977 5.17197 15.0117 4.65576 14.9909 4.09807C14.9767 3.71858 14.9404 3.45842 14.8477 3.23471C14.6448 2.74466 14.2554 2.35531 13.7654 2.15232V2.15224Z" stroke="#2C2C54" stroke-width="1.5"/>`,
    },
    {
      name: "Your Progress Dashboard",
      link: "/account/settings",
      description: "Track your wellness journey, set goals, and celebrate wins with personalized insights.",
      svgContent: `<path d="M3 22H21" stroke="#2C2C54" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11C3 10.0572 3 9.58579 3.29289 9.29289C3.58579 9 4.05719 9 5 9C5.94281 9 6.41421 9 6.70711 9.29289C7 9.58579 7 10.0572 7 11V17C7 17.9428 7 18.4142 6.70711 18.7071C6.41421 19 5.94281 19 5 19C4.05719 19 3.58579 19 3.29289 18.7071C3 18.4142 3 17.9428 3 17V11Z" stroke="#FF6B6B" stroke-width="1.5"/>
<path d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" stroke="#2C2C54" stroke-width="1.5"/>
<path d="M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4Z" stroke="#FF6B6B" stroke-width="1.5"/>`,
    },
    {
      name: "The Daily Drive Newsletter",
      link: "/pricing",
      description: "Weekly actionable tips delivered straight to your inbox. No fluff, just results.",
      svgContent: `<path d="M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13" stroke="#2C2C54" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="19" cy="5" r="3" stroke="#FF6B6B" stroke-width="1.5" fill="#FF6B6B"/>`,
    },
    {
      name: "Premium Wellness Tools",
      link: "/pricing",
      description: "Meal plans, workout PDFs, habit trackers, and personalized content to accelerate your progress.",
      svgContent: `<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#2C2C54" stroke-width="1.5"/>
<path d="M10 16.5H6" stroke="#C6C9D8" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 13.5H6" stroke="#C6C9D8" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L22 10" stroke="#FF6B6B" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="#FF6B6B" stroke-width="1.5"/>`,
    },
    {
      name: "Community Support",
      link: "/contact_us",
      description: "Connect with like-minded people on the same wellness journey. Get support, share wins, stay motivated.",
      svgContent: `<circle cx="10" cy="6" r="4" stroke="#2C2C54" stroke-width="1.5"/>
<path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="#FF6B6B" stroke-width="1.5"/>
<path d="M18.0885 12.5385L18.5435 11.9423L18.0885 12.5385ZM19 8.64354L18.4681 9.17232C18.6089 9.31392 18.8003 9.39354 19 9.39354C19.1997 9.39354 19.3911 9.31392 19.5319 9.17232L19 8.64354ZM19.9115 12.5385L19.4565 11.9423L19.9115 12.5385Z" fill="#C6C9D8"/>`,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mb-3 md:mb-7 pb-1 font-heading"
      >
        Progress, One Day at a Time
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2 font-heading"
        style="line-height: 1.2;"
      >
        Become the
        <span
          class="underline decoration-accent decoration-4 md:decoration-[6px]"
          >Best You</span
        >.
        <span
          class="underline decoration-accent decoration-4 md:decoration-[6px]"
          >Driven Daily</span
        >.
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg font-body">
        Your daily source for 
        <span class="font-semibold text-primary">fitness fundamentals</span>, 
        <span class="font-semibold text-primary">easy nutrition</span>, 
        <span class="font-semibold text-primary">mindset motivation</span>, and 
        <span class="font-semibold text-primary">wellness habits</span> that actually stick.
      </div>
      <div
        class="mt-6 md:mt-4 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="/blog">
          <button class="btn btn-primary px-6 font-heading">Start Your Journey</button>
        </a>
        <a href="/pricing">
          <button class="btn btn-outline btn-primary px-6 font-heading">Get The Tools</button>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2 font-heading"
      >
        Your Wellness Toolkit
      </div>
      <div class="mt-4 text-xl font-bold font-heading">
        Everything you need for
        <span
          class="underline decoration-accent decoration-[3px] md:decoration-[4px]"
        >
          consistent progress
        </span>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-white w-[270px] min-h-[300px] flex-none shadow-xl">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title font-heading">
              {feature.name}
            </h2>
            <p class="text-sm font-body">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="pb-4"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px] font-heading"
                  >{feature.linkText ? feature.linkText : "Try It"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mt-4 pb-2 font-heading"
      >
        Small Steps. Real Results.
      </div>
      <div class="mt-6 text-lg md:text-xl font-body">
        Join thousands of people who are transforming their lives, one day at a time. 
        No extreme diets, no impossible workout plans – just practical, proven strategies 
        that fit into your real life.
      </div>
      <div class="mt-8 flex flex-col gap-4">
        <div class="stats stats-horizontal shadow">
          <div class="stat">
            <div class="stat-title font-body">Daily Habits Tracked</div>
            <div class="stat-value text-primary font-heading">12K+</div>
          </div>
          <div class="stat">
            <div class="stat-title font-body">Success Stories</div>
            <div class="stat-value text-accent font-heading">850+</div>
          </div>
          <div class="stat">
            <div class="stat-title font-body">Community Members</div>
            <div class="stat-value text-primary font-heading">5.2K</div>
          </div>
        </div>
        <div class="mt-4">
          <a href="/blog">
            <button class="btn btn-primary btn-wide font-heading">
              Start Your First Day
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
