<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "./../../../config"

  type PlanFeatureRow = {
    name: string
    starterIncluded?: boolean
    proIncluded?: boolean
    ultimateIncluded?: boolean
    starterString?: string
    proString?: string
    ultimateString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Content & Community",
      header: true,
    },
    {
      name: "Daily blog articles",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Weekly newsletter",
      starterString: "1x per week",
      proString: "3x per week",
      ultimateString: "3x per week + exclusive",
    },
    {
      name: "Save & bookmark articles",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Premium video content",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Planning & Tracking Tools",
      header: true,
    },
    {
      name: "Basic meal plans & workout PDFs",
      starterIncluded: true,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Interactive meal planner",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Workout tracker",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Progress dashboard",
      starterIncluded: false,
      proIncluded: true,
      ultimateIncluded: true,
    },
    {
      name: "Personalized PDF reports",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Advanced Features",
      header: true,
    },
    {
      name: "Custom goal setting",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Deep-dive courses",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Priority content requests",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
    {
      name: "Early beta access",
      starterIncluded: false,
      proIncluded: false,
      ultimateIncluded: true,
    },
  ]
</script>

<svelte:head>
  <title>Pricing - {WebsiteName}</title>
  <meta name="description" content="Transform your wellness journey with Driven Daily. Choose the perfect plan for your fitness, nutrition, and mindset goals." />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center font-heading">Choose Your Wellness Journey</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3 font-body">
    Progress, one day at a time. Select the plan that fits your goals.
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
    
    <!-- Features Explanation Section -->
    <div class="max-w-4xl mx-auto mt-16 mb-12">
      <h2 class="text-2xl font-bold text-center mb-8 font-heading">What You Get</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">📚 Bookmark & Save Articles</h3>
            <p class="text-gray-600 font-body">Save your favorite posts to revisit anytime from your profile dashboard.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">📊 Interactive Planning Tools</h3>
            <p class="text-gray-600 font-body">Plan your meals and workouts weekly on-site, track progress, and get simple feedback.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">🎥 Premium Video Content</h3>
            <p class="text-gray-600 font-body">Access curated workout sessions, guided meditations, and expert talks—streamed directly on the website.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">📈 Progress Dashboard</h3>
            <p class="text-gray-600 font-body">Visualize your daily/weekly streaks, articles read, workouts done, and more—keeping motivation high.</p>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">🎯 Custom Goal Setting</h3>
            <p class="text-gray-600 font-body">Set monthly health or habit goals; get nudged via in-site notifications and emails.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">🎓 Exclusive Courses</h3>
            <p class="text-gray-600 font-body">Deep dives into topics like "High-Protein Cooking," "Mindset Mastery," or "Beginner Strength Training," available only to Ultimate subscribers.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">📋 Personalized Reports</h3>
            <p class="text-gray-600 font-body">Generate monthly reports summarizing your activity, achievements, and next steps — great for accountability.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2 text-primary font-heading">⚡ Priority Access</h3>
            <p class="text-gray-600 font-body">Request specific content topics and get early access to new features before anyone else.</p>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-2xl font-bold text-center mt-24 font-heading">Wellness FAQ</h1>
    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium font-heading">
            Can I cancel my subscription anytime?
          </div>
          <div class="collapse-content">
            <p class="font-body">Yes! You can cancel your subscription at any time from your account dashboard. Your access will continue until the end of your current billing period.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium font-heading">
            Is there a free trial available?
          </div>
          <div class="collapse-content">
            <p class="font-body">
              We offer a 7-day free trial for all plans so you can explore the full Driven Daily experience. No credit card required to start.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium font-heading">
            What makes Driven Daily different from other wellness apps?
          </div>
          <div class="collapse-content">
            <p class="font-body">
              We focus on small, sustainable daily habits rather than extreme transformations. Our content is practical, science-backed, and designed to fit into your real life—no complicated meal prep or 2-hour workouts required.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium font-heading">
            Do you offer student or family discounts?
          </div>
          <div class="collapse-content">
            <p class="font-body">
              Yes! We offer 50% student discounts with valid ID verification. Family plans (2+ members) get 30% off. <a href="/contact_us" class="link">Contact us</a> for more details.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium font-heading">
            Can I switch between plans?
          </div>
          <div class="collapse-content">
            <p class="font-body">
              Absolutely! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will take effect at your next billing cycle.
            </p>
          </div>
        </div>
      </div>
    </div>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol
          id="checkcircle"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
          />
        </symbol>
      </defs>
    </svg>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
          />
        </symbol>
      </defs>
    </svg>

    <h1 class="text-2xl font-bold text-center mt-16 font-heading">Plan Comparison</h1>
    <h2 class="text-xl text-center text-slate-500 mt-1 pb-3 font-body">
      See what's included in each plan
    </h2>

    <div class="overflow-visible mx-auto max-w-4xl mt-4">
      <table class="table">
        <thead
          class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur-sm"
        >
          <tr>
            <th class="font-heading"></th>
            <th class="text-center font-heading">Starter</th>
            <th class="text-center font-heading">Pro</th>
            <th class="text-center font-heading">Ultimate</th>
          </tr>
        </thead>
        <tbody>
          {#each planFeatures as feature}
            {#if feature.header}
              <tr class="bg-base-200 font-bold">
                <td colspan="4" class="font-heading">{feature.name}</td>
              </tr>
            {:else}
              <tr class="relative">
                <td class="font-body">{feature.name}</td>
                <td class="text-center">
                  {#if feature.starterString}
                    <span class="font-body">{feature.starterString}</span>
                  {:else if feature.starterIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.proString}
                    <span class="font-body">{feature.proString}</span>
                  {:else if feature.proIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.ultimateString}
                    <span class="font-body">{feature.ultimateString}</span>
                  {:else if feature.ultimateIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
